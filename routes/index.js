var express = require('express');
var router = express.Router();

const ACLScraper = require('../classes/ACLScraper');
const ACLDownloader = require('../classes/ACLDownloader');

const ROSScraper = require('../classes/ROSScraper');
const ROSDownloader = require('../classes/ROSDownloader');

const db = require('../models');

let acl = async function(req, res, next){



    let ACLD = new ACLDownloader();

    try{
        let html = await ACLD.download();
        let ACLS = new ACLScraper(html);
        let data = ACLS.scrape();
        res.render('driversList', {data});
    }catch(err){

    }
};

let ros = async function(req, res){

    let ROSD = new ROSDownloader();

    try{
        let html = await ROSD.download();
        let ROSS = new ROSScraper(html);
        let data = ROSS.scrape();

        db.driver.bulkCreate(data)
            .then(() => {
                console.log('Data saved in DB')
            }).catch(() => {
               console.log('Error');
            });



        res.render('driversList', {data});
    }catch(err){

    }
};

/* GET home page. */
router.get('/acl', acl);
router.get('/ros', ros);



module.exports = router;
