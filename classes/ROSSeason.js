const Season = require('../classes/Season');
const Scraper = require('../classes/ROSScraper');


module.exports = class ROSSeason extends Season{
    constructor(){
            super();
            this.url = 'https://republicofsimracers.com/event/4?tab=drivers';
            this.scraper = new Scraper();
            this.season = 'ROSST';
    }
}