import products from './products.json'

import { Flex } from '@chakra-ui/react'
import Product from './Product'

export default function Products({ categoryId }) {
  return (
    <Flex
      height={'100%'}
      direction={'column'}
      overflow={'auto'}
      p={3}
      mb={3}
      borderRadius={'4px'}
    >
      {products
        .filter(product =>
          categoryId ? product.category.includes(categoryId) : product.category
        )
        .map(product => (
          <Product
            key={product.id}
            imageSrc={product.image}
            imageAlt={product.imageAlt}
            name={product.name}
            description={product.description}
            price={product.price}
            pricePromo={product.pricePromo}
          />
        ))}
    </Flex>
  )
}
