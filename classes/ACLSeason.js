const Season = require('../classes/Season');
const Scraper = require('../classes/ACLScraper');


module.exports = class ACLSeason extends Season{
    constructor(){
        super();
        this.url = 'https://acleague.com.pl/sezon12-kierowcy-i-zespoly.html';
        this.scraper = new Scraper();
        this.season = 'ACLRETROWEK';
    }
}