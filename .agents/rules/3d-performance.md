# 3D Animation & WebGL Performance Guidelines

When creating or modifying Three.js / WebGL components (e.g. Phone3D, TabletReveal, TabletOutline3D, MacBookOpening) in this portfolio, always apply the following established optimizations to prevent animation lag and frame drops:

### 1. Pre-warm Shaders and Textures Before Animation
- Three.js lazily compiles shader programs and uploads textures to the GPU on the first frame they are rendered. This causes a 50–150ms JS thread stall / stutter right at the beginning of entrance animations.
- **Fix**:
  - Pre-upload canvas/video textures immediately upon creation using: `renderer.initTexture(texture)`.
  - Pre-compile the scene graph and shaders before triggering animations: `renderer.compile(scene, camera)`.
  - Render a warm-up frame: `renderer.render(scene, camera)`.

### 2. Cap Pixel Ratio to 1.6
- Never use unconstrained `window.devicePixelRatio` or fixed `2.0` on full-viewport (100dvh) WebGL canvases, as rendering millions of pixels on Retina/4K screens throttles GPU fill rate.
- **Fix**:
  ```ts
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
  ```

### 3. GPU Compositor Layer Promotion
- Add hardware acceleration CSS hints to the WebGL canvas DOM element:
  ```ts
  renderer.domElement.style.willChange = "transform";
  renderer.domElement.style.backfaceVisibility = "hidden";
  ```

### 4. Prevent WebGL Buffer Re-allocation During Parent Scaling/Resizing
- When parent overlay containers resize (such as the Hero section height shrinking from `100dvh` to `53vh` during "Take a Look" deep dive transitions), avoid setting the canvas container to `h-full`.
- If `h-full` is used, the canvas's `ResizeObserver` triggers `renderer.setSize(w, h)` on **every single frame**, re-allocating WebGL framebuffers and causing severe animation stutter.
- **Fix**:
  - Keep the 3D canvas container at a fixed `h-dvh` (or fixed height).
  - Use GSAP transform offsets (`y`) in `getResponsiveSettings` to reposition the 3D object smoothly during the transition without resizing the WebGL viewport.

### 5. Idle/Hidden Render Throttling
- Skip or pause `requestAnimationFrame` when the overlay or canvas has 0 width/height, is off-screen, or is inactive (`if (!mount.clientWidth || !mount.clientHeight) return;`).
