'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var propTypes = require('prop-types');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

Atom.propTypes = {
  m: propTypes.object,
  p: propTypes.object
};

function Atom(props) {
  var as = props.as,
      m = props.m,
      p = props.p,
      className = props.className,
      rest = objectWithoutProperties(props, ['as', 'm', 'p', 'className']);


  var marginCss = m ? ' ' + getSpacingCss('m', m) : '';
  var paddingCss = p ? ' ' + getSpacingCss('p', p) : '';

  var El = as || 'div';
  var cssClasses = classnames(marginCss + paddingCss, defineProperty({}, className, className));
  return React.createElement(El, _extends({ className: cssClasses }, rest));
}

function getSpacingCss(type, sizes) {
  return Object.entries(sizes).reduce(function (css, _ref) {
    var _ref2 = slicedToArray(_ref, 2),
        side = _ref2[0],
        size = _ref2[1];

    return (css + ' ' + type + side + '-' + size).trim();
  }, '');
}

Container.propTypes = {
  fluid: propTypes.bool
};

function Container(_ref) {
  var fluid = _ref.fluid,
      rest = objectWithoutProperties(_ref, ['fluid']);


  var cssClasses = classnames({
    'container-fluid': fluid,
    'container': !fluid
  });

  return React.createElement(Atom, _extends({ className: cssClasses }, rest));
}

Col.propTypes = {
  xs: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  sm: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  md: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  lg: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  xl: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  order: propTypes.oneOfType([propTypes.string, propTypes.number]),
  offset: propTypes.object // {md: 8, xs: 2}
};

function Col(props) {
  var _classNames;

  var xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      order = props.order,
      offset = props.offset,
      className = props.className,
      rest = objectWithoutProperties(props, ['xs', 'sm', 'md', 'lg', 'xl', 'order', 'offset', 'className']);


  var sizeCss = getSizesCss({ xs: xs, sm: sm, md: md, lg: lg, xl: xl });
  var offsetCss = offset ? ' ' + getOffsetCss(offset) : '';

  var cssClasses = classnames(sizeCss + offsetCss, (_classNames = {}, defineProperty(_classNames, className, className), defineProperty(_classNames, 'order-' + order, order), _classNames));

  return React.createElement(Atom, _extends({ className: cssClasses }, rest));
}

// {md: 8, xs: 2}
function getOffsetCss(offset) {
  return Object.entries(offset).reduce(function (css, offset) {
    return css + ['offset'].concat(toConsumableArray(offset)).join('-');
  }), '';
}

// {md: 8, xs: 2}
function getSizesCss(sizes) {
  return Object.entries(sizes).reduce(function (css, size) {
    var _size = slicedToArray(size, 2),
        bp = _size[0],
        num = _size[1];

    switch (true) {
      case num === true:
        return css + ' col-' + bp;
      case num <= 12:
        return css + ' ' + ['col'].concat(toConsumableArray(size)).join('-');
      default:
        return css;
    }
  }, 'col');
}

function Row(props) {
  var className = props.className,
      rest = objectWithoutProperties(props, ['className']);

  var cssClasses = classnames('row', defineProperty({}, className, className));

  return React.createElement(Atom, _extends({ className: cssClasses }, rest));
}

Row.propTypes = {
  noGutters: propTypes.bool
};

exports.Container = Container;
exports.Col = Col;
exports.Row = Row;
//# sourceMappingURL=index.js.map
