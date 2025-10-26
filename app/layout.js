import { Outfit } from "next/font/google";
import "./globals.css";

// Google Font: Outfit
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  description:
    "BaCu Kozijnen biedt maatwerk kozijnen, rolluiken en buitendeuren van topkwaliteit. Duurzaam, stijlvol en uitstekend geïsoleerd, met betrouwbare service en eerlijke communicatie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent indexing/crawling */}
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
