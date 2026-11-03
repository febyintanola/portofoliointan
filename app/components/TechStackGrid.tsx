import type { IconType } from "react-icons";
import {
  FaChartLine,
  FaDatabase,
  FaEnvelope,
  FaFileExcel,
  FaFilePdf,
  FaJava,
  FaKey,
  FaLanguage,
  FaPlug,
} from "react-icons/fa";
import {
  SiAlpinedotjs,
  SiAxios,
  SiBootstrap,
  SiC,
  SiCodeigniter,
  SiComposer,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPm2,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiThemoviedatabase,
  SiX,
  SiXml,
  SiYoutube,
} from "react-icons/si";
import type { SkillGroup, SkillIcon } from "@/lib/content";
import styles from "./TechStackGrid.module.css";

const icons: Record<SkillIcon, IconType> = {
  javascript: SiJavascript,
  php: SiPhp,
  python: SiPython,
  java: FaJava,
  sql: FaDatabase,
  kotlin: SiKotlin,
  c: SiC,
  cplusplus: SiCplusplus,
  html: SiHtml5,
  css: SiCss,
  xml: SiXml,
  nextjs: SiNextdotjs,
  react: SiReact,
  laravel: SiLaravel,
  codeigniter: SiCodeigniter,
  fastapi: SiFastapi,
  express: SiExpress,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  alpine: SiAlpinedotjs,
  axios: SiAxios,
  analysis: FaChartLine,
  language: FaLanguage,
  mysql: SiMysql,
  redis: SiRedis,
  docker: SiDocker,
  pm2: SiPm2,
  tmdb: SiThemoviedatabase,
  x: SiX,
  youtube: SiYoutube,
  api: FaPlug,
  auth: FaKey,
  email: FaEnvelope,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  figma: SiFigma,
  composer: SiComposer,
  pdf: FaFilePdf,
  spreadsheet: FaFileExcel,
};

export default function TechStackGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <article key={group.label}>
          <h3>{group.label}</h3>
          <div className={styles.items}>
            {group.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div className={styles.item} key={item.name}>
                  <span className={styles.icon} style={{ color: item.color }} aria-hidden="true"><Icon /></span>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
