var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getNewsImageBy = function getNewsImageBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_news_image ";
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
Task.getNewsImageByNewsImageCode = function getNewsImageByNewsImageCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_news_image WHERE news_code = '" + data.news_code + "' ";
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
Task.insertNewsImage = function insertNewsImage(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_news_image (news_image_code, news_code, news_image_name)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.news_code + "', "
            + " '" + data.news_image_name + "') ";

        console.log("insertNewsImage>>", str);
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

Task.updateNewsImageByNewsImageCode = function updateNewsImageByNewsImageCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_news_image "
            + " SET news_code = '" + data.news_code + "',"
            + " news_image_name = '" + data.news_image_name + "'"
            + " WHERE news_image_code = '" + data.news_image_code + "'";

        console.log("insertNewsImage>>", str);
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
Task.deleteNewsImageByNewsImageCode = function deleteNewsImageByNewsImageCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_news_image WHERE news_image_code = '" + data.news_image_code + "' ";
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
        var str = "SELECT  IFNULL(CONCAT('NI',LPAD( SUBSTRING(max(news_image_code), 3, 5)+1,4,'0')), 'NI0001')   AS last_code  FROM `tb_news_image`";
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