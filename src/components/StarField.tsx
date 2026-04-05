"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fragment = document.createDocumentFragment();

    // Nebula patches - subtle colored blobs
    const nebulae = [
      { x: 15, y: 25, size: 300, color: "rgba(255, 140, 0, 0.06)" },
      { x: 75, y: 60, size: 250, color: "rgba(0, 100, 255, 0.04)" },
      { x: 45, y: 80, size: 200, color: "rgba(0, 255, 65, 0.03)" },
    ];

    nebulae.forEach((n) => {
      const el = document.createElement("div");
      el.className = "nebula-patch";
      el.style.left = `${n.x}%`;
      el.style.top = `${n.y}%`;
      el.style.width = `${n.size}px`;
      el.style.height = `${n.size}px`;
      el.style.background = n.color;
      fragment.appendChild(el);
    });

    // Stars - 3 depth layers
    const layers = [
      { count: 60, minSize: 0.3, maxSize: 1, bright: false },
      { count: 40, minSize: 0.8, maxSize: 1.8, bright: false },
      { count: 20, minSize: 1.5, maxSize: 3, bright: true },
    ];

    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const star = document.createElement("div");
        const size = Math.random() * (layer.maxSize - layer.minSize) + layer.minSize;

        // Random color tint for some stars
        const colorRoll = Math.random();
        let className = "star";
        if (layer.bright) className += " star--bright";
        if (colorRoll > 0.9) className += " star--warm";
        else if (colorRoll > 0.8) className += " star--cool";

        star.className = className;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty("--duration", `${Math.random() * 5 + 2}s`);
        star.style.setProperty(
          "--max-opacity",
          `${layer.bright ? Math.random() * 0.4 + 0.5 : Math.random() * 0.5 + 0.15}`
        );
        star.style.animationDelay = `${Math.random() * 6}s`;
        fragment.appendChild(star);
      }
    });

    container.appendChild(fragment);

    // Shooting stars - periodic
    const shootInterval = setInterval(() => {
      if (Math.random() > 0.4) return; // 60% chance to skip

      const shooter = document.createElement("div");
      shooter.className = "shooting-star";
      shooter.style.left = `${Math.random() * 60 + 10}%`;
      shooter.style.top = `${Math.random() * 40 + 5}%`;
      shooter.style.setProperty("--shoot-x", `${Math.random() * 200 + 150}px`);
      shooter.style.setProperty("--shoot-y", `${Math.random() * 100 + 50}px`);
      shooter.style.setProperty(
        "--shoot-duration",
        `${Math.random() * 0.8 + 0.6}s`
      );
      container.appendChild(shooter);

      setTimeout(() => shooter.remove(), 2000);
    }, 4000);

    return () => {
      clearInterval(shootInterval);
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="starfield" aria-hidden="true" />;
}
