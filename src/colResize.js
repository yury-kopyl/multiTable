'use strict';

import * as CONST from "./constants";

const ColResize = ColResize => class extends ColResize {
	constructor($table, options) {
		super($table, options);

		this.$resize = undefined;
	}

	initResize() {
		console.info('init class ColResize');

		this.createResize();
	}

	createResize() {
		this.$table.before(`<table class="${CONST.CLASS_RESIZE_TABLE}"/>`);
		this.$resize = this.$table.siblings(`.${CONST.CLASS_RESIZE_TABLE}`);
	}

	wrapResize() {
		this.$resize.wrap(`<div class="${CONST.CLASS_FLOAT}" style="width:${this.options.colResize.isFixed ? this.getData('tableWidth') : ''}px;"/>`);
	}
};

export default ColResize;