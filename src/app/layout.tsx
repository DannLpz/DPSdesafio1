// src/app/layout.tsx
import type { Metadata } from "next";
import { ReduxProvider } from "../redux/ReduxProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manga Store - Carrito",
  description: "Librería de mangas con carrito de compras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}