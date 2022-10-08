/**
 *
 * API Proxy de estabelecimentos
 *
 * @param {*} req
 * @param {*} res
 * @returns response da API alvo
 *
 */
const estabelecimentos = require('../estabelecimentos.json')

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return findById(req, res)
    case 'POST':
      return processPOST(req, res)
    case 'PUT':
      return processPUT(req, res)
    case 'DELETE':
      return processDELETE(req, res)
    default:
      return res
        .status(400)
        .json({ status: 400, message: 'Method not allowed' })
  }
}

/**
 *
 * Busca estabelecimento pelo id
 *
 */
const findById = (req, res) => {
  const estabelecimento = estabelecimentos.find(
    estabelecimento => estabelecimento.id == req.query.id
  )
  if (!estabelecimento) {
    res.status(404).json({
      status: 404,
      message: '[API proxy] Estabelecimento não encontrado',
      estabelecimento: undefined
    })
  } else {
    res.status(200).json({
      status: 200,
      message: '[API proxy] Estabelecimento encontrado',
      estabelecimento: estabelecimento
    })
  }
}

/**
 *
 * Processa requisição POST
 *
 */
const processPOST = (req, res) => {
  const estabelecimento = estabelecimentos.find(
    estabelecimento => estabelecimento.id == req.query.id
  )
  res.status(200).json({
    status: 200,
    message: 'Processing POST request',
    estabelecimento: estabelecimento
  })
}

/**
 *
 * Processa requisição PUT
 *
 */
const processPUT = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Processing PUT request',
    estabelecimento: req.query.id
  })
}

/**
 *
 * Processa requisição DELETE
 *
 */
const processDELETE = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Processing DELETE request',
    estabelecimento: req.query.id
  })
}
