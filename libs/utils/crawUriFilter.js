module.exports = function crawUriFilter(uri, opts) {
    if (typeof uri === 'string') {
        return [{ uri, ...opts }]
    } else if (Array.isArray(uri)) {
        return uri.map(item => {
            if (typeof item === 'string') {
                return { uri: item, ...opts }
            }
            else {
                return { ...item, ...opts }
            }
        })
    }
    return uri;
};