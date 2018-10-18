var express = require('express');
var router = express.Router();

const ACLScraper = require('../classes/ACLScraper');

/* GET home page. */
router.get('/', function(req, res, next) {

  let ACLS = new ACLScraper('<h2 class="title">Hello world</h2>');

  res.json(ACLS.parse())
  //res.render('index', { title: 'Express' });
});

module.exports = router;
