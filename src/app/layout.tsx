import React from 'react';
import { Inter } from 'next/font/google';

import './globals.css';
import { Metadata } from 'next';
// import Navbar from '../components/ui/Navbar';
import Providers from '../lib/Providers';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Serve wave',
  description: 'Grow your business with us',
  icons: "https://i.ibb.co/HrsHFBW/bug-buster-pro-high-resolution-color-logo.png"
}

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <Providers>
    <html lang="en">
      <body>{children}</body>
    </html>
  </Providers>
);

export default RootLayout;