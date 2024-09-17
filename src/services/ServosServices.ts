import Servos from "models/Servos";

async function create(novoServo: any) {
    try {
        const servoCadastrado = await Servos.create(novoServo);
        return servoCadastrado;
    } catch (e) {
        throw new Error((e as Error).message);
    }
}

async function read() {
    try {
        return await Servos.find();
    } catch (e) {
        throw new Error((e as Error).message);
    }
}
async function readById(id : String) {
    try {
        return await Servos.findOne({_id : id});
    } catch (e) {
        throw new Error((e as Error).message);
    }
}
// async function deletarServosPorId(id : String){
//     try{
//         await 
//     }
//     catch (e) {
//         throw new Error((e as Error).message);
//     }
// }

export {create, read, readById};
