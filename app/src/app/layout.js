import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Hecho a Mano",
  description: "Productos hechos a mano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Fleur+De+Leah&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
