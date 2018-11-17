var express = require('express');
var router = express.Router();

const ACLScraper = require('../classes/ACLScraper');
const ROSSeason = require('../classes/ROSSeason');

const db = require('../models');

let acl = async function(req, res, next){



    let downloader = new Downloader();

    try{
        let html = await downloader.download('https://acleague.com.pl/sezon12-kierowcy-i-zespoly.html');
        let ACLS = new ACLScraper(html);
        let data = ACLS.scrape();
        res.render('driversList', {data});
    }catch(err){

    }
};

let ros = async function(req, res){
    try{
        console.log('controller');
        let season = new ROSSeason();
        console.log('after ros season');
        let drivers = await season.driversList();
        res.render('driversList', {drivers});
    }catch(err){

    }

};

// listRace();
// listDrivers(season);
// update(season);



let rosUpdate = function(req,res){

};

let rosList = function(req,res){

}



/* GET home page. */
router.get('/acl', acl);
router.get('/ros', ros);
router.get('/ros/update', rosUpdate);
router.get('/ros/list', rosList);



module.exports = router;
