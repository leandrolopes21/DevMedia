import { Inter } from "next/font/google";
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cadastro de Leads",
  description: "Gerado por Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
