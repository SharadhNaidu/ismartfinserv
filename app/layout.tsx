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
  metadataBase: new URL("https://ismartfinserv.co.in"),
  title: "IsmartFinserv - Your Trusted Financial Partner",
  description:
    "IsmartFinserv provides comprehensive financial services including loans, stocks, mutual funds, insurance, tax planning, and more. Serving Mulbagal, Mulabagilu, Kolar and nearby areas.",
  keywords:
    "IsmartFinserv, Ismart Finserv, financial services, loans, stocks, mutual funds, insurance, tax planning, investment, Mulbagal, Mulabagilu, Kolar, Karnataka",
  authors: [{ name: "IsmartFinserv" }],
  alternates: {
    canonical: "https://ismartfinserv.co.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "IsmartFinserv - Your Trusted Financial Partner",
    description:
      "Comprehensive financial services and investment solutions tailored to your needs in Mulbagal, Mulabagilu, Kolar.",
    type: "website",
    url: "https://ismartfinserv.co.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "IsmartFinserv - Your Trusted Financial Partner",
    description:
      "Financial services in Mulbagal, Mulabagilu, Kolar. Loans, investments, insurance, tax planning.",
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
