'use strict';

import * as CONST from './constants';

export default class Table {
	constructor($table, options) {
		this.initConfig(options);
		// Table.validateOptions(options);

		this.$window = $(window);
		this.$wrap = undefined;
		this.$table = $table;
		this.ui = {
			wrapWidth:   0,
			wrapHeight:  0,
			tableWidth:  0,
			resizeWidth: 0,
			storePrefix: `${this.$table.attr(CONST.DATA_COLUMNS_ID)}_`
		};
		this.$tableHeads = this.$table.find('> thead:first').find('tr:first').find('th');

		this.init();
		this.changeInit = () => {
			this.$window.off('resize');
			console.log('off resize');
		};
	}

	initConfig(options) {
		let newOption = {
			floatHead: $.extend({}, Table.defaults.floatHead, options.floatHead),
			colResize: $.extend({}, Table.defaults.colResize, options.colResize)
		};

		this.options = $.extend({}, Table.defaults, newOption);
	}

	static validateOptions(options) {
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
		if ( this.options.colResize.isFixed ) {
			this.$table.addClass('multiTable_fixed');
		}

		this.wrapTable();
		this.restoreColumnWidths();
	}

	wrapTable() {
		/* Wrap table */
		this.$table.wrap(`<div class="${CONST.CLASS_WRAP}"/>`);

		this.$wrap          = this.$table.parent(`.${CONST.CLASS_WRAP}`);
		this.ui.tableWidth  = parseFloat(this.$table.css('width'));
		this.ui.wrapHeight  = parseFloat(this.$wrap.css('height'));
		this.ui.wrapWidth   = parseFloat(this.$wrap.css('width'));
		this.ui.resizeWidth = this.ui.wrapWidth;
	}

	restoreColumnWidths() {
		/* Get storage */
		let store = {};
		this.options.store.forEach((key, value) => {
			if ( key.match(this.ui.storePrefix) ) {
				store[key] = value;
			}
		});

		/* If storage not empty and storage length heads !== table length heads OR changed type of fixed */
		if ( (Object.keys(store).length !== this.$tableHeads.length + 2 && this.options.store) ||
			(this.options.colResize.isFixed !== this.options.store.get(`${this.$table.attr(CONST.DATA_COLUMNS_ID)}__isFixed`)) ||
			(!this.options.colResize.isFixed && this.ui.tableWidth !== Math.round(this.options.store.get(`${this.$table.attr(CONST.DATA_COLUMNS_ID)}__tableWidth`))) ) {
			console.log(1);

			for( let key in store ) {
				if ( key.match(this.ui.storePrefix) ) {
					this.options.store.remove(key);
				}
			}

			store = {};
		}

		/* If was save storage */
		if ( Object.keys(store).length ) {
			console.log(2);
			/* Get width of column from storage and set it */
			this.$tableHeads.each((i, item) => {
				let $item = $(item);
				let width = this.options.store.get( this.ui.storePrefix + this.$tableHeads.eq(i).attr(CONST.DATA_COLUMN_ID) );

				$item.css('width', width);
			});

			/* Set table width from storage */
			let tableWidth = this.options.store.get( this.ui.storePrefix + '_tableWidth');
			this.$table.css('width', `${tableWidth}px`);
			this.ui.tableWidth = tableWidth;
		} else {
			console.log(3);
			/* Else table init first time */
			let restWidth     = this.ui.tableWidth;
			let newTableWidth = 0;
			let countNotFixedHeads = this.$tableHeads.length;

			this.$tableHeads.each((i, item) => {
				let $item = $(item);

				if ( $item.is(`[${CONST.DATA_WIDTH}]`) ) {
					restWidth -= $item.attr(CONST.DATA_WIDTH);
					countNotFixedHeads--;
				}
			});

			this.$tableHeads.each((i, item) => {
				let $item = $(item);
				let width = $item.is(`[${CONST.DATA_WIDTH}]`) ? `${$item.attr('data-width')}px` : this.options.colResize.isFixed ? $item.css('width') : restWidth / countNotFixedHeads < this.options.colResize.minWidth ? `${this.options.colResize.minWidth}px` : `${restWidth / countNotFixedHeads}px`;

				$item.css('width', width);
				newTableWidth += parseFloat(width);

				if ( this.$table.is(`[${CONST.DATA_COLUMNS_ID}]`) && this.options.store ) {
					this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(i).attr(CONST.DATA_COLUMN_ID), parseFloat(width) );
				}
			});

			this.options.store.set( this.ui.storePrefix + '_tableWidth', newTableWidth );
			this.options.store.set( this.ui.storePrefix + '_isFixed', this.options.colResize.isFixed );
			this.$table.css('width', `${newTableWidth}px`);
			this.ui.tableWidth = newTableWidth;
		}
	}
};

Table.defaults = {
	floatHead: {
		offsetTop: 0
	},
	colResize: {
		isFixed:  true,
		minWidth: 50
	},
	store:     window.store,
	string:    'test',
	object:    {},
	number:    100,
	fn:        function () {
		return true;
	}
};

Table.typeDefaults = {
	floatHead: 'object',
	colResize: 'boolean',
	string:    'string',
	object:    'object',
	number:    'number',
	fn:        'function',
	notNeedRestore: 'boolean'
};