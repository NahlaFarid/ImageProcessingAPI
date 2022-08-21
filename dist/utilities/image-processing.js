"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbnailsDirPath = exports.imagesDirPath = exports.getResizedImageName = exports.checkIfImageExistsInThumbnails = exports.checkIfImageExistsInImages = exports.createThumbnailsDirectoryIfnotExists = void 0;
var fs_1 = __importStar(require("fs"));
var thumbnailsDirPath = "./assets/thumbnails";
exports.thumbnailsDirPath = thumbnailsDirPath;
var imagesDirPath = "./assets/images";
exports.imagesDirPath = imagesDirPath;
var createThumbnailsDirectoryIfnotExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var found, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                found = false;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                //Check directory permission and also if directory is found
                return [4 /*yield*/, fs_1.promises.access(thumbnailsDirPath, fs_1.default.constants.R_OK | fs_1.default.constants.W_OK)];
            case 2:
                //Check directory permission and also if directory is found
                _b.sent();
                found = true;
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                // Directory not found
                try {
                    // Create directory if not found
                    fs_1.promises.mkdir(thumbnailsDirPath);
                    found = true;
                }
                catch (error) {
                    found = false;
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, found];
        }
    });
}); };
exports.createThumbnailsDirectoryIfnotExists = createThumbnailsDirectoryIfnotExists;
// Ckeck if an image with a specific name is exists or not
var checkIfImageExistsInImages = function (filename) { return __awaiter(void 0, void 0, void 0, function () {
    var found, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                found = false;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fs_1.promises.access(imagesDirPath + "/" + filename, fs_1.default.constants.R_OK)];
            case 2:
                _a.sent();
                found = true;
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                found = false;
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, found];
        }
    });
}); };
exports.checkIfImageExistsInImages = checkIfImageExistsInImages;
// Ckeck if a resized image with the specified width and height is exists in thumbnails or not
var checkIfImageExistsInThumbnails = function (resizedImageName) { return __awaiter(void 0, void 0, void 0, function () {
    var found, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                found = false;
                return [4 /*yield*/, createThumbnailsDirectoryIfnotExists()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, fs_1.promises.access(thumbnailsDirPath + "/" + resizedImageName, fs_1.default.constants.R_OK)];
            case 3:
                _a.sent();
                found = true;
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                found = false;
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/, found];
        }
    });
}); };
exports.checkIfImageExistsInThumbnails = checkIfImageExistsInThumbnails;
//https://stackoverflow.com/questions/10865347/node-js-get-file-extension
var getFileExtension = function (filename) {
    var i = filename.lastIndexOf(".");
    return i < 0 ? "" : filename.substring(i);
};
var getResizedImageName = function (filename, width, height) {
    var fileExtension = getFileExtension(filename);
    var filenameWithoutExtension = filename.replace(fileExtension, "");
    var newFileName = filenameWithoutExtension + "_" + width + "x" + height + fileExtension;
    return newFileName;
};
exports.getResizedImageName = getResizedImageName;
