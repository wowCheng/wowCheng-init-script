"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileAccess = exports.getFilePath = void 0;
const path = require("path");
const fs = require("fs");
const getFilePath = (dir, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield (0, exports.fileAccess)(path.resolve(dir, fileName));
    if (exists) {
        return {
            code: 0,
            path: path.resolve(dir, fileName),
        };
    }
    else {
        if (dir == path.resolve(process.cwd(), "../"))
            return { code: 1 };
        return (0, exports.getFilePath)(path.resolve(dir, "../"), fileName);
    }
});
exports.getFilePath = getFilePath;
const fileAccess = (file) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res) => {
        fs.access(file, fs.constants.F_OK, (err) => {
            if (err) {
                res(false);
            }
            else {
                res(true);
            }
        });
    });
});
exports.fileAccess = fileAccess;
