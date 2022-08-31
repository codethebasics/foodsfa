import { Flex } from '@chakra-ui/react'

export default function Footer({
  backgroundColor,
  borderRadius,
  justifyContent,
  children
}) {
  return (
    <Flex
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
    >
      {children}
    </Flex>
  )
}
