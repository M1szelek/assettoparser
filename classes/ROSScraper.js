const Scraper = require('./Scraper');

module.exports = class ROSScraper extends Scraper{
    scrape(htmlContent){
        // document.querySelectorAll('.driver-item').forEach((item) =>
        // {
        //     console.log(item.querySelectorAll('.card-title')[0].innerHTML.trim());
        // });


        this.$('.driver-item').each((i,el) => {
            console.log(this.$(el).find('.d-block').text().trim());

            let car = this.$(el).find('small').text().trim();
            let team = this.$(el).find('.d-block').text().trim();
            let driver = this.$(el).find('.card-title').text().trim();

        });
        //this.$('.card-title')


    }
}