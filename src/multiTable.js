'use strict';

import Table from './core';
import FloatHead from './floatHead';
import ColResize from './colResize';

export default class MultiTable extends ColResize(FloatHead(Table)) {
	constructor($table, options) {
		super($table, options);

		this.play();
	}

	play() {
		if ( this.options.floatHead ) {
			this.initHead();
		}

		if ( this.options.colResize ) {
			this.initResize();
		}
	}
};