import { Outfit } from "next/font/google";
import "./globals.css";

// Google Font: Outfit
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "BaCu Kozijnen",
  description: "BaCu Kozijnen: Kiezen voor Kwaliteit en Duurzaamheid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
