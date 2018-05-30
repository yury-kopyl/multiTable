'use strict';

import * as CONST from './constants';

const FloatHead = FloatHead => class extends FloatHead {
	constructor($table, options) {
		super($table, options);

		this.$float = undefined;
		this.$floatWrap = undefined;
	}

	initHead() {
		this.createFloat();
		this.wrapFloat();
		this.scrollFloatPage();
	}

	createFloat() {
		this.$wrapTable.before(`<table class="${CONST.CLASS_FLOAT_TABLE + (this.options.floatHead.tableClass ? ' ' + this.options.floatHead.tableClass : '')}"/>`);
		this.$float = this.$wrapTable.siblings(`.${CONST.CLASS_FLOAT_TABLE}`);

		this.$table.find('> thead').clone().appendTo(this.$float);

		this.$floatHeads = this.$float.find('> thead:first').find('tr:first-child').find('th');
	}

	wrapFloat() {
		this.$float.wrap(`<div class="${CONST.CLASS_FLOAT}"/>`);

		this.$floatWrap = this.$float.parent(`.${CONST.CLASS_FLOAT}`);
	}

	changeColWidth(index, currentWidth, nextWidth) {
		this.$floatHeads.eq(index).css('width', currentWidth);
		this.$floatHeads.eq(index + 1).css('width', nextWidth);
	}

	scrollFloatPage() {
		this.$window.scroll(() => {
			this.floatingHead();
		});
	}

	floatingHead() {
		let offsetTop;

		if ( typeof this.options.floatHead.offsetTop === 'string' ) {
			offsetTop = $(this.options.floatHead.offsetTop).outerHeight();
		} else {
			offsetTop = this.options.floatHead.offsetTop;
		}

		if ( this.$table.get(0).getBoundingClientRect().top < 0 + offsetTop && this.$table.get(0).getBoundingClientRect().top + this.ui.wrapHeight - (this.$float.outerHeight() * 2) > 0 ) {
			this.$floatWrap.css('top', `${-this.$table.get(0).getBoundingClientRect().top + offsetTop}px`);
		} else {
			this.$floatWrap.css('top', `0px`);
		}
	}
};

export default FloatHead;