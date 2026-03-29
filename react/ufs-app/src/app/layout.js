import "./globals.css"; // Importa o CSS global que se aplica a toda a aplicação

// Define metadados da página (SEO), como título e descrição que aparecem na aba do navegador ou google
export const metadata = {
  title: "App de Ufs",
  description: "Mau App de Ufs",
};

// Componente de Layout Raiz: envolve todas as páginas da aplicação
// A prop { children } representa o conteúdo da página atual (ex: o componente Home de page.js)
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
