require('dotenv').config()
const express = require('express');
const { env } = require('process');
const app = express();
const port = 4000;

app.get('/', (req,res)=>{
res.send('hello world!');
})

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on port ${port}`);
})