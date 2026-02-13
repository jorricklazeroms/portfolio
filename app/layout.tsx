import type { Metadata } from "next";
import Link from "next/link";
import SectionNav from "@/src/components/section-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorrick + Wesley Portfolio",
  description: "Single-page duo portfolio with expandable projects and devlogs"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="shell header">
          <Link href="/" className="brand">
            Jorrick + Wesley
          </Link>
          <nav>
            <SectionNav />
          </nav>
        </header>
        <main className="shell main-content">{children}</main>
      </body>
    </html>
  );
}
