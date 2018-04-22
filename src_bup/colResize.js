'use strict';

import Table from './core';

export default class ColResize extends Table {
	constructor($table) {
		super($table);

		this.initResize();
	}

	initResize() {
		console.log('class colResize initiated');
		console.log(this.$table);
	}
}