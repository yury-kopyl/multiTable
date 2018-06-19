'use strict';

import * as CONST from "./constants";
import {DATA_API} from "./constants";

const ColResize = ColResize => class extends ColResize {
	constructor($table, options) {
		super($table, options);

		this.$resize = undefined;
		this.$resizeHandles = undefined;
		this.operation = {};
		this.$ownerDocument = $($table[0].ownerDocument);
	}

	initResize() {
		this.createResize();
		this.wrapResize();
		this.onPointerHover();
		this.onPointerLeave();
		this.onPointerDown();
		this.onWindowResize();
	}

	unbindResize() {
		this.$resizeHandles.off('mouseenter');
		this.$resizeHandles.off('mouseleave');
		this.$resizeHandles.off('mousedown touchstart');
		this.$window.off('resize');
	}

	createResize() {
		if ( this.options.floatHead ) {
			this.$floatWrap.css('width', `${this.ui.tableWidth}px`);
		}

		this.$wrapTable.before(`<div class="${CONST.CLASS_RESIZE_TABLE}"${this.options.colResize.isElastic ? ` style="width:${this.ui.tableWidth}px"` : ''}/>`);
		this.$resize = this.$wrapTable.siblings(`.${CONST.CLASS_RESIZE_TABLE}`);

		this.$tableHeads.each((i, item) => {
			let $item 	 = $(item);
			let left  	 = item.offsetLeft + item.offsetWidth;
			let noresize = $item.attr('data-noresize');

			if ( (!this.options.colResize.isElastic && i !== this.$tableHeads.length - 1) || this.options.colResize.isElastic ) {
				this.$resize.append(`<div class="${CONST.CLASS_RESIZE_HANDLE}" style="left:${left}px;"${noresize === '' ? ' ' + CONST.DATA_NORESIZE : ''}/>`);
			}
		});

		this.$resizeHandles = this.$resize.find(`.${CONST.CLASS_RESIZE_HANDLE}`);
	}

	wrapResize() {
		this.$resize.wrap(`<div class="${CONST.CLASS_RESIZE}"/>`);

		this.$resizeWrap = this.$resize.parent(`.${CONST.CLASS_RESIZE}`);
	}

	onPointerHover() {
		this.$resizeHandles.on('mouseenter', event => {
			let $currentGrip = $(event.currentTarget);

			if( $currentGrip.is('.hover') ) {
				return;
			}

			let timeout = setTimeout(function () {
				if( $currentGrip.is(':hover') ) {
					$currentGrip.addClass('hover');
				}

				clearTimeout( timeout );
			}, 300);
		});
	}

	onPointerLeave() {
		this.$resizeHandles.on('mouseleave', event => {
			let $currentGrip = $(event.currentTarget);

			if( !$currentGrip.is('.hover') ) {
				return;
			}

			$currentGrip.removeClass('hover');
		});
	}

	onPointerDown() {
		this.$resizeHandles.on('mousedown touchstart', event => {
			// Only applies to left-click dragging
			if(event.which !== 1 || $(event.currentTarget).is('[data-noresize]')) {
				return;
			}

			this.$wrap.addClass(CONST.CLASS_WRAP_RESIZING);

			let $currentHandle = $(event.currentTarget);
			let currentIndex = $currentHandle.index();

			this.operation = {
				$currentHandle:   $currentHandle,
				currentStartLeft: parseInt($currentHandle.css('left')),
				$currentColumn:   this.$tableHeads.eq(currentIndex),
				currentIndex:	  currentIndex,
				$nextColumn:      this.$tableHeads.eq(currentIndex + 1),
				nextIndex:	      currentIndex + 1,
				startX:           this.getPointerX(event)
			};

			this.onPointerMove();
			this.onPointerUp();
		});
	}

	onPointerMove() {
		this.$ownerDocument.on('mousemove touchmove', event => {
			if( !this.operation ) {
				return;
			}

			let difference = this.getPointerX(event) - this.operation.startX;
			if( difference === 0 ) {
				return;
			}

			if ( (this.operation.$currentColumn.attr('data-width') && difference < this.operation.$currentColumn.attr('data-width') - this.operation.$currentColumn.outerWidth() && difference < 0) ||
				(this.operation.$nextColumn.attr('data-width') && difference > this.operation.$nextColumn.outerWidth() - this.operation.$nextColumn.attr('data-width') && difference > 0) ||
				(!this.operation.$currentColumn.attr('data-width') && difference < this.options.colResize.minWidth - this.operation.$currentColumn.outerWidth() && difference < 0) ||
				(this.operation.$nextColumn.length && !this.operation.$nextColumn.attr('data-width') && difference > this.operation.$nextColumn.outerWidth() - this.options.colResize.minWidth && difference > 0) ) {
				return;
			}

			if ( this.operation.currentIndex + 1 === this.$resizeHandles.length && difference > 0 ) {
				this.$wrap.animate({scrollLeft: this.ui.wrapWidth + difference}, 800);
			}

			this.operation.diffrence = difference;
			let left = this.operation.currentStartLeft + difference;
			this.operation.$currentHandle.css('left', `${left}px` );
		});
	}

	onPointerUp() {
		this.$ownerDocument.on('mouseup', () => {
			if( !this.operation ) {
				return;
			}

			if ( this.operation.diffrence ) {
				/* Get new current and next col width */
				let curWidth = this.operation.$currentColumn.outerWidth() + this.operation.diffrence;
				let nextWidth = this.operation.$nextColumn.outerWidth() - this.operation.diffrence;

				/* Change current and next column width */
				this.operation.$currentColumn.css('width', `${curWidth}px`);
				this.operation.$nextColumn.css('width', `${nextWidth}px`);

				/* Change width on floatHead class */
				if ( this.options.floatHead ) {
					this.changeColWidth(this.operation.currentIndex, curWidth, nextWidth);
				}

				/* If last handler move behind table */
				if ( this.options.colResize.isElastic && !this.operation.$nextColumn.length ) {
					let newWidth = this.ui.tableWidth + this.operation.diffrence;

					this.$floatWrap.outerWidth(`${newWidth}px`);
					this.$wrapTable.outerWidth(`${newWidth}px`);
					this.$resize.outerWidth(`${newWidth}px`);

					this.ui.tableWidth = newWidth;

					if ( this.$table.is(`[${CONST.DATA_COLUMNS_ID}]`) && this.options.store ) {
						this.options.store.set( this.ui.storePrefix + '_tableWidth', newWidth );
					}
				}

				/* Save width in store */
				if ( this.$table.is(`[${CONST.DATA_COLUMNS_ID}]`) && this.options.store ) {
					this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(this.operation.currentIndex).attr(CONST.DATA_COLUMN_ID), curWidth );
					if ( this.operation.$nextColumn.length ) {
						this.options.store.set( this.ui.storePrefix + this.$tableHeads.eq(this.operation.nextIndex).attr(CONST.DATA_COLUMN_ID), nextWidth );
					}
				}
			}

			/* Remove event listener after mouse up */
			this.$ownerDocument.off('mouseup touchend mousemove touchmove');
			this.operation = null;
			this.$wrap.removeClass(CONST.CLASS_WRAP_RESIZING);
		});
	}

	onWindowResize() {
		this.$window.on('resize', () => {
			let resizeWidth = this.$wrap.outerWidth();

			if ( this.ui.resizeWidth !== resizeWidth || this.options.colResize.isElastic !== this.options.store.get(`${this.ui.storePrefix}_isElastic`) ) {
				this.options.store.set( this.ui.storePrefix + '_tableWidth', 0 );
				this.unbindResize();
				this.$resizeWrap.remove();
				this.$floatWrap.remove();
				this.$table.unwrap();
				this.$table.unwrap();
				this.$table.removeClass('js-floatThead_w100');
				this.$table.removeClass('js-floatThead_elastic');
				this.$table.removeAttr('style');
				this.$wrapTable.removeAttr('style');
				this.$tableHeads.removeAttr('style');
				this.init();
				this.initHead();
				this.initResize();
				this.ui.resizeWidth = resizeWidth;
				this.floatingHead();
			}
		});
	}

	getPointerX(event) {
		if (event.type.indexOf('touch') === 0) {
			return (event.originalEvent.touches[0] || event.originalEvent.changedTouches[0]).pageX;
		}
		return event.pageX;
	}
};

export default ColResize;