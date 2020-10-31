var NewsController = require('../controllers/NewsController');

module.exports = function (app) {
    app.post('/news/getNewsBy', function (req, res) {
        console.log('/news/getNewsBy', req.body)
        NewsController.getNewsBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/getNewsShowBy', function (req, res) {
        console.log('/news/getNewsShowBy', req.body)
        NewsController.getNewsShowBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/getNewsByNewsCode', function (req, res) {
        console.log('/news/getNewsByNewsCode', req.body)
        NewsController.getNewsByNewsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/insertNews', function (req, res) {
        console.log('/news/insertNews', req.body)
        NewsController.insertNews(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/updateNewsByNewsCode', function (req, res) {
        console.log('/news/updateNewsByNewsCode', req.body)
        NewsController.updateNewsByNewsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/deleteNewsByNewsCode', function (req, res) {
        console.log('/news/deleteNewsByNewsCode', req.body)
        NewsController.deleteNewsByNewsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}