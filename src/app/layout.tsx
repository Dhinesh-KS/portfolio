import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhinesh KS — Frontend Engineer",
  description:
    "Frontend-focused full-stack engineer with 6+ years of expertise in building scalable web and mobile applications. Skilled in React, Next.js, micro-frontends, and performance optimization.",
  keywords: [
    "Dhinesh KS",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Dhinesh KS" }],
  openGraph: {
    title: "Dhinesh KS — Frontend Engineer",
    description:
      "Frontend-focused full-stack engineer with 6+ years of experience building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
