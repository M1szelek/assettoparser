const Season = require('../classes/Season');
const ROSScraper = require('../classes/ROSScraper');


module.exports = class ROSSeason extends Season{
    constructor(){
            super();
            console.log('ros season');
            this.url = 'https://republicofsimracers.com/event/4?tab=drivers';
            this.scraper = new ROSScraper();
            this.season = 'ROSST';
            console.log('ros season');
    }
}