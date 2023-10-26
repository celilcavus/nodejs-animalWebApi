const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("animaldb","root","celil123",{
    host:"localhost",
    dialect:"mysql"
});


try {
    module.exports  = sequelize;
    console.log("Bağlanti başarili");
} catch (error) {
 console.log(error);   
}