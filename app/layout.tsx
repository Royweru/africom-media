import type { Metadata } from "next";
import { Noto_Sans,BioRhyme } from "next/font/google";
import "./globals.css";
import NavHero from "@/components/navigation/nav-hero";
import { ThemeProvider } from "@/components/theme-provider"
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
       
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          
          
          >
             <NavHero />
            {children}
            <Footer />
          </ThemeProvider>
        
        </body>
    </html>
  );
}
