import * as EstabelecimentoService from '../services/estabelecimento/EstabelecimentoService'

import { useState } from 'react'

export default function Home() {
  const [response, setResponse] = useState(null)
  const [estabelecimentoId, setEstabelecimentoId] = useState(0)
  const [estabelecimentoName, setEstabelecimentoName] = useState('')

  const list = async () => {
    console.log('Listando estabelecimentos')
    setResponse(await EstabelecimentoService.list())
  }

  const findById = async () => {
    console.log('Buscando pelo id')
    setResponse(await EstabelecimentoService.findById(estabelecimentoId))
  }

  const findByName = async () => {
    console.log('Buscando pelo nome')
    setResponse(await EstabelecimentoService.findByName(estabelecimentoName))
  }

  return (
    <div>
      <div>
        <label>Estabelecimento Id</label>
        <input
          value={estabelecimentoId}
          onChange={e => setEstabelecimentoId(e.target.value)}
        />
        <button onClick={findById}>Buscar pelo id</button>
      </div>
      <hr />
      <div>
        <label>Estabelecimento Nome</label>
        <input
          value={estabelecimentoName}
          onChange={e => setEstabelecimentoName(e.target.value)}
        />
        <button onClick={findByName}>Buscar pelo nome</button>
      </div>
      <hr />
      <div>
        <label>Listar Estabelecimentos</label>
        <button onClick={list}>Listar</button>
      </div>
      <div>Response: {JSON.stringify(response)}</div>
    </div>
  )
}
