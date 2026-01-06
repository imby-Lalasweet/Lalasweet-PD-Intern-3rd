import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "라라스윗 마케팅 인턴 채용",
  description: "라라스윗 마케팅 인턴 채용 랜딩 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} antialiased bg-deep-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
