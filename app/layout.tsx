import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "وب‌سایت من",
    template: "%s | وب‌سایت من", // قالب برای تمام صفحات
  },
  description: "بهترین وب‌سایت برای یادگیری Next.js",
  openGraph: {
    title: "وب‌سایت من",
    description: "آموزش Next.js با بهترین متدها",
    url: "https://example.com",
    siteName: "وب‌سایت من",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        Root Layout
        {children}
      </body>
    </html>
  );
}
