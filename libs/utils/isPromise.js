//isPromise
module.exports = function isPromise(obj) {
    return typeof obj === 'object' && typeof obj.then === 'function';
};