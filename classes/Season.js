const Downloader = require('../classes/Downloader');
const Repository = require('../classes/Repository');
const _ = require('lodash');
const arraySort = require('array-sort');

module.exports = class Season {

    constructor(){
        this.repository = new Repository();
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
            let html = await Downloader.download(this.url);
            return this.scraper.scrape(html,this.season,this.domain);
        }catch(err){
            console.log(err);
        }
    }

    async preqList(){
        try{
            let html = await Downloader.download(this.preqUrl);
            let htmlr = await Downloader.download(this.url);

            let drivers = this.scraper.scrape(htmlr,this.season,this.domain);
            let preqentries = this.preqScraper.scrape(html,this.season);

            preqentries = this.addPreqPositionColumn(preqentries);
            preqentries = this.merge(preqentries,drivers, 'driver');

            if(this.generalScraper){
                let htmlGeneral = await Downloader.download(this.generalUrl);
                let general = this.generalScraper.scrape(htmlGeneral);
                preqentries = this.merge(preqentries,general,'driver');
            }

            preqentries = this.filter(preqentries);

            arraySort(preqentries, 'preqPosition');

            return preqentries;
        }catch(err){
            console.log(err);
        }
    }

    filter(drivers) {
        console.log('Filter not implemented for this season');
        return drivers;
    }

    merge(aArr, bArr, key){

        let result = [];

        aArr.forEach((aItem) => {
            let abItem = _.find(bArr, (bItem) => {return aItem[key] === bItem[key]});
            result.push(Object.assign({}, aItem, abItem));
        });

        return result;
    }

    addPreqPositionColumn(drivers) {
        let result = [];

        drivers.forEach((driver,i) => {
            driver.preqPosition = i + 1;
            result.push(driver);
        });

        return result;
    }


};