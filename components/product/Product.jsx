import { Flex, Box, Image, Text } from '@chakra-ui/react'

export default function Product({
  imageSrc,
  imageAlt,
  name,
  description,
  price,
  pricePromo
}) {
  return (
    <Flex
      lineHeight={'1rem'}
      color={'#222'}
      backgroundColor={'#fff'}
      borderRadius={'15px'}
      my={2}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={150}
        borderRadius={'15px 0 0 15px'}
      />
      <Flex direction={'column'} width={'100%'}>
        <Box pt={2} px={4}>
          <Text fontWeight={'bold'} fontSize={'1rem'}>
            {name}
          </Text>
        </Box>
        <Box pb={2} px={4}>
          <Text fontSize={'0.9rem'} color={'#555'}>
            {description}
          </Text>
        </Box>
        <Flex
          py={2}
          px={4}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Text textDecoration={'line-through'} fontSize={'0.8rem'}>
            R${price.toFixed(2)}
          </Text>
          <Text fontSize={'1.2rem'} fontWeight={'bold'}>
            R${pricePromo.toFixed(2)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
