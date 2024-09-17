import e, {Request,Response} from 'express';
import {create, read, readById} from 'services/ServosServices';

function cadastrarServo(req: Request, res: Response) {
    console.log(req.body)
    create(req.body)
        .then((novoServo: any) => {
            return res.status(201).send({ servoCadastrado: novoServo });
        })
        .catch((e: Error) => {
            return res.status(400).send({ erro: e.message });
        });
}


function listarServos(req : Request, res  : Response){
    read()
    .then((listaServos : any) => {
        return res.status(200).send({servos:listaServos});
    })
    .catch((e : Error) =>{
        return res.status(404).send({erro : e});
    });
}

export { cadastrarServo, listarServos };
