const {Pool} = require('pg')
 const conection = new Pool({
    host:'localhost',
    user:'us',
    port: 5432,
    password: 'admin',
    database: 'criado'

 })