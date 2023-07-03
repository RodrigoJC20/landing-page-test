"use client"

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const theme = extendTheme({
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ChakraProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ChakraProvider>
    </html>
  );
}
