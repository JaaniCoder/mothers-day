// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Mother's Day 💕",
  description: "A special digital tribute for every mother.",
  openGraph: {
    title: "Happy Mother's Day 💕",
    description: "A personal, heartfelt digital gift for the most special person in your life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} font-sans antialiased text-slate-800`}
        style={{ fontFamily: "var(--font-lato), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
} 