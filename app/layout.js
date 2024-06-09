import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic'

// const inter = Inter({ subsets: ["latin"] });

const Header = dynamic(() => import('@/components/Header'), { ssr: false })

export const metadata = {
  title: "Prashant",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-Raleway">
      <Header />
      <body>{children}</body>
    </html>
  );
}
