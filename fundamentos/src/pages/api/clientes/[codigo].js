//Recebendo um código dinâmicamente pela url

export default function handler(req, res){

    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        nome: `Ana ${codigo}`,
        email: `anaanaana${codigo}@jjjemail.com`
    })
}
/*
Requisição: http://localhost:3000/api/clientes/55
Resposta:
{
    id: 55,
    nome: "Ana 55",
    email: "anaanaana55@jjjemail.com"
}
*/