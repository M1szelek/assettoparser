module.exports = class Downloader {
    constructor(){
        this.url = 'abstract url';
        this.http = require('request-promise');
    }

    async download() {
        try{
            return await this.http(this.url);
        }catch(err){
            console.log(err);
        }
    }
}