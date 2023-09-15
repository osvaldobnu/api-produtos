const mongoose = require("mongoose")

const server = '127.0.0.1:27017'
const database = "node"

class Database {
    async _connect() {
        mongoose
            .connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log("Conectado no banco com sucesso")
            })
            .catch(() => {
                console.error("Erro ao conectar no banco")
            })
    }
}

module.exports = new Database()