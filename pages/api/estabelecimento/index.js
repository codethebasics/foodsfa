export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ status: 200, message: 'listando estabelecimentos' })
  } else {
    res.status(400).json({ status: 400, message: 'Method not allowed' })
  }
}
