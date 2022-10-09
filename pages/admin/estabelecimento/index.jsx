import {
  Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Card from '../../../components/admin/account/Card'
import styles from '../../../styles/admin/estabelecimento/minhaConta.module.scss'

export default function Gerenciador() {
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser({
      usuario: 'bruno.carneiro312',
      url: '/massadmais',
      nome: 'Bruno Carneiro',
      email: 'bruno.carneiro312@gmail.com',
      celular: '61985770401',
      aniversario: '29/07/1987'
    })
  }, [])

  /**
   * ----------------------
   * Salva as configurações
   * ----------------------
   */
  const saveConfiguration = () => {
    setMessage('Cadastro atualizado')
    setMessageType('success')
    console.log('salvando usuário', user)
  }

  /**
   * ------------------
   * Renderiza mensagem
   * ------------------
   */
  const renderMessage = () => {
    return (
      message && (
        <div
          className={`${styles.message} ${
            messageType == 'success' ? styles.success : styles.error
          }`}
        >
          <div
            className={`${styles.icon} ${
              messageType == 'success' ? styles.success : styles.error
            }`}
          >
            <Image
              src={
                messageType == 'success'
                  ? '/img/white-check.svg'
                  : '/img/white-times.svg'
              }
              height={5}
            />
          </div>
          <div className={styles.text}>
            <div>{message}</div>
            <div className={styles.close} onClick={() => setMessage(undefined)}>
              Fechar
            </div>
          </div>
        </div>
      )
    )
  }

  return (
    <div className={styles.wrapper}>
      <Box p={5}>
        {renderMessage()}
        <header className={styles.header}>
          <div className={styles.pageTitle}>Minha conta</div>
          <div className={styles.cta}>Gerenciar usuários</div>
        </header>
      </Box>
      <main>
        <Box p={5}>
          <Card>
            <Flex direction={'column'} alignItems={'center'}>
              <Image
                src={'/img/fullmetal.png'}
                height={75}
                width={75}
                borderRadius={'100%'}
                objectFit={'cover'}
                boxShadow={'0 3px 10px #333'}
              />
              <Text
                color={'#9C9787'}
                fontWeight={'bold'}
                fontSize={'0.8rem'}
                margin={'15px 0'}
              >
                Meus dados
              </Text>
            </Flex>
            <Flex direction={'column'}>
              <Card secondary="true">
                <Flex alignItems={'center'} direction={'column'} py={2}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    fontSize={'0.8rem'}
                    color={'#747578'}
                  >
                    Nome do Usuário
                  </Text>
                  <Text marginTop={'15px'} fontSize={'0.8rem'}>
                    {user?.usuario}
                  </Text>
                </Flex>
              </Card>
              <Card secondary="true">
                <Flex alignItems={'center'} direction={'column'} my={2}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    fontSize={'0.8rem'}
                    color={'#747578'}
                  >
                    URL da loja
                  </Text>
                  <Text marginTop={'15px'} fontSize={'0.8rem'}>
                    {user?.url}
                  </Text>
                </Flex>
              </Card>
            </Flex>
            <Button colorScheme={'orange'} size={'sm'} mt={2} width={'100%'}>
              Alterar senha
            </Button>
            <div className={styles.divider} />
            <Stack>
              <FormControl>
                <FormLabel color={'#747578'} fontSize={'0.8rem'}>
                  Nome
                </FormLabel>
                <Input
                  size={'sm'}
                  type="text"
                  borderRadius={'4px'}
                  borderColor={'#525457 !important'}
                  focusBorderColor={'#da5220'}
                  placeholder={'Nome Completo'}
                  name={'nome'}
                  value={user?.nome || ''}
                  onChange={event =>
                    setUser({ ...user, nome: event.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel color={'#747578'} fontSize={'0.8rem'}>
                  Email
                </FormLabel>
                <Input
                  size={'sm'}
                  type="email"
                  borderRadius={'4px'}
                  borderColor={'#525457 !important'}
                  focusBorderColor={'#da5220'}
                  placeholder={'seu@email.com'}
                  name={'email'}
                  value={user?.email || ''}
                  onChange={event =>
                    setUser({ ...user, email: event.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel color={'#747578'} fontSize={'0.8rem'}>
                  Celular
                </FormLabel>
                <Input
                  size={'sm'}
                  type="text"
                  borderRadius={'4px'}
                  borderColor={'#525457 !important'}
                  focusBorderColor={'#da5220'}
                  placeholder={'(00) 00000 0000'}
                  name={'celular'}
                  value={user?.celular || ''}
                  onChange={event =>
                    setUser({ ...user, celular: event.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel color={'#747578'} fontSize={'0.8rem'}>
                  Aniversário
                </FormLabel>
                <Input
                  size={'sm'}
                  type="text"
                  borderRadius={'4px'}
                  borderColor={'#525457 !important'}
                  focusBorderColor={'#da5220'}
                  placeholder={'00/00/0000'}
                  name={'aniversario'}
                  value={user?.aniversario || ''}
                  onChange={event =>
                    setUser({ ...user, aniversario: event.target.value })
                  }
                />
              </FormControl>
            </Stack>
          </Card>
        </Box>
      </main>
      <div className={styles.floatingCta} onClick={saveConfiguration}>
        <Image src={'/img/floppy.svg'} width={6} height={6} />
      </div>
    </div>
  )
}
