const { DataTypes } = require('sequelize');
const model  =  require('../Databases/DbContext');

const Animal = model.define('animal',{
    firstName: {
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Animal;