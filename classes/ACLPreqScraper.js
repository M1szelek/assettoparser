const Scraper = require('./Scraper');

module.exports = class ACLPreqScraper extends Scraper {
    scrape(html,season){
        let $ = this.cheerio.load(html);

        let count = $('tr').length;
        let result = [];

        let cars = {
            C1: 'Mazda',
            DTM1: 'Alfa Romeo',
            DTM2: 'BMW',
            DTM3: 'Ford',
            DTM4: 'Mercedes-Benz'
        }

        for(let i = 2; i <= count; i++){
            let number = $(`tr:nth-child(${i}) td:nth-child(1)`).text().substring(1);
            let car = cars[$(`tr:nth-child(${i}) td:nth-child(2)`).attr('class').substring(12)];
            let driver = $(`tr:nth-child(${i}) td:nth-child(3) .dName`).text();
            let team = $(`tr:nth-child(${i}) td:nth-child(3) .tName`).text().substring(3);

            let row = {
                number,
                car,
                driver,
                team,
                season
            }

            result.push(row);
        }

        return result;
    }
}