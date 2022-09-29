import Header from '../../../components/layout/header/Header'
import Footer from '../../../components/layout/footer/Footer'
import Calendar from '../../../components/calendar/Calendar'
import Sidebar from '../../../components/layout/sidebar/Sidebar'
import styles from './Spot.module.scss'

import { useRouter } from 'next/router'
import { Flex, Box, Image, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Spot() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)
  const router = useRouter()
  // const { id } = router.query

  useEffect(() => {})

  return (
    <div className={styles.wrapper}>
      <Header borderRadius={'30px'} p={'0 15px'} position={'fixed'}>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          py={2}
        >
          <Flex>
            <Image
              src={'/img/hamburger-menu.svg'}
              alt={'Menu'}
              width={7}
              cursor={'pointer'}
              onClick={() => setShowSidebarMenu(true)}
            />
          </Flex>
          <Box>
            <Image src={'/img/logo-label.svg'} alt={'FoodsFa'} />
          </Box>
          <Box>
            <Image
              src={'/img/search-icon.svg'}
              alt={'Pesquisar'}
              width={7}
              cursor={'pointer'}
            />
          </Box>
        </Flex>
      </Header>
      <Box className={showSidebarMenu ? 'sidebar show' : 'sidebar hide'}>
        <Sidebar close={() => setShowSidebarMenu(false)} />
      </Box>
      <main>
        <Flex
          direction={'column'}
          justifyContent={'space-between'}
          height={'100%'}
        >
          <Flex direction={'column'} py={5}>
            <Image
              src={'/img/restaurant.png'}
              height={200}
              width={400}
              alt={'restaurante'}
              className={styles.spotBanner}
            />
            <Flex direction={'column'} p={5}>
              <Text color={'#FFCC00'} mt={5}>
                Rua Otto Rosenberg, 381.
              </Text>
              <Text fontSize={'0.8rem'}>Vila Paulista, Curitiba.</Text>
              <Text my={5} color={'#FFCC00'}>
                Horários de Funcionamento:
              </Text>
              <Calendar />
            </Flex>
          </Flex>
        </Flex>
      </main>
      <Footer
        backgroundColor={'#FFCC00'}
        justifyContent={'space-between'}
        borderRadius={'50px'}
      >
        <Flex justifyContent={'space-between'} width={'100%'} p={1}>
          <Text
            color={'#000'}
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            margin={'auto'}
          >
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
              router.push(
                `${process.env.NEXT_PUBLIC_APP_URL}/estabelecimento/1/menu`
              )
            }
          />
        </Flex>
      </Footer>
    </div>
  )
}
