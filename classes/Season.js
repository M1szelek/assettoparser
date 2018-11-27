const Downloader = require('../classes/Downloader');
const Repository = require('../classes/Repository');
const _ = require('lodash');

module.exports = class Season {

    constructor(){
        console.log('season constructor')
        this.repository = new Repository();
        this.downloader = new Downloader();
    }

    async driversList(){
        try{
            let html = await this.downloader.download(this.url);
            let drivers = this.scraper.scrape(html,this.season);
            drivers = this.merge(drivers,[]);   //by now only for adding domain to img src
            //this.repository.update(drivers,this.season);
            return drivers;
        }catch(err){
            console.log(err);
        }


    }

    async preqList(){
        try{
            let html = await this.downloader.download(this.preqUrl);
            let htmlr = await this.downloader.download(this.url);
            let drivers = this.scraper.scrape(htmlr,this.season);
            let preqentries = this.preqScraper.scrape(html,this.season);

            preqentries = this.merge(drivers,preqentries);

            //this.repository.updatePreqEntries(preqentries,this.season);
            return preqentries;
        }catch(err){
            console.log(err);
        }
    }


    merge(drivers, preqentries){
        let result = [];

        preqentries.forEach((preqentry) => {
            let driver = _.find(drivers, (driver) => { return driver.driver === preqentry.driver});
            driver.img = this.domain + driver.img;
            result.push(Object.assign({}, preqentry, driver));
        });

        return result;
    }


};