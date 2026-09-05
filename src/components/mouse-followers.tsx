"use client";

import { useEffect, useRef, useState } from "react";

const icons = [
  { label: "React", color: "#61DAFB", letter: "⚛" },
  { label: "Node.js", color: "#339933", letter: "N" },
  { label: "Python", color: "#3776AB", letter: "Py" },
  { label: "Docker", color: "#2496ED", letter: "🐳" },
  { label: "AWS", color: "#FF9900", letter: "A" },
  { label: "TypeScript", color: "#3178C6", letter: "TS" },
  { label: "Git", color: "#F05032", letter: "G" },
  { label: "React Native", color: "#61DAFB", letter: "R" },
];

interface Follower {
  label: string;
  color: string;
  letter: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
}

const SPRING = 0.015;
const DAMPING = 0.9;
const ORBIT_BASE = 90;

export default function MouseFollowers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const followersRef = useRef<Follower[]>([]);
  const animFrameRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    // Initialize followers at center
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    followersRef.current = icons.map((icon, i) => {
      const angle = (i / icons.length) * Math.PI * 2;
      const orbitRadius = ORBIT_BASE + i * 15;
      return {
        label: icon.label,
        color: icon.color,
        letter: icon.letter,
        x: cx + Math.cos(angle) * orbitRadius,
        y: cy + Math.sin(angle) * orbitRadius,
        vx: 0,
        vy: 0,
        angle,
        orbitRadius,
        orbitSpeed: 0.006 + i * 0.003,
        size: 30 + (i % 3) * 4,
      };
    });

    let time = 0;
    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      followersRef.current.forEach((f, i) => {
        f.angle += f.orbitSpeed;
        const targetX = mx + Math.cos(f.angle) * f.orbitRadius;
        const targetY = my + Math.sin(f.angle) * f.orbitRadius;

        const dx = targetX - f.x;
        const dy = targetY - f.y;
        f.vx += dx * SPRING;
        f.vy += dy * SPRING;
        f.vx *= DAMPING;
        f.vy *= DAMPING;
        f.x += f.vx;
        f.y += f.vy;

        const pulse = 0.5 + 0.35 * Math.sin(time * 0.025 + i * 0.9);
        const s = f.size;

        // Glow
        ctx.save();
        ctx.globalAlpha = pulse * 0.35;
        ctx.beginPath();
        ctx.arc(f.x, f.y, s * 0.8, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, s * 0.8);
        glow.addColorStop(0, f.color);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fill();
        ctx.restore();

        // Circle background
        ctx.save();
        ctx.globalAlpha = pulse * 0.85;
        ctx.beginPath();
        ctx.arc(f.x, f.y, s * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = f.color;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.25)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        // Letter / emoji
        ctx.save();
        ctx.globalAlpha = pulse;
        ctx.fillStyle = "#fff";
        ctx.font = `bold ${s * 0.38}px "Inter", Arial, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(f.letter, f.x, f.y + 1);
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
