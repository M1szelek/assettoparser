const cheerio = require('cheerio');

module.exports = class Scraper{
    constructor(htmlContent){
        this.$ = cheerio.load(htmlContent);
    }
}

