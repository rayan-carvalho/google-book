const axios = require('axios'); 
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_GOOGLE_BOOK_API_URL, 
});

export default axiosInstance;