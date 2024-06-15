const {Schema, model} = require('mongoose');

const EstadoEquipoSchema = Schema({

    nombre: { type: String, required: true},
    estado: { type: String, required: true, enum: ['Activo', 'Inactivo']},
    fechaCreacion: { type: Date, requiered: true},
    fechaActualizacion: { type: Date, requiered: true}
});

module.exports = model('EstadoEquipo', EstadoEquipoSchema);