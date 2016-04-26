var express = require('express');
var router = express.Router();
var google = require('google')

/* GET home page. */
router.get('/', function(req, res, next) {
	google.resultsPerPage = 25
	var nextCounter = 0
	var result = [];
	google('node.js best practices', function (err, resp){
	  if (err) console.error(err)
	  	//console.log(res.links);
	 	result = resp.links;
	 	res.render('index', {"searchResult":null});
	});
  
});

module.exports = router;