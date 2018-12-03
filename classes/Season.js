const Downloader = require('../classes/Downloader');
const Repository = require('../classes/Repository');
const _ = require('lodash');

module.exports = class Season {

    constructor(){
        this.repository = new Repository();
        this.downloader = new Downloader();

        this.domain = undefined;
        this.url = undefined;
        this.preqUrl = undefined;
        this.generalUrl = undefined;
        this.scraper = undefined;
        this.preqScraper = undefined;
        this.generalScraper = undefined;
        this.season = undefined;
    }

    async driversList(){
        try{
            let html = await this.downloader.download(this.url);
            let drivers = this.scraper.scrape(html,this.season,this.domain);
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

            let drivers = this.scraper.scrape(htmlr,this.season,this.domain);
            let preqentries = this.preqScraper.scrape(html,this.season);

            preqentries = this.merge(drivers,preqentries, 'driver');

            if(this.generalScraper){
                let htmlGeneral = await this.downloader.download(this.generalUrl);
                let general = this.generalScraper.scrape(htmlGeneral);
                preqentries = this.merge(general,preqentries,'driver');
            }

            preqentries = this.removeDriversWithoutTimes(preqentries);

            //this.repository.updatePreqEntries(preqentries,this.season);
            return preqentries;
        }catch(err){
            console.log(err);
        }
    }


    // merge(drivers, preqentries){
    //     let result = [];
    //
    //     preqentries.forEach((preqentry) => {
    //         let driver = _.find(drivers, (driver) => { return driver.driver === preqentry.driver});
    //         result.push(Object.assign({}, preqentry, driver));
    //     });
    //
    //     return result;
    // }

    merge(aArr, bArr, key){

        let result = [];

        aArr.forEach((aItem) => {
            let abItem = _.find(bArr, (bItem) => {return aItem[key] === bItem[key]});
            result.push(Object.assign({}, aItem, abItem));
        });

        return result;
    }

    removeDriversWithoutTimes(drivers){
        return drivers.filter((driver) => {
           return driver.time;
        });
    }


};