import type { Metadata } from "next";
import "./globals.css";

const BASE_PATH = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

export const metadata: Metadata = {
  title: "Rofaida A. Mosa — Software Engineer",
  description:
    "Junior Software Engineer specializing in Go, REST APIs, and database-driven services.",
  icons: {
    icon: `${BASE_PATH}/icon.jpg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f7f8fa] text-[#1a2028] font-body">
        {children}
      </body>
    </html>
  );
}