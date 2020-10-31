var ShopImageController = require('../controllers/ShopImageController');

module.exports = function (app) {
    app.post('/shop_image/getShopImageBy', function (req, res) {
        console.log('/shop_image/getShopImageBy', req.body)
        ShopImageController.getShopImageBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop_image/getShopImageByShopImageCode', function (req, res) {
        console.log('/shop_image/getShopImageByShopImageCode', req.body)
        ShopImageController.getShopImageByShopImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop_image/insertShopImage', function (req, res) {
        console.log('/shop_image/insertShopImage', req.body)
        ShopImageController.insertShopImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop_image/updateShopImageByShopImageCode', function (req, res) {
        console.log('/shop_image/updateShopImageByShopImageCode', req.body)
        ShopImageController.updateShopImageByShopImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop_image/deleteShopImageByShopImageCode', function (req, res) {
        console.log('/shop_image/deleteShopImageByShopImageCode', req.body)
        ShopImageController.deleteShopImageByShopImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}