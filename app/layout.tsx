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
    default: "Abdul Mujeeb Ahsan | WordPress Developer",
    template: "%s | Abdul Mujeeb Ahsan",
  },
  description:
    "Abdul Mujeeb Ahsan is a WordPress Developer with 5+ years building AI-ready websites — custom themes, plugins, WooCommerce, and modern integrations with React and Next.js.",
  keywords: [
    "Abdul Mujeeb Ahsan",
    "WordPress Developer",
    "WordPress developer",
    "AI-ready WordPress",
    "WooCommerce developer",
    "custom WordPress themes",
    "WordPress plugins",
    "React developer",
    "Next.js developer",
    "WordPress developer Islamabad",
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
    title: "Abdul Mujeeb Ahsan | WordPress Developer",
    description:
      "WordPress Developer building AI-ready sites — custom systems, WooCommerce, and modern integrations.",
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
    title: "Abdul Mujeeb Ahsan | WordPress Developer",
    description:
      "WordPress Developer building AI-ready websites with custom systems, WooCommerce, and modern integrations.",
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
