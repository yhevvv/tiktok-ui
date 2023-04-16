import axios from 'axios';

const httpRequest = axios.create({
    //baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    debug: false,

});

export const get = async (path, options = {}) => {
    const response = await httpRequest?.get(path, options);
    return response.data;
};

export const post = async (path, data, options = {}) => {
    const response = await httpRequest?.post(path, data, options);
    return response.data;
};

export const del = async (path, data, options = {}) => {
    const response = await httpRequest?.delete(path, data, options);
    return response.data;
};

export default httpRequest;
