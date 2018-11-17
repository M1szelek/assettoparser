const Scraper = require('./Scraper');

module.exports = class ROSScraper extends Scraper{

    scrape(html){

        let $ = this.cheerio.load(html);

        let result = [];


        $('.driver-item').each((i,el) => {

            let number = $(el).find('.badge-pill').text().trim();
            let car = $(el).find('small:not(.d-block)').text().trim();
            let team = $(el).find('.d-block').text().trim();
            let driver = $(el).find('.card-title').text().trim();

            let row = {
                number,
                car,
                driver,
                team,
                season: 'ROSST'
            }

            result.push(row);

        });

        return result;


    }
}