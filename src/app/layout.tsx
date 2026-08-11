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
  title: "Prisma — Worldwide Network of Visual Artists & Storytellers",
  description:
    "Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black text-[#E1E0CC]">{children}</body>
    </html>
  );
}
