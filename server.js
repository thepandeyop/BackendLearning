import express from 'express';
const app = express();
// app.use(express.static('dist'));// middelware  badpractice

app.get('/', (req,res)=>{
res.send('server is ready');
})




// get a list of 5 jokes
app.get('/api/jokes', (req,res)=>{
    const jokes  = [ 
        {
         id: 1,
         title: 'A joke',
         content: 'This is A joke'
        },
        {
            id: 2,
            title: 'B joke',
            content: 'This is B joke'
        },
        {
            id: 3,
            title: 'C joke',
            content: 'This is C joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server at https://localhost:${port}`);
});