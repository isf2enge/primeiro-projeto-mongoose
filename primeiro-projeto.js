//Criação do Banco
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1/segundo-projeto').then(()=>{console.log('Banco criado!')});


//Criação do servidor
    const userSchema = require('./model')
    new userSchema({
        nome: 'Irineu',
        idade: 25
    }).save().then(()=> {
        console.log('Deu certo!')
    }).catch((err)=>{
        console.log('Erro: '+ err)
    })