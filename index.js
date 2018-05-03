const fs         = require("fs");
const browserify = require('browserify');
const babelify   = require('babelify');

browserify({ debug: true })
	.transform(babelify)
	.require("./src/index.js", { entry: true })
	.bundle()
	.on("error", function (err) { console.log("Error: " + err.message); })
	.pipe(fs.createWriteStream("../lightgate-dev/www/frontend/web/js/jquery-resizableColumns/jquery.resizableColumns.min.js"));
	// .pipe(fs.createWriteStream("../light-gate/assets/vendor/jquery-resizableColumns/jquery.resizableColumns.min.js"));
	// .pipe(fs.createWriteStream("./dist/jquery.resizableColumns.min.js"));