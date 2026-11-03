"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";
import ProjectVisual from "./ProjectVisual";
import styles from "./FeaturedCarousel.module.css";

export default function FeaturedCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [tabHidden, setTabHidden] = useState(false);
  const [timerVersion, setTimerVersion] = useState(0);
  const touchStart = useRef<number | null>(null);

  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  }, [projects.length]);

  const moveManually = (direction: number) => {
    move(direction);
    setTimerVersion((version) => version + 1);
  };

  const selectManually = (index: number) => {
    setActive(index);
    setTimerVersion((version) => version + 1);
  };

  useEffect(() => {
    if (tabHidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => move(1), 7000);
    return () => window.clearInterval(timer);
  }, [move, tabHidden, timerVersion]);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const project = projects[active];

  return (
    <div
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") moveManually(-1);
        if (event.key === "ArrowRight") moveManually(1);
      }}
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 45) moveManually(distance > 0 ? -1 : 1);
        touchStart.current = null;
      }}
      tabIndex={0}
    >
      <article className={styles.slide} aria-live="off" key={project.slug}>
        <ProjectVisual project={project} eager={active === 0} />
        <div className={styles.copy}>
          <div className={styles.eyebrow}><span>{project.number}</span><span>{project.year}</span></div>
          <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <h3>{project.title}_</h3>
          <p className={styles.summary}>{project.summary}</p>
          <p className={styles.result}>{project.result}</p>
          <dl className={styles.facts}>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Stack</dt><dd>{project.technologies.slice(0, 4).join(" · ")}</dd></div>
          </dl>
          <Link className="pixelButton pixelButtonYellow" href={`/projects/${project.slug}`}>View case study →</Link>
        </div>
      </article>
      <div className={styles.controls}>
        <div className={styles.arrows}>
          <button type="button" onClick={() => moveManually(-1)} aria-label="Previous project">←</button>
          <button type="button" onClick={() => moveManually(1)} aria-label="Next project">→</button>
        </div>
        <div className={styles.dots} role="tablist" aria-label="Choose project">
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.slug}
              className={index === active ? styles.active : ""}
              onClick={() => selectManually(index)}
              aria-label={`Show ${item.title}`}
              aria-selected={index === active}
              role="tab"
            />
          ))}
        </div>
        <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
