const db = require('../models');
const Repository = require('../classes/Repository');

module.exports = class ROSRepository extends Repository {
    constructor(){
        super();
        this.season = 'ROSST';
    }
};