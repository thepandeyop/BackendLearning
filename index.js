require('dotenv').config()
const express = require('express');
const { env } = require('process');
const app = express();
const githubdata = {
user:"thepandeyop",
password:"*******",
Linkaddress:"nothing",
}
app.get('/', (req,res)=>{
res.send('hello world!');
})

app.get('/github', (req,res)=>{
    res.json(githubdata);
})

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on port ${process.env.PORT}`);
})