module.exports=(sequelize, DataType)=>{
    return sequelize.define('additional',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true
        }, 
        descripcionG: {
            type: DataType.STRING,
        
        },
        link_u:{
            type: DataType.STRING
        },
        descripcionU: {
            type: DataType.STRING,
        
        },
        linkC: {
            type: DataType.STRING,
        
        },
        descripcionC: {
            type: DataType.STRING,
        
        },
    })
    }