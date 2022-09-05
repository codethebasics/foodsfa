import { Flex } from '@chakra-ui/react'
import RequestData from '../components/layout/request/RequestData'

export default function Home() {
  return (
    <Flex direction={'column'}>
      <RequestData />
    </Flex>
  )
}
