import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Depox Studio | Premium Web Design & Development",
  description: "We design websites that shape how customers feel online. Thoughtful design. Clean code. Real business impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#c1d7c8] text-[#1a1a1a]`}
      >
        {children}
      </body>
    </html>
  );
}
