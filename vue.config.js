let api="http://novel.juhe.im/book-info/"



module.exports = {
	configureWebpack: {
		devServer:{
			
     	proxy: {
			"/api": {
				target: 'http://novel.juhe.im',
				pathRewrite: {"^/api": ""},
				changeOrigin:true
			}
			
		}
		}


	}
}