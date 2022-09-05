import { Flex, Box, Image, Text } from '@chakra-ui/react'
import styles from './Message.module.scss'

import Message from './Message'
import chat from './messages.json'

export default function RequestData() {
  const backgroundColor = type => {
    switch (type) {
      case 'success':
        return '#58A926'
      case 'warning':
        return '#FFFF00'
      default:
        return '#FFFFFF'
    }
  }

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
              Sua Comanda
            </Text>
          </Box>
          <Box ml={5}>
            <Image src={'/img/bag.svg'} alt={'comanda'} />
          </Box>
        </Flex>
      </header>
      <main>
        <Flex direction={'column'} background={'#333333'} p={4}>
          {chat.messages.map(message => (
            <Message
              key={message.id}
              pedido={
                message.header &&
                `${message.header.quantity} ${message.header.product}`
              }
              total={message.header && message.header.price.toFixed(2)}
              idPedido={message.footer && message.footer.idRequest}
              estabelecimento={message.footer && message.footer.spotName}
              type={message.type}
              borderRadius={'20px 0 20px 20px'}
              backgroundColor={backgroundColor(message.type)}
              color={message.type === 'success' ? '#FFF' : '#000'}
              p={3}
              m={'15px 0'}
            >
              {message.isStatus && <Text>status:&nbsp;</Text>}
              <Text>{message.body.text}</Text>
            </Message>
          ))}
        </Flex>
      </main>
      <footer>
        <Flex justifyContent={'space-between'} alignItems={'center'} p={5}>
          <Text>Total R$:</Text>
          <Text fontSize={'1.5rem'} fontWeight={'bold'}>
            189,00
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
            backgroundColor={'#D61C4E'}
            justifyContent={'center'}
            alignItems={'center'}
            px={5}
            py={2}
            color={'#FFFFFF'}
            borderRadius={'0 20px 20px 0'}
            cursor={'pointer'}
          >
            <Box px={5}>Encerrar</Box>
            <Box>
              <Image src={'/img/triangle-right.svg'} alt={''} />
            </Box>
          </Flex>
        </Flex>
      </footer>
    </Flex>
  )
}
