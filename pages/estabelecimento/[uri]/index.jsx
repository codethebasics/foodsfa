import Header from '../../../components/layout/header/Header'
import Footer from '../../../components/layout/footer/Footer'
import Calendar from '../../../components/calendar/Calendar'
import Sidebar from '../../../components/layout/sidebar/Sidebar'
import styles from './Spot.module.scss'

import { useRouter } from 'next/router'
import { Flex, Box, Image, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
// import { PedidoContext } from '../../../context/PedidoContext'

import * as EstabelecimentoService from '../../../services/estabelecimento/EstabelecimentoService'

export default function Spot() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)
  const [estabelecimento, setEstabelecimento] = useState(null)
  // const [pedido, setPedido] = useContext(PedidoContext)

  const router = useRouter()
  const { uri } = router.query

  useEffect(() => {
    const fetchEstabelecimento = async () => {
      const response = await EstabelecimentoService.findByURI(uri)
      if (response) {
        setEstabelecimento(response.estabelecimento)
      }
    }
    fetchEstabelecimento()
  }, [])

  const EstabelecimentoNotFound = () => {
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
          Estabelecimento não encontrado
        </Text>
      </Flex>
    )
  }

  const EstabelecimentoInfo = () => {
    return (
      <Flex
        direction={'column'}
        justifyContent={'space-between'}
        height={'100%'}
      >
        <Flex direction={'column'} py={5}>
          <Image
            src={'/img/restaurant.png'}
            height={200}
            width={400}
            alt={'restaurante'}
            className={styles.spotBanner}
          />
          <Text pt={5} pl={5} fontSize={'1.4rem'}>
            {estabelecimento?.nome}
          </Text>
          <Flex direction={'column'} px={5} py={0}>
            <Flex direction={'column'} mb={5}>
              <Text color={'#FFCC00'} mt={5}>
                {estabelecimento?.bairroCidade}
              </Text>
              <Text fontSize={'0.8rem'}>{estabelecimento?.logradouro}</Text>
            </Flex>
            <Text my={5} color={'#FFCC00'}>
              Horários de Funcionamento:
            </Text>
            <Calendar
              horariosFuncionamento={estabelecimento?.horariosFuncionamento}
            />
          </Flex>
        </Flex>
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
              onClick={() => router.push('/estabelecimento')}
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
        {estabelecimento ? (
          <EstabelecimentoInfo />
        ) : (
          <EstabelecimentoNotFound />
        )}
      </main>
      <Footer
        backgroundColor={'#FFCC00'}
        justifyContent={'space-between'}
        borderRadius={'50px'}
      >
        <Flex
          justifyContent={'space-between'}
          width={'100%'}
          p={1}
          onClick={() =>
            router.push(
              `${process.env.NEXT_PUBLIC_APP_URL}/estabelecimento${estabelecimento.uri}/menu`
            )
          }
        >
          <Text
            color={'#222'}
            fontSize={'1rem'}
            fontWeight={'bold'}
            textTransform={'uppercase'}
            margin={'auto'}
          >
            Iniciar Pedido
          </Text>
          <Image
            cursor={'pointer'}
            src={'/img/bag.svg'}
            alt={'bag'}
            width={10}
            pr={2}
            justifySelf={'flex-end'}
          />
        </Flex>
      </Footer>
    </div>
  )
}
