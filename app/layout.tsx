import type { Metadata } from "next";
import { Noto_Sans,BioRhyme } from "next/font/google";
import "./globals.css";
import NavHero from "@/components/navigation/nav-hero";
import { Footer } from "@/components/footer/footer";

const font = BioRhyme({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Africom Media Ltd",
  description: "Generated by Africom Media Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavHero />
        {children}
        <Footer />
        </body>
    </html>
  );
}
