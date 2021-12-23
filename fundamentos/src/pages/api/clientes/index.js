import handler from "../hello"

export default function handler(req, res){
    
    if(req.method === 'GET'){
        handleGet(req, res)
    
    }else{
        //Envia como resposta da requisição um status Not Allowed (não permitido)
        res.status(405).send()
    }
}

function handleGet(req, res){
    //Envia um json como resposta da requisição
    res.status(200).json({
        id: 1,
        nome: 'Ana',
        email: 'anaanaana#jjjemail.com'
    })
}