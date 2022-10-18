import * as EstabelecimentoService from '../../services/estabelecimento/EstabelecimentoService'

import Link from 'next/link'

import { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function Estabelecimentos() {
  const [estabelecimentos, setEstabelecimentos] = useState([])

  useEffect(() => {
    EstabelecimentoService.list()
      .then(estabelecimentos => setEstabelecimentos(estabelecimentos))
      .catch(e => console.log('Erro', e))
  }, [])

  return (
    <div className="wrapper">
      <main>
        <Flex direction={'column'} p={5}>
          {estabelecimentos.map(estabelecimento => (
            <Link
              key={estabelecimento.id}
              href={`/estabelecimento/${estabelecimento.id}`}
            >
              <Box backgroundColor={'#222'} p={5} mb={5} borderRadius={'5px'}>
                <Text fontSize={'1.4rem'}>{estabelecimento.nome}</Text>
                <Text fontSize={'1rem'} opacity={'0.7'}>
                  {estabelecimento.logradouro}
                </Text>
                <Text fontSize={'0.8rem'} opacity={'0.5'}>
                  {estabelecimento.bairroCidade}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </main>
    </div>
  )
}
