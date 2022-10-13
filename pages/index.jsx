import { useState } from 'react'
import DayOfWeek from '../components/form/DayOfWeek'

export default function Home() {
  const [isDaySelected, setIsDaySelected] = useState(false)

  return (
    <DayOfWeek
      dia={'Segunda-feira'}
      isChecked={isDaySelected}
      onChange={() => setIsDaySelected(!isDaySelected)}
    />
  )
}
