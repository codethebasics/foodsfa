import { Flex } from '@chakra-ui/react'

export default function Footer({
  backgroundColor,
  borderRadius,
  p,
  justifyContent,
  children
}) {
  return (
    <Flex
      p={p}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
    >
      {children}
    </Flex>
  )
}
