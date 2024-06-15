const express = require('express')
const { getConnection} = require('./db/db-connection-mongo');
require('dotenv').config();
//const { route } = require('./router/usuario');
//const router = require('./router/usuario');
const app = express();
const router = express.Router()
const port = process.env.PORT;

getConnection();

app.use(express.json());

app.use('/auth', require('./router/auth'));
app.use('/usuario', require('./router/usuario'));
app.use('/marca', require('./router/marca'));
app.use('/estado-equipo', require('./router/estadoEquipo'));
app.use('/tipo-equipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
