module.exports = class Downloader {
    constructor(){
        this.http = require('request-promise');
    }

    async download(url) {
        try{
            return await this.http(url);
        }catch(err){
            console.log(err);
        }
    }
};