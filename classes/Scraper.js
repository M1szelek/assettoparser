const cheerio = require('cheerio');

class Scraper{
    constructor(htmlContent){
        this.$ = cheerio.load(htmlContent);
    }
}