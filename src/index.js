import colResize from './colResize';
import floatHead from './floatHead';
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
				api = new floatHead($table, optionsOrMethod);
				$table.data(DATA_API, api);
			} else if (typeof optionsOrMethod === 'string') {
				return api[optionsOrMethod](...args);
			}
		});
	};

	$.multiTable = floatHead;
})($);