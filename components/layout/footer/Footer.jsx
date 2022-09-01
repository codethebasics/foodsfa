import { Flex } from '@chakra-ui/react'

export default function Footer({
  color,
  backgroundColor,
  borderRadius,
  justifyContent,
  children
}) {
  return (
    <Flex
      py={2}
      px={5}
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
    >
      {children}
    </Flex>
  )
}
