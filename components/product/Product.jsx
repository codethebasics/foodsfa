import { Flex, Box, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Product({
  productUri,
  imageSrc,
  imageAlt,
  name,
  description,
  price,
  pricePromo
}) {
  const router = useRouter()

  const productDetail = () => {
    router.push(`/estabelecimento${productUri}`)
  }

  return (
    <Flex
      lineHeight={'1rem'}
      color={'#222'}
      backgroundColor={'#fff'}
      borderRadius={'15px'}
      my={2}
      onClick={productDetail}
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
        <Box pb={2} px={4} height={50}>
          <Text fontSize={'0.9rem'} color={'#555'}>
            {description.slice(0, 50) + '...'}
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
            {pricePromo < price && `R$${price.toFixed(2)}`}
          </Text>
          <Text fontSize={'1.2rem'} fontWeight={'bold'}>
            R${pricePromo.toFixed(2)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
