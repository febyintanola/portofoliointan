import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intan — UI/UX Designer & Front-End Developer",
  description:
    "Portofolio Intan, UI/UX designer dan front-end developer yang merancang pengalaman digital yang jernih, responsif, dan berkarakter.",
  keywords: [
    "UI/UX Designer",
    "Front-End Developer",
    "Product Designer",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Intan" }],
  openGraph: {
    title: "Intan — UI/UX Designer & Front-End Developer",
    description:
      "Merancang pengalaman digital yang jernih, responsif, dan berkarakter.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
