var UserController = require('../controllers/UserController');

module.exports = function (app) {

    app.post('/user/checkLogin', function (req, res) {    //  Not Controller
        console.log('/user/checkLogin', req.body)
        UserController.checkLogin(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/getUserBy', function (req, res) {
        console.log('/user/getUserBy', req.body)
        UserController.getUserBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/getUserByGet/code:', function (req, res) {
        console.log('/user/getUserByGet/code:', req.body)
        UserController.getUserByGet(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/getUserByUserCode', function (req, res) {
        console.log('/user/getUserByUserCode', req.body)
        UserController.getUserByUserCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/insertUser', function (req, res) {
        console.log('/user/insertUser', req.body)
        UserController.insertUser(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/updateUserByUserCode', function (req, res) {
        console.log('/user/updateUserByUserCode', req.body)
        UserController.updateUserByUserCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/deleteUserByUserCode', function (req, res) {
        console.log('/user/deleteUserByUserCode', req.body)
        UserController.deleteUserByUserCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}