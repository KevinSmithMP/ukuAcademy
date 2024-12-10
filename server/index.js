const express = require('express');

const app = express(); 

app.use(express.json());

const cors = require('cors');

app.post("/", async(req,res)=>{
    res.send(result);
})

app.get('/', async(res)=>{
    let form = new Forms();
    let result = await form.save();
    res.send(result);
})

require('./db/connection');
const Forms = require('./Models/Form')

app.get('/', async (req, res) => {
    try {
      const formularios = await Form.formind({});
      res.status(200).json(formularios);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }

  });

app.listen(4000);