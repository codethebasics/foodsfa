import styled from 'styled-components'

import { Flex, Checkbox, Text, Stack } from '@chakra-ui/react'
import { useState } from 'react'

/**
 * ---------
 * Container
 * ---------
 */
const DayOfWeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`

/**
 * -------
 * Divider
 * -------
 */
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => (props.isChecked ? '#5e6268' : '#45484d')};
  margin: 15px 0;
  transition: all 0.2s;
`

/**
 * ------
 * Select
 * ------
 */
const Select = styled.select`
  border: 1px solid ${props => (props.isChecked ? '#5e6268' : '#45484d')};
  border-radius: 5px;
  padding: 5px;
  background: transparent;
  font-size: 0.8rem;
  transition: all 0.2s;
  outline: none;
  color: #fff;

  &:focus {
    border: 1px solid #da5220;
  }

  &:disabled {
    color: #67686a;
  }

  option {
    background: #45484d;
    color: #747577;
  }
`

/**
 * ----------------------------------------------
 * Componente que define um dia da semana
 * do horário de funcionamento do estabelecimento
 * ----------------------------------------------
 */
export default function DayOfWeek({ dia }) {
  const [isChecked, setIsChecked] = useState(false)
  const [, setInicio] = useState()
  const [, setFim] = useState()

  return (
    <Flex padding={'15px'}>
      <DayOfWeekContainer>
        <Flex
          p={5}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'#252629'}
          borderRadius={'5px'}
        >
          <Checkbox
            colorScheme={'orange'}
            isChecked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          >
            <Text color={'#a7a7a7'} fontSize={'0.8rem'}>
              {dia}
            </Text>
          </Checkbox>
        </Flex>
        <Flex
          mt={5}
          p={5}
          direction={'column'}
          transition={'background 0.2s'}
          backgroundColor={isChecked ? '#45484d' : '#3a3c40'}
          borderRadius={'5px'}
          color={'#67686A'}
        >
          <Text fontWeight={'bold'} fontSize={'0.8rem'}>
            Período 1
          </Text>
          <Divider isChecked={isChecked} />
          <Stack>
            <Text fontSize={'0.7rem'} fontWeight={'bold'}>
              Início
            </Text>
            <Select
              disabled={!isChecked}
              isChecked={isChecked}
              onChange={e => setInicio(e.target.value)}
            >
              <option value="">--:--</option>
              <option value="06:00">06:00</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="23:00">23:00</option>
              <option value="00:00">00:00</option>
            </Select>
          </Stack>
          <Stack mt={5}>
            <Text fontSize={'0.7rem'} fontWeight={'bold'}>
              Fim
            </Text>
            <Select
              disabled={!isChecked}
              isChecked={isChecked}
              onChange={e => setFim(e.target.value)}
            >
              <option value="">--:--</option>
              <option value="06:00">06:00</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="23:00">23:00</option>
              <option value="00:00">00:00</option>
            </Select>
          </Stack>
        </Flex>
      </DayOfWeekContainer>
    </Flex>
  )
}
