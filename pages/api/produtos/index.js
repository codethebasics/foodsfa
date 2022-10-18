import products from './products.json'

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return processGET(res)
    case 'POST':
      return processPOST(req, res)
    case 'PUT':
      return processPUT(req, res)
    default:
      return res.status(400).json({
        status: 400,
        message: 'Method not allowed'
      })
  }
}

const processGET = res => {
  try {
    // TODO: recuperar produto de API
    return res.status(200).json({
      status: 200,
      message: 'Lista de produtos retornada',
      responseBody: products
    })
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: 'Erro durante a listagem do produto: ' + e
    })
  }
}

const processPOST = (req, res) => {
  const produto = req.body
  const isProdutoValido =
    produto &&
    produto.name &&
    produto.uri &&
    produto.price &&
    produto.estabelecimento
  try {
    if (!isProdutoValido) {
      throw 'Os dados informados são insuficientes para o cadastramento do produto'
    }
    // TODO: salvar produto através de API
    return res.status(200).json({
      status: 200,
      message: 'Produto cadastrado com sucesso',
      responseBody: req.body
    })
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: 'Erro durante o cadastro do produto: ' + e
    })
  }
}

const processPUT = (req, res) => {
  const produto = req.body
  const isProdutoValido =
    produto &&
    produto.id &&
    produto.name &&
    produto.uri &&
    produto.price &&
    produto.estabelecimento
  try {
    if (!isProdutoValido) {
      throw 'Os dados informados são insuficientes para a atualização do produto'
    }
    // TODO: atualizar produto através de API
    return res.status(200).json({
      status: 200,
      message: `Produto atualizado com sucesso`,
      responseBody: produto
    })
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: 'Erro durante a atualização do produto: ' + e
    })
  }
}
