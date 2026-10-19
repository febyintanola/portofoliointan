export type ProjectVisual = "mobile" | "reservation" | "entertainment" | "network";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  context: string;
  collaboration: string;
  myRole: string;
  impact: string;
  learning: string;
  roles: string[];
  year: string;
  visual: ProjectVisual;
  image: string;
  imageAlt: string;
  url: string;
  linkLabel: string;
  overview: string;
  process: string[];
  gallery: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "quake",
    number: "01/04",
    title: "QUAKE",
    category: "UI/UX DESIGN · MOBILE APP",
    description: "A mobile disaster-evacuation guide that puts safety instructions and an SOS flow in one place. The prototype helps users find the right action quickly during a high-stress situation.",
    context: "CLASS ASSIGNMENT",
    collaboration: "GROUP PROJECT",
    myRole: "UI/UX Designer — I shaped the information architecture, user flows, interface, and interactive prototype.",
    impact: "I translated complex emergency guidance into a focused end-to-end flow, making the most critical actions easier to find and understand.",
    learning: "I learned to prioritize clarity, accessibility, and low cognitive load when designing for urgent situations.",
    roles: ["UI/UX DESIGN", "MOBILE DESIGN", "FIGMA PROTOTYPE"],
    year: "2024",
    visual: "mobile",
    image: "/Quack.png",
    imageAlt: "Tampilan aplikasi QUAKE",
    url: "https://www.figma.com/proto/nPQd29r4aoJyYXPWb5rqkY/Quack",
    linkLabel: "VIEW FIGMA PROTOTYPE",
    overview: "QUAKE explores how a calm, focused mobile experience can guide people through an emergency without overwhelming people with information.",
    process: ["Map the moments when a person needs help most", "Prioritize emergency actions and reduce unnecessary decisions", "Shape the interface around clear hierarchy, readable instructions, and a direct SOS flow"],
    gallery: [
      { src: "/QUAKE/1.png", alt: "QUAKE wireframe 01", caption: "WIREFRAME 01 · QUAKE" },
      { src: "/QUAKE/2.png", alt: "QUAKE wireframe 02", caption: "WIREFRAME 02 · QUAKE" },
      { src: "/QUAKE/3.png", alt: "QUAKE wireframe 03", caption: "WIREFRAME 03 · QUAKE" },
      { src: "/QUAKE/4.png", alt: "QUAKE wireframe 04", caption: "WIREFRAME 04 · QUAKE" },
      { src: "/QUAKE/5.png", alt: "QUAKE wireframe 05", caption: "WIREFRAME 05 · QUAKE" },
      { src: "/QUAKE/Picture1.png", alt: "QUAKE Figma prototype 01", caption: "FIGMA PROTOTYPE 01 · QUAKE" },
      { src: "/QUAKE/Picture2.png", alt: "QUAKE Figma prototype 02", caption: "FIGMA PROTOTYPE 02 · QUAKE" },
      { src: "/QUAKE/Picture3.png", alt: "QUAKE Figma prototype 03", caption: "FIGMA PROTOTYPE 03 · QUAKE" },
      { src: "/QUAKE/Picture4.png", alt: "QUAKE Figma prototype 04", caption: "FIGMA PROTOTYPE 04 · QUAKE" },
      { src: "/QUAKE/Picture5.png", alt: "QUAKE Figma prototype 05", caption: "FIGMA PROTOTYPE 05 · QUAKE" },
      { src: "/QUAKE/Picture6.png", alt: "QUAKE Figma prototype 06", caption: "FIGMA PROTOTYPE 06 · QUAKE" },
      { src: "/QUAKE/Picture7.png", alt: "QUAKE Figma prototype 07", caption: "FIGMA PROTOTYPE 07 · QUAKE" },
      { src: "/QUAKE/Picture8.png", alt: "QUAKE Figma prototype 08", caption: "FIGMA PROTOTYPE 08 · QUAKE" },
      { src: "/QUAKE/Picture9.png", alt: "QUAKE Figma prototype 09", caption: "FIGMA PROTOTYPE 09 · QUAKE" },
      { src: "/QUAKE/Picture10.png", alt: "QUAKE Figma prototype 10", caption: "FIGMA PROTOTYPE 10 · QUAKE" },
      { src: "/QUAKE/Picture11.png", alt: "QUAKE Figma prototype 11", caption: "FIGMA PROTOTYPE 11 · QUAKE" },
      { src: "/QUAKE/Picture12.png", alt: "QUAKE Figma prototype 12", caption: "FIGMA PROTOTYPE 12 · QUAKE" },
      { src: "/QUAKE/Picture13.png", alt: "QUAKE Figma prototype 13", caption: "FIGMA PROTOTYPE 13 · QUAKE" },
      { src: "/QUAKE/Picture14.png", alt: "QUAKE Figma prototype 14", caption: "FIGMA PROTOTYPE 14 · QUAKE" },
      { src: "/QUAKE/Picture15.png", alt: "QUAKE Figma prototype 15", caption: "FIGMA PROTOTYPE 15 · QUAKE" },
      { src: "/QUAKE/Picture16.png", alt: "QUAKE Figma prototype 16", caption: "FIGMA PROTOTYPE 16 · QUAKE" },
      { src: "/QUAKE/Picture17.png", alt: "QUAKE Figma prototype 17", caption: "FIGMA PROTOTYPE 17 · QUAKE" },
      { src: "/QUAKE/Picture18.png", alt: "QUAKE Figma prototype 18", caption: "FIGMA PROTOTYPE 18 · QUAKE" },
      { src: "/QUAKE/Picture19.png", alt: "QUAKE Figma prototype 19", caption: "FIGMA PROTOTYPE 19 · QUAKE" },
      { src: "/QUAKE/Picture20.png", alt: "QUAKE Figma prototype 20", caption: "FIGMA PROTOTYPE 20 · QUAKE" },
      { src: "/QUAKE/Picture21.png", alt: "QUAKE Figma prototype 21", caption: "FIGMA PROTOTYPE 21 · QUAKE" },
      { src: "/QUAKE/Picture22.png", alt: "QUAKE Figma prototype 22", caption: "FIGMA PROTOTYPE 22 · QUAKE" },
      { src: "/QUAKE/Picture23.png", alt: "QUAKE Figma prototype 23", caption: "FIGMA PROTOTYPE 23 · QUAKE" },
      { src: "/QUAKE/Picture24.png", alt: "QUAKE Figma prototype 24", caption: "FIGMA PROTOTYPE 24 · QUAKE" },
      { src: "/QUAKE/Picture25.png", alt: "QUAKE Figma prototype 25", caption: "FIGMA PROTOTYPE 25 · QUAKE" },
    ],
  },
  {
    slug: "ruma",
    number: "02/04",
    title: "RUMA",
    category: "UI/UX DESIGN · WEB DEVELOPMENT",
    description: "An internal web application for booking meeting rooms and company vehicles. It brings both reservation processes into one consistent, trackable workflow.",
    context: "WORK ASSIGNMENT · INTERNSHIP",
    collaboration: "INDIVIDUAL PROJECT",
    myRole: "Product Designer & Full-Stack Developer — I designed the system and implemented the booking experience in CodeIgniter 4.",
    impact: "I consolidated two facility-booking needs into one interface and built reusable patterns that keep forms, schedules, and booking states consistent.",
    learning: "I learned how to turn stakeholder requirements into a working internal tool and carry design decisions through to implementation.",
    roles: ["DESIGN SYSTEM", "CODEIGNITER 4", "FULL-STACK DEVELOPMENT"],
    year: "2025",
    visual: "reservation",
    image: "/ruma.png",
    imageAlt: "Tampilan web RUMA",
    url: "https://github.com/febyintanola/reservasi",
    linkLabel: "VIEW SOURCE CODE",
    overview: "RUMA brings meeting-room and company-vehicle reservations into one internal workflow, making facility requests easier to submit and track.",
    process: ["Understand the different rules behind room and vehicle reservations", "Create shared patterns for forms, schedules, and booking states", "Implement the experience in CodeIgniter 4 and refine it around real workplace needs"],
    gallery: [],
  },
  {
    slug: "buzz-buzz",
    number: "03/04",
    title: "BUZZ BUZZ",
    category: "UX REDESIGN · DASHBOARD",
    description: "A mobile entertainment app for reviewing and rating films and TV series. Its discovery experience recommends titles around each user’s preferences.",
    context: "CLASS ASSIGNMENT",
    collaboration: "GROUP PROJECT",
    myRole: "UI/UX Designer & Front-End Developer — I contributed research, designed the main flows, and translated the interface into code.",
    impact: "I connected research insights to a clearer discovery, rating, and review journey while creating consistent patterns for entertainment content.",
    learning: "I learned to align design decisions within a team and maintain consistency between research, interface design, and front-end delivery.",
    roles: ["UI/UX DESIGN", "FRONT-END", "RESEARCH"],
    year: "2025",
    visual: "entertainment",
    image: "/BuzzBuzz.png",
    imageAlt: "Tampilan aplikasi Buzz Buzz",
    url: "https://github.com/febyintanola/Buzz-Buzz.git",
    linkLabel: "VIEW SOURCE CODE",
    overview: "Buzz Buzz is an entertainment discovery experience designed to help people find, rate, and discuss films and series that fit their preferences.",
    process: ["Explore how people discover and decide what to watch", "Connect recommendations, ratings, and reviews into one journey", "Translate the redesigned flows into consistent front-end patterns"],
    gallery: [
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.04.jpeg", alt: "Dokumentasi layar Buzz Buzz 01", caption: "Buzz Buzz screen 01." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.03%20(1).jpeg", alt: "Dokumentasi layar Buzz Buzz 02", caption: "Buzz Buzz screen 02." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.03.jpeg", alt: "Dokumentasi layar Buzz Buzz 03", caption: "Buzz Buzz screen 03." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.02%20(2).jpeg", alt: "Dokumentasi layar Buzz Buzz 04", caption: "Buzz Buzz screen 04." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.02%20(1).jpeg", alt: "Dokumentasi layar Buzz Buzz 05", caption: "Buzz Buzz screen 05." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.02.jpeg", alt: "Dokumentasi layar Buzz Buzz 06", caption: "Buzz Buzz screen 06." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.01%20(2).jpeg", alt: "Dokumentasi layar Buzz Buzz 07", caption: "Buzz Buzz screen 07." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.01%20(1).jpeg", alt: "Dokumentasi layar Buzz Buzz 08", caption: "Buzz Buzz screen 08." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.01.jpeg", alt: "Dokumentasi layar Buzz Buzz 09", caption: "Buzz Buzz screen 09." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.00%20(1).jpeg", alt: "Dokumentasi layar Buzz Buzz 10", caption: "Buzz Buzz screen 10." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.15.00.jpeg", alt: "Dokumentasi layar Buzz Buzz 11", caption: "Buzz Buzz screen 11." },
      { src: "/buzzbuzz/WhatsApp%20Image%202026-10-19%20at%2015.14.59.jpeg", alt: "Dokumentasi layar Buzz Buzz 12", caption: "Buzz Buzz screen 12." },
    ],
  },
  {
    slug: "bot-network-detection",
    number: "04/04",
    title: "Bot Network Detection",
    category: "UI/UX DESIGN · WEB DEVELOPMENT",
    description: "A web application that uses machine learning to detect suspected bot accounts on TikTok. Interactive network visualizations make relationships and detection results easier to investigate.",
    context: "FINAL PROJECT",
    collaboration: "INDIVIDUAL PROJECT",
    myRole: "UI/UX Designer & Full-Stack Developer — I designed the analytical workflow and integrated the FastAPI service, model output, and visualizations.",
    impact: "I turned technical detection output into an explorable interface, helping users interpret account relationships instead of reading isolated model results.",
    learning: "I learned to design for explainability, handle data-heavy interface states, and connect a machine-learning backend to a usable product experience.",
    roles: ["UI/UX DESIGN", "Full-Stack Development", "DATA VISUALIZATION", "FastAPI"],
    year: "2026",
    visual: "network",
    image: "/botnet.png",
    imageAlt: "Tampilan web Bot Network Detection",
    url: "https://github.com/febyintanola/DeteksiJaringanBot",
    linkLabel: "VIEW SOURCE CODE",
    overview: "Bot Network Detection turns machine-learning output into a visual investigation tool for understanding suspected bot relationships on TikTok.",
    process: ["Make technical detection results understandable to a non-technical user", "Design network views that support exploration and comparison", "Connect the FastAPI service, model output, and visual interface"],
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
