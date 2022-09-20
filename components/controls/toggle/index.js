import { useState } from 'react'
import { ToggleButton, ToggleContainer } from './styles'

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
