import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Anton Strelkovkyy",
  description: "Personal website of Anton Strelkovkyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
        </style>
      </head>
      <body className={cn(
        "min-h-screen bg-[#c2b3b3] antialiased",
        inter.className
      )}>{children}</body>
    </html>
  );
}
