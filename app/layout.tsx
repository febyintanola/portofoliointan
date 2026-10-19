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
    "Intan's portfolio: a learning journey across UI/UX design, front-end development, and creative technology.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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
      "A learning journey across UI/UX design, front-end development, and creative technology.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
