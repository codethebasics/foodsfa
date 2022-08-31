import { Button, Flex, Text } from '@chakra-ui/react'
import styles from './Header.module.scss'

export default function Header({
  openSidebar,
  backgroundColor,
  color,
  children
}) {
  return (
    <Flex
      p={3}
      borderRadius={'4px'}
      justifyContent={'space-between'}
      alignItems={'center'}
      backgroundColor={backgroundColor}
      color={color}
    >
      <Flex>
        <Text>Header component</Text>
      </Flex>
      <Flex>
        <button className={styles.cHeader__cta} onClick={openSidebar}>
          Open
        </button>
      </Flex>
    </Flex>
  )
}
