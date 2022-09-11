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
      borderRadius={'20px'}
      my={2}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={150}
        borderRadius={'20px 0 0 20px'}
      />
      <Flex direction={'column'} width={'100%'}>
        <Box p={2}>
          <Text
            textTransform={'uppercase'}
            fontWeight={'bold'}
            fontSize={'1.2rem'}
          >
            {name}
          </Text>
        </Box>
        <Box p={2}>
          <Text fontSize={'0.9rem'}>{description}</Text>
        </Box>
        <Flex
          p={2}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Text textDecoration={'line-through'}>R${price.toFixed(2)}</Text>
          <Text fontSize={'1.2rem'} fontWeight={'bold'}>
            R${pricePromo.toFixed(2)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
