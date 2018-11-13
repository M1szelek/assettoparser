const Scraper = require('./Scraper');

module.exports = class ROSScraper extends Scraper{
    scrape(htmlContent){
        // document.querySelectorAll('.driver-item').forEach((item) =>
        // {
        //     console.log(item.querySelectorAll('.card-title')[0].innerHTML.trim());
        // });

        let result = [];


        this.$('.driver-item').each((i,el) => {

            let number = this.$(el).find('.badge-pill').text().trim();
            let car = this.$(el).find('small').text().trim();
            let team = this.$(el).find('.d-block').text().trim();
            let driver = this.$(el).find('.card-title').text().trim();

            let row = {
                number,
                car,
                driver,
                team
            }

            result.push(row);

        });

        return result;


        //this.$('.card-title')


    }
}