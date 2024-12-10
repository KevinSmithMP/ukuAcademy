const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name:String,
    apellido:String,
    rut:String,
    email:String,
    comnetario:String

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