import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import BackgroundGrid from "@/components/ui/BackgroundGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rienart Ryan Ilagan | Security Platform Engineer",

  description:
    "IT Infrastructure and Security Professional specializing in Linux, IAM, Docker and Security Platform Engineering.",

  keywords: [
    "Linux",
    "Docker",
    "Keycloak",
    "OpenLDAP",
    "Security",
    "IAM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>

        <BackgroundGrid />

        {children}

      </body>
    </html>
  );
}
