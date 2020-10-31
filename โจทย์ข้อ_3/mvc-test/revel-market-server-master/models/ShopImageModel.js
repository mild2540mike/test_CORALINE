var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getShopImageBy = function getShopImageBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_shop_image ";
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
}
Task.getShopImageByShopImageCode = function getShopImageByShopImageCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_shop_image WHERE shop_code = '" + data.shop_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
}
Task.insertShopImage = function insertShopImage(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_shop_image (shop_image_code, shop_code, shop_image_name)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.shop_code + "', "
            + " '" + data.shop_image_name + "') ";

        console.log("insertShopImage>>", str);
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
}

Task.updateShopImageByShopImageCode = function updateShopImageByShopImageCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_shop_image "
            + " SET shop_code = '" + data.shop_code + "',"
            + " shop_image_name = '" + data.shop_image_name + "'"
            + " WHERE shop_image_code = '" + data.shop_image_code + "'";

        console.log("insertShopImage>>", str);
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
}
Task.deleteShopImageByShopImageCode = function deleteShopImageByShopImageCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_shop_image WHERE shop_image_code = '" + data.shop_image_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
}

Task.getLastCode = function getLastCode() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  IFNULL(CONCAT('SI',LPAD( SUBSTRING(max(shop_image_code), 3, 5)+1,4,'0')), 'SI0001')   AS last_code  FROM `tb_shop_image`";
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                resolve(err);
            }
            else {
                resolve(res[0].last_code);
            }
        });
    });
}
module.exports = Task;