const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.get('/', (req,res) =>{
    res.json({
        message:'Url Shortener'
    });
});

app.get('/:id', (req,res) =>{
//    TODO:redirect to url
});

app.post('/url', (req,res) =>{
    //TODO: createt a short url
});

app.get('/url/:id', (req,res) =>{
  //get a short ulr by id
});


const port = process.env.PORT || 1337;
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
});