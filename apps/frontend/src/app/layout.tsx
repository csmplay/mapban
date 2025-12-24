// SPDX-FileCopyrightText: 2024, 2025 CyberSport Masters <git@csmpro.ru>
// SPDX-License-Identifier: AGPL-3.0-only

import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CSM MAP BAN",
  description: "x_x",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RuntimeEnvLoader />
        <Toaster />
        {children}
      </body>
    </html>
  );
}

function RuntimeEnvLoader() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (async () => {
            try {
              const res = await fetch('/api/runtime-env');
              const env = await res.json();
              window.__RUNTIME_ENV__ = env;
            } catch (e) {
              console.error('Failed to load runtime env:', e);
              window.__RUNTIME_ENV__ = {
                NEXT_PUBLIC_CDN_BASE: "https://cdn.example.com",
                NEXT_PUBLIC_CDN_LOGO: "logo.svg",
              };
            }
          })();
        `,
      }}
    />
  );
}
