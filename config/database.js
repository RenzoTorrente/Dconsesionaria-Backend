require('dotenv').config();
module.exports = {
  // DB
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "deconsesionaria",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",

    //SEEDERS
    seederStorage:"sequelize",
    seederStorageTablename:"seeds",




  }
