"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState<"dark" | "urban" | "summer">("dark");
  const switchAvatarRef = useRef<((target: "dark" | "urban" | "summer") => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

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
      side: THREE.DoubleSide,
    });
    const bgCylinderMesh = new THREE.Mesh(bgCylinderGeo, bgCylinderMat);
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

    let canStartTypewriter = false;

    const renderTypewriter = (now: number) => {
      if (!textCtx) return;

      if (!canStartTypewriter) {
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
        const staticText = "AI-ASSISTED ";
        textCtx.font = 'bold 155px "Bebas Neue", Anton, Impact, Oswald, "Arial Narrow", sans-serif-condensed, sans-serif';
        textCtx.textBaseline = "middle";
        const staticWidth = textCtx.measureText(staticText).width;
        const maxDynamicWidth = Math.max(
          ...words.map((w) => textCtx.measureText(w).width)
        );
        const totalMaxWidth = staticWidth + maxDynamicWidth;
        const fixedStartX = (textCanvas.width - totalMaxWidth) / 2;
        const centerY = textCanvas.height / 2;
        textCtx.fillStyle = "#000000";
        textCtx.fillText(staticText, fixedStartX, centerY);
        textTexture.needsUpdate = true;
        return;
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
              pauseUntil = now + 2200;
            }
          } else {
            charIdx--;
            if (charIdx <= 0) {
              charIdx = 0;
              isDeleting = false;
              wordIdx = (wordIdx + 1) % words.length;
              pauseUntil = now + 350;
            }
          }
        }
      }

      textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

      const staticText = "AI-ASSISTED ";
      const dynamicText = words[wordIdx].substring(0, charIdx);
      const cursorChar = cursorVisible ? "|" : " ";

      textCtx.font = 'bold 155px "Bebas Neue", Anton, Impact, Oswald, "Arial Narrow", sans-serif-condensed, sans-serif';
      textCtx.textBaseline = "middle";

      const staticWidth = textCtx.measureText(staticText).width;

      const maxDynamicWidth = Math.max(
        ...words.map((w) => textCtx.measureText(w).width)
      );
      const totalMaxWidth = staticWidth + maxDynamicWidth;

      const fixedStartX = (textCanvas.width - totalMaxWidth) / 2;
      const centerY = textCanvas.height / 2;

      textCtx.fillStyle = "#000000";
      textCtx.fillText(staticText, fixedStartX, centerY);

      textCtx.fillStyle = "#581c87";
      textCtx.fillText(dynamicText, fixedStartX + staticWidth, centerY);

      textCtx.fillStyle = "#6b21a8";
      textCtx.fillText(
        cursorChar,
        fixedStartX + staticWidth + textCtx.measureText(dynamicText).width + 8,
        centerY
      );

      textTexture.needsUpdate = true;
    };


    const textureLoader = new THREE.TextureLoader();
    const avatarAspect = 1536 / 2752;
    const planeHeight = 6.6;
    const planeWidth = planeHeight * avatarAspect;

    const textureDark = textureLoader.load("/images/Hero-avatar1.webp", () => {
      setIsLoaded(true);
    });
    textureDark.colorSpace = THREE.SRGBColorSpace;
    textureDark.minFilter = THREE.LinearFilter;
    textureDark.generateMipmaps = true;

    const textureUrban = textureLoader.load("/images/Hero-avatar2.webp");
    textureUrban.colorSpace = THREE.SRGBColorSpace;
    textureUrban.minFilter = THREE.LinearFilter;
    textureUrban.generateMipmaps = true;

    const textureSummer = textureLoader.load("/images/Hero-avatar3.webp");
    textureSummer.colorSpace = THREE.SRGBColorSpace;
    textureSummer.minFilter = THREE.LinearFilter;
    textureSummer.generateMipmaps = true;

    const glitchUniforms = {
      map: { value: textureDark },
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
    avatarMesh.renderOrder = 1;
    avatarGroup.position.set(0, -planeHeight * 0.4 - 0.2, 0);
    avatarGroup.scale.set(0.85, 0.85, 1.0);
    avatarGroup.add(avatarMesh);

    const urbanScale = 0.95;
    const summerScale = 0.94;

    let isTransitioning = false;
    let currentAvatar: "dark" | "urban" | "summer" = "dark";

    switchAvatarRef.current = (target: "dark" | "urban" | "summer") => {
      if (isTransitioning || target === currentAvatar) return;
      isTransitioning = true;
      currentAvatar = target;
      setActiveAvatar(target);

      let targetTexture = textureDark;
      let targetScale = 1.0;
      if (target === "urban") {
        targetTexture = textureUrban;
        targetScale = urbanScale;
      } else if (target === "summer") {
        targetTexture = textureSummer;
        targetScale = summerScale;
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

    const revealTimeline = gsap.timeline({
      paused: true,
      onStart: () => {
        canStartTypewriter = true;
      },
    });

    revealTimeline
      .to(textMesh.position, {
        y: 3 - cylinderCenterY,
        duration: 0.75,
        ease: "power3.out",
      }, 0.0)
      .to(textMat, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }, 0.0)
      .to(glitchUniforms.uOpacity, {
        value: 1.0,
        duration: 0.75,
        ease: "power2.out",
      }, 0.1)
      .to(avatarGroup.scale, {
        x: 1.0,
        y: 1.0,
        z: 1.0,
        duration: 0.85,
        ease: "power3.out",
      }, 0.1)
      .to(webAppsMesh.position, {
        x: 0,
        duration: 0.75,
        ease: "power3.out",
      }, 0.2)
      .to(webAppsMat, {
        opacity: 1,
        duration: 0.55,
        ease: "power2.out",
      }, 0.2)
      .to(aiVideoAdsMesh.position, {
        x: 0,
        duration: 0.75,
        ease: "power3.out",
      }, 0.28)
      .to(aiVideoMat, {
        opacity: 1,
        duration: 0.55,
        ease: "power2.out",
      }, 0.28)
      .fromTo("#avatar-dock", {
        opacity: 0,
        x: -30,
      }, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
      }, 0.38)
      .fromTo("#header-nav", {
        opacity: 0,
        y: -20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, 0.38);

    let hasRevealed = false;
    const playReveal = () => {
      if (hasRevealed) return;
      hasRevealed = true;
      revealTimeline.play();
    };

    if (typeof window !== "undefined" && ((window as any).__paperTearComplete || (window as any).__paperTearReveal)) {
      playReveal();
    } else {
      window.addEventListener("paper-tear-complete", playReveal);
      window.addEventListener("paper-tear-reveal", playReveal);
    }
    const fallbackTimer = setTimeout(playReveal, 3500);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      renderTypewriter(now);
      glitchUniforms.uTime.value = now * 0.001;

      mouse.x += (mouse.targetX - mouse.x) * 0.055;
      mouse.y += (mouse.targetY - mouse.y) * 0.055;

      avatarGroup.rotation.y = mouse.x * 0.08;
      avatarGroup.rotation.x = -mouse.y * 0.08;
      avatarGroup.rotation.z = 0;

      backgroundGroup.position.x = -mouse.x * 0.7;
      backgroundGroup.rotation.y = mouse.x * 0.08;
      backgroundGroup.rotation.x = 0;

      camera.position.x = 0;
      camera.position.y = -mouse.y * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("paper-tear-complete", playReveal);
      window.removeEventListener("paper-tear-reveal", playReveal);
      revealTimeline.kill();

      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      geometry?.dispose();
      material.dispose();
      textureDark.dispose();
      textureUrban.dispose();
      textureSummer.dispose();
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
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      <div
        id="avatar-dock"
        className="fixed left-6 sm:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2.5 select-none pointer-events-auto opacity-0"
      >
        <div className="flex items-center gap-1.5 mb-1 pl-1">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
            LOOK
          </span>
        </div>

        
        <button
          id="btn-avatar-dark"
          onClick={() => switchAvatarRef.current?.("dark")}
          className={`group relative flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${activeAvatar === "dark"
            ? "bg-black text-white shadow-lg shadow-black/15 font-bold scale-[1.03]"
            : "bg-white/80 backdrop-blur-md text-neutral-600 hover:text-black border border-neutral-200/90 hover:border-black/40 hover:bg-white"
            }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeAvatar === "dark"
                ? "bg-purple-400 animate-pulse"
                : "bg-neutral-300 group-hover:bg-neutral-400"
                }`}
            />
            <span>DARK</span>
          </div>
          {activeAvatar === "dark" && (
            <span className="text-[9px] font-mono text-neutral-400 ml-3 tracking-normal opacity-80">
              [ACTIVE]
            </span>
          )}
        </button>

        
        <button
          id="btn-avatar-urban"
          onClick={() => switchAvatarRef.current?.("urban")}
          className={`group relative flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${activeAvatar === "urban"
            ? "bg-black text-white shadow-lg shadow-black/15 font-bold scale-[1.03]"
            : "bg-white/80 backdrop-blur-md text-neutral-600 hover:text-black border border-neutral-200/90 hover:border-black/40 hover:bg-white"
            }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeAvatar === "urban"
                ? "bg-purple-400 animate-pulse"
                : "bg-neutral-300 group-hover:bg-neutral-400"
                }`}
            />
            <span>URBAN</span>
          </div>
          {activeAvatar === "urban" && (
            <span className="text-[9px] font-mono text-neutral-400 ml-3 tracking-normal opacity-80">
              [ACTIVE]
            </span>
          )}
        </button>

        
        <button
          id="btn-avatar-summer"
          onClick={() => switchAvatarRef.current?.("summer")}
          className={`group relative flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${activeAvatar === "summer"
            ? "bg-black text-white shadow-lg shadow-black/15 font-bold scale-[1.03]"
            : "bg-white/80 backdrop-blur-md text-neutral-600 hover:text-black border border-neutral-200/90 hover:border-black/40 hover:bg-white"
            }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeAvatar === "summer"
                ? "bg-purple-400 animate-pulse"
                : "bg-neutral-300 group-hover:bg-neutral-400"
                }`}
            />
            <span>SUMMER</span>
          </div>
          {activeAvatar === "summer" && (
            <span className="text-[9px] font-mono text-neutral-400 ml-3 tracking-normal opacity-80">
              [ACTIVE]
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
