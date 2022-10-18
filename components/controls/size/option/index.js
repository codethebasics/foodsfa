import styled from 'styled-components'

/**
 *
 * Container principal do componente
 *
 */
const SizeOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${props => (props.selected ? '#FFCC00' : '#333')};
  color: ${props => (props.selected ? '#222' : '#fff')};
  transition: all 0.2s;

  div {
    padding: 15px;
    display: flex;

    &:first-child {
      flex-direction: column;
      flex-grow: 1;

      span {
        &:last-child {
          font-size: 0.8rem;
        }
      }
    }

    &:last-child {
      span {
        margin: 0 5px;

        &:last-child {
          margin-left: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          background: ${props => (props.selected ? '#222' : '#ffcc00')};
          color: ${props => (props.selected ? '#fff' : '#222')};
        }
      }
    }
  }
`

/**
 *
 * Componente de opção de tamanho
 *
 * @param {string} label - Título do tamanho
 * @param {string} description - Descrição do tamanho
 * @param {string} symbol - Símbolo monetário do valor do tamanho
 * @param {number} price - Preço do tamanho
 * @param {string} size - Sigla do tamanho
 * @param {boolean} selected - Define se tamanho está selecionado
 * @param {Event} onSelect - Evento de seleção de tamanho
 *
 * @returns Component
 */
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
    <SizeOptionContainer onClick={select} selected={selected}>
      <div>
        <span>{label}</span>
        <span>{description}</span>
      </div>
      <div>
        <span>{symbol}</span>
        <span>{price?.toFixed(2)}</span>
        <span>{size}</span>
      </div>
    </SizeOptionContainer>
  )
}
