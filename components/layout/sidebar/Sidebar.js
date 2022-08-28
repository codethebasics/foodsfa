import { Flex, Button, List, ListItem } from '@chakra-ui/react'
export default function Sidebar({ close }) {
  return (
    <Flex direction={'column'}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Flex>Menu</Flex>
        <Button onClick={close} colorScheme={'light'} size={'sm'}>
          close
        </Button>
      </Flex>
      <Flex>
        <List py={5}>
          <ListItem p={2}>Link1</ListItem>
          <ListItem p={2}>Link2</ListItem>
          <ListItem p={2}>Link3</ListItem>
        </List>
      </Flex>
    </Flex>
  )
}
