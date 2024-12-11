const express = require('express');

const app = express(); 

app.use(express.json());

const cors = require('cors');

app.use(cors());

require('./db/connection');
const Forms = require('./Models/Form')

app.post("/", async(req,res)=>{
  let form = new Forms(req.body);
  let result = await form.save();
  res.send(result);
})

app.get('/', async(res)=>{
    let form = new Forms();
    let result = await form.save();
    res.send(result);
})

app.get('/Listaformulario', async (req, res) => {
    try {
      const Formularios = await Forms.find()
      res.status(200).json(Formularios)
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }

  });

app.listen(4000);