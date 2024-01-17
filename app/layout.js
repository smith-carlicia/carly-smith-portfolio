import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import BootstrapClient from './components/BootstrapClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carlicia Smith',
  description: 'Fullstack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  )
}
