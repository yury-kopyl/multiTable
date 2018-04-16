(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colResize = function () {
	function colResize() {
		_classCallCheck(this, colResize);

		this.init();
	}

	_createClass(colResize, [{
		key: 'init',
		value: function init() {
			console.log('Init!');
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			console.log('Destroy!');
		}
	}]);

	return colResize;
}();

exports.default = colResize;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATA_API = exports.DATA_API = 'multiTable';
var DATA_COLUMNS_ID = exports.DATA_COLUMNS_ID = 'resizable-columns-id';
var DATA_COLUMN_ID = exports.DATA_COLUMN_ID = 'resizable-column-id';
var DATA_TH = exports.DATA_TH = 'th';

var CLASS_TABLE_WRAPPER = exports.CLASS_TABLE_WRAPPER = 'mt-wrapper';
var CLASS_TABLE_RESIZING = exports.CLASS_TABLE_RESIZING = 'rc-table-resizing';
var CLASS_COLUMN_RESIZING = exports.CLASS_COLUMN_RESIZING = 'rc-column-resizing';
var CLASS_HEAD = exports.CLASS_HEAD = 'mt-head';
var CLASS_HANDLE = exports.CLASS_HANDLE = 'mt-handle';
var CLASS_HANDLE_CONTAINER = exports.CLASS_HANDLE_CONTAINER = 'mt-handle-container';

var EVENT_RESIZE_START = exports.EVENT_RESIZE_START = 'column:resize:start';
var EVENT_RESIZE = exports.EVENT_RESIZE = 'column:resize';
var EVENT_RESIZE_STOP = exports.EVENT_RESIZE_STOP = 'column:resize:stop';

var SELECTOR_TH = exports.SELECTOR_TH = 'tr:first > th:visible';
var SELECTOR_TD = exports.SELECTOR_TD = 'tr:first > td:visible';
var SELECTOR_UNRESIZABLE = exports.SELECTOR_UNRESIZABLE = '[data-noresize]';

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var CONST = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var floatHead = function () {
	function floatHead($table, options) {
		_classCallCheck(this, floatHead);

		this.init();

		this.options = $.extend({}, floatHead.defaults, options);
		this.$table = $table;

		this.createWrapper();
	}

	_createClass(floatHead, [{
		key: 'init',
		value: function init() {
			console.log('Init!');
		}
	}, {
		key: 'createWrapper',
		value: function createWrapper() {
			this.$table.wrap('<div class="' + CONST.CLASS_TABLE_WRAPPER + '"/>');
			this.$table.before('<table class="' + CONST.CLASS_HEAD + ' table" style="width:' + this.$table.outerWidth() + 'px;"></table>');
			this.$table.find('thead').clone().appendTo('.' + CONST.CLASS_HEAD);
		}
	}]);

	return floatHead;
}();

exports.default = floatHead;


floatHead.defaults = {};

},{"./constants":2}],4:[function(require,module,exports){
'use strict';

var _colResize = require('./colResize');

var _colResize2 = _interopRequireDefault(_colResize);

var _floatHead = require('./floatHead');

var _floatHead2 = _interopRequireDefault(_floatHead);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
	if (!$) {
		throw new Error('$ is undefined');
	}
	$.fn.multiTable = function (optionsOrMethod) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return this.each(function () {
			var $table = $(this);

			var api = $table.data(_constants.DATA_API);

			if (!api) {
				api = new _floatHead2.default($table, optionsOrMethod);
				$table.data(_constants.DATA_API, api);
			} else if (typeof optionsOrMethod === 'string') {
				var _api;

				return (_api = api)[optionsOrMethod].apply(_api, args);
			}
		});
	};

	$.multiTable = _floatHead2.default;
})($);

},{"./colResize":1,"./constants":2,"./floatHead":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29sUmVzaXplLmpzIiwic3JjL2NvbnN0YW50cy5qcyIsInNyYy9mbG9hdEhlYWQuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQXFCLFM7QUFDcEIsc0JBQWM7QUFBQTs7QUFDYixPQUFLLElBQUw7QUFDQTs7Ozt5QkFFTTtBQUNOLFdBQVEsR0FBUixDQUFZLE9BQVo7QUFDQTs7OzRCQUVTO0FBQ1QsV0FBUSxHQUFSLENBQVksVUFBWjtBQUNBOzs7Ozs7a0JBWG1CLFM7Ozs7Ozs7O0FDQWQsSUFBTSw4QkFBVyxZQUFqQjtBQUNBLElBQU0sNENBQWtCLHNCQUF4QjtBQUNBLElBQU0sMENBQWlCLHFCQUF2QjtBQUNBLElBQU0sNEJBQVUsSUFBaEI7O0FBRUEsSUFBTSxvREFBc0IsWUFBNUI7QUFDQSxJQUFNLHNEQUF1QixtQkFBN0I7QUFDQSxJQUFNLHdEQUF3QixvQkFBOUI7QUFDQSxJQUFNLGtDQUFhLFNBQW5CO0FBQ0EsSUFBTSxzQ0FBZSxXQUFyQjtBQUNBLElBQU0sMERBQXlCLHFCQUEvQjs7QUFFQSxJQUFNLGtEQUFxQixxQkFBM0I7QUFDQSxJQUFNLHNDQUFlLGVBQXJCO0FBQ0EsSUFBTSxnREFBb0Isb0JBQTFCOztBQUVBLElBQU0sb0NBQWMsdUJBQXBCO0FBQ0EsSUFBTSxvQ0FBYyx1QkFBcEI7QUFDQSxJQUFNLHVFQUFOOzs7Ozs7Ozs7OztBQ2xCUDs7SUFBWSxLOzs7Ozs7SUFFUyxTO0FBQ3BCLG9CQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkI7QUFBQTs7QUFDNUIsT0FBSyxJQUFMOztBQUVBLE9BQUssT0FBTCxHQUFlLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBYSxVQUFVLFFBQXZCLEVBQWlDLE9BQWpDLENBQWY7QUFDQSxPQUFLLE1BQUwsR0FBYyxNQUFkOztBQUVBLE9BQUssYUFBTDtBQUNBOzs7O3lCQUVNO0FBQ04sV0FBUSxHQUFSLENBQVksT0FBWjtBQUNBOzs7a0NBRWU7QUFDZixRQUFLLE1BQUwsQ0FBWSxJQUFaLGtCQUFnQyxNQUFNLG1CQUF0QztBQUNBLFFBQUssTUFBTCxDQUFZLE1BQVosb0JBQW9DLE1BQU0sVUFBMUMsNkJBQTRFLEtBQUssTUFBTCxDQUFZLFVBQVosRUFBNUU7QUFDQSxRQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEdBQWtDLFFBQWxDLE9BQStDLE1BQU0sVUFBckQ7QUFDQTs7Ozs7O2tCQWxCbUIsUzs7O0FBcUJyQixVQUFVLFFBQVYsR0FBcUIsRUFBckI7Ozs7O0FDdkJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLENBQUMsYUFBSztBQUNMLEtBQUksQ0FBQyxDQUFMLEVBQVE7QUFDUCxRQUFNLElBQUksS0FBSixrQkFBTjtBQUNBO0FBQ0QsR0FBRSxFQUFGLENBQUssVUFBTCxHQUFrQixVQUFVLGVBQVYsRUFBb0M7QUFBQSxvQ0FBTixJQUFNO0FBQU4sT0FBTTtBQUFBOztBQUNyRCxTQUFPLEtBQUssSUFBTCxDQUFVLFlBQVk7QUFDNUIsT0FBSSxTQUFTLEVBQUUsSUFBRixDQUFiOztBQUVBLE9BQUksTUFBTSxPQUFPLElBQVAscUJBQVY7O0FBRUEsT0FBSSxDQUFDLEdBQUwsRUFBVTtBQUNULFVBQU0sd0JBQWMsTUFBZCxFQUFzQixlQUF0QixDQUFOO0FBQ0EsV0FBTyxJQUFQLHNCQUFzQixHQUF0QjtBQUNBLElBSEQsTUFHTyxJQUFJLE9BQU8sZUFBUCxLQUEyQixRQUEvQixFQUF5QztBQUFBOztBQUMvQyxXQUFPLGFBQUksZUFBSixjQUF3QixJQUF4QixDQUFQO0FBQ0E7QUFDRCxHQVhNLENBQVA7QUFZQSxFQWJEOztBQWVBLEdBQUUsVUFBRjtBQUNBLENBcEJELEVBb0JHLENBcEJIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29sUmVzaXplIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdJbml0IScpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdEZXN0cm95IScpO1xyXG5cdH1cclxufSIsImV4cG9ydCBjb25zdCBEQVRBX0FQSSA9ICdtdWx0aVRhYmxlJztcclxuZXhwb3J0IGNvbnN0IERBVEFfQ09MVU1OU19JRCA9ICdyZXNpemFibGUtY29sdW1ucy1pZCc7XHJcbmV4cG9ydCBjb25zdCBEQVRBX0NPTFVNTl9JRCA9ICdyZXNpemFibGUtY29sdW1uLWlkJztcclxuZXhwb3J0IGNvbnN0IERBVEFfVEggPSAndGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMQVNTX1RBQkxFX1dSQVBQRVIgPSAnbXQtd3JhcHBlcic7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19UQUJMRV9SRVNJWklORyA9ICdyYy10YWJsZS1yZXNpemluZyc7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19DT0xVTU5fUkVTSVpJTkcgPSAncmMtY29sdW1uLXJlc2l6aW5nJztcclxuZXhwb3J0IGNvbnN0IENMQVNTX0hFQUQgPSAnbXQtaGVhZCc7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19IQU5ETEUgPSAnbXQtaGFuZGxlJztcclxuZXhwb3J0IGNvbnN0IENMQVNTX0hBTkRMRV9DT05UQUlORVIgPSAnbXQtaGFuZGxlLWNvbnRhaW5lcic7XHJcblxyXG5leHBvcnQgY29uc3QgRVZFTlRfUkVTSVpFX1NUQVJUID0gJ2NvbHVtbjpyZXNpemU6c3RhcnQnO1xyXG5leHBvcnQgY29uc3QgRVZFTlRfUkVTSVpFID0gJ2NvbHVtbjpyZXNpemUnO1xyXG5leHBvcnQgY29uc3QgRVZFTlRfUkVTSVpFX1NUT1AgPSAnY29sdW1uOnJlc2l6ZTpzdG9wJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RPUl9USCA9ICd0cjpmaXJzdCA+IHRoOnZpc2libGUnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUT1JfVEQgPSAndHI6Zmlyc3QgPiB0ZDp2aXNpYmxlJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX1VOUkVTSVpBQkxFID0gYFtkYXRhLW5vcmVzaXplXWA7IiwiaW1wb3J0ICogYXMgQ09OU1QgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmxvYXRIZWFkIHtcclxuXHRjb25zdHJ1Y3RvcigkdGFibGUsIG9wdGlvbnMpIHtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBmbG9hdEhlYWQuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy4kdGFibGUgPSAkdGFibGU7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVXcmFwcGVyKCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0luaXQhJyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXcmFwcGVyKCkge1xyXG5cdFx0dGhpcy4kdGFibGUud3JhcChgPGRpdiBjbGFzcz1cIiR7Q09OU1QuQ0xBU1NfVEFCTEVfV1JBUFBFUn1cIi8+YCk7XHJcblx0XHR0aGlzLiR0YWJsZS5iZWZvcmUoYDx0YWJsZSBjbGFzcz1cIiR7Q09OU1QuQ0xBU1NfSEVBRH0gdGFibGVcIiBzdHlsZT1cIndpZHRoOiR7dGhpcy4kdGFibGUub3V0ZXJXaWR0aCgpfXB4O1wiPjwvdGFibGU+YCk7XHJcblx0XHR0aGlzLiR0YWJsZS5maW5kKCd0aGVhZCcpLmNsb25lKCkuYXBwZW5kVG8oYC4ke0NPTlNULkNMQVNTX0hFQUR9YCk7XHJcblx0fTtcclxufVxyXG5cclxuZmxvYXRIZWFkLmRlZmF1bHRzID0ge1xyXG5cclxufTsiLCJpbXBvcnQgY29sUmVzaXplIGZyb20gJy4vY29sUmVzaXplJztcclxuaW1wb3J0IGZsb2F0SGVhZCBmcm9tICcuL2Zsb2F0SGVhZCc7XHJcbmltcG9ydCB7REFUQV9BUEl9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbigkID0+IHtcclxuXHRpZiAoISQpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihgJCBpcyB1bmRlZmluZWRgKTtcclxuXHR9XHJcblx0JC5mbi5tdWx0aVRhYmxlID0gZnVuY3Rpb24gKG9wdGlvbnNPck1ldGhvZCwgLi4uYXJncykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCAkdGFibGUgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0bGV0IGFwaSA9ICR0YWJsZS5kYXRhKERBVEFfQVBJKTtcclxuXHJcblx0XHRcdGlmICghYXBpKSB7XHJcblx0XHRcdFx0YXBpID0gbmV3IGZsb2F0SGVhZCgkdGFibGUsIG9wdGlvbnNPck1ldGhvZCk7XHJcblx0XHRcdFx0JHRhYmxlLmRhdGEoREFUQV9BUEksIGFwaSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnNPck1ldGhvZCA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRyZXR1cm4gYXBpW29wdGlvbnNPck1ldGhvZF0oLi4uYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdCQubXVsdGlUYWJsZSA9IGZsb2F0SGVhZDtcclxufSkoJCk7Il19
