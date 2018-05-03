import MultiTable from './multiTable';
import {DATA_API} from './constants';

($ => {
	if (!$) {
		throw new Error(`$ is undefined`);
	}
	$.fn.multiTable = function (optionsOrMethod, ...args) {
		return this.each(function () {
			let $table = $(this);

			let api = $table.data(DATA_API);

			if (!api) {
				api = new MultiTable($table, optionsOrMethod);
				$table.data(DATA_API, api);
			} else if (typeof optionsOrMethod === 'string') {
				console.log(optionsOrMethod);

				return api[optionsOrMethod](...args);
			}
		});
	};

	$.multiTable = MultiTable;
})($);