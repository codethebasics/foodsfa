import { useState } from 'react'
import { ToggleButton, ToggleContainer } from './styles'

export default function Toggle({ status }) {
  const [active, setActive] = useState(status)

  return (
    <ToggleContainer>
      <div>
        <div className={'label'}>Opcional</div>
        <div className={'description'}>Picles com parmesão</div>
      </div>
      <ToggleButton
        onClick={() => {
          setActive(!active)
        }}
        className={active ? 'active' : ''}
      >
        <div />
      </ToggleButton>
    </ToggleContainer>
  )
}
