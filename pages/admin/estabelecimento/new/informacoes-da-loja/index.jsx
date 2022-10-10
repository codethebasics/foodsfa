import {
  Flex,
  Text,
  Textarea,
  Input,
  Link,
  Image,
  FormControl,
  FormLabel,
  Button
} from '@chakra-ui/react'
import styles from '../../../../../styles/admin/estabelecimento/new/informacoesDaLoja.module.scss'

export default function InformacoesDaLoja() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Flex m={5} direction={'column'}>
          <Text fontSize={'1.4rem'} color={'#d6e1e7'}>
            Informações da Loja
          </Text>
          <Link color={'#9aa4a8'}>
            <Flex alignItems={'center'} my={2}>
              <Image src={'/img/orange-v-left.svg'} height={5} mr={2} />
              <Text>Voltar</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex
          m={5}
          p={5}
          backgroundColor={'#3A3C40'}
          borderRadius={'5px'}
          direction={'column'}
        >
          <Text
            fontWeight={'bold'}
            fontSize={'0.9rem'}
            color={'#9aa4a8'}
            mb={2}
          >
            Infomações da loja
          </Text>
          <FormControl my={2}>
            <FormLabel color={'#747578'} fontSize={'0.8rem'}>
              Nome
            </FormLabel>
            <Input
              size={'sm'}
              type="text"
              borderRadius={'4px'}
              borderColor={'#525457 !important'}
              focusBorderColor={'#da5220'}
              placeholder={'Nome do seu restaurante'}
              name={'nome-restaurante'}
            />
          </FormControl>
          <FormControl my={2}>
            <FormLabel color={'#747578'} fontSize={'0.8rem'}>
              E-mail do seu restaurante
            </FormLabel>
            <Input
              size={'sm'}
              type="text"
              borderRadius={'4px'}
              borderColor={'#525457 !important'}
              focusBorderColor={'#da5220'}
              placeholder={'restaurante@email.com'}
              name={'nome-restaurante'}
            />
          </FormControl>
          <FormControl my={2}>
            <FormLabel color={'#747578'} fontSize={'0.8rem'}>
              Telefones
            </FormLabel>
            <Flex direction={'column'}>
              <Input
                size={'sm'}
                type="text"
                borderRadius={'4px'}
                borderColor={'#525457 !important'}
                focusBorderColor={'#da5220'}
                placeholder={'(00) 00000-0000 '}
                name={'telefone'}
                mb={2}
              />
              <Button
                size={'xs'}
                colorScheme={'orange'}
                borderRadius={'4px'}
                alignSelf={'flex-end'}
              >
                Adicionar
              </Button>
            </Flex>
          </FormControl>
          <FormControl my={2}>
            <Flex direction={'column'}>
              <FormLabel color={'#747578'} fontSize={'0.8rem'}>
                Descrição do seu restaurante
              </FormLabel>
              <Textarea
                resize={'none'}
                size={'sm'}
                type="text"
                borderRadius={'4px'}
                borderColor={'#525457 !important'}
                focusBorderColor={'#da5220'}
                placeholder={
                  'Aqui vai uma breve descrição do seu estabelecimento. Seja criativo!'
                }
                name={'nome-restaurante'}
              />
              <Text
                color={'#74767a'}
                fontSize={'0.7rem'}
                alignSelf={'flex-end'}
              >
                Faltam 300 caracteres
              </Text>
            </Flex>
          </FormControl>
        </Flex>
        <Flex
          m={5}
          p={5}
          backgroundColor={'#3A3C40'}
          borderRadius={'5px'}
          direction={'column'}
        >
          <Text
            fontWeight={'bold'}
            fontSize={'0.9rem'}
            color={'#9aa4a8'}
            mb={4}
          >
            Categorias da loja
          </Text>
          <Button colorScheme={'dark'} border={'2px dashed #62696b'}>
            <Flex alignItems={'center'} justifyContent={'center'}>
              <Image src={'/img/gray-plus.svg'} height={5} mr={2} />
              <Text color={'#9aa4a8'} fontSize={'0.9rem'}>
                Adicionar categoria
              </Text>
            </Flex>
          </Button>
        </Flex>
      </main>
    </div>
  )
}
