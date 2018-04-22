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
		this.wrapResize();
	}

	createResize() {
		this.$table.before(`<div class="${CONST.CLASS_RESIZE_TABLE}"/>`);
		this.$resize = this.$table.siblings(`.${CONST.CLASS_RESIZE_TABLE}`);

		this.$tableCols.each((i, item) => {
			if ( (this.options.colResize.isFixed) || (!this.options.colResize.isFixed && i !== this.$tableCols.length - 1) ) {
				this.$resize.append(`<div class="${CONST.CLASS_RESIZE_HANDLE}" style="left:${item.offsetLeft + item.offsetWidth}px;height:${this.getData('tableHeight')}px"/>`);
			}
		});
	}

	wrapResize() {
		this.$resize.wrap(`<div class="${CONST.CLASS_RESIZE}" style="width:${this.options.colResize.isFixed ? this.getData('tableWidth') : ''}px;"/>`);
	}
};

export default ColResize;