import mongoose from "mongoose";

const servosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required : true
    },
    canta: {
        type: Boolean,
    },
    tocaViolao: {
        type: Boolean,
    },
    tocaTeclado: {
        type: Boolean
    },
    tocaPercussao: {
        type: Boolean
    }
});

export default mongoose.model('Servos', servosSchema);