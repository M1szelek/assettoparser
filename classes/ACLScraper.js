const Scraper = require('./Scraper');

module.exports = class ACLScraper extends Scraper {

    scrape(){

        let count = this.$('tr').count();




        let row = this.$('tr:nth-child(2) td:nth-child(1)').text();

        console.log(row);


        // let number = this.$('tr:nth-child(1) td:nth-child(1)').text();
        // let car = this.$('tr:nth-child(1) td:nth-child(2)').text();
        // let driverAndTeam = this.$('tr:nth-child(1) td:nth-child(3)').text();
        //
        // console.log({
        //     number,
        //     car,
        //     driverAndTeam
        // });


        return [
            {
                number: 1,
                car: 'Mazda',
                driver: 'Kinky',
                team: 'Texaco'
            }
        ]
    }
}