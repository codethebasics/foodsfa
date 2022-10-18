export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return processGET(req, res)
    case 'DELETE':
      return processDELETE(req, res)
    default:
      return res.status(400).json({
        status: 400,
        message: 'Method not allowed'
      })
  }
}

const processGET = (req, res) => {
  try {
    // TODO: recuperar produto de API
    return res.status(200).json({
      status: 200,
      message: 'Produto encontrado',
      responseBody: {
        id: 1,
        name: 'Pizza Marguerita',
        uri: '/la-vie-est-belle/pizzas/marguerita',
        description:
          'Marguerita com brócolis, bacon, tomate, ervilhas, milho e azeitona',
        image: '/img/item_pizza_marguerita.png',
        imageAlt: 'Pizza Marguerita',
        price: 20,
        pricePromo: 19,
        category: [1, 2],
        estabelecimento: 1
      }
    })
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: 'Erro durante a busca do produto: ' + e,
      responseBody: req.body
    })
  }
}

const processDELETE = (req, res) => {
  try {
    // TODO: recuperar produto de API
    return res.status(200).json({
      status: 200,
      message: `Produto de id ${req.query.id} deletado com sucesso`,
      responseBody: {
        id: 1,
        name: 'Pizza Marguerita',
        uri: '/la-vie-est-belle/pizzas/marguerita',
        description:
          'Marguerita com brócolis, bacon, tomate, ervilhas, milho e azeitona',
        image: '/img/item_pizza_marguerita.png',
        imageAlt: 'Pizza Marguerita',
        price: 20,
        pricePromo: 19,
        category: [1, 2],
        estabelecimento: 1
      }
    })
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: 'Erro durante a remoção do produto: ' + e
    })
  }
}
