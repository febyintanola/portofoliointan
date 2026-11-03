import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectVisual({ project, eager = false }: { project: Project; eager?: boolean }) {
  if (!project.image) {
    return (
      <div className="projectPlaceholder" role="img" aria-label={project.imageAlt}>
        <span>[ VISUAL_TO_BE_ADDED ]</span>
        <strong>MEDIA<br />MONITORING</strong>
        <i>API</i><i>WEB</i><i>DATA</i>
      </div>
    );
  }

  return (
    <div className="projectImageFrame">
      <div className="windowBar"><span>PROJECT_PREVIEW.APP</span><span aria-hidden="true">● ● ●</span></div>
      <div className="projectImageCanvas">
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 760px) 92vw, 52vw" style={{ objectFit: "contain" }} preload={eager} />
      </div>
    </div>
  );
}
