const mongoose = require('mongoose');

const getConnection = async () => {

    try {

        const url = 'mongodb://migueldb:1Ie6NarTNzqPmtjj@ac-nbj0nds-shard-00-00.et1hjrt.mongodb.net:27017,ac-nbj0nds-shard-00-01.et1hjrt.mongodb.net:27017,ac-nbj0nds-shard-00-02.et1hjrt.mongodb.net:27017/inventarios-2024?ssl=true&replicaSet=atlas-12rxwn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

        
        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection
}