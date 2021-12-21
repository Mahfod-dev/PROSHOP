const express = require('express')
const products = require('./data/products')



const app = express()


app.get('/',(req,res)=>{
    res.send('API IS RUNNING')
})
app.get('/api/products',(req,res)=>{
    res.json(products)
})


app.listen(8000,console.log('server running on port 8000'))