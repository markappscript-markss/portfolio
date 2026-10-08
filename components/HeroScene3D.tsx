"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

const rng = (s: number) => () => (s = (s * 16807) % 2147483647) / 2147483647;
const S = THREE.Shape;
const rectS = (x: number, y: number, w: number, h: number) => {
  const s = new S();
  s.moveTo(x, y);
  s.lineTo(x + w, y);
  s.lineTo(x + w, y + h);
  s.lineTo(x, y + h);
  s.closePath();
  return s;
};
const circS = (x: number, y: number, r: number) => {
  const s = new S();
  s.absarc(x, y, r, 0, Math.PI * 2, false);
  return s;
};
const semiS = (x: number, y: number, r: number) => {
  const s = new S();
  s.absarc(x, y, r, 0, Math.PI, false);
  s.closePath();
  return s;
};
const archS = (x: number, y: number, w: number, h: number) => {
  const s = new S(), r = w / 2;
  s.moveTo(x - r, y);
  s.lineTo(x + r, y);
  s.lineTo(x + r, y + h - r);
  s.absarc(x, y + h - r, r, 0, Math.PI, false);
  s.closePath();
  return s;
};
const geo = (shapes: THREE.Shape | THREE.Shape[]) => new THREE.ShapeGeometry(shapes);
const cloud = (x: number, y: number, scale: number = 1.0) => {
  const s = new S();
  const r = scale;
  s.moveTo(x - 2.4 * r, y);
  s.lineTo(x + 2.4 * r, y);
  s.absarc(x + 1.3 * r, y + 0.6 * r, 0.8 * r, -0.3, Math.PI * 0.45, false);
  s.absarc(x + 0.0 * r, y + 1.1 * r, 1.2 * r, 0.25, Math.PI * 0.78, false);
  s.absarc(x - 1.3 * r, y + 0.6 * r, 0.8 * r, Math.PI * 0.55, Math.PI * 1.15, false);
  s.closePath();
  return geo(s);
};
const palmLeaf = (originX: number, originY: number, length: number, angle: number) => {
  const geos: THREE.BufferGeometry[] = [];
  const count = 7;
  for (let i = 0; i < count; i++) {
    const t = (i + 1) / (count + 1);
    const dist = t * length;
    const leafLen = Math.sin(t * Math.PI) * (length * 0.38);
    const leafWidth = leafLen * 0.22;

    const sl = new S();
    sl.moveTo(0, 0);
    sl.quadraticCurveTo(-leafLen * 0.5, leafWidth * 0.8, -leafLen, leafWidth * 0.2);
    sl.quadraticCurveTo(-leafLen * 0.5, -leafWidth * 0.3, 0, 0);
    const gl = geo(sl);
    gl.rotateZ(angle + 0.55 - t * 0.2);
    gl.translate(originX + Math.cos(angle) * dist, originY + Math.sin(angle) * dist, 0);
    geos.push(gl);

    const sr = new S();
    sr.moveTo(0, 0);
    sr.quadraticCurveTo(leafLen * 0.5, leafWidth * 0.8, leafLen, leafWidth * 0.2);
    sr.quadraticCurveTo(leafLen * 0.5, -leafWidth * 0.3, 0, 0);
    const gr = geo(sr);
    gr.rotateZ(angle - 0.55 + t * 0.2);
    gr.translate(originX + Math.cos(angle) * dist, originY + Math.sin(angle) * dist, 0);
    geos.push(gr);
  }
  return geos;
};
function sky(
  seed: number,
  minH: number,
  maxH: number,
  minW: number,
  maxW: number,
  valleyCenter = false
) {
  const r = rng(seed);
  const out: THREE.Shape[] = [];
  let x = -28;
  while (x < 28) {
    const w = minW + r() * (maxW - minW);
    let h = 1.0 + minH + r() * (maxH - minH);
    const mid = x + w * 0.5;
    if (valleyCenter && Math.abs(mid) < 9.5) {
      h = 3.2 + r() * 2.1;
      if (mid > -5.0 && mid < -1.5) {
        h = 3.0;
      }
    }
    out.push(rectS(x, -4.5, w, h));
    x += w * (0.92 + r() * 0.12);
  }
  return out;
}
const tower = (x: number) => [
  rectS(x - 0.8, 2, 1.6, 1.3),
  rectS(x - 0.6, -4.5, 0.16, 6.6),
  rectS(x + 0.44, -4.5, 0.16, 6.6),
];

const THEMES = [
  {
    id: "dark" as const,
    label: "DARK",
    bg: "#e9e3d6",
    floor: "#d6cdb8",
    word: "DARK",
    line: "rgba(20,20,20,0.45)",
    layers: [
      { z: -10, color: "#d9a441", geos: () => [geo(circS(5, 2.2, 3.4))] },
      { z: -8.5, color: "#d3cab5", geos: () => [geo(sky(11, 1.5, 4.2, 1.2, 2.6))] },
      { z: -6.8, text: true },
      { z: -5, color: "#bbb199", geos: () => [geo(sky(23, 1, 2.8, 1.5, 3))] },
      { z: -3.5, color: "#9f9680", geos: () => [geo(sky(37, 0.4, 1.1, 2, 4))] },
    ],
  },
  {
    id: "urban" as const,
    label: "URBAN",
    bg: "#d6d3cc",
    floor: "#bdb9b0",
    word: "URBAN",
    line: "rgba(20,20,20,0.6)",
    layers: [
      { z: -9, color: "#c2beb5", geos: () => [geo(sky(5, 2.5, 5.5, 1.5, 3.2))] },
      { z: -7.5, text: true },
      { z: -5.5, color: "#3e9c97", geos: () => [geo([...sky(17, 2.2, 5.0, 1.8, 3.4, true), ...tower(-10.2)])] },
      { z: -3.5, color: "#2b7773", geos: () => [geo(sky(29, 0.8, 1.8, 2, 3.5))] },
    ],
  },
  {
    id: "summer" as const,
    label: "SUMMER",
    bg: "#a9d6ea",
    floor: "#f1deb0",
    word: "SUMMER",
    line: "rgba(20,20,20,0.55)",
    layers: [
      { z: -10, color: "#f08a5d", geos: () => [geo(circS(-4.5, 2.6, 3.8))] },
      {
        z: -8.8,
        color: "#ffffff",
        geos: () => [
          cloud(8.0, 3.8, 1.1),
          cloud(-10.0, 4.4, 0.85),
          cloud(13.5, 2.8, 1.2),
        ],
      },
      { z: -7.6, color: "#8cc3dc", geos: () => [geo([semiS(-9, -4.5, 5.5), semiS(2, -4.5, 7.5), semiS(12, -4.5, 6.0)])] },
      { z: -6.4, text: true },
      {
        z: -3.5,
        color: "#2d6a4f",
        geos: () => [
          ...palmLeaf(-13.0, 6.2, 5.0, -0.75),
          ...palmLeaf(-13.5, 5.2, 4.2, -0.45),
          ...palmLeaf(13.0, 6.2, 5.0, Math.PI + 0.75),
          ...palmLeaf(13.5, 5.2, 4.2, Math.PI + 0.45),
        ],
      },
    ],
  },
  {
    id: "retro" as const,
    label: "RETRO",
    bg: "#f1e4c8",
    floor: "#e2d0a6",
    word: "RETRO",
    line: "rgba(20,20,20,0.4)",
    layers: [
      { z: -10, color: "#e98a2b", geos: () => [geo(semiS(0, -3.8, 7.5))] },
      { z: -9.7, color: "#f2a94f", geos: () => [geo(semiS(0, -3.8, 5.8))] },
      { z: -9.4, color: "#f7cd8e", geos: () => [geo(semiS(0, -3.8, 4.2))] },
      { z: -7, text: true },
      { z: -4, color: "#d4601a", geos: () => [geo([archS(-10, -4.5, 3.2, 9.5), archS(10, -4.5, 3.2, 9.5)])] },
    ],
  },
];

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState<"dark" | "urban" | "summer" | "retro">("dark");
  const switchAvatarRef = useRef<((target: "dark" | "urban" | "summer" | "retro") => void) | null>(null);
  const [philippineTime, setPhilippineTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setPhilippineTime(`${formatted} GMT+8`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(THEMES[0].bg);
    const targetBg = new THREE.Color(THEMES[0].bg);
    const targetFloor = new THREE.Color(THEMES[0].floor);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const FLOOR_Y = -3.48;

    const floorGeo = new THREE.PlaneGeometry(80, 50);
    const floorMat = new THREE.MeshBasicMaterial({ color: THEMES[0].floor });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, FLOOR_Y, -18);
    scene.add(floorMesh);

    const sceneryGroup = new THREE.Group();
    scene.add(sceneryGroup);

    interface BuiltLayer {
      z: number;
      off: number;
      target: number;
      group: THREE.Group;
    }
    interface BuiltTheme {
      group: THREE.Group;
      layers: BuiltLayer[];
    }

    const textDraws: (() => void)[] = [];
    const sceneryDisposables: { geo?: THREE.BufferGeometry; mat?: THREE.Material; tex?: THREE.Texture }[] = [];
    const builtThemes: BuiltTheme[] = [];

    THEMES.forEach((t, i) => {
      const grp = new THREE.Group();
      sceneryGroup.add(grp);
      const layers: BuiltLayer[] = [];

      t.layers.forEach((l) => {
        const layerGroup = new THREE.Group();
        layerGroup.position.z = l.z;
        layerGroup.position.y = -18;
        grp.add(layerGroup);

        const bl: BuiltLayer = {
          z: l.z,
          off: -18,
          target: -18,
          group: layerGroup,
        };

        if (l.text) {
          const tc = document.createElement("canvas");
          tc.width = 2048;
          tc.height = 640;
          const tex = new THREE.CanvasTexture(tc);
          tex.colorSpace = THREE.SRGBColorSpace;
          const draw = () => {
            const g = tc.getContext("2d");
            if (!g) return;
            g.clearRect(0, 0, 2048, 640);
            g.font = "400 520px 'Bebas Neue', Impact, sans-serif";
            g.textAlign = "center";
            g.textBaseline = "middle";
            g.lineWidth = 6;
            g.strokeStyle = t.line;
            g.strokeText(t.word, 1024, 320);
            tex.needsUpdate = true;
          };
          draw();
          textDraws.push(draw);
          const tGeo = new THREE.PlaneGeometry(26, 8.1);
          const tMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
          const m = new THREE.Mesh(tGeo, tMat);
          m.position.set(0, 0.4, 0);
          layerGroup.add(m);
          sceneryDisposables.push({ geo: tGeo, mat: tMat, tex });
        } else if (l.geos && l.color) {
          const mat = new THREE.MeshBasicMaterial({ color: l.color });
          const geometries = l.geos();
          geometries.forEach((g) => {
            const m = new THREE.Mesh(g, mat);
            layerGroup.add(m);
            sceneryDisposables.push({ geo: g, mat });
          });
        }

        layers.push(bl);
      });

      builtThemes.push({ group: grp, layers });
    });

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => textDraws.forEach((d) => d()));
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    const avatarGroup = new THREE.Group();
    worldGroup.add(avatarGroup);

    const backgroundZ = -2.5;
    const cylinderRadius = 10.5;
    const cylinderArc = Math.PI * 0.72;
    const cylinderHeight = 9.2;
    const cylinderCenterY = 0.8;

    const backgroundGroup = new THREE.Group();
    backgroundGroup.position.set(0, cylinderCenterY, backgroundZ);
    scene.add(backgroundGroup);

    const bgCylinderGeo = new THREE.CylinderGeometry(
      cylinderRadius,
      cylinderRadius,
      cylinderHeight,
      64,
      1,
      true,
      -cylinderArc / 2,
      cylinderArc
    );
    const bgPos = bgCylinderGeo.attributes.position;
    for (let i = 0; i < bgPos.count; i++) {
      bgPos.setZ(i, -bgPos.getZ(i) + cylinderRadius);
    }
    bgCylinderGeo.computeVertexNormals();

    const bgCylinderMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const bgCylinderMesh = new THREE.Mesh(bgCylinderGeo, bgCylinderMat);
    bgCylinderMesh.visible = false;
    bgCylinderMesh.position.set(0, 0, -0.05);
    bgCylinderMesh.renderOrder = -1;
    backgroundGroup.add(bgCylinderMesh);


    const textCanvas = document.createElement("canvas");
    textCanvas.width = 2800;
    textCanvas.height = 600;
    const textCtx = textCanvas.getContext("2d");

    const textTexture = new THREE.CanvasTexture(textCanvas);
    textTexture.colorSpace = THREE.SRGBColorSpace;
    textTexture.minFilter = THREE.LinearFilter;

    const textArcLength = 13.0;
    const textThetaLength = textArcLength / cylinderRadius;
    const textThetaStart = -textThetaLength / 2;
    const textHeight = textArcLength * (600 / 2800);

    const textCurvedGeo = new THREE.CylinderGeometry(
      cylinderRadius - 0.02,
      cylinderRadius - 0.02,
      textHeight,
      64,
      1,
      true,
      textThetaStart,
      textThetaLength
    );
    const textPos = textCurvedGeo.attributes.position;
    for (let i = 0; i < textPos.count; i++) {
      textPos.setZ(i, -textPos.getZ(i) + (cylinderRadius - 0.02));
    }
    textCurvedGeo.computeVertexNormals();

    const textMat = new THREE.MeshBasicMaterial({
      map: textTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      opacity: 0,
    });

    const textMesh = new THREE.Mesh(textCurvedGeo, textMat);
    textMesh.position.set(0, 3 - cylinderCenterY - 1.2, 0);
    textMesh.renderOrder = 0;
    backgroundGroup.add(textMesh);

    const halfArcLength = textArcLength / 2;
    const halfThetaLength = textThetaLength / 2;
    const bottomMeshHeight = textArcLength * (400 / 2800);

    const webAppsCanvas = document.createElement("canvas");
    webAppsCanvas.width = 1400;
    webAppsCanvas.height = 400;
    const webAppsCtx = webAppsCanvas.getContext("2d");

    const webAppsTexture = new THREE.CanvasTexture(webAppsCanvas);
    webAppsTexture.colorSpace = THREE.SRGBColorSpace;
    webAppsTexture.minFilter = THREE.LinearFilter;

    const webAppsGeo = new THREE.CylinderGeometry(
      cylinderRadius - 0.02,
      cylinderRadius - 0.02,
      bottomMeshHeight,
      48,
      1,
      true,
      -halfThetaLength,
      halfThetaLength
    );
    const wPos = webAppsGeo.attributes.position;
    for (let i = 0; i < wPos.count; i++) {
      wPos.setZ(i, -wPos.getZ(i) + (cylinderRadius - 0.02));
    }
    webAppsGeo.computeVertexNormals();

    const webAppsMat = new THREE.MeshBasicMaterial({
      map: webAppsTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      opacity: 0,
    });

    const webAppsMesh = new THREE.Mesh(webAppsGeo, webAppsMat);
    webAppsMesh.position.set(1.8, -3.3, 0);
    webAppsMesh.renderOrder = 0;
    backgroundGroup.add(webAppsMesh);

    const aiVideoCanvas = document.createElement("canvas");
    aiVideoCanvas.width = 1400;
    aiVideoCanvas.height = 400;
    const aiVideoCtx = aiVideoCanvas.getContext("2d");

    const aiVideoTexture = new THREE.CanvasTexture(aiVideoCanvas);
    aiVideoTexture.colorSpace = THREE.SRGBColorSpace;
    aiVideoTexture.minFilter = THREE.LinearFilter;

    const aiVideoGeo = new THREE.CylinderGeometry(
      cylinderRadius - 0.02,
      cylinderRadius - 0.02,
      bottomMeshHeight,
      48,
      1,
      true,
      0,
      halfThetaLength
    );
    const aPos = aiVideoGeo.attributes.position;
    for (let i = 0; i < aPos.count; i++) {
      aPos.setZ(i, -aPos.getZ(i) + (cylinderRadius - 0.02));
    }
    aiVideoGeo.computeVertexNormals();

    const aiVideoMat = new THREE.MeshBasicMaterial({
      map: aiVideoTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      opacity: 0,
    });

    const aiVideoAdsMesh = new THREE.Mesh(aiVideoGeo, aiVideoMat);
    aiVideoAdsMesh.position.set(-1.8, -3.3, 0);
    aiVideoAdsMesh.renderOrder = 0;
    backgroundGroup.add(aiVideoAdsMesh);

    const renderWebAppsText = () => {
      if (!webAppsCtx) return;
      webAppsCtx.clearRect(0, 0, webAppsCanvas.width, webAppsCanvas.height);
      webAppsCtx.fillStyle = "#000000";
      webAppsCtx.font = 'bold 74px "Bebas Neue", Anton, Oswald, "Arial Narrow", sans-serif';
      webAppsCtx.textBaseline = "middle";
      webAppsCtx.textAlign = "right";
      webAppsCtx.fillText("WEB APPS AND DESIGN", 1080, 200);
      webAppsTexture.needsUpdate = true;
    };

    const renderAiVideoText = () => {
      if (!aiVideoCtx) return;
      aiVideoCtx.clearRect(0, 0, aiVideoCanvas.width, aiVideoCanvas.height);
      aiVideoCtx.fillStyle = "#000000";
      aiVideoCtx.font = 'bold 74px "Bebas Neue", Anton, Oswald, "Arial Narrow", sans-serif';
      aiVideoCtx.textBaseline = "middle";
      aiVideoCtx.textAlign = "left";
      aiVideoCtx.fillText("AI VIDEO ADS AND VISUALS", 320, 200);
      aiVideoTexture.needsUpdate = true;
    };

    renderWebAppsText();
    renderAiVideoText();
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        renderWebAppsText();
        renderAiVideoText();
      });
    }

    const words = ["DEVELOPER", "VIDEO AD CREATOR", "DESIGNER"];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let pauseUntil = 0;
    let lastStepTime = 0;
    let lastCursorBlink = 0;
    let cursorVisible = true;
    let currentStartX = -1;
    let lastDrawnKey = "";

    let canStartTypewriter = false;

    const renderTypewriter = (now: number, delta: number = 0.016) => {
      if (!textCtx) return;

      const staticText = "AI-ASSISTED";
      textCtx.font = 'bold 155px "Bebas Neue", Anton, Impact, Oswald, "Arial Narrow", sans-serif-condensed, sans-serif';
      textCtx.textBaseline = "middle";

      const staticWidth = textCtx.measureText(staticText).width;
      const spaceWidth = textCtx.measureText(" ").width;
      const centerX = textCanvas.width / 2;
      const centerY = textCanvas.height / 2;
      const defaultStartX = centerX - staticWidth;

      if (!canStartTypewriter) {
        if (currentStartX < 0) {
          textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
          textCtx.textAlign = "left";
          textCtx.fillStyle = "#000000";
          textCtx.fillText(staticText, defaultStartX, centerY);
          textTexture.needsUpdate = true;
          currentStartX = defaultStartX;
        }
        return;
      }

      if (currentStartX < 0) {
        currentStartX = defaultStartX;
      }

      if (now - lastCursorBlink > 500) {
        cursorVisible = !cursorVisible;
        lastCursorBlink = now;
      }

      if (now >= pauseUntil) {
        const currentWord = words[wordIdx];
        const stepDelay = isDeleting ? 38 : 68;

        if (now - lastStepTime >= stepDelay) {
          lastStepTime = now;

          if (!isDeleting) {
            charIdx++;
            if (charIdx >= currentWord.length) {
              charIdx = currentWord.length;
              isDeleting = true;
              pauseUntil = now + 4000;
            }
          } else {
            charIdx--;
            if (charIdx <= 0) {
              charIdx = 0;
              isDeleting = false;
              wordIdx = (wordIdx + 1) % words.length;
              pauseUntil = now + 500;
            }
          }
        }
      }

      const currentWord = words[wordIdx];
      const isLongWord = currentWord.length > 11;
      let targetStartX = defaultStartX;

      if (isLongWord && (charIdx > 0 || isDeleting)) {
        const fullWordWidth = textCtx.measureText(currentWord).width;
        const totalLineWidth = staticWidth + spaceWidth + fullWordWidth;
        targetStartX = (textCanvas.width - totalLineWidth) / 2;
      }

      const slideLerp = 1 - Math.exp(-7.0 * delta);
      currentStartX += (targetStartX - currentStartX) * slideLerp;
      if (Math.abs(targetStartX - currentStartX) < 0.25) {
        currentStartX = targetStartX;
      }

      const dynamicText = currentWord.substring(0, charIdx);
      const cursorChar = cursorVisible ? "|" : " ";
      const roundedX = Math.round(currentStartX * 2) / 2;
      const drawKey = `${wordIdx}-${charIdx}-${cursorVisible}-${roundedX}`;

      if (drawKey === lastDrawnKey) {
        return;
      }
      lastDrawnKey = drawKey;

      textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

      textCtx.textAlign = "left";
      textCtx.fillStyle = "#000000";
      textCtx.fillText(staticText, currentStartX, centerY);

      textCtx.fillStyle = "#581c87";
      textCtx.fillText(dynamicText, currentStartX + staticWidth + spaceWidth, centerY);

      textCtx.fillStyle = "#6b21a8";
      textCtx.fillText(
        cursorChar,
        currentStartX + staticWidth + spaceWidth + textCtx.measureText(dynamicText).width + 8,
        centerY
      );

      textTexture.needsUpdate = true;
    };


    const textureLoader = new THREE.TextureLoader();
    const avatarAspect = 1536 / 2752;
    const planeHeight = 6.6;
    const planeWidth = planeHeight * avatarAspect;

    let textureUrban: THREE.Texture | null = null;
    let textureSummer: THREE.Texture | null = null;
    let textureRetro: THREE.Texture | null = null;

    const textureDark = textureLoader.load("/images/Hero-avatar1.webp", () => {
      setIsLoaded(true);
      setTimeout(() => {
        textureUrban = textureLoader.load("/images/Hero-avatar2.webp");
        textureUrban.colorSpace = THREE.SRGBColorSpace;
        textureUrban.minFilter = THREE.LinearFilter;
        textureUrban.generateMipmaps = true;

        textureSummer = textureLoader.load("/images/Hero-avatar3.webp");
        textureSummer.colorSpace = THREE.SRGBColorSpace;
        textureSummer.minFilter = THREE.LinearFilter;
        textureSummer.generateMipmaps = true;

        textureRetro = textureLoader.load("/images/Hero-avatar4.webp");
        textureRetro.colorSpace = THREE.SRGBColorSpace;
        textureRetro.minFilter = THREE.LinearFilter;
        textureRetro.generateMipmaps = true;
      }, 1000);
    });
    textureDark.colorSpace = THREE.SRGBColorSpace;
    textureDark.minFilter = THREE.LinearFilter;
    textureDark.generateMipmaps = true;

    const glitchUniforms = {
      map: { value: textureDark as THREE.Texture },
      uGlitch: { value: 0.0 },
      uTime: { value: 0.0 },
      uOpacity: { value: 0.0 },
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform sampler2D map;
      uniform float uGlitch;
      uniform float uTime;
      uniform float uOpacity;
      varying vec2 vUv;

      float rand(vec2 co) {
        return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = vUv;

        if (uGlitch > 0.005) {
          float sliceCount = 18.0;
          float sliceY = floor(uv.y * sliceCount);
          float sliceNoise = rand(vec2(sliceY, floor(uTime * 24.0)));
          if (sliceNoise > 0.52) {
            float offset = (sliceNoise - 0.5) * 0.16 * uGlitch;
            uv.x += offset;
          }

          if (fract(uv.y * 80.0) < 0.15) {
            uv.x += (rand(vec2(uv.y, uTime)) - 0.5) * 0.05 * uGlitch;
          }

          float rgbShift = 0.035 * uGlitch;
          vec4 colR = texture2D(map, vec2(uv.x + rgbShift, uv.y));
          vec4 colG = texture2D(map, uv);
          vec4 colB = texture2D(map, vec2(uv.x - rgbShift, uv.y));

          float alpha = max(colG.a, max(colR.a, colB.a)) * uOpacity;
          if (alpha < 0.01) discard;

          float noise = (rand(uv * 120.0 + uTime * 10.0) - 0.5) * 0.18 * uGlitch;
          vec3 rgb = vec3(colR.r, colG.g, colB.b) + noise;

          gl_FragColor = vec4(rgb, alpha);
        } else {
          vec4 color = texture2D(map, uv);
          color.a *= uOpacity;
          if (color.a < 0.01) discard;
          gl_FragColor = color;
        }
        #include <colorspace_fragment>
      }
    `;

    let geometry: THREE.PlaneGeometry | null = new THREE.PlaneGeometry(planeWidth, planeHeight);
    geometry.translate(0, planeHeight * 0.4, 0);

    const material = new THREE.ShaderMaterial({
      uniforms: glitchUniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const avatarMesh = new THREE.Mesh(geometry, material);
    avatarMesh.renderOrder = 2;
    avatarGroup.position.set(0, -planeHeight * 0.4 - 0.2, 0);
    avatarGroup.scale.set(0.85, 0.85, 1.0);
    avatarGroup.add(avatarMesh);

    const urbanScale = 0.95;
    const summerScale = 0.94;
    const retroScale = 0.95;

    let isTransitioning = false;
    let currentAvatar: "dark" | "urban" | "summer" | "retro" = "dark";

    switchAvatarRef.current = (target: "dark" | "urban" | "summer" | "retro") => {
      if (isTransitioning || target === currentAvatar) return;
      isTransitioning = true;

      const prevIdx = THEMES.findIndex((t) => t.id === currentAvatar);
      const nextIdx = THEMES.findIndex((t) => t.id === target);

      if (prevIdx >= 0 && builtThemes[prevIdx]) {
        builtThemes[prevIdx].layers.forEach((l, n) => {
          setTimeout(() => {
            l.target = -18;
          }, n * 60);
        });
      }

      if (nextIdx >= 0 && builtThemes[nextIdx]) {
        builtThemes[nextIdx].layers.forEach((l, n) => {
          l.off = -18;
          setTimeout(() => {
            l.target = 0;
          }, 180 + n * 80);
        });
        targetBg.set(THEMES[nextIdx].bg);
        targetFloor.set(THEMES[nextIdx].floor);
      }

      currentAvatar = target;
      setActiveAvatar(target);

      let targetTexture: THREE.Texture = textureDark;
      let targetScale = 1.0;
      if (target === "urban") {
        targetTexture = textureUrban || textureDark;
        targetScale = urbanScale;
      } else if (target === "summer") {
        targetTexture = textureSummer || textureDark;
        targetScale = summerScale;
      } else if (target === "retro") {
        targetTexture = textureRetro || textureDark;
        targetScale = retroScale;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioning = false;
          glitchUniforms.uGlitch.value = 0.0;
        },
      });

      tl.to(glitchUniforms.uGlitch, {
        value: 1.0,
        duration: 0.14,
        ease: "power2.in",
      })
        .call(() => {
          glitchUniforms.map.value = targetTexture;
          avatarMesh.scale.set(targetScale, targetScale, 1.0);
        })
        .to(glitchUniforms.uGlitch, {
          value: 0.45,
          duration: 0.05,
          ease: "none",
        })
        .to(glitchUniforms.uGlitch, {
          value: 0.8,
          duration: 0.04,
          ease: "none",
        })
        .to(glitchUniforms.uGlitch, {
          value: 0.0,
          duration: 0.16,
          ease: "power3.out",
        });
    };

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.targetX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;

      if (w < 768) {
        camera.position.z = 10.5;
      } else {
        camera.position.z = 8.8;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);
    onResize();

    const revealTimeouts: NodeJS.Timeout[] = [];

    const staggerTimeline = gsap.timeline({
      paused: true,
    });

    staggerTimeline
      .call(() => {
        const themeIdx = THEMES.findIndex((th) => th.id === currentAvatar);
        const activeTheme = builtThemes[themeIdx >= 0 ? themeIdx : 0];
        if (activeTheme && activeTheme.layers) {
          activeTheme.layers.forEach((l, n) => {
            const timer = setTimeout(() => {
              l.target = 0;
            }, n * 70);
            revealTimeouts.push(timer);
          });
        }
      }, [], 0.0)
      .fromTo("#header-nav", {
        opacity: 0,
        y: -16,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.42,
        ease: "power2.out",
      }, 0.04)
      .to(textMesh.position, {
        y: 3 - cylinderCenterY,
        duration: 0.52,
        ease: "power3.out",
        onStart: () => {
          canStartTypewriter = true;
        },
      }, 0.12)
      .to(textMat, {
        opacity: 1,
        duration: 0.42,
        ease: "power2.out",
      }, 0.12)
      .to(webAppsMesh.position, {
        x: 0,
        duration: 0.48,
        ease: "power3.out",
      }, 0.18)
      .to(webAppsMat, {
        opacity: 1,
        duration: 0.38,
        ease: "power2.out",
      }, 0.18)
      .to(aiVideoAdsMesh.position, {
        x: 0,
        duration: 0.48,
        ease: "power3.out",
      }, 0.24)
      .to(aiVideoMat, {
        opacity: 1,
        duration: 0.38,
        ease: "power2.out",
      }, 0.24)
      .set("#hero-nav", {
        opacity: 1,
      }, 0.28)
      .fromTo(".hero-nav-item", {
        opacity: 0,
        y: 16,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.38,
        ease: "power2.out",
        stagger: 0.06,
      }, 0.30);

    let isRunning = false;
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRunning) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.05);
      const now = performance.now();
      renderTypewriter(now, delta);
      glitchUniforms.uTime.value = now * 0.001;

      if (scene.background instanceof THREE.Color) {
        scene.background.lerp(targetBg, 0.06);
      }
      floorMat.color.lerp(targetFloor, 0.06);

      const lerpFactor = 1 - Math.exp(-9.0 * delta);
      mouse.x += (mouse.targetX - mouse.x) * lerpFactor;
      mouse.y += (mouse.targetY - mouse.y) * lerpFactor;

      builtThemes.forEach((th) => {
        let any = false;
        th.layers.forEach((l) => {
          if (Math.abs(l.target - l.off) > 0.005) {
            l.off += (l.target - l.off) * 0.092;
          }
          if (l.off > -17.5) {
            any = true;
            l.group.position.x = -mouse.x * ((Math.abs(l.z) - 3.0) * 0.12);
            l.group.position.y = l.off;
          }
        });
        th.group.visible = any;
      });

      avatarGroup.rotation.y = mouse.x * 0.08;
      avatarGroup.rotation.x = -mouse.y * 0.08;
      avatarGroup.rotation.z = 0;

      backgroundGroup.position.x = -mouse.x * 0.7;
      backgroundGroup.rotation.y = mouse.x * 0.08;
      backgroundGroup.rotation.x = 0;

      sceneryGroup.position.x = -mouse.x * 1.2;
      sceneryGroup.rotation.y = mouse.x * 0.10;
      sceneryGroup.rotation.x = -mouse.y * 0.03;

      camera.position.x = 0;
      camera.position.y = -mouse.y * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    let hasStarted3D = false;
    const start3D = () => {
      if (hasStarted3D) return;
      hasStarted3D = true;
      if (!isRunning) {
        isRunning = true;
        animate();
      }
      gsap.to(glitchUniforms.uOpacity, {
        value: 1.0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.to(avatarGroup.scale, {
        x: 1.0,
        y: 1.0,
        z: 1.0,
        duration: 0.85,
        ease: "power3.out",
      });
    };

    let hasRevealedElements = false;
    const playStaggerReveal = () => {
      start3D();
      if (hasRevealedElements) return;
      hasRevealedElements = true;
      staggerTimeline.play();
    };

    const resetToDarkWithStagger = () => {
      start3D();
      hasRevealedElements = true;
      isTransitioning = false;
      revealTimeouts.forEach(clearTimeout);
      revealTimeouts.length = 0;

      builtThemes.forEach((th, idx) => {
        if (idx !== 0) {
          th.layers.forEach((l) => {
            l.target = -18;
            l.off = -18;
            l.group.position.y = -18;
          });
          th.group.visible = false;
        }
      });

      builtThemes[0].group.visible = true;
      builtThemes[0].layers.forEach((l) => {
        l.off = -18;
        l.target = -18;
        l.group.position.y = -18;
      });

      currentAvatar = "dark";
      setActiveAvatar("dark");

      targetBg.set(THEMES[0].bg);
      targetFloor.set(THEMES[0].floor);
      if (scene.background instanceof THREE.Color) {
        scene.background.set(THEMES[0].bg);
      }
      floorMat.color.set(THEMES[0].floor);

      glitchUniforms.map.value = textureDark;
      avatarMesh.scale.set(1.0, 1.0, 1.0);

      builtThemes[0].layers.forEach((l, n) => {
        const timer = setTimeout(() => {
          l.target = 0;
        }, n * 70);
        revealTimeouts.push(timer);
      });

      gsap.killTweensOf([
        textMesh.position,
        textMat,
        webAppsMesh.position,
        webAppsMat,
        aiVideoAdsMesh.position,
        aiVideoMat,
        ".hero-nav-item",
      ]);

      textMesh.position.y = 3 - cylinderCenterY - 1.2;
      textMat.opacity = 0;
      webAppsMesh.position.x = 1.8;
      webAppsMat.opacity = 0;
      aiVideoAdsMesh.position.x = -1.8;
      aiVideoMat.opacity = 0;

      gsap.to(textMesh.position, {
        y: 3 - cylinderCenterY,
        duration: 0.52,
        ease: "power3.out",
        delay: 0.08,
        onStart: () => {
          canStartTypewriter = true;
        },
      });
      gsap.to(textMat, {
        opacity: 1,
        duration: 0.42,
        ease: "power2.out",
        delay: 0.08,
      });
      gsap.to(webAppsMesh.position, {
        x: 0,
        duration: 0.48,
        ease: "power3.out",
        delay: 0.14,
      });
      gsap.to(webAppsMat, {
        opacity: 1,
        duration: 0.38,
        ease: "power2.out",
        delay: 0.14,
      });
      gsap.to(aiVideoAdsMesh.position, {
        x: 0,
        duration: 0.48,
        ease: "power3.out",
        delay: 0.20,
      });
      gsap.to(aiVideoMat, {
        opacity: 1,
        duration: 0.38,
        ease: "power2.out",
        delay: 0.20,
      });
      gsap.fromTo(".hero-nav-item", {
        opacity: 0,
        y: 16,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.38,
        ease: "power2.out",
        stagger: 0.06,
        delay: 0.24,
      });

      gsap.fromTo(glitchUniforms.uGlitch, { value: 0.85 }, {
        value: 0,
        duration: 0.35,
        ease: "power2.out",
      });

      wordIdx = 0;
      charIdx = 0;
      isDeleting = false;
      pauseUntil = 0;
      lastStepTime = 0;
      currentStartX = -1;
      lastDrawnKey = "";
      canStartTypewriter = true;
    };

    const onPaperTearReveal = () => {
      start3D();
      setTimeout(playStaggerReveal, 80);
    };

    const onPortfolioTriggerMain = () => {
      resetToDarkWithStagger();
    };

    if (typeof window !== "undefined" && ((window as any).__paperTearComplete || (window as any).__paperTearReveal)) {
      playStaggerReveal();
    } else {
      window.addEventListener("paper-tear-reveal", onPaperTearReveal);
      window.addEventListener("paper-tear-complete", playStaggerReveal);
    }
    window.addEventListener("portfolio-trigger-main", onPortfolioTriggerMain);
    const fallbackTimer = setTimeout(playStaggerReveal, 2500);

    renderer.render(scene, camera);

    return () => {
      isRunning = false;
      clearTimeout(fallbackTimer);
      revealTimeouts.forEach(clearTimeout);
      window.removeEventListener("paper-tear-reveal", onPaperTearReveal);
      window.removeEventListener("paper-tear-complete", playStaggerReveal);
      window.removeEventListener("portfolio-trigger-main", onPortfolioTriggerMain);
      staggerTimeline.kill();

      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      sceneryDisposables.forEach((item) => {
        item.geo?.dispose();
        item.mat?.dispose();
        item.tex?.dispose();
      });
      geometry?.dispose();
      material.dispose();
      textureDark.dispose();
      textureUrban?.dispose();
      textureSummer?.dispose();
      textureRetro?.dispose();
      bgCylinderGeo.dispose();
      bgCylinderMat.dispose();
      textCurvedGeo.dispose();
      textMat.dispose();
      textTexture.dispose();
      webAppsGeo.dispose();
      webAppsMat.dispose();
      webAppsTexture.dispose();
      aiVideoGeo.dispose();
      aiVideoMat.dispose();
      aiVideoTexture.dispose();
    };
  }, []);

  return (
    <div
      className={`relative w-full h-screen transition-opacity duration-500 ease-out ${isLoaded ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .8 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }}
      />

      <div
        id="work-status"
        className="fixed left-6 sm:left-12 top-24 sm:top-1/2 sm:-translate-y-1/2 z-20 select-none pointer-events-none flex flex-col"
      >
        <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-neutral-600">
          AVAILABLE FOR WORK
        </span>
        <span className="text-base sm:text-xl font-black italic tracking-tight text-neutral-900 mt-1">
          Freelance & Collab
        </span>
      </div>

      <div
        id="location-status"
        className="fixed right-6 sm:right-12 top-24 sm:top-1/2 sm:-translate-y-1/2 z-20 select-none pointer-events-none flex flex-col items-end text-right"
      >
        <span
          suppressHydrationWarning
          className="font-mono tabular-nums text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-neutral-600"
        >
          {philippineTime || "12:00:00 AM GMT+8"}
        </span>
        <span className="text-base sm:text-xl font-black italic tracking-tight text-neutral-900 mt-1">
          Philippines
        </span>
      </div>

      <nav
        id="hero-nav"
        className="fixed z-20 left-6 right-6 sm:left-12 sm:right-12 bottom-6 sm:bottom-8 select-none pointer-events-auto opacity-0"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-3 sm:gap-8">
          {THEMES.map((t, i) => {
            const isActive = activeAvatar === t.id;
            return (
              <div key={t.id} className="hero-nav-item">
                <button
                  id={`btn-nav-${t.id}`}
                  onClick={() => switchAvatarRef.current?.(t.id)}
                  className={`w-full group text-left transition-all duration-300 pt-3 sm:pt-4 border-t flex items-center font-mono text-xs sm:text-sm tracking-widest uppercase cursor-pointer ${isActive
                    ? "border-neutral-900 text-neutral-900 border-t-2 sm:border-t-4 font-bold opacity-100"
                    : "border-neutral-900/30 text-neutral-600 hover:text-neutral-900 hover:border-neutral-900/60 opacity-60 hover:opacity-90"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive
                        ? "bg-purple-600 animate-pulse"
                        : "bg-neutral-300 group-hover:bg-neutral-400"
                        }`}
                    />
                    <span>
                      0{i + 1} {t.label}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </nav>

      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />
    </div>
  );
}
