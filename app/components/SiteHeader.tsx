"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <Link className="siteLogo" href="/" aria-label="Intan portfolio home">
        <Image src="/logo.png" width={30} height={30} alt="" />
        <span>INTAN.EXE</span>
      </Link>
      <nav className="desktopNav" aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="availability"><span aria-hidden="true" />Available</div>
      <button
        type="button"
        className="menuButton"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav className="mobileMenu" id="mobile-menu" aria-label="Mobile navigation">
          <div className="windowBar"><span>NAVIGATION.EXE</span><span aria-hidden="true">_ □ ×</span></div>
          {navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}<span>→</span></Link>)}
        </nav>
      )}
    </header>
  );
}
