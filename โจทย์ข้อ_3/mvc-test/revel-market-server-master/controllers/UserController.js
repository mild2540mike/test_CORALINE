var UserModel = require('../models/UserModel');

var Task = function (task) {
    this.task = task.task;
};


Task.checkLogin = async function checkLogin(data, result) {
    var user = await UserModel.checkLogin(data);
    result(user);
}
Task.getUserBy = async function getUserBy(data, result) {
    var userList = await UserModel.getUserBy(data);
    result(userList);
}
Task.getUserByGet = async function getUserByGet(data, result) {
    var userList = await UserModel.getUserByGet(data);
    result(userList);
}
Task.getUserByUserCode = async function getUserByUserCode(data, result) {
    var user = await UserModel.getUserByUserCode(data);
    result(user);
}
Task.insertUser = async function insertUser(data, result) {
    var last_code = await UserModel.getLastCode();
    var response = await UserModel.insertUser(data,last_code);
    response.user_code = last_code;
    result(response);
}
Task.updateUserByUserCode = async function updateUserByUserCode(data, result) {
    var response = await UserModel.updateUserByUserCode(data);
    result(response);
}
Task.deleteUserByUserCode = async function deleteUserByUserCode(data, result) {
    var response = await UserModel.deleteUserByUserCode(data);
    result(response);
}

module.exports = Task;