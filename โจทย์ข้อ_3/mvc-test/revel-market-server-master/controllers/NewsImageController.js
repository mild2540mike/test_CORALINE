var NewsImageModel = require('../models/NewsImageModel');

var Task = function (task) {
    this.task = task.task;
};
Task.getNewsImageBy = async function getNewsImageBy(data, result) {
    var news_imageList = await NewsImageModel.getNewsImageBy(data);
    result(news_imageList);
}
Task.getNewsImageByNewsImageCode = async function getNewsImageByNewsImageCode(data, result) {
    var news_image = await NewsImageModel.getNewsImageByNewsImageCode(data);
    result(news_image);
}
Task.insertNewsImage = async function insertNewsImage(data, result) {
    var last_code = await NewsImageModel.getLastCode();
    var response = await NewsImageModel.insertNewsImage(data,last_code);
    response.news_image_code = last_code;
    result(response);
}
Task.updateNewsImageByNewsImageCode = async function updateNewsImageByNewsImageCode(data, result) {
    var response = await NewsImageModel.updateNewsImageByNewsImageCode(data);
    result(response);
}
Task.deleteNewsImageByNewsImageCode = async function deleteNewsImageByNewsImageCode(data, result) {
    var response = await NewsImageModel.deleteNewsImageByNewsImageCode(data);
    result(response);
}

module.exports = Task;