import { Sora, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Depox Studio | Premium Web Design & Development",
  description: "We design websites that shape how customers feel online. Thoughtful design. Clean code. Real business impact.",
  keywords: ["web design", "web development", "branding", "UI/UX", "ecommerce", "SaaS", "digital agency", "Depox Studio"],
  authors: [{ name: "Depox Studio" }],
  creator: "Depox Studio",
  publisher: "Depox Studio",
  metadataBase: new URL('https://depoxstudio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Depox Studio | Premium Web Design & Development",
    description: "We design websites that shape how customers feel online. Thoughtful design. Clean code. Real business impact.",
    url: "https://depoxstudio.vercel.app",
    siteName: "Depox Studio",
    images: [
      {
        url: "/img/logo.png",
        width: 800,
        height: 600,
        alt: "Depox Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Depox Studio | Premium Web Design & Development",
    description: "We design websites that shape how customers feel online. Thoughtful design. Clean code. Real business impact.",
    images: ["/img/logo.png"],
  },
  icons: {
    icon: "/img/logo.png",
    shortcut: "/img/logo.png",
    apple: "/img/logo.png",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable} antialiased bg-[#c1d7c8] text-[#1a1a1a] font-sans`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
