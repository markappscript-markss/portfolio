'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  srcA?: string;
  srcB?: string;
  background?: string;
  showReplay?: boolean;
  className?: string;
  scale?: number;
  onComplete?: () => void;
  active?: boolean;
};

const FOCUS_A = { x: 0.48, y: 0.5 };
const FOCUS_B = { x: 0.5, y: 0.48 };
const HOLD_START = 0.4;
const SPIN = 2.8;
const HOLD_END = 0.5;
const START = { x: 0, y: -0.17, z: -0.04 };
const END = { x: -0.08, y: 0.5, z: 0.14 };
const SCREEN_RADIUS = 0.09;

const W = 4.2;
const H = 3.24;
const R = 0.24;
const D = 0.1;
const SW = 3.84;
const SH = 2.88;

function roundedRect(w: number, h: number, r: number): THREE.Shape {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  const p = Math.PI;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.absarc(x + w - r, y + r, r, -p / 2, 0, false);
  s.lineTo(x + w, y + h - r);
  s.absarc(x + w - r, y + h - r, r, 0, p / 2, false);
  s.lineTo(x + r, y + h);
  s.absarc(x + r, y + h - r, r, p / 2, p, false);
  s.lineTo(x, y + r);
  s.absarc(x + r, y + r, r, p, p * 1.5, false);
  return s;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load ${src}`));
    img.src = src;
  });
}

function makeTexture(
  img: HTMLImageElement,
  focus: { x: number; y: number },
  maxAnisotropy: number
): THREE.CanvasTexture {
  const cw = 1536;
  const ch = 1152;
  const canvas = document.createElement('canvas');
  canvas.width = cw;
  canvas.height = ch;
  const iw = img.width;
  const ih = img.height;
  let sw: number;
  let sh: number;
  if (iw / ih < cw / ch) {
    sw = iw;
    sh = (iw * ch) / cw;
  } else {
    sh = ih;
    sw = (ih * cw) / ch;
  }
  const sx = Math.min(Math.max(focus.x * iw - sw / 2, 0), iw - sw);
  const sy = Math.min(Math.max(focus.y * ih - sh / 2, 0), ih - sh);
  canvas.getContext('2d')?.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAnisotropy;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  return tex;
}

const ease = (p: number) => -(Math.cos(Math.PI * p) - 1) / 2;

export default function TabletReveal({
  srcA = '/tablet/hero.webp',
  srcB = '/tablet/poster.webp',
  background = '#ffffff',
  showReplay = true,
  className,
  scale = 1,
  onComplete,
  active = true,
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const replayRef = useRef<() => void>(() => {});
  const startRef = useRef<() => void>(() => {});
  const stopRef = useRef<() => void>(() => {});
  const activeRef = useRef(active);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let raf = 0;
    const disposables: { dispose: () => void }[] = [];
    const track = <T extends { dispose: () => void }>(o: T): T => {
      disposables.push(o);
      return o;
    };

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(background, 1);
    const el = renderer.domElement;
    el.style.display = 'block';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.opacity = '0';
    el.style.willChange = 'transform';
    el.style.backfaceVisibility = 'hidden';
    el.style.transition = 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    mount.appendChild(el);

    const FOV = 30;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9 * Math.PI));
    const key = new THREE.DirectionalLight(0xffffff, 0.7 * Math.PI);
    key.position.set(3, 4, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI);
    rim.position.set(-3, 2, -6);
    scene.add(rim);

    let lastWinW = typeof window !== 'undefined' ? window.innerWidth : 0;
    let lastWinH = typeof window !== 'undefined' ? window.innerHeight : 0;
    let baseCameraZ = 10;

    const resize = () => {
      const w = mount.clientWidth || (typeof window !== 'undefined' ? window.innerWidth : 1);
      const h = mount.clientHeight || (typeof window !== 'undefined' ? Math.floor(window.innerHeight * 0.76) : 1);
      const a = w / h;
      const t = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
      renderer.setSize(w, h, false);
      camera.aspect = a;
      camera.updateProjectionMatrix();
      const s = scale > 0 ? scale : 1;
      const fitH = ((H * 1.65) / 2 / t) / s;
      const fitW = ((W * 1.38) / 2 / (t * a)) / s;
      baseCameraZ = Math.max(fitH, fitW);
      camera.position.set(0, 0, baseCameraZ);
    };

    resize();

    const handleWindowResize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth === lastWinW && window.innerHeight === lastWinH) return;
      lastWinW = window.innerWidth;
      lastWinH = window.innerHeight;
      resize();
    };

    window.addEventListener('resize', handleWindowResize);

    const tablet = new THREE.Group();
    scene.add(tablet);

    const bodyGeo = track(
      new THREE.ExtrudeGeometry(roundedRect(W, H, R), {
        depth: D,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 2,
        curveSegments: 16,
      })
    );
    bodyGeo.translate(0, 0, -D / 2);
    const bodyMat = track(
      new THREE.MeshStandardMaterial({ color: 0xc9ccd1, metalness: 0.35, roughness: 0.4 })
    );
    tablet.add(new THREE.Mesh(bodyGeo, bodyMat));

    const glassGeo = track(new THREE.ShapeGeometry(roundedRect(W - 0.02, H - 0.02, R - 0.01), 16));
    const glassMat = track(
      new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.25, metalness: 0.1 })
    );
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.z = 0.072;
    tablet.add(glass);

    const screenGeo = track(new THREE.ShapeGeometry(roundedRect(SW, SH, SCREEN_RADIUS), 16));
    const pos = screenGeo.attributes.position as THREE.BufferAttribute;
    const uv = screenGeo.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      uv.setXY(i, (pos.getX(i) + SW / 2) / SW, (pos.getY(i) + SH / 2) / SH);
    }
    const screenMat = track(new THREE.MeshBasicMaterial({ color: 0x000000 }));
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = 0.074;
    tablet.add(screen);

    const camGeo = track(new THREE.CircleGeometry(0.03, 12));
    const camMat = track(new THREE.MeshBasicMaterial({ color: 0x20232a }));
    const frontCam = new THREE.Mesh(camGeo, camMat);
    frontCam.position.set(0, H / 2 - 0.09, 0.075);
    tablet.add(frontCam);

    const lensGeo = track(new THREE.CircleGeometry(0.09, 16));
    const lensMat = track(new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: 0.3 }));
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(W / 2 - 0.3, H / 2 - 0.3, -0.072);
    lens.rotation.y = Math.PI;
    tablet.add(lens);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const textures: THREE.Texture[] = [];
    let t0 = performance.now();
    let swapped = false;
    let completed = false;

    const show = (i: number) => {
      const tex = textures[i];
      if (!tex) return;
      screenMat.map = tex;
      screenMat.color.set(0xffffff);
      screenMat.needsUpdate = true;
    };

    const play = () => {
      t0 = performance.now();
      swapped = false;
      completed = false;
      show(0);
    };
    replayRef.current = play;

    const frame = (now: number) => {
      if (disposed) return;
      const elapsed = reduced ? HOLD_START + SPIN + HOLD_END : (now - t0) / 1000;
      const p = Math.min(Math.max((elapsed - HOLD_START) / SPIN, 0), 1);
      const e = ease(p);
      const yaw = START.y + (Math.PI * 2 + END.y - START.y) * e;
      const calm = reduced || p < 1 ? 0 : Math.min((elapsed - HOLD_START - SPIN) / 0.6, 1);
      const idle = Math.sin(elapsed * 1.0) * calm;

      const spinArc = Math.sin(p * Math.PI);
      camera.position.z = baseCameraZ * (1 + 0.08 * spinArc);
      tablet.rotation.y = yaw + idle * 0.01;
      tablet.rotation.x =
        START.x + (END.x - START.x) * e - 0.08 * spinArc + idle * 0.005;
      tablet.rotation.z =
        START.z + (END.z - START.z) * e + 0.02 * Math.sin(p * Math.PI * 2) + idle * 0.007;
      tablet.position.y = -0.12 * spinArc + idle * 0.012;

      if (yaw > Math.PI && !swapped) {
        swapped = true;
        show(1);
      }

      if (p >= 1 && !completed) {
        completed = true;
        onCompleteRef.current?.();
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    let loaded = false;

    const start = () => {
      if (!loaded || disposed) return;
      resize();
      cancelAnimationFrame(raf);
      play();
      raf = requestAnimationFrame(frame);
      requestAnimationFrame(() => {
        if (!disposed && el) {
          el.style.opacity = '1';
        }
      });
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      el.style.opacity = '0';
    };
    startRef.current = start;
    stopRef.current = stop;

    Promise.all([loadImage(srcA), loadImage(srcB)])
      .then(([a, b]) => {
        if (disposed) return;
        const aniso = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
        const ta = track(makeTexture(a, FOCUS_A, aniso));
        const tb = track(makeTexture(b, FOCUS_B, aniso));
        textures.push(ta, tb);
        renderer.initTexture(ta);
        renderer.initTexture(tb);
        renderer.compile(scene, camera);
        show(0);
        renderer.render(scene, camera);
        loaded = true;
        if (activeRef.current) start();
      })
      .catch((err) => console.error(err));

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleWindowResize);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      if (el.parentNode === mount) mount.removeChild(el);
    };
  }, [srcA, srcB, background, scale]);

  useEffect(() => {
    activeRef.current = active;
    if (active) startRef.current();
    else stopRef.current();
  }, [active]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%', background }}
    >
      {showReplay && (
        <button
          type="button"
          onClick={() => replayRef.current()}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 24,
            transform: 'translateX(-50%)',
            padding: '10px 22px',
            border: 0,
            borderRadius: 999,
            background: '#111',
            color: '#fff',
            font: '600 14px/1 system-ui, sans-serif',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          Replay
        </button>
      )}
    </div>
  );
}
