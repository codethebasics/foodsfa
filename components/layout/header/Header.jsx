import { Flex } from '@chakra-ui/react'

export default function Header({
  backgroundColor,
  borderRadius,
  justifyContent,
  p,
  color,
  children
}) {
  return (
    <Flex
      borderRadius={borderRadius}
      justifyContent={justifyContent}
      alignItems={'center'}
      backgroundColor={backgroundColor}
      color={color}
      p={p}
    >
      {children}
      {/* <Flex>
        <Text>Header component</Text>
      </Flex>
      <Flex>
        <button className={styles.cHeader__cta} onClick={openSidebar}>
          Open
        </button>
      </Flex> */}
    </Flex>
  )
}
