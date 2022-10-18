import styled from 'styled-components'

import { Text, Button, Flex, Box } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'

const Container = styled.div`
  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 60px;
    background: #42464a;
    position: relative;
    left: calc(50% - 30px);
    top: 50px;
    border-radius: 100%;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
    box-shadow: 0 3px 20px #333;
  }
`

export default function ConfigCard({ label, icon, path }) {
  const [isConfigurado] = useState(false)

  return (
    <Container icon={icon}>
      <Flex
        direction={'column'}
        alignItems={'center'}
        m={5}
        p={5}
        backgroundColor={'#3A3C40'}
        borderRadius={'10px'}
        minWidth={'300px'}
      >
        <Box pt={7} pb={4}>
          <Text fontWeight={'bold'} fontSize={'0.9rem'}>
            {label}
          </Text>
        </Box>
        <Box width={'100%'} height={'1px'} backgroundColor={'#4C4E51'} my={3} />
        <Box p={5}>
          <Box
            backgroundColor={isConfigurado ? '#84da89' : '#42464A'}
            padding={'5px 10px'}
            borderRadius={'5px'}
          >
            <Text
              fontSize={'0.8rem'}
              fontWeight={'bold'}
              color={isConfigurado ? '#2b722f' : '#A0AAAB'}
            >
              {isConfigurado ? 'Configurado' : 'Não configurado'}
            </Text>
          </Box>
        </Box>
        <Box width={'100%'} pt={2}>
          <Button
            colorScheme={'dark'}
            width={'100%'}
            size={'sm'}
            border={'1px solid #A0AAAB'}
            _hover={{ bg: '#45484d' }}
          >
            <Link href={`${path}`}>
              <Text fontSize={'0.8rem'}>
                {isConfigurado ? 'Alterar' : 'Configurar'}
              </Text>
            </Link>
          </Button>
        </Box>
      </Flex>
    </Container>
  )
}
