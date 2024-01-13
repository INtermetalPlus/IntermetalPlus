// import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
  weight: ['500','300','700','400','900'],
  subsets: ['latin'],
})

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={roboto.className}>
            <Header />
            <main >{children}</main>
            <Footer />
          </body>
    </html>
  );
}
