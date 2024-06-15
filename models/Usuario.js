const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    nombre: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    estado: { type: String, required: true, enum: ['Activo', 'Inactivo']},
    password: { type: String, required: true},
    rol: { type: String, required: true, enum: ['Administrador', 'Docente']},
    fechaCreacion: { type: Date, requiered: true},
    fechaActualizacion: { type: Date, requiered: true}
});

module.exports = model('Usuario', UsuarioSchema);