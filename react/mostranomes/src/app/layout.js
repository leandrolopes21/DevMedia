import "./globals.css";

export const metadata = {
  title: "App de Usuários",
  description: "Meu App para Mostrar Usuários",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
