import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      //⭐스크린 크기를 아무리 키워도 화면 크기가 모바일 사이즈에 맞춰지게 max-w-screen-sm
      //⭐한쪽에 치우치지 않고 스크린 크기 기준 가운데로 오도록 mx-auto
      className={`${inter.className}
       bg-neutral-100 text-black 
       max-w-screen-sm mx-auto`}>{children}</body>
    </html>
  );
}
