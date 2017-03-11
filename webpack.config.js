//引入webpack
var webpack = require('webpack');


module.exports={
	devtool:'source-map',
	entry:'./index.js',
	output:{
		path:__dirname+'/public',
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		},{
			test:/\.html$/,
			loader:'html-loader'
		},{
			test:/\.vue$/,
			loader:'vue-loader'
		}]
	},
	resolve:{
		alias:{
			vue:'vue/dist/vue.js',//vue-template-compiler
			'vue-router': 'vue-router/dist/vue-router.common.js'
		}
	},
	devServer:{
		contentBase:'./public',
		inline:true,
		port:1452
	}
}