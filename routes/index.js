
/*
 * GET home page.
 */

exports.index = function (req, res, app) {
    res.render('index', { 
        locals: { 
            'title': 'JankServer',
            'header': 'Welcome to JankServer',
            'tweets': app.data.tweets,
            stylesheets: ['public/stylesheets/style.css']
        }
    } );
};