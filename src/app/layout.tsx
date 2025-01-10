
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TapirSoft: Your Trusted B2B Software Solutions Provider',
  description: 'TapirSoft provides cutting-edge B2B software solutions tailored to streamline your business operations and drive growth. Discover how we can empower your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ToastContainer />
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
