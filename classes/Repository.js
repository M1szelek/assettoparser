const db = require('../models');

module.exports = class Repository {
    constructor(){
        this.season = 'abstract';
    }

    list(season){

    }

    update(drivers,season){
        db.driver.destroy({
            where: {
                season
            }
        }).then(() => {
            db.driver.bulkCreate(drivers)
                .then(() => {
                    console.log('Data saved in DB')
                }).catch(() => {
                console.log('Error');
            });
        });
    }
};