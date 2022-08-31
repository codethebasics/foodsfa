import { Flex, Image } from '@chakra-ui/react'

export default function TransitionScreen() {
  return (
    <>
      <Flex
        backgroundColor={'#1A1A1A'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'100%'}
      >
        <Image src="/img/logo.svg" alt={'FoodsFa'} width={196} height={130} />
      </Flex>
    </>
  )
}
