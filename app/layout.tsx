import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://aagamjain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aagam Jain | Finance | FP&A | Financial Analysis",
  description:
    "Aagam Jain — Finance professional specializing in FP&A, budgeting, forecasting, financial modelling, and variance analysis. Portfolio of budgeting, MIS reporting, and financial analysis work.",
  keywords: [
    "Aagam Jain",
    "FP&A",
    "Financial Analyst",
    "Financial Planning and Analysis",
    "Budgeting and Forecasting",
    "Variance Analysis",
    "MIS Reporting",
    "Financial Modelling",
  ],
  openGraph: {
    title: "Aagam Jain | Finance | FP&A | Financial Analysis",
    description:
      "Turning financial data into actionable business insights through FP&A, financial modelling, budgeting and analytics.",
    url: siteUrl,
    siteName: "Aagam Jain Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aagam Jain | Finance | FP&A | Financial Analysis",
    description:
      "Turning financial data into actionable business insights through FP&A, financial modelling, budgeting and analytics.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-sans bg-void text-ink antialiased">{children}</body>
    </html>
  );
}
