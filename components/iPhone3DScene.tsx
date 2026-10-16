"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

interface IPhone3DSceneProps {
  videoSrc?: string;
  lineColor?: number;
  cropBlackBars?: boolean;
  zoom?: number;
  className?: string;
  autoPlayOnVisible?: boolean;
  triggerReveal?: boolean;
  phoneScale?: number;
  offsetY?: number;
  offsetX?: number;
  cameraFov?: number;
  interactive?: boolean;
}

const START = { x: 0, y: 0, z: 0 };
const END = { x: -0.26, y: 0.3, z: 0.2 };
const DELAY = 0;
const DUR = 2.9;
const FOCUS_X = 0.5;

const W = 2.12;
const H = 4.5;
const D = 0.24;
const R = 0.32;
const SW = 2.0;
const SH = SW / (9 / 19.5);
const SR = 0.26;
const FOV = 30;

function createRoundedRectShape(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  const p = Math.PI;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.absarc(x + w - r, y + r, r, -p / 2, 0);
  s.lineTo(x + w, y + h - r);
  s.absarc(x + w - r, y + h - r, r, 0, p / 2);
  s.lineTo(x + r, y + h);
  s.absarc(x + r, y + h - r, r, p / 2, p);
  s.lineTo(x, y + r);
  s.absarc(x + r, y + r, r, p, p * 1.5);
  return s;
}

export default function IPhone3DScene({
  videoSrc = "/images/iphone/ipon_smooth.webm",
  lineColor = 0xc4c9cf,
  cropBlackBars = true,
  zoom = 1.01,
  className = "w-full h-full relative",
  autoPlayOnVisible = true,
  triggerReveal = undefined,
  phoneScale = 1,
  offsetY = 0,
  offsetX = 0,
  cameraFov = 30,
  interactive = true,
}: IPhone3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const vtexRef = useRef<THREE.VideoTexture | null>(null);
  const t0Ref = useRef<number>(performance.now());
  const startYRef = useRef<number>(-8);
  const rafIdRef = useRef<number>(0);
  const cropRef = useRef<boolean>(cropBlackBars);
  const zoomRef = useRef<number>(zoom);
  const startAnimationRef = useRef<() => void>(() => {});
  const resetAnimationRef = useRef<() => void>(() => {});

  useEffect(() => {
    cropRef.current = cropBlackBars;
  }, [cropBlackBars]);

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  const updateFit = useCallback(() => {
    const video = videoRef.current;
    const vtex = vtexRef.current;
    if (!video || !vtex) return;

    const vw = video.videoWidth || 1080;
    const vh = video.videoHeight || 1920;
    const va = vw / vh;
    const sa = SW / SH;
    const currentZoom = zoomRef.current || 1.01;

    let rx = 1;
    let ry = 1;

    if (cropRef.current) {
      if (va > sa) {
        rx = (sa / va) / currentZoom;
        ry = 1 / currentZoom;
      } else {
        rx = 1 / currentZoom;
        ry = (va / sa) / currentZoom;
      }
    } else {
      if (va > sa) {
        ry = va / sa;
      } else {
        rx = sa / va;
      }
    }

    const ox = (1 - rx) * FOCUS_X;
    const oy = (1 - ry) * 0.5;

    vtex.repeat.set(rx, ry);
    vtex.offset.set(ox, oy);
    vtex.needsUpdate = true;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if ("outputColorSpace" in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      const a = w / h;
      renderer.setSize(w, h, false);

      const d = 12.2;
      const currentFov = cameraFov || FOV;
      camera.fov = currentFov;
      camera.aspect = a;
      camera.updateProjectionMatrix();
      camera.position.set(0, 0, d);
      camera.lookAt(0, 0, 0);

      startYRef.current = -(d * Math.tan(THREE.MathUtils.degToRad(currentFov / 2)) + 2.25 * phoneScale + 0.8);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    const phone = new THREE.Group();
    scene.add(phone);

    const shell = new THREE.Group();
    phone.add(shell);
    const lineMat = new THREE.MeshBasicMaterial({ color: lineColor });

    const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

    const tube = (points: THREE.Vector3[], rad: number) => {
      const curve = new THREE.CatmullRomCurve3(points, true, "centripetal");
      const geom = new THREE.TubeGeometry(curve, points.length * 2, rad, 5, true);
      const m = new THREE.Mesh(geom, lineMat);
      shell.add(m);
    };

    const loopRR = (w: number, h: number, r: number, z: number, rad: number) => {
      const p = createRoundedRectShape(w, h, r).getSpacedPoints(140);
      p.pop();
      tube(p.map((q) => V(q.x, q.y, z)), rad);
    };

    const circle = (r: number, cX: number, cY: number, z: number, rad: number) => {
      const a: THREE.Vector3[] = [];
      for (let i = 0; i < 40; i++) {
        const t = (i / 40) * Math.PI * 2;
        a.push(V(cX + r * Math.cos(t), cY + r * Math.sin(t), z));
      }
      tube(a, rad);
    };

    const segment = (a: THREE.Vector3, b: THREE.Vector3, rad: number) => {
      const geom = new THREE.TubeGeometry(new THREE.LineCurve3(a, b), 1, rad, 5, false);
      shell.add(new THREE.Mesh(geom, lineMat));
    };

    const sideButton = (side: number, yc: number, len: number) => {
      const x = side * (W / 2 + 0.02);
      const p = createRoundedRectShape(0.08, len, 0.035).getSpacedPoints(60);
      p.pop();
      tube(p.map((q) => V(x, yc + q.y, q.x)), 0.005);
    };

    loopRR(W, H, R, D / 2, 0.006);
    loopRR(W, H, R, -D / 2, 0.006);
    loopRR(SW, SH, SR, D / 2, 0.005);

    const cX = W / 2 - R;
    const cY = H / 2 - R;
    const corners = [
      [cX, H / 2],
      [-cX, H / 2],
      [cX, -H / 2],
      [-cX, -H / 2],
      [W / 2, cY],
      [-W / 2, cY],
      [W / 2, -cY],
      [-W / 2, -cY],
    ];
    corners.forEach(([x, y]) => {
      segment(V(x, y, D / 2), V(x, y, -D / 2), 0.006);
    });

    sideButton(1, 0.55, 0.85);
    sideButton(1, -0.75, 0.38);
    sideButton(-1, 1.15, 0.22);
    sideButton(-1, 0.7, 0.42);
    sideButton(-1, 0.15, 0.42);

    const bX = W / 2 - 0.72;
    const bY = H / 2 - 0.72;
    const bZ = -D / 2 - 0.025;
    loopRR(1.0, 1.0, 0.24, bZ, 0.005);

    const bump = (px: number, py: number, r: number, rad: number) => {
      circle(r, bX + px, bY + py, bZ - 0.006, rad);
    };
    bump(-0.22, 0.22, 0.17, 0.005);
    bump(-0.22, -0.22, 0.17, 0.005);
    bump(0.22, 0.0, 0.17, 0.005);
    bump(0.27, 0.34, 0.06, 0.004);
    bump(0.3, -0.32, 0.03, 0.004);

    const screenGeo = new THREE.ShapeGeometry(createRoundedRectShape(SW, SH, SR), 24);
    const pos = screenGeo.attributes.position;
    const uv = screenGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      uv.setXY(i, (pos.getX(i) + SW / 2) / SW, (pos.getY(i) + SH / 2) / SH);
    }

    const zs = D / 2 + 0.002;
    const base = new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
    base.position.z = zs;
    phone.add(base);

    const vtex = new THREE.VideoTexture(video);
    if ("colorSpace" in vtex) {
      vtex.colorSpace = THREE.SRGBColorSpace;
    }
    vtex.minFilter = THREE.LinearFilter;
    vtex.magFilter = THREE.LinearFilter;
    vtex.generateMipmaps = false;
    vtexRef.current = vtex;

    const vid = new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ map: vtex }));
    vid.position.z = zs + 0.001;
    phone.add(vid);

    updateFit();
    video.addEventListener("loadedmetadata", updateFit);
    video.addEventListener("canplay", updateFit);

    const sc = document.createElement("canvas");
    sc.width = 1024;
    sc.height = 1024;
    const sx = sc.getContext("2d");
    if (sx) {
      const g = sx.createLinearGradient(330, 380, 700, 650);
      g.addColorStop(0, "rgba(255,255,255,0)");
      g.addColorStop(0.42, "rgba(255,255,255,0)");
      g.addColorStop(0.5, "rgba(255,255,255,0.7)");
      g.addColorStop(0.58, "rgba(255,255,255,0)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      sx.fillStyle = g;
      sx.fillRect(0, 0, 1024, 1024);
    }
    const stex = new THREE.CanvasTexture(sc);
    stex.wrapS = THREE.RepeatWrapping;
    stex.wrapT = THREE.RepeatWrapping;
    const shineMat = new THREE.MeshBasicMaterial({
      map: stex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0,
    });
    const shine = new THREE.Mesh(screenGeo, shineMat);
    shine.position.z = zs + 0.002;
    phone.add(shine);

    let hasStartedAnimation = triggerReveal !== undefined ? !!triggerReveal : !autoPlayOnVisible;

    const startAnimation = () => {
      if (hasStartedAnimation) return;
      hasStartedAnimation = true;
      t0Ref.current = performance.now();
      if (video) {
        if (video.currentTime > 0.05) video.currentTime = 0;
        video.play().catch(() => {});
      }
    };
    startAnimationRef.current = startAnimation;

    const resetAnimation = () => {
      hasStartedAnimation = false;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
    resetAnimationRef.current = resetAnimation;

    const primeVideo = () => {
      if (hasStartedAnimation) return;
      const p = video.play();
      if (p) {
        p.then(() => {
          if (!hasStartedAnimation) {
            video.pause();
            video.currentTime = 0;
          }
        }).catch(() => {});
      }
    };
    if (video.readyState >= 4) {
      primeVideo();
    } else {
      video.addEventListener("canplaythrough", primeVideo, { once: true });
    }

    let observer: IntersectionObserver | null = null;
    if (triggerReveal !== undefined) {
      if (triggerReveal) {
        startAnimation();
      } else {
        resetAnimation();
      }
    } else if (autoPlayOnVisible && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(container);
    } else {
      startAnimation();
    }

    let hasFitted = false;

    const animate = (now: number) => {
      rafIdRef.current = requestAnimationFrame(animate);

      if (!container.clientWidth) return;

      if (!hasStartedAnimation) {
        phone.position.x = offsetX;
        phone.position.y = startYRef.current * phoneScale + offsetY;
        phone.scale.set(phoneScale, phoneScale, phoneScale);
        phone.rotation.set(START.x, START.y, START.z);
        shineMat.opacity = 0;
        renderer.render(scene, camera);
        return;
      }

      if (!hasFitted && video.videoWidth > 0) {
        updateFit();
        hasFitted = true;
      }

      const el = (now - t0Ref.current) / 1000;
      const p = Math.min(Math.max((el - DELAY) / DUR, 0), 1);
      const ePos = 1 - Math.pow(1 - p, 2.8);
      const eSpin = 1 - Math.pow(1 - p, 2.2);
      const on = p >= 1 ? Math.min((el - DELAY - DUR) / 0.8, 1) : 0;
      const idle = Math.sin(now / 1400) * on;

      phone.rotation.y = START.y + (Math.PI * 2 + END.y - START.y) * eSpin + idle * 0.01;
      phone.rotation.x = START.x + (END.x - START.x) * ePos + idle * 0.005;
      phone.rotation.z = START.z + (END.z - START.z) * ePos + idle * 0.007;
      phone.position.x = offsetX;
      phone.position.y = (startYRef.current * (1 - ePos) + idle * 0.015) * phoneScale + offsetY;
      phone.scale.set(phoneScale, phoneScale, phoneScale);

      const band = -0.4 + 1.1 * eSpin + idle * 0.05;
      stex.offset.x = 0.5 - band;
      shineMat.opacity = 0.15 + 0.75 * Math.sin(Math.PI * p);

      renderer.render(scene, camera);
    };

    renderer.compile(scene, camera);
    renderer.render(scene, camera);
    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      video.removeEventListener("loadedmetadata", updateFit);
      video.removeEventListener("canplaythrough", primeVideo);
      video.removeEventListener("canplay", updateFit);
      cancelAnimationFrame(rafIdRef.current);
      if (observer) {
        observer.disconnect();
      }

      vtex.dispose();
      stex.dispose();
      screenGeo.dispose();
      base.geometry.dispose();
      (base.material as THREE.Material).dispose();
      vid.geometry.dispose();
      (vid.material as THREE.Material).dispose();
      shine.geometry.dispose();
      shineMat.dispose();
      lineMat.dispose();

      shell.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [videoSrc, lineColor, updateFit, phoneScale, cameraFov]);

  useEffect(() => {
    updateFit();
  }, [cropBlackBars, updateFit]);

  useEffect(() => {
    if (triggerReveal) {
      startAnimationRef.current?.();
    } else if (triggerReveal === false) {
      resetAnimationRef.current?.();
    }
  }, [triggerReveal]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay={triggerReveal !== undefined ? !!triggerReveal : true}
        muted
        loop
        playsInline
        preload="auto"
        className="hidden"
      />
      <div
        ref={containerRef}
        className={`w-full h-full select-none ${interactive ? "cursor-pointer" : "pointer-events-none"}`}
        onClick={
          interactive
            ? () => {
                const v = videoRef.current;
                if (v && v.paused) {
                  v.play().catch(() => {});
                }
              }
            : undefined
        }
      />
    </div>
  );
}
