enum color {
	bright = "\x1B[1m", // 亮色
	grey = "\x1B[97m", // 灰色
	red = "\x1B[91m", // 红色
	green = "\x1B[92m", // 绿色
	yellow = "\x1B[93m", // 黄色
	blue = "\x1B[94m", // 蓝色
	magenta = "\x1B[35m", // 品红
	cyan = "\x1B[96m", // 青色
	white = "\x1B[37m", // 白色
	purple = "\x1B[95m", // 紫色
	// italic = "\x1B[3m", // 斜体
	// underline = "\x1B[4m", // 下划线
}

/**
 * 提示错误
 * @param msg
 */
const error = (msg: string) => {
	eval(`console.log("${color.red}", "${msg}")`);
};

/**
 * 提示成功
 * @param msg
 */
const success = (msg: string) => {
	eval(`console.log("${color.green}", "${msg}")`);
};

/**
 * 随机颜色打印
 * @param msg
 */
const random = (msg: string) => {
	const length = Object.keys(color).length - 1;
	const index = (Math.random() * length).toFixed(0);
	const key = Object.keys(color)[index];
	eval(`console.log("${color[key]}", "${msg}")`);
};

export default { error, success, random };
