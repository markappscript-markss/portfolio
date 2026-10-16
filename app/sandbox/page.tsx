"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import {
  Play,
  Pause,
  Upload,
  Code2,
  Sliders,
  RotateCcw,
  Check,
  Copy,
  Sparkles,
  Eye,
  Video,
  Maximize2,
  Layers,
  Compass,
  X
} from 'lucide-react';

interface TabletConfig {
  width: number;
  height: number;
  depth: number;
  chassisRadius: number;
  screenRadius: number;
  bezelWidth: number;
  outlineColor: string;
  secondaryLineColor: string;
  outlineOpacity: number;
  floatSpeed: number;
  floatAmplitude: number;
  tiltAmplitude: number;
  showHardwareDetails: boolean;
  showCornerRibs: boolean;
  showCadGuides: boolean;
  xRayMode: boolean;
  interactiveOrbit: boolean;
}

const DEFAULT_CONFIG: TabletConfig = {
  width: 6.8,
  height: 4.75,
  depth: 0.24,
  chassisRadius: 0.27,
  screenRadius: 0.12,
  bezelWidth: 0.14,
  outlineColor: '#e2e8f0', // Titanium primary
  secondaryLineColor: '#64748b', // Titanium secondary
  outlineOpacity: 0.9,
  floatSpeed: 0.2,
  floatAmplitude: 0.05,
  tiltAmplitude: 0.032,
  showHardwareDetails: true,
  showCornerRibs: true,
  showCadGuides: false,
  xRayMode: true,
  interactiveOrbit: false,
};

/**
 * Creates a 2D THREE.Shape with rounded corners centered at (0, 0)
 */
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

/**
 * Generates a flat 3D mesh geometry with semi-curved corners and normalized [0, 1] UV coordinates
 * so video textures map seamlessly across the entire rounded screen.
 */
function createSemiCurvedScreenGeometry(
  width: number,
  height: number,
  radius: number,
  curveSegments = 18
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

  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * Extracts evenly spaced 3D points along a rounded rectangle perimeter at a given Z depth
 */
function getRoundedRectLoopPoints(
  width: number,
  height: number,
  radius: number,
  z: number,
  cornerSegments = 16
): THREE.Vector3[] {
  const shape = createRoundedRectShape(width, height, radius);
  const pts2d = shape.getPoints(cornerSegments);
  return pts2d.map((p) => new THREE.Vector3(p.x, p.y, z));
}

/**
 * Builds a closed THREE.LineLoop from 3D points
 */
function createLineLoopFromPoints(
  points: THREE.Vector3[],
  material: THREE.LineBasicMaterial
): THREE.LineLoop {
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.LineLoop(geo, material);
}

/**
 * Creates a wireframe 3D pill / rounded box for buttons and USB-C port outlines
 */
function createWireframeBox(
  w: number,
  h: number,
  d: number,
  material: THREE.LineBasicMaterial
): THREE.LineSegments {
  const box = new THREE.BoxGeometry(w, h, d);
  const edges = new THREE.EdgesGeometry(box);
  return new THREE.LineSegments(edges, material);
}

function generateStandaloneTSXCode(config: TabletConfig): string {
  return `import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface IPadAirOutlineProps {
  /** Path or URL to your video file (e.g., "/videos/lmsadm.webm") */
  videoSrc?: string;
  className?: string;
}

/**
 * 3D iPad Air (Outline Build) with Semi-Curved Screen Corners & Subtle Idle Float
 */
export const IPadAirOutline3D: React.FC<IPadAirOutlineProps> = ({
  videoSrc = '/videos/lmsadm.webm',
  className = 'w-full h-[600px]',
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 2. Video Element & Three.js VideoTexture
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.play().catch(() => {});

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;

    // 3. Helper: Rounded Rectangle Shape & Semi-Curved Screen Geometry
    const createRoundedShape = (w: number, h: number, r: number) => {
      const s = new THREE.Shape();
      const hw = w / 2, hh = h / 2;
      s.moveTo(-hw + r, -hh);
      s.lineTo(hw - r, -hh);
      s.absarc(hw - r, -hh + r, r, -Math.PI / 2, 0, false);
      s.lineTo(hw, hh - r);
      s.absarc(hw - r, hh - r, r, 0, Math.PI / 2, false);
      s.lineTo(-hw + r, hh);
      s.absarc(-hw + r, hh - r, r, Math.PI / 2, Math.PI, false);
      s.lineTo(-hw, -hh + r);
      s.absarc(-hw + r, -hh + r, r, Math.PI, (3 * Math.PI) / 2, false);
      return s;
    };

    const width = ${config.width};
    const height = ${config.height};
    const depth = ${config.depth};
    const chassisRadius = ${config.chassisRadius};
    const screenRadius = ${config.screenRadius};
    const screenW = width - ${config.bezelWidth * 2};
    const screenH = height - ${config.bezelWidth * 2};

    const tabletGroup = new THREE.Group();
    scene.add(tabletGroup);

    // 4. Semi-Curved Screen Mesh with normalized [0..1] UVs
    const screenShape = createRoundedShape(screenW, screenH, screenRadius);
    const screenGeo = new THREE.ShapeGeometry(screenShape, 18);
    const pos = screenGeo.attributes.position;
    const uvs = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uvs[i * 2] = (pos.getX(i) + screenW / 2) / screenW;
      uvs[i * 2 + 1] = (pos.getY(i) + screenH / 2) / screenH;
    }
    screenGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    const screenMat = new THREE.MeshBasicMaterial({ map: videoTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = depth / 2 + 0.004;
    tabletGroup.add(screenMesh);

    // 5. iPad Air Outline Chassis Contours
    const lineMat = new THREE.LineBasicMaterial({
      color: '${config.outlineColor}',
      transparent: true,
      opacity: ${config.outlineOpacity},
    });

    const addLoop = (w: number, h: number, r: number, z: number) => {
      const pts = createRoundedShape(w, h, r)
        .getPoints(18)
        .map((p) => new THREE.Vector3(p.x, p.y, z));
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      tabletGroup.add(new THREE.LineLoop(geo, lineMat));
      return pts;
    };

    const frontPts = addLoop(width, height, chassisRadius, depth / 2);
    const backPts = addLoop(width, height, chassisRadius, -depth / 2);
    addLoop(screenW, screenH, screenRadius, depth / 2 + 0.005);

    const ribVertices: THREE.Vector3[] = [];
    for (let i = 0; i < frontPts.length; i += 3) {
      ribVertices.push(frontPts[i], backPts[i]);
    }
    const ribGeo = new THREE.BufferGeometry().setFromPoints(ribVertices);
    tabletGroup.add(new THREE.LineSegments(ribGeo, lineMat));

    // 6. Subtle Idle Floating Animation Loop
    const clock = new THREE.Clock();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime() * ${config.floatSpeed};

      tabletGroup.position.y = Math.sin(t * 1.1) * ${config.floatAmplitude};
      tabletGroup.rotation.x = Math.sin(t * 0.85) * ${config.tiltAmplitude};
      tabletGroup.rotation.y = Math.cos(t * 0.65) * ${(config.tiltAmplitude * 1.3).toFixed(3)};
      tabletGroup.rotation.z = Math.sin(t * 0.5) * ${(config.tiltAmplitude * 0.35).toFixed(3)};

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      video.pause();
      videoTexture.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [videoSrc]);

  return <div ref={mountRef} className={className} />;
};`;
}

export default function SandboxPage() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [config, setConfig] = useState<TabletConfig>(DEFAULT_CONFIG);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoTime, setVideoTime] = useState<number>(0);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>('/videos/lmsadm.webm');
  const [customVideoName, setCustomVideoName] = useState<string>('lmsadm.webm');
  const [showControls, setShowControls] = useState<boolean>(true);
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isDraggingFile, setIsDraggingFile] = useState<boolean>(false);

  // Refs shared with the Three.js animation loop
  const configRef = useRef<TabletConfig>(config);
  configRef.current = config;

  const isPlayingRef = useRef<boolean>(isPlaying);
  isPlayingRef.current = isPlaying;

  const videoElRef = useRef<HTMLVideoElement | null>(null);
  const rebuildTabletRef = useRef<(() => void) | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Setup Three.js Scene, Camera, and Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Setup Video Texture with fallback handling
    let activeVideoTexture: THREE.VideoTexture | null = null;
    const vid = document.createElement('video');
    const targetSrc = customVideoUrl || '/videos/lmsadm.webm';
    vid.src = targetSrc;
    vid.crossOrigin = 'anonymous';
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.autoplay = true;

    vid.addEventListener('loadeddata', () => {
      vid.play().catch(() => {});
    });
    vid.play().catch(() => {});
    videoElRef.current = vid;

    activeVideoTexture = new THREE.VideoTexture(vid);
    activeVideoTexture.colorSpace = THREE.SRGBColorSpace;
    activeVideoTexture.minFilter = THREE.LinearFilter;
    activeVideoTexture.magFilter = THREE.LinearFilter;

    // 3. Root Group for the Floating iPad Air
    const tabletGroup = new THREE.Group();
    scene.add(tabletGroup);

    // Subtle floating shadow ring underneath tablet
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 64;
    const sCtx = shadowCanvas.getContext('2d')!;
    const grad = sCtx.createRadialGradient(128, 32, 4, 128, 32, 120);
    grad.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
    grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.08)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 256, 64);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 1.4), shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -2.95, 0);
    scene.add(shadowMesh);

    const buildTabletGeometry = () => {
      // Clear previous children
      while (tabletGroup.children.length > 0) {
        const child = tabletGroup.children[0] as THREE.Mesh;
        if (child.geometry) child.geometry.dispose();
        tabletGroup.remove(child);
      }

      const cfg = configRef.current;
      const w = cfg.width;
      const h = cfg.height;
      const d = cfg.depth;
      const r = cfg.chassisRadius;
      const screenW = Math.max(1, w - cfg.bezelWidth * 2);
      const screenH = Math.max(1, h - cfg.bezelWidth * 2);
      const sr = Math.min(cfg.screenRadius, screenW / 2, screenH / 2);

      // Materials for Outline Build
      const primaryLineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(cfg.outlineColor),
        transparent: true,
        opacity: cfg.outlineOpacity,
      });

      const secondaryLineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(cfg.secondaryLineColor),
        transparent: true,
        opacity: cfg.outlineOpacity * 0.55,
      });

      const subtleLineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(cfg.outlineColor),
        transparent: true,
        opacity: cfg.outlineOpacity * 0.32,
      });

      // A. Occlusion Core
      if (!cfg.xRayMode) {
        const occShape = createRoundedRectShape(w - 0.02, h - 0.02, r - 0.01);
        const occGeo = new THREE.ExtrudeGeometry(occShape, {
          depth: d - 0.01,
          bevelEnabled: false,
          curveSegments: 18,
        });
        occGeo.translate(0, 0, -(d - 0.01) / 2);
        const occMat = new THREE.MeshBasicMaterial({
          color: '#060911',
          polygonOffset: true,
          polygonOffsetFactor: 1,
          polygonOffsetUnits: 1,
        });
        tabletGroup.add(new THREE.Mesh(occGeo, occMat));
      }

      // B. Outer Chassis Loops
      const frontOuterPts = getRoundedRectLoopPoints(w, h, r, d / 2 - 0.02, 18);
      const frontChamferPts = getRoundedRectLoopPoints(w - 0.05, h - 0.05, r - 0.02, d / 2, 18);
      const backChamferPts = getRoundedRectLoopPoints(w - 0.05, h - 0.05, r - 0.02, -d / 2, 18);
      const backOuterPts = getRoundedRectLoopPoints(w, h, r, -d / 2 + 0.02, 18);

      tabletGroup.add(createLineLoopFromPoints(frontOuterPts, primaryLineMat));
      tabletGroup.add(createLineLoopFromPoints(frontChamferPts, primaryLineMat));
      tabletGroup.add(createLineLoopFromPoints(backChamferPts, secondaryLineMat));
      tabletGroup.add(createLineLoopFromPoints(backOuterPts, subtleLineMat));

      // Midline side rail contour
      const midRailPts = getRoundedRectLoopPoints(w + 0.004, h + 0.004, r, 0, 18);
      tabletGroup.add(createLineLoopFromPoints(midRailPts, subtleLineMat));

      // C. Corner & Edge Ribs
      if (cfg.showCornerRibs) {
        const ribPoints: THREE.Vector3[] = [];
        for (let i = 0; i < frontOuterPts.length; i += 2) {
          ribPoints.push(frontOuterPts[i], backOuterPts[i]);
          ribPoints.push(frontChamferPts[i], frontOuterPts[i]);
          ribPoints.push(backChamferPts[i], backOuterPts[i]);
        }
        const ribGeo = new THREE.BufferGeometry().setFromPoints(ribPoints);
        tabletGroup.add(new THREE.LineSegments(ribGeo, subtleLineMat));
      }

      // D. Semi-Curved Screen Mesh + Crisp Screen Bezel Outline
      const screenGeo = createSemiCurvedScreenGeometry(screenW, screenH, sr, 20);
      const screenMat = new THREE.MeshBasicMaterial({
        map: activeVideoTexture,
        toneMapped: false,
      });
      const screenMesh = new THREE.Mesh(screenGeo, screenMat);
      screenMesh.position.z = d / 2 + 0.003;
      tabletGroup.add(screenMesh);

      // Inner Semi-Curved Screen Frame Outline
      const screenBorderPts = getRoundedRectLoopPoints(screenW, screenH, sr, d / 2 + 0.006, 20);
      tabletGroup.add(createLineLoopFromPoints(screenBorderPts, primaryLineMat));

      // Second hair-line inner bezel offset
      const innerRimPts = getRoundedRectLoopPoints(
        screenW + 0.04,
        screenH + 0.04,
        sr + 0.02,
        d / 2 + 0.004,
        20
      );
      tabletGroup.add(createLineLoopFromPoints(innerRimPts, secondaryLineMat));

      // E. iPad Air Hardware Details
      if (cfg.showHardwareDetails) {
        const camY = h / 2 - cfg.bezelWidth / 2;
        const camZ = d / 2 + 0.005;

        const camOuterRing = new THREE.RingGeometry(0.032, 0.042, 24);
        const camOuterMesh = new THREE.Mesh(
          camOuterRing,
          new THREE.MeshBasicMaterial({
            color: cfg.outlineColor,
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
            color: cfg.secondaryLineColor,
            side: THREE.DoubleSide,
          })
        );
        camInnerMesh.position.set(0, camY, camZ);
        tabletGroup.add(camInnerMesh);

        const micRing = new THREE.RingGeometry(0.008, 0.014, 12);
        const micMesh = new THREE.Mesh(
          micRing,
          new THREE.MeshBasicMaterial({ color: cfg.outlineColor })
        );
        micMesh.position.set(0.18, camY, camZ);
        tabletGroup.add(micMesh);

        const vol1 = createWireframeBox(0.32, 0.035, 0.07, primaryLineMat);
        vol1.position.set(-w / 2 + 0.78, h / 2 + 0.016, 0);
        tabletGroup.add(vol1);

        const vol2 = createWireframeBox(0.32, 0.035, 0.07, primaryLineMat);
        vol2.position.set(-w / 2 + 1.18, h / 2 + 0.016, 0);
        tabletGroup.add(vol2);

        const powerBtn = createWireframeBox(0.035, 0.36, 0.08, primaryLineMat);
        powerBtn.position.set(-w / 2 - 0.016, h / 2 - 0.72, 0);
        tabletGroup.add(powerBtn);

        const usbcOuter = createWireframeBox(0.02, 0.28, 0.085, primaryLineMat);
        usbcOuter.position.set(w / 2 + 0.005, 0, 0);
        tabletGroup.add(usbcOuter);

        const usbcTongue = createWireframeBox(0.015, 0.18, 0.02, secondaryLineMat);
        usbcTongue.position.set(w / 2 + 0.005, 0, 0);
        tabletGroup.add(usbcTongue);

        const magStrip = createWireframeBox(0.85, 0.01, 0.06, subtleLineMat);
        magStrip.position.set(0, h / 2 + 0.002, 0);
        tabletGroup.add(magStrip);
      }

      // F. CAD Guides
      if (cfg.showCadGuides) {
        const cadPts: THREE.Vector3[] = [];
        const guideZ = d / 2 + 0.01;
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
          new THREE.Vector3(-w / 2, h / 2 + 0.12, 0),
          new THREE.Vector3(-w / 2, h / 2 + ext, 0),
          new THREE.Vector3(w / 2, h / 2 + 0.12, 0),
          new THREE.Vector3(w / 2, h / 2 + ext, 0),
          new THREE.Vector3(-w / 2, h / 2 + 0.2, 0),
          new THREE.Vector3(w / 2, h / 2 + 0.2, 0)
        );

        const cadGeo = new THREE.BufferGeometry().setFromPoints(cadPts);
        tabletGroup.add(new THREE.LineSegments(cadGeo, secondaryLineMat));
      }
    };

    buildTabletGeometry();
    rebuildTabletRef.current = buildTabletGeometry;

    // 4. Interactive Orbit / Drag State
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let userRotX = 0;
    let userRotY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!configRef.current.interactiveOrbit) return;
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !configRef.current.interactiveOrbit) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
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
    domElem.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    domElem.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 5. Animation Loop
    let lastFrameTime = performance.now();
    let elapsedFloatTime = 0;
    let reqId: number;
    let uiTimer = 0;

    const animate = (now: number) => {
      reqId = requestAnimationFrame(animate);
      const dt = Math.min(0.1, (now - lastFrameTime) / 1000);
      lastFrameTime = now;

      const cfg = configRef.current;
      elapsedFloatTime += dt * cfg.floatSpeed;

      const floatY = Math.sin(elapsedFloatTime * 1.15) * cfg.floatAmplitude;
      const idleRotX = Math.sin(elapsedFloatTime * 0.85) * cfg.tiltAmplitude;
      const idleRotY = Math.cos(elapsedFloatTime * 0.65) * (cfg.tiltAmplitude * 1.3);
      const idleRotZ = Math.sin(elapsedFloatTime * 0.5) * (cfg.tiltAmplitude * 0.35);

      if (!cfg.interactiveOrbit) {
        userRotX *= 0.92;
        userRotY *= 0.92;
      }

      tabletGroup.position.y = floatY;
      tabletGroup.rotation.x = idleRotX + userRotX;
      tabletGroup.rotation.y = idleRotY + userRotY;
      tabletGroup.rotation.z = idleRotZ;

      const shadowScale = 1 - floatY * 0.6;
      shadowMesh.scale.set(shadowScale, shadowScale, 1);

      if (videoElRef.current) {
        uiTimer += dt;
        if (uiTimer > 0.15) {
          setVideoTime(videoElRef.current.currentTime || 0);
          uiTimer = 0;
        }
      }

      renderer.render(scene, camera);
    };

    reqId = requestAnimationFrame(animate);

    // 6. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.position.z = w < 640 ? 13.8 : w < 1024 ? 11.6 : 10.4;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      domElem.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElem.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      if (activeVideoTexture) activeVideoTexture.dispose();
      vid.pause();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [customVideoUrl]);

  useEffect(() => {
    if (rebuildTabletRef.current) {
      rebuildTabletRef.current();
    }
  }, [
    config.width,
    config.height,
    config.depth,
    config.chassisRadius,
    config.screenRadius,
    config.bezelWidth,
    config.outlineColor,
    config.secondaryLineColor,
    config.outlineOpacity,
    config.showHardwareDetails,
    config.showCornerRibs,
    config.showCadGuides,
    config.xRayMode,
  ]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (videoElRef.current) {
        if (next) videoElRef.current.play().catch(() => {});
        else videoElRef.current.pause();
      }
      return next;
    });
  }, []);

  const handleVideoFileUpload = (file: File) => {
    if (!file || !file.type.startsWith('video/')) return;
    const url = URL.createObjectURL(file);
    setCustomVideoUrl(url);
    setCustomVideoName(file.name);
    setIsPlaying(true);
  };

  const handleCopyCode = () => {
    const code = generateStandaloneTSXCode(config);
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div
      className="relative w-full h-screen bg-[#050811] text-slate-100 overflow-hidden select-none font-sans flex flex-col"
      onDragOver={(e) => {
        e.preventDefault();
        setIsDraggingFile(true);
      }}
      onDragLeave={() => setIsDraggingFile(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDraggingFile(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleVideoFileUpload(file);
      }}
    >
      {/* Subtle Ambient Background Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.14) 0%, transparent 65%), linear-gradient(to right, rgba(30, 41, 59, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.35) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      {/* Top Sandbox Header Bar */}
      <header className="relative z-20 flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-inner">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-semibold tracking-tight text-white">
                iPad Air 3D — Outline Build
              </h1>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Three.js + TSX
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Semi-curved corner screen (`r = {config.screenRadius.toFixed(2)}`) · Loaded video: <span className="text-sky-300 font-mono">/videos/lmsadm.webm</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleVideoFileUpload(file);
            }}
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition cursor-pointer"
            title="Load your local MP4/WebM video onto the 3D screen"
          >
            <Upload className="w-3.5 h-3.5 text-sky-400" />
            <span>Load Video File</span>
          </button>

          <button
            onClick={() =>
              setConfig((c) => ({ ...c, interactiveOrbit: !c.interactiveOrbit }))
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
              config.interactiveOrbit
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/50'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700/80'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden md:inline">
              {config.interactiveOrbit ? '3D Orbit Active (Drag)' : 'Facing Us (Locked)'}
            </span>
          </button>

          <button
            onClick={() => setShowControls((s) => !s)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
              showControls
                ? 'bg-slate-800 text-white border-slate-600'
                : 'bg-slate-900 text-slate-300 border-slate-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inspector</span>
          </button>

          <button
            onClick={() => setShowCodeModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20 transition cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Export .TSX</span>
          </button>
        </div>
      </header>

      {/* Main 3D Viewport Area */}
      <div className="relative flex-1 w-full overflow-hidden">
        {/* Three.js Canvas Mount */}
        <div
          ref={mountRef}
          className={`w-full h-full ${
            config.interactiveOrbit ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
          }`}
        />

        {/* Drag & Drop Video Overlay */}
        {isDraggingFile && (
          <div className="absolute inset-4 z-40 rounded-2xl bg-sky-950/80 backdrop-blur-md border-2 border-dashed border-sky-400 flex flex-col items-center justify-center gap-3">
            <Video className="w-12 h-12 text-sky-400 animate-bounce" />
            <p className="text-lg font-semibold text-white">
              Drop your video file to map onto the 3D iPad Air screen
            </p>
            <p className="text-xs text-sky-300">Supports .mp4, .webm, .mov</p>
          </div>
        )}

        {/* Bottom Floating Video Scrubber & Status Pill */}
        <div className="
          absolute bottom-5 left-1/2 -translate-x-1/2 z-20
          flex items-center gap-3 px-4 py-2.5 rounded-2xl
          bg-slate-950/85 backdrop-blur-md border border-slate-800/90 shadow-2xl
          max-w-[92vw] sm:max-w-xl w-full
        ">
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 flex items-center justify-center text-sky-400 transition shrink-0 cursor-pointer"
            title={isPlaying ? 'Pause Video' : 'Play Video'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span className="truncate font-medium text-slate-200">{customVideoName}</span>
              <span className="font-mono text-sky-400 shrink-0 ml-2">
                {formatTime(videoTime)}
              </span>
            </div>

            <div className="w-full h-1.5 bg-slate-800 rounded-lg overflow-hidden">
              <div
                className="h-full bg-sky-400 transition-all duration-150"
                style={{
                  width: videoElRef.current && videoElRef.current.duration
                    ? `${(videoTime / videoElRef.current.duration) * 100}%`
                    : '100%',
                }}
              />
            </div>
          </div>

          <button
            onClick={() => {
              setCustomVideoUrl('/videos/lmsadm.webm');
              setCustomVideoName('lmsadm.webm');
            }}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 shrink-0 cursor-pointer"
          >
            Reset Default
          </button>
        </div>

        {/* Floating Inspector Panel */}
        {showControls && (
          <aside className="
            absolute top-4 right-4 z-30 w-80 max-h-[calc(100%-6rem)]
            overflow-y-auto rounded-2xl bg-slate-950/90 backdrop-blur-xl
            border border-slate-800/90 p-4 shadow-2xl space-y-4
          ">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Outline & Screen Controls
                </h2>
              </div>
              <button
                onClick={() => setConfig(DEFAULT_CONFIG)}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition cursor-pointer"
                title="Reset to defaults"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Color Theme Presets */}
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-2">
                Outline Blueprint Theme
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { name: 'Cyan CAD', p: '#38bdf8', s: '#10b981' },
                  { name: 'LMS Green', p: '#34d399', s: '#3b82f6' },
                  { name: 'Titanium', p: '#e2e8f0', s: '#64748b' },
                  { name: 'Indigo', p: '#818cf8', s: '#c084fc' },
                ].map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() =>
                      setConfig((c) => ({
                        ...c,
                        outlineColor: preset.p,
                        secondaryLineColor: preset.s,
                      }))
                    }
                    className={`px-2 py-1.5 rounded-lg text-[11px] font-medium border transition flex flex-col items-center gap-1 cursor-pointer ${
                      config.outlineColor === preset.p
                        ? 'bg-slate-800/90 border-sky-400 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: preset.p }}
                    />
                    <span>{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Semi-Curved Screen Corner Radius */}
            <div className="space-y-3 pt-1">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Screen Corner Curvature</span>
                  <span className="font-mono text-sky-400">{config.screenRadius.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0.04}
                  max={0.45}
                  step={0.01}
                  value={config.screenRadius}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, screenRadius: parseFloat(e.target.value) }))
                  }
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Outer Chassis Radius</span>
                  <span className="font-mono text-sky-400">{config.chassisRadius.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0.12}
                  max={0.65}
                  step={0.01}
                  value={config.chassisRadius}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, chassisRadius: parseFloat(e.target.value) }))
                  }
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Bezel Thickness</span>
                  <span className="font-mono text-sky-400">{config.bezelWidth.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0.14}
                  max={0.45}
                  step={0.01}
                  value={config.bezelWidth}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, bezelWidth: parseFloat(e.target.value) }))
                  }
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>
            </div>

            {/* Subtle Idle Floating Controls */}
            <div className="space-y-3 border-t border-slate-800/80 pt-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Subtle Idle Floating
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Float Speed</span>
                  <span className="font-mono text-emerald-400">{config.floatSpeed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={2.5}
                  step={0.1}
                  value={config.floatSpeed}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, floatSpeed: parseFloat(e.target.value) }))
                  }
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Vertical Float Amplitude</span>
                  <span className="font-mono text-emerald-400">{config.floatAmplitude.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={0.25}
                  step={0.01}
                  value={config.floatAmplitude}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, floatAmplitude: parseFloat(e.target.value) }))
                  }
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Subtle 3D Breathing Tilt</span>
                  <span className="font-mono text-emerald-400">{config.tiltAmplitude.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={0.1}
                  step={0.004}
                  value={config.tiltAmplitude}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, tiltAmplitude: parseFloat(e.target.value) }))
                  }
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
            </div>

            {/* Detail Layer Toggles */}
            <div className="space-y-2 border-t border-slate-800/80 pt-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Outline Construction Layers
              </div>

              {[
                {
                  key: 'showHardwareDetails',
                  label: 'Buttons, Camera & USB-C Outlines',
                },
                {
                  key: 'showCornerRibs',
                  label: 'Corner Bevel Wireframe Ribs',
                },
                {
                  key: 'showCadGuides',
                  label: 'CAD Radius Crosshairs & Guides',
                },
                {
                  key: 'xRayMode',
                  label: 'X-Ray Rear Wireframe Pass-through',
                },
              ].map((item) => {
                const active = Boolean(config[item.key as keyof TabletConfig]);
                return (
                  <label
                    key={item.key}
                    className="flex items-center justify-between text-xs text-slate-300 py-1 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={(e) =>
                        setConfig((c) => ({ ...c, [item.key]: e.target.checked }))
                      }
                      className="rounded bg-slate-800 border-slate-700 text-sky-500 focus:ring-0 cursor-pointer"
                    />
                  </label>
                );
              })}
            </div>
          </aside>
        )}
      </div>

      {/* Code Export Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-semibold text-white">
                  IPadAirOutline3D.tsx — Standalone Component
                </h3>
                <p className="text-xs text-slate-400">
                  Ready to drop into your React / Next.js project with your current curvature & float settings
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied TSX!' : 'Copy Code'}</span>
                </button>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <pre className="p-5 text-xs font-mono text-sky-200 overflow-y-auto leading-relaxed bg-[#070a12]">
              <code>{generateStandaloneTSXCode(config)}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
