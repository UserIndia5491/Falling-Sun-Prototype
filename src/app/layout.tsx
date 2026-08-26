import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FallingSun — 24-Hour Under-18 Hackathon",
  description:
    "FallingSun is a free 24-hour software hackathon for students under 18, in Delhi NCR, India. The sun falls. Something rises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
