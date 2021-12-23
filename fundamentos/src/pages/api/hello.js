// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'John Doe',
    metodo: req.method, //requisição do método. Assim podemos tratar todos os tipos de método
    
    //Acessando os parâmetros colocados na url (?nome=Ana&idade=30)
    nome: req.query.nome,
    idade: +req.query.idade
  })
}
