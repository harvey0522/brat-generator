import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Brat Generator Image And Download- Charli XCX",
  description: "Free Brat Generator is an online tool that allows users to create custom images resembling the album cover of Brat by Charli XCX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
