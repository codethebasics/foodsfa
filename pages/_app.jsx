import '../styles/globals.scss'
import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box className={'wrapper'}>
        <Box className={'header'}>
          <Header />
        </Box>
        <Box className={'main'}>
          <Component {...pageProps} />
        </Box>
        <Box className={'footer'}>
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
