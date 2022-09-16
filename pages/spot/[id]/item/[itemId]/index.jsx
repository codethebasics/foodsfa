import styles from './Item.module.scss'
import { Flex, Box, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Header from '../../../../../components/layout/header/Header'
import Sidebar from '../../../../../components/layout/sidebar/Sidebar'

export default function Pedido() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(1)
  const [totalPromo, setTotalPromo] = useState(1)
  const [product, setProduct] = useState(undefined)
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

      setProduct(products.find(product => product.id == itemId))
      setTotalPromo(product?.pricePromo * quantity)
      setTotal(product?.price * quantity)
    }

    fetchProduct()
  })

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
        <div className={styles.item}>
          <div className={styles.image}>
            <Image
              src={product?.image}
              alt={product?.imageAlt}
              borderRadius={'0 0 25% 25%'}
              boxShadow={'0 10px 0 #FFCC00'}
            />
          </div>
          <div className={styles.resume}>
            <div className={styles.header}>
              <div className={styles.itemLabel}>
                <div className={styles.itemName}>{product?.name}</div>
              </div>
              <div className={styles.counter}>
                <div
                  onClick={() =>
                    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
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
              <span>{product?.description}</span>
            </div>
            <div className={styles.price}>
              <div className={styles.originalPrice}>R${total.toFixed(2)}</div>
              <div className={styles.promoPrice}>R${totalPromo.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.info}>Personalize seu pedido:</div>
          <div className={styles.controls}>
            <div className={styles.size}>
              <div>
                <div className={styles.label}>Tamanho</div>
                <div className={styles.description}>10 fatias</div>
              </div>
              <div>
                <div className={styles.symbol}>R$</div>
                <div className={styles.price}>65,00</div>
                <div className={styles.badgeSize}>P</div>
              </div>
            </div>
            <div className={styles.size}>
              <div>
                <div className={styles.label}>Tamanho</div>
                <div className={styles.description}>14 fatias</div>
              </div>
              <div>
                <div className={styles.symbol}>R$</div>
                <div className={styles.price}>89,00</div>
                <div className={styles.badgeSize}>M</div>
              </div>
            </div>
            <div className={styles.size}>
              <div>
                <div className={styles.label}>Tamanho</div>
                <div className={styles.description}>18 fatias</div>
              </div>
              <div>
                <div className={styles.symbol}>R$</div>
                <div className={styles.price}>109,00</div>
                <div className={styles.badgeSize}>G</div>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.optionals}>
              <div className={styles.option}>
                <div className={styles.label}>Opcional</div>
                <div className={styles.description}>18 fatias</div>
              </div>
              <div>Toggle</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
