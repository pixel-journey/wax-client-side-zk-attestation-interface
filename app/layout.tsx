import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "This repo does not make a proof",
  description: "proof is false. A matching hash is not zero knowledge, and that hash lives in another repo. Nothing is attested on chain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
