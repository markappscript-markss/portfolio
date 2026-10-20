"use client";

import React, { useState, useRef, useTransition, useEffect } from "react";
import Phone3D, { PartName, PartTransformData, DEFAULT_PHONE_CONFIG } from "@/components/Phone3D";

type LightingPresetKey = "studio" | "golden" | "cyber" | "noir" | "commercial";
type ShadingPresetKey = "deepBurgundy" | "royalMerlot" | "midnightCrimson" | "velvetMerlot" | "blackTitanium" | "naturalTitanium";

interface ShadingPreset {
  name: string;
  bodyColor: string;
  metalness: number;
  roughness: number;
  backPanelColor: string;
  backPanelRoughness: number;
  cameraRingColor: string;
  cameraRingMetalness: number;
}

const SHADING_PRESETS: Record<ShadingPresetKey, ShadingPreset> = {
  deepBurgundy: {
    name: "Deep Burgundy (Default)",
    bodyColor: "#4D1821",
    metalness: 0.72,
    roughness: 0.35,
    backPanelColor: "#501625",
    backPanelRoughness: 0.52,
    cameraRingColor: "#8e384e",
    cameraRingMetalness: 0.85,
  },
  royalMerlot: {
    name: "Royal Merlot",
    bodyColor: "#7e283f",
    metalness: 0.75,
    roughness: 0.32,
    backPanelColor: "#6c2134",
    backPanelRoughness: 0.5,
    cameraRingColor: "#a3455e",
    cameraRingMetalness: 0.85,
  },
  midnightCrimson: {
    name: "Midnight Crimson",
    bodyColor: "#4a101f",
    metalness: 0.8,
    roughness: 0.3,
    backPanelColor: "#380b16",
    backPanelRoughness: 0.6,
    cameraRingColor: "#691d30",
    cameraRingMetalness: 0.85,
  },
  velvetMerlot: {
    name: "Velvet Merlot",
    bodyColor: "#8d1f3b",
    metalness: 0.65,
    roughness: 0.4,
    backPanelColor: "#781830",
    backPanelRoughness: 0.58,
    cameraRingColor: "#b23e5e",
    cameraRingMetalness: 0.75,
  },
  blackTitanium: {
    name: "Black Titanium",
    bodyColor: "#1d1c20",
    metalness: 0.82,
    roughness: 0.28,
    backPanelColor: "#141316",
    backPanelRoughness: 0.5,
    cameraRingColor: "#3a3840",
    cameraRingMetalness: 0.9,
  },
  naturalTitanium: {
    name: "Natural Titanium",
    bodyColor: "#8c8780",
    metalness: 0.78,
    roughness: 0.34,
    backPanelColor: "#757069",
    backPanelRoughness: 0.52,
    cameraRingColor: "#aba69e",
    cameraRingMetalness: 0.85,
  },
};

interface LightingPreset {
  name: string;
  keyIntensity: number;
  keyColor: string;
  keyPos: [number, number, number];
  envBrightness: number;
  envTint: string;
  rimIntensity: number;
  rimColor: string;
  ambientIntensity: number;
  ambientColor: string;
}

const LIGHTING_PRESETS: Record<LightingPresetKey, LightingPreset> = {
  studio: {
    name: "Studio Clean (Default)",
    keyIntensity: 1.8,
    keyColor: "#ffffff",
    keyPos: [3, 5, -8],
    envBrightness: 1.15,
    envTint: "#ffffff",
    rimIntensity: 1.1,
    rimColor: "#ffffff",
    ambientIntensity: 0.5,
    ambientColor: "#ffffff",
  },
  golden: {
    name: "Golden Hour / Warm Stage",
    keyIntensity: 1.95,
    keyColor: "#ffe7cc",
    keyPos: [4, 4, -7],
    envBrightness: 1.25,
    envTint: "#ffd7b0",
    rimIntensity: 1.3,
    rimColor: "#ffab80",
    ambientIntensity: 0.55,
    ambientColor: "#ffe4d1",
  },
  cyber: {
    name: "Cyber Rim / Cool Cyan",
    keyIntensity: 2.0,
    keyColor: "#f0f9ff",
    keyPos: [2, 6, -8],
    envBrightness: 1.2,
    envTint: "#bae6fd",
    rimIntensity: 1.9,
    rimColor: "#38bdf8",
    ambientIntensity: 0.35,
    ambientColor: "#0284c7",
  },
  noir: {
    name: "Dramatic Noir (High Contrast)",
    keyIntensity: 1.3,
    keyColor: "#ffffff",
    keyPos: [5, 4, -6],
    envBrightness: 0.75,
    envTint: "#e2e8f0",
    rimIntensity: 1.5,
    rimColor: "#cbd5e1",
    ambientIntensity: 0.22,
    ambientColor: "#475569",
  },
  commercial: {
    name: "Bright Commercial (Soft Diffusion)",
    keyIntensity: 1.65,
    keyColor: "#ffffff",
    keyPos: [6, 2, -4],
    envBrightness: 0.9,
    envTint: "#ffffff",
    rimIntensity: 1.35,
    rimColor: "#ffffff",
    ambientIntensity: 0.7,
    ambientColor: "#ffffff",
  },
};

const PART_LABELS: Record<PartName, string> = {
  plateau: "Camera Island (Plateau)",
  lensTopLeft: "Top-Left Lens",
  lensBottomLeft: "Bottom-Left Lens",
  lensCenter: "Center-Apex Lens",
  flash: "True Tone Flash",
  lidar: "LiDAR Scanner",
  mic: "Microphone",
  backPanel: "Lower Back Glass",
  actionBtn: "Action Button (Left)",
  volUpBtn: "Volume Up (Left)",
  volDownBtn: "Volume Down (Left)",
  powerBtn: "Side/Power Button (Right)",
  camControl: "Camera Control (Right)",
};

const DEFAULT_PART_DATA: Record<PartName, PartTransformData> = DEFAULT_PHONE_CONFIG;

export default function SandboxPage() {
  const [, startTransition] = useTransition();

  const [activeTab, setActiveTab] = useState<"angle" | "inspector" | "shading" | "view" | "float" | "lighting" | "export">("angle");
  const [isUiCollapsed, setIsUiCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [endAngleCopied, setEndAngleCopied] = useState(false);

  const [endPosition, setEndPosition] = useState({ x: -0.33, y: 0.33, z: 0 });

  const [enableGizmo, setEnableGizmo] = useState(true);
  const [gizmoMode, setGizmoMode] = useState<"translate" | "scale">("translate");
  const [selectedPart, setSelectedPart] = useState<PartName | null>("plateau");
  const [lockAspectRatio, setLockAspectRatio] = useState(false);
  const [partData, setPartData] = useState<Record<PartName, PartTransformData>>(DEFAULT_PART_DATA);

  const [enableOrbit, setEnableOrbit] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(1.5);
  const [cameraPreset, setCameraPreset] = useState("hero");

  const [entranceDuration, setEntranceDuration] = useState(2.2);
  const [entranceDelay, setEntranceDelay] = useState(0.2);

  const [shadingPreset, setShadingPreset] = useState<ShadingPresetKey>("deepBurgundy");
  const [bodyColor, setBodyColor] = useState("#4D1821");
  const [metalness, setMetalness] = useState(0.72);
  const [roughness, setRoughness] = useState(0.35);
  const [autoHarmonize, setAutoHarmonize] = useState(true);
  const [backPanelColor, setBackPanelColor] = useState("#501625");
  const [backPanelRoughness, setBackPanelRoughness] = useState(0.52);
  const [cameraRingColor, setCameraRingColor] = useState("#8e384e");
  const [cameraRingMetalness, setCameraRingMetalness] = useState(0.85);

  const [isFloating, setIsFloating] = useState(true);
  const [floatAmplitude, setFloatAmplitude] = useState(0.012);
  const [tiltAmplitude, setTiltAmplitude] = useState(0.012);
  const [floatSpeed, setFloatSpeed] = useState(0.6);
  const [floatEaseMode, setFloatEaseMode] = useState<"sine" | "pendulum" | "breathing" | "dynamic">("sine");

  const [lightingPreset, setLightingPreset] = useState<LightingPresetKey>("commercial");
  const [keyLightIntensity, setKeyLightIntensity] = useState(1.65);
  const [keyLightColor, setKeyLightColor] = useState("#ffffff");
  const [keyLightPosPreset, setKeyLightPosPreset] = useState<"frontRight" | "frontLeft" | "overhead" | "side">("side");
  const [envBrightness, setEnvBrightness] = useState(0.9);
  const [envTint, setEnvTint] = useState("#ffffff");
  const [rimLightIntensity, setRimLightIntensity] = useState(1.35);
  const [rimLightColor, setRimLightColor] = useState("#ffffff");
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(0.7);
  const [ambientLightColor, setAmbientLightColor] = useState("#ffffff");
  const [showFloorShadow, setShowFloorShadow] = useState(false);

  const replayTriggerRef = useRef<() => void>(() => { });

  const handleApplyShadingPreset = (key: ShadingPresetKey) => {
    const p = SHADING_PRESETS[key];
    setShadingPreset(key);
    setBodyColor(p.bodyColor);
    setMetalness(p.metalness);
    setRoughness(p.roughness);
    setBackPanelColor(p.backPanelColor);
    setBackPanelRoughness(p.backPanelRoughness);
    setCameraRingColor(p.cameraRingColor);
    setCameraRingMetalness(p.cameraRingMetalness);
  };

  const handleBodyColorChange = (color: string) => {
    setBodyColor(color);
    if (autoHarmonize) {
      try {
        const c = parseInt(color.replace("#", ""), 16);
        const r = (c >> 16) & 255;
        const g = (c >> 8) & 255;
        const b = c & 255;

        const panelR = Math.max(0, Math.round(r * 0.82));
        const panelG = Math.max(0, Math.round(g * 0.82));
        const panelB = Math.max(0, Math.round(b * 0.82));
        const panelHex = `#${((1 << 24) + (panelR << 16) + (panelG << 8) + panelB).toString(16).slice(1)}`;
        setBackPanelColor(panelHex);

        const ringR = Math.min(255, Math.round(r * 1.35));
        const ringG = Math.min(255, Math.round(g * 1.35));
        const ringB = Math.min(255, Math.round(b * 1.35));
        const ringHex = `#${((1 << 24) + (ringR << 16) + (ringG << 8) + ringB).toString(16).slice(1)}`;
        setCameraRingColor(ringHex);
      } catch { }
    }
  };

  const handleApplyLightingPreset = (key: LightingPresetKey) => {
    const p = LIGHTING_PRESETS[key];
    setLightingPreset(key);
    setKeyLightIntensity(p.keyIntensity);
    setKeyLightColor(p.keyColor);
    setEnvBrightness(p.envBrightness);
    setEnvTint(p.envTint);
    setRimLightIntensity(p.rimIntensity);
    setRimLightColor(p.rimColor);
    setAmbientLightIntensity(p.ambientIntensity);
    setAmbientLightColor(p.ambientColor);
    if (key === "commercial") {
      setKeyLightPosPreset("side");
    }
  };

  const getKeyPosition = (): [number, number, number] => {
    switch (keyLightPosPreset) {
      case "frontLeft":
        return [-3, 5, -8];
      case "overhead":
        return [0, 8, -4];
      case "side":
        return [6, 2, -4];
      case "frontRight":
      default:
        return [3, 5, -8];
    }
  };

  const handleTransformChange = (part: PartName, data: PartTransformData) => {
    setPartData((prev) => ({
      ...prev,
      [part]: data,
    }));
  };

  const updateSelectedPartField = (field: keyof PartTransformData, value: number) => {
    if (!selectedPart) return;
    setPartData((prev) => ({
      ...prev,
      [selectedPart]: {
        ...prev[selectedPart],
        [field]: value,
      },
    }));
  };

  const handleResetSelectedPart = () => {
    if (!selectedPart) return;
    setPartData((prev) => ({
      ...prev,
      [selectedPart]: { ...DEFAULT_PART_DATA[selectedPart] },
    }));
  };

  const handleResetAllParts = () => {
    setPartData({ ...DEFAULT_PART_DATA });
  };

  const settingsExport = {
    src: "/images/iphone/sneaker-ad.webp",
    bodyColor,
    metalness,
    roughness,
    backPanelColor,
    backPanelRoughness,
    cameraRingColor,
    cameraRingMetalness,
    keyLightIntensity,
    keyLightColor,
    keyLightPosition: getKeyPosition(),
    envBrightness,
    envTint,
    rimLightIntensity,
    rimLightColor,
    ambientLightIntensity,
    ambientLightColor,
    showFloorShadow,
    floatAmplitude,
    tiltAmplitude,
    floatSpeed,
    floatEaseMode,
    endPosition,
    partCoordinates: partData,
  };

  const handleCopySettings = () => {
    navigator.clipboard.writeText(JSON.stringify(settingsExport, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEndPosition = () => {
    navigator.clipboard.writeText(JSON.stringify({ endPosition }, null, 2));
    setEndAngleCopied(true);
    setTimeout(() => setEndAngleCopied(false), 2000);
  };

  const currentPart = selectedPart ? partData[selectedPart] : null;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#090b0e] text-neutral-100 font-sans select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,22,32,0.4)_0%,_rgba(9,11,14,0.96)_75%)] pointer-events-none" />

      <header className="absolute top-4 left-5 z-20 flex items-center gap-3 pointer-events-auto">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-200">
            iPhone 18 Pro Max 3D Studio
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">
            3D Gizmo Active
          </span>
        </div>
      </header>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-neutral-950/85 border border-white/15 backdrop-blur-xl shadow-2xl pointer-events-auto">
        <button
          type="button"
          onClick={() => setGizmoMode("translate")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${gizmoMode === "translate"
              ? "bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20"
              : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          title="Move/Translate part (drag arrows in 3D)"
        >
          <span>⤧</span>
          <span>Move (Drag)</span>
        </button>

        <button
          type="button"
          onClick={() => setGizmoMode("scale")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${gizmoMode === "scale"
              ? "bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20"
              : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          title="Resize/Scale part (drag cubes in 3D)"
        >
          <span>⤢</span>
          <span>Resize</span>
        </button>

        <div className="w-px h-5 bg-white/15 mx-1" />

        <button
          type="button"
          onClick={() => setEnableGizmo(!enableGizmo)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${enableGizmo
              ? "bg-white/10 text-neutral-200 font-medium"
              : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
        >
          Gizmo {enableGizmo ? "ON" : "OFF"}
        </button>
      </div>

      <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
        <Phone3D
          src="/images/iphone/sneaker-ad.webp"
          bodyColor={bodyColor}
          metalness={metalness}
          roughness={roughness}
          backPanelColor={backPanelColor}
          backPanelRoughness={backPanelRoughness}
          cameraRingColor={cameraRingColor}
          cameraRingMetalness={cameraRingMetalness}
          enableOrbit={enableOrbit}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
          cameraPreset={cameraPreset}
          isFloating={isFloating}
          floatAmplitude={floatAmplitude}
          tiltAmplitude={tiltAmplitude}
          floatSpeed={floatSpeed}
          floatEaseMode={floatEaseMode}
          entranceDuration={entranceDuration}
          entranceDelay={entranceDelay}
          keyLightIntensity={keyLightIntensity}
          keyLightColor={keyLightColor}
          keyLightPosition={getKeyPosition()}
          envBrightness={envBrightness}
          envTint={envTint}
          rimLightIntensity={rimLightIntensity}
          rimLightColor={rimLightColor}
          ambientLightIntensity={ambientLightIntensity}
          ambientLightColor={ambientLightColor}
          showFloorShadow={showFloorShadow}
          enableGizmo={enableGizmo}
          gizmoMode={gizmoMode}
          selectedPart={selectedPart}
          partOverrides={partData}
          endPosition={endPosition}
          onSelectPart={(p) => {
            setSelectedPart(p);
            if (p) setActiveTab("inspector");
          }}
          onPartTransformChange={handleTransformChange}
          onReplayTrigger={(fn) => {
            replayTriggerRef.current = fn;
          }}
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-950/80 border border-white/15 backdrop-blur-xl shadow-2xl pointer-events-auto select-none">
        <button
          type="button"
          onClick={() => setCameraPreset("back")}
          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 active:scale-95 ${cameraPreset === "back"
              ? "bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20"
              : "bg-white/10 hover:bg-white/20 text-neutral-300"
            }`}
          title="Align camera to straight back side"
        >
          Straight Back
        </button>

        <button
          type="button"
          onClick={() => setCameraPreset("backClose")}
          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-mono transition-all active:scale-95"
          title="Zoom directly into the camera island"
        >
          Zoom Island
        </button>

        <button
          type="button"
          onClick={() => setCameraPreset("hero")}
          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-mono transition-all active:scale-95"
          title="Reset camera to Hero 3/4 angle"
        >
          Hero 3/4
        </button>

        <div className="w-px h-5 bg-white/15" />

        <button
          type="button"
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${autoRotate
              ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/30"
              : "bg-white/10 hover:bg-white/20 text-neutral-300"
            }`}
          title="Toggle automatic 360 degree turntable rotation"
        >
          <span>🔄</span>
          <span>Turn {autoRotate ? "ON" : "OFF"}</span>
        </button>

        <button
          type="button"
          onClick={() => replayTriggerRef.current()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-mono uppercase transition-all active:scale-95"
        >
          ↻ Replay
        </button>

        <div className="w-px h-5 bg-white/15" />

        <button
          type="button"
          onClick={() => setIsUiCollapsed(!isUiCollapsed)}
          className="px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white text-xs font-mono transition-all"
        >
          {isUiCollapsed ? "Controls ◳" : "Hide ◲"}
        </button>
      </div>

      <div className="absolute bottom-6 left-6 z-10 hidden sm:block pointer-events-none text-[11px] font-mono text-neutral-400 leading-tight bg-neutral-950/70 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
        <p className="text-amber-300 font-bold mb-1">Interactive 3D Gizmo:</p>
        <p>• Click any lens, island, or button to select it</p>
        <p>• Drag the arrows to move it in real-time</p>
        <p>• Switch to &quot;Resize&quot; to scale parts</p>
      </div>

      <aside
        className={`absolute top-4 right-4 z-30 w-full sm:w-[390px] md:w-[430px] max-h-[calc(100vh-2rem)] flex flex-col rounded-3xl bg-neutral-950/85 border border-white/15 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-300 ${isUiCollapsed ? "translate-x-[110%] opacity-0 pointer-events-none" : "translate-x-0 opacity-100 pointer-events-auto"
          }`}
      >
        <div className="p-4 pb-2 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-wide text-white">3D Studio & Controls</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Drag & Drop
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsUiCollapsed(true)}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-400 hover:text-white text-xs transition-colors"
          >
            ✕
          </button>
        </div>

        <nav className="flex items-center gap-1 p-2 border-b border-white/10 overflow-x-auto text-xs font-mono">
          {(
            [
              { id: "angle", label: "📐 End Angle" },
              { id: "inspector", label: "🎯 Drag/Resize" },
              { id: "shading", label: "🍷 Shading" },
              { id: "view", label: "📱 360 View" },
              { id: "lighting", label: "💡 Lighting" },
              { id: "float", label: "🌊 Float" },
              { id: "export", label: "📋 Export" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${activeTab === tab.id
                  ? "bg-white text-neutral-950 font-bold shadow-md"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex-1 overflow-y-auto p-5 space-y-6 text-xs text-neutral-300">
          {activeTab === "angle" && (
            <div className="space-y-5">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/25 space-y-1">
                <span className="font-mono text-amber-300 font-bold block text-xs">
                  📐 Landing / Resting Angle Options
                </span>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Adjust Pitch, Yaw, and Roll below. The 3D phone reacts live in real-time, and your exported JSON automatically updates!
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-neutral-200 font-semibold block">Pitch / Tilt (X Axis)</span>
                      <span className="text-[10px] text-neutral-400">Tilt top forward (-) or back (+)</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="text-[10px] text-neutral-400">{((endPosition.x * 180) / Math.PI).toFixed(1)}°</span>
                      <input
                        type="number"
                        step="0.01"
                        value={endPosition.x}
                        onChange={(e) => setEndPosition((prev) => ({ ...prev, x: parseFloat(e.target.value) || 0 }))}
                        className="w-16 px-1.5 py-0.5 rounded bg-neutral-900 border border-white/20 text-amber-400 font-bold text-center text-xs"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="-1.50"
                    max="1.50"
                    step="0.01"
                    value={endPosition.x}
                    onChange={(e) => setEndPosition((prev) => ({ ...prev, x: parseFloat(e.target.value) }))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, x: Number((p.x - 0.05).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      -0.05
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, x: Number((p.x - 0.01).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      -0.01
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, x: 0 }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-400"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, x: Number((p.x + 0.01).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      +0.01
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, x: Number((p.x + 0.05).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      +0.05
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-neutral-200 font-semibold block">Yaw / Spin (Y Axis)</span>
                      <span className="text-[10px] text-neutral-400">Turn phone left (-) or right (+)</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="text-[10px] text-neutral-400">{((endPosition.y * 180) / Math.PI).toFixed(1)}°</span>
                      <input
                        type="number"
                        step="0.01"
                        value={endPosition.y}
                        onChange={(e) => setEndPosition((prev) => ({ ...prev, y: parseFloat(e.target.value) || 0 }))}
                        className="w-16 px-1.5 py-0.5 rounded bg-neutral-900 border border-white/20 text-amber-400 font-bold text-center text-xs"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="-3.14"
                    max="3.14"
                    step="0.01"
                    value={endPosition.y}
                    onChange={(e) => setEndPosition((prev) => ({ ...prev, y: parseFloat(e.target.value) }))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, y: Number((p.y - 0.05).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      -0.05
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, y: Number((p.y - 0.01).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      -0.01
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, y: 0 }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-400"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, y: Number((p.y + 0.01).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      +0.01
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, y: Number((p.y + 0.05).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      +0.05
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-neutral-200 font-semibold block">Roll / Cant (Z Axis)</span>
                      <span className="text-[10px] text-neutral-400">Lean sideways left (-) or right (+)</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="text-[10px] text-neutral-400">{((endPosition.z * 180) / Math.PI).toFixed(1)}°</span>
                      <input
                        type="number"
                        step="0.01"
                        value={endPosition.z}
                        onChange={(e) => setEndPosition((prev) => ({ ...prev, z: parseFloat(e.target.value) || 0 }))}
                        className="w-16 px-1.5 py-0.5 rounded bg-neutral-900 border border-white/20 text-amber-400 font-bold text-center text-xs"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="-1.50"
                    max="1.50"
                    step="0.01"
                    value={endPosition.z}
                    onChange={(e) => setEndPosition((prev) => ({ ...prev, z: parseFloat(e.target.value) }))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, z: Number((p.z - 0.05).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      -0.05
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, z: Number((p.z - 0.01).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      -0.01
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, z: 0 }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-400"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, z: Number((p.z + 0.01).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      +0.01
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndPosition((p) => ({ ...p, z: Number((p.z + 0.05).toFixed(2)) }))}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300"
                    >
                      +0.05
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Quick Angle Presets
                </label>
                <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                  {[
                    {
                      label: "🎯 Tuned Angle (Active)",
                      sub: "x: -0.33, y: 0.33, z: 0",
                      val: { x: -0.33, y: 0.33, z: 0 },
                    },
                    {
                      label: "📸 Dramatic Hero",
                      sub: "Screenshot preset",
                      val: { x: -0.20, y: 0.55, z: 0.14 },
                    },
                    {
                      label: "📐 Mild Angle",
                      sub: "Previous JSON preset",
                      val: { x: -0.06, y: 0.28, z: 0.02 },
                    },
                    {
                      label: "📱 Flat Front",
                      sub: "Straight-on display",
                      val: { x: 0, y: 0, z: 0 },
                    },
                    {
                      label: "🔄 Full Rear",
                      sub: "Showcase back island",
                      val: { x: 0, y: 3.14, z: 0 },
                    },
                    {
                      label: "↗️ High Perspective",
                      sub: "Steeper tilt look",
                      val: { x: -0.30, y: 0.65, z: 0.20 },
                    },
                    {
                      label: "↖️ Left-Turn Hero",
                      sub: "Facing left 3/4",
                      val: { x: -0.15, y: -0.45, z: -0.10 },
                    },
                  ].map((preset, idx) => {
                    const isCurrent =
                      endPosition.x === preset.val.x &&
                      endPosition.y === preset.val.y &&
                      endPosition.z === preset.val.z;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setEndPosition({ ...preset.val })}
                        className={`p-2 rounded-xl border text-left transition-all ${
                          isCurrent
                            ? "border-amber-400 bg-amber-400/20 text-white font-bold"
                            : "border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300"
                        }`}
                      >
                        <div className="text-white font-medium">{preset.label}</div>
                        <div className="text-[9px] text-neutral-400">{preset.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2 pt-1 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => replayTriggerRef.current()}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-mono font-bold text-xs uppercase transition-all shadow-lg active:scale-98 flex items-center justify-center gap-1.5"
                >
                  <span>↻</span>
                  <span>Test Entrance Landing</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCameraPreset("hero")}
                  className="w-full py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 text-xs font-mono transition-all"
                  title="Resets orbit camera so you see the exact resting perspective"
                >
                  Reset Orbit Camera to Front
                </button>
              </div>

              <div className="p-3 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    Live Auto-Adjusted JSON
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEndPosition}
                    className="px-2 py-0.5 rounded bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-[10px] font-mono border border-amber-400/30 transition-all active:scale-95"
                  >
                    {endAngleCopied ? "✓ Copied!" : "Copy Angle JSON"}
                  </button>
                </div>
                <pre className="text-[11px] font-mono text-emerald-400 bg-neutral-950 p-2.5 rounded-xl border border-white/10 overflow-x-auto">
{`"endPosition": {
  "x": ${endPosition.x},
  "y": ${endPosition.y},
  "z": ${endPosition.z}
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "inspector" && (
            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Select 3D Component to Move or Resize
                </label>
                <div className="grid grid-cols-2 gap-1.5 font-mono text-[10px]">
                  {(Object.keys(PART_LABELS) as PartName[]).map((key) => {
                    const isSelected = selectedPart === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedPart(key)}
                        className={`p-2 rounded-xl border text-left truncate transition-all ${isSelected
                            ? "border-amber-400 bg-amber-400/20 text-white font-bold"
                            : "border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300"
                          }`}
                      >
                        {PART_LABELS[key]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedPart && currentPart ? (
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-amber-400/30 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                        Active Selection
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {PART_LABELS[selectedPart]}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={handleResetSelectedPart}
                        className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-mono text-neutral-300 transition-colors"
                      >
                        Reset Part
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-[11px]">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-neutral-400">Position X (Horizontal)</span>
                        <span className="text-amber-400 font-bold">{currentPart.x.toFixed(3)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateSelectedPartField("x", Number((currentPart.x - 0.02).toFixed(3)))}
                          className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                        >
                          -
                        </button>
                        <input
                          type="range"
                          min="-1.2"
                          max="1.2"
                          step="0.01"
                          value={currentPart.x}
                          onChange={(e) => updateSelectedPartField("x", parseFloat(e.target.value))}
                          className="flex-1 accent-amber-400 cursor-pointer"
                        />
                        <button
                          type="button"
                          onClick={() => updateSelectedPartField("x", Number((currentPart.x + 0.02).toFixed(3)))}
                          className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-neutral-400">Position Y (Vertical)</span>
                        <span className="text-amber-400 font-bold">{currentPart.y.toFixed(3)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateSelectedPartField("y", Number((currentPart.y - 0.02).toFixed(3)))}
                          className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                        >
                          -
                        </button>
                        <input
                          type="range"
                          min="-2.2"
                          max="2.2"
                          step="0.01"
                          value={currentPart.y}
                          onChange={(e) => updateSelectedPartField("y", parseFloat(e.target.value))}
                          className="flex-1 accent-amber-400 cursor-pointer"
                        />
                        <button
                          type="button"
                          onClick={() => updateSelectedPartField("y", Number((currentPart.y + 0.02).toFixed(3)))}
                          className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-neutral-400">Scale / Size</span>
                        <span className="text-amber-400 font-bold">{currentPart.scaleX.toFixed(2)}x</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const ns = Math.max(0.2, Number((currentPart.scaleX - 0.05).toFixed(2)));
                            updateSelectedPartField("scaleX", ns);
                            updateSelectedPartField("scaleY", ns);
                            updateSelectedPartField("scaleZ", ns);
                          }}
                          className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                        >
                          -
                        </button>
                        <input
                          type="range"
                          min="0.3"
                          max="2.5"
                          step="0.02"
                          value={currentPart.scaleX}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            updateSelectedPartField("scaleX", val);
                            updateSelectedPartField("scaleY", val);
                            updateSelectedPartField("scaleZ", val);
                          }}
                          className="flex-1 accent-amber-400 cursor-pointer"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const ns = Math.min(2.5, Number((currentPart.scaleX + 0.05).toFixed(2)));
                            updateSelectedPartField("scaleX", ns);
                            updateSelectedPartField("scaleY", ns);
                            updateSelectedPartField("scaleZ", ns);
                          }}
                          className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center text-neutral-400 font-mono text-xs">
                  Click any camera lens, plateau, or button directly on the phone to start moving or resizing it.
                </div>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopySettings}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-mono font-bold text-xs uppercase transition-all shadow-lg active:scale-98"
                >
                  {copied ? "✓ Coordinates Copied!" : "Copy New Coordinates"}
                </button>
                <button
                  type="button"
                  onClick={handleResetAllParts}
                  className="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-300 font-mono text-xs uppercase transition-all"
                  title="Reset all parts to initial defaults"
                >
                  Reset All
                </button>
              </div>
            </div>
          )}

          {activeTab === "shading" && (
            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Burgundy Color Presets
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(SHADING_PRESETS) as ShadingPresetKey[]).map((key) => {
                    const p = SHADING_PRESETS[key];
                    const isSelected = shadingPreset === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleApplyShadingPreset(key)}
                        className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all ${isSelected
                            ? "border-amber-400 bg-amber-400/10 text-white font-medium"
                            : "border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300"
                          }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-white/30 shrink-0 shadow-inner"
                          style={{ backgroundColor: p.bodyColor }}
                        />
                        <span className="truncate text-[11px]">{p.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-neutral-200">Body Chassis Color</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={bodyColor}
                      onChange={(e) => handleBodyColorChange(e.target.value)}
                      className="w-7 h-7 rounded-lg border border-white/20 bg-transparent cursor-pointer"
                    />
                    <input
                      type="text"
                      value={bodyColor}
                      onChange={(e) => handleBodyColorChange(e.target.value)}
                      className="w-20 px-2 py-1 rounded-md bg-neutral-900 border border-white/15 text-neutral-200 font-mono text-[11px] uppercase text-center"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Auto-Harmonize Accents</span>
                  <input
                    type="checkbox"
                    checked={autoHarmonize}
                    onChange={(e) => setAutoHarmonize(e.target.checked)}
                    className="accent-amber-400 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1.5">
                    <span>Metalness</span>
                    <span className="text-amber-400 font-bold">{metalness.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={metalness}
                    onChange={(e) => setMetalness(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-0.5">
                    <span>Dielectric (0.0)</span>
                    <span>High Metallic (1.0)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1.5">
                    <span>Roughness</span>
                    <span className="text-amber-400 font-bold">{roughness.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={roughness}
                    onChange={(e) => setRoughness(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-0.5">
                    <span>Mirror Gloss (0.0)</span>
                    <span>Matte Diffuse (1.0)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-3.5">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Component Overrides
                </span>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-neutral-300">Back Glass Panel</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={backPanelColor}
                      onChange={(e) => setBackPanelColor(e.target.value)}
                      className="w-6 h-6 rounded-md border border-white/20 bg-transparent cursor-pointer"
                    />
                    <input
                      type="text"
                      value={backPanelColor}
                      onChange={(e) => setBackPanelColor(e.target.value)}
                      className="w-18 px-1.5 py-0.5 rounded bg-neutral-900 border border-white/15 text-neutral-200 font-mono text-[10px] uppercase text-center"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-neutral-400 font-mono mb-1">
                    <span>Back Glass Roughness</span>
                    <span className="text-neutral-200">{backPanelRoughness.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={backPanelRoughness}
                    onChange={(e) => setBackPanelRoughness(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-neutral-300">Camera Lens Rings</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={cameraRingColor}
                      onChange={(e) => setCameraRingColor(e.target.value)}
                      className="w-6 h-6 rounded-md border border-white/20 bg-transparent cursor-pointer"
                    />
                    <input
                      type="text"
                      value={cameraRingColor}
                      onChange={(e) => setCameraRingColor(e.target.value)}
                      className="w-18 px-1.5 py-0.5 rounded bg-neutral-900 border border-white/15 text-neutral-200 font-mono text-[10px] uppercase text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "view" && (
            <div className="space-y-5">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-neutral-200">Enable 360 Orbit</span>
                  <input
                    type="checkbox"
                    checked={enableOrbit}
                    onChange={(e) => setEnableOrbit(e.target.checked)}
                    className="accent-amber-400 w-4 h-4 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-neutral-200">Auto Turntable Spin</span>
                  <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={(e) => setAutoRotate(e.target.checked)}
                    className="accent-amber-400 w-4 h-4 cursor-pointer"
                  />
                </div>
                {autoRotate && (
                  <div>
                    <div className="flex justify-between text-neutral-400 font-mono mb-1 text-[11px]">
                      <span>Turntable Speed</span>
                      <span className="text-amber-400 font-bold">{autoRotateSpeed.toFixed(1)}x</span>
                    </div>
                    <input
                      type="range"
                      min="-4"
                      max="4"
                      step="0.2"
                      value={autoRotateSpeed}
                      onChange={(e) => setAutoRotateSpeed(parseFloat(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Camera Angle Presets
                </label>
                <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                  {[
                    { id: "back", label: "Straight Back (Active)" },
                    { id: "backClose", label: "Zoom Island" },
                    { id: "hero", label: "Hero 3/4" },
                    { id: "front", label: "Front (Screen)" },
                    { id: "left", label: "Left Profile" },
                    { id: "right", label: "Right Profile" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setCameraPreset(p.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${cameraPreset === p.id
                          ? "border-sky-400 bg-sky-400/10 text-white font-bold"
                          : "border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300"
                        }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-3.5">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Entrance Animation Tuning
                </span>

                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Duration</span>
                    <span className="text-amber-400 font-bold">{entranceDuration.toFixed(1)}s</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="5.0"
                    step="0.1"
                    value={entranceDuration}
                    onChange={(e) => setEntranceDuration(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Initial Delay</span>
                    <span className="text-amber-400 font-bold">{entranceDelay.toFixed(2)}s</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1.5"
                    step="0.05"
                    value={entranceDelay}
                    onChange={(e) => setEntranceDelay(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => replayTriggerRef.current()}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-mono font-bold text-xs uppercase transition-all shadow-lg active:scale-98"
                >
                  Test Entrance Replay
                </button>
              </div>
            </div>
          )}

          {activeTab === "lighting" && (
            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Lighting Environments
                </label>
                <div className="space-y-2">
                  {(Object.keys(LIGHTING_PRESETS) as LightingPresetKey[]).map((key) => {
                    const p = LIGHTING_PRESETS[key];
                    const isSelected = lightingPreset === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleApplyLightingPreset(key)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${isSelected
                            ? "border-sky-400 bg-sky-400/10 text-white font-semibold"
                            : "border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300"
                          }`}
                      >
                        <span className="text-[11px] font-mono">{p.name}</span>
                        <div className="flex gap-1.5 items-center">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/30"
                            style={{ backgroundColor: p.keyColor }}
                          />
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/30"
                            style={{ backgroundColor: p.rimColor }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Key Light Intensity</span>
                    <span className="text-amber-400 font-bold">{keyLightIntensity.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3.5"
                    step="0.05"
                    value={keyLightIntensity}
                    onChange={(e) => setKeyLightIntensity(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-neutral-300">Key Light Tint</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={keyLightColor}
                      onChange={(e) => setKeyLightColor(e.target.value)}
                      className="w-6 h-6 rounded-md border border-white/20 bg-transparent cursor-pointer"
                    />
                    <span className="font-mono text-[10px] uppercase text-neutral-400">{keyLightColor}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 mb-1.5">Key Light Angle</label>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[10px]">
                    {[
                      { id: "frontRight", label: "Rear-Right (Specular)" },
                      { id: "frontLeft", label: "Rear-Left" },
                      { id: "overhead", label: "Overhead Top" },
                      { id: "side", label: "Dramatic Side" },
                    ].map((pos) => (
                      <button
                        key={pos.id}
                        type="button"
                        onClick={() => setKeyLightPosPreset(pos.id as any)}
                        className={`p-1.5 rounded-lg border text-center transition-all ${keyLightPosPreset === pos.id
                            ? "border-amber-400 bg-amber-400/20 text-white font-bold"
                            : "border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300"
                          }`}
                      >
                        {pos.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Studio Reflection Brightness</span>
                    <span className="text-amber-400 font-bold">{envBrightness.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="0.05"
                    value={envBrightness}
                    onChange={(e) => setEnvBrightness(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Silhouette Rim Light</span>
                    <span className="text-amber-400 font-bold">{rimLightIntensity.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="0.05"
                    value={rimLightIntensity}
                    onChange={(e) => setRimLightIntensity(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Ambient Fill Light</span>
                    <span className="text-amber-400 font-bold">{ambientLightIntensity.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1.5"
                    step="0.05"
                    value={ambientLightIntensity}
                    onChange={(e) => setAmbientLightIntensity(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-neutral-300">Floor Contact Shadow</span>
                  <input
                    type="checkbox"
                    checked={showFloorShadow}
                    onChange={(e) => setShowFloorShadow(e.target.checked)}
                    className="accent-amber-400 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "float" && (
            <div className="space-y-5">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-neutral-200 block">Idle Float Motion</span>
                  <span className="text-[10px] text-neutral-500">Continuous micro-float physics</span>
                </div>
                <input
                  type="checkbox"
                  checked={isFloating}
                  onChange={(e) => setIsFloating(e.target.checked)}
                  className="accent-amber-400 w-4 h-4 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Float Ease Curve
                </label>
                <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                  {[
                    { id: "sine", label: "Smooth Sine", desc: "Classic harmonic wave" },
                    { id: "breathing", label: "Breathing", desc: "Buoyant peak dwell" },
                    { id: "pendulum", label: "Pendulum", desc: "Dual-axis phase lag" },
                    { id: "dynamic", label: "Dynamic", desc: "Springy bounce" },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setFloatEaseMode(mode.id as any)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${floatEaseMode === mode.id
                          ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                          : "border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300"
                        }`}
                    >
                      <div className="font-bold">{mode.label}</div>
                      <div className="text-[9px] text-neutral-400">{mode.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Height Amplitude (Y)</span>
                    <span className="text-amber-400 font-bold">{floatAmplitude.toFixed(3)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.08"
                    step="0.002"
                    value={floatAmplitude}
                    onChange={(e) => setFloatAmplitude(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Tilt Amplitude (Rot X/Z)</span>
                    <span className="text-amber-400 font-bold">{tiltAmplitude.toFixed(3)} rad</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.04"
                    step="0.001"
                    value={tiltAmplitude}
                    onChange={(e) => setTiltAmplitude(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 font-mono mb-1">
                    <span>Float Speed / Frequency</span>
                    <span className="text-amber-400 font-bold">{floatSpeed.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={floatSpeed}
                    onChange={(e) => setFloatSpeed(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "export" && (
            <div className="space-y-4">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Tuned Configuration & Coordinates
                </span>
                <pre className="p-3 rounded-xl bg-neutral-900 border border-white/10 font-mono text-[10px] text-neutral-300 overflow-x-auto max-h-[300px]">
                  {JSON.stringify(settingsExport, null, 2)}
                </pre>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopySettings}
                  className="flex-1 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-mono font-bold text-xs uppercase transition-all active:scale-98 shadow-md"
                >
                  {copied ? "✓ Copied to Clipboard!" : "Copy Settings JSON"}
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
