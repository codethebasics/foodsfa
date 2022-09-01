import categories from './categories.json'

import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'

export default function CategoryCarousel() {
  return (
    <Swiper
      freeMode={true}
      slidesPerView={3}
      spaceBetween={30}
      modules={[FreeMode, Pagination]}
    >
      {categories.map(category => (
        <SwiperSlide key={category.id}>
          <Box className={'floatingItem'}>
            <Image
              src={category.image}
              alt={category.imageAlt}
              className={'image'}
            />
            <Flex direction={'column'} className={'description'}>
              <Text fontSize={'0.9rem'} fontWeight={'bold'}>
                {category.name}
              </Text>
              <Text fontSize={'0.8rem'} mt={2}>
                {category.description}
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
