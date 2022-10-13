const users = [
  {
    usuario: 'bruno.carneiro312',
    url: 'massadmais',
    avatar: '/img/fullmetal.png',
    nome: 'Bruno Carneiro',
    email: 'bruno.carneiro312@gmail.com',
    celular: '61985770401',
    aniversario: '29/07/1987'
  },
  {
    usuario: 'thiago.carneiro',
    url: 'mesaredonda',
    avatar: '/img/item_bolo_brigadeiro.png',
    nome: 'Thiago Ferreira',
    email: 'thiago.carneiro@gmail.com',
    celular: '61985778888',
    aniversario: '29/07/1986'
  },
  {
    usuario: 'sarah.souza',
    url: 'peixefrito',
    avatar: '/img/item_cerveja.png',
    nome: 'Sarah Souza',
    email: 'sarah.souza@gmail.com',
    celular: '61985777777',
    aniversario: '09/03/1989'
  }
]

export default function handler(req, res) {
  const id = req.query.url
  const user = users.find(user => user.url == id)

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({ message: 'not found' })
  }
}
