import GOBALS from '../GOBALS';
export default class UserModel {

    constructor() {
    }
    async checkLogin(data) {
        return fetch(GOBALS.URL + 'user/checkLogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((responseJson) => {

                return responseJson.data[0];
            }).catch((error) => {
                console.error(error);
            });
    }
    async getUserBy() {
        return fetch(GOBALS.URL + 'user/getUserBy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

            })
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }).catch((error) => {
                console.error(error);
            });
    }
    async getUserByUserCode(code) {
        return fetch(GOBALS.URL + 'user/getUserByUserCode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_code: code
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data[0];
            }).catch((error) => {
                console.error(error);
            });
    }

    async insertUser(data) {
        return fetch(GOBALS.URL + 'user/insertUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }).catch((error) => {
                console.error(error);
            });
    }

    async updateUserByUserCode(data) {
        return fetch(GOBALS.URL + 'user/updateUserByUserCode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }).catch((error) => {
                console.error(error);
            });
    }
    async deleteUserBycode(code) {
        return fetch(GOBALS.URL + 'user/deleteUserByUserCode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_code: code
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                //console.log("data", responseJson);
                return responseJson;
            }).catch((error) => {
                console.error(error);
            });
    }
    
}