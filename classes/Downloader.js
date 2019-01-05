const axios = require('axios');

module.exports = class Downloader {
    static async download(url) {
        try{
            let response = await axios.get(url);
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
};