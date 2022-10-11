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
const fs = require("fs");
const child_process_1 = require("child_process");
const file_1 = require("../utils/file");
const log_1 = require("../utils/log");
function updateVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = yield (0, file_1.getFilePath)(__dirname, "package.json");
        if (url.code === 0) {
            const str_json = fs.readFileSync(url.path, { encoding: "utf-8" });
            const str = JSON.parse(str_json);
            const newVersion = `${+str.version.split(".").join("") + 1}`
                .split("")
                .join(".");
            str.version = newVersion;
            const ws = fs.createWriteStream(url.path, { encoding: "utf-8" });
            ws.write(JSON.stringify(str));
            (0, child_process_1.exec)("pnpm prettier --write package.json");
            log_1.default.random("😘 update package version!");
            (0, child_process_1.exec)("git add .");
            (0, child_process_1.exec)("git add commit -m 'doc(version): update version 😈'");
        }
    });
}
updateVersion();
