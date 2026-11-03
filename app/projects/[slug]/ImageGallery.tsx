"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/lib/projects";
import styles from "./page.module.css";

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => { setSelected(null); window.setTimeout(() => returnFocus.current?.focus(), 0); }, []);
  const move = useCallback((direction: number) => setSelected((current) => current === null ? null : (current + direction + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (selected === null) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>("[data-lightbox-dialog]");
        const focusable = dialog?.querySelectorAll<HTMLElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [close, move, selected]);

  return (
    <>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => <button
          className={`${styles.galleryCard} ${image.device === "phone" ? styles.phoneCard : styles.browserCard}`}
          key={image.src}
          type="button"
          onClick={(event) => { returnFocus.current = event.currentTarget; setSelected(index); }}
          aria-label={`Open full view: ${image.caption}`}
        >
          <span className={styles.deviceBar}>{image.device === "phone" ? "●  MOBILE_PREVIEW" : "WEB_PREVIEW.APP  _ □ ×"}</span>
          <span className={styles.galleryImage}><Image src={image.src} alt={image.alt} fill sizes={image.device === "phone" ? "(max-width: 760px) 82vw, 280px" : "(max-width: 760px) 92vw, 520px"} style={{ objectFit: "contain" }} loading="lazy" /></span>
          <span className={styles.galleryCaption}><strong>{image.caption}</strong><small>{image.phase} ↗</small></span>
        </button>)}
      </div>
      {selected !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`${images[selected].caption} full view`} data-lightbox-dialog>
          <button className={styles.backdrop} type="button" aria-label="Close image viewer" onClick={close} />
          <div className={styles.lightboxPanel}>
            <div className={styles.lightboxTop}><span>{String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")} · {images[selected].caption}</span><button ref={closeButton} type="button" onClick={close}>Close ×</button></div>
            <div className={styles.lightboxImage}><Image src={images[selected].src} alt={images[selected].alt} fill sizes="96vw" style={{ objectFit: "contain" }} /></div>
            <div className={styles.lightboxControls}><button type="button" onClick={() => move(-1)}>← Previous</button><span>{images[selected].phase}</span><button type="button" onClick={() => move(1)}>Next →</button></div>
          </div>
        </div>
      )}
    </>
  );
}
