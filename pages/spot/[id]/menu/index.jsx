import { Flex, Box, Text, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper'
import { useState } from 'react'

import Header from '../../../../components/layout/header/Header'
import Footer from '../../../../components/layout/footer/Footer'
import Sidebar from '../../../../components/layout/sidebar/Sidebar'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default function Home() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)

  return (
    <>
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
      <Flex
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        backgroundImage={'url(/img/restaurant.png)'}
        borderRadius={'30px'}
        height={'200px'}
        p={5}
        color={'#000'}
        position={'relative'}
      >
        <Box lineHeight={'1.8rem'} width={'100%'}>
          <Text fontSize={'1.5rem'}>Seja Bem vindo!</Text>
          <Text fontSize={'2rem'}>La Vie est Belle</Text>
        </Box>
        <Flex alignSelf={'flex-end'} justifyContent={'flex-end'}>
          <Flex justifySelf={'flex-end'}>
            <Box
              margin={'0 3px'}
              width={'10px'}
              height={'10px'}
              backgroundColor={'#000'}
              borderRadius={'1000%'}
            />
            <Box
              margin={'0 3px'}
              width={'10px'}
              height={'10px'}
              backgroundColor={'#000'}
              borderRadius={'1000%'}
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
            <Swiper
              freeMode={true}
              slidesPerView={3}
              spaceBetween={30}
              modules={[FreeMode, Pagination]}
            >
              <SwiperSlide>
                <Box className={'floatingItem'}>
                  <Image
                    src={'/img/pizza.png'}
                    alt={'pizza'}
                    className={'image'}
                  />
                  <Flex direction={'column'} className={'description'}>
                    <Text fontSize={'0.9rem'} fontWeight={'bold'}>
                      PIZZAS GRANDES
                    </Text>
                    <Text fontSize={'0.8rem'} mt={2}>
                      Salgadas
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className={'floatingItem'}>
                  <Image src={'/img/hamburger.png'} alt={'hamburger'} />
                  <Flex direction={'column'} className={'description'}>
                    <Text fontSize={'0.9rem'} fontWeight={'bold'}>
                      LANCHES
                    </Text>
                    <Text fontSize={'0.8rem'} mt={2}>
                      X-burguers
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className={'floatingItem'}>
                  <Image src={'/img/salgados.png'} alt={'salgados'} />
                  <Flex direction={'column'} className={'description'}>
                    <Text fontSize={'0.9rem'} fontWeight={'bold'}>
                      SALGADOS
                    </Text>
                    <Text fontSize={'0.8rem'} mt={2}>
                      Coxinhas, esfirras...
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className={'floatingItem'}>
                  <Image
                    src={'/img/pizza.png'}
                    alt={'pizza'}
                    className={'image'}
                  />
                  <Flex direction={'column'} className={'description'}>
                    <Text fontSize={'0.9rem'} fontWeight={'bold'}>
                      PIZZAS GRANDES
                    </Text>
                    <Text fontSize={'0.8rem'} mt={2}>
                      Salgadas
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className={'floatingItem'}>
                  <Image src={'/img/hamburger.png'} alt={'hamburger'} />
                  <Flex direction={'column'} className={'description'}>
                    <Text fontSize={'0.9rem'} fontWeight={'bold'}>
                      LANCHES
                    </Text>
                    <Text fontSize={'0.8rem'} mt={2}>
                      X-burguers
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className={'floatingItem'}>
                  <Image src={'/img/salgados.png'} alt={'salgados'} />
                  <Flex direction={'column'} className={'description'}>
                    <Text fontSize={'0.9rem'} fontWeight={'bold'}>
                      SALGADOS
                    </Text>
                    <Text fontSize={'0.8rem'} mt={2}>
                      Coxinhas, esfirras...
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
            </Swiper>
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
          <Flex
            height={'100%'}
            direction={'column'}
            overflow={'auto'}
            p={3}
            mb={3}
            borderRadius={'4px'}
          >
            <Flex
              lineHeight={'1rem'}
              color={'#222'}
              backgroundColor={'#fff'}
              borderRadius={'20px'}
              mb={5}
            >
              <Image
                src={'/img/pizza-marguerita.png'}
                alt={'pizza marguerita'}
                width={150}
                borderRadius={'20px 0 0 20px'}
              />
              <Flex direction={'column'}>
                <Box p={2}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    fontSize={'1.2rem'}
                  >
                    Pizza Grande
                  </Text>
                </Box>
                <Box p={2}>
                  <Text>
                    Marguerita com brócolis, bacon, tomate, ervilhas, milho e
                    azeitonas.
                  </Text>
                </Box>
                <Flex p={2} justifyContent={'space-between'}>
                  <Text textDecoration={'line-through'}>R$120,00</Text>
                  <Text fontSize={'1.2rem'}>R$89,00</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              lineHeight={'1rem'}
              color={'#222'}
              backgroundColor={'#fff'}
              borderRadius={'20px'}
              mb={5}
            >
              <Image
                src={'/img/pizza-marguerita.png'}
                alt={'pizza marguerita'}
                width={150}
                borderRadius={'20px 0 0 20px'}
              />
              <Flex direction={'column'}>
                <Box p={2}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    fontSize={'1.2rem'}
                  >
                    Pizza Grande
                  </Text>
                </Box>
                <Box p={2}>
                  <Text>
                    Marguerita com brócolis, bacon, tomate, ervilhas, milho e
                    azeitonas.
                  </Text>
                </Box>
                <Flex p={2} justifyContent={'space-between'}>
                  <Text textDecoration={'line-through'}>R$120,00</Text>
                  <Text fontSize={'1.2rem'}>R$89,00</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <Footer
        backgroundColor={'#FFCC00'}
        color={'#000'}
        borderRadius={'30px'}
        justifyContent={'space-between'}
      >
        <Text fontWeight={'bold'} fontSize={'2rem'}>
          R$ 180,00
        </Text>
        <Image src={'/img/bag.svg'} />
      </Footer>
    </>
  )
}
