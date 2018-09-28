//Entry point? Output?
const path = require("path"); // to access path.join

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};

//console.log(path.join(__dirname, 'public')); // returns E:\Projects\VS_Code_Projects\React_Apps\indecision-app\public
//needs to be an absolute path. not relative, i.e. ../
