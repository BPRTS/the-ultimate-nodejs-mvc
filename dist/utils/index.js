"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.formatDate = void 0;
const formatDate = (date, format) => {
    const options = {};
    if (format.includes('year'))
        options.year = 'numeric';
    if (format.includes('month'))
        options.month = 'long';
    if (format.includes('day'))
        options.day = 'numeric';
    return new Intl.DateTimeFormat('en-US', options).format(date);
};
exports.formatDate = formatDate;
const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=index.js.map