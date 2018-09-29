//Entry point? Output?
const path = require("path"); // to access path.join

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        //run babel to run everytime it sees a .js file
        loader: "babel-loader",
        test: /\.js$/, //checks if files end with .js,
        exclude: /node_modules/ //don't mess with node_modules folder
      }
    ]
  },
  devtool: "cheap-module-eval-source-map", //maps errors to the source instead of bundle.js
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};

//console.log(path.join(__dirname, 'public')); // returns E:\Projects\VS_Code_Projects\React_Apps\indecision-app\public
//needs to be an absolute path. not relative, i.e. ../
