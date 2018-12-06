const Scraper = require('./Scraper');

module.exports = class ACLPreqScraper extends Scraper {
    scrape(html,season){
        let $ = this.cheerio.load(html);

        let result = [];

        $('.go1').each((i,el) => {
           let driver = $(el).find('.dName').text().trim();
           let time = $(el).find('td a').text().trim();
           let validlaps = $(el).find('td:nth-child(5)').text().trim();
           let server = $(el).find('td:nth-child(7)');

            let row = {
                driver,
                time,
                validlaps,
                server
            };

            result.push(row);
        });

        return result;
    }
};