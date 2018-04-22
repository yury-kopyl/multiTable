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
			}
		}, {
			key: 'createResize',
			value: function createResize() {
				this.$table.before('<table class="' + CONST.CLASS_RESIZE_TABLE + '"/>');
				this.$resize = this.$table.siblings('.' + CONST.CLASS_RESIZE_TABLE);
			}
		}, {
			key: 'wrapResize',
			value: function wrapResize() {
				this.$resize.wrap('<div class="' + CONST.CLASS_FLOAT + '" style="width:' + (this.options.colResize.isFixed ? this.getData('tableWidth') : '') + 'px;"/>');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29sUmVzaXplLmpzIiwic3JjL2NvbnN0YW50cy5qcyIsInNyYy9jb3JlLmpzIiwic3JjL2Zsb2F0SGVhZC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9tdWx0aVRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7O0FBRUE7O0lBQVksSzs7Ozs7Ozs7OztBQUVaLElBQU0sWUFBWTtBQUFBO0FBQUE7O0FBQ2pCLGtCQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkI7QUFBQTs7QUFBQSwrR0FDdEIsTUFEc0IsRUFDZCxPQURjOztBQUc1QixTQUFLLE9BQUwsR0FBZSxTQUFmO0FBSDRCO0FBSTVCOztBQUxnQjtBQUFBO0FBQUEsZ0NBT0o7QUFDWixZQUFRLElBQVIsQ0FBYSxzQkFBYjs7QUFFQSxTQUFLLFlBQUw7QUFDQTtBQVhnQjtBQUFBO0FBQUEsa0NBYUY7QUFDZCxTQUFLLE1BQUwsQ0FBWSxNQUFaLG9CQUFvQyxNQUFNLGtCQUExQztBQUNBLFNBQUssT0FBTCxHQUFlLEtBQUssTUFBTCxDQUFZLFFBQVosT0FBeUIsTUFBTSxrQkFBL0IsQ0FBZjtBQUNBO0FBaEJnQjtBQUFBO0FBQUEsZ0NBa0JKO0FBQ1osU0FBSyxPQUFMLENBQWEsSUFBYixrQkFBaUMsTUFBTSxXQUF2Qyx3QkFBb0UsS0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixPQUF2QixHQUFpQyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQWpDLEdBQThELEVBQWxJO0FBQ0E7QUFwQmdCOztBQUFBO0FBQUEsR0FBMkIsV0FBM0I7QUFBQSxDQUFsQjs7a0JBdUJlLFM7Ozs7Ozs7O0FDM0JSLElBQU0sOEJBQVcsWUFBakI7O0FBRUEsSUFBTSw0Q0FBa0Isc0JBQXhCO0FBQ0EsSUFBTSwwQ0FBaUIscUJBQXZCO0FBQ0EsSUFBTSw0QkFBVSxJQUFoQjs7QUFFQSxJQUFNLGtDQUFhLElBQW5C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IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgKiBhcyBDT05TVCBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IENvbFJlc2l6ZSA9IENvbFJlc2l6ZSA9PiBjbGFzcyBleHRlbmRzIENvbFJlc2l6ZSB7XHJcblx0Y29uc3RydWN0b3IoJHRhYmxlLCBvcHRpb25zKSB7XHJcblx0XHRzdXBlcigkdGFibGUsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuJHJlc2l6ZSA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdGluaXRSZXNpemUoKSB7XHJcblx0XHRjb25zb2xlLmluZm8oJ2luaXQgY2xhc3MgQ29sUmVzaXplJyk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVSZXNpemUoKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVJlc2l6ZSgpIHtcclxuXHRcdHRoaXMuJHRhYmxlLmJlZm9yZShgPHRhYmxlIGNsYXNzPVwiJHtDT05TVC5DTEFTU19SRVNJWkVfVEFCTEV9XCIvPmApO1xyXG5cdFx0dGhpcy4kcmVzaXplID0gdGhpcy4kdGFibGUuc2libGluZ3MoYC4ke0NPTlNULkNMQVNTX1JFU0laRV9UQUJMRX1gKTtcclxuXHR9XHJcblxyXG5cdHdyYXBSZXNpemUoKSB7XHJcblx0XHR0aGlzLiRyZXNpemUud3JhcChgPGRpdiBjbGFzcz1cIiR7Q09OU1QuQ0xBU1NfRkxPQVR9XCIgc3R5bGU9XCJ3aWR0aDoke3RoaXMub3B0aW9ucy5jb2xSZXNpemUuaXNGaXhlZCA/IHRoaXMuZ2V0RGF0YSgndGFibGVXaWR0aCcpIDogJyd9cHg7XCIvPmApO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbFJlc2l6ZTsiLCJleHBvcnQgY29uc3QgREFUQV9BUEkgPSAnbXVsdGlUYWJsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgREFUQV9DT0xVTU5TX0lEID0gJ3Jlc2l6YWJsZS1jb2x1bW5zLWlkJztcclxuZXhwb3J0IGNvbnN0IERBVEFfQ09MVU1OX0lEID0gJ3Jlc2l6YWJsZS1jb2x1bW4taWQnO1xyXG5leHBvcnQgY29uc3QgREFUQV9USCA9ICd0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xBU1NfV1JBUCA9ICdtdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xBU1NfVEFCTEVfQ09MID0gJ210LXRhYmxlX19jb2wnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMQVNTX0ZMT0FUID0gJ210LWZsb2F0JztcclxuZXhwb3J0IGNvbnN0IENMQVNTX0ZMT0FUX1RBQkxFID0gJ210LWZsb2F0X190YWJsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xBU1NfUkVTSVpFID0gJ210LXJlc2l6ZSc7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19SRVNJWkVfVEFCTEUgPSAnbXQtcmVzaXplX190YWJsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xBU1NfVEFCTEVfUkVTSVpJTkcgPSAncmMtdGFibGUtcmVzaXppbmcnO1xyXG5leHBvcnQgY29uc3QgQ0xBU1NfQ09MVU1OX1JFU0laSU5HID0gJ3JjLWNvbHVtbi1yZXNpemluZyc7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19IRUFEID0gJ210LWhlYWQnO1xyXG5leHBvcnQgY29uc3QgQ0xBU1NfSEFORExFID0gJ210LWhhbmRsZSc7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19IQU5ETEVfQ09OVEFJTkVSID0gJ210LWhhbmRsZS1jb250YWluZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVWRU5UX1JFU0laRV9TVEFSVCA9ICdjb2x1bW46cmVzaXplOnN0YXJ0JztcclxuZXhwb3J0IGNvbnN0IEVWRU5UX1JFU0laRSA9ICdjb2x1bW46cmVzaXplJztcclxuZXhwb3J0IGNvbnN0IEVWRU5UX1JFU0laRV9TVE9QID0gJ2NvbHVtbjpyZXNpemU6c3RvcCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VMRUNUT1JfVEggPSAndHI6Zmlyc3QgPiB0aDp2aXNpYmxlJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX1REID0gJ3RyOmZpcnN0ID4gdGQ6dmlzaWJsZSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RPUl9VTlJFU0laQUJMRSA9IGBbZGF0YS1ub3Jlc2l6ZV1gOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIENPTlNUIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIHtcclxuXHRjb25zdHJ1Y3RvcigkdGFibGUsIG9wdGlvbnMpIHtcclxuXHRcdFRhYmxlLnZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVGFibGUuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy4kd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cdFx0dGhpcy4kd3JhcCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuJHRhYmxlID0gJHRhYmxlO1xyXG5cdFx0dGhpcy4kdGFibGVIZWFkcyA9IHRoaXMuJHRhYmxlLmZpbmQoJ3RoZWFkJykuZmluZCgndHI6bGFzdC1jaGlsZCcpLmZpbmQoJ3RoJyk7XHJcblx0XHR0aGlzLiR0YWJsZUNvbHMgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpIHtcclxuXHRcdGlmICggIW9wdGlvbnMuY29sUmVzaXplICYmICFvcHRpb25zLmZsb2F0SGVhZCApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBTZXQgYW55IHdpZGdldCBvcHRpb25zKGNvbFJlc2l6ZS9mbG9hdEhlYWQpYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBrZXkgaW4gb3B0aW9ucykge1xyXG5cdFx0XHRpZiAoIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhKFRhYmxlLmRlZmF1bHRzKS5oYXNPd25Qcm9wZXJ0eShrZXkpICkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgb3B0aW9uIFwiJHtrZXl9XCIgZG9lcyBub3QgZXhpc3RgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIG9wdGlvbnNba2V5XSAhPT0gVGFibGUudHlwZURlZmF1bHRzW2tleV0gKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBvcHRpb24gXCIke2tleX1cIiBoYXZlbid0IGNvcnJlY3QgdHlwZTogZXhwZWN0ZWQgPT4gJHt0eXBlb2Ygb3B0aW9uc1trZXldfSwgYWN0dWFsID0+ICR7VGFibGUudHlwZURlZmF1bHRzW2tleV19YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zb2xlLmluZm8oJ2luaXQgY2xhc3MgVGFibGUnKTtcclxuXHRcdHRoaXMuJHRhYmxlLmRhdGEoJ3VpJywge30pO1xyXG5cclxuXHRcdGlmICggdGhpcy5vcHRpb25zLmNvbFJlc2l6ZS5pc0ZpeGVkICkge1xyXG5cdFx0XHR0aGlzLiR0YWJsZS5hZGRDbGFzcygnbXVsdGlUYWJsZV9maXhlZCcpO1xyXG5cdFx0XHR0aGlzLiR0YWJsZS5kYXRhKCd1aScsIHRoaXMuc2V0RGF0YSggJ3RhYmxlV2lkdGgnLCB0aGlzLiR0YWJsZS5vdXRlcldpZHRoKCkgKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53cmFwVGFibGUoKTtcclxuXHRcdHRoaXMuY3JlYXRlQ29scygpO1xyXG5cdH1cclxuXHJcblx0d3JhcFRhYmxlKCkge1xyXG5cdFx0dGhpcy4kdGFibGUud3JhcChgPGRpdiBjbGFzcz1cIiR7Q09OU1QuQ0xBU1NfV1JBUH1cIi8+YCk7XHJcblx0XHR0aGlzLiR3cmFwID0gdGhpcy4kdGFibGUucGFyZW50KGAuJHtDT05TVC5DTEFTU19XUkFQfWApO1xyXG5cclxuXHRcdHRoaXMuJHRhYmxlLmRhdGEoJ3VpJywgdGhpcy5zZXREYXRhKCAnd3JhcFdpZHRoJywgdGhpcy4kdGFibGUucGFyZW50KGAuJHtDT05TVC5DTEFTU19XUkFQfWApLm91dGVyV2lkdGgoKSApKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNvbHMoKSB7XHJcblx0XHRpZiAoICF0aGlzLiR0YWJsZS5maW5kKCdjb2wnKS5sZW5ndGggKSB7XHJcblx0XHRcdGxldCAkY29sZ3JvdXAgPSAkKCc8Y29sZ3JvdXAvPicpO1xyXG5cclxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy4kdGFibGVIZWFkcy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHQkY29sZ3JvdXAuYXBwZW5kKGA8Y29sIGNsYXNzPVwiJHtDT05TVC5DTEFTU19UQUJMRV9DT0x9XCIvPmApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiR0YWJsZS5wcmVwZW5kKCRjb2xncm91cCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kdGFibGVDb2xzID0gdGhpcy4kdGFibGUuZmluZCgnY29sJykuYWRkQ2xhc3MoQ09OU1QuQ0xBU1NfVEFCTEVfQ09MKTtcclxuXHR9XHJcblxyXG5cdHNldERhdGEoa2V5LCB2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICQuZXh0ZW5kKHRoaXMuJHRhYmxlLmRhdGEoJ3VpJyksIHtba2V5XTogdmFsdWV9KTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoa2V5KSB7XHJcblx0XHRsZXQgZGF0YSA9IHRoaXMuJHRhYmxlLmRhdGEoJ3VpJyk7XHJcblxyXG5cdFx0aWYgKCBrZXkgKSB7XHJcblx0XHRcdHJldHVybiBkYXRhW2tleV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG59O1xyXG5cclxuVGFibGUuZGVmYXVsdHMgPSB7XHJcblx0ZmxvYXRIZWFkOiB7XHJcblx0XHR0YWJsZUNsYXNzOiAndGFibGUnXHJcblx0fSxcclxuXHRjb2xSZXNpemU6IGZhbHNlLFxyXG5cdHN0cmluZzogICAgJ3Rlc3QnLFxyXG5cdG9iamVjdDogICAge30sXHJcblx0bnVtYmVyOiAgICAxMDAsXHJcblx0Zm46ICAgICAgICBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5UYWJsZS50eXBlRGVmYXVsdHMgPSB7XHJcblx0ZmxvYXRIZWFkOiAnb2JqZWN0JyxcclxuXHRjb2xSZXNpemU6ICdvYmplY3QnLFxyXG5cdHN0cmluZzogICAgJ3N0cmluZycsXHJcblx0b2JqZWN0OiAgICAnb2JqZWN0JyxcclxuXHRudW1iZXI6ICAgICdudW1iZXInLFxyXG5cdGZuOiAgICAgICAgJ2Z1bmN0aW9uJ1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIENPTlNUIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEZsb2F0SGVhZCA9IEZsb2F0SGVhZCA9PiBjbGFzcyBleHRlbmRzIEZsb2F0SGVhZCB7XHJcblx0Y29uc3RydWN0b3IoJHRhYmxlLCBvcHRpb25zKSB7XHJcblx0XHRzdXBlcigkdGFibGUsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuJGZsb2F0ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0aW5pdEhlYWQoKSB7XHJcblx0XHRjb25zb2xlLmluZm8oJ2luaXQgY2xhc3MgRmxvYXRIZWFkJyk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVGbG9hdCgpO1xyXG5cdFx0dGhpcy53cmFwRmxvYXQoKTtcclxuXHRcdHRoaXMuc2Nyb2xsRmxvYXRQYWdlKCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVGbG9hdCgpIHtcclxuXHRcdHRoaXMuJHRhYmxlLmJlZm9yZShgPHRhYmxlIGNsYXNzPVwiJHtDT05TVC5DTEFTU19GTE9BVF9UQUJMRX0ke3RoaXMub3B0aW9ucy5mbG9hdEhlYWQudGFibGVDbGFzcyA/ICcgJyArIHRoaXMub3B0aW9ucy5mbG9hdEhlYWQudGFibGVDbGFzcyA6ICcnfVwiLz5gKTtcclxuXHRcdHRoaXMuJGZsb2F0ID0gdGhpcy4kdGFibGUuc2libGluZ3MoYC4ke0NPTlNULkNMQVNTX0ZMT0FUX1RBQkxFfWApO1xyXG5cdFx0dGhpcy4kdGFibGUuZmluZCgnY29sZ3JvdXAnKS5jbG9uZSgpLmFwcGVuZFRvKHRoaXMuJGZsb2F0KTtcclxuXHRcdHRoaXMuJHRhYmxlLmZpbmQoJ3RoZWFkJykuY2xvbmUoKS5hcHBlbmRUbyh0aGlzLiRmbG9hdCk7XHJcblx0fVxyXG5cclxuXHR3cmFwRmxvYXQoKSB7XHJcblx0XHR0aGlzLiRmbG9hdC53cmFwKGA8ZGl2IGNsYXNzPVwiJHtDT05TVC5DTEFTU19GTE9BVH1cIiR7dGhpcy5vcHRpb25zLmNvbFJlc2l6ZS5pc0ZpeGVkID8gYCBzdHlsZT1cIndpZHRoOiR7dGhpcy5nZXREYXRhKCd0YWJsZVdpZHRoJyl9cHg7XCJgIDogJyd9Lz5gKTtcclxuXHR9XHJcblxyXG5cdHNjcm9sbEZsb2F0UGFnZSgpIHtcclxuXHRcdC8qIHRvZG8g0J/QvtC30LjRhtC40Y8g0YjQsNC/0LrQuCDQv9GA0Lgg0YHQutGA0L7Qu9C1INGB0YLRgNCw0L3QuNGG0YsgKi9cclxuXHRcdC8qdGhpcy4kd2luZG93LnNjcm9sbChldmVudCA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdHRoaXMuJHdyYXAub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHRcdHRoaXMuJHdyYXAuc2Nyb2xsVG9wKClcclxuXHRcdFx0KTtcclxuXHRcdH0pOyovXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxvYXRIZWFkOyIsImltcG9ydCBNdWx0aVRhYmxlIGZyb20gJy4vbXVsdGlUYWJsZSc7XHJcbmltcG9ydCB7REFUQV9BUEl9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbigkID0+IHtcclxuXHRpZiAoISQpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihgJCBpcyB1bmRlZmluZWRgKTtcclxuXHR9XHJcblx0JC5mbi5tdWx0aVRhYmxlID0gZnVuY3Rpb24gKG9wdGlvbnNPck1ldGhvZCwgLi4uYXJncykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCAkdGFibGUgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0bGV0IGFwaSA9ICR0YWJsZS5kYXRhKERBVEFfQVBJKTtcclxuXHJcblx0XHRcdGlmICghYXBpKSB7XHJcblx0XHRcdFx0YXBpID0gbmV3IE11bHRpVGFibGUoJHRhYmxlLCBvcHRpb25zT3JNZXRob2QpO1xyXG5cdFx0XHRcdCR0YWJsZS5kYXRhKERBVEFfQVBJLCBhcGkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zT3JNZXRob2QgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0cmV0dXJuIGFwaVtvcHRpb25zT3JNZXRob2RdKC4uLmFyZ3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkLm11bHRpVGFibGUgPSBNdWx0aVRhYmxlO1xyXG59KSgkKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb3JlJztcclxuaW1wb3J0IEZsb2F0SGVhZCBmcm9tICcuL2Zsb2F0SGVhZCc7XHJcbmltcG9ydCBDb2xSZXNpemUgZnJvbSAnLi9jb2xSZXNpemUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlUYWJsZSBleHRlbmRzIENvbFJlc2l6ZShGbG9hdEhlYWQoVGFibGUpKSB7XHJcblx0Y29uc3RydWN0b3IoJHRhYmxlLCBvcHRpb25zKSB7XHJcblx0XHRzdXBlcigkdGFibGUsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuaW5pdFJlc2l6ZSgpO1xyXG5cdFx0dGhpcy5pbml0SGVhZCgpO1xyXG5cdFx0dGhpcy5wbGF5KCk7XHJcblx0fVxyXG5cclxuXHRwbGF5KCkge1xyXG5cdFx0Y29uc29sZS5pbmZvKCdpbml0IGNsYXNzIE11bHRpVGFibGUnKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdH1cclxufTsiXX0=
