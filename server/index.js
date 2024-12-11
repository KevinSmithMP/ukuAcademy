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

app.get('/employees', async (req, res) => {
    try {
      const formularios = await Form.formind({});
      res.status(200).json(formularios);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }

  });

app.listen(4000);