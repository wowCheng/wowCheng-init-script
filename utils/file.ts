import * as path from "path";
import * as fs from "fs";

interface Filepath {
	code: 0 | 1;
	path?: string;
}

/**
 * 根据dir向上查找获取文件路径，文件名必须相对向上的文件相对路径
 * @param dir  __dirname 起始文件路径
 * @param fileName 文件名
 */
export const getFilePath = async (
	dir: string,
	fileName: string,
): Promise<Filepath> => {
	const exists = await fileAccess(path.resolve(dir, fileName));
	if (exists) {
		return {
			code: 0,
			path: path.resolve(dir, fileName),
		};
	} else {
		if (dir == path.resolve(process.cwd(), "../")) return { code: 1 };
		return getFilePath(path.resolve(dir, "../"), fileName);
	}
};

/**
 * 判断文件是否存在
 * @param file 文件路径
 * @returns
 */
export const fileAccess = async (file: string): Promise<boolean> => {
	return new Promise((res) => {
		fs.access(file, fs.constants.F_OK, (err) => {
			if (err) {
				res(false);
			} else {
				res(true);
			}
		});
	});
};
