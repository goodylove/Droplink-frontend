import type { Metadata } from "next";

import { ToastContainer } from "react-toastify";
import { Monoton, Bebas_Neue } from "next/font/google";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Provider from "@/provider";

const geistSans = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: "400",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DropLink",
  description:
    "DropLink is the simplest way for music artists to create and share a smart link to all their songs, profiles, all in one page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${bebas.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
