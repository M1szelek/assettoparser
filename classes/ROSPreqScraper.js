const Scraper = require('./Scraper');

module.exports = class ROSPreqScraper extends Scraper{

    scrape(html,season){

        let result = [];

        html.data.forEach((driver) => {
            let row = {
                driver: driver.name,
                time: driver.laptime,
                theo: driver.theo,
                diff: driver.diff.substring(3),
                validlaps: driver.numlaps,
                maxspeed: driver.maxspeed_kmh,
                server: driver.server


            };

            result.push(row);
        });

        return result;

    }
};