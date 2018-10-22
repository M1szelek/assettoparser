var express = require('express');
var router = express.Router();

const ACLScraper = require('../classes/ACLScraper');
const ACLDownloader = require('../classes/ACLDownloader');

let index = async function(req, res, next){



    let ACLD = new ACLDownloader();

    try{
        let html = await ACLD.download();
        let ACLS = new ACLScraper(html);
        res.json(ACLS.scrape());
    }catch(err){

    }
}

/* GET home page. */
router.get('/', index);



module.exports = router;
