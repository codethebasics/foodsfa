import styles from './Item.module.scss'
import { Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Pedido() {
  const [quantity, setQuantity] = useState(0)
  const [, setProduct] = useState(undefined)
  const router = useRouter()
  const { itemId } = router.query

  useEffect(() => {
    if (!itemId) {
      return
    }

    const fetchProduct = async () => {
      const products = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/product`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
      ).then(response => response.json())

      setProduct(products.filter(product => product.id == itemId))
    }

    fetchProduct()
  })

  return (
    <>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image
            src={'/img/item_pizza_italiana.png'}
            alt={'Pizza Italiana'}
            borderRadius={'0 0 25% 25%'}
            boxShadow={'0 10px 0 #FFCC00'}
          />
        </div>
        <div className={styles.resume}>
          <div className={styles.header}>
            <div className={styles.itemLabel}>
              <div className={styles.itemName}>Quatro queijos</div>
              <div className={styles.itemDescription}>Moda da Casa</div>
            </div>
            <div className={styles.counter}>
              <div
                onClick={() =>
                  quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)
                }
              >
                <Image src={'/img/minus-icon.svg'} alt={'-'} />
              </div>
              <div>{quantity}</div>
              <div onClick={() => setQuantity(quantity + 1)}>
                <Image src={'/img/plus-icon.svg'} alt={'+'} />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <span>Mussarela, tomate, gorgonzola, parmesão e orégano</span>
          </div>
          <div className={styles.price}>
            <div className={styles.originalPrice}>R$100,00</div>
            <div className={styles.promoPrice}>R$70,00</div>
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.info}>Personalize seu pedido:</div>
      </div>
    </>
  )
}
