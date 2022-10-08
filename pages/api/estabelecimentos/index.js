/**
 *
 * API Proxy de estabelecimentos
 *
 * @param {*} req
 * @param {*} res
 * @returns response da API alvo
 *
 */
const estabelecimentos = require('./estabelecimentos.json')

export default function handler(req, res) {
  if (req.method === 'GET') {
    res
      .status(200)
      .json({
        status: 200,
        message: 'listando estabelecimentos',
        body: estabelecimentos
      })
  } else {
    res.status(400).json({ status: 400, message: 'Method not allowed' })
  }
}
