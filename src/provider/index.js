import { baseApiUrl } from '../constants/defaultValues';
import axios from 'axios';

const createInstance = function () {
    const axiosInstance = axios.create({
        baseURL: baseApiUrl,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('x-access-token')
        }
    });
    return axiosInstance;
};

export const User = {
    setUser: function (data) {
        localStorage.setItem('x-access-token', data.token);

        localStorage.setItem('userInfo', JSON.stringify(data.user));
    },
    settempUser: function (data) {
        localStorage.setItem('tempUser', data.user._id);
    },
    setAssetMap: function (data) {
        // console.log("in set asset", data);
        localStorage.setItem('assetMap', JSON.stringify(data));
    },
    getAssetMapLocal: () => {
        if (!localStorage.getItem('assetMap')) return null;
        return JSON.parse(localStorage.getItem('assetMap'));
    },

    login: function (payload) {
        return new Promise(function (resolve, reject) {
            const axiosInstance = createInstance();
            axiosInstance
                .post('auth/', payload)
                .then(function (response) {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });
    },

}