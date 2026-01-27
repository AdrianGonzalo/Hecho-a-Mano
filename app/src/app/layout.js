import "./globals.css";
import { Montserrat } from "next/font/google";


import Header from "@/components/Header";
import Footer from "@/components/footer";


export const metadata = {
  title: "Hecho a Mano",
  description: "Productos hechos a mano",
};


// Fuente base (texto normal)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`flex flex-col ${montserrat.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}