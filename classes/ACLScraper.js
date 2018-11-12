const Scraper = require('./Scraper');

module.exports = class ACLScraper extends Scraper {
    scrape(){
        let count = this.$('tr').length;
        let result = [];

        let cars = {
            C1: 'Mazda',
            DTM1: 'Alfa Romeo',
            DTM2: 'BMW',
            DTM3: 'Ford',
            DTM4: 'Mercedes-Benz'
        }

        for(let i = 2; i <= count; i++){
            let number = this.$(`tr:nth-child(${i}) td:nth-child(1)`).text().substring(1);
            let car = cars[this.$(`tr:nth-child(${i}) td:nth-child(2)`).attr('class').substring(12)];
            let driver = this.$(`tr:nth-child(${i}) td:nth-child(3) .dName`).text();
            let team = this.$(`tr:nth-child(${i}) td:nth-child(3) .tName`).text().substring(3);

            let row = {
                number,
                car,
                driver,
                team
            }

            result.push(row);
        }

        return result;
    }
}