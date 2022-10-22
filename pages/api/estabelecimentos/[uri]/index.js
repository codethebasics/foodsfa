/**
 *
 * API Proxy de estabelecimentos
 *
 */
const estabelecimentos = require('../estabelecimentos.json')

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return findByURI(req, res)
    case 'PUT':
      return update(req, res)
    case 'DELETE':
      return remove(req, res)
    default:
      return res
        .status(400)
        .json({ status: 400, message: 'Method not allowed' })
  }
}

/**
 *
 * Solicita busca de estabelecimento pela URI
 *
 */
const findByURI = (req, res) => {
  try {
    const estabelecimento = estabelecimentos.find(
      estabelecimento => estabelecimento.uri == `/${req.query.uri}`
    )
    if (!estabelecimento) {
      res.status(404).json({
        status: 404,
        message: `Não foi possível encontrar o estabelecimento com a URI informada`,
        estabelecimento: undefined
      })
    } else {
      res.status(200).json({
        status: 200,
        message: `Estabelecimento encontrado`,
        estabelecimento: estabelecimento
      })
    }
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: `Erro durante a busca do estabelecimento: ${e}`
    })
  }
}

/**
 *
 * Solicita atualização de estabelecimento
 *
 */
const update = async (req, res) => {
  try {
    const isEstabelecimentoValido = true
    if (!isEstabelecimentoValido) {
      throw `O estabelecimento informado não contém informações suficientes para efetivação da atualização`
    }
    // const response = await fetch(``).then(response => response.json())
    res.status(200).json({
      status: 200,
      message: `Estabelecimento atualizado com sucesso`,
      responseBody: response
    })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: `Erro durante a atualização do estabelecimento: ${e}`
    })
  }
}

/**
 *
 * Solicita remoção de estabelecimento
 *
 */
const remove = async (req, res) => {
  try {
    const estabelecimento = req.body
    const isEstabelecimentoValido = true
    if (!isEstabelecimentoValido) {
      throw `O estabelecimento informado não contém informações suficientes para efetivação da atualização`
    }
    const response = await fetch(``, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: estabelecimento
    }).then(response => response.json())
    res.status(200).json({
      status: 200,
      message: `Estabelecimento removido com sucesso`,
      responseBody: response
    })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: `Erro durante a remoção do estabelecimento: ${e}`
    })
  }
}
