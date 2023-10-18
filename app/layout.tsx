import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "./nav";

// Inter font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Next.js Tremor`,
  description:
    "An admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
        <body className={inter.className}>
        <Suspense>
          <Nav />
        </Suspense>
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
          {children}
        </main>
      </body>
    </html>
  );
}
