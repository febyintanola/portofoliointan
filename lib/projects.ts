export type ProjectTag = "Software Engineering" | "Data/ML" | "UI/UX";
export type GalleryDevice = "phone" | "browser";
export type GalleryImage = { src: string; alt: string; caption: string; device: GalleryDevice; phase: "Wireframe" | "Prototype" | "Final interface" | "System output" };
export type Project = {
  slug: string; number: string; featuredOrder: number; title: string; category: string; type: string; tags: ProjectTag[];
  summary: string; result: string; context: string; role: string; duration: string; team: string; status: string; year: string;
  image?: string; imageAlt: string; externalUrl?: string; externalLabel?: string; overview: string; problem: string;
  contributions: string[]; process: string[]; outcome: string; metrics: string[]; learning: string; technologies: string[];
  gallery: GalleryImage[]; placeholder?: boolean;
};
const quakeFiles = ["1.png", "2.png", "3.png", "4.png", "5.png", ...Array.from({ length: 25 }, (_, index) => `Picture${index + 1}.png`)];
const quakeGallery: GalleryImage[] = quakeFiles.map((file, index) => ({
  src: `/QUAKE/${file}`, alt: `QUAKE interface screen ${String(index + 1).padStart(2, "0")}`,
  caption: `QUAKE screen ${String(index + 1).padStart(2, "0")}`, device: "phone", phase: index < 5 ? "Wireframe" : "Prototype",
}));
const mediaMonitoringFiles = [
  "monitoring-1.png",
  "monitoring-2.jpeg",
  "monitoring-3.png",
  "monitoring-4.png",
];

const mediaMonitoringGallery: GalleryImage[] =
  mediaMonitoringFiles.map((file, index) => ({
    src: `/MediaMonitoring/${file}`,
    alt: `Media Monitoring screen ${String(index + 1).padStart(2, "0")}`,
    caption: `Media Monitoring screen ${String(index + 1).padStart(2, "0")}`,
    device: "browser",
    phase: "Final interface",
  }));

const rumaFiles = ["ruma1.png", "ruma2.png", "ruma3.png"];
const rumaGallery: GalleryImage[] = rumaFiles.map((file, index) => ({
  src: `/ruma/${file}`, alt: `RUMA interface screen ${String(index + 1).padStart(2, "0")}`,
  caption: `RUMA screen ${String(index + 1).padStart(2, "0")}`, device: "browser", phase: "Final interface",
}));
const buzzFiles = [
  "WhatsApp%20Image%202026-10-19%20at%2015.15.04.jpeg", "WhatsApp%20Image%202026-10-19%20at%2015.15.03%20(1).jpeg",
  "WhatsApp%20Image%202026-10-19%20at%2015.15.03.jpeg", "WhatsApp%20Image%202026-10-19%20at%2015.15.02%20(2).jpeg",
  "WhatsApp%20Image%202026-10-19%20at%2015.15.02%20(1).jpeg", "WhatsApp%20Image%202026-10-19%20at%2015.15.02.jpeg",
  "WhatsApp%20Image%202026-10-19%20at%2015.15.01%20(2).jpeg", "WhatsApp%20Image%202026-10-19%20at%2015.15.01%20(1).jpeg",
  "WhatsApp%20Image%202026-10-19%20at%2015.15.01.jpeg", "WhatsApp%20Image%202026-10-19%20at%2015.15.00%20(1).jpeg",
  "WhatsApp%20Image%202026-10-19%20at%2015.15.00.jpeg", "WhatsApp%20Image%202026-10-19%20at%2015.14.59.jpeg",
];
const buzzCaptions = ["Splash screen", "Login", "Sign up", "Home", "Title details", "Review", "Expanded details", "Search", "Profile", "Recommendations", "Community reviews", "Profile settings"];
const buzzGallery: GalleryImage[] = buzzFiles.map((file, index) => ({
  src: `/buzzbuzz/${file}`, alt: `Buzz Buzz ${buzzCaptions[index]} screen`, caption: buzzCaptions[index], device: "phone", phase: "Final interface",
}));

const botGallery: GalleryImage[] = [
  ["frontend.png", "Frontend overview"], ["screencapture-127-0-0-1-8000-2026-06-23-10_23_54.png", "Full application flow"],
  ["Screenshot%202026-06-23%20194343.png", "Suspected bot analysis"], ["11.png", "All suspected accounts"],
  ["12.png", "Network graph view"], ["13.png", "Indicated account detail"],
].map(([file, caption]) => ({ src: `/Bot%20Network%20detection/${file}`, alt: `Bot Network Detection ${caption}`, caption, device: "browser", phase: "System output" }));

export const projects: Project[] = [
  {
  slug: "media-monitoring",
  number: "01/05",
  featuredOrder: 1,

  title: "Media Monitoring",
  category: "Software Engineering - Web App & API",
  type: "Web application and API",

  tags: ["Software Engineering"],

  summary:
    "A web-based media monitoring platform for collecting and analyzing mentions from X, YouTube, and Google News.",

  result:
    "Centralized cross-platform mentions, language detection, sentiment analysis, filtering, and PDF reporting in one dashboard.",

  context:
    "A group software engineering project developed to help users monitor public conversations around brands, organizations, products, or topics.",

  role: "Full-Stack Developer",

  duration: "3 months",
  team: "3 members",
  status: "Completed",
  year: "2025",

  image: "/MediaMonitoring/monitoring-1.png",
  imageAlt: "MediaScope media monitoring dashboard",

  overview:
    "MediaScope helps users monitor conversations about a brand, organization, product, or topic through project keywords. It collects mentions from X, YouTube, and Google News, then groups the data by source and language and classifies sentiment as positive, neutral, or negative.",

  problem:
    "Relevant conversations were scattered across multiple platforms, requiring users to check each source manually. This made it difficult to measure discussion volume, identify public sentiment, compare sources and languages, monitor data regularly, and produce structured reports.",

  contributions: [
    "Designed the monitoring dashboard and relational database for users, projects, keywords, mentions, sentiment, and reports",
    "Built the Express.js REST API and integrated Twitter API, YouTube Data API, and Serper.dev",
    "Implemented Redis caching and background workers for scheduled mention collection",
    "Developed language detection, sentiment classification, search, and multi-criteria filtering",
    "Added JWT authentication, password hashing, activity logs, automatic backup, project cleanup, and PDF export"
  ],

  process: [
    "Mapped the monitoring workflow, data requirements, database relationships, and REST API routes",
    "Stored project keywords in MySQL and Redis for scheduled processing",
    "Used background workers to collect, deduplicate, classify, and store mentions from external APIs",
    "Connected the dashboard to the API and tested authentication, filters, reporting, backups, and error states"
  ],

  outcome:
    "Delivered a working media monitoring platform that manages keyword-based projects, collects cross-platform mentions, classifies language and sentiment, supports detailed search and filtering, records system activity, automates backups and inactive-project cleanup, and exports monitoring results to PDF.",

  metrics: [],

  learning:
    "This project strengthened my understanding of REST API architecture, third-party API integration, relational data, Redis, background workers, authentication, duplicate handling, sentiment analysis, logging, and fault-aware system design. It also showed me how API limits and inconsistent source data affect production reliability.",

  technologies: [
    "Node.js",
    "Express.js",
    "MySQL",
    "Redis",
    "JavaScript",
    "Bootstrap 5",
    "JWT",
    "Sentiment.js",
    "Franc",
    "Twitter API",
    "YouTube Data API",
    "Serper.dev",
    "PM2",
    "html2pdf.js"
  ],
  externalUrl: "https://github.com/nisaulUna/mediaMonitoring-kel8.git", externalLabel: "View source code",

  gallery: mediaMonitoringGallery,
},
  {
    slug: "ruma", number: "02/05", featuredOrder: 2, title: "RUMA", category: "Software Engineering - Internal Web App", type: "Responsive web application",
    tags: ["Software Engineering", "UI/UX"], summary: "A centralized web application for booking meeting rooms and company vehicles at PLN.",
    result: "Unified reservations, approvals, driver assignments, facility monitoring, and reporting in one role-based system.", context: "Internship assignment",
    role: "Full-Stack Developer & UI/UX Designer", duration: "Jul 2025 - Nov 2025", team: "Individual project with workplace stakeholders", status: "Completed", year: "2025",
    image: "/ruma.png", imageAlt: "RUMA reservation dashboard", 
    overview: "RUMA is a responsive internal web application that centralizes meeting-room and company-vehicle reservations. It provides dedicated workflows and permissions for users, administrators, and drivers.",
    problem: "The previous reservation process was fragmented, making availability difficult to check, increasing the risk of schedule conflicts, and slowing approvals. Administrators also needed a clearer way to assign vehicles and drivers, monitor usage, and generate reports.",
    contributions: [
      "Designed the database, reservation flows, and role-based access for users, administrators, and drivers",
      "Built room and vehicle booking with availability checks and schedule-conflict prevention",
      "Implemented approval, rejection, vehicle assignment, driver assignment, and status-tracking workflows",
      "Developed responsive dashboards, reservation history, and facility-management features",
      "Added company-account authentication, email notifications, and PDF and Excel reporting"
    ],
    process: [
      "Mapped user needs, business rules, access levels, and reservation states",
      "Designed the relational database and responsive interface",
      "Implemented the workflows using CodeIgniter 4 and integrated company authentication",
      "Tested validation, schedule conflicts, approvals, driver status updates, and responsive layouts"
    ],
    outcome: "Delivered an integrated reservation system that centralizes facility requests, reduces schedule conflicts, speeds up approvals, supports vehicle and driver assignments, and provides transparent status tracking and downloadable reports.", metrics: [],
    learning: "This project strengthened my understanding of MVC development, relational database design, role-based access control, LDAP integration, conflict prevention, dynamic interfaces, reporting, CSRF security, and end-to-end application testing.",
    technologies: ["PHP 8.1", "CodeIgniter 4", "MySQL/MariaDB", "Tailwind CSS", "JavaScript & AJAX", "Alpine.js", "LDAP/Active Directory", "Dompdf", "PhpSpreadsheet", "SMTP/Email"], gallery: rumaGallery,
  },
  {
    slug: "bot-network-detection", number: "03/05", featuredOrder: 3, title: "Bot Network Detection", category: "Software Engineering - Data/ML",
    type: "Analytical web application", tags: ["Software Engineering", "Data/ML", "UI/UX"], summary: "A visual investigation tool for suspected bot relationships on TikTok.",
    result: "Translated machine-learning output into an explorable interface instead of isolated model results.", context: "Final project",
    role: "UI/UX Designer & Full-Stack Developer", duration: "6 Month", team: "Individual project", status: "Completed", year: "2026",
    image: "/botnet.png", imageAlt: "Bot Network Detection analytics interface", externalUrl: "https://github.com/febyintanola/DeteksiJaringanBot", externalLabel: "View source code",
    overview: "Bot Network Detection combines model output and network visualization to help users investigate suspected bot accounts and their relationships.",
    problem: "Technical detection output is difficult to interpret when account relationships, confidence, and evidence are presented as disconnected data.",
    contributions: ["Designed the analytical investigation workflow", "Integrated FastAPI, model output, and network visualizations", "Created views for comparison and account-level inspection"],
    process: ["Define the information a non-technical user needs", "Design network views for exploration", "Connect detection output to the interface", "Test data-heavy states and refine hierarchy"],
    outcome: "Produced an interface that makes model results and account relationships easier to explore and explain.", metrics: [],
    learning: "I learned to design for explainability and connect a machine-learning backend to a usable, data-heavy product experience.",
    technologies: ["FastAPI", "Python", "Data Visualization", "Machine Learning"], gallery: botGallery,
  },
  {
    slug: "buzz-buzz", number: "04/05", featuredOrder: 4, title: "Buzz Buzz", category: "Software Engineering - Mobile App", type: "Mobile entertainment application",
    tags: ["Software Engineering", "UI/UX"], summary: "A film discovery, rating, and community discussion experience.",
    result: "Connected recommendations, ratings, and reviews into a consistent entertainment journey.", context: "Class assignment",
    role: "UI/UX Designer & Mobile Application Developer", duration: "3 Month", team: "Group project (5 Members)", status: "Mobile App", year: "2025",
    image: "/BuzzBuzz.png", imageAlt: "Buzz Buzz mobile application screens", 
    overview: "Buzz Buzz helps people discover, rate, and discuss films and series around their preferences.",
    problem: "Entertainment discovery can become fragmented when recommendations, watch decisions, ratings, and community reviews live in disconnected flows.",
    contributions: ["Contributed research and shaped the main user flows", "Designed consistent discovery, rating, and review patterns", "Translated the interface into front-end views"],
    process: ["Explore how people decide what to watch", "Map the discovery-to-review journey", "Prototype the main flows", "Build and align the front-end patterns"],
    outcome: "Created a cohesive mobile experience connecting personalized discovery with community participation.", metrics: [],
    learning: "I learned to align design decisions within a team and maintain consistency between research, interface design, and front-end delivery.",
    technologies: ["XML", "Kotlin", "MySQL", "TMDb API"], gallery: buzzGallery,
  },
  {
    slug: "quake", number: "05/05", featuredOrder: 5, title: "QUAKE", category: "UI/UX - Mobile Safety App", type: "Mobile application prototype", tags: ["UI/UX"],
    summary: "A calm emergency guide that prioritizes safety instructions and a direct SOS flow.",
    result: "Translated complex emergency guidance into a focused end-to-end mobile experience.", context: "Class assignment", role: "UI/UX Designer",
    duration: "16 Weeks", team: "Group project (5 Members)", status: "Completed prototype", year: "2024", image: "/Quack.png", imageAlt: "QUAKE emergency guide application screens",
    externalUrl: "https://www.figma.com/proto/nPQd29r4aoJyYXPWb5rqkY/Quack", externalLabel: "View Figma prototype",
    overview: "QUAKE explores how a calm, focused mobile experience can guide people through an emergency without overwhelming them with information.",
    problem: "During high-stress situations, dense instructions and unclear priorities can make it harder to identify the right action quickly.",
    contributions: ["Mapped the information architecture and emergency flows", "Prioritized critical actions and reduced unnecessary decisions", "Created the interface and interactive Figma prototype"],
    process: ["Map the moments when help is needed most", "Prioritize emergency actions", "Create a clear information hierarchy", "Prototype and review the complete flow"],
    outcome: "Created a focused prototype where critical guidance and SOS actions are easier to find and understand.", metrics: [],
    learning: "I learned to prioritize clarity, accessibility, and low cognitive load when designing for urgent situations.",
    technologies: ["Figma", "UI/UX Design", "Mobile Design", "Prototyping"], gallery: quakeGallery,
  },
];

export const projectTags: ("All" | ProjectTag)[] = ["All", "Software Engineering", "Data/ML", "UI/UX"];
export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
export function getNextProject(slug: string) { const index = projects.findIndex((project) => project.slug === slug); return projects[(index + 1) % projects.length]; }
