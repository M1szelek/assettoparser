const cheerio = require('cheerio');

module.exports = class Scraper{
    constructor(htmlContent){
        this.content = cheerio.load(htmlContent);
    }
}

