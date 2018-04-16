const fs         = require("fs");
const browserify = require('browserify');
const babelify   = require('babelify');

browserify({ debug: true })
	.transform(babelify)
	.require("./src/index.js", { entry: true })
	.bundle()
	.on("error", function (err) { console.log("Error: " + err.message); })
	.pipe(fs.createWriteStream("./dist/jquery.multiTable.js"));