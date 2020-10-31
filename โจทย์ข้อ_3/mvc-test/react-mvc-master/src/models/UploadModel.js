import GOBALS from '../GOBALS';
export default class UploadModel {
    async uploadFile(data) {
        return fetch(GOBALS.URL_UPLOAD, {
            method: 'post',
            headers: {
            },
            body: data
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }).catch((error) => {
                return {
                    data: [],
                    error: error,
                    upload_result: false,
                    server_result: false
                };
                //console.error(error);
            });
    }
    async fileDelete(path){
        console.log("delete old file")
        return fetch(GOBALS.URL_DELETE, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({delete_path:path})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }).catch((error) => {
                return {
                    data: [],
                    error: error,
                    upload_result: false,
                    server_result: false
                };
                //console.error(error);
            });
    }
}