"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

export type PartName =
  | "plateau"
  | "lensTopLeft"
  | "lensBottomLeft"
  | "lensCenter"
  | "flash"
  | "lidar"
  | "mic"
  | "backPanel"
  | "actionBtn"
  | "volUpBtn"
  | "volDownBtn"
  | "powerBtn"
  | "camControl";

export interface PartTransformData {
  x: number;
  y: number;
  z: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
}

export const DEFAULT_PHONE_CONFIG: Record<PartName, PartTransformData> = {
  plateau: {
    x: 0,
    y: 1.58,
    z: -0.127,
    scaleX: 1.03,
    scaleY: 1.03,
    scaleZ: 1,
  },
  lensTopLeft: {
    x: 0.63,
    y: 1.86,
    z: -0.187,
    scaleX: 1.36,
    scaleY: 1.36,
    scaleZ: 1,
  },
  lensBottomLeft: {
    x: 0.64,
    y: 1.32,
    z: -0.187,
    scaleX: 1.36,
    scaleY: 1.36,
    scaleZ: 1,
  },
  lensCenter: {
    x: 0.16,
    y: 1.59,
    z: -0.187,
    scaleX: 1.36,
    scaleY: 1.36,
    scaleZ: 1,
  },
  flash: {
    x: -0.68,
    y: 1.86,
    z: -0.187,
    scaleX: 1.46,
    scaleY: 1.46,
    scaleZ: 0.3,
  },
  lidar: {
    x: -0.68,
    y: 1.3,
    z: -0.1978,
    scaleX: 1.3,
    scaleY: 1.3,
    scaleZ: 0.3,
  },
  mic: {
    x: -0.68,
    y: 1.58,
    z: -0.187,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.3,
  },
  backPanel: {
    x: 0,
    y: -0.64,
    z: -0.126,
    scaleX: 1.04,
    scaleY: 0.98,
    scaleZ: 1,
  },
  actionBtn: {
    x: -1.06,
    y: 1.25,
    z: 0.02,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1.16,
  },
  volUpBtn: {
    x: -1.06,
    y: 0.78,
    z: 0.02,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
  },
  volDownBtn: {
    x: -1.06,
    y: 0.26,
    z: 0.02,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
  },
  powerBtn: {
    x: 1.06,
    y: 0.72,
    z: 0.02,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
  },
  camControl: {
    x: 1.06,
    y: -0.75,
    z: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
  },
};

export interface Phone3DProps {
  src?: string;
  showReplay?: boolean;
  className?: string;

  bodyColor?: string;
  metalness?: number;
  roughness?: number;
  backPanelColor?: string;
  backPanelRoughness?: number;
  cameraRingColor?: string;
  cameraRingMetalness?: number;

  enableOrbit?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  cameraPreset?: string;

  isFloating?: boolean;
  floatAmplitude?: number;
  tiltAmplitude?: number;
  floatSpeed?: number;
  floatEaseMode?: "sine" | "pendulum" | "breathing" | "dynamic";
  entranceDuration?: number;
  entranceDelay?: number;

  keyLightIntensity?: number;
  keyLightColor?: string;
  keyLightPosition?: [number, number, number];
  envBrightness?: number;
  envTint?: string;
  rimLightIntensity?: number;
  rimLightColor?: string;
  ambientLightIntensity?: number;
  ambientLightColor?: string;
  showFloorShadow?: boolean;
  phoneScale?: number;
  paused?: boolean;

  enableGizmo?: boolean;
  gizmoMode?: "translate" | "scale";
  selectedPart?: PartName | null;
  partOverrides?: Partial<Record<PartName, Partial<PartTransformData>>>;
  endPosition?: { x: number; y: number; z: number };
  onSelectPart?: (part: PartName | null) => void;
  onPartTransformChange?: (part: PartName, data: PartTransformData) => void;

  onReplayTrigger?: (replayFn: () => void) => void;
}

const END = { x: -0.33, y: 0.33, z: 0 };
const FOV = 30;

const W = 2.12;
const H = 4.5;
const D = 0.25;
const R = 0.36;

function rr(w: number, h: number, r: number): THREE.Shape {
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

function createPillShape(width: number, height: number): THREE.Shape {
  const r = Math.min(width, height) / 2;
  return rr(width, height, r);
}

function createAppleLogoShape(): THREE.Shape {
  const s = new THREE.Shape();
  const scale = 0.038;
  const cx = 0;
  const cy = 0;
  s.moveTo(cx, cy + 3.5 * scale);
  s.bezierCurveTo(cx - 2 * scale, cy + 3.5 * scale, cx - 4 * scale, cy + 1.5 * scale, cx - 4 * scale, cy - 1 * scale);
  s.bezierCurveTo(cx - 4 * scale, cy - 4 * scale, cx - 2 * scale, cy - 6 * scale, cx, cy - 6 * scale);
  s.bezierCurveTo(cx + 2 * scale, cy - 6 * scale, cx + 4 * scale, cy - 4 * scale, cx + 4 * scale, cy - 1 * scale);
  s.bezierCurveTo(cx + 4 * scale, cy + 1.5 * scale, cx + 2 * scale, cy + 3.5 * scale, cx, cy + 3.5 * scale);
  return s;
}

function disposeTree(root: THREE.Object3D) {
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    m.geometry?.dispose();
    const mat = m.material as THREE.Material | THREE.Material[] | undefined;
    if (mat) (Array.isArray(mat) ? mat : [mat]).forEach((x) => x.dispose());
  });
}

export default function Phone3D({
  src = "/images/iphone/sneaker-ad.webp",
  showReplay = false,
  className = "",

  bodyColor = "#4D1821",
  metalness = 0.72,
  roughness = 0.35,
  backPanelColor = "#501625",
  backPanelRoughness = 0.52,
  cameraRingColor = "#8e384e",
  cameraRingMetalness = 0.85,

  enableOrbit = true,
  autoRotate = false,
  autoRotateSpeed = 1.5,
  cameraPreset = "hero",

  isFloating = true,
  floatAmplitude = 0.012,
  tiltAmplitude = 0.012,
  floatSpeed = 0.6,
  floatEaseMode = "sine",
  entranceDuration = 2.2,
  entranceDelay = 0.2,

  keyLightIntensity = 1.65,
  keyLightColor = "#ffffff",
  keyLightPosition = [6, 2, -4],
  envBrightness = 0.9,
  envTint = "#ffffff",
  rimLightIntensity = 1.35,
  rimLightColor = "#ffffff",
  ambientLightIntensity = 0.7,
  ambientLightColor = "#ffffff",
  showFloorShadow = false,
  phoneScale = 1,
  paused = false,

  enableGizmo = true,
  gizmoMode = "translate",
  selectedPart = null,
  partOverrides = {},
  endPosition = { x: -0.33, y: 0.33, z: 0 },
  onSelectPart,
  onPartTransformChange,

  onReplayTrigger,
}: Phone3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const playRef = useRef<() => void>(() => { });
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const liveProps = useRef({
    bodyColor,
    metalness,
    roughness,
    backPanelColor,
    backPanelRoughness,
    cameraRingColor,
    cameraRingMetalness,
    enableOrbit,
    autoRotate,
    autoRotateSpeed,
    isFloating,
    floatAmplitude,
    tiltAmplitude,
    floatSpeed,
    floatEaseMode,
    entranceDuration,
    entranceDelay,
    keyLightIntensity,
    keyLightColor,
    keyLightPosition,
    envBrightness,
    envTint,
    rimLightIntensity,
    rimLightColor,
    ambientLightIntensity,
    ambientLightColor,
    showFloorShadow,
    phoneScale,
    enableGizmo,
    gizmoMode,
    selectedPart,
    endPosition,
  });

  useEffect(() => {
    liveProps.current = {
      bodyColor,
      metalness,
      roughness,
      backPanelColor,
      backPanelRoughness,
      cameraRingColor,
      cameraRingMetalness,
      enableOrbit,
      autoRotate,
      autoRotateSpeed,
      isFloating,
      floatAmplitude,
      tiltAmplitude,
      floatSpeed,
      floatEaseMode,
      entranceDuration,
      entranceDelay,
      keyLightIntensity,
      keyLightColor,
      keyLightPosition,
      envBrightness,
      envTint,
      rimLightIntensity,
      rimLightColor,
      ambientLightIntensity,
      ambientLightColor,
      showFloorShadow,
      phoneScale,
      enableGizmo,
      gizmoMode,
      selectedPart,
      endPosition,
    };
  });

  const controlsRef = useRef<OrbitControls | null>(null);
  const transformControlsRef = useRef<TransformControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const defaultDistRef = useRef(12.6);
  const phoneRef = useRef<THREE.Group | null>(null);
  const floorShadowMeshRef = useRef<THREE.Mesh | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  const partsMapRef = useRef<Map<PartName, THREE.Object3D>>(new Map());

  const materialsRef = useRef<{
    titanium?: THREE.MeshStandardMaterial;
    panel?: THREE.MeshStandardMaterial;
    ring?: THREE.MeshStandardMaterial;
    logo?: THREE.MeshStandardMaterial;
    floorShadow?: THREE.MeshBasicMaterial;
  }>({});

  const lightsRef = useRef<{
    sun?: THREE.DirectionalLight;
    rim?: THREE.DirectionalLight;
    ambient?: THREE.AmbientLight;
    pm?: THREE.PMREMGenerator;
    envRT?: THREE.WebGLRenderTarget;
  }>({});

  useEffect(() => {
    const mat = materialsRef.current;
    if (mat.titanium) {
      mat.titanium.color.set(bodyColor);
      mat.titanium.metalness = metalness;
      mat.titanium.roughness = roughness;
      mat.titanium.needsUpdate = true;
    }
    if (mat.panel) {
      mat.panel.color.set(backPanelColor);
      mat.panel.roughness = backPanelRoughness;
      mat.panel.needsUpdate = true;
    }
    if (mat.ring) {
      mat.ring.color.set(cameraRingColor);
      mat.ring.metalness = cameraRingMetalness;
      mat.ring.needsUpdate = true;
    }
    if (mat.logo) {
      mat.logo.color.set(bodyColor);
      mat.logo.needsUpdate = true;
    }
    if (mat.floorShadow) {
      mat.floorShadow.visible = !!showFloorShadow;
      mat.floorShadow.opacity = showFloorShadow ? 0.8 : 0;
    }
    if (floorShadowMeshRef.current) {
      floorShadowMeshRef.current.visible = !!showFloorShadow;
      if (showFloorShadow) {
        if (sceneRef.current && !sceneRef.current.children.includes(floorShadowMeshRef.current)) {
          sceneRef.current.add(floorShadowMeshRef.current);
        }
      } else {
        if (floorShadowMeshRef.current.parent) {
          floorShadowMeshRef.current.parent.remove(floorShadowMeshRef.current);
        }
      }
    }
  }, [
    bodyColor,
    metalness,
    roughness,
    backPanelColor,
    backPanelRoughness,
    cameraRingColor,
    cameraRingMetalness,
    showFloorShadow,
  ]);

  useEffect(() => {
    if (phoneRef.current) {
      phoneRef.current.scale.setScalar(phoneScale || 1);
    }
  }, [phoneScale]);

  useEffect(() => {
    const lights = lightsRef.current;
    if (lights.sun) {
      lights.sun.intensity = keyLightIntensity;
      lights.sun.color.set(keyLightColor);
      lights.sun.position.set(keyLightPosition[0], keyLightPosition[1], keyLightPosition[2]);
    }
    if (lights.rim) {
      lights.rim.intensity = rimLightIntensity;
      lights.rim.color.set(rimLightColor);
    }
    if (lights.ambient) {
      lights.ambient.intensity = ambientLightIntensity;
      lights.ambient.color.set(ambientLightColor);
    }
  }, [
    keyLightIntensity,
    keyLightColor,
    keyLightPosition,
    rimLightIntensity,
    rimLightColor,
    ambientLightIntensity,
    ambientLightColor,
  ]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enabled = enableOrbit;
      controlsRef.current.autoRotate = autoRotate;
      controlsRef.current.autoRotateSpeed = autoRotateSpeed;
    }
  }, [enableOrbit, autoRotate, autoRotateSpeed]);

  useEffect(() => {
    const tc = transformControlsRef.current;
    if (!tc) return;

    tc.setMode(gizmoMode);

    if (!enableGizmo || !selectedPart) {
      tc.detach();
      return;
    }

    const targetObj = partsMapRef.current.get(selectedPart);
    if (targetObj) {
      tc.attach(targetObj);
    } else {
      tc.detach();
    }
  }, [enableGizmo, gizmoMode, selectedPart]);

  useEffect(() => {
    if (!partOverrides) return;
    Object.entries(partOverrides).forEach(([name, transform]) => {
      const obj = partsMapRef.current.get(name as PartName);
      if (!obj || !transform) return;
      if (transform.x !== undefined) obj.position.x = transform.x;
      if (transform.y !== undefined) obj.position.y = transform.y;
      if (transform.z !== undefined) obj.position.z = transform.z;
      if (transform.scaleX !== undefined) obj.scale.x = transform.scaleX;
      if (transform.scaleY !== undefined) obj.scale.y = transform.scaleY;
      if (transform.scaleZ !== undefined) obj.scale.z = transform.scaleZ;
    });
  }, [partOverrides]);

  useEffect(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    const d = defaultDistRef.current;
    switch (cameraPreset) {
      case "front":
        camera.position.set(0, 0, d);
        break;
      case "back":
        camera.position.set(0, 0, -d);
        break;
      case "backClose":
        camera.position.set(0, 1.39, -d * 0.58);
        break;
      case "left":
        camera.position.set(-d, 0, 0);
        break;
      case "right":
        camera.position.set(d, 0, 0);
        break;
      case "top":
        camera.position.set(0, d, 0.001);
        break;
      case "bottom":
        camera.position.set(0, -d, 0.001);
        break;
      case "hero":
      default:
        camera.position.set(0, 0, d);
        break;
    }
    camera.lookAt(0, 0, 0);
    controls.target.set(0, 0, 0);
    controls.update();
  }, [cameraPreset]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let disposed = false;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.cssText =
      "display:block;width:100%;height:100%;touch-action:none;will-change:transform;backface-visibility:hidden;";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 3.5;
    controls.maxDistance = 30;
    controls.enabled = liveProps.current.enableOrbit;
    controls.autoRotate = liveProps.current.autoRotate;
    controls.autoRotateSpeed = liveProps.current.autoRotateSpeed;
    controlsRef.current = controls;

    const transformControls = new TransformControls(camera, renderer.domElement);
    transformControls.size = 0.85;
    transformControls.setMode(liveProps.current.gizmoMode);
    transformControlsRef.current = transformControls;

    const helper = transformControls.getHelper();
    scene.add(helper);

    let isTransformDragging = false;
    transformControls.addEventListener("dragging-changed", (event) => {
      isTransformDragging = !!event.value;
      controls.enabled = !event.value && liveProps.current.enableOrbit;
    });

    transformControls.addEventListener("change", () => {
      const obj = transformControls.object;
      if (!obj || !obj.userData?.partName) return;
      const pName = obj.userData.partName as PartName;
      onPartTransformChange?.(pName, {
        x: Number(obj.position.x.toFixed(4)),
        y: Number(obj.position.y.toFixed(4)),
        z: Number(obj.position.z.toFixed(4)),
        scaleX: Number(obj.scale.x.toFixed(3)),
        scaleY: Number(obj.scale.y.toFixed(3)),
        scaleZ: Number(obj.scale.z.toFixed(3)),
      });
    });

    let startY = -8;
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      const a = w / h;
      renderer.setSize(w, h, false);
      camera.aspect = a;
      camera.updateProjectionMatrix();
      const d = Math.max(12.6, 8.8 / a);
      defaultDistRef.current = d;
      camera.position.set(0, 0, d);
      camera.lookAt(0, 0, 0);
      controls.target.set(0, 0, 0);
      controls.update();
      startY = -(
        d * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) +
        ((H * (liveProps.current.phoneScale || 1)) / 2) +
        1.8
      );
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    const pm = new THREE.PMREMGenerator(renderer);
    const es = new THREE.Scene();
    es.background = new THREE.Color(0x222224);
    const panels: [number, number, number, number, number, number][] = [
      [10, 4, 0, 6, -3, 3.2],
      [3, 9, -7, 0, -3, 2.4],
      [3, 9, 7, 0, -3, 2.4],
      [9, 2.5, 0, -5, -4, 1.4],
      [6, 6, 0, 1, 8, 2.0],
    ];
    panels.forEach(([pw, ph, px, py, pz, pk]) => {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(pw, ph),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(liveProps.current.envTint).multiplyScalar(pk * liveProps.current.envBrightness),
          side: THREE.DoubleSide,
        })
      );
      m.position.set(px, py, pz);
      m.lookAt(0, 0, 0);
      es.add(m);
    });
    const envRT = pm.fromScene(es, 0.04);
    scene.environment = envRT.texture;
    disposeTree(es);
    lightsRef.current.pm = pm;
    lightsRef.current.envRT = envRT;

    const sun = new THREE.DirectionalLight(liveProps.current.keyLightColor, liveProps.current.keyLightIntensity);
    sun.position.set(
      liveProps.current.keyLightPosition[0],
      liveProps.current.keyLightPosition[1],
      liveProps.current.keyLightPosition[2]
    );
    scene.add(sun);
    lightsRef.current.sun = sun;

    const rim = new THREE.DirectionalLight(liveProps.current.rimLightColor, liveProps.current.rimLightIntensity);
    rim.position.set(-3.5, 2, -6);
    scene.add(rim);
    lightsRef.current.rim = rim;

    const ambient = new THREE.AmbientLight(
      liveProps.current.ambientLightColor,
      liveProps.current.ambientLightIntensity
    );
    scene.add(ambient);
    lightsRef.current.ambient = ambient;

    const phone = new THREE.Group();
    phone.scale.setScalar(liveProps.current.phoneScale || 1);
    phoneRef.current = phone;
    scene.add(phone);

    const titanium = new THREE.MeshStandardMaterial({
      color: new THREE.Color(liveProps.current.bodyColor),
      metalness: liveProps.current.metalness,
      roughness: liveProps.current.roughness,
    });
    materialsRef.current.titanium = titanium;

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = phone) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      parent.add(m);
      return m;
    };

    const registerPart = (name: PartName, obj: THREE.Object3D) => {
      obj.userData.partName = name;
      partsMapRef.current.set(name, obj);

      const def = DEFAULT_PHONE_CONFIG[name];
      if (def) {
        obj.position.set(def.x, def.y, def.z);
        obj.scale.set(def.scaleX, def.scaleY, def.scaleZ);
      }
    };

    const bt = 0.048;
    const bodyGeo = new THREE.ExtrudeGeometry(rr(W - 2 * bt, H - 2 * bt, R - bt), {
      depth: D - 2 * bt,
      bevelEnabled: true,
      bevelThickness: bt,
      bevelSize: bt,
      bevelSegments: 8,
      curveSegments: 36,
    });
    bodyGeo.translate(0, 0, -(D - 2 * bt) / 2);
    add(bodyGeo, titanium, 0, 0, 0);

    const antennaMat = new THREE.MeshBasicMaterial({ color: 0x2e0d16 });
    const addAntennaBand = (x: number, y: number) => {
      return add(new THREE.BoxGeometry(0.015, 0.018, D + 0.004), antennaMat, x, y, 0);
    };
    addAntennaBand(-W / 2 + 0.005, 1.82);
    addAntennaBand(W / 2 - 0.005, 1.82);
    addAntennaBand(-W / 2 + 0.005, -1.82);
    addAntennaBand(W / 2 - 0.005, -1.82);

    const buttonMat = titanium;
    const createCapsulePart = (name: PartName, side: number, y: number, length: number, thickness = 0.062) => {
      const group = new THREE.Group();
      group.position.set(side * (W / 2 + 0.005), y, 0);

      const shape = createPillShape(thickness, length);
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 0.024,
        bevelEnabled: true,
        bevelThickness: 0.006,
        bevelSize: 0.006,
        bevelSegments: 4,
        curveSegments: 24,
      });
      geo.center();
      const mesh = new THREE.Mesh(geo, buttonMat);
      mesh.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
      group.add(mesh);

      phone.add(group);
      registerPart(name, group);
      return group;
    };

    createCapsulePart("actionBtn", -1, 1.25, 0.22, 0.062);
    createCapsulePart("volUpBtn", -1, 0.78, 0.42, 0.062);
    createCapsulePart("volDownBtn", -1, 0.26, 0.42, 0.062);
    createCapsulePart("powerBtn", 1, 0.72, 0.65, 0.064);

    const camControlGroup = new THREE.Group();
    camControlGroup.position.set(W / 2 + 0.002, -0.75, 0);
    const camControlShape = createPillShape(0.062, 0.48);
    const camControlGeo = new THREE.ExtrudeGeometry(camControlShape, {
      depth: 0.008,
      bevelEnabled: true,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 3,
      curveSegments: 20,
    });
    camControlGeo.center();
    const camControlMesh = new THREE.Mesh(
      camControlGeo,
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(liveProps.current.bodyColor),
        metalness: 0.9,
        roughness: 0.15,
      })
    );
    camControlMesh.rotation.y = Math.PI / 2;
    camControlGroup.add(camControlMesh);
    phone.add(camControlGroup);
    registerPart("camControl", camControlGroup);

    const SW = W - 0.14;
    const SH = H - 0.14;
    const zf = D / 2;

    add(
      new THREE.ShapeGeometry(rr(W - 0.08, H - 0.08, R - 0.04), 32),
      new THREE.MeshBasicMaterial({ color: 0x050505 }),
      0,
      0,
      zf + 0.001
    );

    const sg = new THREE.ShapeGeometry(rr(SW, SH, R - 0.07), 32);
    const pos = sg.attributes.position as THREE.BufferAttribute;
    const uv = sg.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      uv.setXY(i, (pos.getX(i) + SW / 2) / SW, (pos.getY(i) + SH / 2) / SH);
    }
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    add(sg, screenMat, 0, 0, zf + 0.002);

    const glareCanvas = document.createElement("canvas");
    glareCanvas.width = 512;
    glareCanvas.height = 1024;
    const gctx = glareCanvas.getContext("2d");
    if (gctx) {
      gctx.clearRect(0, 0, 512, 1024);
      const grad = gctx.createLinearGradient(0, 0, 512, 0);
      grad.addColorStop(0.0, "rgba(255, 255, 255, 0)");
      grad.addColorStop(0.25, "rgba(255, 255, 255, 0)");
      grad.addColorStop(0.36, "rgba(220, 240, 255, 0.1)");
      grad.addColorStop(0.44, "rgba(235, 248, 255, 0.45)");
      grad.addColorStop(0.50, "rgba(255, 255, 255, 0.95)");
      grad.addColorStop(0.56, "rgba(235, 248, 255, 0.45)");
      grad.addColorStop(0.64, "rgba(220, 240, 255, 0.1)");
      grad.addColorStop(0.75, "rgba(255, 255, 255, 0)");
      grad.addColorStop(1.0, "rgba(255, 255, 255, 0)");
      gctx.fillStyle = grad;
      gctx.fillRect(0, 0, 512, 1024);
    }
    const glareTex = new THREE.CanvasTexture(glareCanvas);
    glareTex.wrapS = THREE.ClampToEdgeWrapping;
    glareTex.wrapT = THREE.ClampToEdgeWrapping;
    glareTex.rotation = 0.42;
    glareTex.center.set(0.5, 0.5);

    const glareGeo = sg.clone();
    const glareMat = new THREE.MeshBasicMaterial({
      map: glareTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    add(glareGeo, glareMat, 0, 0, zf + 0.0033);

    const islandPill = add(
      new THREE.ShapeGeometry(createPillShape(0.56, 0.16), 24),
      new THREE.MeshBasicMaterial({ color: 0x020202 }),
      0,
      SH / 2 - 0.14,
      zf + 0.004
    );
    const islandCam = new THREE.Mesh(
      new THREE.CircleGeometry(0.035, 20),
      new THREE.MeshStandardMaterial({ color: 0x0f1520, roughness: 0.1, metalness: 0.6 })
    );
    islandCam.position.set(-0.14, 0, 0.001);
    islandPill.add(islandCam);

    const plateauW = 1.85;
    const plateauH = 1.08;
    const plateauR = 0.32;
    const plateauY = 1.55;
    const plateauZ = -D / 2 - 0.002;

    const plateauGroup = new THREE.Group();
    plateauGroup.position.set(0, plateauY, plateauZ);
    const plateauGeo = new THREE.ExtrudeGeometry(rr(plateauW, plateauH, plateauR), {
      depth: 0.042,
      bevelEnabled: true,
      bevelThickness: 0.016,
      bevelSize: 0.016,
      bevelSegments: 6,
      curveSegments: 36,
    });
    plateauGeo.translate(0, 0, -0.042);
    const plateauMesh = new THREE.Mesh(plateauGeo, titanium);
    plateauGroup.add(plateauMesh);
    phone.add(plateauGroup);
    registerPart("plateau", plateauGroup);

    const panelW = 1.85;
    const panelH = 3.08;
    const panelR = 0.34;
    const panelY = -0.54;
    const panelZ = -D / 2 - 0.001;

    const panelGroup = new THREE.Group();
    panelGroup.position.set(0, panelY, panelZ);

    const panelMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(liveProps.current.backPanelColor),
      metalness: 0.25,
      roughness: liveProps.current.backPanelRoughness,
    });
    materialsRef.current.panel = panelMat;

    const panelMesh = new THREE.Mesh(new THREE.ShapeGeometry(rr(panelW, panelH, panelR), 36), panelMat);
    panelMesh.rotation.y = Math.PI;
    panelGroup.add(panelMesh);

    phone.add(panelGroup);
    registerPart("backPanel", panelGroup);

    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(liveProps.current.cameraRingColor),
      metalness: liveProps.current.cameraRingMetalness,
      roughness: 0.28,
    });
    materialsRef.current.ring = ringMat;

    const innerLensMat = new THREE.MeshStandardMaterial({
      color: 0x14161a,
      metalness: 0.85,
      roughness: 0.2,
    });

    const glassLensMat = new THREE.MeshStandardMaterial({
      color: 0x020304,
      metalness: 0.35,
      roughness: 0.04,
    });

    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x07111c });

    const zBase = plateauZ - 0.06;

    const buildLensGroup = (name: PartName, initX: number, initY: number) => {
      const g = new THREE.Group();
      g.position.set(initX, initY, zBase);

      const outerCollar = new THREE.CylinderGeometry(0.18, 0.185, 0.05, 48);
      const m1 = new THREE.Mesh(outerCollar, ringMat);
      m1.position.z = -0.025;
      m1.rotation.x = Math.PI / 2;
      g.add(m1);

      const innerCollar = new THREE.CylinderGeometry(0.158, 0.162, 0.056, 48);
      const m2 = new THREE.Mesh(innerCollar, innerLensMat);
      m2.position.z = -0.028;
      m2.rotation.x = Math.PI / 2;
      g.add(m2);

      const glassElement = new THREE.CylinderGeometry(0.125, 0.125, 0.06, 40);
      const m3 = new THREE.Mesh(glassElement, glassLensMat);
      m3.position.z = -0.03;
      m3.rotation.x = Math.PI / 2;
      g.add(m3);

      const pupil = new THREE.CircleGeometry(0.055, 32);
      const m4 = new THREE.Mesh(pupil, pupilMat);
      m4.position.z = -0.0605;
      m4.rotation.y = Math.PI;
      g.add(m4);

      phone.add(g);
      registerPart(name, g);
      return g;
    };

    buildLensGroup("lensTopLeft", 0.48, plateauY + 0.25);
    buildLensGroup("lensBottomLeft", 0.48, plateauY - 0.25);
    buildLensGroup("lensCenter", 0.10, plateauY);

    const flashGroup = new THREE.Group();
    flashGroup.position.set(-0.52, plateauY + 0.25, zBase);
    const flashBase = new THREE.CylinderGeometry(0.08, 0.084, 0.018, 32);
    const flashRim = new THREE.Mesh(flashBase, ringMat);
    flashRim.position.z = -0.009;
    flashRim.rotation.x = Math.PI / 2;
    flashGroup.add(flashRim);

    const flashDiffuser = new THREE.CircleGeometry(0.065, 28);
    const flashMat = new THREE.MeshStandardMaterial({
      color: 0xfdf8ee,
      emissive: 0xfff4e0,
      emissiveIntensity: 0.28,
      roughness: 0.32,
    });
    const flashMesh = new THREE.Mesh(flashDiffuser, flashMat);
    flashMesh.position.z = -0.019;
    flashMesh.rotation.y = Math.PI;
    flashGroup.add(flashMesh);
    phone.add(flashGroup);
    registerPart("flash", flashGroup);

    const micGroup = new THREE.Group();
    micGroup.position.set(-0.52, plateauY + 0.03, zBase);
    const micHole = new THREE.CircleGeometry(0.015, 20);
    const micMesh = new THREE.Mesh(micHole, new THREE.MeshBasicMaterial({ color: 0x050505 }));
    micMesh.position.z = -0.005;
    micMesh.rotation.y = Math.PI;
    micGroup.add(micMesh);
    phone.add(micGroup);
    registerPart("mic", micGroup);

    const lidarGroup = new THREE.Group();
    lidarGroup.position.set(-0.52, plateauY - 0.25, zBase);
    const lidarBase = new THREE.CylinderGeometry(0.086, 0.09, 0.016, 32);
    const lidarRim = new THREE.Mesh(lidarBase, ringMat);
    lidarRim.position.z = -0.008;
    lidarRim.rotation.x = Math.PI / 2;
    lidarGroup.add(lidarRim);

    const lidarGlass = new THREE.CircleGeometry(0.074, 28);
    const lidarMat = new THREE.MeshStandardMaterial({ color: 0x08090d, roughness: 0.08, metalness: 0.3 });
    const lidarMesh = new THREE.Mesh(lidarGlass, lidarMat);
    lidarMesh.position.z = -0.017;
    lidarMesh.rotation.y = Math.PI;
    lidarGroup.add(lidarMesh);
    phone.add(lidarGroup);
    registerPart("lidar", lidarGroup);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      if (isTransformDragging) return;
      if (!liveProps.current.enableGizmo) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const selectableMeshes: THREE.Object3D[] = [];
      partsMapRef.current.forEach((obj) => {
        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            selectableMeshes.push(child);
          }
        });
      });

      const intersects = raycaster.intersectObjects(selectableMeshes, false);
      if (intersects.length > 0) {
        let curr: THREE.Object3D | null = intersects[0].object;
        while (curr && curr !== phone && !curr.userData?.partName) {
          curr = curr.parent;
        }
        if (curr && curr.userData?.partName) {
          const clickedPart = curr.userData.partName as PartName;
          onSelectPart?.(clickedPart);
        }
      }
    };

    renderer.domElement.addEventListener("pointerdown", handlePointerDown);

    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sctx = shadowCanvas.getContext("2d");
    if (sctx) {
      const grad = sctx.createRadialGradient(64, 64, 10, 64, 64, 64);
      grad.addColorStop(0, "rgba(0,0,0,0.48)");
      grad.addColorStop(0.5, "rgba(0,0,0,0.18)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: liveProps.current.showFloorShadow ? 0.8 : 0,
      depthWrite: false,
      visible: !!liveProps.current.showFloorShadow,
    });
    materialsRef.current.floorShadow = shadowMat;
    const floorShadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 5.8), shadowMat);
    floorShadowMesh.rotation.x = -Math.PI / 2;
    floorShadowMesh.position.y = -H / 2 - 0.35;
    floorShadowMesh.visible = !!liveProps.current.showFloorShadow;
    floorShadowMeshRef.current = floorShadowMesh;
    if (liveProps.current.showFloorShadow) {
      scene.add(floorShadowMesh);
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t0: number | null = null;
    const triggerReplay = () => {
      t0 = performance.now();
    };
    playRef.current = triggerReplay;
    onReplayTrigger?.(triggerReplay);

    let screenTex: THREE.CanvasTexture | null = null;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (disposed) return;
      const cw = 900;
      const ch = Math.round((cw * SH) / SW);
      const sc = document.createElement("canvas");
      sc.width = cw;
      sc.height = ch;
      const g = sc.getContext("2d");
      if (!g) return;
      g.fillStyle = "#141210";
      g.fillRect(0, 0, cw, ch);
      if ("filter" in g) {
        const k = ch / img.height;
        g.filter = "blur(28px)";
        g.drawImage(img, (cw - img.width * k) / 2, 0, img.width * k, ch);
        g.filter = "none";
        g.fillStyle = "rgba(0,0,0,0.35)";
        g.fillRect(0, 0, cw, ch);
      }
      const k = cw / img.width;
      g.drawImage(img, 0, (ch - img.height * k) / 2, cw, img.height * k);
      screenTex = new THREE.CanvasTexture(sc);
      screenTex.colorSpace = THREE.SRGBColorSpace;
      screenTex.anisotropy = 4;
      renderer.initTexture(screenTex);
      screenMat.map = screenTex;
      screenMat.color.set(0xffffff);
      screenMat.needsUpdate = true;
      triggerReplay();
    };
    img.src = src;

    renderer.compile(scene, camera);

    let raf = 0;
    const frame = (now: number) => {
      if (pausedRef.current || !mount.clientWidth || !mount.clientHeight) {
        raf = requestAnimationFrame(frame);
        return;
      }
      const dur = liveProps.current.entranceDuration || 2.2;
      const delay = liveProps.current.entranceDelay || 0.2;
      const el = t0 === null ? -1 : (now - t0) / 1000;
      const p = reduced ? 1 : Math.min(Math.max((el - delay) / dur, 0), 1);
      const e = 1 - Math.pow(1 - p, 3);
      const s = p * p * p * (p * (p * 6 - 15) + 10);
      const on = reduced ? 0 : Math.min(Math.max(el - delay - dur, 0), 1);

      let a = 0;
      let b = 0;
      if (liveProps.current.isFloating) {
        const speed = liveProps.current.floatSpeed || 1;
        const mode = liveProps.current.floatEaseMode;
        if (mode === "breathing") {
          const s1 = Math.sin((now * speed) / 1400);
          const s2 = Math.sin((now * speed) / 2200 + 1);
          a = Math.sign(s1) * Math.pow(Math.abs(s1), 0.72) * on;
          b = Math.sign(s2) * Math.pow(Math.abs(s2), 0.72) * on;
        } else if (mode === "pendulum") {
          const t = (now * speed) / 1000;
          a = (Math.sin(t * 0.8) * 0.7 + Math.sin(t * 1.6) * 0.3) * on;
          b = (Math.cos(t * 0.6) * 0.8 + Math.sin(t * 1.2) * 0.2) * on;
        } else if (mode === "dynamic") {
          const t = (now * speed) / 1200;
          a = (Math.sin(t) + 0.2 * Math.sin(3 * t)) * on;
          b = (Math.cos(t * 0.7) + 0.15 * Math.sin(2 * t)) * on;
        } else {
          a = Math.sin((now * speed) / 1300) * on;
          b = Math.sin((now * speed) / 2100 + 1) * on;
        }
      }

      const fAmp = liveProps.current.floatAmplitude ?? 0.025;
      const tAmp = liveProps.current.tiltAmplitude ?? 0.012;
      const spinAngle = Math.PI * 1.1;
      const end = liveProps.current.endPosition || END;

      phone.position.y = startY * (1 - e) + a * fAmp;
      phone.rotation.set(
        end.x + b * tAmp,
        end.y - spinAngle * (1 - s) + a * (tAmp * 1.3),
        end.z + b * (tAmp * 0.8)
      );

      if (floorShadowMesh.visible) {
        floorShadowMesh.position.y = -H / 2 - 0.35 + phone.position.y * 0.15;
        floorShadowMesh.scale.setScalar(1 + (phone.position.y - startY) * 0.03);
      }

      if (p < 1) {
        const sweepProgress = Math.min(Math.max((s - 0.2) / 0.72, 0), 1);
        const spinHighlight = Math.sin(sweepProgress * Math.PI);
        glareMat.opacity = Math.pow(spinHighlight, 1.15) * 0.95;
        glareTex.offset.x = -0.75 + sweepProgress * 0.98;
      } else {
        glareMat.opacity = 0;
      }

      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      ro.disconnect();
      controls.dispose();
      transformControls.dispose();
      disposeTree(scene);
      screenTex?.dispose();
      glareTex.dispose();
      shadowTex.dispose();
      envRT.dispose();
      pm.dispose();
      renderer.dispose();
      materialsRef.current.floorShadow = undefined;
      floorShadowMeshRef.current = null;
      phoneRef.current = null;
      sceneRef.current = null;
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [src]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full select-none ${className}`}
      role="img"
      aria-label="iPhone 18 Pro Max 3D model with interactive drag, drop, and resize controls"
    >
      {showReplay && (
        <button
          type="button"
          onClick={() => playRef.current()}
          className="absolute left-1/2 -translate-x-1/2 bottom-5 z-10 px-5 py-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-900 text-white text-xs font-mono font-medium tracking-wider uppercase border border-white/20 shadow-xl backdrop-blur-md transition-all active:scale-95 pointer-events-auto"
        >
          Replay Entrance
        </button>
      )}
    </div>
  );
}
