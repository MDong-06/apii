const { errorHandler } = require("../utils");

exports.mui = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../mong.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"mhieu","data":`${link}`});
};