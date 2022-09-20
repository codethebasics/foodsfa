import SizeOption from './option'

import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

export default function Size({ onSelect }) {
  const [, setSelectedOption] = useState('')
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

  const changeSelected = selectedOption => {
    const resetArray = options.slice(0)
    resetArray.forEach(option =>
      option.id == selectedOption.id
        ? (option.selected = true)
        : (option.selected = false)
    )
    setOptions(resetArray)
    setSelectedOption(selectedOption)
    onSelect(selectedOption.size)
  }

  return (
    <Flex direction={'column'}>
      {options.map(option => (
        <SizeOption
          key={option.id}
          label={option.label}
          description={option.description}
          symbol={option.symbol}
          price={option.price}
          size={option.size}
          selected={option.selected}
          onSelect={() => changeSelected(option)}
        />
      ))}
    </Flex>
  )
}
