import Servos from "models/Servos";

async function cadastrarServo(novoServo : any) {
    try{
        const servoCadastrado = await Servos.create(novoServo);
        return servoCadastrado;
    }
    catch(e){
        return (e as Error).message;
    }
}

module.exports = {cadastrarServo};
