import styled from 'styled-components'

import { useState } from 'react'

/**
 *
 * Container principal
 *
 */
const ToggleContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .description {
    font-size: 0.8rem;
  }
`

/**
 *
 * Botão de toggle
 *
 */
const ToggleButton = styled.div`
  display: flex;
  background: #3d3d3d;
  width: 75px;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;

  div {
    background: #4a4a4a;
    width: 50%;
    padding: 10px;
    border-radius: 50px;
  }
  &.active {
    background: #ffcc00;
    justify-content: flex-end;
  }
`

/**
 * 
 * Componente de opções
 * 
 * @param {number} id - Identificador do ingrediente
 * @param {string} label - Nome do ingrediente
 * @param {string} description - Descrição do ingrediente
 * @param {boolean} status - Define se o ingrediente está selecionado
 
 * @returns Component
 */
export default function Toggle({
  id,
  label,
  description,
  status,
  storeOption
}) {
  const [active, setActive] = useState(status)

  const changeActive = () => {
    setActive(!active)
    storeOption({
      id: id,
      label: label,
      description: description,
      status: !active
    })
  }

  return (
    <ToggleContainer>
      <div>
        <div className={'label'}>{label}</div>
        <div className={'description'}>{description}</div>
      </div>
      <ToggleButton onClick={changeActive} className={active ? 'active' : ''}>
        <div />
      </ToggleButton>
    </ToggleContainer>
  )
}
