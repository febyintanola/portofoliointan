import styles from "./page.module.css";

type ProjectVisual = "mobile" | "reservation" | "entertainment" | "network" | "service";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  roles: string[];
  result: string;
  year: string;
  visual: ProjectVisual;
  url: string;
};

const projects: Project[] = [
  {
    number: "01/05",
    title: "Quack",
    category: "UI/UX DESIGN · MOBILE APP",
    description:
      "Aplikasi panduan evakuasi bencana yang menyediakan langkah keselamatan dan tombol SOS untuk membantu tim evakuasi untuk menemukan pengguna.",
    roles: ["UI/UX DESIGN", "MOBILE DESIGN", "FIGMA PROTOTYPE"],
    result: "PROTOTYPE INTERAKTIF PANDUAN EVAKUASI & SOS",
    year: "2024",
    visual: "mobile",
    url: "https://www.figma.com/proto/nPQd29r4aoJyYXPWb5rqkY/Quack?node-id=695-1464&p=f&viewport=389%2C458%2C0.03&t=h6jOBAOnQXppDNhW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=659%3A1269&show-proto-sidebar=1&page-id=0%3A1",
  },
  {
    number: "02/05",
    title: "RUMA",
    category: "UI/UX DESIGN · WEB DEVELOPMENT",
    description:
      "Platform untuk melakukan reservasi ruang rapat dan mobil dinas kantor.",
    roles: ["DESIGN SYSTEM", "CODEIGNITER 4", "FULL-STACK DEVELOPMENT"],
    result: "Web app untuk reservasi ruang rapat dan mobil dinas kantor",
    year: "2025",
    visual: "reservation",
    url: "https://github.com/febyintanola/reservasi",
  },
  {
    number: "03/05",
    title: "BUZZ BUZZ",
    category: "UX REDESIGN · DASHBOARD",
    description:
      "Aplikasi review dan rating untuk film dan serial TV, dengan fitur rekomendasi berdasarkan preferensi pengguna.",
    roles: ["UI/UX DESIGN", "FRONT-END", "RESEARCH"],
    result: "Aplikasi Mobile review dan rating untuk film dan serial TV",
    year: "2025",
    visual: "entertainment",
    url: "",
  },
  {
    number: "04/05",
    title: "Deteksi Jaringan Bot",
    category: "UI/UX DESIGN · WEB DEVELOPMENT",
    description:
      "Web app untuk mendeteksi akun bot di media sosial menggunakan algoritma machine learning, dengan visualisasi data interaktif.",
    roles: ["UI/UX DESIGN", "Full-Stack Development", "DATA VISUALIZATION", "FastAPI"],
    result: "Web app untuk mendeteksi akun bot di media sosial (tiktok)",
    year: "2026",
    visual: "network",
    url: "",
  },
  {
    number: "05/05",
    title: "Aplikasi SOA apa ya..",
    category: "UI/UX DESIGN · MOBILE APP",
    description:
      "Deskripsi proyek lainnya.",
    roles: ["UI/UX DESIGN", "MOBILE DESIGN"],
    result: "[TAMBAHKAN METRIK]",
    year: "2025",
    visual: "service",
    url: "",
  },
  
];

const capabilities = [
  {
    number: "01",
    title: "PRODUCT DESIGN",
    description: "Riset pengguna, user flow, wireframe, dan prototype yang menjawab masalah nyata.",
  },
  {
    number: "02",
    title: "FRONT-END",
    description: "Website responsif dan accessible menggunakan React, Next.js, dan TypeScript.",
  },
  {
    number: "03",
    title: "DESIGN SYSTEM",
    description: "Komponen dan aturan visual yang konsisten agar produk mudah berkembang.",
  },
];

const experiences = [
  {
    period: "[2024 — SEKARANG]",
    role: "UI/UX DESIGNER & FRONT-END DEVELOPER",
    company: "[NAMA PERUSAHAAN / FREELANCE]",
    description: "Merancang pengalaman pengguna dan antarmuka web untuk [jenis produk atau industri].",
  },
  {
    period: "[2022 — 2024]",
    role: "PRODUCT DESIGNER",
    company: "[NAMA PERUSAHAAN]",
    description: "Menerjemahkan kebutuhan bisnis menjadi solusi digital bersama tim produk dan developer.",
  },
  {
    period: "[2021 — 2022]",
    role: "DESIGN INTERN",
    company: "[NAMA PERUSAHAAN]",
    description: "Mendukung riset, desain visual, dan pengujian prototype untuk [jenis proyek].",
  },
];

// Isi nilai berikut untuk mengaktifkan tautan kontak dan CV.
const profileLinks = {
  email: "intanfebyola@gmail.com",
  resumeUrl: "",
  linkedInUrl: "https://www.linkedin.com/in/intan-febyola-sidabutar",
  gitHubUrl: "https://github.com/febyintanola",
  instagramUrl: "https://www.instagram.com/intanfebyola/",
};

function PixelArrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function PixelPortrait() {
  return (
    <svg
      className={styles.pixelPortrait}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Placeholder ilustrasi pixel Intan bekerja dengan laptop"
      shapeRendering="crispEdges"
    >
      <rect x="0" y="0" width="24" height="24" fill="#A9CEFF" />
      <rect x="2" y="2" width="2" height="2" fill="#FFF2A8" />
      <rect x="4" y="4" width="1" height="1" fill="#111827" />
      <rect x="19" y="3" width="2" height="1" fill="#111827" />
      <rect x="20" y="2" width="1" height="3" fill="#111827" />
      <rect x="18" y="3" width="4" height="1" fill="#111827" />
      <rect x="7" y="5" width="8" height="2" fill="#172554" />
      <rect x="6" y="7" width="10" height="4" fill="#172554" />
      <rect x="8" y="7" width="7" height="6" fill="#FFC7B8" />
      <rect x="9" y="9" width="1" height="1" fill="#111827" />
      <rect x="13" y="9" width="1" height="1" fill="#111827" />
      <rect x="10" y="11" width="3" height="1" fill="#D56A85" />
      <rect x="7" y="13" width="9" height="2" fill="#C8C5FF" />
      <rect x="6" y="15" width="11" height="5" fill="#789EEB" />
      <rect x="4" y="17" width="4" height="2" fill="#FFC7B8" />
      <rect x="16" y="16" width="3" height="3" fill="#FFC7B8" />
      <rect x="9" y="18" width="11" height="4" fill="#F8FBFF" />
      <rect x="10" y="19" width="9" height="2" fill="#172554" />
      <rect x="12" y="19" width="2" height="1" fill="#A9CEFF" />
      <rect x="3" y="22" width="19" height="1" fill="#111827" />
    </svg>
  );
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
        <WindowBar title="SAKU_APP.EXE" />
        <div className={styles.financeUi}>
          <div className={styles.financeTop}>
            <span>TOTAL SALDO</span>
            <strong>Rp12.450.000</strong>
          </div>
          <div className={styles.chart}>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className={styles.financeRows}>
            <div><span>▣</span><i /><b>−120K</b></div>
            <div><span>◆</span><i /><b>−85K</b></div>
          </div>
        </div>
      </div>
      <div className={styles.resultPopup}>
        <span>SAVING GOAL</span>
        <strong>78%</strong>
        <i />
      </div>
    </div>
  );
}

function ReservationPreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.ReservationPreview}`} aria-hidden="true">
      <div className={styles.appWindow}>
        <WindowBar title="RUANGKARYA.WEB" />
        <div className={styles.creativeProfile}>
          <span>RK</span>
          <div><strong>RUANGKARYA_</strong><small>CREATIVE PORTFOLIO</small></div>
        </div>
        <div className={styles.creativeGrid}>
          <span>01</span><span>02</span><span>03</span>
        </div>
      </div>
      <div className={styles.pixelCursor}>◢</div>
      <div className={styles.miniTag}>EXPLORE_WORK</div>
    </div>
  );
}

function EntertainmentPreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.EntertainmentPreview}`} aria-hidden="true">
      <div className={styles.healthIcon}>+</div>
      <div className={styles.appWindow}>
        <WindowBar title="KLINIK_SEHAT.SYS" />
        <div className={styles.healthUi}>
          <div className={styles.healthSidebar}>K+<i /><i /><i /></div>
          <div className={styles.healthMain}>
            <span>JADWAL HARI INI</span>
            <strong>SELASA, 06 AGUSTUS</strong>
            <div><b>09:30</b><i /><small>CONFIRMED</small></div>
            <div><b>11:00</b><i /><small>PENDING</small></div>
            <div><b>13:15</b><i /><small>CONFIRMED</small></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkPreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.NetworkPreview}`} aria-hidden="true">
      <div className={styles.appWindow}>
        <WindowBar title="NETWORK_DETECTOR.SYS" />
        <div className={styles.healthUi}>
          <div className={styles.healthSidebar}>BOT<i /><i /><i /></div>
          <div className={styles.healthMain}>
            <span>ANOMALY CHECK</span>
            <strong>LIVE TRAFFIC MONITOR</strong>
            <div><b>NODE A</b><i /><small>RISK: LOW</small></div>
            <div><b>NODE B</b><i /><small>RISK: MEDIUM</small></div>
            <div><b>NODE C</b><i /><small>RISK: HIGH</small></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicePreview() {
  return (
    <div className={`${styles.projectPreview} ${styles.ServicePreview}`} aria-hidden="true">
      <div className={styles.appWindow}>
        <WindowBar title="SERVICE_APP.PNG" />
        <PixelPortrait />
      </div>
    </div>
  );
}

function ProjectPreview({ type }: { type: ProjectVisual }) {
  if (type === "mobile") {return <MobilePreview />;}
  if (type === "reservation") {return <ReservationPreview />;}
  if (type === "entertainment") {return <EntertainmentPreview />;}
  if (type === "network") {return <NetworkPreview />;}
  return <ServicePreview />;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`${styles.projectCard} ${index % 2 === 1 ? styles.projectReverse : ""}`}>
      <div className={styles.projectInfo}>
        <div className={styles.projectMeta}>
          <span>{project.number}</span>
          <span>{project.year}</span>
        </div>
        <span className={styles.caseLabel}>[ CASE_STUDY ]</span>
        <h3>{project.title}_</h3>
        <span className={styles.projectCategory}>{project.category}</span>
        <p>{project.description}</p>
        <ul aria-label={`Keahlian yang digunakan pada ${project.title}`}>
          {project.roles.map((role) => <li key={role}>{role}</li>)}
        </ul>
        <div className={styles.projectResult}>
          <span>OUTPUT:</span>
          <strong>{project.result}</strong>
        </div>
        {project.url ? (
          <a href={project.url} className={styles.inlineLink}>
            LIHAT DETAIL <PixelArrow diagonal />
          </a>
        ) : (
          <span className={`${styles.inlineLink} ${styles.disabledInline}`} aria-label={`Tautan proyek ${project.title} belum diisi`}>
            [ ADD_PROJECT_LINK ]
          </span>
        )}
      </div>
      <ProjectPreview type={project.visual} />
    </article>
  );
}

export default function Home() {
  return (
    <div className={styles.siteShell}>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>

      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="Kembali ke bagian atas">
          <span aria-hidden="true">■</span> INTAN.EXE
        </a>
        <nav className={styles.navigation} aria-label="Navigasi utama">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#experience">LOG</a>
          <a href="#contact">CONNECT</a>
        </nav>
        <div className={styles.onlineStatus}><span aria-hidden="true" /> AVAILABLE</div>
      </header>

      <nav className={styles.mobileNavigation} aria-label="Navigasi utama versi seluler">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#experience">LOG</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <main id="main-content">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <div className={styles.kicker}>
              <span>[ PORTFOLIO_2026 ]</span>
              <span>UI/UX + FRONT-END</span>
            </div>
            <h1 id="hero-title">
              MEMBUAT PRODUK DIGITAL YANG <mark>JELAS</mark>, FUN, &amp; MUDAH DIPAKAI<span className={styles.blink}>_</span>
            </h1>
            <p>
              Halo, saya <strong>Intan</strong>. Saya mengubah masalah yang rumit menjadi pengalaman digital yang sederhana, menarik, dan terasa manusiawi.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.pixelButton} href="#work">EXPLORE WORK <PixelArrow /></a>
              <a className={`${styles.pixelButton} ${styles.lightButton}`} href="#contact">LET&apos;S TALK</a>
            </div>
            <div className={styles.heroFootnote}>
              <span>BASED IN [Jakarta, INDONESIA]</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>

          <div className={styles.heroSide}>
            <div className={styles.missionBox}>
              <span className={styles.pixelBracket} aria-hidden="true">[</span>
              <p><strong>MY MISSION</strong><br />DESIGN WITH CLARITY,<br />BUILD WITH CARE.</p>
              <span className={styles.pixelBracket} aria-hidden="true">]</span>
            </div>
            <div className={styles.portraitWindow}>
              <WindowBar title="HELLO_WORLD.PNG" />
              <img src="/intanfoto.jpeg" alt="Foto Intan" />
              <div className={styles.portraitCaption}>
                <span>NAME: INTAN FEBYOLA PUTRI DWINA SIDABUTAR</span>
                <span>STATUS: READY_TO_CREATE</span>
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

        <section className={styles.workSection} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <span>[ 01_SELECTED_WORK ]</span>
            <div>
              <h2 id="work-title">PROJECTS I&apos;M PROUD OF_</h2>
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
            <span className={styles.sectionCode}>[ 02_ABOUT_ME ]</span>
            <h2 id="about-title">DESIGN YANG THOUGHTFUL. CODE YANG RAPI_</h2>
            <p>
              Saya Intan, UI/UX designer dan front-end developer berbasis di <strong>Jakarta</strong>. Saya menikmati proses memahami masalah, menyusun alur yang logis, lalu mengubahnya menjadi antarmuka yang konsisten dan responsif.
            </p>
            <p>
              Saat tidak mendesain atau menulis kode, saya biasanya <strong>[tambahkan aktivitas atau fakta personal]</strong>.
            </p>
            <div className={styles.stats}>
              <div><strong>[12+]</strong><span>PROJECTS</span></div>
              <div><strong>[3]</strong><span>YEARS</span></div>
              <div><strong>[∞]</strong><span>CURIOSITY</span></div>
            </div>
          </div>
        </section>

        <section className={styles.capabilitySection} aria-labelledby="capability-title">
          <div className={styles.sectionHeading}>
            <span>[ 03_CAPABILITIES ]</span>
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
            <span>[ 04_EXPERIENCE.LOG ]</span>
            <h2 id="experience-title">MY JOURNEY SO FAR_</h2>
            <p>Ganti data berikut dengan pengalaman kerja, magang, organisasi, atau pendidikanmu.</p>
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
            <a className={styles.pixelButton} href={profileLinks.resumeUrl}>DOWNLOAD_CV.PDF <PixelArrow diagonal /></a>
          ) : (
            <span className={`${styles.pixelButton} ${styles.disabledButton}`} aria-label="Tautan CV belum diisi">
              [ ADD_CV_LINK ]
            </span>
          )}
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactPixel} aria-hidden="true">✦</div>
          <span>[ 05_CONNECT ]</span>
          <h2 id="contact-title">HAVE AN IDEA?<br />LET&apos;S BUILD IT TOGETHER_</h2>
          <p>Saya terbuka untuk [peluang kerja, proyek freelance, dan kolaborasi]. Ceritakan sedikit tentang kebutuhanmu.</p>
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
