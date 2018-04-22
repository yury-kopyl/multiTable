'use strict';

import * as CONST from './constants';

export default class Table {
	constructor($table, options) {
		Table.validateOptions(options);

		this.options = $.extend({}, Table.defaults, options);
		this.$window = $(window);
		this.$wrap = undefined;
		this.$table = $table;
		this.$tableHeads = this.$table.find('thead').find('tr:last-child').find('th');
		this.$tableCols = undefined;

		this.init();
	}

	static validateOptions(options) {
		if ( !options.colResize && !options.floatHead ) {
			throw new Error(`Set any widget options(colResize/floatHead)`);
		}

		for(let key in options) {
			if ( options.hasOwnProperty(key) && !(Table.defaults).hasOwnProperty(key) ) {
				throw new Error(`option "${key}" does not exist`);
			}

			if ( options.hasOwnProperty(key) && typeof options[key] !== Table.typeDefaults[key] ) {
				throw new Error(`option "${key}" haven't correct type: expected => ${typeof options[key]}, actual => ${Table.typeDefaults[key]}`);
			}
		}
	}

	init() {
		console.info('init class Table');
		this.$table.data('ui', {});

		if ( this.options.colResize.isFixed ) {
			this.$table.addClass('multiTable_fixed');
			this.$table.data('ui', this.setData( 'tableWidth', this.$table.outerWidth() ));
		}

		this.wrapTable();
		this.createCols();
	}

	wrapTable() {
		this.$table.wrap(`<div class="${CONST.CLASS_WRAP}"/>`);
		this.$wrap = this.$table.parent(`.${CONST.CLASS_WRAP}`);

		this.$table.data('ui', this.setData( 'wrapWidth', this.$table.parent(`.${CONST.CLASS_WRAP}`).outerWidth() ));
	}

	createCols() {
		if ( !this.$table.find('col').length ) {
			let $colgroup = $('<colgroup/>');

			for ( let i = 0; i < this.$tableHeads.length; i++ ) {
				$colgroup.append(`<col class="${CONST.CLASS_TABLE_COL}"/>`);
			}

			this.$table.prepend($colgroup);
		}

		this.$tableCols = this.$table.find('col').addClass(CONST.CLASS_TABLE_COL);
	}

	setData(key, value) {
		return $.extend(this.$table.data('ui'), {[key]: value});
	}

	getData(key) {
		let data = this.$table.data('ui');

		if ( key ) {
			return data[key];
		}

		return data;
	}
};

Table.defaults = {
	floatHead: {
		tableClass: 'table'
	},
	colResize: false,
	string:    'test',
	object:    {},
	number:    100,
	fn:        function () {
		return true;
	}
};

Table.typeDefaults = {
	floatHead: 'object',
	colResize: 'object',
	string:    'string',
	object:    'object',
	number:    'number',
	fn:        'function'
};