"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("./utilities/middlewares");
var image_1 = __importDefault(require("./routes/image"));
var app = (0, express_1.default)();
var port = 3000;
app.use("/api/image", middlewares_1.lowerQueryStringKeys, image_1.default);
app.listen(port, function () {
    console.log("Listening to port ".concat(port, " :"));
});
exports.default = app;
