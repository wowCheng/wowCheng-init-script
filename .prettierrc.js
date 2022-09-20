module.exports = {
	printWidth: 80, // 行长
	tabWidth: 2, // 使用空格缩进的数量(空格时才有效)
	useTabs: true, // 使用tab缩进
	semi: true, // 行尾需要有分号
	singleQuote: false, // 使用单引号代替双引号
	quoteProps: "as-needed", // 对象的 key 仅在必要时用引号
	jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
	trailingComma: "all", // 末尾使用逗号
	bracketSpacing: true, // 大括号内的首尾需要空格 { foo: bar }
	bracketSameLine: false, // 标签的反尖括号是否换行(true不换  false换)
	arrowParens: "always", // 箭头函数，只有一个参数的时候，也需要括号
	rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
	rangeEnd: Infinity,
	requirePragma: false, // 是否是有文件开头有 @prettier 才进行格式化
	insertPragma: false, //文件顶部插入一个特殊@format标记，指定文件已使用 Prettier 格式化（与上一条一起使用最好）
	proseWrap: "preserve", // 使用默认的折行标准
	htmlWhitespaceSensitivity: "css", // 根据显示样式决定 html 要不要折行
	endOfLine: "auto", // 换行符风格
};
