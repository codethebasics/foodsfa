import { StyledSizeOption } from './style'

export default function SizeOption({
  label,
  description,
  symbol,
  price,
  size,
  selected,
  onSelect
}) {
  const select = () => {
    onSelect()
  }

  return (
    <StyledSizeOption onClick={select} selected={selected}>
      <div>
        <span>{label}</span>
        <span>{description}</span>
      </div>
      <div>
        <span>{symbol}</span>
        <span>{price?.toFixed(2)}</span>
        <span>{size}</span>
      </div>
    </StyledSizeOption>
  )
}
