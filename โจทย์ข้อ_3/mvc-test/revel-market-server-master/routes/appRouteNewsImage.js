var NewsImageController = require('../controllers/NewsImageController');

module.exports = function (app) {
    app.post('/news_image/getNewsImageBy', function (req, res) {
        console.log('/news_image/getNewsImageBy', req.body)
        NewsImageController.getNewsImageBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news_image/getNewsImageByNewsImageCode', function (req, res) {
        console.log('/news_image/getNewsImageByNewsImageCode', req.body)
        NewsImageController.getNewsImageByNewsImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news_image/insertNewsImage', function (req, res) {
        console.log('/news_image/insertNewsImage', req.body)
        NewsImageController.insertNewsImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news_image/updateNewsImageByNewsImageCode', function (req, res) {
        console.log('/news_image/updateNewsImageByNewsImageCode', req.body)
        NewsImageController.updateNewsImageByNewsImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news_image/deleteNewsImageByNewsImageCode', function (req, res) {
        console.log('/news_image/deleteNewsImageByNewsImageCode', req.body)
        NewsImageController.deleteNewsImageByNewsImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}