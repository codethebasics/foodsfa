import products from '../../../components/product/products.json'

export default function handler(req, res) {
  const method = req.method

  if (method === 'GET') {
    res.status(200).json(products)
  } else {
    res.status(400).json({ message: 'method not allowed' })
  }
}
