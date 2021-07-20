"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_JSON = exports.get_data_from_worker = exports.get_XML2JSON = void 0;
var convert = __importStar(require("xml-js"));
var request_1 = __importDefault(require("request"));
var worker_threads_1 = require("worker_threads");
var get_XML2JSON = function (url) {
    return new Promise(function (resolve, reject) {
        request_1.default.get(url, function (err, res, body) {
            if (err) {
                console.log("err => " + err);
            }
            else {
                if (res.statusCode == 200) {
                    var JSON_Data = JSON.parse(convert.xml2json(body, { compact: true, spaces: 4 }));
                    resolve(JSON_Data);
                }
            }
        });
    });
}, get_data_from_worker = function (dir) {
    return new Promise(function (resolve, reject) {
        var worker = new worker_threads_1.Worker(dir);
        worker.on("message", function (data) {
            resolve(data);
            console.log("Information has been updated : ( " + new Date() + " )");
        });
    });
}, get_JSON = function (URL) {
    return new Promise(function (resolve, reject) {
        request_1.default(URL, function (err, res, body) {
            var result = !err && res.statusCode == 200 ? JSON.parse(body) : err;
            resolve(result);
        });
    });
};
exports.get_XML2JSON = get_XML2JSON, exports.get_data_from_worker = get_data_from_worker, exports.get_JSON = get_JSON;
//# sourceMappingURL=get-external-data.js.map