/**
 *
 * Lista estabelecimentos
 *
 */
const list = async filter => {
  try {
    let estabelecimentos = await fetch('/api/estabelecimentos')
    filter.id &&
      (estabelecimentos = estabelecimentos.filter(
        estabelecimento => estabelecimento.id == filter.id
      ))
    filter.nome &&
      (estabelecimentos = estabelecimentos.filter(
        estabelecimento => estabelecimento.nome == filter.nome
      ))
  } catch (e) {
    console.log('Erro ao buscar o estabelecimento', e)
  }
}

/**
 *
 * Busca estabelecimento pelo ID
 *
 * @param {*} idEstabelecimento
 */
const findById = async idEstabelecimento => {
  const isValid = idEstabelecimento > 0

  try {
    if (!isValid) {
      throw 'O id deve ser informado'
    }

    return await list().find(
      estabelecimento => estabelecimento.id == idEstabelecimento
    )
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
 * @param {*} nomeEstabelecimento
 *
 */
const findByName = async nomeEstabelecimento => {
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
 * @param {*} estabelecimento
 *
 */
const save = async estabelecimento => {
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
 * @param {*} estabelecimento
 *
 */
const update = async estabelecimento => {
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
 * @param {*} idEstabelecimento
 *
 */
const deleteById = async idEstabelecimento => {
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

export default {
  findById,
  findByName,
  list,
  save,
  update,
  deleteById
}
