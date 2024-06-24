import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider, Nav } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs TailwindCSS Starter",
  description: "Description of the site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
