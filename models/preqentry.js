'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('preqentry', {
        driver: DataTypes.STRING,
        time: DataTypes.STRING,
        validlaps: DataTypes.STRING,
        season: DataTypes.STRING,
    });
};