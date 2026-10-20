"use client";

import { useEffect } from "react";

export default function ScrollCompanion() {
  useEffect(() => {
    let frame = 0;

    const updateStage = () => {
      const setSceneProgress = (id: string, property: string, multiplier: number) => {
        const section = document.getElementById(id);
        if (!section) return;

        const start = section.offsetTop - window.innerHeight * 0.8;
        const end = section.offsetTop + section.offsetHeight - window.innerHeight * 0.25;
        const sectionProgress = end > start
          ? Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)))
          : 0;

        document.documentElement.style.setProperty(property, sectionProgress.toFixed(3));
        document.documentElement.style.setProperty(
          `${property}-offset`,
          `${((1 - sectionProgress) * multiplier).toFixed(2)}px`,
        );
        document.documentElement.style.setProperty(
          `${property}-reverse-offset`,
          `${((sectionProgress - 1) * multiplier).toFixed(2)}px`,
        );
      };

      setSceneProgress("top", "--hero-progress", 14);
      setSceneProgress("journey", "--journey-progress", 18);
      setSceneProgress("work", "--work-progress", 18);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateStage);
    };

    updateStage();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateStage);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateStage);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--hero-progress");
      document.documentElement.style.removeProperty("--hero-progress-offset");
      document.documentElement.style.removeProperty("--hero-progress-reverse-offset");
      document.documentElement.style.removeProperty("--journey-progress");
      document.documentElement.style.removeProperty("--journey-progress-offset");
      document.documentElement.style.removeProperty("--journey-progress-reverse-offset");
      document.documentElement.style.removeProperty("--work-progress");
      document.documentElement.style.removeProperty("--work-progress-offset");
      document.documentElement.style.removeProperty("--work-progress-reverse-offset");
    };
  }, []);

  return null;
}
