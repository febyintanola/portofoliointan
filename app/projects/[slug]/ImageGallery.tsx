"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const updateScrollState = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    setCanScrollLeft(gallery.scrollLeft > 0);
    setCanScrollRight(gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 1);
  };

  const scrollGallery = (direction: "left" | "right") => {
    galleryRef.current?.scrollBy({
      left: direction === "right" ? galleryRef.current.clientWidth * 0.8 : -galleryRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  useEffect(() => {
    updateScrollState();
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      gallery.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [images.length]);

  return (
    <>
      <div className={styles.galleryScroller}>
        <button
          className={styles.galleryArrow}
          type="button"
          onClick={() => scrollGallery("left")}
          disabled={!canScrollLeft}
          aria-label="Geser gallery ke kiri"
        >
          ←
        </button>
        <div className={styles.galleryGrid} ref={galleryRef}>
          {images.map((image) => (
            <button
              className={styles.galleryButton}
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Perbesar gambar: ${image.caption}`}
            >
              <img src={image.src} alt={image.alt} />
              <span>{image.caption} ↗</span>
            </button>
          ))}
        </div>
        <button
          className={styles.galleryArrow}
          type="button"
          onClick={() => scrollGallery("right")}
          disabled={!canScrollRight}
          aria-label="Geser gallery ke kanan"
        >
          →
        </button>
      </div>

      {selectedImage && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Pratinjau gambar">
          <button
            className={styles.lightboxBackdrop}
            type="button"
            aria-label="Tutup pratinjau gambar"
            onClick={() => setSelectedImage(null)}
          />
          <div className={styles.lightboxContent}>
            <button className={styles.closeButton} type="button" onClick={() => setSelectedImage(null)}>
              CLOSE ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
