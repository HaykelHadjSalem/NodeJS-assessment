// const Sequelize = require('sequelize');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('foleon', 'root', 'root', {

    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    database: "foleon",
    port: 3306
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

 db.pages = require('../models/pageSchema.js')(sequelize, DataTypes);
 db.rows = require('../models/rows.js')(sequelize, DataTypes);
 db.owner = require('../models/pageOwner.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db;