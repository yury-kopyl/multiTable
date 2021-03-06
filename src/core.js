'use strict';

import * as CONST from './constants';

export default class Table {
	constructor($table, options) {
		this.$table = $table;
		this.ui = {
			wrapWidth:   0,
			wrapHeight:  0,
			tableWidth:  0,
			resizeWidth: 0,
			storePrefix: `${this.$table.attr(CONST.DATA_COLUMNS_ID)}_`
		};
		this.initConfig(options);

		this.$window = $(window);
		this.$wrap = undefined;
		this.$tableHeads = this.$table.find('> thead:first').find('tr:first').find('th:not(.kv-grid-hide)');

		this.init();
		this.changeInit = () => {
			this.$window.off('resize');
		};
	}

	initConfig(options) {
		let newOption = {
			floatHead: $.extend({}, Table.defaults.floatHead, options.floatHead),
			colResize: $.extend({}, Table.defaults.colResize, options.colResize)
		};

		this.options = $.extend({}, Table.defaults, newOption);

		let isElastic = this.options.store.get(`${this.ui.storePrefix}_isElastic`);

		this.options.colResize.isElastic = isElastic !== undefined ? isElastic : this.options.colResize.isElastic;
	}

	init() {
		if (!Math.ceil10) {
			let self = this;

			Math.ceil10 = function(value, exp) {
				return self.decimalAdjust('ceil', value, exp);
			};
		}

		if (!Math.floor10) {
			let self = this;

			Math.floor10 = function(value, exp) {
				return self.decimalAdjust('floor', value, exp);
			};
		}

		this.options.colResize.isElastic ? this.$table.removeClass('js-floatThead_w100') : this.$table.addClass('js-floatThead_w100');
		if ( this.$table.attr('data-width') ) {
			this.options.colResize.isElastic ? this.$table.parents('.table-responsive').removeClass('js-floatThead_w75') : this.$table.parents('.table-responsive').addClass('js-floatThead_w75');
		}

		this.wrapTable();
		this.setColumnsWidth();
		this.checkScroll();

		!this.options.colResize.isElastic ? this.$table.removeClass('js-floatThead_elastic') : this.$table.addClass('js-floatThead_elastic');
	}

	wrapTable() {
		/* Wrap table */
		this.$table.wrap(`<div class="${CONST.CLASS_WRAP}"/>`);

		this.$wrap          = this.$table.parent(`.${CONST.CLASS_WRAP}`);

		this.$table.wrap(`<div class="${CONST.CLASS_WRAP_TABLE}"/>`);

		this.$wrapTable		= this.$table.parent(`.${CONST.CLASS_WRAP_TABLE}`);
		this.ui.wrapWidth   = this.getWidth(this.$wrap);
		this.ui.wrapHeight  = this.getHeight(this.$wrap);
		this.ui.resizeWidth = this.ui.wrapWidth;
	}

	setColumnsWidth() {
		/* Get storage */
		let store = {};
		let isChangedCols = false;

		this.options.store.forEach((key, value) => {
			if ( key.match(this.ui.storePrefix) ) {
				let newKey = key.replace(this.ui.storePrefix, "");

				if ( newKey !== '_tableWidth' && newKey !== '_isElastic' ) {
					!this.$table.find('th[data-resizable-column-id="' + newKey + '"]').length ? isChangedCols = true : false;
				}

				store[key] = value;
			}
		});

		/* If storage not empty and storage length heads !== table length heads OR changed type of fixed */
		if ( (Object.keys(store).length - 2 !== this.$tableHeads.length || isChangedCols) ||
			(this.options.colResize.isElastic !== this.options.store.get(`${this.ui.storePrefix}_isElastic`)) ||
			(!this.options.store.get(`${this.ui.storePrefix}_tableWidth`)) ) {

			for( let key in store ) {
				if ( store.hasOwnProperty(key) && key.match(this.ui.storePrefix) ) {
					this.options.store.remove(key);
				}
			}

			store = {};
		}

		/* If was save storage */
		if ( Object.keys(store).length ) {
			/* Get width of column from storage and set it */
			this.$tableHeads.each((i, item) => {
				let $item = $(item);
				let width = this.options.store.get( this.ui.storePrefix + this.$tableHeads.eq(i).attr(CONST.DATA_COLUMN_ID) );

				$item.outerWidth(`${width}px`);
			});

			/* Set table width from storage */
			let tableWidth = this.options.store.get( this.ui.storePrefix + '_tableWidth');
			this.$wrapTable.outerWidth(`${tableWidth}px`);
			if ( this.options.colResize.isElastic ) {
				this.$table.outerWidth(`${tableWidth}px`);
			}
			this.ui.tableWidth = tableWidth;
		} else {
			/* Else table init first time */
			if ( this.options.colResize.isElastic ) {
				/*let $fixedCols			= this.$table.find('> thead:first').find('tr:first').find(`th[${CONST.DATA_WIDTH}]`);*/
				/*let countNotFixedHeads	= this.$tableHeads.length - $fixedCols.length;*/
				let headsSumWidth = 0;

				this.$tableHeads.each((i, item) => {
					let $item = $(item);
					let width = $item.is(`[${CONST.DATA_WIDTH}]`) ? +$item.attr(CONST.DATA_WIDTH) : this.getWidth($item);

					$item.data('width', width);
					headsSumWidth += width;
				});

				headsSumWidth = Math.floor10(headsSumWidth, -1);

				let remainder = this.ui.wrapWidth - headsSumWidth;
				if ( remainder >= 0 ) {
					headsSumWidth = this.ui.wrapWidth;
				}

				/*this.$tableHeads.each((i, item) => {
					let $item	 = $(item);
					let width	 = $item.data('width');
					let newWidth = remainder >= 0 && !$item.is(`[${CONST.DATA_WIDTH}]`) ? remainder / countNotFixedHeads + width : width;

					$item.outerWidth(`${newWidth}px`);
					this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(i).attr(CONST.DATA_COLUMN_ID), newWidth );
				});*/

				this.$tableHeads.each((i, item) => {
					let $item	 = $(item);
					let width	 = $item.data('width');

					$item.outerWidth(`${width}px`);
					this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(i).attr(CONST.DATA_COLUMN_ID), width );
				});

				if ( remainder >= 0 ) {
					let $lastItem = this.$tableHeads.eq(this.$tableHeads.length - 1);
					let lastItemWidth = $lastItem.data('width') + remainder;

					$lastItem.outerWidth(`${lastItemWidth}px`);
					this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(this.$tableHeads.length - 1).attr(CONST.DATA_COLUMN_ID), lastItemWidth );
				}

				this.$table.outerWidth(`${headsSumWidth}px`);
				this.$wrapTable.outerWidth(`${headsSumWidth}px`);
				this.ui.tableWidth = headsSumWidth;
				this.options.store.set( this.ui.storePrefix + '_tableWidth', headsSumWidth );
			} else {
				let $fixedCols			= this.$table.find('> thead:first').find('tr:first').find(`th[${CONST.DATA_WIDTH}]`);
				let countNotFixedHeads	= this.$tableHeads.length - $fixedCols.length;
				let headsSumWidth		= 0;

				$fixedCols.each((i, item) => {
					headsSumWidth += +$(item).attr(CONST.DATA_WIDTH);
				});

				headsSumWidth += countNotFixedHeads * this.options.colResize.minWidth;

				/* Если сумма ширины всех колонок больше чем ширина обёртки */
				if ( headsSumWidth > this.ui.wrapWidth ) {
					this.$tableHeads.each((i, item) => {
						let $item = $(item);
						let width = $item.is(`[${CONST.DATA_WIDTH}]`) ? +$item.attr(CONST.DATA_WIDTH) : this.options.colResize.minWidth;

						$item.outerWidth(`${width}px`);
						this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(i).attr(CONST.DATA_COLUMN_ID), width );
					});

					this.$wrapTable.outerWidth(`${headsSumWidth}px`);
					this.ui.tableWidth = headsSumWidth;
					this.options.store.set( this.ui.storePrefix + '_tableWidth', headsSumWidth );
				} else {
					let newHeadsSumWidth = this.ui.wrapWidth;
					let remainder = newHeadsSumWidth;

					$fixedCols.each((i, item) => {
						newHeadsSumWidth -= +$(item).attr(CONST.DATA_WIDTH);
					});

					this.$tableHeads.each((i, item) => {
						let $item = $(item);
						let width = $item.is(`[${CONST.DATA_WIDTH}]`) ? +$item.attr(CONST.DATA_WIDTH) : Math.floor(newHeadsSumWidth / countNotFixedHeads);
						remainder -= Math.floor(width);

						$item.outerWidth(`${width}px`);
						this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(i).attr(CONST.DATA_COLUMN_ID), width );
					});

					this.$wrapTable.outerWidth(`${this.ui.wrapWidth}px`);
					this.ui.tableWidth = this.ui.wrapWidth;
					this.options.store.set( this.ui.storePrefix + '_tableWidth', this.ui.wrapWidth );

					if ( remainder ) {
						let $item = this.$tableHeads.eq(Math.floor(this.$tableHeads.length / 2));
						let width = $item.outerWidth() + (remainder - 1);

						$item.outerWidth(`${width}px`);
						this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(Math.floor(this.$tableHeads.length / 2)).attr(CONST.DATA_COLUMN_ID), width );
					}
				}
			}

			this.options.store.set( this.ui.storePrefix + '_isElastic', this.options.colResize.isElastic );
		}
	}

	checkScroll() {
		let storeTableWidth = this.options.store.get( this.ui.storePrefix + '_tableWidth' );
		let remainder = this.ui.wrapWidth - storeTableWidth;

		if ( !this.options.colResize.isElastic && this.ui.wrapWidth !== storeTableWidth && remainder > 0 ) {
			let $item = this.$tableHeads.eq(Math.floor(this.$tableHeads.length / 2));
			let width = $item.outerWidth() + remainder;

			$item.outerWidth(`${width}px`);
			this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(Math.floor(this.$tableHeads.length / 2)).attr(CONST.DATA_COLUMN_ID), width );
			this.$wrapTable.outerWidth(`${storeTableWidth + remainder}px`);
			this.$table.outerWidth(`${storeTableWidth + remainder}px`);
			this.ui.tableWidth = storeTableWidth + remainder;
			this.options.store.set( this.ui.storePrefix + '_tableWidth', storeTableWidth + remainder );
		}
	}

	getWidth(element) {
		if ( element.nodeType === 1 ) {
			return Math.ceil10(element.getBoundingClientRect().width, -1);
		} else {
			return Math.ceil10(element[0].getBoundingClientRect().width, -1);
		}
	}

	getHeight(element) {
		if ( element.nodeType === 1 ) {
			return element.getBoundingClientRect().height;
		} else {
			return element[0].getBoundingClientRect().height;
		}
	}

	decimalAdjust(type, value, exp) {
		// Если степень не определена, либо равна нулю...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}

		value = +value;
		exp = +exp;
		// Если значение не является числом, либо степень не является целым числом...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}

		// Сдвиг разрядов
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));

		// Обратный сдвиг
		value = value.toString().split('e');

		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}
};

Table.defaults = {
	floatHead: {
		offsetTop: 0
	},
	colResize: {
		isElastic:  true,
		minWidth: 122,
		minFlexWidth: 55
	},
	store:     window.store,
	fn:        function () {
		return true;
	}
};