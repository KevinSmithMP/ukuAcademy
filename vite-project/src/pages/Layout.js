/* app.put('/Listaformularios/:id', validateObjectId, async (req, res) => {
const { Types } = require('mongoose');
const id = new Types.ObjectId(req.params.id);
const updateData = req.body;
console.log(id)
        try {
        const result = await Forms.findByIdAndUpdate(id, updateData, {new: true });
        res.status(200).json(result);  
        }catch (error){
        console.error(error);
        res.status(500).send("Error al actualizar el formulario");
        }
      });
        */