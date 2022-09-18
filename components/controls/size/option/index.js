import { useState } from 'react'
import { Option } from './style'

export default function SizeOption({
  label,
  description,
  symbol,
  price,
  size,
  selected
}) {
  const [optionSelected, setOptionSelected] = useState(selected)
  const select = () => {
    setOptionSelected(!optionSelected)
  }

  return (
    <Option onClick={select} selected={optionSelected}>
      <div>
        <span>{label}</span>
        <span>{description}</span>
      </div>
      <div>
        <span>{symbol}</span>
        <span>{price.toFixed(2)}</span>
        <span>{size}</span>
      </div>
    </Option>
  )
}
