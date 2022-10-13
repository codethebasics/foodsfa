/**
 * --------------------------------------
 * API administrativa de estabelecimentos
 * --------------------------------------
 */

const users = [
  {
    usuario: 'bruno.carneiro312',
    url: '/massadmais',
    avatar: '/img/fullmetal.png',
    nome: 'Bruno Carneiro',
    email: 'bruno.carneiro312@gmail.com',
    celular: '61985770401',
    aniversario: '29/07/1987'
  },
  {
    usuario: 'thiago.carneiro',
    url: '/messaredonda',
    avatar: '/img/item_bolo_brigadeiro.png',
    nome: 'Thiago Ferreira',
    email: 'thiago.carneiro@gmail.com',
    celular: '61985778888',
    aniversario: '29/07/1986'
  },
  {
    usuario: 'sarah.souza',
    url: '/peixefrito',
    avatar: '/img/item_cerveja.png',
    nome: 'Sarah Souza',
    email: 'sarah.souza@gmail.com',
    celular: '61985777777',
    aniversario: '09/03/1989'
  }
]

export default function handler(req, res) {
  return res.status(200).json(users)
}
