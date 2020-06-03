	const path = require("path");
	const CopyWebpackPlugin = require('copy-webpack-plugin');
	const merge = require("webpack-merge");
	const common = require("./webpack.common");
	 
	module.exports = merge(common, {
	   mode: "production",
	   module: {
	       rules: [
	           {
	               test: /\.js$/,
	               exclude: "/node_modules/",
	               use: [
	                   {
	                       loader: "babel-loader",
	                       options: {
	                           presets: ["@babel/preset-env"]
	                       }
	                   }
	               ]
			   }
	       ]
	   },
	   plugins:[
		   new CopyWebpackPlugin({
			   patterns:[{
				   from: path.resolve(__dirname, 'src/styles/image'),
				   to: path.resolve(__dirname, 'dist/src/styles/image')
			   }]
		   })
	   ]
	})
