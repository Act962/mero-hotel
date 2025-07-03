import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const novera = localFont({
  variable: "--font-novera-sans",
  src: [
    {
      path: "../fonts/Novera-ClassicRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Novera-ClassicMedium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Mero Hotel",
  description: "Aqui você encontra conforto de verdade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${novera.variable} ${novera.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
