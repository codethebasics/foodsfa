import ConfigCard from '../../../../../components/admin/account/new/ConfigCard'
import styles from '../../../../../styles/admin/estabelecimento/novoEstabelecimento.module.scss'

import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function New() {
  const router = useRouter()
  const url = router.query.url

  return (
    <div className={styles.wrapper}>
      <main>
        <Flex wrap={'wrap'} justifyContent={'center'}>
          <ConfigCard
            label={'Informações da Loja'}
            icon={'/img/white-store.svg'}
            path={`/admin/estabelecimento/${url}/info`}
          />
          <ConfigCard label={'Localização'} icon={'/img/white-location.svg'} />
          <ConfigCard
            label={'Regiões de Entrega'}
            icon={'/img/white-map.svg'}
            path={`/admin/estabelecimento/${url}/entrega`}
          />
          <ConfigCard
            label={'Horário de Atendimento'}
            icon={'/img/white-clock.svg'}
            path={`/admin/estabelecimento/${url}/atendimento`}
          />
          <ConfigCard
            label={'Formas de pagamento'}
            icon={'/img/white-credit-card.svg'}
            path={`/admin/estabelecimento/${url}/pagamento`}
          />
        </Flex>
      </main>
    </div>
  )
}
