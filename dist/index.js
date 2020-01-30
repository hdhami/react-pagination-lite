'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var deepClone = function deepClone(obj) {
  if (_typeof(obj) !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    var temp1 = [];

    for (var i = 0; i < obj.length; i += 1) {
      temp1.push(deepClone(obj[i]));
    }

    return temp1;
  }

  if (!Array.isArray(obj)) {
    var temp2 = {};
    var objKeys = Object.keys(obj);

    for (var _i = 0; _i < objKeys.length; _i += 1) {
      temp2[objKeys[_i]] = deepClone(obj[objKeys[_i]]);
    }

    return temp2;
  }

  return obj;
};

var PrevButton = function PrevButton(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var fill = disabled ? '#b5b5b5' : '#927239';
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "7.41",
    height: "12",
    viewBox: "0 0 7.41 12"
  }, React__default.createElement("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
    fill: fill,
    transform: "translate(-8 -6)"
  }));
};

var NextButton = function NextButton(_ref2) {
  var _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  var fill = disabled ? '#b5b5b5' : '#927239';
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "7.41",
    height: "12",
    viewBox: "0 0 7.41 12"
  }, React__default.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
    fill: fill,
    transform: "translate(-8.59 -6)"
  }));
};

var Pagination = function Pagination(_ref3) {
  var range = _ref3.range,
      activePage = _ref3.activePage,
      totalCount = _ref3.totalCount,
      itemsPerPage = _ref3.itemsPerPage,
      onPaginate = _ref3.onPaginate;
  var perPageItems = itemsPerPage > totalCount ? totalCount : itemsPerPage;
  var numberOfPagesPossible = Math.ceil(totalCount / perPageItems);
  var pageRange = range > numberOfPagesPossible ? numberOfPagesPossible : range;

  var getPageNationItems = function getPageNationItems() {
    var items = [];

    for (var i = 1; i <= pageRange; i += 1) {
      items.push(i);
    }

    return items;
  };

  var _useState = React.useState(getPageNationItems()),
      _useState2 = _slicedToArray(_useState, 2),
      paginationItems = _useState2[0],
      setPaginationItems = _useState2[1];

  React.useEffect(function () {
    var currentPaginationItems = deepClone(paginationItems);
    var pageRangeFirstItem = currentPaginationItems[0];
    var pageRangeLastItem = currentPaginationItems[pageRange - 1];

    if (activePage > pageRangeLastItem) {
      currentPaginationItems.push(activePage);
      currentPaginationItems.shift();
    } else if (activePage < pageRangeFirstItem) {
      currentPaginationItems.unshift(activePage);
      currentPaginationItems.pop();
    }

    setPaginationItems(currentPaginationItems);
  }, [activePage]);

  var onPagination = function onPagination(pageNum) {
    if (pageNum === activePage || pageNum === 0 || pageNum > numberOfPagesPossible) {
      return;
    }

    if (typeof onPaginate === 'function') {
      onPaginate(pageNum);
    }
  };

  var buttonStyle = {
    height: '100%',
    padding: '0 12px',
    border: 'none',
    ':focus': {
      outline: 'none'
    },
    cursor: 'pointer'
  };
  var listStyle = {
    flex: 1,
    'margin-right': '8px',
    ':last-child': {
      'margin-right': '0px'
    }
  };

  var getStyleObject = function getStyleObject(pageId) {
    return activePage === pageId ? _objectSpread2({
      background: '#bda770'
    }, buttonStyle) : _objectSpread2({
      background: '#f2f2f2'
    }, buttonStyle);
  };

  var renderPaginationItems = function renderPaginationItems() {
    return paginationItems.map(function (pageId) {
      return React__default.createElement("li", {
        key: pageId,
        style: listStyle
      }, React__default.createElement("button", {
        type: "button",
        className: "_page_nv_btn",
        onClick: function onClick() {
          onPagination(pageId);
        },
        style: getStyleObject(pageId)
      }, pageId));
    });
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n                        ._page_nv_btn:focus{\n                            outline:none\n                        }"
    }
  }), React__default.createElement("ul", {
    style: {
      display: 'flex',
      'flex-direction': 'row',
      height: '100%'
    }
  }, React__default.createElement("li", {
    style: listStyle
  }, React__default.createElement("button", {
    type: "button",
    className: "_page_nv_btn",
    style: _objectSpread2({}, buttonStyle, {
      border: '1px solid #eee'
    }),
    onClick: function onClick() {
      var pageId = activePage - 1;
      onPagination(pageId);
    }
  }, React__default.createElement(PrevButton, {
    disabled: activePage - 1 === 0
  }))), renderPaginationItems(), React__default.createElement("li", {
    style: _objectSpread2({}, listStyle, {
      'margin-right': '0px'
    })
  }, React__default.createElement("button", {
    type: "button",
    className: "_page_nv_btn",
    style: _objectSpread2({}, buttonStyle, {
      border: '1px solid #eee'
    }),
    onClick: function onClick() {
      var pageId = activePage + 1;
      onPagination(pageId);
    }
  }, React__default.createElement(NextButton, {
    disabled: activePage + 1 > numberOfPagesPossible
  })))));
};

module.exports = Pagination;
