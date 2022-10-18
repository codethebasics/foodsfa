/**
 *
 * API Proxy para gerenciar produtos de um
 * determinado estabelecimento
 *
 */
export default function handler(req, res) {
  const { uri } = req.query

  // TODO: obter estabelecimento através de API
  res.status(200).json({
    status: 200,
    message: `Lista de produtos do estabelecimento ${uri}`,
    body: []
  })
}
