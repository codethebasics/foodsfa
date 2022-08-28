import { Button, Flex, Text } from '@chakra-ui/react'

export default function Header({ openSidebar }) {
  return (
    <Flex
      p={3}
      backgroundColor={'#222'}
      color={'#fff'}
      borderRadius={'4px'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Flex>
        <Text>Header component</Text>
      </Flex>
      <Flex>
        <Button
          size={'sm'}
          onClick={openSidebar}
          colorScheme={'purple'}
          borderRadius={'4px'}
        >
          Open
        </Button>
      </Flex>
    </Flex>
  )
}
