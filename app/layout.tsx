import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const barlow = Barlow({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhiteWolf - Portfolio",
  description:
    "This is my personal portfolio website. In fact, the second version of it. I hope you enjoy it :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
