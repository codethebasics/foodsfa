import styles from './Item.module.scss'

import { useState } from 'react'
import { Flex, Box, Image, Text, Checkbox } from '@chakra-ui/react'

import { Size, Toggle } from '../controls'

export default function Item({
  name,
  description,
  imagePath,
  imageAlt,
  price,
  promoPrice,
  toggleOption,
  checkOption
}) {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
  }

  return (
    <Flex direction={'column'}>
      <Flex
        background={'#fff'}
        color={'#222'}
        direction={'column'}
        borderRadius={'0 0 25px 25px'}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          width={'100%'}
          borderRadius={'0 0 25% 25%'}
          boxShadow={'0 10px 0 #FFCC00'}
        />
        <Flex
          mt={5}
          p={5}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text fontSize={'1.3rem'} fontWeight={'bold'}>
            {name}
          </Text>
          <Box className={styles.counter}>
            <div onClick={decrement}>
              <Image src={'/img/minus-icon.svg'} alt={'-'} />
            </div>
            <div>{quantity}</div>
            <div onClick={increment}>
              <Image src={'/img/plus-icon.svg'} alt={'+'} />
            </div>
          </Box>
        </Flex>
        <Flex px={5}>
          <Text>{description}</Text>
        </Flex>
        <Flex p={5} justifyContent={'flex-end'} alignItems={'center'}>
          <Text mx={5} textDecoration={'line-through'} fontSize={'0.9rem'}>
            R${(price * quantity).toFixed(2)}
          </Text>
          <Text fontSize={'1.3rem'} fontWeight={'bold'}>
            R${(promoPrice * quantity).toFixed(2)}
          </Text>
        </Flex>
      </Flex>
      <Text p={5}>Personalize seu pedido</Text>
      <Size />
      <div className={styles.separator} />
      {toggleOption && <Toggle />}
      <div className={styles.separator} />
      {checkOption && (
        <>
          <Flex p={5} justifyContent={'space-between'}>
            <Text>{'Cebola'}</Text>
            <Checkbox colorScheme={'dark'} size={'lg'} />
          </Flex>
          <Flex p={5} justifyContent={'space-between'}>
            <Text>{'Alface'}</Text>
            <Checkbox colorScheme={'dark'} size={'lg'} />
          </Flex>
          <Flex p={5} justifyContent={'space-between'}>
            <Text>{'Tomate'}</Text>
            <Checkbox colorScheme={'dark'} size={'lg'} />
          </Flex>
        </>
      )}
    </Flex>
  )
}
