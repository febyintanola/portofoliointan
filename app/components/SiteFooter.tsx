import Link from "next/link";
import { profile } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="siteFooter" id="contact">
      <div className="footerCallout" data-reveal>
        <div className="footerIcon" aria-hidden="true">▣</div>
        <div>
          <span>[ 07_CONNECT ]</span>
          <h2>Let&apos;s build something meaningful_</h2>
          <p>Open to full-time opportunities in software engineering.</p>
        </div>
        <a className="pixelButton pixelButtonYellow" href={`mailto:${profile.email}`}>Get in touch →</a>
      </div>
      <div className="footerBottom">
        <div className="footerLinks">
          {profile.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
          <a href={`mailto:${profile.email}`}>Email ↗</a>
        </div>
        <Link href="/#top">Back to top ↑</Link>
        <span>© 2026 INTAN.EXE</span>
      </div>
    </footer>
  );
}
