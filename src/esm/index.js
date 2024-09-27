import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
function urlDirname(url) {
  return dirname(fileURLToPath(url));
}
function urlJoin(url) {
  for (var _len = arguments.length, str = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    str[_key - 1] = arguments[_key];
  }
  return join.apply(void 0, [urlDirname(url)].concat(str));
}
export default urlDirname;
export { fileURLToPath as filename, urlJoin as join, urlDirname as dirname };
