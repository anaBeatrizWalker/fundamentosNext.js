// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    //Gerando um número aleatório sempre que gerar a requisição
    res.status(200).json({ numero: Math.random()})
  } 