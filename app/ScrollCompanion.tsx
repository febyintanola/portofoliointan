"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const stages = ["hero", "journey", "work", "about", "contact"] as const;
type Stage = (typeof stages)[number];

export default function ScrollCompanion() {
  const [stage, setStage] = useState<Stage>("hero");

  useEffect(() => {
    let frame = 0;

    const updateStage = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const stageIndex = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      setStage(stages[stageIndex]);
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
    };
  }, []);

  return (
    <div className={`${styles.scrollCompanion} ${styles[`companion-${stage}`]}`} aria-hidden="true">
      <span className={styles.companionLabel}>
        {stage === "hero" ? "HELLO" : stage === "journey" ? "LEARN" : stage === "work" ? "BUILD" : stage === "about" ? "GROW" : "CONNECT"}
      </span>
      <div className={styles.pixelCat}>
        <i className={styles.catEarLeft} />
        <i className={styles.catEarRight} />
        <i className={styles.catFace}>
          <b />
          <b />
          <em />
        </i>
        <i className={styles.catBody} />
        <i className={styles.catTail} />
      </div>
    </div>
  );
}
