import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import MouseFollowers from "@/components/mouse-followers";

export const metadata: Metadata = {
  title: 'Quantura - Your Technology Partner',
  description: 'Professional informational website for Quantura.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col")}>
        <Header />
        <MouseFollowers />
        <main className="flex-grow animate-fadeIn">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
