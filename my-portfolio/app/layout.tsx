import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "내 포트폴리오",
    template: "%s | 내 포트폴리오",
  },
  description: "Next.js 15 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className="h-16 border-b flex items-center justify-between px-8">
          <Link href="/" className="font-bold text-lg">
            내 포트폴리오
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-gray-500 transition">
              홈
            </Link>
            <Link href="/projects" className="hover:text-gray-500 transition">
              프로젝트
            </Link>
            <Link href="/posts" className="hover:text-gray-500 transition">
              포스트
            </Link>
          </nav>
        </header>
        <main className="min-h-screen px-8 py-12">{children}</main>
        <footer className="h-16 border-t flex items-center justify-center text-sm text-gray-400">
          © 2025 내 포트폴리오
        </footer>
      </body>
    </html>
  );
}
