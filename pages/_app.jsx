import '../styles/globals.scss'

import React, { useEffect } from 'react'
import TransitionScreen from '../components/layout/screen/TransitionScreen'

import { useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
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
          <Component {...pageProps} />
        </Box>
      )}
    </ChakraProvider>
  )
}

export default MyApp
