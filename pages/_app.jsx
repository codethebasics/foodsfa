import '../styles/globals.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import Sidebar from '../components/layout/sidebar/Sidebar'
import TransitionScreen from '../components/layout/screen/TransitionScreen'

function MyApp({ Component, pageProps }) {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const renderTransitionScreen = () => {
    return <TransitionScreen />
  }

  return (
    <ChakraProvider>
      {isLoading ? (
        renderTransitionScreen()
      ) : (
        <Box className={'wrapper'}>
          <Box className={'header'}>
            <Header openSidebar={() => setShowSidebarMenu(true)} />
          </Box>
          <Box className={showSidebarMenu ? 'sidebar show' : 'sidebar hide'}>
            <Sidebar close={() => setShowSidebarMenu(false)} />
          </Box>
          <Box className={'main'}>
            <Component {...pageProps} />
          </Box>
          <Box className={'footer'}>
            <Footer />
          </Box>
        </Box>
      )}
    </ChakraProvider>
  )
}

export default MyApp
