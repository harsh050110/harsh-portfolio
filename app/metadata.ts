// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Harsh K| Portfolio",
  description: "Frontend Developer & Machine Learning Enthusiast",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
};