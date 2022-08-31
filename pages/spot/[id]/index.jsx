import Header from '../../../components/layout/header/Header'
import Footer from '../../../components/layout/footer/Footer'

// import { useState } from 'react'
// import { useRouter } from 'next/router'
import { Flex, Image, Text } from '@chakra-ui/react'

export default function Spot() {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Header
        openSidebar={() => setShowSidebarMenu(true)}
        justifyContent={'center'}
        p={2}
      >
        <Image src="/img/logo-label.svg" alt={'FoodsFa'} />
      </Header>
      <Flex direction={'column'}>
        <Image
          src={'/img/restaurant.png'}
          height={400}
          width={400}
          alt={'restaurante'}
        />
        <Flex direction={'column'} p={5}>
          <Text color={'#FFCC00'}>Rua Otto Rosenberg, 381.</Text>
          <Text fontSize={'0.8rem'}>Vila Paulista, Curitiba.</Text>
        </Flex>
        <Flex direction={'column'} px={5}>
          <Text color={'#FFCC00'}>Horários de Funcionamento:</Text>
          <table className={'calendar'}>
            <tbody>
              <tr>
                <td>
                  <div className={'badgeOn'} />
                </td>
                <td>
                  <div className={'badgeOff'} />
                </td>
                <td>
                  <div className={'badgeOff'} />
                </td>
                <td>
                  <div className={'badgeOn'} />
                </td>
                <td>
                  <div className={'badgeOn'} />
                </td>
                <td>
                  <div className={'badgeOn'} />
                </td>
                <td>
                  <div className={'badgeOn'} />
                </td>
              </tr>
              <tr>
                <td>DOM</td>
                <td>SEG</td>
                <td>TER</td>
                <td>QUA</td>
                <td>QUI</td>
                <td>SEX</td>
                <td>SAB</td>
              </tr>
              <tr>
                <td>19h</td>
                <td></td>
                <td></td>
                <td>19h</td>
                <td>19h</td>
                <td>19h</td>
                <td>19h</td>
              </tr>
              <tr>
                <td>00</td>
                <td></td>
                <td></td>
                <td>22h</td>
                <td>22h</td>
                <td>22h</td>
                <td>00h</td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>
      <Footer
        backgroundColor={'#FFCC00'}
        justifyContent={'space-between'}
        borderRadius={'30px 30px 0 0'}
      >
        <Flex justifyContent={'space-between'} width={'100%'} px={4} py={2}>
          <Text color={'#000'} fontSize={'1.5rem'} fontWeight={'bold'}>
            Iniciar Pedido...
          </Text>
          <Image
            src={'/img/bag.svg'}
            alt={'bag'}
            width={10}
            pr={2}
            justifySelf={'flex-end'}
          />
        </Flex>
      </Footer>
    </>
  )
}
