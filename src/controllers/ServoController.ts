import e, {Request,Response} from 'express';
import {create, read, readById, readBySkill, updateById, deleteById} from 'services/ServosServices';

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

function listarServosPorId(req : Request, res : Response){
    const {id} = req.params;
    readById(id)
    .then((servo : any) => {
        return res.status(200).send({servoEncontrado : servo})
    })
    .catch((e : Error) =>{
        return res.status(404).send({erro : e});
    });
}

function listarServosPorHabilidade(req : Request, res : Response){
    const {habilidade} = req.params;
    readBySkill(habilidade)
    .then((listaServos) =>{
        return res.status(200).send({servos : listaServos});
    })
    .catch((e : Error) =>{
        return res.status(404).send({erro : e});
    });
}

function editarServoPorId(req : Request, res : Response){
    const {id} = req.params;
    updateById(id, req.body)
    .then((novosDados) =>{
        return res.status(200).send({dadosAtualizados : novosDados});
    })
    .catch((e : Error) =>{
        return res.status(400).send({erro : e});
    });
}

function deletarServoPorId(req :  Request, res : Response){
    const {id} = req.params;
    deleteById(id)
    .then((servo : any) =>{
        return res.status(200).send({servoDeletado : servo});
    })
    .catch((e : Error) =>{
        return res.status(404).send({erro : e});
    });
}

export {cadastrarServo, listarServos, listarServosPorId, listarServosPorHabilidade,editarServoPorId, deletarServoPorId};
