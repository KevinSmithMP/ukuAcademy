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
 }   catch (error) {
 res.status(500).json({ error: 'Internal Server Error' });
        }
});

app.delete('/Listaformulario/:id', async (req, res) => {
  
  const { Types } = require('mongoose');
  const id = new Types.ObjectId(req.params.id);
  console.log(id)

  try {
    const deletedFormulario = await Forms.findByIdAndDelete(id);
    if (!deletedFormulario) {
      return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.status(200).json({ message: 'Formulario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.put('/Listaformulario/:id', async (req, res) => {
  try {
    const updatedFormulario = await Forms.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFormulario) {
      return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.status(200).json(updatedFormulario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el formulario' });
  }
});

app.listen(4000);