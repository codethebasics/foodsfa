import { Flex } from '@chakra-ui/react'
import ConfigCard from '../../../../components/admin/account/new/ConfigCard'
import styles from '../../../../styles/admin/estabelecimento/novoEstabelecimento.module.scss'

export default function New() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Flex wrap={'wrap'} justifyContent={'center'}>
          <ConfigCard
            label={'Informações da Loja'}
            icon={'/img/white-store.svg'}
          />
          <ConfigCard label={'Localização'} icon={'/img/white-location.svg'} />
          <ConfigCard
            label={'Regiões de Entrega'}
            icon={'/img/white-map.svg'}
          />
          <ConfigCard
            label={'Horário de Atendimento'}
            icon={'/img/white-clock.svg'}
          />
          <ConfigCard
            label={'Formas de pagamento'}
            icon={'/img/white-credit-card.svg'}
          />
        </Flex>
      </main>
    </div>
  )
}
