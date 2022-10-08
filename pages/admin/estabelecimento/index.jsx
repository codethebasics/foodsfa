import { Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import styles from '../../../styles/admin/estabelecimento/minhaConta.module.scss'

export default function Gerenciador() {
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser({
      usuario: 'bruno.carneiro312',
      url: '/massademais',
      nome: 'Bruno Carneiro',
      email: 'bruno.carneiro312@gmail.com',
      celular: '61985770401',
      aniversario: '29/07/1987'
    })
  }, [])

  const saveConfiguration = () => {
    setMessage('Cadastro atualizado')
    setMessageType('success')
    console.log('salvando usuário', user)
  }

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
      {renderMessage()}
      <header className={styles.header}>
        <div className={styles.pageTitle}>Minha conta</div>
        <div className={styles.cta}>Gerenciar usuários</div>
      </header>
      <main>
        <div className={styles.card}>
          <header>
            <div className={styles.avatar}>
              <Image src={'/img/fullmetal.png'} height={75} width={75} />
            </div>
            <label>Meus dados</label>
          </header>
          <section className={styles.info}>
            <div className={styles.card}>
              <label>Nome do usuário</label>
              <label>{user?.usuario}</label>
            </div>
            <div className={styles.cta}>Alterar senha</div>
            <div className={styles.card}>
              <label>URL DA LOJA</label>
              <label>{user?.url}</label>
            </div>
            <div className={styles.cta}>Configurações avançadas</div>
          </section>
          <div className={styles.divider} />
          <section className={styles.form}>
            <div>
              <label>Nome</label>
              <input
                name={'nome'}
                value={user?.nome || ''}
                onChange={event =>
                  setUser({ ...user, nome: event.target.value })
                }
              />
            </div>
            <div>
              <label>E-mail</label>
              <input
                name={'email'}
                value={user?.email || ''}
                onChange={event =>
                  setUser({ ...user, email: event.target.value })
                }
              />
            </div>
            <div>
              <label>Celular</label>
              <input
                name={'celular'}
                value={user?.celular || ''}
                onChange={event =>
                  setUser({ ...user, celular: event.target.value })
                }
              />
            </div>
            <div>
              <label>Aniversário</label>
              <input
                name={'aniversario'}
                value={user?.aniversario || ''}
                onChange={event =>
                  setUser({ ...user, aniversario: event.target.value })
                }
              />
            </div>
          </section>
        </div>
      </main>
      <div className={styles.floatingCta} onClick={saveConfiguration}>
        <Image src={'/img/floppy.svg'} width={6} height={6} />
      </div>
    </div>
  )
}
