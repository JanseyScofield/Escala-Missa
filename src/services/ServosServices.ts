import Servos from "models/Servos";

async function cadastrarServo(novoServo: any) {
    try {
        const servoCadastrado = await Servos.create(novoServo);
        return servoCadastrado;
    } catch (e) {
        throw new Error((e as Error).message);
    }
}

async function listarServos() {
    try {
        return await Servos.find();
    } catch (e) {
        throw new Error((e as Error).message);
    }
}


module.exports = {cadastrarServo, listarServos};
