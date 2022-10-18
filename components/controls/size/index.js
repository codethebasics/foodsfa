import SizeOption from './option'

import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

/**
 *
 * Componente que define tamanhos disponíveis
 * para o produto selecionado
 *
 * @param {Event} onSelect - Função de callback a ser invocada após selecionar tamanho
 * @returns
 */
export default function Size({ onSelect }) {
  const [, setSelectedOption] = useState('')

  // TODO: chamar de API via useEffect
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

  /**
   *
   * Função de callback a ser invocada ao selecionar opção
   *
   * @param {Object} selectedOption - Opção selecionada
   */
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
