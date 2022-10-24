import { createContext, useState } from 'react'

const PedidoContext = createContext([])

const PedidoContextProvider = ({ children }) => {
  return (
    <PedidoContext.Provider value={useState([])}>
      {children}
    </PedidoContext.Provider>
  )
}

export { PedidoContext, PedidoContextProvider }
