/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/images/check-icon.svg":
/*!************************************!*\
  !*** ./dist/images/check-icon.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b5c61e221f058b1be97467c6f8e422cc.svg\");\n\n//# sourceURL=webpack:///./dist/images/check-icon.svg?");

/***/ }),

/***/ "./dist/images/trash-icon.svg":
/*!************************************!*\
  !*** ./dist/images/trash-icon.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cc76bc32cbf478b0f59eb944bb1398b3.svg\");\n\n//# sourceURL=webpack:///./dist/images/trash-icon.svg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../dist/images/check-icon.svg */ \"./dist/images/check-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../dist/images/trash-icon.svg */ \"./dist/images/trash-icon.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  color: white;\\n}\\n\\ninput {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n.container {\\n  display: grid;\\n  grid-template-columns: 25rem 1fr;\\n}\\n\\n.sidebar {\\n  background: #1f2225;\\n  height: 100vh;\\n  padding: 2rem;\\n  display: grid;\\n  grid-template-columns: auto 1fr;\\n  grid-template-rows: 3.2rem auto;\\n}\\n\\n.sidebar__title {\\n  font-size: 2rem;\\n  display: flex;\\n  align-items: center;\\n  margin-left: 1rem;\\n}\\n.sidebar__title > div {\\n  margin-left: 1rem;\\n}\\n\\n.sidebar__list {\\n  font-size: 1.5rem;\\n  margin-top: 2rem;\\n  margin-left: 1rem;\\n  grid-row: 2/3;\\n  grid-column: 2/3;\\n}\\n\\n.sidebar__item,\\n.sidebar__addProjectBtn {\\n  padding: 5px;\\n  margin: 2px 0;\\n  cursor: pointer;\\n  border-radius: 3px;\\n  display: flex;\\n}\\n.sidebar__item:hover,\\n.sidebar__addProjectBtn:hover {\\n  background-color: #264272;\\n}\\n\\n.sidebar__item.selected-project {\\n  background-color: #ff007652;\\n}\\n\\n.sidebar__addProject {\\n  display: flex;\\n  align-items: center;\\n}\\n.sidebar__addProject:hover {\\n  background-color: #1f2225;\\n}\\n\\n.sidebar__addProject--text {\\n  background-color: #1f2225;\\n  border: none;\\n  outline: none;\\n  padding-right: 2px;\\n  padding-bottom: 2px;\\n  color: white;\\n  border-bottom: 2px solid transparent;\\n}\\n.sidebar__addProject--text:focus {\\n  border-bottom: 2px solid #ff007652;\\n}\\n\\n.sidebar__addProjectBtn {\\n  font-size: 2rem;\\n}\\n.sidebar__addProjectBtn:hover {\\n  background-color: #ff007652;\\n}\\n\\n.right-container {\\n  background: #23262a;\\n  height: 100vh;\\n  padding: 3rem 10rem;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n}\\n.header svg {\\n  fill: yellow;\\n  width: 2.5rem;\\n  height: 2.5rem;\\n}\\n\\n.project-title {\\n  font-size: 2.7rem;\\n  display: flex;\\n  align-items: center;\\n  margin-left: 5px;\\n  padding-top: 2px;\\n}\\n\\n.addTodoBtn {\\n  margin-left: auto;\\n  outline: none;\\n  border: none;\\n  color: white;\\n  background-color: inherit;\\n  position: relative;\\n  font-size: 4rem;\\n  cursor: pointer;\\n  user-select: none;\\n}\\n\\n.todo-list {\\n  margin-top: 5rem;\\n}\\n\\n.todo {\\n  border-radius: 3px;\\n  transition: padding 0.3s ease, margin 0.3s ease;\\n  user-select: none;\\n}\\n\\n.todo__default {\\n  display: flex;\\n  align-items: center;\\n  padding: 0.5rem;\\n  border-radius: 3px;\\n  z-index: 10;\\n}\\n.todo__default:hover {\\n  background-color: #264272;\\n}\\n\\n.todo__checkbox {\\n  width: 1.3rem;\\n  height: 1.3rem;\\n  border: 1px solid #6b6d70;\\n  border-radius: 3px;\\n  position: relative;\\n  cursor: pointer;\\n}\\n\\n.todo__checkbox::before {\\n  content: \\\"\\\";\\n  width: 20px;\\n  height: 20px;\\n  position: absolute;\\n  top: -5px;\\n  left: -4px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  visibility: hidden;\\n}\\n\\n.todo__title {\\n  margin-left: 1rem;\\n  font-size: 1.5rem;\\n  background-color: inherit;\\n  border: none;\\n  color: white;\\n  outline: none;\\n  cursor: default;\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.todo__deleteBtn {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\n  background-size: contain;\\n  border: none;\\n  outline: none;\\n  height: 1.7rem;\\n  transform: translateX(2rem);\\n  padding-right: 1.7rem;\\n  opacity: 0;\\n  cursor: pointer;\\n  transition: 0.3s ease-out;\\n  margin-left: auto;\\n}\\n\\n.todo:not(.expanded):hover .todo__deleteBtn,\\n.sidebar__item:hover .todo__deleteBtn,\\n.todo__deleteBtn:hover {\\n  transform: translateX(0);\\n  transition: 0.3s ease;\\n  opacity: 1;\\n}\\n\\n.todo__expand {\\n  padding: 0.5rem;\\n  margin-left: 2.4rem;\\n  display: none;\\n}\\n\\n.todo.expanded {\\n  padding: 1rem 0;\\n  margin: 3rem 0;\\n  background-color: #2d3033;\\n  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.3);\\n  transition: padding 0.3s ease, margin 0.3s ease;\\n}\\n\\n.todo.expanded .todo__default {\\n  user-select: none;\\n}\\n.todo.expanded .todo__default:hover {\\n  background-color: #2d3033;\\n}\\n\\n.todo.expanded .todo__title {\\n  cursor: text;\\n}\\n\\n.todo.expanded > .todo__expand {\\n  display: block;\\n}\\n\\n.todo__notes {\\n  color: white;\\n  font-size: 1.4rem;\\n  background-color: #2d3033;\\n  border: none;\\n  resize: none;\\n  width: 100%;\\n  height: 4rem;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  outline: none;\\n}\\n\\n.todo__checkbox.checked::before {\\n  visibility: visible;\\n}\\n\\n.todo__title.checked {\\n  text-decoration: line-through;\\n  color: #919395;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet globalTodoIndex = 4;\nlet todos = [\n  {\n    title: 'Buy milk on my way home',\n    notes: 'One litter of milk',\n    checkedState: '',\n    todoid: '1',\n    notesHeight: '40px',\n    project: 'Default',\n  },\n  {\n    title: 'Drink milk',\n    notes: 'Drink a glass of milk',\n    checkedState: 'checked',\n    todoid: '2',\n    notesHeight: '40px',\n    project: 'Default',\n  },\n  {\n    title: 'Welcome to this To-Do list app',\n    notes: '',\n    checkedState: '',\n    todoid: '3',\n    notesHeight: '40px',\n    project: 'Welcome',\n  }\n]\n\nlet projects = [\n  {\n    title: 'Default',\n    projectid: '1',\n    selectState: 'selected-project',\n  },\n  {\n    title: 'Welcome',\n    projectid: '2',\n    selectState: '',\n  }\n]\n\n\nconst initListeners = () => {\n  todoListClickHandler();\n  todoListDoubleClickHandler();\n  todoListInputHandler();\n  autoResizeNotes();\n  addCollapseListenerToTodo();\n  sidebarClickHandler();\n}\n\n// To-Do list event delegation\nconst todoListClickHandler = () => {\n  const todoList = document.getElementById('todo-list');\n  todoList.addEventListener('click', (e) => {\n    const target = e.target;\n    if (target.classList.contains('todo__checkbox')) {\n      toggleCheckedState(e);\n    } else if (target.classList.contains('todo__deleteBtn')) {\n      deleteTodo(e);\n    }\n  })\n}\n\nconst todoListDoubleClickHandler = () => {\n  const todoList = document.getElementById('todo-list');\n  todoList.addEventListener('dblclick', (e) => {\n    const target = e.target;\n    if (target.classList.contains('todo__title') || target.classList.contains('todo__default')) {\n      expandTodo(e);\n    } \n  })\n}\n\nconst todoListInputHandler = () => {\n  const todoList = document.getElementById('todo-list');\n  todoList.addEventListener('input', (e) => {\n    const target = e.target;\n    const targetTodo = getTargetTodo(e);\n\n    if (target.classList.contains('todo__title')) {\n      targetTodo.title = target.value;\n    } else if (target.classList.contains('todo__notes')) {\n      targetTodo.notes = target.value;\n    }\n  })\n}\n\n// Get target object\nconst getTargetTodo = (e) => {\n  const todoid = e.target.dataset.todoid;\n  const targetTodo = todos.find((todo) => todo.todoid === todoid);\n  return targetTodo;\n}\n\nconst getTargetProject = (e) => {\n  let projectid;\n  if (e.target) {\n    projectid = e.target.dataset.projectid;\n  } else {\n    projectid = e.dataset.projectid;\n  }\n  const targetProject = projects.find((project) => project.projectid === projectid);\n  return targetProject;\n}\n\n// Add To-Do \nconst addListenerToAddTodoBtn = () => {\n  const addTodoBtn = document.querySelector('.addTodoBtn');\n  addTodoBtn.addEventListener('click', (e) => {\n    globalTodoIndex += 1;\n    const newTodoObject = todoFactory();\n    todos.push(newTodoObject);\n    renderTodo(newTodoObject);\n  })\n}\n\naddListenerToAddTodoBtn();\n\nconst todoFactory = () => ({\n  title: '',\n  notes: '',\n  checkedState: '',\n  todoid: `${globalTodoIndex}`,\n  notesHeight: '40px',\n  project: document.querySelector('.project-title').textContent,\n})\n\n// Delete To-Do\nconst deleteTodo = (e) => {\n  const targetTodo = getTargetTodo(e);\n  const toBeDeleted = e.target.closest('.todo');\n  toBeDeleted.remove();\n  todos.splice(todos.indexOf(targetTodo), 1);\n  console.log(todos)\n}\n\n// Render To-Do\nconst renderTodo = (todo) => {\n  const todoList = document.querySelector('.todo-list');\n  const todoHTML = `\n  <div class=\"todo\">\n      <div class=\"todo__default\">\n          <div class=\"todo__checkbox ${todo.checkedState}\" data-todoid=\"${todo.todoid}\"></div>\n          <input type=\"text\" value=\"${todo.title}\" class=\"todo__title ${todo.checkedState}\" data-todoid=\"${todo.todoid}\" placeholder=\"New To-Do\" readonly ></input>\n          <button class=\"todo__deleteBtn\" data-todoid=\"${todo.todoid}\"></button>\n      </div>\n      <div class=\"todo__expand\">\n          <textarea class=\"todo__notes resize-ta\" placeholder=\"Notes\" data-todoid=\"${todo.todoid}\" style=\"height: ${todo.notesHeight};\">${todo.notes}</textarea>\n      </div>\n  </div>`;\n  todoList.insertAdjacentHTML('beforeend', todoHTML);\n}\n\nconst renderAllTodos = (todos) => {\n  todos.map((todo) => renderTodo(todo));\n}\n\n// Render projects\nconst renderProject = (project) => {\n  const addProject = document.getElementById('sidebar__addProject');\n  const projectHTML = `\n  <div class=\"sidebar__item ${project.selectState}\" data-projectid=\"${project.projectid}\">\n      <div>${project.title}</div>\n      <button class=\"todo__deleteBtn\"></button>\n  </div>`;\n\n  addProject.insertAdjacentHTML('beforebegin', projectHTML);\n}\n\nconst renderAllProjects = (projects) => {\n  projects.map((project) => renderProject(project));\n}\n\nconst filterProjectTodos = (selectedProjectTitle) => {\n  const targetTodos = todos.filter((todo) => todo.project === selectedProjectTitle);\n  return targetTodos;\n}\n\n// Auto resize notes based on line break\nconst autoResizeNotes = () => {\n  const todoList = document.getElementById('todo-list');\n  todoList.addEventListener('keyup', (e) => {\n    if (e.target.classList.contains('resize-ta')) {\n      const targetTodo = getTargetTodo(e);\n      const notesHeight = calcHeight(e.target.value) + 'px';\n\n      targetTodo.notesHeight = notesHeight;\n      e.target.style.height = notesHeight;\n    }\n  })\n};\n\nconst calcHeight = (value) => {\n  const numberOfLineBreaks = (value.match(/\\n/g) || []).length;\n  // min-height + lines x line-height + padding + border\n  const newHeight = 20 + numberOfLineBreaks * 16 + 20 ;\n  return newHeight;\n}\n\n// Define actions when double click on todo (expand)\nconst expandTodo = (e) => {\n  const target = e.target;\n  // If double click on checkbox or deleteBtn, don't expand todo\n  const clickedCheckbox = target.classList.contains('todo__checkbox');\n  const clickedDeleteBtn = target.classList.contains('todo__deleteBtn');\n  if (clickedCheckbox || clickedDeleteBtn) return;\n\n  target.closest('.todo').classList.add('expanded');\n  document.querySelector('.todo.expanded .todo__title').removeAttribute('readonly');\n  // Remove any accidentally selected text\n  window.getSelection().removeAllRanges();\n}\n\n// Define actions when click outside of todo when expanded (collapse)\nconst addCollapseListenerToTodo = () => {\n  window.addEventListener('click', e => {  \n    const expandedTodo = document.querySelector('.todo.expanded'); \n    const clickedOutsideTodo = expandedTodo && !expandedTodo.contains(e.target);\n\n    if (clickedOutsideTodo) {\n      document.querySelector('.todo.expanded .todo__title').setAttribute('readonly', 'true');\n      const expandedClass = Array.from(document.querySelectorAll('.expanded'));\n      expandedClass.map(x => {\n        x.classList.remove('expanded');\n      })\n    }\n  });\n}\n\n// Define actions when clicked on checkbox\nconst toggleCheckedState = (e) => {\n  const targetTodo = getTargetTodo(e);\n  const checkedState = e.target.classList.contains('checked');\n\n  if (checkedState) {\n    removeCheckedState(e);\n    targetTodo.checkedState = '';\n  } else {\n    addCheckedState(e);\n    targetTodo.checkedState = 'checked';\n  }\n}\n\nconst addCheckedState = (e) => {\n  const target = e.target;\n  target.classList.add('checked');\n  target.nextElementSibling.classList.add('checked');\n}\n\nconst removeCheckedState =  (e) => {\n  const target = e.target;\n  target.classList.remove('checked');\n  target.nextElementSibling.classList.remove('checked');\n}\n\n// Set current project\nconst sidebarClickHandler = () => {\n  const sidebar = document.getElementById('sidebar__list');\n  sidebar.addEventListener('click', (e) => {\n    const target = e.target;\n    if (target.classList.contains('sidebar__item') && !target.classList.contains('sidebar__addProject')) {\n      setCurrentProject(e);\n    } else if (target.classList.contains('todo__deleteBtn')) {\n      deleteProject(e);\n    }\n\n    \n  })\n}\n\nconst setCurrentProject = (e) => {\n  const selectedProjectTitle = e.target.firstElementChild.textContent;\n  const projectFilteredTodos = filterProjectTodos(selectedProjectTitle);\n\n  selectProject(e);\n  document.getElementById('project-title').textContent = selectedProjectTitle;\n  removeAllTodoListItems();\n  renderAllTodos(projectFilteredTodos);\n}\n\nconst selectProject = (e) => {\n  const target = e.target;\n  const targetProject = getTargetProject(e);\n  const previousSelectedProject = document.querySelector('.selected-project');\n  const previousSelectedTargetProject = getTargetProject(previousSelectedProject);\n  \n  if (target === previousSelectedProject) return;\n  \n  previousSelectedProject.classList.remove('selected-project');\n  previousSelectedTargetProject.selectState = ''; \n  target.classList.add('selected-project');\n  targetProject.selectState = 'selected-project';\n}\n\nconst removeAllTodoListItems = () => {\n  const todoList = document.getElementById('todo-list');\n  while (todoList.firstChild) {\n    todoList.removeChild(todoList.firstChild);\n  }\n}\n\n// Delete project \nconst deleteProject = (e) => {\n  e.target.closest('.sidebar__item').remove();\n  //console.log(e.target.closest('.sidebar__item'));\n}\n\nrenderAllTodos(todos);\nrenderAllProjects(projects);\ninitListeners();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });