
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes');

var app = module.exports = express.createServer();

// Globale data
app.data = {
    tweets : [] 
};

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
  app.use(express.errorHandler());
});

// Routes

app.get('/', function (reg, res) {routes.index(reg, res, app)});
app.get('/tweets', function (reg, res) {routes.tweets(res, res, app)});

app.post('/send', express.bodyParser (), function (reg, res) {
    if (reg.body && reg.body.tweet) {
        app.data.tweets.push(reg.body.tweet);
        //res.send({status:"ok", message:"Tweet reseived"});
        res.redirect('/', 302);
    } else {
        res.send({status:"nok", message:"No tweet reseived"});                  
    }
} );

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
