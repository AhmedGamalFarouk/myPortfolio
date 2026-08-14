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
  title: "Ahmed Gamal | Front-End & Mobile Engineer",
  description:
    "Personal portfolio of Ahmed Gamal — Front-End & Mobile Engineer crafting high-performance mobile apps & web experiences with Flutter, React Native, React, & TypeScript.",
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
