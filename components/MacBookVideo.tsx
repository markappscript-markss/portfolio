'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  videoSrc?: string;
  background?: string;
  showReplay?: boolean;
  className?: string;
  offsetX?: number;
  offsetY?: number;
  scale?: number;
};

const BASE_YAW = -0.28;
const BASE_PITCH = 0;
const OPEN_ANGLE = -0.2;
const DEFAULT_VIDEO_ASPECT = 1280 / 612;

const BW = 4.6;
const BD = 3.2;
const BH = 0.1;
const LW = 4.6;
const LH = 3.0;
const DISP_W = 4.46;
const DISP_H = 2.86;

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

function canvasRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

function makeKeyboardTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 1600;
  c.height = 640;
  const ctx = c.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#0b0b0d';
    canvasRoundRect(ctx, 0, 0, 1600, 640, 28);
    ctx.fill();
    const rows = [14, 14, 14, 13, 12, 8];
    let y = 34;
    rows.forEach((n, ri) => {
      const kh = ri === 0 ? 70 : 92;
      const gap = 12;
      const kw = (1600 - 60 - gap * (n - 1)) / n;
      let x = 30;
      for (let i = 0; i < n; i++) {
        let w = kw;
        if (ri === 5 && i === 3) w = kw * 3.6;
        else if (ri === 5 && i > 3) w = kw * 0.9;
        ctx.fillStyle = '#1b1c20';
        canvasRoundRect(ctx, x, y, w, kh, 10);
        ctx.fill();
        x += w + gap;
      }
      y += kh + gap + 8;
    });
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export default function MacBookVideo({
  videoSrc = '/macbook/demo.mp4',
  background = '#ffffff',
  showReplay = false,
  className,
  offsetX = 0.78,
  offsetY = 0.25,
  scale = 1.15,
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const replayRef = useRef<() => void>(() => {});

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

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(background, 1);
    const dom = renderer.domElement;
    dom.style.display = 'block';
    dom.style.width = '100%';
    dom.style.height = '100%';
    mount.appendChild(dom);

    const FOV = 30;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

    scene.add(new THREE.AmbientLight(0xffffff, 0.85 * Math.PI));
    const key = new THREE.DirectionalLight(0xffffff, 0.75 * Math.PI);
    key.position.set(3, 6, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 0.5 * Math.PI);
    rim.position.set(-4, 3, -5);
    scene.add(rim);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      const a = w / h;
      renderer.setSize(w, h, false);
      camera.aspect = a;
      camera.updateProjectionMatrix();
      const d = Math.max(9.2, 14.2 / a);
      camera.position.set(0, (2.4 * d) / 9.2, d);
      camera.lookAt(0, 0.9, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    const silver = track(
      new THREE.MeshStandardMaterial({ color: 0x8b9098, metalness: 0.55, roughness: 0.35 })
    );
    const black = new THREE.MeshBasicMaterial({ color: 0x000000 });
    disposables.push(black);

    const laptop = new THREE.Group();
    scene.add(laptop);

    const baseGeo = track(
      new THREE.ExtrudeGeometry(roundedRect(BW, BD, 0.18), {
        depth: BH,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 4,
        curveSegments: 20,
      })
    );
    const base = new THREE.Mesh(baseGeo, silver);
    base.rotation.x = -Math.PI / 2;
    laptop.add(base);
    const deckY = BH + 0.02 + 0.002;

    const keyTex = track(makeKeyboardTexture());
    const keysGeo = track(new THREE.PlaneGeometry(3.9, 1.56));
    const keysMat = track(new THREE.MeshBasicMaterial({ map: keyTex }));
    const keys = new THREE.Mesh(keysGeo, keysMat);
    keys.rotation.x = -Math.PI / 2;
    keys.position.set(0, deckY, -0.72);
    laptop.add(keys);

    const padGeo = track(new THREE.ShapeGeometry(roundedRect(1.7, 1.0, 0.07), 16));
    const padMat = track(
      new THREE.MeshStandardMaterial({ color: 0x80848b, metalness: 0.45, roughness: 0.4 })
    );
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(0, deckY, 0.86);
    laptop.add(pad);

    const hinge = new THREE.Group();
    hinge.position.set(0, deckY + 0.01, -BD / 2 + 0.05);
    hinge.rotation.x = OPEN_ANGLE;
    laptop.add(hinge);

    const lidGeo = track(
      new THREE.ExtrudeGeometry(roundedRect(LW, LH, 0.14), {
        depth: 0.05,
        bevelEnabled: true,
        bevelThickness: 0.015,
        bevelSize: 0.015,
        bevelSegments: 4,
        curveSegments: 20,
      })
    );
    lidGeo.translate(0, LH / 2, -0.025);
    hinge.add(new THREE.Mesh(lidGeo, silver));

    const bezelGeo = track(new THREE.ShapeGeometry(roundedRect(LW - 0.08, LH - 0.08, 0.1), 20));
    const bezel = new THREE.Mesh(bezelGeo, black);
    bezel.position.set(0, LH / 2, 0.042);
    hinge.add(bezel);

    const dispGeo = track(new THREE.ShapeGeometry(roundedRect(DISP_W, DISP_H, 0.08), 20));
    const disp = new THREE.Mesh(dispGeo, black);
    disp.position.set(0, LH / 2, 0.044);
    hinge.add(disp);

    const video = document.createElement('video');
    video.src = videoSrc;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('muted', '');
    const videoTex = track(new THREE.VideoTexture(video));
    videoTex.colorSpace = THREE.SRGBColorSpace;
    videoTex.minFilter = THREE.LinearFilter;
    videoTex.generateMipmaps = false;

    const vGeo = track(new THREE.PlaneGeometry(1, 1));
    const vMat = track(new THREE.MeshBasicMaterial({ map: videoTex }));
    const vplane = new THREE.Mesh(vGeo, vMat);
    vplane.position.set(0, LH / 2, 0.046);
    hinge.add(vplane);

    const fitVideo = (aspect: number) => {
      const fitW = Math.min(DISP_W, DISP_H * aspect);
      vplane.scale.set(fitW, fitW / aspect, 1);
    };
    fitVideo(DEFAULT_VIDEO_ASPECT);
    video.addEventListener('loadedmetadata', () => {
      if (video.videoWidth && video.videoHeight) fitVideo(video.videoWidth / video.videoHeight);
    });

    const notchShape = (() => {
      const w = 0.38;
      const h = 0.07;
      const r = 0.025;
      const s = new THREE.Shape();
      s.moveTo(-w / 2, 0.03);
      s.lineTo(w / 2, 0.03);
      s.lineTo(w / 2, -h + r);
      s.absarc(w / 2 - r, -h + r, r, 0, -Math.PI / 2, true);
      s.lineTo(-w / 2 + r, -h);
      s.absarc(-w / 2 + r, -h + r, r, -Math.PI / 2, -Math.PI, true);
      s.closePath();
      return s;
    })();
    const notchGeo = track(new THREE.ShapeGeometry(notchShape, 12));
    const notch = new THREE.Mesh(notchGeo, black);
    notch.position.set(0, LH / 2 + DISP_H / 2, 0.048);
    hinge.add(notch);

    const dotGeo = track(new THREE.CircleGeometry(0.011, 16));
    const dotMat = track(new THREE.MeshBasicMaterial({ color: 0x1c1e25 }));
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.set(0, LH / 2 + DISP_H / 2 - 0.03, 0.049);
    hinge.add(dot);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const playVideo = () => {
      video.currentTime = 0;
      const p = video.play();
      if (p) p.catch(() => {});
    };
    replayRef.current = playVideo;
    video.addEventListener('canplay', () => {
      if (video.paused) {
        const p = video.play();
        if (p) p.catch(() => {});
      }
    });

    const frame = (now: number) => {
      if (disposed) return;
      const idle = reduced ? 0 : Math.sin(now / 1400);
      laptop.rotation.y = BASE_YAW + idle * 0.02;
      laptop.rotation.x = BASE_PITCH;
      const a = camera.aspect;
      const responsiveOffsetX =
        a >= 1.3 ? offsetX : offsetX * Math.max(0, (a - 0.7) / 0.6);
      laptop.position.x = responsiveOffsetX;
      laptop.position.y = -0.4 + offsetY + idle * 0.015;
      laptop.scale.set(scale, scale, scale);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      video.pause();
      video.removeAttribute('src');
      video.load();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      if (dom.parentNode === mount) mount.removeChild(dom);
    };
  }, [videoSrc, background, offsetX, offsetY, scale]);

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
