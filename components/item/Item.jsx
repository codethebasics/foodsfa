import styles from './Item.module.scss'

import { useState } from 'react'
import { Flex, Box, Image, Text } from '@chakra-ui/react'

import { Size, Toggle } from '../controls'

export default function Item({
  name,
  description,
  imagePath,
  imageAlt,
  price,
  promoPrice,
  toggleOption
}) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('P')
  const [selectedOptions, setSelectedOptions] = useState([
    {
      id: 1,
      label: 'Picles',
      description: 'Picles com parmesão',
      status: true
    },
    {
      id: 2,
      label: 'Alface',
      description: '2 folhas de alface',
      status: true
    },
    {
      id: 3,
      label: 'Tomate',
      description: '2 fatias de tomate',
      status: true
    }
  ])

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
  }

  const updateOptions = selectedOption => {
    const options = selectedOptions.slice(0)
    options.forEach(option => {
      if (option.id == selectedOption.id) {
        option.status = selectedOption.status
      }
    })
    setSelectedOptions(options)
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
          borderRadius={'0 0 15% 15%'}
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
      <Size onSelect={setSelectedSize} />
      <div className={styles.separator} />
      {toggleOption &&
        selectedOptions.map(option => (
          <Toggle
            key={option.id}
            id={option.id}
            status={option.status}
            label={option.label}
            description={option.description}
            storeOption={updateOptions}
          />
        ))}
      <div>price: R${(promoPrice * quantity).toFixed(2)}</div>
      <div>SelectedSize: {selectedSize}</div>
      <div>SelectedOptions: {JSON.stringify(selectedOptions)}</div>
    </Flex>
  )
}
