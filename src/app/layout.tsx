
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppStore } from "@/store/store";
import { Provider } from "react-redux";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={AppStore}>
          <AuthGuard />
          {children}
        </Provider>
      </body>
    </html>
  );
}
