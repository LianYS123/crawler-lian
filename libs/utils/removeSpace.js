//remove space for a string
module.exports = function removeSpace(text) {
    if (typeof text !== 'string') return text;
    return text ? text.replace(/\s+/g, '') : undefined;
}