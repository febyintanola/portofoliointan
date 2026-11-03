import Image from "next/image";
import Link from "next/link";
import FeaturedCarousel from "./components/FeaturedCarousel";
import TechStackGrid from "./components/TechStackGrid";
import { academicProfile, credentials, experiences, principles, profile, skillGroups } from "@/lib/content";
import { projects } from "@/lib/projects";
import styles from "./page.module.css";

function SectionHeading({ code, title, description }: { code: string; title: string; description?: string }) {
  return <div className={styles.sectionHeading} data-reveal><span>[ {code} ]</span><div><h2>{title}_</h2>{description && <p>{description}</p>}</div></div>;
}

export default function Home() {
  return (
    <main id="main-content" className={styles.home}>
      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy} data-reveal>
          <span className={styles.kicker}>[ PORTFOLIO_2026 ]</span>
          <p className={styles.heroStatus}>Fresh graduate · Jakarta, Indonesia</p>
          <h1 id="hero-title"><mark>Software Engineer</mark><i>_</i></h1>
          <p className={styles.heroIntro}>{profile.summary}</p>
          <div className={styles.heroActions}>
            <Link className="pixelButton" href="/projects">View projects →</Link>
            <a className="pixelButton pixelButtonYellow" href={profile.resumeUrl} download="Intan-Febyola-CV.pdf">Download CV ↗</a>
          </div>
          <div className={styles.heroProof}><span>01 · Software delivery</span><span>02 · Project monitoring</span><span>03 · Data-informed systems</span></div>
        </div>
        <div className={styles.heroRight} data-reveal>
          <div className={styles.competencyNote}><span>[ RECRUITER_SNAPSHOT ]</span><strong>Build clearly.<br />Plan deliberately.<br />Deliver reliably.</strong></div>
          <div className={styles.portraitWindow}>
            <div className="windowBar"><span>INTAN_PROFILE.PNG</span><span aria-hidden="true">_ □ ×</span></div>
            <div className={styles.portraitCanvas}><Image src={profile.portrait} alt={`Portrait of ${profile.name}`} fill sizes="(max-width: 760px) 88vw, 390px" style={{ objectFit: "cover" }} preload /></div>
            <div className={styles.portraitCaption}><span>{profile.name}</span><span>{profile.status}</span></div>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <SectionHeading code="01_ABOUT_ME" title="Who I am & how I work" description="A builder who cares about both the system and the people using it." />
        <div className={styles.aboutPanel} data-reveal>
          <div className="windowBar"><span>ABOUT_INTAN.EXE</span><span aria-hidden="true">_ □ ×</span></div>
          <div className={styles.aboutBody}>
            <div className={styles.aboutStory}>
              <span>ACADEMIC FOUNDATION · UPN VETERAN JAKARTA · GPA 3.91</span>
              <h3>Curiosity with direction, progress over perfection.</h3>
              <p>I see software engineering as more than writing code. It is the practice of understanding a problem, shaping a reliable system, and keeping delivery visible and organized.</p>
              <p>My work moves between interface design, full-stack implementation, data, and project control - disciplines that help me see both the product and the path required to deliver it.</p>
            </div>
            <div className={styles.principleGrid}>{principles.map((item) => <article key={item.number}><span>{item.number}</span><h4>{item.title}</h4><p>{item.description}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection} id="projects" aria-labelledby="projects-title">
        <div className={styles.headingWithAction}>
          <SectionHeading code="02_SELECTED_PROJECTS" title="Featured projects" description="Five projects across software engineering, data, and UI/UX." />
          <Link className="pixelButton pixelButtonYellow" href="/projects">View all projects →</Link>
        </div>
        <div data-reveal><FeaturedCarousel projects={projects} /></div>
      </section>

      <section className={styles.skills} id="skills" aria-labelledby="skills-title">
        <SectionHeading code="03_SKILLS" title="Tools & technologies" description="Languages, frameworks, infrastructure, services, and development tools used across my projects." />
        <div className={styles.techPanel} data-reveal>
          <div className="windowBar"><span>TECH_STACK.JSON</span><span aria-hidden="true">{ }</span></div>
          <TechStackGrid groups={skillGroups} />
        </div>
      </section>

      <section className={styles.credentials} id="credentials" aria-labelledby="credentials-title">
        <SectionHeading code="04_CREDENTIALS" title="Certifications & credentials" description="A collection of professional certifications and learning experiences reflecting my commitment to continuous growth in software engineering, data analytics, and professional development." />
        <div className={styles.credentialGrid}>{credentials.map((credential, index) => <article key={index} data-reveal>
          <div className="windowBar"><span>CERT_{String(index + 1).padStart(2, "0")}.DAT</span><span>{credential.year}</span></div>
          <div><span className={styles.issuer}>{credential.issuer}</span><small>ID: {credential.credentialId}</small><h3>{credential.title}</h3><p>{credential.summary}</p><div className={styles.tagRow}>{credential.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>{credential.verifyUrl && <a className={styles.verifyState} href={credential.verifyUrl} target="_blank" rel="noreferrer">○ VERIFY CREDENTIAL ↗</a>}</div>
        </article>)}</div>
      </section>

      <section className={styles.experience} id="experience" aria-labelledby="experience-title">
        <SectionHeading code="05_EXPERIENCE" title="Work, leadership & academic foundation" description="Delivery experience supported by a strong technical foundation." />
        <div className={styles.experienceColumns}>
          <div className={styles.timeline} data-reveal>
            <div className="windowBar"><span>CAREER_HISTORY.LOG</span><span aria-hidden="true">2022—2026</span></div>
            {experiences.map((item, index) => <article key={item.period + item.role}><span className={styles.timelineIndex}>0{index + 1}</span><div><div className={styles.timelineMeta}><span>{item.period}</span><span>{item.kind}</span></div><h3>{item.role}</h3><strong>{item.organization}</strong><p>{item.description}</p></div></article>)}
          </div>
          <div className={styles.academic} data-reveal>
            <div className="windowBar"><span>ACADEMIC_FOUNDATION.DAT</span><span aria-hidden="true">✓</span></div>
            <div className={styles.academicGrid}>{academicProfile.map((item) => <article key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.detail}</small></article>)}</div>
            <p><strong>Focus:</strong> Software engineering, distributed systems, machine learning, and structured project delivery.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
