import styles from './Header.module.scss'

import { Flex } from '@chakra-ui/react'

export default function Header({
  backgroundColor,
  position,
  borderRadius,
  justifyContent,
  p,
  color,
  children
}) {
  return (
    <Flex
      className={styles.cHeader}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
      alignItems={'center'}
      backgroundColor={backgroundColor}
      color={color}
      p={p}
      position={position}
    >
      {children}
    </Flex>
  )
}
