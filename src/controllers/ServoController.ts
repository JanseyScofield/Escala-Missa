import e, {Request,Response} from 'express';

const services = require('services/ServosServices')

function cadastrarServo(req : Request, res : Response){
    services.cadastrarServo(req.body)
    .then((novoServo : any) =>{
        return res.status(202).send({servoCadastrado:novoServo});
    })
    .catch((e : Error) =>{
        return res.status(400).send({erro : e});
    });
}


module.exports = {
    cadastrarServo,
  }