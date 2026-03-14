import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLM Catalog — Community Hub for Z.ai & GLM",
  description:
    "The home for Z.ai enthusiasts. Explore rules, browse MCPs, and connect with the GLM community.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glmcatalog.com",
    title: "GLM Catalog — Community Hub for Z.ai & GLM",
    description: "The home for Z.ai enthusiasts. Explore rules, browse MCPs, and connect with the GLM community.",
    siteName: "GLM Catalog",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLM Catalog — Community Hub for Z.ai & GLM",
    description: "The home for Z.ai enthusiasts. Explore rules, browse MCPs, and connect with the GLM community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white flex flex-col h-screen overflow-hidden`}
      >
        <Navbar />
        <main className="flex-1 min-h-0 overflow-y-auto">
          {children}
          <Footer />
        </main>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
