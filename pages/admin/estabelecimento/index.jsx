import { Image } from '@chakra-ui/react'
import styles from '../../../styles/admin/estabelecimento/minhaConta.module.scss'

export default function Gerenciador() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.pageTitle}>Minha conta</div>
        <div className={styles.cta}>Gerenciar usuários</div>
      </header>
      <main>
        <div className={styles.card}>
          <header>
            <div className={styles.avatar}>A</div>
            <label>Meus dados</label>
          </header>
          <section className={styles.info}>
            <div className={styles.card}>
              <label>Nome do usuário</label>
              <label>brunocarneiro312</label>
            </div>
            <div className={styles.cta}>Alterar senha</div>
            <div className={styles.card}>
              <label>URL DA LOJA</label>
              <label>/massademais</label>
            </div>
            <div className={styles.cta}>Configurações avançadas</div>
          </section>
          <div className={styles.divider} />
          <section className={styles.form}>
            <div>
              <label>Nome</label>
              <input name={'nome'} />
            </div>
            <div>
              <label>E-mail</label>
              <input name={'email'} />
            </div>
            <div>
              <label>Celular</label>
              <input name={'celular'} />
            </div>
            <div>
              <label>Aniversário</label>
              <input name={'aniversario'} />
            </div>
          </section>
        </div>
      </main>
      <div className={styles.floatingCta}>
        <Image src={'/img/floppy.svg'} width={6} height={6} />
      </div>
    </div>
  )
}
