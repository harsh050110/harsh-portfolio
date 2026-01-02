import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh K | Frontend  Developer",
  description: "Frontend  Developer & Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
  metadataBase: new URL("https://harshkumar.com"),
  
  // Basic metadata
  applicationName: "Harsh Kumar Portfolio",
  authors: [{ name: "Harsh Kumar" }],
  keywords: ["Frontend  Developer", "Web3", "Blockchain", "Next.js", "React", "Machine Learning"],
  
  openGraph: {
    type: "website",
    url: "https://harshkumar.com",
    title: "Harsh K | FrontendDeveloper",
    description: "Frontend Developer & Blockchain and Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
    siteName: "Harsh K Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Kumar - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://harshkumar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}