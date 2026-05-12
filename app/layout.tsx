import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alpha1 IT Solutions and Consulting Pvt. Ltd.",
    template: "%s | Alpha1 IT Solutions",
  },
  description:
    "Alpha1 IT Solutions and Consulting Pvt. Ltd. — Premier enterprise networking, cybersecurity, and digital infrastructure solutions. 7+ years of excellence.",
  metadataBase: new URL("https://www.alpha1itsolutions.com"),
  openGraph: {
    siteName: "Alpha1 IT Solutions and Consulting Pvt. Ltd.",
    url: "https://www.alpha1itsolutions.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
