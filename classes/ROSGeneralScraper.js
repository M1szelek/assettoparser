const Scraper = require('./Scraper');

module.exports = class ROSGeneralScraper extends Scraper{

    scrape(html,season,domain){

        let $ = this.cheerio.load(html);

        let result = [];

        $('#rankingsTable').find('.clickable-row').each((i,el) => {
            let position = $(el).find('td:first-child').text().trim();
            let driver = $(el).find('.driver-name').text().trim();
            let points = $(el).find('td:nth-child(6)').text().trim();

            let row = {
                position,
                driver,
                points
            };

            result.push(row);
        });

        return result;


    }
};