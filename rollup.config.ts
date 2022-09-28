import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
	input: "./script/initPrettier.ts", //入口文件
	output: {
		file: "./dist/script/initPrettier.js", //打包后的存放文件
		format: "cjs", //输出格式
	},
	plugins: [
		resolve(),
		typescript({
			tsconfig: "./tsconfig-rollup.json",
		}),
	],
};
