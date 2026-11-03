import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/app/components/ProjectVisual";
import { getNextProject, getProject, projects } from "@/lib/projects";
import ImageGallery from "./ImageGallery";
import ProjectTOC from "./ProjectTOC";
import styles from "./page.module.css";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const nextProject = getNextProject(project.slug);

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.topline}><Link href="/projects">← Back to projects</Link><span>[ CASE_STUDY_{project.number.replace("/", "_")} ]</span></div>
      <header className={styles.hero} data-reveal>
        <div className={styles.heroCopy}>
          <span>{project.category}</span>
          <h1>{project.title}_</h1>
          <p>{project.summary}</p>
          <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.externalUrl && <a className="pixelButton pixelButtonYellow" href={project.externalUrl} target="_blank" rel="noreferrer">{project.externalLabel} ↗</a>}
        </div>
        <ProjectVisual project={project} eager />
      </header>

      <section className={styles.factGrid} aria-label="Project facts" data-reveal>
        <div><span>Duration</span><strong>{project.duration}</strong></div><div><span>Role</span><strong>{project.role}</strong></div>
        <div><span>Team</span><strong>{project.team}</strong></div><div><span>Status</span><strong>{project.status}</strong></div>
      </section>

      <div className={styles.caseLayout}>
        <aside><ProjectTOC hasGallery={project.gallery.length > 0} /><div className={styles.stackCard}><div className="windowBar"><span>TECH_USED</span><span aria-hidden="true">+</span></div><div>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></div></aside>
        <div className={styles.story}>
          <section id="overview" data-reveal><span>[ OVERVIEW ]</span><h2>What this project is_</h2><p>{project.overview}</p></section>
          <section id="problem" data-reveal><span>[ PROBLEM ]</span><h2>The challenge_</h2><p>{project.problem}</p></section>
          <section id="contributions" data-reveal><span>[ CONTRIBUTIONS ]</span><h2>What I owned_</h2><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section id="process" data-reveal><span>[ PROCESS.LOG ]</span><h2>How the work moved_</h2><ol className={styles.process}>{project.process.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol></section>
          <section id="outcome" data-reveal><span>[ OUTCOME ]</span><h2>Result & impact_</h2><p>{project.outcome}</p>{project.metrics.length > 0 && <div className={styles.metrics}>{project.metrics.map((metric) => <strong key={metric}>{metric}</strong>)}</div>}</section>
          <section id="learning" data-reveal><span>[ LEARNING ]</span><h2>What changed my thinking_</h2><p>{project.learning}</p></section>
        </div>
      </div>

      <section className={styles.gallerySection} id="gallery">
        <div className={styles.galleryHeading} data-reveal><span>[ VISUAL_DOCUMENTATION ]</span><h2>{project.gallery.length > 0 ? `All ${project.gallery.length} project images_` : "Visuals to be added_"}</h2><p>{project.gallery.length > 0 ? "Every registered screen is shown below. Open any image for a full view and keyboard navigation." : "This case study is ready for the final screenshots. Add them to the centralized project gallery when available."}</p></div>
        {project.gallery.length > 0 ? <ImageGallery images={project.gallery} /> : <div className={styles.emptyGallery}><span>[ IMAGE_SET_PENDING ]</span><strong>Replace this panel with the complete project image set.</strong></div>}
      </section>

      <nav className={styles.nextProject} aria-label="Project navigation"><span>Next case study</span><Link href={`/projects/${nextProject.slug}`}>{nextProject.title} →</Link></nav>
    </main>
  );
}
