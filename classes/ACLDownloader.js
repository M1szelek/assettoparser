const Downloader = require('./Downloader');

module.exports = class ACLDownloader extends Downloader {
    constructor() {
        super();
        this.url = 'https://acleague.com.pl/sezon12-kierowcy-i-zespoly.html'
    }

    async download() {
        try{
            return await this.http(this.url);
        }catch(err){
            console.log(err);
        }
    }
};