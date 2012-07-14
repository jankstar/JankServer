
/*
 * GET tweets.
 */

exports.tweeds = function (req, res, app) {
    res.send(app.data.tweets);
};