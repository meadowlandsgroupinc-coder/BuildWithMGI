import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Build with MGI | Meadowlands Group Inc.",
  description: "Premium construction, renovation, and development across Ontario. Transforming spaces with unmatched craftsmanship and precision.",
  keywords: "luxury renovation Ontario, custom home builder GTA, commercial construction, Meadowlands Group, build with MGI",
  openGraph: {
    title: "Build with MGI | Meadowlands Group Inc.",
    description: "Premium construction, renovation, and development across Ontario.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
