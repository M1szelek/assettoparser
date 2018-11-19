const Season = require('../classes/Season');
const Scraper = require('../classes/ROSScraper');


module.exports = class TCRSeason extends Season{
    constructor(){
        super();
        this.url = 'https://republicofsimracers.com/event/5?tab=drivers';
        this.scraper = new Scraper();
        this.season = 'TCR';
    }
}