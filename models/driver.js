'use strict';
module.exports = (sequelize, DataTypes) => {
    var Driver = sequelize.define('Driver', {
        name: DataTypes.STRING,
        number: DataTypes.INTEGER,
        car: DataTypes.STRING,
        team: DataTypes.STRING
    });

    return Driver;
};