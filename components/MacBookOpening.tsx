'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export type MacBookOpeningProps = {
  isOpen?: boolean;
  active?: boolean;
  imageSrc?: string;
  background?: string;
  finish?: 'space-gray' | 'space-black' | 'silver' | 'midnight';
  mode?: 'animate' | 'orbit';
  lidAngle?: number; 
  enableParallax?: boolean;
  enableGroundShadow?: boolean;
  enableScreenGlow?: boolean;
  enableStudioLighting?: boolean;
  enableGlassReflection?: boolean;
  showAppleLogo?: boolean;
  showReplay?: boolean;
  baseYaw?: number;
  basePitch?: number;
  baseX?: number;
  zoom?: number;
  enableKeyboardBacklight?: boolean;
  keyboardBacklightIntensity?: number;
  className?: string;
};

const FINISH_COLORS = {
  'space-gray': { color: 0x484b50, metalness: 0.82, roughness: 0.3 },
  'space-black': { color: 0x1f2125, metalness: 0.85, roughness: 0.32 },
  'silver': { color: 0xa2a6ad, metalness: 0.8, roughness: 0.28 },
  'midnight': { color: 0x1b202a, metalness: 0.85, roughness: 0.3 },
};

const BW = 4.6;
const BD = 3.2;
const BH = 0.11;
const LW = 4.6;
const LH = 3.02;
const DISP_W = 4.46;
const DISP_H = 2.73;
const CHIN = 0.10;
const DISP_Y = 1.58;

const LID_TOP_R = 0.082;     
const BEZEL_TOP_R = 0.072;   
const SCREEN_TOP_R = 0.045;  

const HOLD = 0.4;
const OPEN_TIME = 2.2;
const TARGET_OPEN_RAD = -0.22; 

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

function makeLidCasingShape(w: number, h: number, topR: number): THREE.Shape {
  const s = new THREE.Shape();
  const hw = w / 2;
  const p = Math.PI / 2;

  s.moveTo(-hw, 0);
  
  s.lineTo(hw, 0);
  
  s.lineTo(hw, h - topR);
  
  s.absarc(hw - topR, h - topR, topR, 0, p, false);
  
  s.lineTo(-hw + topR, h);
  
  s.absarc(-hw + topR, h - topR, topR, p, Math.PI, false);
  
  s.lineTo(-hw, 0);
  s.closePath();
  return s;
}

function makeBezelShape(w: number, yBottom: number, yTop: number, topR: number): THREE.Shape {
  const s = new THREE.Shape();
  const hw = w / 2;
  const p = Math.PI / 2;

  s.moveTo(-hw, yBottom);
  
  s.lineTo(hw, yBottom);
  
  s.lineTo(hw, yTop - topR);
  
  s.absarc(hw - topR, yTop - topR, topR, 0, p, false);
  
  s.lineTo(-hw + topR, yTop);
  
  s.absarc(-hw + topR, yTop - topR, topR, p, Math.PI, false);
  
  s.lineTo(-hw, yBottom);
  s.closePath();
  return s;
}

function makeScreenShape(w: number, h: number, topR: number): THREE.Shape {
  const s = new THREE.Shape();
  const hw = w / 2;
  const hh = h / 2;
  const p = Math.PI / 2;

  s.moveTo(-hw, -hh);
  
  s.lineTo(hw, -hh);
  
  s.lineTo(hw, hh - topR);
  
  s.absarc(hw - topR, hh - topR, topR, 0, p, false);
  
  s.lineTo(-hw + topR, hh);
  
  s.absarc(-hw + topR, hh - topR, topR, p, Math.PI, false);
  
  s.lineTo(-hw, -hh);
  s.closePath();
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
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

interface KeyDef {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
  primary: string;
  secondary?: string;
  subText?: string;
  hasBump?: boolean;
  isTouchId?: boolean;
  isSpace?: boolean;
}

function getKeyDefs(): KeyDef[] {
  const canvasW = 2048;
  const padX = 16;
  const usableW = canvasW - padX * 2; 
  const startX = padX;
  const gap = 14;
  const keys: KeyDef[] = [];

  const r0Y = 16;
  const r0H = 73;
  const r0Data = [
    { primary: 'esc', subText: '' },
    { primary: '☼-', subText: 'F1' },
    { primary: '☼+', subText: 'F2' },
    { primary: '▦', subText: 'F3' },
    { primary: '⌕', subText: 'F4' },
    { primary: '🎙', subText: 'F5' },
    { primary: '🌙', subText: 'F6' },
    { primary: '◀◀', subText: 'F7' },
    { primary: '▶❚❚', subText: 'F8' },
    { primary: '▶▶', subText: 'F9' },
    { primary: '🔇', subText: 'F10' },
    { primary: '🔉', subText: 'F11' },
    { primary: '🔊', subText: 'F12' },
    { primary: '', isTouchId: true },
  ];
  const r0KeyW = (usableW - gap * (r0Data.length - 1)) / r0Data.length;
  let cx = startX;
  r0Data.forEach((d) => {
    keys.push({
      x: cx,
      y: r0Y,
      w: r0KeyW,
      h: r0H,
      r: 8,
      primary: d.primary,
      subText: d.subText,
      isTouchId: d.isTouchId,
    });
    cx += r0KeyW + gap;
  });

  const baseW = 126.5;
  const rowH = 133;

  const r1Y = 103;
  const r1Data: { primary: string; secondary?: string; w?: number }[] = [
    { primary: '`', secondary: '~' },
    { primary: '1', secondary: '!' },
    { primary: '2', secondary: '@' },
    { primary: '3', secondary: '#' },
    { primary: '4', secondary: '$' },
    { primary: '5', secondary: '%' },
    { primary: '6', secondary: '^' },
    { primary: '7', secondary: '&' },
    { primary: '8', secondary: '*' },
    { primary: '9', secondary: '(' },
    { primary: '0', secondary: ')' },
    { primary: '-', secondary: '_' },
    { primary: '=', secondary: '+' },
    { primary: 'delete', secondary: '⌫', w: usableW - (baseW * 13 + gap * 13) },
  ];
  cx = startX;
  r1Data.forEach((d) => {
    const w = d.w || baseW;
    keys.push({
      x: cx,
      y: r1Y,
      w,
      h: rowH,
      r: 10,
      primary: d.primary,
      secondary: d.secondary,
    });
    cx += w + gap;
  });

  const r2Y = 250;
  const tabW = baseW * 1.5;
  const pipeW = usableW - (tabW + baseW * 12 + gap * 13);
  const r2Data: { primary: string; secondary?: string; w: number }[] = [
    { primary: 'tab', secondary: '⇥', w: tabW },
    { primary: 'Q', w: baseW },
    { primary: 'W', w: baseW },
    { primary: 'E', w: baseW },
    { primary: 'R', w: baseW },
    { primary: 'T', w: baseW },
    { primary: 'Y', w: baseW },
    { primary: 'U', w: baseW },
    { primary: 'I', w: baseW },
    { primary: 'O', w: baseW },
    { primary: 'P', w: baseW },
    { primary: '[', secondary: '{', w: baseW },
    { primary: ']', secondary: '}', w: baseW },
    { primary: '\\', secondary: '|', w: pipeW },
  ];
  cx = startX;
  r2Data.forEach((d) => {
    keys.push({
      x: cx,
      y: r2Y,
      w: d.w,
      h: rowH,
      r: 10,
      primary: d.primary,
      secondary: d.secondary,
    });
    cx += d.w + gap;
  });

  const r3Y = 397;
  const capsW = baseW * 1.75;
  const returnW = usableW - (capsW + baseW * 11 + gap * 12);
  const r3Data: { primary: string; secondary?: string; w: number; hasBump?: boolean }[] = [
    { primary: 'caps lock', secondary: '⇪', w: capsW },
    { primary: 'A', w: baseW },
    { primary: 'S', w: baseW },
    { primary: 'D', w: baseW },
    { primary: 'F', w: baseW, hasBump: true },
    { primary: 'G', w: baseW },
    { primary: 'H', w: baseW },
    { primary: 'J', w: baseW, hasBump: true },
    { primary: 'K', w: baseW },
    { primary: 'L', w: baseW },
    { primary: ';', secondary: ':', w: baseW },
    { primary: "'", secondary: '"', w: baseW },
    { primary: 'return', secondary: '↩', w: returnW },
  ];
  cx = startX;
  r3Data.forEach((d) => {
    keys.push({
      x: cx,
      y: r3Y,
      w: d.w,
      h: rowH,
      r: 10,
      primary: d.primary,
      secondary: d.secondary,
      hasBump: d.hasBump,
    });
    cx += d.w + gap;
  });

  const r4Y = 544;
  const lShiftW = baseW * 2.25;
  const rShiftW = usableW - (lShiftW + baseW * 10 + gap * 11);
  const r4Data: { primary: string; secondary?: string; w: number }[] = [
    { primary: 'shift', secondary: '⇧', w: lShiftW },
    { primary: 'Z', w: baseW },
    { primary: 'X', w: baseW },
    { primary: 'C', w: baseW },
    { primary: 'V', w: baseW },
    { primary: 'B', w: baseW },
    { primary: 'N', w: baseW },
    { primary: 'M', w: baseW },
    { primary: ',', secondary: '<', w: baseW },
    { primary: '.', secondary: '>', w: baseW },
    { primary: '/', secondary: '?', w: baseW },
    { primary: 'shift', secondary: '⇧', w: rShiftW },
  ];
  cx = startX;
  r4Data.forEach((d) => {
    keys.push({
      x: cx,
      y: r4Y,
      w: d.w,
      h: rowH,
      r: 10,
      primary: d.primary,
      secondary: d.secondary,
    });
    cx += d.w + gap;
  });

  const r5Y = 691;
  const fnW = baseW;
  const ctrlW = baseW;
  const optW = baseW * 1.2;
  const cmdW = baseW * 1.35;
  const arrowW = 100;
  const arrowClusterW = arrowW * 3 + gap * 2;
  const spaceW = usableW - (fnW + ctrlW + optW + cmdW + cmdW + optW + arrowClusterW + 7 * gap);

  cx = startX;
  keys.push({ x: cx, y: r5Y, w: fnW, h: rowH, r: 10, primary: 'fn', secondary: '🌐' });
  cx += fnW + gap;
  keys.push({ x: cx, y: r5Y, w: ctrlW, h: rowH, r: 10, primary: 'control', secondary: '⌃' });
  cx += ctrlW + gap;
  keys.push({ x: cx, y: r5Y, w: optW, h: rowH, r: 10, primary: 'option', secondary: '⌥' });
  cx += optW + gap;
  keys.push({ x: cx, y: r5Y, w: cmdW, h: rowH, r: 10, primary: 'command', secondary: '⌘' });
  cx += cmdW + gap;

  keys.push({ x: cx, y: r5Y, w: spaceW, h: rowH, r: 10, primary: '', isSpace: true });
  cx += spaceW + gap;

  keys.push({ x: cx, y: r5Y, w: cmdW, h: rowH, r: 10, primary: 'command', secondary: '⌘' });
  cx += cmdW + gap;
  keys.push({ x: cx, y: r5Y, w: optW, h: rowH, r: 10, primary: 'option', secondary: '⌥' });
  cx += optW + gap;

  const halfH = (rowH - gap) / 2;
  keys.push({ x: cx, y: r5Y + halfH + gap, w: arrowW, h: halfH, r: 8, primary: '◀' });
  keys.push({ x: cx + arrowW + gap, y: r5Y, w: arrowW, h: halfH, r: 8, primary: '▲' });
  keys.push({ x: cx + arrowW + gap, y: r5Y + halfH + gap, w: arrowW, h: halfH, r: 8, primary: '▼' });
  keys.push({ x: cx + (arrowW + gap) * 2, y: r5Y + halfH + gap, w: arrowW, h: halfH, r: 8, primary: '▶' });

  return keys;
}

function makeDetailedDeckTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 2048;
  c.height = 840;
  const ctx = c.getContext('2d');
  if (ctx) {
    
    ctx.clearRect(0, 0, 2048, 840);

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.lineWidth = 3;
    canvasRoundRect(ctx, 4, 4, 2040, 832, 16);
    ctx.stroke();

    const keys = getKeyDefs();
    keys.forEach((k) => {
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
      canvasRoundRect(ctx, k.x, k.y + 2, k.w, k.h, k.r);
      ctx.fill();

      const grad = ctx.createLinearGradient(k.x, k.y, k.x, k.y + k.h);
      grad.addColorStop(0, '#0c0d10');
      grad.addColorStop(1, '#030305');
      ctx.fillStyle = grad;
      canvasRoundRect(ctx, k.x, k.y, k.w, k.h, k.r);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      canvasRoundRect(ctx, k.x + 0.5, k.y + 0.5, k.w - 1, k.h - 1, k.r - 0.5);
      ctx.stroke();

      if (k.isTouchId) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(k.x + k.w / 2, k.y + k.h / 2, Math.min(k.w, k.h) * 0.32, 0, Math.PI * 2);
        ctx.stroke();
        return;
      }

      if (k.hasBump) {
        ctx.fillStyle = '#22252c';
        canvasRoundRect(ctx, k.x + k.w / 2 - 14, k.y + k.h - 24, 28, 3, 1.5);
        ctx.fill();
      }

      ctx.save();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      if (k.isSpace) {
        
      } else if (k.y === 16) {
        
        ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h / 2 - (k.subText ? 8 : 0));
        if (k.subText) {
          ctx.font = '11px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
          ctx.fillText(k.subText, k.x + k.w / 2, k.y + k.h - 14);
        }
      } else if (k.secondary && k.primary.length <= 2) {
        
        ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.secondary, k.x + k.w / 2, k.y + k.h * 0.34);
        ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h * 0.72);
      } else if (k.primary.length === 1) {
        
        ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h / 2);
      } else if (k.primary === '◀' || k.primary === '▲' || k.primary === '▼' || k.primary === '▶') {
        
        ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h / 2);
      } else {
        
        ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText(k.primary, k.x + 18, k.y + k.h - 18);
        if (k.secondary) {
          ctx.textAlign = 'right';
          ctx.textBaseline = 'top';
          ctx.font = '22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
          ctx.fillText(k.secondary, k.x + k.w - 18, k.y + 18);
        }
      }
      ctx.restore();
    });
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 16;
  return t;
}

function makeKeyboardEmissiveTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 2048;
  c.height = 840;
  const ctx = c.getContext('2d');
  if (ctx) {
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 2048, 840);

    const keys = getKeyDefs();
    keys.forEach((k) => {
      
      ctx.save();
      ctx.strokeStyle = 'rgba(215, 235, 255, 0.35)';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(180, 215, 255, 0.65)';
      ctx.shadowBlur = 4;
      canvasRoundRect(ctx, k.x - 1, k.y - 1, k.w + 2, k.h + 2, k.r + 1);
      ctx.stroke();
      ctx.restore();

      if (k.isTouchId) {
        ctx.save();
        ctx.strokeStyle = 'rgba(220, 235, 255, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(180, 215, 255, 0.7)';
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(k.x + k.w / 2, k.y + k.h / 2, Math.min(k.w, k.h) * 0.32, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        return;
      }

      if (k.isSpace) return;

      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(215, 235, 255, 0.9)';
      ctx.shadowBlur = 5;

      if (k.y === 16) {
        
        ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h / 2 - (k.subText ? 8 : 0));
        if (k.subText) {
          ctx.font = '11px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
          ctx.fillText(k.subText, k.x + k.w / 2, k.y + k.h - 14);
        }
      } else if (k.secondary && k.primary.length <= 2) {
        
        ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.secondary, k.x + k.w / 2, k.y + k.h * 0.34);
        ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h * 0.72);
      } else if (k.primary.length === 1) {
        
        ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h / 2);
      } else if (k.primary === '◀' || k.primary === '▲' || k.primary === '▼' || k.primary === '▶') {
        
        ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(k.primary, k.x + k.w / 2, k.y + k.h / 2);
      } else {
        
        ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText(k.primary, k.x + 18, k.y + k.h - 18);
        if (k.secondary) {
          ctx.textAlign = 'right';
          ctx.textBaseline = 'top';
          ctx.font = '22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
          ctx.fillText(k.secondary, k.x + k.w - 18, k.y + 18);
        }
      }
      ctx.restore();
    });
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 16;
  return t;
}

function makeAppleLogoTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, 512, 512);

    ctx.save();
    ctx.translate(256, 270);
    ctx.scale(0.85, 0.85);

    const grad = ctx.createLinearGradient(-100, -100, 100, 100);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.5, '#d0d4db');
    grad.addColorStop(1, '#9da3af');
    ctx.fillStyle = grad;

    ctx.beginPath();
    ctx.arc(-36, -8, 70, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(36, -8, 70, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-30, 40, 68, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(30, 40, 68, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(88, -8, 48, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, -96, 44, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 106, 32, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.moveTo(0, -96);
    ctx.quadraticCurveTo(36, -145, 48, -170);
    ctx.quadraticCurveTo(0, -165, -8, -125);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeContactShadowTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 1024;
  const ctx = c.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, 1024, 1024);
    const grad = ctx.createRadialGradient(512, 512, 120, 512, 512, 480);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
    grad.addColorStop(0.35, 'rgba(0, 0, 0, 0.35)');
    grad.addColorStop(0.65, 'rgba(0, 0, 0, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(512, 512, 460, 310, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  const t = new THREE.CanvasTexture(c);
  return t;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

const easeInOutCubic = (p: number) =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

export default function MacBookOpening({
  isOpen = true,
  imageSrc = '/macbook/dashboard.webp',
  background = 'transparent',
  finish = 'midnight',
  mode = 'animate',
  lidAngle = 102,
  enableParallax = false,
  enableGroundShadow = false,
  enableScreenGlow = true,
  enableStudioLighting = true,
  enableGlassReflection = true,
  showAppleLogo = false,
  showReplay = false,
  baseYaw = (-11 * Math.PI) / 180, 
  basePitch = (7 * Math.PI) / 180, 
  baseX = 0,
  zoom = 1, 
  enableKeyboardBacklight = true,
  keyboardBacklightIntensity = 1.6, 
  className = "w-full h-full relative pointer-events-none",
  active = true,
}: MacBookOpeningProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const replayRef = useRef<() => void>(() => { });
  const [fadeIn, setFadeIn] = useState(false);
  const startRef = useRef<() => void>(() => { });
  const stopRef = useRef<() => void>(() => { });

  useEffect(() => {
    if (active) {
      startRef.current?.();
    } else {
      stopRef.current?.();
    }
  }, [active]);

  useEffect(() => {
    if (isOpen) {
      setFadeIn(false);
      replayRef.current?.();
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setFadeIn(false);
    }
  }, [isOpen]);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
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

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (background !== 'transparent') {
      renderer.setClearColor(background, 1);
    } else {
      renderer.setClearColor(0x000000, 0);
    }
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const dom = renderer.domElement;
    dom.style.display = 'block';
    dom.style.width = '100%';
    dom.style.height = '100%';
    dom.style.pointerEvents = 'none';
    mount.appendChild(dom);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 1.0, 50);

    if (enableStudioLighting) {
      const pmrem = track(new THREE.PMREMGenerator(renderer));
      pmrem.compileEquirectangularShader();
      const room = track(new RoomEnvironment());
      const envTex = pmrem.fromScene(room).texture;
      scene.environment = envTex;
      pmrem.dispose();
      room.dispose();
    }

    const ambient = new THREE.AmbientLight(0xffffff, 0.7 * Math.PI);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0 * Math.PI);
    keyLight.position.set(4, 7, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4e2ff, 0.45 * Math.PI);
    fillLight.position.set(-5, 4, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffeedd, 0.65 * Math.PI);
    rimLight.position.set(-3, 6, -6);
    scene.add(rimLight);

    const lidShadowLight = new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI);
    lidShadowLight.position.set(-2, 8, -3);
    lidShadowLight.castShadow = true;
    lidShadowLight.shadow.mapSize.set(2048, 2048);
    const sc = lidShadowLight.shadow.camera;
    sc.left = -4;
    sc.right = 4;
    sc.top = 4;
    sc.bottom = -4;
    sc.near = 1;
    sc.far = 20;
    sc.updateProjectionMatrix();
    lidShadowLight.shadow.bias = -0.0006;
    lidShadowLight.shadow.normalBias = 0.02;
    scene.add(lidShadowLight);

    let lastW = 0;
    let lastH = 0;
    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      if (Math.abs(w - lastW) < 6 && Math.abs(h - lastH) < 6) return;
      lastW = w;
      lastH = h;

      const a = w / h;
      renderer.setSize(w, h, false);
      camera.aspect = a;
      camera.updateProjectionMatrix();

      const baseD = Math.max(7.45, 9.8 / a);
      const d = baseD / (zoom || 1.0);
      camera.position.set(0, (2.25 * d) / 10.6, d);
      camera.lookAt(0.04, 0.95, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let controls: OrbitControls | null = null;
    if (mode === 'orbit') {
      controls = track(new OrbitControls(camera, dom));
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.target.set(0, 0.95, 0);
      controls.maxDistance = 20;
      controls.minDistance = 3;
      controls.maxPolarAngle = Math.PI / 2 + 0.15; 
    }

    const finishSettings = FINISH_COLORS[finish] || FINISH_COLORS['space-gray'];
    const aluminumMat = track(
      new THREE.MeshStandardMaterial({
        color: finishSettings.color,
        metalness: finishSettings.metalness,
        roughness: finishSettings.roughness,
        envMapIntensity: 1.1,
      })
    );
    const darkInteriorMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x111215,
        metalness: 0.2,
        roughness: 0.8,
      })
    );
    const blackMat = track(new THREE.MeshBasicMaterial({ color: 0x010101 }));

    const laptop = new THREE.Group();
    laptop.position.y = -0.22;
    scene.add(laptop);

    let groundShadowMesh: THREE.Mesh | null = null;
    if (enableGroundShadow) {
      const shadowTex = track(makeContactShadowTexture());
      const shadowGeo = track(new THREE.PlaneGeometry(6.6, 4.8));
      const shadowMat = track(
        new THREE.MeshBasicMaterial({
          map: shadowTex,
          transparent: true,
          opacity: 0.72,
          depthWrite: false,
        })
      );
      groundShadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      groundShadowMesh.rotation.x = -Math.PI / 2;
      groundShadowMesh.position.y = -0.225;
      scene.add(groundShadowMesh);
    }

    const baseGeo = track(
      new THREE.ExtrudeGeometry(roundedRect(BW, BD, 0.18), {
        depth: BH,
        bevelEnabled: true,
        bevelThickness: 0.024,
        bevelSize: 0.024,
        bevelSegments: 5,
        curveSegments: 24,
      })
    );
    const base = new THREE.Mesh(baseGeo, aluminumMat);
    base.rotation.x = -Math.PI / 2;
    base.receiveShadow = true;
    laptop.add(base);
    const deckY = BH + 0.024 + 0.002;

    const footGeo = track(new THREE.CylinderGeometry(0.09, 0.09, 0.015, 16));
    const footMat = track(new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 }));
    [
      [-BW / 2 + 0.35, -BD / 2 + 0.35],
      [BW / 2 - 0.35, -BD / 2 + 0.35],
      [-BW / 2 + 0.35, BD / 2 - 0.35],
      [BW / 2 - 0.35, BD / 2 - 0.35],
    ].forEach(([fx, fz]) => {
      const foot = new THREE.Mesh(footGeo, footMat);
      foot.position.set(fx, -0.01, fz);
      laptop.add(foot);
    });

    const portMat = track(new THREE.MeshBasicMaterial({ color: 0x0a0a0c }));
    const usbGeo = track(new THREE.BoxGeometry(0.02, 0.025, 0.09));
    const magGeo = track(new THREE.BoxGeometry(0.02, 0.035, 0.12));

    const magSafe = new THREE.Mesh(magGeo, portMat);
    magSafe.position.set(-BW / 2 - 0.022, deckY - 0.055, -0.8);
    laptop.add(magSafe);

    [-0.52, -0.32].forEach((pz) => {
      const usb = new THREE.Mesh(usbGeo, portMat);
      usb.position.set(-BW / 2 - 0.022, deckY - 0.055, pz);
      laptop.add(usb);
    });

    [-0.6, -0.38].forEach((pz) => {
      const usb = new THREE.Mesh(usbGeo, portMat);
      usb.position.set(BW / 2 + 0.022, deckY - 0.055, pz);
      laptop.add(usb);
    });

    const deckTex = track(makeDetailedDeckTexture());
    const deckEmissiveTex = track(makeKeyboardEmissiveTexture());
    const deckGeo = track(new THREE.PlaneGeometry(3.68, 1.51));
    const deckMat = track(
      new THREE.MeshStandardMaterial({
        map: deckTex,
        emissiveMap: deckEmissiveTex,
        emissive: new THREE.Color(0xeef4ff),
        emissiveIntensity: enableKeyboardBacklight ? keyboardBacklightIntensity : 0.0,
        roughness: 0.88,
        metalness: 0.04,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      })
    );
    const deck = new THREE.Mesh(deckGeo, deckMat);
    deck.rotation.x = -Math.PI / 2;
    deck.position.set(0, deckY + 0.001, -0.48);
    deck.receiveShadow = true;
    laptop.add(deck);

    const padGeo = track(new THREE.ShapeGeometry(roundedRect(1.72, 1.05, 0.07), 20));
    const padMat = track(
      new THREE.MeshStandardMaterial({
        color: finishSettings.color,
        metalness: finishSettings.metalness * 0.9,
        roughness: 0.42,
        envMapIntensity: 0.8,
      })
    );
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(0, deckY + 0.001, 0.84);
    pad.receiveShadow = true;
    laptop.add(pad);

    const hinge = new THREE.Group();
    hinge.position.set(0, deckY + 0.012, -BD / 2 + 0.06);
    hinge.rotation.x = Math.PI / 2; 
    laptop.add(hinge);

    const lidGeo = track(
      new THREE.ExtrudeGeometry(makeLidCasingShape(LW, LH, LID_TOP_R), {
        depth: 0.038,
        bevelEnabled: true,
        bevelThickness: 0.012,
        bevelSize: 0.012,
        bevelSegments: 4,
        curveSegments: 32,
      })
    );
    
    lidGeo.translate(0, 0, -0.05);
    const lidMesh = new THREE.Mesh(lidGeo, aluminumMat);
    lidMesh.castShadow = true;
    hinge.add(lidMesh);

    if (showAppleLogo) {
      const appleTex = track(makeAppleLogoTexture());
      const appleGeo = track(new THREE.PlaneGeometry(0.72, 0.72));
      const appleMat = track(
        new THREE.MeshStandardMaterial({
          map: appleTex,
          transparent: true,
          metalness: 0.95,
          roughness: 0.08,
          envMapIntensity: 1.5,
        })
      );
      const appleMesh = new THREE.Mesh(appleGeo, appleMat);
      appleMesh.position.set(0, LH * 0.58, -0.063);
      appleMesh.rotation.y = Math.PI;
      hinge.add(appleMesh);
    }

    const bezelGeo = track(
      new THREE.ShapeGeometry(
        makeBezelShape(LW - 0.02, CHIN, LH - 0.008, BEZEL_TOP_R),
        32
      )
    );
    const bezel = new THREE.Mesh(bezelGeo, blackMat);
    bezel.position.set(0, 0, 0.003);
    bezel.renderOrder = 1;
    hinge.add(bezel);

    const vGeo = track(new THREE.ShapeGeometry(makeScreenShape(DISP_W, DISP_H, SCREEN_TOP_R), 32));
    const gpV = vGeo.attributes.position as THREE.BufferAttribute;
    const uvV = new Float32Array(gpV.count * 2);
    for (let i = 0; i < gpV.count; i++) {
      uvV[i * 2] = (gpV.getX(i) + DISP_W / 2) / DISP_W;
      uvV[i * 2 + 1] = (gpV.getY(i) + DISP_H / 2) / DISP_H;
    }
    vGeo.setAttribute('uv', new THREE.BufferAttribute(uvV, 2));

    const vMat = track(
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        toneMapped: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      })
    );
    const vplane = new THREE.Mesh(vGeo, vMat);
    vplane.position.set(0, DISP_Y, 0.006);
    vplane.renderOrder = 2;
    hinge.add(vplane);

    let screenLight: THREE.PointLight | null = null;
    if (enableScreenGlow) {
      screenLight = new THREE.PointLight(0xeef4ff, 0, 3.5, 2.0);
      screenLight.position.set(0, DISP_Y, 0.25);
      hinge.add(screenLight);
    }

    loadImage(imageSrc)
      .then((img) => {
        if (disposed) return;
        const tex = track(new THREE.Texture(img));
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.generateMipmaps = true;

        const aspect = img.width / img.height;
        const da = DISP_W / DISP_H;
        let rx = 1;
        let ry = 1;
        if (aspect > da) {
          rx = da / aspect;
        } else {
          ry = aspect / da;
        }
        tex.repeat.set(rx, ry);
        tex.offset.set((1 - rx) / 2, (1 - ry) / 2);
        tex.needsUpdate = true;

        vMat.map = tex;
        vMat.color.set(0xffffff);
        vMat.needsUpdate = true;
      })
      .catch((err) => console.error('Image load error:', err));

    const notchShape = (() => {
      const w = 0.36;
      const h = 0.068;
      const r = 0.024;
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
    const notchGeo = track(new THREE.ShapeGeometry(notchShape, 16));
    const notch = new THREE.Mesh(
      notchGeo,
      new THREE.MeshBasicMaterial({
        color: 0x010101,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      })
    );
    notch.position.set(0, DISP_Y + DISP_H / 2, 0.008);
    notch.renderOrder = 3;
    hinge.add(notch);

    const dotGeo = track(new THREE.CircleGeometry(0.012, 16));
    const dotMat = track(new THREE.MeshBasicMaterial({ color: 0x161820 }));
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.set(0, DISP_Y + DISP_H / 2 - 0.03, 0.009);
    dot.renderOrder = 4;
    hinge.add(dot);

    const ledGeo = track(new THREE.CircleGeometry(0.004, 12));
    const ledMat = track(new THREE.MeshBasicMaterial({ color: 0x3cd070 }));
    const led = new THREE.Mesh(ledGeo, ledMat);
    led.position.set(0.06, DISP_Y + DISP_H / 2 - 0.03, 0.009);
    led.renderOrder = 4;
    hinge.add(led);

    const glassGeo = track(new THREE.ShapeGeometry(makeScreenShape(DISP_W, DISP_H, SCREEN_TOP_R), 32));
    const gPos = glassGeo.attributes.position as THREE.BufferAttribute;
    const gUv = new Float32Array(gPos.count * 2);
    for (let i = 0; i < gPos.count; i++) {
      gUv[i * 2] = (gPos.getX(i) + DISP_W / 2) / DISP_W;
      gUv[i * 2 + 1] = (gPos.getY(i) + DISP_H / 2) / DISP_H;
    }
    glassGeo.setAttribute('uv', new THREE.BufferAttribute(gUv, 2));

    const glassTex = track(
      (() => {
        const c = document.createElement('canvas');
        c.width = 1024;
        c.height = 1024;
        const ctx = c.getContext('2d');
        if (ctx) {
          
          const g = ctx.createLinearGradient(0, 0, 800, 800);
          g.addColorStop(0, 'rgba(255, 255, 255, 0.28)');
          g.addColorStop(0.35, 'rgba(255, 255, 255, 0.08)');
          g.addColorStop(0.65, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, 1024, 1024);
        }
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        return t;
      })()
    );

    const glassMat = track(
      new THREE.MeshBasicMaterial({
        map: glassTex,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        toneMapped: false,
      })
    );
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.set(0, DISP_Y, 0.01);
    glassMesh.renderOrder = 5;
    hinge.add(glassMesh);

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };
    if (enableParallax && mode === 'animate') {
      window.addEventListener('mousemove', onMouseMove);
    }

    let t0 = performance.now();
    replayRef.current = () => {
      t0 = performance.now();
    };

    const frame = (now: number) => {
      if (disposed) return;

      if (mode === 'orbit' && controls) {
        controls.update();
        
        const rad = Math.PI / 2 - (lidAngle * Math.PI) / 180;
        hinge.rotation.x = rad;
        glassMat.opacity = enableGlassReflection ? 0.35 : 0;
        if (screenLight) screenLight.intensity = 1.2;
        if (deckMat) {
          deckMat.emissiveIntensity = enableKeyboardBacklight ? keyboardBacklightIntensity : 0.0;
        }
      } else {
        
        const m = mouseRef.current;
        m.x += (m.targetX - m.x) * 0.06;
        m.y += (m.targetY - m.y) * 0.06;

        const el = (now - t0) / 1000;
        const p = Math.min(Math.max((el - HOLD) / OPEN_TIME, 0), 1);
        const e = easeInOutCubic(p);

        hinge.rotation.x = Math.PI / 2 + (TARGET_OPEN_RAD - Math.PI / 2) * e;

        const on = p >= 1 ? Math.min((el - HOLD - OPEN_TIME) / 0.8, 1) : 0;
        const idle = Math.sin(now / 1400) * on;

        const parallaxYaw = enableParallax ? m.x * 0.12 : 0;
        const parallaxPitch = enableParallax ? m.y * 0.08 : 0;

        laptop.rotation.y = baseYaw + idle * 0.02 + (1 - e) * 0.20 + parallaxYaw;
        laptop.rotation.x = basePitch + parallaxPitch;
        laptop.position.x = baseX;
        laptop.position.y = -0.22 + idle * 0.015;

        const lit = Math.min(Math.max((e - 0.3) / 0.6, 0), 1);
        glassMat.opacity = enableGlassReflection ? 0.35 * lit : 0;

        if (screenLight) {
          screenLight.intensity = lit * 1.5;
        }

        if (deckMat) {
          deckMat.emissiveIntensity = enableKeyboardBacklight
            ? keyboardBacklightIntensity * (0.15 + 0.85 * lit)
            : 0.0;
        }

        if (groundShadowMesh) {
          groundShadowMesh.scale.set(1 + e * 0.08, 1 + e * 0.12, 1);
          (groundShadowMesh.material as THREE.MeshBasicMaterial).opacity = 0.65 + e * 0.15;
        }
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (disposed) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
    };
    startRef.current = start;
    stopRef.current = stop;

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(raf);
    };
    renderer.domElement.addEventListener("webglcontextlost", handleContextLost);

    if (active) {
      start();
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      renderer.domElement.removeEventListener("webglcontextlost", handleContextLost);
      ro.disconnect();
      if (enableParallax) window.removeEventListener('mousemove', onMouseMove);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      if (dom.parentNode === mount) mount.removeChild(dom);
    };
  }, [
    imageSrc,
    background,
    finish,
    mode,
    lidAngle,
    enableParallax,
    enableGroundShadow,
    enableScreenGlow,
    enableStudioLighting,
    enableGlassReflection,
    showAppleLogo,
    baseYaw,
    basePitch,
    baseX,
    zoom,
    enableKeyboardBacklight,
    keyboardBacklightIntensity,
  ]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%', background, opacity: fadeIn ? 1 : 0, transition: 'opacity 0.6s ease', pointerEvents: 'none' }}
    >
      {showReplay && mode === 'animate' && (
        <button
          type="button"
          onClick={() => replayRef.current()}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 28,
            transform: 'translateX(-50%)',
            padding: '10px 24px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: 999,
            background: 'rgba(20, 20, 24, 0.85)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff',
            font: '600 13px/1.2 system-ui, -apple-system, sans-serif',
            letterSpacing: '0.02em',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
            e.currentTarget.style.background = 'rgba(35, 35, 42, 0.95)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
            e.currentTarget.style.background = 'rgba(20, 20, 24, 0.85)';
          }}
        >
          ↺ Replay Sequence
        </button>
      )}
    </div>
  );
}
