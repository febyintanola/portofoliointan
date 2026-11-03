"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project, ProjectTag } from "@/lib/projects";
import { projectTags } from "@/lib/projects";
import ProjectVisual from "../components/ProjectVisual";
import styles from "./projects.module.css";

export default function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<"All" | ProjectTag>("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.tags.includes(active));

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects by skill" data-reveal>
        {projectTags.map((tag) => <button key={tag} type="button" className={tag === active ? styles.active : ""} onClick={() => setActive(tag)} aria-pressed={tag === active}>{tag}<span>{tag === "All" ? projects.length : projects.filter((project) => project.tags.includes(tag)).length}</span></button>)}
      </div>
      <p className={styles.resultCount} aria-live="polite">Showing {visible.length} of {projects.length} projects</p>
      <div className={styles.grid}>
        {visible.map((project) => <article key={project.slug} className={styles.card}>
          <ProjectVisual project={project} />
          <div className={styles.cardCopy}>
            <div className={styles.meta}><span>{project.number}</span><span>{project.year}</span></div>
            <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <h2>{project.title}_</h2>
            <p>{project.summary}</p>
            <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Stack</dt><dd>{project.technologies.slice(0, 4).join(" · ")}</dd></div></dl>
            <Link className="pixelButton pixelButtonYellow" href={`/projects/${project.slug}`}>View case study →</Link>
          </div>
        </article>)}
      </div>
    </>
  );
}
