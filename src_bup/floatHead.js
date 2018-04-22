'use strict';

import Table from './core';

export default class FloatHead extends Table {
	constructor($table) {
		super($table);

		this.initHead();
	}

	initHead() {
		console.log('class FloatHead initiated');
		console.log(this.$table);
	}
}