const Sequelize = require('sequelize');

module.exports = class DB {
    constructor(){
        const sequelize = new Sequelize({
            //host: '127.0.0.1',
            //port: 33060,
            database: 'assettoparser',
            username: 'homestead',
            password: 'secret',
            dialect: 'mysql'
        });

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}