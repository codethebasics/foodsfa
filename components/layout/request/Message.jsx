import { Flex, Box, Text } from '@chakra-ui/react'
import styles from './Chat.module.scss'

export default function Message({
  children,
  pedido,
  total,
  idPedido,
  estabelecimento,
  borderRadius,
  backgroundColor,
  color,
  p,
  m
}) {
  return (
    <Flex
      className={styles.message}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
      p={p}
      margin={m}
    >
      <Box>
        {pedido && (
          <Flex className={styles.header}>
            <Text fontWeight={'bold'} fontSize={'1.2rem'}>
              {pedido}
            </Text>
            <Text fontWeight={'bold'} fontSize={'1.2rem'}>
              R$ {total}
            </Text>
          </Flex>
        )}
        <Flex className={styles.body}>{children}</Flex>
        {idPedido && (
          <Flex className={styles.footer}>
            <Text>Pedido: #{idPedido}</Text>
            <Text fontWeight={'bold'}>{estabelecimento}</Text>
          </Flex>
        )}
      </Box>
    </Flex>
  )
}
