/**
 *
 * API Proxy de estabelecimentos
 *
 */
const estabelecimentos = require('./estabelecimentos.json')

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return list(res)
    case 'POST':
      return save(req, res)
    default:
      return res.status(400).json({
        status: 400,
        message: 'Method not allowed'
      })
  }
}

/**
 *
 * Solicita listagem de estabelecimentos
 *
 */
const list = res => {
  try {
    res.status(200).json({
      status: 200,
      message: 'listando estabelecimentos',
      body: estabelecimentos
    })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: 'Erro durante listagem de estabelecimentos'
    })
  }
}

/**
 *
 * Solicita cadastro de novo estabelecimento
 *
 */
const save = async (req, res) => {
  try {
    // Verifica se estabelecimento foi informado
    const estabelecimento = req.body
    if (!estabelecimento) {
      throw `O estabelecimento precisa ser informado`
    }

    // Verifica se estabelecimento possui campos válidos
    const isEstabelecimentoValido =
      estabelecimento.nome &&
      estabelecimento.uri &&
      estabelecimento.endereco &&
      estabelecimento.horariosFuncionamento
    if (!isEstabelecimentoValido) {
      throw `O estabelecimento possui dados insuficientes para ser cadastrado`
    }

    // const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     accept: 'application/json'
    //   }
    // }).then(response => response.json())

    const response = 'TODO: buscar de API externa'

    res.status(200).json({
      status: 200,
      message: 'Estabelecimento cadastrado com sucesso',
      responseBody: response
    })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: `Erro durante o cadastro de estabelecimento: ${e}`
    })
  }
}
