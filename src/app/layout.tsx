import type { Metadata } from "next";
import { Footer } from "@/share/component/layout/Footer";
import { Header } from "@/share/component/layout/Header";
import "@xyflow/react/dist/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ugent",
  description: "AI agent workflow execution platform"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="cug-app-shell">
          <Header />
          <main className="cug-main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
