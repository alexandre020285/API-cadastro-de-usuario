import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://fullstack-cadastro-de-usuario-api.onrender.com',

});

export default api;