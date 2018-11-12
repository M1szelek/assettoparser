var express = require('express');
var router = express.Router();

const ACLScraper = require('../classes/ACLScraper');
const ACLDownloader = require('../classes/ACLDownloader');

const ROSScraper = require('../classes/ROSScraper');
const ROSDownloader = require('../classes/ROSDownloader');

let acl = async function(req, res, next){



    let ACLD = new ACLDownloader();

    try{
        let html = await ACLD.download();
        let ACLS = new ACLScraper(html);
        res.json(ACLS.scrape());
    }catch(err){

    }
};

let ros = async function(req, res, next){



    let ROSD = new ROSDownloader();

    try{
        let html = await ROSD.download();
        let ROSS = new ROSScraper(html);
        res.json(ROSS.scrape());
    }catch(err){

    }
};

/* GET home page. */
router.get('/acl', acl);
router.get('/ros', ros);



module.exports = router;
