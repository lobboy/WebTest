var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

var htmlData =
{
	title: 'Cleaning Supplies',
	supplies:
		['mop','broom','duster'],
	pics:
        ['2Q==.jpg',
        '2Q==-1.jpg', 
        '9k=.jpg', 
        '9k=-1.jpg', 
        '9k=-3.jpg'
        ,'Z.jpg'
        ,'Z-1.jpg'
        ,'Z-2.jpg'
        ,'Z-3.jpg'
        ,'Z-4.jpg'
        ,'Z-5.jpg']
}

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/page', function(req, res) {
	res.render('page', htmlData);
});

app.get('/hwpage', function(req, res) {
	res.render('hwpage', htmlData);
});


app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
