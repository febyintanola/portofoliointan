import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import MotionController from "./components/MotionController";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Intan - Software Engineer ", template: "%s | Intan" },
  description: "Intan's portfolio across software engineering, structured project delivery, data, and UI/UX.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  keywords: ["Software Engineer", "Full-Stack Developer", "Portfolio", "Indonesia"],
  authors: [{ name: "Intan Febyola Putri Dwina Sidabutar" }],
  openGraph: {
    title: "Intan - Software Engineer ",
    description: "Software engineering, structured project delivery, data, and thoughtful digital experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <MotionController />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
