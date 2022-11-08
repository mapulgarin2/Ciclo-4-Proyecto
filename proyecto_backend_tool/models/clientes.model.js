const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientesSchema = new Schema({
    nombres:{type: String,require: true, max: 100},
    apellidos:{type : String,required: true,max: 100},
    correo :{type : String,require : true, max: 100},
    telefono :{type : String,require: true, max: 20},
    direccion :{type : String, require: true, max:150}

});

module.exports = mongoose.model("clientes",ClientesSchema);