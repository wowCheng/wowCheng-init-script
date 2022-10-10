import * as fs from "fs";
import { exec } from "child_process";
import { getFilePath } from "../utils/file";
import log from "../utils/log";

// 更改版本号
async function updateVersion() {
	const url = await getFilePath(__dirname, "package.json");
	if (url.code === 0) {
		const str_json = fs.readFileSync(url.path!, { encoding: "utf-8" });
		const str = JSON.parse(str_json);
		const newVersion = `${+str.version.split(".").join("") + 1}`
			.split("")
			.join(".");
		str.version = newVersion;
		const ws = fs.createWriteStream(url.path!, { encoding: "utf-8" });
		ws.write(JSON.stringify(str));
		exec("pnpm prettier --write package.json");
		log.random("😘 update package version!");
	}
}
updateVersion();
