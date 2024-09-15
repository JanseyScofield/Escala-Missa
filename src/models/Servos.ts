import mongoose from "mongoose";

const servosSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    canta:{
        type: Boolean 
    },
    tocaViolao:{
        type: Boolean,
    },
    tocaTeclado:{
        type: Boolean
    },
    tocaPercussao:{
        type: Boolean
    }
});

export default mongoose.model('Servos', servosSchema);