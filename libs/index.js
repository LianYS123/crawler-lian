const fetchFile = require('./fetchFile');
const fetchBySelector = require('./fetchBySelector');
const fetchByReg = require('./fetchByReg');
const craw = require('./craw');
const utils = require('./utils');
const expo = {
    fetchFile,
    fetchBySelector,
    fetchByReg,
    craw
}

module.exports = { ...utils.convertFnWithLog(expo), utils }