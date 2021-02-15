const mysql=require('mysql')
const util=require('util')
const {Sequelize, DataTypes, DatabaseError}=require('sequelize')
const {host, user, password, database}=require('./milddleware/datos')
const sequelize= new Sequelize(database,user,password,{
    host:host,
    dialect: 'mysql'
}) 
const additional= require('./modelos/additional')(sequelize, DataTypes)
sequelize.sync()
.then(()=> console.log('sync'))
.catch(e=>console.log(e))

const connection = mysql.createConnection({
    host : host,
    user : user,
    password: password,
    database : database
})

try{connection.connect()} catch(e){console.log(e)}

connection.query=util.promisify(connection.query)

module.exports={ 
    Conection:connection,
    adicional: additional
    }
