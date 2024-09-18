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

async function readBySkill(habilidade : string){
    try{
        return await Servos.find({[habilidade] : true});
    }
    catch(e){
        throw new Error((e as Error).message);
    }
}

async function updateById(id : String, novosDados : any) {
    try{
        await Servos.findByIdAndUpdate(
            {_id : id},
            {
                nome : novosDados.nome,
                canta : novosDados.canta,
                tocaViolao : novosDados.tocaViolao,
                tocaTeclado : novosDados.tocaTeclado,
                tocaPercussao : novosDados.tocaPercussao
            }
        );
        return readById(id);
    } 
    catch(e){
        throw new Error((e as Error).message);
    }   
}

async function deleteById(id : String){
    try{
        return await Servos.findOneAndDelete({_id : id});
    }
    catch (e) {
        throw new Error((e as Error).message);
    }
}

export {create, read, readById, readBySkill, updateById, deleteById};
