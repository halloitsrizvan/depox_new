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
