'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('driver', {
        driver: DataTypes.STRING,
        number: DataTypes.INTEGER,
        car: DataTypes.STRING,
        team: DataTypes.STRING,
        season: DataTypes.STRING
    });
};