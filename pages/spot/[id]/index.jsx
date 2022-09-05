import Header from '../../../components/layout/header/Header'
import Footer from '../../../components/layout/footer/Footer'

// import { useState } from 'react'
import { useRouter } from 'next/router'
import { Flex, Image, Text } from '@chakra-ui/react'
import Calendar from '../../../components/calendar/Calendar'
import { useEffect } from 'react'

export default function Spot() {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    console.log(id)
  })

  return (
    <>
      <Header
        openSidebar={() => setShowSidebarMenu(true)}
        justifyContent={'center'}
        p={2}
      >
        <Image src="/img/logo-label.svg" alt={'FoodsFa'} />
      </Header>
      <Flex direction={'column'}>
        <Image
          src={'/img/restaurant.png'}
          height={400}
          width={400}
          alt={'restaurante'}
        />
        <Flex direction={'column'} p={5}>
          <Text color={'#FFCC00'}>Rua Otto Rosenberg, 381.</Text>
          <Text fontSize={'0.8rem'}>Vila Paulista, Curitiba.</Text>
        </Flex>
        <Flex direction={'column'} px={5}>
          <Text mb={4} color={'#FFCC00'}>
            Horários de Funcionamento:
          </Text>
          <Calendar />
        </Flex>
      </Flex>
      <Footer
        backgroundColor={'#FFCC00'}
        justifyContent={'space-between'}
        borderRadius={'30px 30px 0 0'}
      >
        <Flex justifyContent={'space-between'} width={'100%'} px={4} py={2}>
          <Text color={'#000'} fontSize={'1.5rem'} fontWeight={'bold'}>
            Iniciar Pedido...
          </Text>
          <Image
            cursor={'pointer'}
            src={'/img/bag.svg'}
            alt={'bag'}
            width={10}
            pr={2}
            justifySelf={'flex-end'}
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_APP_URL}/spot/1/menu`)
            }
          />
        </Flex>
      </Footer>
    </>
  )
}
