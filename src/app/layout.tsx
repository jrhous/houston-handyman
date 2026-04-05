import type { Metadata } from "next";
import { Orbitron, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import CRTOverlay from "@/components/CRTOverlay";

const orbitron = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Houston We Have A Problem | Handyman Services",
  description:
    "Family-owned handyman service in Charlotte County & Sarasota County, Florida. Plumbing, electrical, painting, drywall, carpentry, and more. Free estimates!",
  keywords:
    "handyman, Charlotte County, Sarasota County, Florida, plumbing, electrical, painting, home repair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <StarField />
        <CRTOverlay />
        <Navbar />
        <main className="relative z-10 flex-1 pt-[80px] lg:pt-[82px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
