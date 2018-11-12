const Downloader = require('./Downloader');

module.exports = class ROSDownloader extends Downloader {
    constructor() {
        super();
        this.url = 'https://republicofsimracers.com/event/4?tab=drivers'
    }
};