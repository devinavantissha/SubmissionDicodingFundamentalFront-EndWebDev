const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
	module.exports = {
	   entry: "./src/app.js",
	   output: {
	       path: path.resolve(__dirname, "dist"),
	       filename: "bundle.js"
	   },
	   module: {
	       rules: [
	           {
	               test: /\.css$/,
	               use: [
	                   {
	                       loader: "style-loader"
	                   },
	                   {
	                       loader: "css-loader"
	                   }
	               ]
			   },
			   {
					test: /\.(png|jpe?g|jpg|gif)$/,
					use: [
						'file-loader',
					],
			   }
	       ]
	   },
	   plugins: [
	       new HtmlWebpackPlugin({
	           template: "./src/index.html",
	           filename: "index.html"
		   }),
		   new HtmlWebpackPlugin({
			template: "./src/biodata.html",
			filename: "biodata.html"
		}),
		new HtmlWebpackPlugin({
			template: "./src/misi.html",
			filename: "misi.html"
		})
	   ]
}
