import styles from './Item.module.scss'
import Item from '../../../../../components/item/Item'
import Header from '../../../../../components/layout/header/Header'
import Sidebar from '../../../../../components/layout/sidebar/Sidebar'
import * as EstabelecimentoService from '../../../../../services/estabelecimento/EstabelecimentoService'

import { Flex, Box, Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import { PedidoContext } from '../../../../../context/PedidoContext'

export default function Product() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)
  const [product, setProduct] = useState(undefined)

  // const [pedido, setPedido] = useContext(PedidoContext)

  const router = useRouter()

  const { uri } = router.query
  const { productUri } = router.query

  useEffect(() => {
    const fetchEstabelecimento = async () => {
      const response = await EstabelecimentoService.findByURI(uri)
      console.log('reponse', response)
      if (response) {
        setProduct(
          response.estabelecimento.produtos.find(
            p => p.uri == `/${uri}/menu/${productUri}`
          )
        )
      }
    }
    fetchEstabelecimento()
  }, [])

  /**
   * --------
   * Add item
   * --------
   */
  const addItem = product => {
    console.log('size', product.size)
    console.log('ingredientes', product.ingredientes)
    console.log('product', product)
  }

  /**
   *
   * Produto não encontrado
   *
   */
  const ProductNotFound = () => {
    return (
      <Flex
        direction={'column'}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image height={100} src={'/img/black-magnifier.svg'} />
        <Text
          fontSize={'1.2rem'}
          textAlign={'center'}
          color={'#1F1E1E'}
          fontWeight={'bold'}
        >
          Produto não encontrado
        </Text>
        <Box
          m={5}
          py={2}
          px={5}
          onClick={() => router.back()}
          backgroundColor={'#FFCC00'}
          borderRadius={'4px'}
        >
          <Text fontWeight={'bold'} color={'#222'}>
            Voltar
          </Text>
        </Box>
      </Flex>
    )
  }

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
            <Image
              src={'/img/logo-label.svg'}
              alt={'FoodsFa'}
              onClick={() => router.push(`/estabelecimento/${uri}/menu`)}
            />
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
        {product ? (
          <Item
            id={product?.id}
            name={product?.name}
            description={product?.description}
            imagePath={product?.image}
            imageAlt={product?.imageAlt}
            price={product?.price}
            promoPrice={product?.pricePromo}
            toggleOption={true}
            ingredientes={product?.ingredientes}
            size={product?.size}
          />
        ) : (
          <ProductNotFound />
        )}
      </main>
      {product && (
        <footer className={styles.itemFooter}>
          <div>
            <div onClick={() => router.back()}>Voltar</div>
          </div>
          <div>
            <div onClick={() => addItem(product)}>Adicionar</div>
          </div>
        </footer>
      )}
    </div>
  )
}
