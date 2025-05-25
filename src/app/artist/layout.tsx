import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist | DropLink",
  description:
    "All your music, profiles, and more in one place. Create your artist page on DropLink.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
