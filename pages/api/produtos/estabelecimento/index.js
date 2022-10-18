/**
 *
 * API Proxy para gerenciar produtos.
 * Se não for informada a URI do estabelecimento,
 * retorna erro 400
 *
 */
export default function handler(req, res) {
  res
    .status(400)
    .json({
      status: 400,
      message: 'A URI do estabelecimento precisa ser informada'
    })
}
