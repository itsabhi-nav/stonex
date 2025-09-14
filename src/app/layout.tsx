import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import { Toaster } from "@/components/ui/sonner";
import PageTransition from "@/components/animations/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Surana Stonex - Premium Marbles & Natural Stones | Italian, Blue, Pink Marble",
    template: "%s | Surana Stonex Premium Marbles"
  },
  description: "Leading supplier of premium Italian marble, blue marble, pink marble, and rare onyx. Expert marble installation, custom fabrication, and maintenance services in Rajasthan, India. Contact +91 9829051903.",
  keywords: [
    "premium marble",
    "Italian marble",
    "blue marble",
    "pink marble",
    "rare onyx",
    "marble supplier",
    "marble installation",
    "custom marble fabrication",
    "marble maintenance",
    "Rajasthan marble",
    "Kishangarh marble",
    "Carrara marble",
    "Calacatta marble",
    "Bahia blue marble",
    "Estremoz pink marble",
    "Patagonia onyx",
    "marble countertops",
    "marble flooring",
    "luxury marble",
    "natural stone"
  ],
  authors: [{ name: "Surana Stonex" }],
  creator: "Surana Stonex",
  publisher: "Surana Stonex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.suranastonex.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.suranastonex.com',
    siteName: 'Surana Stonex Premium Marbles',
    title: 'Surana Stonex - Premium Marbles & Natural Stones',
    description: 'Leading supplier of premium Italian marble, blue marble, pink marble, and rare onyx. Expert marble installation, custom fabrication, and maintenance services in Rajasthan, India.',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Surana Stonex Premium Marbles Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surana Stonex - Premium Marbles & Natural Stones',
    description: 'Leading supplier of premium Italian marble, blue marble, pink marble, and rare onyx. Expert marble installation and custom fabrication services.',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar`}
      >
        <Navbar />
        <main className="pt-[100px] sm:pt-[108px] lg:pt-[116px]">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
