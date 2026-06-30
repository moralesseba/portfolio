import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Sebastián Morales — Full Stack Developer",
  description: "Desarrollador Full Stack chileno especializado en React, Python, Django e inteligencia artificial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-gray-950 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
