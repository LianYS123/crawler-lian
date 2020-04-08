const createLinks = require('./createLinks');
const removeSpace = require('./removeSpace');
const isPromise = require('./isPromise');
const crawUriFilter = require('./crawUriFilter');
const convertFnWithLog = require('./convertFnWithLog');
const match = require('./match');
const notice = require('./notice');


module.exports = {
    createLinks,
    removeSpace,
    isPromise,
    crawUriFilter,
    convertFnWithLog,
    match,
    notice
}