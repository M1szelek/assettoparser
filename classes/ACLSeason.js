const Season = require('../classes/Season');
const Scraper = require('../classes/ACLScraper');
const PreqScraper = require('../classes/ACLPreqScraper');


module.exports = class ACLSeason extends Season{
    constructor(){
        super();
        this.url = 'https://acleague.com.pl/sezon12-kierowcy-i-zespoly.html';
        this.preqUrl = 'https://acleague.com.pl/sezon12-prekwalifikacje.html';
        this.scraper = new Scraper();
        this.preqScraper = new PreqScraper();
        this.season = 'ACLRETROWEK';
    }
};