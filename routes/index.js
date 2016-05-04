var express = require('express');
var router = express.Router();
var google = require('google')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

/* POST home page. */
router.post('/', function(req, res, next) {
	google.resultsPerPage = 10;
	// google.lang = 'tr'
	// google.tld = 'tr'
	// google.nextText = 'Sonraki'
	var nextCounter = 0;
	var result = [];
	google(req.body.keyword, function (err, resp){
		if (err) console.error(err)

	  for (var i = 0; i < resp.links.length; ++i) {
			result.push(resp.links[i])
	    var link = resp.links[i];
	    console.log(link.title + ' - ' + link.href)
	    console.log(link.description + "\n")
	  }

	  if (nextCounter < req.body.range) {
	    nextCounter += 1
	    if (res.next) res.next()
	  } else {
			res.render('index', {"searchResult":result});
	  }
	});

});

module.exports = router;


var resultSample = {
		title: 'Leadergamer - Oyun haberleri, Oyun incelemeleri',
    link: 'http://leadergamer.com.tr/',
    description: 'Oyun incelemeleri, haberler, video ve fotoğraf galerileri yer almaktadır.',
    href: 'http://leadergamer.com.tr/'
	};
