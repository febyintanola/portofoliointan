import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectsFilter from "./ProjectsFilter";
import styles from "./projects.module.css";

export const metadata: Metadata = { title: "Projects", description: "Explore Intan's software engineering, data, and UI/UX case studies." };

export default function ProjectsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.hero} data-reveal>
        <span>[ PROJECT_ARCHIVE ]</span>
        <h1>Work built across systems, data &amp; interfaces_</h1>
        <p>Filter the archive by discipline, then open a case study to see the role, decisions, process, and complete visual documentation.</p>
      </header>
      <ProjectsFilter projects={projects} />
    </main>
  );
}
