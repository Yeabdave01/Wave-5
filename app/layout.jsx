'use client';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Wave — Ride the Deals',
  description: 'Wave: original products, trusted payments.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{minHeight: '70vh'}}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
