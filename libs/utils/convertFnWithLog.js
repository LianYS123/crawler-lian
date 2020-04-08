const isPromise = require('./isPromise');

module.exports = function convertFnWithLog(expo) {
    const results = {};
    Object.keys(expo).forEach(key => {
        let fn = expo[key];
        let res = function (...args) {
            let pro = fn.apply(this, args);
            if (isPromise(pro)) {
                return pro.catch(error => {
                    // console.log(fn.name + " : " + error);
                    notice(error);
                    return error;
                })
            } else {
                return pro;
            }
        }
        results[key] = res;
    })
    return results;
};