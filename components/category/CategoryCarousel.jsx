import categories from './categories.json'
import styles from './Category.module.scss'
import { Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'

export default function CategoryCarousel() {
  return (
    <Swiper
      freeMode={true}
      slidesPerView={2}
      spaceBetween={10}
      modules={[FreeMode, Pagination]}
    >
      {categories.map(category => (
        <SwiperSlide key={category.id}>
          <div className={styles.product}>
            <div className={styles.top} />
            <Image src={category.image} alt={category.imageAlt} />
            <div className={styles.bottom}>
              <span className={styles.name}>{category.name}</span>
              <span className={styles.description}>{category.description}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
