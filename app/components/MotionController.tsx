"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => { element.dataset.visible = "true"; });
      return;
    }

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        element.dataset.visible = "true";
      }
    });

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.visible = "true";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5%" });

    elements.forEach((element) => {
      if (element.dataset.visible !== "true") observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
