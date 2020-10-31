var ShopImageModel = require('../models/ShopImageModel');

var Task = function (task) {
    this.task = task.task;
};
Task.getShopImageBy = async function getShopImageBy(data, result) {
    var shop_imageList = await ShopImageModel.getShopImageBy(data);
    result(shop_imageList);
}
Task.getShopImageByShopImageCode = async function getShopImageByShopImageCode(data, result) {
    var shop_image = await ShopImageModel.getShopImageByShopImageCode(data);
    result(shop_image);
}
Task.insertShopImage = async function insertShopImage(data, result) {
    var last_code = await ShopImageModel.getLastCode();
    var response = await ShopImageModel.insertShopImage(data,last_code);
    response.shop_image_code = last_code;
    result(response);
}
Task.updateShopImageByShopImageCode = async function updateShopImageByShopImageCode(data, result) {
    var response = await ShopImageModel.updateShopImageByShopImageCode(data);
    result(response);
}
Task.deleteShopImageByShopImageCode = async function deleteShopImageByShopImageCode(data, result) {
    var response = await ShopImageModel.deleteShopImageByShopImageCode(data);
    result(response);
}

module.exports = Task;