import styles from "./page.module.css";
import { projects, type Project, type ProjectVisual } from "@/lib/projects";
import ScrollCompanion from "./ScrollCompanion";

const growthPillars = [
  {
    number: "01",
    title: "CURIOSITY WITH DIRECTION",
    value: "INTEREST & MOTIVATION",
    description:
      "I am excited by the space between an idea and a product people can actually use. This nine-month journey is a chance to deepen my craft, learn from people with different perspectives, and become more intentional about the problems I choose to solve.",
  },
  {
    number: "02",
    title: "IDEAS MADE VISIBLE",
    value: "CREATIVITY & EXPRESSION",
    description:
      "I express ideas by mapping flows, testing visual directions, and building interactive prototypes. The playful interface of this portfolio is also an experiment: a way to make technical work feel personal, approachable, and unmistakably mine.",
  },
  {
    number: "03",
    title: "DESIGN MEETS CODE",
    value: "INTERDISCIPLINARY POTENTIAL",
    description:
      "My projects connect user research, interface design, front-end development, and machine learning. Moving across disciplines helps me ask better questions and understand both the human experience and the system behind it.",
  },
  {
    number: "04",
    title: "PROGRESS OVER PERFECTION",
    value: "WORK ETHIC & EXCELLENCE",
    description:
      "I work through small, deliberate iterations: understand the problem, document decisions, build, test, and improve. I care about polish, but I value the reasoning, feedback, and persistence that make the final result stronger.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "PRODUCT DESIGN",
    description: "User research, flows, wireframes, and prototypes grounded in real problems.",
  },
  {
    number: "02",
    title: "FRONT-END",
    description: "Responsive, accessible interfaces built with React, Next.js, and TypeScript.",
  },
  {
    number: "03",
    title: "DESIGN SYSTEM",
    description: "Reusable components and visual rules that help products grow consistently.",
  },
];

const experiences = [
  {
    period: "[July 2025 — November 2025]",
    role: "SIS Intern",
    company: "PT PLN Indonesia Power Unit Bisnis Pemeliharaan",
    description: "Designed and developed the user experience for an internal meeting-room and company-vehicle reservation application.",
  },
  {
    period: "[2022 — 2026]",
    role: "Anggota",
    company: "Gita Advayatva",
    description: "Practiced and performed with the university choir, building discipline, collaboration, and confidence beyond software work.",
  },
  {
    period: "[2022 — 2026]",
    role: "Mahasiswa",
    company: "Universitas Pembangunan Nasional Veteran Jakarta",
    description: "Studied interaction design, web development, and software engineering while exploring how technology can solve human problems.",
  },
];

const profileLinks = {
  email: "intanfebyola@gmail.com",
  resumeUrl: "/creativ%20cv%20intan%20febyola.pdf",
  linkedInUrl: "https://www.linkedin.com/in/intan-febyola-sidabutar",
  gitHubUrl: "https://github.com/febyintanola",
  instagramUrl: "https://www.instagram.com/intanfebyola/",
};

function PixelArrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SocialItem({ label, href }: { label: string; href: string }) {
  if (!href) {
    return (
      <span className={styles.socialDisabled} aria-label={`${label} belum diisi`}>
        {label} <PixelArrow diagonal />
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} Intan, dibuka di tab baru`}>
      {label} <PixelArrow diagonal />
    </a>
  );
}

function WindowBar({ title }: { title: string }) {
  return (
    <div className={styles.windowBar}>
      <span>{title}</span>
      <div aria-hidden="true">
        <i>_</i>
        <i>□</i>
        <i>×</i>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.MobilePreview}`} aria-hidden="true">
      <span className={styles.pixelSpark}>✦</span>
      <div className={styles.appWindow}>
        <WindowBar title="QUAKE.app" />
        <img src="/Quack.png" alt="Tampilan aplikasi QUAKE" />
      </div>
    </div>
  );
}

function ReservationPreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.ReservationPreview}`} aria-hidden="true">
      <div className={styles.appWindow}>
        <WindowBar title="RuMa.WEB" />
        <img src="/ruma.png" alt="Tampilan web RuMa" />
      </div>
      <div className={styles.pixelCursor}>◢</div>
      <div className={styles.miniTag}>Internship Project</div>
    </div>
  );
}

function EntertainmentPreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.EntertainmentPreview}`} aria-hidden="true">
      <div className={styles.healthIcon}>+</div>
      <div className={styles.appWindow}>
        <WindowBar title="BuzzBuzz.App" />
        <img src="/BuzzBuzz.png" alt="Tampilan aplikasi Buzz Buzz" />
          </div>
        </div>
  );  
}

function NetworkPreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.NetworkPreview}`} aria-hidden="true">
      <div className={styles.appWindow}>
        <WindowBar title="NETWORK_DETECTOR.Web" />
        <img src="/botnet.png" alt="Tampilan web Network Detector" />
      </div>
    </div>
  );
}

function ProjectPreview({ type }: { type: ProjectVisual }) {
  if (type === "mobile") {return <MobilePreview />;}
  if (type === "reservation") {return <ReservationPreview />;}
  if (type === "entertainment") {return <EntertainmentPreview />;}
  return <NetworkPreview />;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      className={`${styles.projectCard} ${index % 2 === 1 ? styles.projectReverse : ""}`}
      href={`/projects/${project.slug}`}
      aria-label={`Buka dokumentasi project ${project.title}`}
    >
      <div className={styles.projectInfo}>
        <div className={styles.projectMeta}>
          <span>{project.number}</span>
          <span>{project.year}</span>
        </div>
        <span className={styles.caseLabel}>[ CASE_STUDY ]</span>
        <h3>{project.title}_</h3>
        <span className={styles.projectCategory}>{project.category}</span>
        <p>{project.description}</p>
        <div className={styles.projectOwnership}>
          <span>{project.context}</span>
          <strong className={project.collaboration === "GROUP PROJECT" ? styles.groupProject : ""}>
            {project.collaboration}
          </strong>
        </div>
        <dl className={styles.projectStory}>
          <div>
            <dt>MY ROLE</dt>
            <dd>{project.myRole}</dd>
          </div>
          <div>
            <dt>IMPACT</dt>
            <dd>{project.impact}</dd>
          </div>
          <div>
            <dt>WHAT I LEARNED</dt>
            <dd>{project.learning}</dd>
          </div>
        </dl>
        <ul aria-label={`Keahlian yang digunakan pada ${project.title}`}>
          {project.roles.map((role) => <li key={role}>{role}</li>)}
        </ul>
        <span className={styles.inlineLink}>
          VIEW CASE STUDY <PixelArrow diagonal />
        </span>
      </div>
      <ProjectPreview type={project.visual} />
    </a>
  );
}

export default function Home() {
  return (
    <div className={styles.siteShell}>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <ScrollCompanion />

      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="Kembali ke bagian atas">
          <img className={styles.logoMark} src="/logo.png" alt="Logo Intan" /> INTAN.EXE
        </a>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <a href="#journey">JOURNEY</a>
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONNECT</a>
        </nav>
        <div className={styles.onlineStatus}><span aria-hidden="true" /> AVAILABLE</div>
      </header>

      <nav className={styles.mobileNavigation} aria-label="Mobile navigation">
        <a href="#journey">JOURNEY</a>
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <main id="main-content">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <div className={styles.kicker}>
              <span>[ PORTFOLIO_2026 ]</span>
            </div>
            <h1 id="hero-title">
              I LEARN BY TURNING <mark>COMPLEX IDEAS</mark> INTO PRODUCTS PEOPLE CAN USE<span className={styles.blink}>_</span>
            </h1>
            <p>
              I&apos;m <strong>Intan</strong>, a Jakarta-based Informatics graduate who moves between user research, interface design, and front-end development. I&apos;m ready to spend the next nine months learning deeply, exchanging perspectives, and growing from someone who makes functional products into someone who asks sharper questions about why they should exist.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.pixelButton} href="#work">EXPLORE WORK <PixelArrow /></a>
              <a className={`${styles.pixelButton} ${styles.lightButton}`} href="#journey">MY JOURNEY</a>
            </div>
            <div className={styles.heroFootnote}>
              <span>BASED IN [Jakarta, INDONESIA]</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>

          <div className={styles.heroSide}>
            <div className={styles.missionBox}>
              <span className={styles.pixelBracket} aria-hidden="true">[</span>
              <p><strong>MY MINDSET</strong><br />STAY CURIOUS,<br />MAKE IT CLEAR,<br />KEEP ITERATING.</p>
              <span className={styles.pixelBracket} aria-hidden="true">]</span>
            </div>
            <div className={styles.portraitWindow}>
              <WindowBar title="HELLO_WORLD.PNG" />
              <img src="/intanfoto.jpeg" alt="Foto Intan" />
              <div className={styles.portraitCaption}>
                <span>NAME : INTAN FEBYOLA PUTRI DWINA SIDABUTAR</span>
                <span>STATUS : READY_TO_LEARN</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.skillTicker} aria-label="Keahlian utama">
          <span>✦ PRODUCT DESIGN</span>
          <span>✦ USER EXPERIENCE</span>
          <span>✦ FRONT-END DEV</span>
          <span>✦ DESIGN SYSTEM</span>
          <span>✦ CREATIVE CODING</span>
        </div>

        <section className={styles.journeySection} id="journey" aria-labelledby="journey-title">
          <div className={styles.sectionHeading}>
            <span>[ 01_LEARNING_JOURNEY ]</span>
            <div>
              <h2 id="journey-title">WHAT DRIVES ME FORWARD_</h2>
              <p>
                I do not see this portfolio as a gallery of finished screens. It is a record of how I think, where disciplines meet, and how each project changed the way I approach the next one.
              </p>
            </div>
          </div>
          <div className={styles.growthGrid}>
            {growthPillars.map((pillar) => (
              <article key={pillar.number}>
                <div><span>{pillar.number}</span><strong>{pillar.value}</strong></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
          <div className={styles.processNote}>
            <span>[ MY_PROCESS.LOG ]</span>
            <strong>QUESTION → MAP → PROTOTYPE → BUILD → REFLECT → REPEAT</strong>
            <p>
              WORK IN PROGRESS: This portfolio is part of that loop. I continue refining its story, accessibility, and code as I learn what communicates my work most honestly.
            </p>
          </div>
        </section>

        <section className={styles.workSection} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <span>[ 02_SELECTED_WORK ]</span>
            <div>
              <h2 id="work-title">PROJECTS I&apos;M PROUD OF_</h2>
              <p>Each project below includes the context, my responsibility, the contribution I made, and the lesson I carried forward.</p>
            </div>
          </div>
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <ProjectCard key={project.number} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className={styles.aboutSection} id="about" aria-labelledby="about-title">
          <div className={styles.aboutVisual}>
            <div className={styles.idWindow}>
              <WindowBar title="ABOUT_ME.TXT" />
              <div className={styles.pixelFace} aria-hidden="true">
                <span>•</span><span>•</span><i /><b>⌣</b>
              </div>
              <div className={styles.idData}>
                <span>NAME</span><strong>[INTAN FEBYOLA PUTRI DWINA SIDABUTAR]</strong>
                <span>ROLE</span><strong>DESIGNER + DEVELOPER</strong>
                <span>LOCATION</span><strong>[JAKARTA, ID]</strong>
              </div>
            </div>
            <span className={styles.aboutStamp}>CURIOUS<br />BY DEFAULT</span>
          </div>

          <div className={styles.aboutCopy}>
            <span className={styles.sectionCode}>[ 03_ABOUT_ME ]</span>
            <h2 id="about-title">A DESIGNER WHO BUILDS, A DEVELOPER WHO LISTENS_</h2>
            <p>
              My path through Informatics taught me that good digital products need more than technical correctness. They need empathy, structure, communication, and the courage to revise an early idea. That is why I enjoy working from user flow to prototype and from interface to implementation.
            </p>
            <p>
              My work ranges from disaster guidance and workplace reservations to entertainment discovery and bot-network analysis. The subjects change, but my motivation stays the same: <strong>make complexity understandable, then make the experience useful.</strong>
            </p>
            <div className={styles.stats}>
              <div><strong>[10+]</strong><span>CASE STUDIES</span></div>
              <div><strong>[03]</strong><span>CONNECTED DISCIPLINES</span></div>
              <div><strong>[∞]</strong><span>CURIOSITY</span></div>
            </div>
          </div>
        </section>

        <section className={styles.capabilitySection} aria-labelledby="capability-title">
          <div className={styles.sectionHeading}>
            <span>[ 04_CAPABILITIES ]</span>
            <div><h2 id="capability-title">WHAT I CAN DO_</h2></div>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <article key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <i aria-hidden="true">↘</i>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.experienceSection} id="experience" aria-labelledby="experience-title">
          <div className={styles.experienceHeader}>
            <span>[ 05_EXPERIENCE.LOG ]</span>
            <h2 id="experience-title">MY JOURNEY SO FAR_</h2>
          </div>
          <div className={styles.logWindow}>
            <WindowBar title="CAREER_HISTORY.LOG" />
            <div className={styles.logHeader} aria-hidden="true">
              <span>DATE</span><span>ROLE / PLACE</span><span>DESCRIPTION</span>
            </div>
            {experiences.map((experience, index) => (
              <article className={styles.logRow} key={experience.period}>
                <span className={styles.logIndex}>0{index + 1}</span>
                <div><span>{experience.period}</span></div>
                <div><h3>{experience.role}</h3><strong>{experience.company}</strong></div>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
          {profileLinks.resumeUrl ? (
            <a
              className={styles.pixelButton}
              href={profileLinks.resumeUrl}
              download="Intan-Febyola-CV.pdf"
            >
              DOWNLOAD_CV.PDF <PixelArrow diagonal />
            </a>
          ) : (
            <span className={`${styles.pixelButton} ${styles.disabledButton}`} aria-label="Tautan CV belum diisi">
              [ CV_LINK ]
            </span>
          )}
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactPixel} aria-hidden="true">✦</div>
          <span>[ 06_CONNECT ]</span>
          <h2 id="contact-title">LET&apos;S LEARN, QUESTION,<br />AND BUILD TOGETHER_</h2>
          <p>I am open to learning opportunities and roles in UI/UX design or front-end development. I would love to bring my curiosity, cross-disciplinary perspective, and care for craft to a team that values growth.</p>
          {profileLinks.email ? (
            <a className={styles.emailLink} href={`mailto:${profileLinks.email}`}>
              {profileLinks.email} <PixelArrow diagonal />
            </a>
          ) : (
            <span className={`${styles.emailLink} ${styles.disabledEmail}`} aria-label="Alamat email belum diisi">
              [EMAILKAMU@EXAMPLE.COM] <PixelArrow diagonal />
            </span>
          )}
          <div className={styles.contactBottom}>
            <div className={styles.socials}>
              <SocialItem label="LINKEDIN" href={profileLinks.linkedInUrl} />
              <SocialItem label="GITHUB" href={profileLinks.gitHubUrl} />
              <SocialItem label="INSTAGRAM" href={profileLinks.instagramUrl} />
            </div>
            <a href="#top">BACK_TO_TOP ↑</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 INTAN</span>
        <span>DESIGNED + CODED WITH CARE</span>
        <span>PORTFOLIO_V02</span>
      </footer>
    </div>
  );
}
