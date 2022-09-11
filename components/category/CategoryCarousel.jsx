import categories from './categories.json'
import styles from './Category.module.scss'
import { Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'

export default function CategoryCarousel({ setCategoryId }) {
  return (
    <Swiper
      freeMode={true}
      slidesPerView={2}
      spaceBetween={10}
      modules={[FreeMode, Pagination]}
    >
      {categories.map(category => (
        <SwiperSlide
          key={category.id}
          className={styles.slider}
          onClick={() => setCategoryId(category.id)}
        >
          <div className={styles.product}>
            <div className={styles.top} />
            <Image
              src={category.image}
              alt={category.imageAlt}
              className={styles.categoryIcon}
              height={75}
            />
            <div className={styles.bottom}>
              <div className={styles.name}>{category.name}</div>
              <div className={styles.description}>{category.description}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
