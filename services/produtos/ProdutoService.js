/**
 *
 * Lista todos os produtos
 *
 * @param {Object} filter - Objeto contendo parâmetros adicionais da busca
 */
const list = async filter => {
  let response = undefined
  try {
    response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/produtos`, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    }).then(response => response.json())
  } catch (e) {
    console.log('ProdutoService> Erro durante a listagem de produtos')
  }
  return response
}

/**
 *
 * Busca produto pelo seu id
 *
 * @param {number} idProduto - Id do produto a ser buscado
 */
const findById = async idProduto => {
  let response = undefined
  try {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/produtos/${idProduto}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      }
    ).then(response => response.json())
  } catch (e) {
    console.log(
      `ProdutoService> Erro ao efetuar busca do produto com o id ${idProduto}`,
      e
    )
  }
  return response
}

/**
 *
 * Cadastra produto
 *
 * @param {Object} produto - Produto a ser salvo
 */
const save = async produto => {
  let response = undefined
  try {
    response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: produto
    }).then(response => response.json())
  } catch (e) {
    console.log(`ProdutoService> Erro durante cadastro de produto`, e)
  }
  return response
}

/**
 *
 * Atualiza produto
 *
 * @param {Object} produto - Produto a ser atualizado
 */
const update = async produto => {
  let response = undefined
  try {
    response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/produtos`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: produto
    }).then(response => response.json())
  } catch (e) {
    console.log(`ProdutoService> Erro durante atualização de produto`, e)
  }
  return response
}

/**
 *
 * Delete produto pelo id
 *
 * @param {number} idProduto - Id do produto a ser removido
 */
const deleteById = async idProduto => {
  let response = undefined
  try {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/produtos/${idProduto}`,
      {
        method: 'DELETE',
        headers: {
          accept: 'application/json'
        }
      }
    ).then(response => response.json())
  } catch (e) {
    console.log(
      `ProdutoService> Erro durante remoção de produto com id ${idProduto}`,
      e
    )
  }
  return response
}
