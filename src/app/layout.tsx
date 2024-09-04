import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Daniels blog",
  description:
    "Un blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body >

        {children}


      </body>
    </html>
  );
}
