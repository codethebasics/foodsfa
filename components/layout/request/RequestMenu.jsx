import styles from './RequestMenu.module.scss'

import { Flex, Box, Text, Image, List, ListItem } from '@chakra-ui/react'

import requests from './requests.json'

export default function RequestMenu() {
  return (
    <Flex
      className={styles.wrapper}
      direction={'column'}
      backgroundColor={'#FFCC00'}
      color={'#222'}
      height={'100%'}
    >
      <header>
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          lineHeight={'1.5rem'}
          p={5}
        >
          <Box textAlign={'right'} width={'100%'}>
            <Text>CassioMarquinhos101</Text>
            <Text fontSize={'1.8rem'} fontWeight={'bold'}>
              Seus Pedidos
            </Text>
          </Box>
          <Box ml={5}>
            <Image src={'/img/bag.svg'} alt={'comanda'} />
          </Box>
        </Flex>
      </header>
      <main>
        <Flex ml={5}>
          <List width={'100%'}>
            {requests.map(request => (
              <ListItem
                width={'100%'}
                borderRadius={'30px 0 0 30px'}
                mt={1}
                className={request.selected && styles.selected}
              >
                <Flex alignItems={'center'}>
                  <Box color={'#373435'} p={2} borderRadius={'0 15px 15px 0'}>
                    <Image
                      src={
                        request.requestUser.length > 1
                          ? '/img/user-group.svg'
                          : '/img/user.svg'
                      }
                      alt={'Meu Carrinho'}
                    />
                  </Box>
                  <Flex
                    width={'100%'}
                    ml={2}
                    alignItems={'flex-end'}
                    justifyContent={'space-between'}
                  >
                    <Flex direction={'column'}>
                      <Text fontSize={'0.8rem'}>Pedido em</Text>
                      <Text fontWeight={'bold'}>{request.storeName}</Text>
                    </Flex>
                    <Flex px={5}>
                      <Text>R$ {request.requestTotal.toFixed(2)}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Flex>
      </main>
      <footer>
        <Flex justifyContent={'space-between'} alignItems={'center'} p={5}>
          <Text>Total R$:</Text>
          <Text fontSize={'1.5rem'} fontWeight={'bold'}>
            {requests
              .map(request => request.requestTotal)
              .reduce((current, total) => current + total)
              .toFixed(2)}
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'}>
          <Flex
            width={'100%'}
            backgroundColor={'#333333'}
            justifyContent={'center'}
            alignItems={'center'}
            px={5}
            py={2}
            color={'#FFCC00'}
            borderRadius={'20px 0 0 20px'}
            cursor={'pointer'}
          >
            <Box>
              <Image src={'/img/triangle-left.svg'} alt={''} />
            </Box>
            <Box px={5}>Voltar</Box>
          </Flex>
          <Flex
            width={'100%'}
            backgroundColor={'#58A91C'}
            justifyContent={'center'}
            alignItems={'center'}
            px={5}
            py={2}
            color={'#FFFFFF'}
            borderRadius={'0 20px 20px 0'}
            cursor={'pointer'}
          >
            <Box px={5}>Novo</Box>
            <Box>
              <Image src={'/img/triangle-right.svg'} alt={''} />
            </Box>
          </Flex>
        </Flex>
      </footer>
    </Flex>
  )
}
