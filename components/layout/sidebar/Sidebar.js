import {
  Flex,
  Box,
  Button,
  Image,
  Text,
  Circle,
  List,
  ListItem
} from '@chakra-ui/react'
export default function Sidebar({ close }) {
  return (
    <Flex direction={'column'}>
      <Flex p={5}>
        <Circle width={50} height={50} backgroundColor={'#222'} color={'#fff'}>
          C
        </Circle>
        <Box px={5}>
          <Text>Seja bem vindo,</Text>
          <Text fontWeight={'bold'}>CassioMarquinhos101 </Text>
        </Box>
      </Flex>
      <Flex
        ml={5}
        p={5}
        pl={0}
        backgroundColor={'#373435'}
        color={'#FFCC00'}
        borderRadius={'15px 0 0 15px'}
      >
        <List>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                p={2}
                borderRadius={'0 15px 15px 0'}
              >
                icone
              </Box>
              <Text ml={2}>Notificações</Text>
            </Flex>
          </ListItem>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                py={2}
                px={4}
                borderRadius={'0 15px 15px 0'}
              >
                <Image src={'/img/bag-icon.svg'} alt={'Meu Carrinho'} />
              </Box>
              <Text ml={2}>Meu Carrinho</Text>
            </Flex>
          </ListItem>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                py={2}
                px={4}
                borderRadius={'0 15px 15px 0'}
              >
                <Image
                  src={'/img/historico-icon.svg'}
                  alt={'Histórico de Ordens'}
                />
              </Box>
              <Text ml={2}>Histórico de Ordens</Text>
            </Flex>
          </ListItem>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                py={2}
                px={4}
                borderRadius={'0 15px 15px 0'}
              >
                <Image
                  src={'/img/page-icon.svg'}
                  alt={'Ativar Código Promocional'}
                />
              </Box>
              <Text ml={2}>Ativar Código Promocional</Text>
            </Flex>
          </ListItem>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                py={2}
                px={4}
                borderRadius={'0 15px 15px 0'}
              >
                <Image src={'/img/wallet-icon.svg'} alt={'Wallet'} />
              </Box>
              <Text ml={2}>Wallet</Text>
            </Flex>
          </ListItem>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                py={2}
                px={4}
                borderRadius={'0 15px 15px 0'}
              >
                <Image src={'/img/star-icon.svg'} alt={'Favoritos'} />
              </Box>
              <Text ml={2}>Favoritos</Text>
            </Flex>
          </ListItem>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                py={2}
                px={4}
                borderRadius={'0 15px 15px 0'}
              >
                <Image src={'/img/cog-icon.svg'} alt={'Configurações'} />
              </Box>
              <Text ml={2}>Configurações</Text>
            </Flex>
          </ListItem>
          <ListItem py={3}>
            <Flex alignItems={'center'}>
              <Box
                color={'#373435'}
                backgroundColor={'#FFCC00'}
                py={2}
                px={4}
                borderRadius={'0 15px 15px 0'}
              >
                <Image src={'/img/signout-icon.svg'} alt={'Sair'} />
              </Box>
              <Text ml={2}>Sair</Text>
            </Flex>
          </ListItem>
        </List>
      </Flex>
      <Flex alignItems={'center'} justifyContent={'flex-end'} p={5}>
        <Button onClick={close} colorScheme={'blackAlpha'} size={'sm'}>
          close
        </Button>
      </Flex>
    </Flex>
  )
}
