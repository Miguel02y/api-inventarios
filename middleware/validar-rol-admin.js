const jwt = require('jsonwebtoken');

const validarRolAdmin = { 
    
    validarRolAdmin: (req, res, next) => {
        if(req.payload.rol != 'Aministrador'){
            return res.status(401).json({ menaje: 'Error unauthorized'})
        }
        next();
    },
}

module.exports = validarRolAdmin