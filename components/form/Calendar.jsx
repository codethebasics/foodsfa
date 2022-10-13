import DayOfWeek from './DayOfWeek'

import { Flex } from '@chakra-ui/react'

export default function Calendar() {
  const calendar = [
    {
      id: 1,
      dia: 'Segunda-feira',
      inicio: '12:00',
      fim: '18:00',
      isSelected: false
    },
    {
      id: 2,
      dia: 'Terça-feira',
      inicio: '12:00',
      fim: '18:00',
      isSelected: false
    },
    {
      id: 3,
      dia: 'Quarta-feira',
      inicio: '12:00',
      fim: '18:00',
      isSelected: false
    },
    {
      id: 4,
      dia: 'Quinta-feira',
      inicio: '12:00',
      fim: '18:00',
      isSelected: false
    },
    {
      id: 5,
      dia: 'Sexta-feira',
      inicio: '12:00',
      fim: '18:00',
      isSelected: false
    }
  ]

  return (
    <Flex flexWrap={'wrap'} justifyContent={'center'}>
      {calendar.map(periodo => (
        <DayOfWeek
          key={periodo.id}
          dia={periodo.dia}
          isChecked={periodo.isSelected}
        />
      ))}
    </Flex>
  )
}
