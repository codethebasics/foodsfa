import styles from './Item.module.scss'
import { Flex, Box, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Item from '../../../../../../components/item/Item'

import Header from '../../../../../../components/layout/header/Header'
import Sidebar from '../../../../../../components/layout/sidebar/Sidebar'

export default function Pedido() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)
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
    }

    fetchProduct()
  }, [itemId])

  /**
   * --------
   * Add item
   * --------
   */
  const addItem = () => {}

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
        <Item
          id={product?.id}
          name={product?.name}
          description={product?.description}
          imagePath={product?.image}
          imageAlt={product?.imageAlt}
          price={product?.price}
          promoPrice={product?.pricePromo}
          toggleOption={true}
          checkOption={true}
        />
      </main>
      <footer className={styles.itemFooter}>
        <div>
          <div onClick={() => router.back()}>Voltar</div>
        </div>
        <div>
          <div onClick={() => addItem(product)}>Adicionar</div>
        </div>
      </footer>
    </div>
  )
}
