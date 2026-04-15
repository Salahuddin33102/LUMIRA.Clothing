import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Digital Khata | Premium Business Ledger",
  description: "Modern, fast, and secure business account tracking and financial management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
