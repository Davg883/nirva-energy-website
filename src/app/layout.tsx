import type { Metadata, Viewport } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nirva Energy - Strategic AI Solutions",
    template: "%s | Nirva Energy"
  },
  description: "The Nirva Protocol: Industrial-grade AI agents that deliver strategic advantages through autonomous action, reliability, and grounded intelligence.",
  keywords: ["AI", "automation", "industrial AI", "Rust", "RAG", "ReAct", "enterprise AI", "strategic AI"],
  authors: [{ name: "Nirva Energy" }],
  creator: "Nirva Energy",
  publisher: "Nirva Energy",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nirva.energy",
    siteName: "Nirva Energy",
    title: "Nirva Energy - Strategic AI Solutions",
    description: "The Nirva Protocol: Industrial-grade AI agents that deliver strategic advantages through autonomous action, reliability, and grounded intelligence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirva Energy - Strategic AI Solutions",
    description: "The Nirva Protocol: Industrial-grade AI agents that deliver strategic advantages through autonomous action, reliability, and grounded intelligence.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900 text-white font-sans antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <footer className="bg-gray-950 border-t border-gray-800">
          <div className="container-width py-8">
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2025 Nirva Energy. All Rights Reserved.</p>
              <div className="mt-2 space-x-4">
                <a href="mailto:contact@nirva.energy" className="hover:text-accent-500 transition-all duration-200 ease-out">
                  Contact
                </a>
                <span>•</span>
                <a href="#" className="hover:text-accent-500 transition-all duration-200 ease-out">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
