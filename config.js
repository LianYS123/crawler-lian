const pathlib = require('path')

const resolve = (path) => {
    return pathlib.resolve(__dirname,path);
}
module.exports = {
    ERROR_LOG_PATH: resolve('./log/crawler_err.log'),
    FILE_PATH: resolve('./files'),
    rateLimit: 500
}