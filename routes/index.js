var express = require('express');
var router = express.Router();

const ACLSeason = require('../classes/ACLSeason');
const ROSSeason = require('../classes/ROSSeason');
const TCRSeason = require('../classes/TCRSeason');

let season = {
    ros: ROSSeason,
    acl: ACLSeason,
    tcr: TCRSeason
};

function getSeason(name){
    return new season[name]();
};

let list = async function(req, res){
    try{
        let season = getSeason(req.params.season);
        let drivers = await season.driversList();
        res.render('driversList', {drivers});
    }catch(err){

    }
};

// listRace();
// listDrivers(season);
// update(season);



/* GET home page. */
router.get('/', (req,res) => {
   res.render('index');
});

router.get('/:season', list);




module.exports = router;
