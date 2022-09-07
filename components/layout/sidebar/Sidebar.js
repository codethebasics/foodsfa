import {
  Flex,
  Box,
  Image,
  Text,
  Circle,
  List,
  ListItem
} from '@chakra-ui/react'

import styles from './Sidebar.module.scss'

const menuItems = [
  {
    id: 1,
    icon: '/img/bell.svg',
    label: 'Notificações'
  },
  {
    id: 2,
    icon: '/img/bag-icon.svg',
    label: 'Meu Carrinho'
  },
  {
    id: 3,
    icon: '/img/clockback-icon.svg',
    label: 'Histórico de Ordens'
  },
  {
    id: 4,
    icon: '/img/page-icon.svg',
    label: 'Ativar Código Promocional'
  },
  {
    id: 5,
    icon: '/img/wallet-icon.svg',
    label: 'Wallet'
  },
  {
    id: 6,
    icon: '/img/star-icon.svg',
    label: 'Favoritos'
  },
  {
    id: 7,
    icon: '/img/cog-icon.svg',
    label: 'Configurações'
  },
  {
    id: 8,
    icon: '/img/signout-icon.svg',
    label: 'Sair'
  }
]

export default function Sidebar({ close }) {
  return (
    <div className={styles.wrapper}>
      <Flex p={5}>
        <Circle width={50} height={50} backgroundColor={'#222'} color={'#fff'}>
          C
        </Circle>
        <Box px={5}>
          <Text>Seja bem vindo,</Text>
          <Text fontWeight={'bold'}>CassioMarquinhos101 </Text>
        </Box>
      </Flex>
      <main>
        <Flex
          ml={5}
          p={5}
          pl={0}
          backgroundColor={'#373435'}
          color={'#FFCC00'}
          borderRadius={'15px 0 0 15px'}
        >
          <List>
            {menuItems.map(item => (
              <ListItem py={2}>
                <Flex alignItems={'center'}>
                  <Box
                    color={'#373435'}
                    backgroundColor={'#FFCC00'}
                    p={2}
                    borderRadius={'0 15px 15px 0'}
                  >
                    <Image src={item.icon} alt={item.label} width={25} />
                  </Box>
                  <Text ml={2}>{item.label}</Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Flex>
      </main>
      <Flex alignItems={'center'} justifyContent={'flex-end'} p={2}>
        <button onClick={close}>close</button>
      </Flex>
    </div>
  )
}
