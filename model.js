//Criação do Modelo
    const mongoose = require('mongoose');
    const userSchema = mongoose.Schema({
        nome:{
            type: String,
            require: true
        },
        idade:{
            type: Number,
            require: true
        }
    });
//Modulo de exportação
    module.exports = mongoose.model('users',userSchema)  //collection