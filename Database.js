const mongoose = require("mongoose")

const server =   'cylbtt2.mongodb.net'
const database = "node"
const username = 'osvaldoneto'
const password = 'ulzm1cLH62HG7R1i' 

// mongodb+srv://osvaldoneto:<password>@bancodedados.cylbtt2.mongodb.net/

class Database {
    async _connect() {
        mongoose
            .connect(`mongodb+srv://${username}:${password}@${database}.${server}`)
            .then(() => {
                console.log("Conectado no banco com sucesso")
            })
            .catch((error) => {
                console.error("Erro ao conectar no banco: " + error)
            })
    }
}

module.exports = new Database()