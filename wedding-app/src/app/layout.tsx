import type { Metadata } from "next";
import { Geist, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: '400'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Casamento - Jéssica David",
  description: "Site criado para o casamento de Jéssica e David"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.className} ${greatVibes.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
