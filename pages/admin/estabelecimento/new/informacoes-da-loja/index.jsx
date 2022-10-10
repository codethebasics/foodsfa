import {
  Flex,
  Text,
  Textarea,
  Input,
  Link,
  Image,
  FormControl,
  FormLabel,
  Button,
  Badge
} from '@chakra-ui/react'
import { useState } from 'react'
import styles from '../../../../../styles/admin/estabelecimento/new/informacoesDaLoja.module.scss'

export default function InformacoesDaLoja() {
  const [estabelecimento, setEstabelecimento] = useState(null)
  const [categorias] = useState([
    {
      id: 1,
      nome: 'Pizzaria'
    },
    {
      id: 2,
      nome: 'Açaiteria'
    },
    {
      id: 3,
      nome: 'Japonesa'
    },
    {
      id: 4,
      nome: 'Hamburgueria'
    },
    {
      id: 5,
      nome: 'Carnes'
    },
    {
      id: 6,
      nome: 'Alemã'
    },
    {
      id: 7,
      nome: 'Árabe'
    },
    {
      id: 8,
      nome: 'Bedidas'
    }
  ])

  const [telefones, setTelefones] = useState([
    {
      id: 1,
      numero: ''
    }
  ])

  /**
   * ----------------------------------
   * Remove campo de telefone adicional
   * ----------------------------------
   */
  const removerCampoTelefone = () => {
    if (telefones.length > 1) {
      const newArray = telefones.slice(0, telefones.length - 1)
      setTelefones(newArray)
    }
  }

  /**
   * ----------------------------------
   * Insere campo de telefone adicional
   * ----------------------------------
   */
  const adicionarCampoTelefone = () => {
    if (telefones.length <= 2) {
      const length = telefones.length + 1
      const telefonesCopy = [...telefones]
      telefonesCopy.push({ id: length, numero: '' })
      setTelefones(telefonesCopy)
    }
  }

  /**
   * --------------------------------------------
   * Informa a quantidade de caracteres restantes
   * no campos de descrição do restaurante
   * --------------------------------------------
   */
  // const getCountCaracteresLeft = () => {}

  /**
   * -----------------------------------
   * Salva alterações do estabelecimento
   * -----------------------------------
   */
  // const salvarAlteracoes = () => {}

  return (
    <div className={styles.wrapper}>
      <main>
        <Flex m={5} direction={'column'}>
          <Text fontSize={'1.2rem'} color={'#d6e1e7'}>
            Informações do estabelecimento
          </Text>
          <Link color={'#9aa4a8'}>
            <Flex alignItems={'center'} my={2}>
              <Image
                src={'/img/orange-v-left.svg'}
                height={5}
                mr={2}
                alt={'voltar'}
              />
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
            Informações gerais
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
              placeholder={'Nome do seu estabelecimento'}
              name={'nome'}
              value={estabelecimento?.nome || ''}
              onChange={e =>
                setEstabelecimento({ ...estabelecimento, nome: e.target.value })
              }
            />
          </FormControl>
          <FormControl my={2}>
            <FormLabel color={'#747578'} fontSize={'0.8rem'}>
              E-mail do estabelecimento
            </FormLabel>
            <Input
              size={'sm'}
              type="text"
              borderRadius={'4px'}
              borderColor={'#525457 !important'}
              focusBorderColor={'#da5220'}
              placeholder={'estabelecimento@email.com'}
              name={'email'}
              value={estabelecimento?.email || ''}
              onChange={e =>
                setEstabelecimento({
                  ...estabelecimento,
                  email: e.target.value
                })
              }
            />
          </FormControl>
          <FormControl my={2}>
            <FormLabel color={'#747578'} fontSize={'0.8rem'}>
              Telefones
            </FormLabel>
            <Flex direction={'column'}>
              {telefones.map(telefone => (
                <Input
                  key={telefone.id}
                  size={'sm'}
                  type="text"
                  borderRadius={'4px'}
                  borderColor={'#525457 !important'}
                  focusBorderColor={'#da5220'}
                  placeholder={'(00) 00000-0000 '}
                  name={'telefone'}
                  mb={2}
                />
              ))}
              <Flex justifyContent={'flex-end'}>
                {telefones.length > 1 && (
                  <Button
                    size={'xs'}
                    colorScheme={'red'}
                    borderRadius={'4px'}
                    alignSelf={'flex-end'}
                    onClick={removerCampoTelefone}
                    mr={2}
                  >
                    Remover
                  </Button>
                )}
                <Button
                  size={'xs'}
                  colorScheme={'blackAlpha'}
                  borderRadius={'4px'}
                  onClick={adicionarCampoTelefone}
                >
                  Adicionar telefone
                </Button>
              </Flex>
            </Flex>
          </FormControl>
          <FormControl my={2}>
            <Flex direction={'column'}>
              <FormLabel color={'#747578'} fontSize={'0.8rem'}>
                Descrição do seu estabelecimento
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
                name={'descricao'}
                value={estabelecimento?.descricao || ''}
                onChange={e =>
                  setEstabelecimento({
                    ...estabelecimento,
                    descricao: e.target.value
                  })
                }
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
          <Flex>
            <Text fontWeight={'bold'} fontSize={'0.9rem'} color={'#9aa4a8'}>
              Categorias
            </Text>
          </Flex>
          <Flex my={5} wrap={'wrap'}>
            {categorias.map(categoria => (
              <Text fontSize={'xl'} key={categoria.id}>
                <Badge
                  variant="solid"
                  colorScheme="blackAlpha"
                  textTransform={'capitalize'}
                  fontWeight={'normal'}
                  fontSize={'0.9rem'}
                  m={1}
                >
                  {categoria?.nome}
                </Badge>
              </Text>
            ))}
          </Flex>
          <Flex>
            <Button
              colorScheme={'dark'}
              border={'2px dashed #62696b'}
              width={'100%'}
            >
              <Flex alignItems={'center'} justifyContent={'center'}>
                <Image
                  src={'/img/gray-plus.svg'}
                  height={5}
                  mr={2}
                  alt={'adicionar'}
                />
                <Text color={'#9aa4a8'} fontSize={'0.9rem'}>
                  Adicionar categoria
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>

        <Flex justifyContent={'flex-end'} mx={5}>
          <Button
            colorScheme={'orange'}
            borderRadius={'4px'}
            alignSelf={'flex-end'}
          >
            <Image src={'/img/floppy.svg'} height={5} mr={3} alt={'salvar'} />
            <Text>Salvar</Text>
          </Button>
        </Flex>
        <Text>{JSON.stringify(telefones)}</Text>
      </main>
    </div>
  )
}
