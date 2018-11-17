const Downloader = require('../classes/Downloader');
const Repository = require('../classes/Repository');

module.exports = class Season {

    constructor(){
        console.log('season constructor')
        this.repository = new Repository();
        this.downloader = new Downloader();
    }

    async driversList(){
        try{
            console.log('drivers list');
            console.log(this.url);
            let html = await this.downloader.download(this.url);
            let drivers = this.scraper.scrape(html);
            this.repository.update(drivers,this.season);
            return drivers;
        }catch(err){
            console.log(err);
        }


    }

    raceList(){

    }


};