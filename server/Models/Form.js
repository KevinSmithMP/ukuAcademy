const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    rut:String,
    correo:String,
    comentario:String,
    Id:String,

},{
    collection:"form"

},{
    methods:{

        findDocuments(){
            return mongoose.model('Form').find({})
     }
 }
  
});

const Form = mongoose.model('forms', formSchema);

module.exports = Form;