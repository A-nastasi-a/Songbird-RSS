/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/results.js":
/*!************************!*\
  !*** ./src/results.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_results_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/results.scss */ \"./src/styles/results.scss\");\n/* harmony import */ var _assets_img_birdIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/birdIcon.svg */ \"./assets/img/birdIcon.svg\");\n/* harmony import */ var _assets_img_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/github.svg */ \"./assets/img/github.svg\");\n/* harmony import */ var _assets_img_rsLogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/rsLogo.svg */ \"./assets/img/rsLogo.svg\");\n\n\n\n\nvar iconPlace = document.querySelector('.logo img');\niconPlace.src = _assets_img_birdIcon_svg__WEBPACK_IMPORTED_MODULE_1__;\nvar burgerMenuSwitcher = document.querySelector('.hidden-menu .hide-menu');\nvar burderMenu = document.querySelector('.hidden-menu .burger-menu');\nvar gitHubIcon = document.querySelector('.footer-list li:first-child img');\ngitHubIcon.src = _assets_img_github_svg__WEBPACK_IMPORTED_MODULE_2__;\nvar rsIcon = document.querySelector('.footer-list li:last-child img');\nrsIcon.src = _assets_img_rsLogo_svg__WEBPACK_IMPORTED_MODULE_3__;\nvar scorePlace = document.querySelector('main .question-list .score');\nvar textForUser = document.querySelector('main .result-window .winner-text');\nvar restartButton = document.querySelector('main .result-window .came-back');\nvar Score = 0;\nrestartButton.addEventListener('click', function () {\n  window.location.href = \"../pages/quiz.html\";\n});\nfunction getLocalStorage() {\n  if (localStorage.getItem('currentScore')) {\n    Score = localStorage.getItem('currentScore');\n  }\n  scorePlace.innerText = \"Score: \".concat(Score);\n  if (Score < 30) {\n    textForUser.innerText = \"\\u0412\\u044B \\u043F\\u0440\\u043E\\u0448\\u043B\\u0438 \\u0432\\u0438\\u043A\\u0442\\u043E\\u0440\\u0438\\u043D\\u0443 \\u0438 \\u043D\\u0430\\u0431\\u0440\\u0430\\u043B\\u0438 \".concat(Score, \" \\u0438\\u0437 30 \\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u044B\\u0445 \\u0431\\u0430\\u043B\\u043B\\u043E\\u0432\");\n    restartButton.display = 'flex';\n  } else {\n    textForUser.innerText = \"\\u0412\\u044B \\u0438\\u0434\\u0435\\u0430\\u043B\\u044C\\u043D\\u043E \\u0441\\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0438\\u0441\\u044C \\u0441 \\u0432\\u0438\\u043A\\u0442\\u043E\\u0440\\u0438\\u043D\\u043E\\u0439 \\u0438 \\u043D\\u0430\\u0431\\u0440\\u0430\\u043B\\u0438 \\u043C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0443\\u043C - 30 \\u0431\\u0430\\u043B\\u043B\\u043E\\u0432\";\n    restartButton.classList.add('hidden-items');\n    document.querySelector('main .result-window hr').classList.add('hidden-items');\n  }\n}\nwindow.addEventListener('load', getLocalStorage);\nburgerMenuSwitcher.addEventListener('click', function () {\n  burderMenu.classList.toggle('show-menu');\n  burgerMenuSwitcher.classList.toggle('show-menu');\n});\n\n//# sourceURL=webpack://songbird/./src/results.js?");

/***/ }),

/***/ "./src/styles/results.scss":
/*!*********************************!*\
  !*** ./src/styles/results.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://songbird/./src/styles/results.scss?");

/***/ }),

/***/ "./assets/img/birdIcon.svg":
/*!*********************************!*\
  !*** ./assets/img/birdIcon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"birdIcon-7f73065db0a1ca43800a.svg\";\n\n//# sourceURL=webpack://songbird/./assets/img/birdIcon.svg?");

/***/ }),

/***/ "./assets/img/github.svg":
/*!*******************************!*\
  !*** ./assets/img/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"github-b5b84da485d04e6b7e81.svg\";\n\n//# sourceURL=webpack://songbird/./assets/img/github.svg?");

/***/ }),

/***/ "./assets/img/rsLogo.svg":
/*!*******************************!*\
  !*** ./assets/img/rsLogo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"rsLogo-90157dfd372dca0a60ba.svg\";\n\n//# sourceURL=webpack://songbird/./assets/img/rsLogo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/results.js");
/******/ 	
/******/ })()
;