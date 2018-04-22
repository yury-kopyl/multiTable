(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var CONST = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColResize = function ColResize(_ColResize2) {
	return function (_ColResize) {
		_inherits(_class, _ColResize);

		function _class($table, options) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, $table, options));

			_this.$resize = undefined;
			return _this;
		}

		_createClass(_class, [{
			key: 'initResize',
			value: function initResize() {
				console.info('init class ColResize');

				this.createResize();
				this.wrapResize();
			}
		}, {
			key: 'createResize',
			value: function createResize() {
				var _this2 = this;

				this.$table.before('<div class="' + CONST.CLASS_RESIZE_TABLE + '"/>');
				this.$resize = this.$table.siblings('.' + CONST.CLASS_RESIZE_TABLE);

				this.$tableCols.each(function (i, item) {
					if (_this2.options.colResize.isFixed || !_this2.options.colResize.isFixed && i !== _this2.$tableCols.length - 1) {
						_this2.$resize.append('<div class="' + CONST.CLASS_RESIZE_HANDLE + '" style="left:' + (item.offsetLeft + item.offsetWidth) + 'px;height:' + _this2.getData('tableHeight') + 'px"/>');
					}
				});
			}
		}, {
			key: 'wrapResize',
			value: function wrapResize() {
				this.$resize.wrap('<div class="' + CONST.CLASS_RESIZE + '" style="width:' + (this.options.colResize.isFixed ? this.getData('tableWidth') : '') + 'px;"/>');
			}
		}]);

		return _class;
	}(_ColResize2);
};

exports.default = ColResize;

},{"./constants":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATA_API = exports.DATA_API = 'multiTable';

var DATA_COLUMNS_ID = exports.DATA_COLUMNS_ID = 'resizable-columns-id';
var DATA_COLUMN_ID = exports.DATA_COLUMN_ID = 'resizable-column-id';
var DATA_TH = exports.DATA_TH = 'th';

var CLASS_WRAP = exports.CLASS_WRAP = 'mt';

var CLASS_TABLE_COL = exports.CLASS_TABLE_COL = 'mt-table__col';

var CLASS_FLOAT = exports.CLASS_FLOAT = 'mt-float';
var CLASS_FLOAT_TABLE = exports.CLASS_FLOAT_TABLE = 'mt-float__table';

var CLASS_RESIZE = exports.CLASS_RESIZE = 'mt-resize';
var CLASS_RESIZE_TABLE = exports.CLASS_RESIZE_TABLE = 'mt-resize__table';
var CLASS_RESIZE_HANDLE = exports.CLASS_RESIZE_HANDLE = 'mt-resize__handle';

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var CONST = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = function () {
	function Table($table, options) {
		_classCallCheck(this, Table);

		Table.validateOptions(options);

		this.options = $.extend({}, Table.defaults, options);
		this.$window = $(window);
		this.$wrap = undefined;
		this.$table = $table;
		this.$tableHeads = this.$table.find('thead').find('tr:last-child').find('th');
		this.$tableCols = undefined;

		this.init();
	}

	_createClass(Table, [{
		key: 'init',
		value: function init() {
			console.info('init class Table');
			this.$table.data('ui', {});

			if (this.options.colResize.isFixed) {
				this.$table.addClass('multiTable_fixed');
				this.$table.data('ui', this.setData('tableWidth', this.$table.outerWidth()));
			}
			this.$table.data('ui', this.setData('tableHeight', this.$table.outerHeight()));

			this.wrapTable();
			this.createCols();
		}
	}, {
		key: 'wrapTable',
		value: function wrapTable() {
			this.$table.wrap('<div class="' + CONST.CLASS_WRAP + '"/>');
			this.$wrap = this.$table.parent('.' + CONST.CLASS_WRAP);

			this.$table.data('ui', this.setData('wrapWidth', this.$table.parent('.' + CONST.CLASS_WRAP).outerWidth()));
		}
	}, {
		key: 'createCols',
		value: function createCols() {
			if (!this.$table.find('col').length) {
				var $colgroup = $('<colgroup/>');

				for (var i = 0; i < this.$tableHeads.length; i++) {
					$colgroup.append('<col class="' + CONST.CLASS_TABLE_COL + '"/>');
				}

				this.$table.prepend($colgroup);
			}

			this.$tableCols = this.$table.find('col').addClass(CONST.CLASS_TABLE_COL);
		}
	}, {
		key: 'setData',
		value: function setData(key, value) {
			return $.extend(this.$table.data('ui'), _defineProperty({}, key, value));
		}
	}, {
		key: 'getData',
		value: function getData(key) {
			var data = this.$table.data('ui');

			if (key) {
				return data[key];
			}

			return data;
		}
	}], [{
		key: 'validateOptions',
		value: function validateOptions(options) {
			if (!options.colResize && !options.floatHead) {
				throw new Error('Set any widget options(colResize/floatHead)');
			}

			for (var key in options) {
				if (options.hasOwnProperty(key) && !Table.defaults.hasOwnProperty(key)) {
					throw new Error('option "' + key + '" does not exist');
				}

				if (options.hasOwnProperty(key) && _typeof(options[key]) !== Table.typeDefaults[key]) {
					throw new Error('option "' + key + '" haven\'t correct type: expected => ' + _typeof(options[key]) + ', actual => ' + Table.typeDefaults[key]);
				}
			}
		}
	}]);

	return Table;
}();

exports.default = Table;
;

Table.defaults = {
	floatHead: {
		tableClass: 'table'
	},
	colResize: false,
	string: 'test',
	object: {},
	number: 100,
	fn: function fn() {
		return true;
	}
};

Table.typeDefaults = {
	floatHead: 'object',
	colResize: 'object',
	string: 'string',
	object: 'object',
	number: 'number',
	fn: 'function'
};

},{"./constants":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var CONST = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatHead = function FloatHead(_FloatHead2) {
	return function (_FloatHead) {
		_inherits(_class, _FloatHead);

		function _class($table, options) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, $table, options));

			_this.$float = undefined;
			return _this;
		}

		_createClass(_class, [{
			key: 'initHead',
			value: function initHead() {
				console.info('init class FloatHead');

				this.createFloat();
				this.wrapFloat();
				this.scrollFloatPage();
			}
		}, {
			key: 'createFloat',
			value: function createFloat() {
				this.$table.before('<table class="' + CONST.CLASS_FLOAT_TABLE + (this.options.floatHead.tableClass ? ' ' + this.options.floatHead.tableClass : '') + '"/>');
				this.$float = this.$table.siblings('.' + CONST.CLASS_FLOAT_TABLE);
				this.$table.find('colgroup').clone().appendTo(this.$float);
				this.$table.find('thead').clone().appendTo(this.$float);
			}
		}, {
			key: 'wrapFloat',
			value: function wrapFloat() {
				this.$float.wrap('<div class="' + CONST.CLASS_FLOAT + '"' + (this.options.colResize.isFixed ? ' style="width:' + this.getData('tableWidth') + 'px;"' : '') + '/>');
			}
		}, {
			key: 'scrollFloatPage',
			value: function scrollFloatPage() {
				/* todo Позиция шапки при скроле страницы */
				/*this.$window.scroll(event => {
    	console.log(
    		this.$wrap.offset().top,
    		this.$wrap.scrollTop()
    	);
    });*/
			}
		}]);

		return _class;
	}(_FloatHead2);
};

exports.default = FloatHead;

},{"./constants":2}],5:[function(require,module,exports){
'use strict';

var _multiTable = require('./multiTable');

var _multiTable2 = _interopRequireDefault(_multiTable);

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
				api = new _multiTable2.default($table, optionsOrMethod);
				$table.data(_constants.DATA_API, api);
			} else if (typeof optionsOrMethod === 'string') {
				var _api;

				return (_api = api)[optionsOrMethod].apply(_api, args);
			}
		});
	};

	$.multiTable = _multiTable2.default;
})($);

},{"./constants":2,"./multiTable":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

var _floatHead = require('./floatHead');

var _floatHead2 = _interopRequireDefault(_floatHead);

var _colResize = require('./colResize');

var _colResize2 = _interopRequireDefault(_colResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiTable = function (_ColResize) {
	_inherits(MultiTable, _ColResize);

	function MultiTable($table, options) {
		_classCallCheck(this, MultiTable);

		var _this = _possibleConstructorReturn(this, (MultiTable.__proto__ || Object.getPrototypeOf(MultiTable)).call(this, $table, options));

		_this.initResize();
		_this.initHead();
		_this.play();
		return _this;
	}

	_createClass(MultiTable, [{
		key: 'play',
		value: function play() {
			console.info('init class MultiTable');
			// console.log(this);
		}
	}]);

	return MultiTable;
}((0, _colResize2.default)((0, _floatHead2.default)(_core2.default)));

exports.default = MultiTable;
;

},{"./colResize":1,"./core":3,"./floatHead":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29sUmVzaXplLmpzIiwic3JjL2NvbnN0YW50cy5qcyIsInNyYy9jb3JlLmpzIiwic3JjL2Zsb2F0SGVhZC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9tdWx0aVRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7O0FBRUE7O0lBQVksSzs7Ozs7Ozs7OztBQUVaLElBQU0sWUFBWTtBQUFBO0FBQUE7O0FBQ2pCLGtCQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkI7QUFBQTs7QUFBQSwrR0FDdEIsTUFEc0IsRUFDZCxPQURjOztBQUc1QixTQUFLLE9BQUwsR0FBZSxTQUFmO0FBSDRCO0FBSTVCOztBQUxnQjtBQUFBO0FBQUEsZ0NBT0o7QUFDWixZQUFRLElBQVIsQ0FBYSxzQkFBYjs7QUFFQSxTQUFLLFlBQUw7QUFDQSxTQUFLLFVBQUw7QUFDQTtBQVpnQjtBQUFBO0FBQUEsa0NBY0Y7QUFBQTs7QUFDZCxTQUFLLE1BQUwsQ0FBWSxNQUFaLGtCQUFrQyxNQUFNLGtCQUF4QztBQUNBLFNBQUssT0FBTCxHQUFlLEtBQUssTUFBTCxDQUFZLFFBQVosT0FBeUIsTUFBTSxrQkFBL0IsQ0FBZjs7QUFFQSxTQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsVUFBQyxDQUFELEVBQUksSUFBSixFQUFhO0FBQ2pDLFNBQU0sT0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixPQUF4QixJQUFxQyxDQUFDLE9BQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsT0FBeEIsSUFBbUMsTUFBTSxPQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBNUcsRUFBaUg7QUFDaEgsYUFBSyxPQUFMLENBQWEsTUFBYixrQkFBbUMsTUFBTSxtQkFBekMsdUJBQTZFLEtBQUssVUFBTCxHQUFrQixLQUFLLFdBQXBHLG1CQUE0SCxPQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTVIO0FBQ0E7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QXRCO0FBQ0EsSUFIRCxNQUdPLElBQUksT0FBTyxlQUFQLEtBQTJCLFFBQS9CLEVBQXlDO0FBQUE7O0FBQy9DLFdBQU8sYUFBSSxlQUFKLGNBQXdCLElBQXhCLENBQVA7QUFDQTtBQUNELEdBWE0sQ0FBUDtBQVlBLEVBYkQ7O0FBZUEsR0FBRSxVQUFGO0FBQ0EsQ0FwQkQsRUFvQkcsQ0FwQkg7OztBQ0hBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUNwQixxQkFBWSxNQUFaLEVBQW9CLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUEsc0hBQ3RCLE1BRHNCLEVBQ2QsT0FEYzs7QUFHNUIsUUFBSyxVQUFMO0FBQ0EsUUFBSyxRQUFMO0FBQ0EsUUFBSyxJQUFMO0FBTDRCO0FBTTVCOzs7O3lCQUVNO0FBQ04sV0FBUSxJQUFSLENBQWEsdUJBQWI7QUFDQTtBQUNBOzs7O0VBWnNDLHlCQUFVLHdDQUFWLEM7O2tCQUFuQixVO0FBYXBCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgQ09OU1QgZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBDb2xSZXNpemUgPSBDb2xSZXNpemUgPT4gY2xhc3MgZXh0ZW5kcyBDb2xSZXNpemUge1xyXG5cdGNvbnN0cnVjdG9yKCR0YWJsZSwgb3B0aW9ucykge1xyXG5cdFx0c3VwZXIoJHRhYmxlLCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLiRyZXNpemUgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRpbml0UmVzaXplKCkge1xyXG5cdFx0Y29uc29sZS5pbmZvKCdpbml0IGNsYXNzIENvbFJlc2l6ZScpO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlUmVzaXplKCk7XHJcblx0XHR0aGlzLndyYXBSZXNpemUoKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVJlc2l6ZSgpIHtcclxuXHRcdHRoaXMuJHRhYmxlLmJlZm9yZShgPGRpdiBjbGFzcz1cIiR7Q09OU1QuQ0xBU1NfUkVTSVpFX1RBQkxFfVwiLz5gKTtcclxuXHRcdHRoaXMuJHJlc2l6ZSA9IHRoaXMuJHRhYmxlLnNpYmxpbmdzKGAuJHtDT05TVC5DTEFTU19SRVNJWkVfVEFCTEV9YCk7XHJcblxyXG5cdFx0dGhpcy4kdGFibGVDb2xzLmVhY2goKGksIGl0ZW0pID0+IHtcclxuXHRcdFx0aWYgKCAodGhpcy5vcHRpb25zLmNvbFJlc2l6ZS5pc0ZpeGVkKSB8fCAoIXRoaXMub3B0aW9ucy5jb2xSZXNpemUuaXNGaXhlZCAmJiBpICE9PSB0aGlzLiR0YWJsZUNvbHMubGVuZ3RoIC0gMSkgKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVzaXplLmFwcGVuZChgPGRpdiBjbGFzcz1cIiR7Q09OU1QuQ0xBU1NfUkVTSVpFX0hBTkRMRX1cIiBzdHlsZT1cImxlZnQ6JHtpdGVtLm9mZnNldExlZnQgKyBpdGVtLm9mZnNldFdpZHRofXB4O2hlaWdodDoke3RoaXMuZ2V0RGF0YSgndGFibGVIZWlnaHQnKX1weFwiLz5gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR3cmFwUmVzaXplKCkge1xyXG5cdFx0dGhpcy4kcmVzaXplLndyYXAoYDxkaXYgY2xhc3M9XCIke0NPTlNULkNMQVNTX1JFU0laRX1cIiBzdHlsZT1cIndpZHRoOiR7dGhpcy5vcHRpb25zLmNvbFJlc2l6ZS5pc0ZpeGVkID8gdGhpcy5nZXREYXRhKCd0YWJsZVdpZHRoJykgOiAnJ31weDtcIi8+YCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sUmVzaXplOyIsImV4cG9ydCBjb25zdCBEQVRBX0FQSSA9ICdtdWx0aVRhYmxlJztcclxuXHJcbmV4cG9ydCBjb25zdCBEQVRBX0NPTFVNTlNfSUQgPSAncmVzaXphYmxlLWNvbHVtbnMtaWQnO1xyXG5leHBvcnQgY29uc3QgREFUQV9DT0xVTU5fSUQgPSAncmVzaXphYmxlLWNvbHVtbi1pZCc7XHJcbmV4cG9ydCBjb25zdCBEQVRBX1RIID0gJ3RoJztcclxuXHJcbmV4cG9ydCBjb25zdCBDTEFTU19XUkFQID0gJ210JztcclxuXHJcbmV4cG9ydCBjb25zdCBDTEFTU19UQUJMRV9DT0wgPSAnbXQtdGFibGVfX2NvbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xBU1NfRkxPQVQgPSAnbXQtZmxvYXQnO1xyXG5leHBvcnQgY29uc3QgQ0xBU1NfRkxPQVRfVEFCTEUgPSAnbXQtZmxvYXRfX3RhYmxlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDTEFTU19SRVNJWkUgPSAnbXQtcmVzaXplJztcclxuZXhwb3J0IGNvbnN0IENMQVNTX1JFU0laRV9UQUJMRSA9ICdtdC1yZXNpemVfX3RhYmxlJztcclxuZXhwb3J0IGNvbnN0IENMQVNTX1JFU0laRV9IQU5ETEUgPSAnbXQtcmVzaXplX19oYW5kbGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMQVNTX1RBQkxFX1JFU0laSU5HID0gJ3JjLXRhYmxlLXJlc2l6aW5nJztcclxuZXhwb3J0IGNvbnN0IENMQVNTX0NPTFVNTl9SRVNJWklORyA9ICdyYy1jb2x1bW4tcmVzaXppbmcnO1xyXG5leHBvcnQgY29uc3QgQ0xBU1NfSEVBRCA9ICdtdC1oZWFkJztcclxuZXhwb3J0IGNvbnN0IENMQVNTX0hBTkRMRSA9ICdtdC1oYW5kbGUnO1xyXG5leHBvcnQgY29uc3QgQ0xBU1NfSEFORExFX0NPTlRBSU5FUiA9ICdtdC1oYW5kbGUtY29udGFpbmVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBFVkVOVF9SRVNJWkVfU1RBUlQgPSAnY29sdW1uOnJlc2l6ZTpzdGFydCc7XHJcbmV4cG9ydCBjb25zdCBFVkVOVF9SRVNJWkUgPSAnY29sdW1uOnJlc2l6ZSc7XHJcbmV4cG9ydCBjb25zdCBFVkVOVF9SRVNJWkVfU1RPUCA9ICdjb2x1bW46cmVzaXplOnN0b3AnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX1RIID0gJ3RyOmZpcnN0ID4gdGg6dmlzaWJsZSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RPUl9URCA9ICd0cjpmaXJzdCA+IHRkOnZpc2libGUnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUT1JfVU5SRVNJWkFCTEUgPSBgW2RhdGEtbm9yZXNpemVdYDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgKiBhcyBDT05TVCBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSB7XHJcblx0Y29uc3RydWN0b3IoJHRhYmxlLCBvcHRpb25zKSB7XHJcblx0XHRUYWJsZS52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIFRhYmxlLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHRcdHRoaXMuJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHRcdHRoaXMuJHdyYXAgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLiR0YWJsZSA9ICR0YWJsZTtcclxuXHRcdHRoaXMuJHRhYmxlSGVhZHMgPSB0aGlzLiR0YWJsZS5maW5kKCd0aGVhZCcpLmZpbmQoJ3RyOmxhc3QtY2hpbGQnKS5maW5kKCd0aCcpO1xyXG5cdFx0dGhpcy4kdGFibGVDb2xzID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKSB7XHJcblx0XHRpZiAoICFvcHRpb25zLmNvbFJlc2l6ZSAmJiAhb3B0aW9ucy5mbG9hdEhlYWQgKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgU2V0IGFueSB3aWRnZXQgb3B0aW9ucyhjb2xSZXNpemUvZmxvYXRIZWFkKWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQga2V5IGluIG9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKCBvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkgJiYgIShUYWJsZS5kZWZhdWx0cykuaGFzT3duUHJvcGVydHkoa2V5KSApIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYG9wdGlvbiBcIiR7a2V5fVwiIGRvZXMgbm90IGV4aXN0YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiBvcHRpb25zW2tleV0gIT09IFRhYmxlLnR5cGVEZWZhdWx0c1trZXldICkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgb3B0aW9uIFwiJHtrZXl9XCIgaGF2ZW4ndCBjb3JyZWN0IHR5cGU6IGV4cGVjdGVkID0+ICR7dHlwZW9mIG9wdGlvbnNba2V5XX0sIGFjdHVhbCA9PiAke1RhYmxlLnR5cGVEZWZhdWx0c1trZXldfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc29sZS5pbmZvKCdpbml0IGNsYXNzIFRhYmxlJyk7XHJcblx0XHR0aGlzLiR0YWJsZS5kYXRhKCd1aScsIHt9KTtcclxuXHJcblx0XHRpZiAoIHRoaXMub3B0aW9ucy5jb2xSZXNpemUuaXNGaXhlZCApIHtcclxuXHRcdFx0dGhpcy4kdGFibGUuYWRkQ2xhc3MoJ211bHRpVGFibGVfZml4ZWQnKTtcclxuXHRcdFx0dGhpcy4kdGFibGUuZGF0YSgndWknLCB0aGlzLnNldERhdGEoICd0YWJsZVdpZHRoJywgdGhpcy4kdGFibGUub3V0ZXJXaWR0aCgpICkpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy4kdGFibGUuZGF0YSgndWknLCB0aGlzLnNldERhdGEoICd0YWJsZUhlaWdodCcsIHRoaXMuJHRhYmxlLm91dGVySGVpZ2h0KCkgKSk7XHJcblxyXG5cdFx0dGhpcy53cmFwVGFibGUoKTtcclxuXHRcdHRoaXMuY3JlYXRlQ29scygpO1xyXG5cdH1cclxuXHJcblx0d3JhcFRhYmxlKCkge1xyXG5cdFx0dGhpcy4kdGFibGUud3JhcChgPGRpdiBjbGFzcz1cIiR7Q09OU1QuQ0xBU1NfV1JBUH1cIi8+YCk7XHJcblx0XHR0aGlzLiR3cmFwID0gdGhpcy4kdGFibGUucGFyZW50KGAuJHtDT05TVC5DTEFTU19XUkFQfWApO1xyXG5cclxuXHRcdHRoaXMuJHRhYmxlLmRhdGEoJ3VpJywgdGhpcy5zZXREYXRhKCAnd3JhcFdpZHRoJywgdGhpcy4kdGFibGUucGFyZW50KGAuJHtDT05TVC5DTEFTU19XUkFQfWApLm91dGVyV2lkdGgoKSApKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNvbHMoKSB7XHJcblx0XHRpZiAoICF0aGlzLiR0YWJsZS5maW5kKCdjb2wnKS5sZW5ndGggKSB7XHJcblx0XHRcdGxldCAkY29sZ3JvdXAgPSAkKCc8Y29sZ3JvdXAvPicpO1xyXG5cclxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy4kdGFibGVIZWFkcy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHQkY29sZ3JvdXAuYXBwZW5kKGA8Y29sIGNsYXNzPVwiJHtDT05TVC5DTEFTU19UQUJMRV9DT0x9XCIvPmApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiR0YWJsZS5wcmVwZW5kKCRjb2xncm91cCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kdGFibGVDb2xzID0gdGhpcy4kdGFibGUuZmluZCgnY29sJykuYWRkQ2xhc3MoQ09OU1QuQ0xBU1NfVEFCTEVfQ09MKTtcclxuXHR9XHJcblxyXG5cdHNldERhdGEoa2V5LCB2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICQuZXh0ZW5kKHRoaXMuJHRhYmxlLmRhdGEoJ3VpJyksIHtba2V5XTogdmFsdWV9KTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoa2V5KSB7XHJcblx0XHRsZXQgZGF0YSA9IHRoaXMuJHRhYmxlLmRhdGEoJ3VpJyk7XHJcblxyXG5cdFx0aWYgKCBrZXkgKSB7XHJcblx0XHRcdHJldHVybiBkYXRhW2tleV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG59O1xyXG5cclxuVGFibGUuZGVmYXVsdHMgPSB7XHJcblx0ZmxvYXRIZWFkOiB7XHJcblx0XHR0YWJsZUNsYXNzOiAndGFibGUnXHJcblx0fSxcclxuXHRjb2xSZXNpemU6IGZhbHNlLFxyXG5cdHN0cmluZzogICAgJ3Rlc3QnLFxyXG5cdG9iamVjdDogICAge30sXHJcblx0bnVtYmVyOiAgICAxMDAsXHJcblx0Zm46ICAgICAgICBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5UYWJsZS50eXBlRGVmYXVsdHMgPSB7XHJcblx0ZmxvYXRIZWFkOiAnb2JqZWN0JyxcclxuXHRjb2xSZXNpemU6ICdvYmplY3QnLFxyXG5cdHN0cmluZzogICAgJ3N0cmluZycsXHJcblx0b2JqZWN0OiAgICAnb2JqZWN0JyxcclxuXHRudW1iZXI6ICAgICdudW1iZXInLFxyXG5cdGZuOiAgICAgICAgJ2Z1bmN0aW9uJ1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIENPTlNUIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEZsb2F0SGVhZCA9IEZsb2F0SGVhZCA9PiBjbGFzcyBleHRlbmRzIEZsb2F0SGVhZCB7XHJcblx0Y29uc3RydWN0b3IoJHRhYmxlLCBvcHRpb25zKSB7XHJcblx0XHRzdXBlcigkdGFibGUsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuJGZsb2F0ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0aW5pdEhlYWQoKSB7XHJcblx0XHRjb25zb2xlLmluZm8oJ2luaXQgY2xhc3MgRmxvYXRIZWFkJyk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVGbG9hdCgpO1xyXG5cdFx0dGhpcy53cmFwRmxvYXQoKTtcclxuXHRcdHRoaXMuc2Nyb2xsRmxvYXRQYWdlKCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVGbG9hdCgpIHtcclxuXHRcdHRoaXMuJHRhYmxlLmJlZm9yZShgPHRhYmxlIGNsYXNzPVwiJHtDT05TVC5DTEFTU19GTE9BVF9UQUJMRX0ke3RoaXMub3B0aW9ucy5mbG9hdEhlYWQudGFibGVDbGFzcyA/ICcgJyArIHRoaXMub3B0aW9ucy5mbG9hdEhlYWQudGFibGVDbGFzcyA6ICcnfVwiLz5gKTtcclxuXHRcdHRoaXMuJGZsb2F0ID0gdGhpcy4kdGFibGUuc2libGluZ3MoYC4ke0NPTlNULkNMQVNTX0ZMT0FUX1RBQkxFfWApO1xyXG5cdFx0dGhpcy4kdGFibGUuZmluZCgnY29sZ3JvdXAnKS5jbG9uZSgpLmFwcGVuZFRvKHRoaXMuJGZsb2F0KTtcclxuXHRcdHRoaXMuJHRhYmxlLmZpbmQoJ3RoZWFkJykuY2xvbmUoKS5hcHBlbmRUbyh0aGlzLiRmbG9hdCk7XHJcblx0fVxyXG5cclxuXHR3cmFwRmxvYXQoKSB7XHJcblx0XHR0aGlzLiRmbG9hdC53cmFwKGA8ZGl2IGNsYXNzPVwiJHtDT05TVC5DTEFTU19GTE9BVH1cIiR7dGhpcy5vcHRpb25zLmNvbFJlc2l6ZS5pc0ZpeGVkID8gYCBzdHlsZT1cIndpZHRoOiR7dGhpcy5nZXREYXRhKCd0YWJsZVdpZHRoJyl9cHg7XCJgIDogJyd9Lz5gKTtcclxuXHR9XHJcblxyXG5cdHNjcm9sbEZsb2F0UGFnZSgpIHtcclxuXHRcdC8qIHRvZG8g0J/QvtC30LjRhtC40Y8g0YjQsNC/0LrQuCDQv9GA0Lgg0YHQutGA0L7Qu9C1INGB0YLRgNCw0L3QuNGG0YsgKi9cclxuXHRcdC8qdGhpcy4kd2luZG93LnNjcm9sbChldmVudCA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdHRoaXMuJHdyYXAub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHRcdHRoaXMuJHdyYXAuc2Nyb2xsVG9wKClcclxuXHRcdFx0KTtcclxuXHRcdH0pOyovXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxvYXRIZWFkOyIsImltcG9ydCBNdWx0aVRhYmxlIGZyb20gJy4vbXVsdGlUYWJsZSc7XHJcbmltcG9ydCB7REFUQV9BUEl9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbigkID0+IHtcclxuXHRpZiAoISQpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihgJCBpcyB1bmRlZmluZWRgKTtcclxuXHR9XHJcblx0JC5mbi5tdWx0aVRhYmxlID0gZnVuY3Rpb24gKG9wdGlvbnNPck1ldGhvZCwgLi4uYXJncykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCAkdGFibGUgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0bGV0IGFwaSA9ICR0YWJsZS5kYXRhKERBVEFfQVBJKTtcclxuXHJcblx0XHRcdGlmICghYXBpKSB7XHJcblx0XHRcdFx0YXBpID0gbmV3IE11bHRpVGFibGUoJHRhYmxlLCBvcHRpb25zT3JNZXRob2QpO1xyXG5cdFx0XHRcdCR0YWJsZS5kYXRhKERBVEFfQVBJLCBhcGkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zT3JNZXRob2QgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0cmV0dXJuIGFwaVtvcHRpb25zT3JNZXRob2RdKC4uLmFyZ3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkLm11bHRpVGFibGUgPSBNdWx0aVRhYmxlO1xyXG59KSgkKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb3JlJztcclxuaW1wb3J0IEZsb2F0SGVhZCBmcm9tICcuL2Zsb2F0SGVhZCc7XHJcbmltcG9ydCBDb2xSZXNpemUgZnJvbSAnLi9jb2xSZXNpemUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlUYWJsZSBleHRlbmRzIENvbFJlc2l6ZShGbG9hdEhlYWQoVGFibGUpKSB7XHJcblx0Y29uc3RydWN0b3IoJHRhYmxlLCBvcHRpb25zKSB7XHJcblx0XHRzdXBlcigkdGFibGUsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuaW5pdFJlc2l6ZSgpO1xyXG5cdFx0dGhpcy5pbml0SGVhZCgpO1xyXG5cdFx0dGhpcy5wbGF5KCk7XHJcblx0fVxyXG5cclxuXHRwbGF5KCkge1xyXG5cdFx0Y29uc29sZS5pbmZvKCdpbml0IGNsYXNzIE11bHRpVGFibGUnKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdH1cclxufTsiXX0=
