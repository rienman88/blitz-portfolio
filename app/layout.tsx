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
  metadataBase: new URL("https://blitz-portfolio.vercel.app"),

  title: {
    default: "Rienart Ryan Ilagan | Security Platform Engineer",
    template: "%s | Rienart Ryan Ilagan",
  },

  description:
    "Security Platform Engineer specializing in Linux, Identity & Access Management, Docker, Cloud Security, Security Platform Engineering, and Security Architecture.",

  keywords: [
    "Security Platform Engineer",
    "Identity and Access Management",
    "IAM",
    "Keycloak",
    "OpenLDAP",
    "Linux",
    "Docker",
    "Cloud Security",
    "Security Architect",
    "Cybersecurity",
    "DFIR",
    "Digital Forensics",
    "Incident Response",
    "Python",
  ],

  authors: [
    {
      name: "Rienart Ryan Ilagan",
    },
  ],

  creator: "Rienart Ryan Ilagan",

  publisher: "Rienart Ryan Ilagan",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    url: "/",

    siteName: "Blitz Portfolio",

    title: "Rienart Ryan Ilagan | Security Platform Engineer",

    description:
      "Security Platform Engineer specializing in Linux, IAM, Docker, Cloud Security and Security Architecture.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blitz Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rienart Ryan Ilagan | Security Platform Engineer",

    description:
      "Security Platform Engineer specializing in Linux, IAM, Docker, Cloud Security and Security Architecture.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
