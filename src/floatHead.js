import * as CONST from './constants';

export default class floatHead {
	constructor($table, options) {
		this.init();

		this.options = $.extend({}, floatHead.defaults, options);
		this.$table = $table;

		this.createWrapper();
	}

	init() {
		console.log('Init!');
	}

	createWrapper() {
		this.$table.wrap(`<div class="${CONST.CLASS_TABLE_WRAPPER}"/>`);
		this.$table.before(`<table class="${CONST.CLASS_HEAD} table" style="width:${this.$table.outerWidth()}px;"></table>`);
		this.$table.find('thead').clone().appendTo(`.${CONST.CLASS_HEAD}`);
	};
}

floatHead.defaults = {

};