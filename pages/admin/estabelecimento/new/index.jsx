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
            path={'/admin/estabelecimento/massadmais/info'}
          />
          <ConfigCard label={'Localização'} icon={'/img/white-location.svg'} />
          <ConfigCard
            label={'Regiões de Entrega'}
            icon={'/img/white-map.svg'}
            path={'/admin/estabelecimento/massadmais/entrega'}
          />
          <ConfigCard
            label={'Horário de Atendimento'}
            icon={'/img/white-clock.svg'}
            path={'/admin/estabelecimento/massadmais/atendimento'}
          />
          <ConfigCard
            label={'Formas de pagamento'}
            icon={'/img/white-credit-card.svg'}
            path={'/admin/estabelecimento/massadmais/pagamento'}
          />
        </Flex>
      </main>
    </div>
  )
}
