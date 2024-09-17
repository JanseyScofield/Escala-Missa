import e, {Request,Response} from 'express';

const services = require('services/ServosServices')

function cadastrarServo(req: Request, res: Response) {
    console.log(req.body)
    services.cadastrarServo(req.body)
        .then((novoServo: any) => {
            return res.status(201).send({ servoCadastrado: novoServo });
        })
        .catch((e: Error) => {
            return res.status(400).send({ erro: e.message });
        });
}


function listarServos(req : Request, res  : Response){
    services.listarServos()
    .then((listaServos : any) => {
        return res.status(200).send({servos:listaServos});
    })
    .catch((e : Error) =>{
        return res.status(404).send({erro : e});
    });
}

export { cadastrarServo, listarServos };
