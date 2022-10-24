import styles from './Item.module.scss'

import { useEffect, useState } from 'react'
import { Flex, Box, Image, Text } from '@chakra-ui/react'

import { Size, Toggle } from '../controls'

export default function Item({
  name,
  description,
  imagePath,
  imageAlt,
  price,
  promoPrice,
  toggleOption,
  ingredientes,
  size
}) {
  const [quantity, setQuantity] = useState(1)
  const [, setSelectedSize] = useState('P')
  const [selectedOptions, setSelectedOptions] = useState(ingredientes)

  useEffect(() => {
    console.log(ingredientes)
  }, [])

  /**
   *
   * Incrementa quantidade do produto
   *
   */
  const increment = () => {
    setQuantity(quantity + 1)
  }

  /**
   *
   * Decrementa quantidade do produto
   *
   */
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

  /**
   *
   * Renderiza card contendo informações principais do produto
   *
   * @param { string } name - Nome do produto
   * @param { string } description - Descrição do produto
   * @param { number } price - Preço do produto
   * @param { number } promoPrice - Preço promocional do produto
   */
  const ProductCard = ({ name, description, price, promoPrice }) => {
    return (
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
          {promoPrice < price && (
            <Text mx={5} textDecoration={'line-through'} fontSize={'0.9rem'}>
              R${(price * quantity).toFixed(2)}
            </Text>
          )}
          <Text fontSize={'1.3rem'} fontWeight={'bold'}>
            R${(promoPrice * quantity).toFixed(2)}
          </Text>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex direction={'column'}>
      <ProductCard
        name={name}
        description={description}
        price={price}
        promoPrice={promoPrice}
      />
      <Text p={5} fontSize={'1.2rem'}>
        Personalize seu pedido
      </Text>
      <Size onSelect={setSelectedSize} size={size} itemPrice={price} />
      <div className={styles.separator} />
      {toggleOption &&
        selectedOptions.map(option => (
          <Toggle
            key={option.id}
            id={option.id}
            status={option.status}
            label={option.nome}
            description={option.description}
            storeOption={updateOptions}
            disabled={option.mandatory}
          />
        ))}
    </Flex>
  )
}
