import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import CartContextProvider from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Front",
  description: "Frontend of eCommerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <CartContextProvider>
          <header>
            <div className="sticky top-0 fixed">
              <Nav />
            </div>
          </header>
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
