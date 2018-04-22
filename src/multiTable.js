'use strict';

import Table from './core';
import FloatHead from './floatHead';
import ColResize from './colResize';

export default class MultiTable extends ColResize(FloatHead(Table)) {
	constructor($table, options) {
		super($table, options);

		this.initResize();
		this.initHead();
		this.play();
	}

	play() {
		console.info('init class MultiTable');
		// console.log(this);
	}
};