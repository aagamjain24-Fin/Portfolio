import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
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
    "Aagam Jain — Finance professional specializing in FP&A, budgeting, forecasting, financial modelling, and variance analysis. Explore real Excel-based financial models, MIS dashboards, and FP&A work samples.",
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
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable}`}>
      <body className="font-sans bg-base text-ink antialiased">{children}</body>
    </html>
  );
}
