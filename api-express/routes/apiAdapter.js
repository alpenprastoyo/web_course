const axios = require('axios');

const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
    return axios.crete({
        baseUrl: baseUrl,
        timeout: TIMEOUT
    })
}