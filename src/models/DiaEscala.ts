import mongoose from "mongoose";

const diaEscalaSchema = new mongoose.Schema({
    dia:{
        type: Date,
        required : true
    },
    salmo:{
        type: String,
        required: true
    },
    voz1:{
        type: String
    },
    voz2:{
        type: String
    },
    voz3:{
        type: String
    },
    violao:{
        type: String
    }, 
    teclado:{
        type: String
    }, 
    cajon_bateria:{
        type: String
    }
});

export default mongoose.model('DiaEscala', diaEscalaSchema);