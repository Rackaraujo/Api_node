import express from 'express'

import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma =  new PrismaClient()

const app = express()
app.use(express.json())

//Rotas
app.get('/cadastro',(req,res)=>{
    //res.send('O GET FUNCIONOUUU')
    res.status(200).json(usuarios)
})

app.post('/cadastro',(req,res)=>{
    //console.log(req.body)
    usuarios.push(req.body)
    //res.status(201).send('O POST FUNCIONOUUU')
    res.status(201).json(req.body)
})

//Porta local do servidor
app.listen(3000,()=>{
    console.log('O SERVIDOR TÁ RODANDO')
})