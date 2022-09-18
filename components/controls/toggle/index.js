import { useState } from 'react'
import { ToggleButton, ToggleContainer } from './styles'

export default function Toggle({ status }) {
  const [active, setActive] = useState(status)

  const toggleStatus = () => {}

  return (
    <ToggleContainer>
      <div>
        <div>Opcional</div>
        <div>Picles com parmesão</div>
      </div>
      <ToggleButton
        onClick={() => {
          setActive(!active)
        }}
        className={active ? 'active' : ''}
      >
        <div></div>
      </ToggleButton>
    </ToggleContainer>
  )
}
