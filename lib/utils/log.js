"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color;
(function (color) {
    color["bright"] = "\u001B[1m";
    color["grey"] = "\u001B[97m";
    color["red"] = "\u001B[91m";
    color["green"] = "\u001B[92m";
    color["yellow"] = "\u001B[93m";
    color["blue"] = "\u001B[94m";
    color["magenta"] = "\u001B[35m";
    color["cyan"] = "\u001B[96m";
    color["white"] = "\u001B[37m";
    color["purple"] = "\u001B[95m";
})(color || (color = {}));
const error = (msg) => {
    eval(`console.log("${color.red}", "${msg}")`);
};
const success = (msg) => {
    eval(`console.log("${color.green}", "${msg}")`);
};
const random = (msg) => {
    const length = Object.keys(color).length - 1;
    const index = (Math.random() * length).toFixed(0);
    const key = Object.keys(color)[index];
    eval(`console.log("${color[key]}", "${msg}")`);
};
exports.default = { error, success, random };
