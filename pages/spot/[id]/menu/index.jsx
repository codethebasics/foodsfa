import { Flex, Box, Text, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Header from '../../../../components/layout/header/Header'
import Footer from '../../../../components/layout/footer/Footer'
import Sidebar from '../../../../components/layout/sidebar/Sidebar'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import CategoryCarousel from '../../../../components/category/CategoryCarousel'
import Products from '../../../../components/product/Products'

import styles from '../Spot.module.scss'

export default function Home() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)
  const router = useRouter()

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
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          backgroundImage={'url(/img/restaurant.png)'}
          borderRadius={'30px'}
          height={'200px'}
          p={5}
          color={'#000'}
          overflowY={'auto'}
        >
          <Box
            cursor={'pointer'}
            lineHeight={'1.8rem'}
            width={'100%'}
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_APP_URL}/spot/1`)
            }
          >
            <Text
              color={'#FFF'}
              textShadow={'0 3px 3px #000'}
              fontSize={'1.5rem'}
            >
              Seja Bem vindo!
            </Text>
            <Text
              color={'#FFF'}
              textShadow={'0 3px 3px #000'}
              fontSize={'2rem'}
            >
              La Vie est Belle
            </Text>
          </Box>
          <Flex alignSelf={'flex-end'} justifyContent={'flex-end'}>
            <Flex justifySelf={'flex-end'}>
              <Box
                margin={'0 3px'}
                width={'10px'}
                height={'10px'}
                backgroundColor={'#000'}
                borderRadius={'100%'}
              />
              <Box
                margin={'0 3px'}
                width={'10px'}
                height={'10px'}
                backgroundColor={'#000'}
                borderRadius={'100%'}
              />
            </Flex>
          </Flex>
        </Flex>
        <div className="main">
          <Flex direction={'column'} height={'100%'}>
            <Flex p={5} alignItems={'center'} justifyContent={'space-between'}>
              <Flex>
                <Text>Explore nossas&nbsp;</Text>
                <Text color={'#FFCC00'} fontWeight={'bold'}>
                  Categorias
                </Text>
              </Flex>
              <Flex>
                <Box
                  margin={'0 3px'}
                  width={'10px'}
                  height={'10px'}
                  backgroundColor={'#FFCC00'}
                  borderRadius={'1000%'}
                />
                <Box
                  margin={'0 3px'}
                  width={'10px'}
                  height={'10px'}
                  backgroundColor={'#FFCC00'}
                  borderRadius={'1000%'}
                />
              </Flex>
            </Flex>
            <Flex mx={5}>
              <CategoryCarousel />
            </Flex>
            <Flex p={5} alignItems={'center'} justifyContent={'space-between'}>
              <Flex>
                <Text>Mais&nbsp;</Text>
                <Text color={'#FFCC00'} fontWeight={'bold'}>
                  Populares
                </Text>
              </Flex>
              <Flex>
                <Box
                  margin={'0 3px'}
                  width={'10px'}
                  height={'10px'}
                  backgroundColor={'#FFCC00'}
                  borderRadius={'1000%'}
                />
                <Box
                  margin={'0 3px'}
                  width={'10px'}
                  height={'10px'}
                  backgroundColor={'#FFCC00'}
                  borderRadius={'1000%'}
                />
              </Flex>
            </Flex>
            <Products />
          </Flex>
        </div>
      </main>
      <Footer
        backgroundColor={'#FFCC00'}
        color={'#000'}
        borderRadius={'30px'}
        justifyContent={'space-between'}
      >
        <Text fontWeight={'bold'} fontSize={'2rem'}>
          R$ 180,00
        </Text>
        <Image src={'/img/bag.svg'} alt={'Pedidos'} />
      </Footer>
    </div>
  )
}
