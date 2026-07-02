import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulmujeebahsan.com"),
  title: {
    default: "Abdul Mujeeb Ahsan | Full-Stack WordPress Developer",
    template: "%s | Abdul Mujeeb Ahsan",
  },
  description:
    "Abdul Mujeeb Ahsan is a full-stack web developer specialized in WordPress, WooCommerce, React, and Next.js. Building fast, SEO-friendly websites, custom themes, plugins, and conversion-focused UI.",
  keywords: [
    "Abdul Mujeeb Ahsan",
    "WordPress developer",
    "full-stack web developer",
    "WooCommerce developer",
    "React developer",
    "Next.js developer",
    "WordPress designer Islamabad",
    "custom WordPress themes",
    "WordPress plugins",
  ],
  authors: [{ name: "Abdul Mujeeb Ahsan", url: "https://abdulmujeebahsan.com" }],
  creator: "Abdul Mujeeb Ahsan",
  icons: {
    icon: [{ url: "/imgs/site-icon.png", type: "image/png" }],
    apple: "/imgs/site-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulmujeebahsan.com",
    siteName: "Abdul Mujeeb Ahsan Portfolio",
    title: "Abdul Mujeeb Ahsan | Full-Stack WordPress Developer",
    description:
      "Full-stack web developer specialized in WordPress, WooCommerce, React, and Next.js. Custom themes, plugins, and high-performance business websites.",
    images: [
      {
        url: "/imgs/site-icon.png",
        width: 512,
        height: 512,
        alt: "Abdul Mujeeb Ahsan",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Abdul Mujeeb Ahsan | Full-Stack WordPress Developer",
    description:
      "WordPress full-stack developer building fast, SEO-friendly websites with React and Next.js.",
    images: ["/imgs/site-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
