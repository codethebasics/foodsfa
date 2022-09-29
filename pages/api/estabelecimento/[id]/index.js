/**
 *
 * API Proxy de estabelecimentos
 *
 * @param {*} req
 * @param {*} res
 * @returns response da API alvo
 *
 */
export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return processGET(req, res)
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
 * Processa requisição GET
 *
 */
const processGET = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Processing GET request',
    estabelecimento: req.query.id
  })
}

/**
 *
 * Processa requisição POST
 *
 */
const processPOST = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Processing POST request',
    estabelecimento: req.query.id
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
