"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface TabletOutline3DProps {
  videoSrc?: string;
  className?: string;
  active?: boolean;
  interactiveOrbit?: boolean;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  outlineColor?: string;
  secondaryLineColor?: string;
  screenRadius?: number;
  chassisRadius?: number;
  bezelWidth?: number;
  floatSpeed?: number;
  floatAmplitude?: number;
  tiltAmplitude?: number;
  xRayMode?: boolean;
  showHardwareDetails?: boolean;
  showCornerRibs?: boolean;
  showCadGuides?: boolean;
  showFloorShadow?: boolean;
}

function createRoundedRectShape(width: number, height: number, radius: number): THREE.Shape {
  const shape = new THREE.Shape();
  const w = width / 2;
  const h = height / 2;
  const r = Math.min(radius, w, h);

  shape.moveTo(-w + r, -h);
  shape.lineTo(w - r, -h);
  shape.absarc(w - r, -h + r, r, -Math.PI / 2, 0, false);
  shape.lineTo(w, h - r);
  shape.absarc(w - r, h - r, r, 0, Math.PI / 2, false);
  shape.lineTo(-w + r, h);
  shape.absarc(-w + r, h - r, r, Math.PI / 2, Math.PI, false);
  shape.lineTo(-w, -h + r);
  shape.absarc(-w + r, -h + r, r, Math.PI, (3 * Math.PI) / 2, false);

  return shape;
}

function createSemiCurvedScreenGeometry(
  width: number,
  height: number,
  radius: number,
  curveSegments = 20
): THREE.ShapeGeometry {
  const shape = createRoundedRectShape(width, height, radius);
  const geometry = new THREE.ShapeGeometry(shape, curveSegments);

  const pos = geometry.attributes.position;
  const uvs = new Float32Array(pos.count * 2);

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    uvs[i * 2] = (x + width / 2) / width;
    uvs[i * 2 + 1] = (y + height / 2) / height;
  }

  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();
  return geometry;
}

function getRoundedRectLoopPoints(
  width: number,
  height: number,
  radius: number,
  z: number,
  cornerSegments = 18
): THREE.Vector3[] {
  const w = width / 2;
  const h = height / 2;
  const r = Math.min(radius, w, h);
  const arcSegs = Math.max(32, cornerSegments * 2);
  const edgeSegs = 6;

  const corners: [number, number, number][] = [
    [w - r, -h + r, -Math.PI / 2],
    [w - r, h - r, 0],
    [-w + r, h - r, Math.PI / 2],
    [-w + r, -h + r, Math.PI],
  ];

  const pts: THREE.Vector3[] = [];
  corners.forEach(([cx, cy, a0], ci) => {
    for (let i = 0; i <= arcSegs; i++) {
      const a = a0 + (i / arcSegs) * (Math.PI / 2);
      pts.push(new THREE.Vector3(cx + r * Math.cos(a), cy + r * Math.sin(a), z));
    }
    const [ncx, ncy, na0] = corners[(ci + 1) % 4];
    const endX = cx + r * Math.cos(a0 + Math.PI / 2);
    const endY = cy + r * Math.sin(a0 + Math.PI / 2);
    const nextX = ncx + r * Math.cos(na0);
    const nextY = ncy + r * Math.sin(na0);
    for (let k = 1; k < edgeSegs; k++) {
      const t = k / edgeSegs;
      pts.push(new THREE.Vector3(endX + (nextX - endX) * t, endY + (nextY - endY) * t, z));
    }
  });
  return pts;
}

interface LineStyle {
  mat: THREE.MeshBasicMaterial;
  rad: number;
}

const LINE_BG_COLOR = new THREE.Color("#0f172a");

function createLineStyle(color: THREE.ColorRepresentation, strength: number, rad: number): LineStyle {
  const c = LINE_BG_COLOR.clone().lerp(new THREE.Color(color), strength);
  return {
    mat: new THREE.MeshBasicMaterial({ color: c }),
    rad,
  };
}

function createLineLoopFromPoints(points: THREE.Vector3[], style: LineStyle): THREE.Mesh {
  const curve = new THREE.CatmullRomCurve3(points, true, "centripetal");
  const geo = new THREE.TubeGeometry(curve, points.length * 2, style.rad, 8, true);
  return new THREE.Mesh(geo, style.mat);
}

function createSegmentMesh(a: THREE.Vector3, b: THREE.Vector3, style: LineStyle): THREE.Mesh {
  const geo = new THREE.TubeGeometry(new THREE.LineCurve3(a, b), 1, style.rad, 5, false);
  return new THREE.Mesh(geo, style.mat);
}

function createSegmentsGroup(points: THREE.Vector3[], style: LineStyle): THREE.Group {
  const group = new THREE.Group();
  for (let i = 0; i + 1 < points.length; i += 2) {
    group.add(createSegmentMesh(points[i], points[i + 1], style));
  }
  return group;
}

function createWireframeBox(w: number, h: number, d: number, style: LineStyle): THREE.Group {
  const box = new THREE.BoxGeometry(w, h, d);
  const edges = new THREE.EdgesGeometry(box);
  const pos = edges.attributes.position;
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < pos.count; i++) {
    pts.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)));
  }
  box.dispose();
  edges.dispose();
  return createSegmentsGroup(pts, style);
}

export default function TabletOutline3D({
  videoSrc = "/videos/lmsadm.webm",
  className = "w-full h-full relative",
  active = true,
  interactiveOrbit = false,
  scale = 1,
  offsetX = 0,
  offsetY = 0,
  outlineColor = "#e2e8f0",
  secondaryLineColor = "#64748b",
  screenRadius = 0.12,
  chassisRadius = 0.27,
  bezelWidth = 0.14,
  floatSpeed = 0.2,
  floatAmplitude = 0.03,
  tiltAmplitude = 0.015,
  xRayMode = true,
  showHardwareDetails = true,
  showCornerRibs = false,
  showCadGuides = false,
  showFloorShadow = false,
}: TabletOutline3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;
  const startRef = useRef<() => void>(() => {});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / (container.clientHeight || 1),
      0.5,
      60
    );
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    videoRef.current = video;

    const tryPlay = () => {
      if (activeRef.current) {
        if (video.currentTime > 0.05 && video.paused) {
        }
        video.play().catch(() => {});
      }
    };

    const primeVideo = () => {
      if (video.readyState >= 2) {
        const p = video.play();
        if (p) {
          p.then(() => {
            if (!activeRef.current) {
              video.pause();
              video.currentTime = 0;
            }
          }).catch(() => {});
        }
      }
    };
    if (video.readyState >= 4) {
      primeVideo();
    } else {
      video.addEventListener("canplaythrough", primeVideo, { once: true });
    }

    video.addEventListener("loadeddata", tryPlay);
    tryPlay();

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.generateMipmaps = false;
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;

    const tabletGroup = new THREE.Group();
    tabletGroup.scale.set(scale, scale, scale);
    tabletGroup.position.set(offsetX, offsetY, 0);
    scene.add(tabletGroup);

    let shadowMesh: THREE.Mesh | null = null;
    if (showFloorShadow) {
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 256;
      shadowCanvas.height = 64;
      const sCtx = shadowCanvas.getContext("2d")!;
      const grad = sCtx.createRadialGradient(128, 32, 4, 128, 32, 120);
      grad.addColorStop(0, "rgba(226, 232, 240, 0.18)");
      grad.addColorStop(0.5, "rgba(100, 116, 139, 0.08)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 64);

      const shadowTex = new THREE.CanvasTexture(shadowCanvas);
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        depthWrite: false,
      });
      shadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 1.4), shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.set(offsetX, offsetY - 2.95 * scale, 0);
      scene.add(shadowMesh);
    }

    const width = 6.8;
    const height = 4.75;
    const depth = 0.24;
    const screenW = Math.max(1, width - bezelWidth * 2);
    const screenH = Math.max(1, height - bezelWidth * 2);
    const sr = Math.min(screenRadius, screenW / 2, screenH / 2);

    const primaryLineMat = createLineStyle(outlineColor, 1, 0.0085);
    const secondaryLineMat = createLineStyle(secondaryLineColor, 0.85, 0.0065);
    const subtleLineMat = createLineStyle(outlineColor, 0.4, 0.006);

    if (xRayMode) {
      const glassShape = createRoundedRectShape(width - 0.02, height - 0.02, chassisRadius - 0.01);
      const glassGeo = new THREE.ShapeGeometry(glassShape, 20);
      const rearGlassMat = new THREE.MeshBasicMaterial({
        color: "#111827",
        transparent: true,
        opacity: 0.28,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const rearGlassMesh = new THREE.Mesh(glassGeo, rearGlassMat);
      rearGlassMesh.position.z = -depth / 2 + 0.005;
      tabletGroup.add(rearGlassMesh);

      const frontGlassMat = new THREE.MeshBasicMaterial({
        color: "#38bdf8",
        transparent: true,
        opacity: 0.035,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const frontGlassMesh = new THREE.Mesh(glassGeo, frontGlassMat);
      frontGlassMesh.position.z = depth / 2 - 0.005;
      tabletGroup.add(frontGlassMesh);
    } else {
      const occShape = createRoundedRectShape(width - 0.02, height - 0.02, chassisRadius - 0.01);
      const occGeo = new THREE.ExtrudeGeometry(occShape, {
        depth: depth - 0.01,
        bevelEnabled: false,
        curveSegments: 18,
      });
      occGeo.translate(0, 0, -(depth - 0.01) / 2);
      const occMat = new THREE.MeshBasicMaterial({
        color: "#060911",
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      });
      tabletGroup.add(new THREE.Mesh(occGeo, occMat));
    }

    const frontOuterPts = getRoundedRectLoopPoints(width, height, chassisRadius, depth / 2 - 0.02, 18);
    const frontChamferPts = getRoundedRectLoopPoints(width - 0.05, height - 0.05, chassisRadius - 0.02, depth / 2, 18);
    const backChamferPts = getRoundedRectLoopPoints(width - 0.05, height - 0.05, chassisRadius - 0.02, -depth / 2, 18);
    const backOuterPts = getRoundedRectLoopPoints(width, height, chassisRadius, -depth / 2 + 0.02, 18);

    tabletGroup.add(createLineLoopFromPoints(frontOuterPts, primaryLineMat));
    tabletGroup.add(createLineLoopFromPoints(frontChamferPts, primaryLineMat));

    const rearMat = createLineStyle(secondaryLineColor, xRayMode ? 0.5 : 0.85, 0.006);
    tabletGroup.add(createLineLoopFromPoints(backChamferPts, rearMat));

    if (!xRayMode) {
      tabletGroup.add(createLineLoopFromPoints(backOuterPts, subtleLineMat));
    }

    const midRailPts = getRoundedRectLoopPoints(width + 0.004, height + 0.004, chassisRadius, 0, 18);
    tabletGroup.add(createLineLoopFromPoints(midRailPts, subtleLineMat));

    if (showCornerRibs) {
      const ribPoints: THREE.Vector3[] = [];
      for (let i = 0; i < frontOuterPts.length; i += 2) {
        ribPoints.push(frontOuterPts[i], backOuterPts[i]);
        ribPoints.push(frontChamferPts[i], frontOuterPts[i]);
        ribPoints.push(backChamferPts[i], backOuterPts[i]);
      }
      tabletGroup.add(createSegmentsGroup(ribPoints, subtleLineMat));
    }

    const screenGeo = createSemiCurvedScreenGeometry(screenW, screenH, sr, 20);
    const screenMat = new THREE.MeshBasicMaterial({
      map: videoTexture,
      toneMapped: false,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = depth / 2 + 0.003;
    tabletGroup.add(screenMesh);

    const screenBorderPts = getRoundedRectLoopPoints(screenW, screenH, sr, depth / 2 + 0.006, 20);
    tabletGroup.add(createLineLoopFromPoints(screenBorderPts, primaryLineMat));

    if (!xRayMode) {
      const innerRimPts = getRoundedRectLoopPoints(screenW + 0.04, screenH + 0.04, sr + 0.02, depth / 2 + 0.004, 20);
      tabletGroup.add(createLineLoopFromPoints(innerRimPts, secondaryLineMat));
    }

    if (showHardwareDetails) {
      const camY = height / 2 - bezelWidth / 2;
      const camZ = depth / 2 + 0.005;

      const camOuterRing = new THREE.RingGeometry(0.032, 0.042, 24);
      const camOuterMesh = new THREE.Mesh(
        camOuterRing,
        new THREE.MeshBasicMaterial({
          color: outlineColor,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.85,
        })
      );
      camOuterMesh.position.set(0, camY, camZ);
      tabletGroup.add(camOuterMesh);

      const camInnerRing = new THREE.RingGeometry(0.012, 0.018, 16);
      const camInnerMesh = new THREE.Mesh(
        camInnerRing,
        new THREE.MeshBasicMaterial({
          color: secondaryLineColor,
          side: THREE.DoubleSide,
        })
      );
      camInnerMesh.position.set(0, camY, camZ);
      tabletGroup.add(camInnerMesh);

      const micRing = new THREE.RingGeometry(0.008, 0.014, 12);
      const micMesh = new THREE.Mesh(micRing, new THREE.MeshBasicMaterial({ color: outlineColor }));
      micMesh.position.set(0.18, camY, camZ);
      tabletGroup.add(micMesh);

      const vol1 = createWireframeBox(0.32, 0.035, 0.07, primaryLineMat);
      vol1.position.set(-width / 2 + 0.78, height / 2 + 0.016, 0);
      tabletGroup.add(vol1);

      const vol2 = createWireframeBox(0.32, 0.035, 0.07, primaryLineMat);
      vol2.position.set(-width / 2 + 1.18, height / 2 + 0.016, 0);
      tabletGroup.add(vol2);

      const powerBtn = createWireframeBox(0.035, 0.36, 0.08, primaryLineMat);
      powerBtn.position.set(-width / 2 - 0.016, height / 2 - 0.72, 0);
      tabletGroup.add(powerBtn);

      const usbcOuter = createWireframeBox(0.02, 0.28, 0.085, primaryLineMat);
      usbcOuter.position.set(width / 2 + 0.005, 0, 0);
      tabletGroup.add(usbcOuter);
    }

    if (showCadGuides) {
      const cadPts: THREE.Vector3[] = [];
      const guideZ = depth / 2 + 0.01;
      const ext = 0.28;
      const cx = screenW / 2 - sr;
      const cy = screenH / 2 - sr;
      const corners = [
        [cx, cy],
        [-cx, cy],
        [cx, -cy],
        [-cx, -cy],
      ];
      corners.forEach(([x, y]) => {
        cadPts.push(
          new THREE.Vector3(x - 0.08, y, guideZ),
          new THREE.Vector3(x + 0.08, y, guideZ),
          new THREE.Vector3(x, y - 0.08, guideZ),
          new THREE.Vector3(x, y + 0.08, guideZ)
        );
      });
      cadPts.push(
        new THREE.Vector3(-width / 2, height / 2 + 0.12, 0),
        new THREE.Vector3(-width / 2, height / 2 + ext, 0),
        new THREE.Vector3(width / 2, height / 2 + 0.12, 0),
        new THREE.Vector3(width / 2, height / 2 + ext, 0),
        new THREE.Vector3(-width / 2, height / 2 + 0.2, 0),
        new THREE.Vector3(width / 2, height / 2 + 0.2, 0)
      );
      tabletGroup.add(createSegmentsGroup(cadPts, secondaryLineMat));
    }

    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let userRotX = 0;
    let userRotY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactiveOrbit) return;
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !interactiveOrbit) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      userRotY += (clientX - prevX) * 0.007;
      userRotX += (clientY - prevY) * 0.007;
      userRotX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, userRotX));
      prevX = clientX;
      prevY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    if (interactiveOrbit) {
      domElem.addEventListener("mousedown", onPointerDown);
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("mouseup", onPointerUp);
      domElem.addEventListener("touchstart", onPointerDown, { passive: true });
      window.addEventListener("touchmove", onPointerMove, { passive: true });
      window.addEventListener("touchend", onPointerUp);
    }

    let lastFrameTime = performance.now();
    let elapsedFloatTime = 0;
    let reqId: number;

    const animate = (now: number) => {
      if (!activeRef.current) return;
      reqId = requestAnimationFrame(animate);

      const dt = Math.min(0.1, (now - lastFrameTime) / 1000);
      if (!container.clientWidth || container.clientHeight <= 0) return;

      lastFrameTime = now;
      elapsedFloatTime += dt * floatSpeed;

      const floatY = Math.sin(elapsedFloatTime * 1.15) * floatAmplitude;
      const idleRotX = Math.sin(elapsedFloatTime * 0.85) * tiltAmplitude;
      const idleRotY = Math.cos(elapsedFloatTime * 0.65) * (tiltAmplitude * 1.3);
      const idleRotZ = Math.sin(elapsedFloatTime * 0.5) * (tiltAmplitude * 0.35);

      if (!interactiveOrbit) {
        userRotX *= 0.92;
        userRotY *= 0.92;
      }

      tabletGroup.position.y = offsetY + floatY;
      tabletGroup.rotation.x = idleRotX + userRotX;
      tabletGroup.rotation.y = idleRotY + userRotY;
      tabletGroup.rotation.z = idleRotZ;

      if (shadowMesh) {
        const shadowScale = (1 - floatY * 0.6) * scale;
        shadowMesh.scale.set(shadowScale, shadowScale, 1);
      }

      renderer.render(scene, camera);
    };

    renderer.compile(scene, camera);
    renderer.render(scene, camera);

    reqId = requestAnimationFrame(animate);

    const updateSize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 1;
      const aspect = w / h;
      camera.aspect = aspect;

      const targetOccupancy = 0.94;
      const tabletW = 6.8 * scale;
      const tabletH = (4.75 + Math.abs(offsetY) * 2) * scale;
      const halfFovRad = THREE.MathUtils.degToRad(camera.fov / 2);

      const distH = (tabletH / targetOccupancy) / (2 * Math.tan(halfFovRad));
      const distW = (tabletW / targetOccupancy) / (2 * Math.tan(halfFovRad) * aspect);

      camera.position.z = Math.max(distH, distW);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    updateSize();

    const start = () => {
      cancelAnimationFrame(reqId);
      reqId = requestAnimationFrame(animate);
    };
    startRef.current = start;

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(reqId);
    };
    renderer.domElement.addEventListener("webglcontextlost", handleContextLost);

    if (active) {
      start();
    }

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => updateSize());
      resizeObserver.observe(container);
    }
    window.addEventListener("resize", updateSize);

    return () => {
      cancelAnimationFrame(reqId);
      renderer.domElement.removeEventListener("webglcontextlost", handleContextLost);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateSize);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplaythrough", primeVideo);
      if (interactiveOrbit) {
        domElem.removeEventListener("mousedown", onPointerDown);
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("mouseup", onPointerUp);
        domElem.removeEventListener("touchstart", onPointerDown);
        window.removeEventListener("touchmove", onPointerMove);
        window.removeEventListener("touchend", onPointerUp);
      }
      tabletGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) child.geometry.dispose();
      });
      videoTexture.dispose();
      video.pause();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    videoSrc,
    scale,
    offsetX,
    offsetY,
    outlineColor,
    secondaryLineColor,
    screenRadius,
    chassisRadius,
    bezelWidth,
    floatSpeed,
    floatAmplitude,
    tiltAmplitude,
    xRayMode,
    showHardwareDetails,
    showCornerRibs,
    showCadGuides,
    showFloorShadow,
    interactiveOrbit,
  ]);

  useEffect(() => {
    activeRef.current = active;
    if (active) {
      startRef.current?.();
    }
    if (videoRef.current) {
      if (active) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [active]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        cursor: interactiveOrbit ? "grab" : "default",
      }}
    />
  );
}
