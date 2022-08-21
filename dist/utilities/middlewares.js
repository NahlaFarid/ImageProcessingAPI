"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerQueryStringKeys = void 0;
//https://stackoverflow.com/questions/15521876/nodejs-express-is-it-possible-to-have-case-insensitive-querystring
var lowerQueryStringKeys = function (req, res, next) {
    for (var key in req.query) {
        req.query[key.toLowerCase()] = req.query[key];
    }
    next();
};
exports.lowerQueryStringKeys = lowerQueryStringKeys;
