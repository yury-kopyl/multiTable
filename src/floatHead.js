'use strict';

import * as CONST from './constants';

const FloatHead = FloatHead => class extends FloatHead {
	constructor($table, options) {
		super($table, options);

		this.$float = undefined;
	}

	initHead() {
		console.info('init class FloatHead');

		this.createFloat();
		this.wrapFloat();
		this.scrollFloatPage();
	}

	createFloat() {
		this.$table.before(`<table class="${CONST.CLASS_FLOAT_TABLE}${this.options.floatHead.tableClass ? ' ' + this.options.floatHead.tableClass : ''}"/>`);
		this.$float = this.$table.siblings(`.${CONST.CLASS_FLOAT_TABLE}`);
		this.$table.find('colgroup').clone().appendTo(this.$float);
		this.$table.find('thead').clone().appendTo(this.$float);
	}

	wrapFloat() {
		this.$float.wrap(`<div class="${CONST.CLASS_FLOAT}"${this.options.colResize.isFixed ? ` style="width:${this.getData('tableWidth')}px;"` : ''}/>`);
	}

	scrollFloatPage() {
		/* todo Позиция шапки при скроле страницы */
		/*this.$window.scroll(event => {
			console.log(
				this.$wrap.offset().top,
				this.$wrap.scrollTop()
			);
		});*/
	}
};

export default FloatHead;