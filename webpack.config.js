var path = require("path")
module.exports={
	mode:"production",
	entry:"./src/index.js",
	// 当我在库的时候引入过一个叫做loadsh的插件时，在业务代码也引入时会照成重复打包，所以使用externals时在这忽略打包文件
	externals:{
		loadsh:"loadsh"
	},
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"labrary.js",
		// 在全局设置一个叫做library的对象，方便在通过script标签的时候引入
		library:"library",
		// 设置在引入库的时候是可以同过 amd cmd esmodule方式引入,如果设置成window,或则this.的话也会出现全局变量	
		libraryTarget:"umd"

	}
}