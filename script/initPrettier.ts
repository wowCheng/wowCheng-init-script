import * as fs from "fs";
import * as path from "path";
import log from "../utils/log";
import { getFilePath } from "../utils/file";

// 初始化prettier样式配置
export function init_prettier_config(): Promise<Boolean> {
	return new Promise(async (res, rej) => {
		const file = await getFilePath(__dirname, "./config/.prettierrc.js");
		if (file.code == 0) {
			const from = path.resolve(file.path!);
			const to = path.resolve(process.cwd(), "./.prettierrc.js");
			const rs = fs.createReadStream(from, { encoding: "utf-8" }); // 读
			const ws = fs.createWriteStream(to, { encoding: "utf-8" }); // 写
			ws.on("close", () => {
				log.random("🎃 .prettierrc.js init over~");
				res(true);
			});
			rs.on("error", () => {
				log.error("😭 .prettierrc.js init Error!");
				rej(false);
			});
			ws.on("error", () => {
				log.error("😭 .prettierrc.js init Error!");
				rej(false);
			});
			rs.pipe(ws);
		} else {
			log.error(`😓 i did't find /config/.prettierrc.js file!`);
		}
	});
}
