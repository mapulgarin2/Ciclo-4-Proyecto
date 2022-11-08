const Cliente = require("../models/clientes.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req, res){
    let cliente = new Cliente({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    })


cliente.save(function(err){
    if(err){
        console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el nuevo cliente"
        res.json(response)
        return;
    }
    response.exito = true,
    response.msg = "El cliente se guardó correctamente"
    res.json(response)
    })
}

exports.find = function(req, res){
    Cliente.find(function(err,clientes){
        res.json(clientes)
    })
}

exports.findOne = function(req, res){
    Cliente.findOne({_id: req.params.id},function(err,clientes){
        res.json(clientes)
    })
}

exports.update = function(req, res){
    let cliente = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    }
    Cliente.findByIdAndUpdate(req.params.id,{$set: cliente},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el cliente"
            res.json(response)
            return
        }
        response.exito = true,
        response.msg = "El cliente se modifico correctamente"
        res.json(response)
})
}

exports.remove = function(req, res){
    Cliente.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar cliente"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Cliente eliminado correctamente"
        res.json(response)
    })
}