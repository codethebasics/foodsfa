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
export default function Size({ onSelect, size, itemPrice }) {
  const [, setSelectedOption] = useState('')

  // TODO: chamar de API via useEffect
  const [options, setOptions] = useState(size)

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
      {options &&
        options.map(option => (
          <SizeOption
            key={option.id}
            label={option.label}
            description={option.description}
            size={option.symbol}
            selected={option.selected}
            price={itemPrice}
            multiplyFactor={option.multiplyFactor}
            onSelect={() => changeSelected(option)}
          />
        ))}
    </Flex>
  )
}
