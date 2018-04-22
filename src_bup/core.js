'use strict';

export default class Table {
	constructor($table) {
		this.$table = $table;

		this.init();
		this.change();
	}

	init() {
		console.log('class Table initiated');
		console.log(this.$table);
	}

	change() {
		setTimeout(() => {
			console.log(this.$test);
		}, 5000);
	}
}