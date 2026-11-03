export type ContentLink = { label: string; href: string };
export type SkillIcon =
  | "javascript" | "php" | "python" | "java" | "sql" | "kotlin" | "c" | "cplusplus" | "html" | "css" | "xml"
  | "nextjs" | "react" | "laravel" | "codeigniter" | "fastapi" | "express" | "tailwind" | "bootstrap" | "alpine" | "axios"
  | "analysis" | "language" | "mysql" | "redis" | "docker" | "pm2" | "tmdb" | "x" | "youtube" | "api" | "auth" | "email"
  | "git" | "github" | "postman" | "figma" | "composer" | "pdf" | "spreadsheet";
export type SkillItem = { name: string; icon: SkillIcon; color: string };
export type SkillGroup = { label: string; items: SkillItem[] };
export type Credential = { title: string; issuer: string; year: string; credentialId: string; summary: string; skills: string[]; verifyUrl?: string };

export const profile = {
  name: "Intan Febyola Putri Dwina Sidabutar",
  shortName: "Intan",
  headline: "Software Engineer",
  status: "Fresh graduate - open to full-time opportunities",
  location: "Jakarta, Indonesia",
  email: "intanfebyola@gmail.com",
  portrait: "/intanfoto.jpeg",
  resumeUrl: "/Intan_Febyola_Software_Engineer_CV.pdf",
  summary: "I turn real-world requirements into reliable software—building end-to-end applications, connecting APIs and services, and delivering integrated solutions that are built to work.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/intan-febyola-sidabutar" },
    { label: "GitHub", href: "https://github.com/febyintanola" },
    { label: "Instagram", href: "https://www.instagram.com/intanfebyola/" },
  ] satisfies ContentLink[],
};

export const principles = [
  { number: "01", title: "Curiosity with direction", description: "I ask why before deciding how, then turn the answer into a practical next step." },
  { number: "02", title: "Ideas made visible", description: "I map flows, prototype early, and make complex ideas easier for a team to discuss." },
  { number: "03", title: "Design meets code", description: "I connect interface decisions with the systems, data, and constraints behind them." },
  { number: "04", title: "Progress over perfection", description: "I work in deliberate iterations: understand, plan, build, review, and improve." },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages & Markup", items: [
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "PHP", icon: "php", color: "#777BB4" },
    { name: "Python", icon: "python", color: "#3776AB" },
    { name: "Java", icon: "java", color: "#ED8B00" },
    { name: "SQL", icon: "sql", color: "#4479A1" },
    { name: "Kotlin", icon: "kotlin", color: "#7F52FF" },
    { name: "C", icon: "c", color: "#A8B9CC" },
    { name: "C++", icon: "cplusplus", color: "#00599C" },
    { name: "HTML5", icon: "html", color: "#E34F26" },
    { name: "CSS3", icon: "css", color: "#1572B6" },
    { name: "XML", icon: "xml", color: "#005FAD" },
  ] },
  { label: "Frameworks / Libraries", items: [
    { name: "Next.js", icon: "nextjs", color: "#000000" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Laravel", icon: "laravel", color: "#FF2D20" },
    { name: "CodeIgniter 4", icon: "codeigniter", color: "#EF4223" },
    { name: "FastAPI", icon: "fastapi", color: "#009688" },
    { name: "Express.js", icon: "express", color: "#111827" },
    { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
    { name: "Bootstrap 5", icon: "bootstrap", color: "#7952B3" },
    { name: "Alpine.js", icon: "alpine", color: "#0D597F" },
    { name: "Axios", icon: "axios", color: "#5A29E4" },
    { name: "Sentiment.js", icon: "analysis", color: "#087653" },
    { name: "Franc", icon: "language", color: "#244A91" },
  ] },
  { label: "Database & Infrastructure", items: [
    { name: "MySQL/MariaDB", icon: "mysql", color: "#4479A1" },
    { name: "Redis", icon: "redis", color: "#DC382D" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "PM2", icon: "pm2", color: "#2B037A" },
  ] },
  { label: "APIs & Services", items: [
    { name: "TMDb API", icon: "tmdb", color: "#01B4E4" },
    { name: "Twitter/X API", icon: "x", color: "#111827" },
    { name: "YouTube Data API", icon: "youtube", color: "#FF0000" },
    { name: "Serper.dev", icon: "api", color: "#4285F4" },
    { name: "LDAP/Active Directory", icon: "auth", color: "#244A91" },
    { name: "SMTP/Email", icon: "email", color: "#087653" },
  ] },
  { label: "Development Tools", items: [
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "GitHub", icon: "github", color: "#181717" },
    { name: "Postman", icon: "postman", color: "#FF6C37" },
    { name: "Figma", icon: "figma", color: "#F24E1E" },
    { name: "Composer", icon: "composer", color: "#885630" },
  ] },
  { label: "Reporting", items: [
    { name: "Dompdf", icon: "pdf", color: "#D32F2F" },
    { name: "PhpSpreadsheet", icon: "spreadsheet", color: "#217346" },
    { name: "html2pdf.js", icon: "pdf", color: "#D32F2F" },
  ] },
];


export const credentials: Credential[] = [
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    year: "Oct 2026",
    credentialId: "66c6219d75db",
    summary:
      "Demonstrated software engineering knowledge and programming skills through HackerRank's technical certification assessment.",
    skills: [
      "Software Engineering",
      "Programming",
      "Problem Solving",
    ],
    verifyUrl:
      "https://www.hackerrank.com/certificates/iframe/66c6219d75db",
  },
  {
    title: "Program Assistant",
    issuer: "LSP UPN Veteran Jakarta",
    year: "Nov 2025",
    credentialId: "62010.2513.0001065.2025",
    summary:
      "Certified competence in assisting the implementation and administration of professional competency certification programs.",
    skills: [
      "Program Administration",
      "Document Management",
      "Stakeholder Coordination",
    ],
  },
  {
    title: "Data Analytics",
    issuer: "Certiport",
    year: "Oct 2025",
    credentialId:"C84A-uTFX",
    summary:
      "Completed a data analytics certification covering analytical concepts and data-related competencies.",
    skills: [
      "Data Analytics",
      "Data Interpretation",
      "Analytical Thinking",
    ],
    verifyUrl:"https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=497&cvid=P1ZPkU4CQD1zd3cKp1yh9Q=="
  },
  {
    title: "Deep Learning with TensorFlow",
    issuer: "Cognitive Class",
    year: "Apr 2025",
    credentialId: "c8ddb8f6df6042beb1994e272cad9e96",
    summary:
      "Completed training in deep learning concepts and model development using TensorFlow.",
    skills: [
      "Deep Learning",
      "TensorFlow",
      "Machine Learning",
      "Neural Networks",
    ],
    verifyUrl:
      "https://courses.cognitiveclass.ai/certificates/c8ddb8f6df6042beb1994e272cad9e96",
  },
  {
    title: "Samsung Innovation Campus Batch 5",
    issuer: "Samsung",
    year: "Mar – Sep 2024",
    credentialId: "SKILVUL/CERT/SIC5/2024.IX/2634",
    summary:
      "Participated in Samsung Innovation Campus, a technology learning program focused on developing digital and technical skills.",
    skills: [
      "Technology",
      "Problem Solving",
      "Technical Skills",
    ],
  },
  
  {
    title: "Employability Training",
    issuer: "Wadhwani Foundation",
    year: "Dec 2023 – Feb 2024",
    credentialId: "65c2504020482166cbf0b7e6",
    summary:
      "Completed employability training focused on developing workplace readiness and professional skills.",
    skills: [
      "Communication",
      "Professional Development",
      "Teamwork",
      "Workplace Readiness",
    ],
    verifyUrl:
      "https://web.certificate.wfglobal.org/en/certificate?certificateId=65c2504020482166cbf0b7e6",
  },
];


export const experiences = [
  { period: "Jul 2025 - Nov 2025", role: "SIS Intern", organization: "PT PLN Indonesia Power Unit Bisnis Pemeliharaan", kind: "Internship", description: "Designed and developed the user experience for an internal meeting-room and company-vehicle reservation application." },
  { period: "Oct 2024 - Jan 2025", role: "Intern, Household, Staffing, and Internal Compliance Division", organization: "Pusat Pengolahan Data dan Dokumen Perpajakan - Jakarta", kind: "Internship", description: "Contributed to the SIMPAN frontend, audited 6,000+ tax documents for discrepancies, and processed 1,000+ documents for digitization and record management." },
  { period: "2022 - 2026", role: "Active Member", organization: "Gita Advayatva - UPN Veteran Jakarta", kind: "Organization", description: "Performed in collegiate and university events while building discipline, collaboration, and confidence beyond technical work." },
];

export const academicProfile = [
  { label: "GPA / IPK", value: "3.91", detail: "Scale / 4.00" },
  { label: "University", value: "UPN Veteran Jakarta", detail: "Bachelor's program" },
  { label: "Major", value: "Informatics", detail: "Computer science" },
  { label: "Graduation", value: "2026", detail: "Graduated" },
];
