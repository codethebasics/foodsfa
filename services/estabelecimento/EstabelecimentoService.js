/**
 *
 * Lista estabelecimentos
 *
 * @param {Object} filter - Objeto contendo parâmetros a serem considerados na busca
 *
 */
export const list = async filter => {
  try {
    let estabelecimentos = await fetch('/api/estabelecimentos').then(response =>
      response.json()
    )
    return estabelecimentos.body
  } catch (e) {
    console.log('Erro ao buscar o estabelecimento', e)
  }
}

/**
 *
 * Busca estabelecimento pelo ID
 *
 * @param {number} idEstabelecimento - Identificador do estabelecimento
 *
 */
export const findById = async idEstabelecimento => {
  const isValid = idEstabelecimento > 0

  try {
    if (!isValid) {
      throw 'O id deve ser informado'
    }
    let estabelecimento = await fetch(
      `/api/estabelecimentos/${idEstabelecimento}`
    ).then(response => response.json())
    console.log('estabelecimento =>', estabelecimento)
  } catch (e) {
    console.log(
      `Erro ao buscar estabelecimento pelo ID (${idEstabelecimento})`,
      e
    )
  }
}

/**
 *
 * Busca estabelecimento pelo nome
 *
 * @param {string} nomeEstabelecimento - Nome do estabelecimento
 *
 */
export const findByName = async nomeEstabelecimento => {
  try {
    return await list().find(estabelecimento =>
      estabelecimento.nome.includes(nomeEstabelecimento)
    )
  } catch (e) {
    console.log(
      `Erro ao buscar estabelecimento pelo nome (${nomeEstabelecimento})`,
      e
    )
  }
}

/**
 *
 * Cadastra estabelecimento
 *
 * @param {Object} estabelecimento - Estabelecimento a ser cadastrado
 *
 */
export const save = async estabelecimento => {
  const isValid = estabelecimento && estabelecimento.id && estabelecimento.nome

  try {
    if (!isValid) {
      throw 'O estabelecimento deve ser informado com o id e nome'
    }
    const estabelecimento = await fetch('/api/estabelecimentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })

    return estabelecimento
  } catch (e) {
    console.log(
      `Erro ao cadastrar estabelecimento (${estabelecimento.nome})`,
      e
    )
  }
}

/**
 *
 * Atualiza estabelecimento
 *
 * @param {Object} estabelecimento - Estabelecimento a ser cadastrado
 *
 */
export const update = async estabelecimento => {
  const isValid = estabelecimento && estabelecimento.id

  try {
    if (!isValid) {
      throw 'O estabelecimento deve ser informado com o id'
    }
    const estabelecimento = await fetch('/api/estabelecimentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })

    return estabelecimento
  } catch (e) {
    console.log(
      `Erro ao atualizar estabelecimento (${estabelecimento.nome})`,
      e
    )
  }
}

/**
 *
 * Deleta estabelecimento pelo ID
 *
 * @param {number} idEstabelecimento - Id do estabelecimento a ser removido
 *
 */
export const deleteById = async idEstabelecimento => {
  const isValid = idEstabelecimento > 0

  try {
    if (!isValid) {
      throw 'O estabelecimento deve ser informado com o id e nome'
    }
    await fetch('/api/estabelecimentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })
  } catch (e) {
    console.log(`Erro ao remover estabelecimento (${idEstabelecimento})`, e)
  }
}
