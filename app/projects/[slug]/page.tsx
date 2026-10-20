import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import ImageGallery from "./ImageGallery";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className={styles.detailShell}>
      <div className={styles.detailTopbar}>
        <Link href="/#work" className={styles.backLink}>← BACK TO WORK</Link>
        <span>[ CASE_STUDY_{project.number} ]</span>
      </div>

      <header className={styles.detailHero}>
        <div>
          <span className={styles.detailKicker}>{project.category}</span>
          <h1>{project.title}_</h1>
          <p>{project.overview}</p>
          <div className={styles.detailTags}>
            <span>{project.context}</span>
            <span>{project.collaboration}</span>
            <span>{project.year}</span>
          </div>
        </div>
        <div className={styles.detailHeroImage}>
          <img src={project.image} alt={project.imageAlt} />
        </div>
      </header>

      <section className={styles.detailBody} aria-labelledby="story-title">
        <div className={styles.detailIntro}>
          <span>[ PROJECT_STORY ]</span>
          <h2 id="story-title">FROM QUESTION TO EXPERIENCE_</h2>
        </div>
        <div className={styles.detailColumns}>
          <div>
            <h3>MY ROLE</h3>
            <p>{project.myRole}</p>
          </div>
          <div>
            <h3>IMPACT</h3>
            <p>{project.impact}</p>
          </div>
          <div>
            <h3>WHAT I LEARNED</h3>
            <p>{project.learning}</p>
          </div>
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div>
          <span>[ PROCESS.LOG ]</span>
          <h2 id="process-title">HOW I WORKED_</h2>
        </div>
        <ol>
          {project.process.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {project.gallery.length > 0 && (
        <section className={styles.gallerySection} aria-labelledby="gallery-title">
          <div className={styles.detailIntro}>
            <span>[ VISUAL_DOCUMENTATION ]</span>
            <h2 id="gallery-title">INSPECT THE INTERFACE_</h2>
            <p>Click an image to open a closer view.</p>
          </div>
          <ImageGallery images={project.gallery} />
        </section>
      )}

      <footer className={styles.detailFooter}>
        <Link href="/#work">← ALL PROJECTS</Link>
        <a
          className={styles.externalLink}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.linkLabel}, dibuka di tab baru`}
        >
          <span>{project.linkLabel}</span>
          <span className={styles.externalBadge}>↗</span>
        </a>
      </footer>
    </main>
  );
}
