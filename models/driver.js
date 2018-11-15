'use strict';
module.exports = (sequelize, DataTypes) => {
    let Driver = sequelize.define('driver', {
        driver: DataTypes.STRING,
        number: DataTypes.INTEGER,
        car: DataTypes.STRING,
        team: DataTypes.STRING,
        season: DataTypes.STRING
    });

    return Driver;
};