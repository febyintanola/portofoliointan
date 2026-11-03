"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const sections = [
  ["overview", "Overview"], ["problem", "Problem"], ["contributions", "Contributions"],
  ["process", "Process"], ["outcome", "Outcome"], ["learning", "Learning"], ["gallery", "Gallery"],
] as const;

export default function ProjectTOC({ hasGallery }: { hasGallery: boolean }) {
  const visibleSections = hasGallery ? sections : sections.filter(([id]) => id !== "gallery");
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-18% 0px -65%", threshold: [0, .2, .5] });
    visibleSections.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <nav className={styles.toc} aria-label="Case study sections">
      <div className="windowBar"><span>TABLE_OF_CONTENTS</span><span aria-hidden="true">+</span></div>
      {visibleSections.map(([id, label], index) => <a key={id} href={`#${id}`} className={active === id ? styles.active : ""}><span>0{index + 1}</span>{label}<i aria-hidden="true">→</i></a>)}
    </nav>
  );
}
