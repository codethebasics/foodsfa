import { Flex, Box, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper'
import { useState } from 'react'

import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import Sidebar from '../components/layout/sidebar/Sidebar'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default function Home() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)

  return (
    <>
      <Header openSidebar={() => setShowSidebarMenu(true)} />
      <Box className={showSidebarMenu ? 'sidebar show' : 'sidebar hide'}>
        <Sidebar close={() => setShowSidebarMenu(false)} />
      </Box>
      <div className="main">
        <Flex direction={'column'} height={'100%'}>
          <Flex p={5}>
            <Text>La Vie est Belle</Text>
          </Flex>
          <Flex>
            <Swiper
              freeMode={true}
              slidesPerView={2}
              spaceBetween={30}
              modules={[FreeMode, Pagination]}
            >
              <SwiperSlide>Produto 1</SwiperSlide>
              <SwiperSlide>Produto 2</SwiperSlide>
              <SwiperSlide>Produto 3</SwiperSlide>
              <SwiperSlide>Produto 4</SwiperSlide>
              <SwiperSlide>Produto 5</SwiperSlide>
              <SwiperSlide>Produto 6</SwiperSlide>
              <SwiperSlide>Produto 7</SwiperSlide>
              <SwiperSlide>Produto 8</SwiperSlide>
              <SwiperSlide>Produto 9</SwiperSlide>
            </Swiper>
          </Flex>
          <Flex p={3}>
            <Text>Mais Populares</Text>
          </Flex>
          <Flex
            height={'100%'}
            direction={'column'}
            overflow={'auto'}
            p={3}
            mb={3}
            borderRadius={'4px'}
          >
            <Box>
              <Text>Inicio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Meio</Text>
              <Text>Fim</Text>
            </Box>
          </Flex>
        </Flex>
      </div>
      <Footer />
    </>
  )
}
