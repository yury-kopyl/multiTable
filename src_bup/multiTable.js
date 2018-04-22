'use strict';

import Table from './core';
import FloatHead from './floatHead';
import ColResize from './colResize';

export default class MultiTable extends Table {
	constructor($table) {
		super($table);
		Object.assign(this, new FloatHead);
		Object.assign(this, new ColResize);

		MultiTable.play();
	}

	static play() {
		console.log('class MultiTable initiated');
	}
};