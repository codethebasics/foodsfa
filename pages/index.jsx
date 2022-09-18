import { useState } from 'react'

import Size from '../components/controls/size'
import SizeOption from '../components/controls/size/option'
import Toggle from '../components/controls/toggle'

export default function Home() {
  const [options, setOptions] = useState([
    {
      id: 1,
      label: 'Tamanho',
      description: '10 fatias',
      symbol: 'R$',
      price: 65,
      size: 'P',
      selected: true
    },
    {
      id: 2,
      label: 'Tamanho',
      description: '14 fatias',
      symbol: 'R$',
      price: 89,
      size: 'M',
      selected: false
    },
    {
      id: 3,
      label: 'Tamanho',
      description: '18 fatias',
      symbol: 'R$',
      price: 109,
      size: 'G',
      selected: false
    }
  ])

  return (
    <>
      <Size>
        {options.map(option => (
          <SizeOption
            key={option.id}
            label={option.label}
            description={option.description}
            symbol={option.symbol}
            price={option.price}
            size={option.size}
            selected={option.selected}
          />
        ))}
      </Size>
      <Toggle />
    </>
  )
}
