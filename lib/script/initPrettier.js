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
exports.init_prettier_config = void 0;
const fs = require("fs");
const path = require("path");
const log_1 = require("../utils/log");
const file_1 = require("../utils/file");
function init_prettier_config() {
    return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, file_1.getFilePath)(__dirname, "./config/.prettierrc.js");
        if (file.code == 0) {
            const from = path.resolve(file.path);
            const to = path.resolve(process.cwd(), "./.prettierrc.js");
            const rs = fs.createReadStream(from, { encoding: "utf-8" });
            const ws = fs.createWriteStream(to, { encoding: "utf-8" });
            ws.on("close", () => {
                log_1.default.random("🎃 .prettierrc.js init over~");
                res(true);
            });
            rs.on("error", () => {
                log_1.default.error("😭 .prettierrc.js init Error!");
                rej(false);
            });
            ws.on("error", () => {
                log_1.default.error("😭 .prettierrc.js init Error!");
                rej(false);
            });
            rs.pipe(ws);
        }
        else {
            log_1.default.error(`😓 i did't find /config/.prettierrc.js file!`);
        }
    }));
}
exports.init_prettier_config = init_prettier_config;
