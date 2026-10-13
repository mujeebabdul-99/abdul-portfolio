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
    default: "Abdul Mujeeb Ahsan | Web Developer & Digital Designer",
    template: "%s | Abdul Mujeeb Ahsan",
  },
  description:
    "Abdul Mujeeb Ahsan is a web developer and digital designer with 5+ years of experience building responsive websites, custom WordPress functionality, Figma-to-WordPress implementations, API integrations, and modern frontend experiences.",
  keywords: [
    "Abdul Mujeeb Ahsan",
    "Web Developer",
    "Digital Designer",
    "WordPress Developer",
    "WooCommerce developer",
    "Figma to WordPress",
    "custom WordPress themes",
    "Gutenberg blocks",
    "React developer",
    "Next.js developer",
    "web developer Islamabad",
  ],
  authors: [{ name: "Abdul Mujeeb Ahsan", url: "https://abdulmujeebahsan.com" }],
  creator: "Abdul Mujeeb Ahsan",
  icons: {
    icon: [{ url: "/imgs/profile-icon.png", type: "image/png" }],
    apple: "/imgs/profile-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulmujeebahsan.com",
    siteName: "Abdul Mujeeb Ahsan Portfolio",
    title: "Abdul Mujeeb Ahsan | Web Developer & Digital Designer",
    description:
      "Web developer and digital designer building responsive websites, custom WordPress systems, and modern frontend experiences.",
    images: [
      {
        url: "/imgs/profile-icon.png",
        width: 512,
        height: 512,
        alt: "Abdul Mujeeb Ahsan",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Abdul Mujeeb Ahsan | Web Developer & Digital Designer",
    description:
      "Web developer and digital designer — WordPress, custom functionality, Figma-to-WordPress, and modern frontend.",
    images: ["/imgs/profile-icon.png"],
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
