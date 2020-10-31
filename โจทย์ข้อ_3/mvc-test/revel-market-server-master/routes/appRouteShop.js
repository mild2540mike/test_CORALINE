var ShopController = require('../controllers/ShopController');

module.exports = function (app) {
    app.post('/shop/getShopBy', function (req, res) {
        console.log('/shop/getShopBy', req.body)
        ShopController.getShopBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/getShopByShopCode', function (req, res) {
        console.log('/shop/getShopByShopCode', req.body)
        ShopController.getShopByShopCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/insertShop', function (req, res) {
        console.log('/shop/insertShop', req.body)
        ShopController.insertShop(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/updateShopByShopCode', function (req, res) {
        console.log('/shop/updateShopByShopCode', req.body)
        ShopController.updateShopByShopCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/deleteShopByShopCode', function (req, res) {
        console.log('/shop/deleteShopByShopCode', req.body)
        ShopController.deleteShopByShopCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/getLastCode', function (req, res) {
        console.log('/shop/getLastCode', req.body)
        ShopController.getLastCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}