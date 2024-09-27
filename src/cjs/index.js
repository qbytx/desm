"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.dirname = urlDirname;
Object.defineProperty(exports, "filename", {
  enumerable: true,
  get: function get() {
    return _url.fileURLToPath;
  }
});
exports.join = urlJoin;
var _url = require("url");
var _path = require("path");
function urlDirname(url) {
  return (0, _path.dirname)((0, _url.fileURLToPath)(url));
}
function urlJoin(url) {
  for (var _len = arguments.length, str = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    str[_key - 1] = arguments[_key];
  }
  return _path.join.apply(void 0, [urlDirname(url)].concat(str));
}
var _default = exports["default"] = urlDirname;
