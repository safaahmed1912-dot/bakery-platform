import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "@/components/main-nav";

export const metadata: Metadata = {
  title: "BakeCircle",
  description: "Community-first platform MVP for bakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>
        <div className="app-shell">
          <header className="topbar">
            <div>
              <p className="brand">BakeCircle</p>
              <p className="subtitle">منصة مجتمع الخبازات</p>
            </div>
            <MainNav />
          </header>
          <main className="container">{children}</main>
        </div>
      </body>
    </html>
  );
}
