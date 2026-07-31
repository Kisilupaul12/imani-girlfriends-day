import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Imani 🌹 - Happy Girlfriend's Day",
  description: "A love letter to the most beautiful soul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-serif">
        <div className="stars" />
        {children}
      </body>
    </html>
  );
}
