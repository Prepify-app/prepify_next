import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/styles/globals.css";
import  "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/widgets/components/Header'
import './../shared/styles/Utilities.css'
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prepify",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <StoreProvider>
          <html lang="en">
              <body className={inter.className}>
                  {/* Main layout components */}
                  <Header />
                  <div>
                      {children}
                  </div>
              </body>
          </html>
      </StoreProvider>
  );
}
