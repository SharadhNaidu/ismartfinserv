import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IsmartFinserv - Your Trusted Financial Partner",
  description: "IsmartFinserv provides comprehensive financial services including loans, stocks, mutual funds, insurance, tax planning, and more. Your trusted partner for all financial needs.",
  keywords: "financial services, loans, stocks, mutual funds, insurance, tax planning, investment, India",
  authors: [{ name: "IsmartFinserv" }],
  openGraph: {
    title: "IsmartFinserv - Your Trusted Financial Partner",
    description: "Comprehensive financial services and investment solutions tailored to your needs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
