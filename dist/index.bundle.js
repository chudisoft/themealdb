(self["webpackChunkthemealdb"] = self["webpackChunkthemealdb"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */

.toastify {
    padding: 12px 20px;
    color: #ffffff;
    display: inline-block;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);
    background: linear-gradient(135deg, #73a5ff, #5477f5);
    position: fixed;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    max-width: calc(50% - 20px);
    z-index: 2147483647;
}

.toastify.on {
    opacity: 1;
}

.toast-close {
    background: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    opacity: 0.4;
    padding: 0 5px;
}

.toastify-right {
    right: 15px;
}

.toastify-left {
    left: 15px;
}

.toastify-top {
    top: -150px;
}

.toastify-bottom {
    bottom: -150px;
}

.toastify-rounded {
    border-radius: 25px;
}

.toastify-avatar {
    width: 1.5em;
    height: 1.5em;
    margin: -7px 5px;
    border-radius: 2px;
}

.toastify-center {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    max-width: fit-content;
    max-width: -moz-fit-content;
}

@media only screen and (max-width: 360px) {
    .toastify-right, .toastify-left {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        max-width: fit-content;
    }
}
`, "",{"version":3,"sources":["webpack://./node_modules/toastify-js/src/toastify.css"],"names":[],"mappings":"AAAA;;;;;;EAME;;AAEF;IACI,kBAAkB;IAClB,cAAc;IACd,qBAAqB;IACrB,uFAAuF;IACvF,6DAA6D;IAC7D,qDAAqD;IACrD,eAAe;IACf,UAAU;IACV,wDAAwD;IACxD,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,sBAAsB;IAC1B;AACJ","sourcesContent":["/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/logo.png */ "./src/assets/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: "Lora", serif;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #dfdfdf;
}

.app-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.navbar-logo {
  height: auto;
  margin-left: 1.5rem;
  padding: 18px;
  padding-left: 18rem;
  list-style: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.navbar {
  display: flex;
  height: 65px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #2d2c38;
  border: 2px solid #dc3545;
  flex-direction: row;
}

.navbar-nav {
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  flex-direction: row;
  padding-left: 1rem;
  list-style: none;
  box-sizing: border-box;
  position: sticky;
  top: 0;
}

.navbar-nav > li.nav-item > a.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
}

.navbar-nav > li.nav-item > a.nav-link:hover,
.navbar-nav > li.nav-item > a.nav-link:focus {
  color: #f05f40;
}

a {
  text-decoration: none;
}

main {
  margin-top: 5em;
  min-height: 75vh;
}

section,
footer {
  padding: 2em;
}

footer {
  border-top: solid 2px #000;
  display: flex;
  justify-content: center;
  font-weight: 900;
}

.modal {
  display: none;
}

.modal.show {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #c1c7d0d5;
  z-index: 2000;
  padding: 1em;
  overflow-y: initial !important;
}

.modal-container {
  flex-wrap: wrap;
  background-color: #fff;
  color: #000;
  padding: 2em;
  border-radius: 1em;
  height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  right: 2em;
  cursor: pointer;
}

.text-center {
  text-align: center;
}

.row {
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.col-md-12,
.col-md-6,
.col-md-4,
.meal-detail {
  max-width: 100%;
}

#itemImage {
  max-width: 25em;
  max-height: 10em;
}

#category,
#area,
#tags {
  font-weight: 400;
  font-size: large;
}

.ingredients {
  padding: 0 1em;
}

#modal-section {
  background-color: #fcfafa;
  max-width: 90%;
  font-size: large;
  padding: 2em 0;
}

.comment-list-section h2 {
  color: #3d3d3d;
  font-weight: 400;
}

#modal-section h2 {
  color: #3d3d3d;
  font-weight: 400;
}

.comment-form,
.comment-list-section {
  padding: 1em 0;
}

.comment-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  flex-direction: column;
  min-width: 38%;
}

.comment-list {
  list-style: none;
}

.comment-form input,
.comment-form textarea,
.comment-form button {
  border-radius: 5px;
  padding: 0.2em 0.5em;
  width: 100%;
}

.comment-form input,
.comment-form button {
  height: 3em;
}

.comment-form textarea {
  height: 10em;
}

.bg {
  padding: 1em;
  border-bottom: #d2d2d2 solid 1px;
}

.comment-list-section p {
  padding: 0 0 1em 1em;
}

.ps-2 {
  padding-left: 0.5em;
}

.mb-2 {
  margin-bottom: 2em;
}

.mtb-2 {
  margin-top: 2em;
  margin-bottom: 2em;
}

.hr {
  max-width: 10em;
  margin: 0 auto;
  border: #0e6199 solid 2px;
  margin-bottom: 2em;
}

.comment-list li:nth-child(odd) {
  background-color: #5ca6f5;
  color: #fff;
}

.bg-primary {
  background-color: #3295d0;

  /* background-color: #5d9ee3; */
}

.bg-primary-light {
  background-color: #62a3e7;
}

.comment-list-section {
  max-width: 90%;
  font-size: large;
  padding: 2em 0;
}

.meal-list {
  justify-content: center;
}

.meal-detail {
  display: flex;
  flex-direction: column;
  border: #000 2px solid;
  border-radius: 10px;
  justify-content: center;
  padding: 1em;
}

.meal-detail img {
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

.meal-detail div {
  width: 100%;
  padding: 0.5em 0;
}

.meal-detail i {
  color: #1cda5b;
  cursor: pointer;
}

.meal-detail button {
  padding: 0.5em 1em;
}

.meal-detail button:hover {
  background-color: #1c9eda;
  color: #fff;
  cursor: pointer;
}

.meal-detail:hover {
  border: #0e6199 4px solid;
  box-shadow: 4px -6px rgb(7, 36, 131);
}

.comment-list li:hover,
.comment-form button:hover {
  background-color: #303030;
  color: #fff;
  cursor: pointer;
}

/* Put all mobile code above this. */
@media only screen and (min-width: 768px) {
  .meal-detail {
    max-width: 20%;
  }

  .col-md-4 {
    width: 18%;
  }

  .col-md-6 {
    width: 45%;
  }

  .modal-container {
    padding: 2em 5em;
  }

  .comment-list-section {
    width: 60%;
  }

  .modal-close {
    right: 4em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lora\", serif;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #dfdfdf;\r\n}\r\n\r\n.app-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.navbar-logo {\r\n  height: auto;\r\n  margin-left: 1.5rem;\r\n  padding: 18px;\r\n  padding-left: 18rem;\r\n  list-style: none;\r\n  background-image: url('../src/assets/images/logo.png');\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  height: 65px;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem;\r\n  background-color: #2d2c38;\r\n  border: 2px solid #dc3545;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-nav {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  flex-direction: row;\r\n  padding-left: 1rem;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link {\r\n  color: rgba(255, 255, 255, 0.85);\r\n  font-size: 0.9rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link:hover,\r\n.navbar-nav > li.nav-item > a.nav-link:focus {\r\n  color: #f05f40;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 5em;\r\n  min-height: 75vh;\r\n}\r\n\r\nsection,\r\nfooter {\r\n  padding: 2em;\r\n}\r\n\r\nfooter {\r\n  border-top: solid 2px #000;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n}\r\n\r\n.modal.show {\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  max-width: 100%;\r\n  background-color: #c1c7d0d5;\r\n  z-index: 2000;\r\n  padding: 1em;\r\n  overflow-y: initial !important;\r\n}\r\n\r\n.modal-container {\r\n  flex-wrap: wrap;\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 2em;\r\n  border-radius: 1em;\r\n  height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-close {\r\n  position: absolute;\r\n  right: 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  gap: 0.5em;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5em;\r\n}\r\n\r\n.col-md-12,\r\n.col-md-6,\r\n.col-md-4,\r\n.meal-detail {\r\n  max-width: 100%;\r\n}\r\n\r\n#itemImage {\r\n  max-width: 25em;\r\n  max-height: 10em;\r\n}\r\n\r\n#category,\r\n#area,\r\n#tags {\r\n  font-weight: 400;\r\n  font-size: large;\r\n}\r\n\r\n.ingredients {\r\n  padding: 0 1em;\r\n}\r\n\r\n#modal-section {\r\n  background-color: #fcfafa;\r\n  max-width: 90%;\r\n  font-size: large;\r\n  padding: 2em 0;\r\n}\r\n\r\n.comment-list-section h2 {\r\n  color: #3d3d3d;\r\n  font-weight: 400;\r\n}\r\n\r\n#modal-section h2 {\r\n  color: #3d3d3d;\r\n  font-weight: 400;\r\n}\r\n\r\n.comment-form,\r\n.comment-list-section {\r\n  padding: 1em 0;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5em;\r\n  flex-direction: column;\r\n  min-width: 38%;\r\n}\r\n\r\n.comment-list {\r\n  list-style: none;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form textarea,\r\n.comment-form button {\r\n  border-radius: 5px;\r\n  padding: 0.2em 0.5em;\r\n  width: 100%;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form button {\r\n  height: 3em;\r\n}\r\n\r\n.comment-form textarea {\r\n  height: 10em;\r\n}\r\n\r\n.bg {\r\n  padding: 1em;\r\n  border-bottom: #d2d2d2 solid 1px;\r\n}\r\n\r\n.comment-list-section p {\r\n  padding: 0 0 1em 1em;\r\n}\r\n\r\n.ps-2 {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.mb-2 {\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.mtb-2 {\r\n  margin-top: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.hr {\r\n  max-width: 10em;\r\n  margin: 0 auto;\r\n  border: #0e6199 solid 2px;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.comment-list li:nth-child(odd) {\r\n  background-color: #5ca6f5;\r\n  color: #fff;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #3295d0;\r\n\r\n  /* background-color: #5d9ee3; */\r\n}\r\n\r\n.bg-primary-light {\r\n  background-color: #62a3e7;\r\n}\r\n\r\n.comment-list-section {\r\n  max-width: 90%;\r\n  font-size: large;\r\n  padding: 2em 0;\r\n}\r\n\r\n.meal-list {\r\n  justify-content: center;\r\n}\r\n\r\n.meal-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: #000 2px solid;\r\n  border-radius: 10px;\r\n  justify-content: center;\r\n  padding: 1em;\r\n}\r\n\r\n.meal-detail img {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.meal-detail div {\r\n  width: 100%;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.meal-detail i {\r\n  color: #1cda5b;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-detail button {\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.meal-detail button:hover {\r\n  background-color: #1c9eda;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-detail:hover {\r\n  border: #0e6199 4px solid;\r\n  box-shadow: 4px -6px rgb(7, 36, 131);\r\n}\r\n\r\n.comment-list li:hover,\r\n.comment-form button:hover {\r\n  background-color: #303030;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Put all mobile code above this. */\r\n@media only screen and (min-width: 768px) {\r\n  .meal-detail {\r\n    max-width: 20%;\r\n  }\r\n\r\n  .col-md-4 {\r\n    width: 18%;\r\n  }\r\n\r\n  .col-md-6 {\r\n    width: 45%;\r\n  }\r\n\r\n  .modal-container {\r\n    padding: 2em 5em;\r\n  }\r\n\r\n  .comment-list-section {\r\n    width: 60%;\r\n  }\r\n\r\n  .modal-close {\r\n    right: 4em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.css":
/*!***************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./toastify.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function(global) {
  // Object initialization
  var Toastify = function(options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
    // Library version
    version = "1.12.0";

  // Set the default global options
  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {
    },
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: '',
    backgroundColor: '',
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {
    },
    offset: {x: 0, y: 0},
    escapeMarkup: true,
    ariaLive: 'polite',
    style: {background: ''}
  };

  // Defining the prototype of the object
  Toastify.lib = Toastify.prototype = {
    toastify: version,

    constructor: Toastify,

    // Initializing the object with required parameters
    init: function(options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      }

      // Creating the options object
      this.options = {};

      this.toastElement = null;

      // Validating the options
      this.options.text = options.text || Toastify.defaults.text; // Display message
      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
      this.options.style = options.style || Toastify.defaults.style;
      if(options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      }

      // Returning the current object for chaining functions
      return this;
    },

    // Building the DOM element
    buildToast: function() {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      }

      // Creating the DOM object
      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className;

      // Positioning toast to left or right or center
      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.')
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      }

      // Assigning gravity of element
      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
      }

      // Loop through our style object and apply styles to divElement
      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      }

      // Announce the toast to screen readers
      if (this.options.ariaLive) {
        divElement.setAttribute('aria-live', this.options.ariaLive)
      }

      // Adding the toast message/node
      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node)
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;

          avatarElement.className = "toastify-avatar";

          if (this.options.position == "left" || this.options.positionLeft === true) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      }

      // Adding a close icon to the toast
      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("button");
        closeElement.type = "button";
        closeElement.setAttribute("aria-label", "Close");
        closeElement.className = "toast-close";
        closeElement.innerHTML = "&#10006;";

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );

        //Calculating screen width
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

        // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px
        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      }

      // Clear timeout while toast is focused
      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        // stop countdown
        divElement.addEventListener(
          "mouseover",
          function(event) {
            window.clearTimeout(divElement.timeOutValue);
          }
        )
        // add back the timeout
        divElement.addEventListener(
          "mouseleave",
          function() {
            divElement.timeOutValue = window.setTimeout(
              function() {
                // Remove the toast from DOM
                self.removeElement(divElement);
              },
              self.options.duration
            )
          }
        )
      }

      // Adding an on-click destination path
      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this)
        );
      }

      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }

      // Adding offset
      if(typeof this.options.offset === "object") {

        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);

        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

      }

      // Returning the generated element
      return divElement;
    },

    // Displaying the toast
    showToast: function() {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast();

      // Getting the root element to with the toast needs to be added
      var rootElement;
      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      // Validating if root element is present in DOM
      if (!rootElement) {
        throw "Root element is not defined";
      }

      // Adding the DOM element
      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);

      // Repositioning the toasts in case multiple toasts are present
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(
          function() {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        ); // Binding `this` for function invocation
      }

      // Supporting function chaining
      return this;
    },

    hideToast: function() {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement);
    },

    // Removing the element from the DOM
    removeElement: function(toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", "");

      // Removing the element from DOM after transition end
      window.setTimeout(
        function() {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          }

          // Remove the element from the DOM, only when the parent node was not removed before.
          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          }

          // Calling the callback function
          this.options.callback.call(toastElement);

          // Repositioning the toasts again
          Toastify.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },
  };

  // Positioning the toasts on the DOM
  Toastify.reposition = function() {

    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var offsetSize = {
      top: 15,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("toastify");

    var classUsed;

    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length-1)
      // Spacing between toasts
      var offset = 15;

      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }

    // Supporting function chaining
    return this;
  };

  // Helper function to get offset.
  function getAxisOffsetAValue(axis, options) {

    if(options.offset[axis]) {
      if(isNaN(options.offset[axis])) {
        return options.offset[axis];
      }
      else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';

  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (
      elem.className &&
      elem.className
        .trim()
        .split(/\s+/gi)
        .indexOf(yourClass) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Setting up the prototype for the init object
  Toastify.lib.init.prototype = Toastify.lib;

  // Returning the Toastify function to be assigned to the window object/module
  return Toastify;
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_meallist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/meallist.js */ "./src/modules/meallist.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
const baseUrlInvolve = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const mealAppIdName = 'meallist';
let appId = '';

const saveData = () => {
  localStorage.setItem(mealAppIdName, appId);
};

const createApp = (async () => {
  const response = await fetch(`${undefined.baseUrlInvolve}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/text',
    },
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
  });
  appId = await response.text();
  saveData();
});

const retrieveId = async () => {
  appId = localStorage.getItem(mealAppIdName);
  if (appId === null) await createApp();
};

document.body.onload = async () => {
  await retrieveId();
  const mealsNew = new _modules_meallist_js__WEBPACK_IMPORTED_MODULE_0__["default"](appId, baseUrl, baseUrlInvolve, 52772);
  mealsNew.getMeals(null);
  // const mealNew = new MealList(appId, baseUrl, baseUrlInvolve, 52772);
  // const mealNew = new MealList(53075);
  // mealNew.getMeal(null);
  // if (mealNew.gameId === null) mealNew.createApp();
};

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', () => {
  modal.classList.toggle('show');
});

document.onkeydown = (evt) => {
  evt = evt || window.event;
  let isEscape = false;
  if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
  } else {
      isEscape = (evt.keyCode === 27);
  }
  if (isEscape && modal.classList.contains('show')) {
      modal.classList.toggle('show');
  }
};


/***/ }),

/***/ "./src/modules/mealPopup.js":
/*!**********************************!*\
  !*** ./src/modules/mealPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastify_js_src_toastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js/src/toastify.css */ "./node_modules/toastify-js/src/toastify.css");
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies


class MealPopup {
  constructor(appId, baseUrl, baseUrlInvolve, mealId) {
    this.mealId = mealId;

    this.modal = document.querySelector('.modal');
    this.commentList = document.querySelector('.comment-list');
    this.commentForm = document.querySelector('.comment-form');
    this.commentTotal = document.querySelector('#comment-total');
    this.list = document.querySelector('.comment-list');
    this.appId = appId;
    this.comments = [];
    this.lblMessage = document.querySelector('#message');
    this.baseUrl = baseUrl;
    this.baseUrlInvolve = baseUrlInvolve;
    this.commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('comment-name');
      const insight = document.getElementById('comment-insight');
      const button = document.getElementById('comment-button');
      this.addComment(button, username.value, insight.value);
    });
  }

  getMeallist() {
    return this.meallist;
  }

  showMeal(meal) {
    this.modal.classList.toggle('show');
    const itemTitle = document.querySelector('#itemTitle');
    const itemImage = document.querySelector('#itemImage');
    const tags = document.querySelector('#tags');
    const youtube = document.querySelector('#youtube');
    const category = document.querySelector('#category');
    const area = document.querySelector('#area');
    const instruction = document.querySelector('.instruction');
    const ingredients = document.querySelector('.ingredients');
    itemTitle.textContent = meal.strMeal;
    tags.textContent = meal.strTags;
    youtube.href = meal.strYoutube;
    itemImage.src = meal.strMealThumb;
    instruction.textContent = meal.strInstructions;
    category.textContent = meal.strCategory;
    area.textContent = meal.strArea;

    for (let i = 0; i < 20; i += 1) {
      const ing = meal[`strIngredient${i + 1}`];
      if (ing !== '' && ing !== null) {
        const li = document.createElement('li');
        li.className = 'ingredient';
        li.textContent = ing;
        ingredients.appendChild(li);
      }
    }
  }

  showComment(comment) {
    const li = document.createElement('li');
    const elName = document.createElement('label');
    const elComment = document.createElement('label');
    const elTime = document.createElement('label');

    li.className = 'bg';

    elName.textContent = `${comment.username}: `;
    elComment.textContent = `${comment.comment}`;
    elTime.textContent = `${comment.creation_date} `;

    li.appendChild(elTime);
    li.appendChild(elName);
    li.appendChild(elComment);
    this.list.appendChild(li);
  }

  getMeal = (async (btnRefresh = null) => {
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
    const response = await fetch(`${this.baseUrl}lookup.php?i=${this.mealId}`, {
      method: 'get',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const meal = await response.json();
    if (meal.message) {
      this.lblMessage.textContent = meal.message;
    } else {
      this.showMeal(meal.meals[0]);
      this.getComments();
    }
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
  });

  addComment = (async (btnRefresh = null, username, comment) => {
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = ('fa fa-spin fa-spinner');
    const commentObject = {
        item_id: this.mealId,
        username,
        comment,
      };
    const response = await fetch(`${this.baseUrlInvolve}${this.appId}/comments`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: JSON.stringify(commentObject),
    });
    const result = await response.text();
    if (result.error) {
      toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text: result.error.message,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    } else {
      toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text: result,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
      this.getComments();
    }
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = '';
  });

  getComments = (async (btnRefresh = null) => {
    this.list.innerText = '';
    this.commentTotal.innerText = 0;
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = ('fa fa-spin fa-spinner');
    const url = `${this.baseUrlInvolve + this.appId}/comments?item_id=${this.mealId}`;
    const response = await fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const comments = await response.json();
    if (comments.error) {
      toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text: comments.error.message,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    } else if (comments !== undefined) {
        this.comments = comments;
        comments.forEach((element) => {
          this.showComment(element);
        });
        this.countComments();
    }
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = '';
  });

  countComments = (() => {
    this.commentTotal.innerText = this.comments.length;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MealPopup);

/***/ }),

/***/ "./src/modules/meallist.js":
/*!*********************************!*\
  !*** ./src/modules/meallist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MealList)
/* harmony export */ });
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastify_js_src_toastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js/src/toastify.css */ "./node_modules/toastify-js/src/toastify.css");
/* harmony import */ var _mealPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealPopup */ "./src/modules/mealPopup.js");
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies



class MealList {
  constructor(appId, baseUrl, baseUrlInvolve, mealId) {
    this.mealId = mealId;
    this.list = document.querySelector('.meal-list');
    this.likeTotal = document.querySelector('.likeTotal');
    this.appId = appId;
    this.likes = [];
    this.baseUrl = baseUrl;
    this.baseUrlInvolve = baseUrlInvolve;
  }

  getMeallist() {
    return this.meallist;
  }

  showMeal(meal, likeCount) {
    const div = document.createElement('div');
    const divDetails = document.createElement('div');
    const divButton = document.createElement('div');
    const elName = document.createElement('label');
    const elLikeParent = document.createElement('label');
    const elLike = document.createElement('i');
    const elIcon = document.createElement('img');
    const elLikeCount = document.createElement('span');
    const elComment = document.createElement('button');

    div.className = 'meal-detail';
    elLikeParent.className = 'ps-2';
    elLike.className = 'fa fa-heart';

    elName.textContent = meal.strMeal;
    elComment.textContent = 'Comments';
    elIcon.src = meal.strMealThumb;

    elComment.addEventListener(
      'click', () => new _mealPopup__WEBPACK_IMPORTED_MODULE_2__["default"](this.appId, this.baseUrl, this.baseUrlInvolve, meal.idMeal).getMeal(null),
    );

    elLike.addEventListener(
      'click', () => this.addLike(null, meal.idMeal, elLikeCount),
    );
    elLikeCount.textContent = ` (${likeCount})`;
    elLikeCount.counter = likeCount;
    elLikeParent.appendChild(elLike);
    elLikeParent.appendChild(elLikeCount);

    div.appendChild(elIcon);
    divDetails.appendChild(elName);
    divDetails.appendChild(elLikeParent);
    divButton.appendChild(elComment);
    divDetails.appendChild(divButton);
    div.appendChild(divDetails);
    this.list.appendChild(div);
  }

  getMeals = (async (btnRefresh = null) => {
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
    const response = await fetch(`${this.baseUrl}search.php?s=`, {
      method: 'get',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const meals = await response.json();
    if (meals.message) {
      this.lblMessage.textContent = meals.message;
    } else {
      const url = `${this.baseUrlInvolve + this.appId}/likes`;
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
      });
      const er = await response.text();
      if (er !== '') {
        const likes = JSON.parse(er);
        if (likes.error) {
          toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
            text: likes.error.message,
            className: 'info',
            style: {
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
            },
          }).showToast();
        } else if (likes !== undefined) {
            this.likes = likes;
            this.countLikes();
        }
      }
      meals.meals.forEach((meal) => {
        let like = this.likes.find((x) => x.item_id === meal.idMeal);
        if (like === undefined) {
          like = {
              likes: 0,
              item_id: meal.idMeal,
          };
        }
        this.showMeal(meal, like.likes);
      });
    }
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
  });

  addLike = (async (btnRefresh = null, idMeal, elLikeCount) => {
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = ('fa fa-spin fa-spinner');
    const likeObject = {
        item_id: idMeal,
      };
    const response = await fetch(`${this.baseUrlInvolve}${this.appId}/likes`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: JSON.stringify(likeObject),
    });
    const result = await response.text();
    if (result.error) {
      toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text: result.error.message,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    } else {
      toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text: result,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
      elLikeCount.counter = Number(elLikeCount.counter) + 1;
      elLikeCount.textContent = ` (${Number(elLikeCount.counter)})`;
    }
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = '';
  });

  countLikes = (() => {
    this.likeTotal.innerText = this.likes.length;
  });
}

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3714c37fac597e01a8ea.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1B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QVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0IsRUFBRSxXQUFXO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSxrREFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ04sTUFBTSxrREFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzPzJhZTkiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vc3JjL21vZHVsZXMvbWVhbFBvcHVwLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL3NyYy9tb2R1bGVzL21lYWxsaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXG4gKi9cblxuLnRvYXN0aWZ5IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTBweCAzNnB4IC00cHggcmdiYSg3NywgOTYsIDIzMiwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xufVxuXG4udG9hc3RpZnkub24ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi50b2FzdC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4udG9hc3RpZnktcmlnaHQge1xuICAgIHJpZ2h0OiAxNXB4O1xufVxuXG4udG9hc3RpZnktbGVmdCB7XG4gICAgbGVmdDogMTVweDtcbn1cblxuLnRvYXN0aWZ5LXRvcCB7XG4gICAgdG9wOiAtMTUwcHg7XG59XG5cbi50b2FzdGlmeS1ib3R0b20ge1xuICAgIGJvdHRvbTogLTE1MHB4O1xufVxuXG4udG9hc3RpZnktcm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnRvYXN0aWZ5LWF2YXRhciB7XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAtN3B4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2FzdGlmeS1jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRvYXN0aWZ5LXJpZ2h0LCAudG9hc3RpZnktbGVmdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztFQU1FOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUZBQXVGO0lBQ3ZGLDZEQUE2RDtJQUM3RCxxREFBcUQ7SUFDckQsZUFBZTtJQUNmLFVBQVU7SUFDVix3REFBd0Q7SUFDeEQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1Isc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogVG9hc3RpZnkganMgMS4xMi4wXFxuICogaHR0cHM6Ly9naXRodWIuY29tL2FwdmFydW4vdG9hc3RpZnktanNcXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcXG4gKlxcbiAqIENvcHlyaWdodCAoQykgMjAxOCBWYXJ1biBBIFBcXG4gKi9cXG5cXG4udG9hc3RpZnkge1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTBweCAzNnB4IC00cHggcmdiYSg3NywgOTYsIDIzMiwgMC4zKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNzNhNWZmLCAjNTQ3N2Y1KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcXG4gICAgei1pbmRleDogMjE0NzQ4MzY0NztcXG59XFxuXFxuLnRvYXN0aWZ5Lm9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRvYXN0LWNsb3NlIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXJpZ2h0IHtcXG4gICAgcmlnaHQ6IDE1cHg7XFxufVxcblxcbi50b2FzdGlmeS1sZWZ0IHtcXG4gICAgbGVmdDogMTVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXRvcCB7XFxuICAgIHRvcDogLTE1MHB4O1xcbn1cXG5cXG4udG9hc3RpZnktYm90dG9tIHtcXG4gICAgYm90dG9tOiAtMTUwcHg7XFxufVxcblxcbi50b2FzdGlmeS1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LWF2YXRhciB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgbWFyZ2luOiAtN3B4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udG9hc3RpZnktY2VudGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogLW1vei1maXQtY29udGVudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgICAudG9hc3RpZnktcmlnaHQsIC50b2FzdGlmeS1sZWZ0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuLm5hdmJhci1sb2dvIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluayB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6aG92ZXIsXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzIHtcclxuICBjb2xvcjogI2YwNWY0MDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgbWluLWhlaWdodDogNzV2aDtcclxufVxyXG5cclxuc2VjdGlvbixcclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICMwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2QwZDU7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgb3ZlcmZsb3cteTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwtY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC41ZW07XHJcbn1cclxuXHJcbi5jb2wtbWQtMTIsXHJcbi5jb2wtbWQtNixcclxuLmNvbC1tZC00LFxyXG4ubWVhbC1kZXRhaWwge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2l0ZW1JbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAyNWVtO1xyXG4gIG1heC1oZWlnaHQ6IDEwZW07XHJcbn1cclxuXHJcbiNjYXRlZ29yeSxcclxuI2FyZWEsXHJcbiN0YWdzIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cyB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbiNtb2RhbC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZhO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgcGFkZGluZzogMmVtIDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiBoMiB7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuI21vZGFsLXNlY3Rpb24gaDIge1xyXG4gIGNvbG9yOiAjM2QzZDNkO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm0sXHJcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMWVtIDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC41ZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDM4JTtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybSBpbnB1dCxcclxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSxcclxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybSBpbnB1dCxcclxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xyXG4gIGhlaWdodDogM2VtO1xyXG59XHJcblxyXG4uY29tbWVudC1mb3JtIHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlci1ib3R0b206ICNkMmQyZDIgc29saWQgMXB4O1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0LXNlY3Rpb24gcCB7XHJcbiAgcGFkZGluZzogMCAwIDFlbSAxZW07XHJcbn1cclxuXHJcbi5wcy0yIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG59XHJcblxyXG4ubWItMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4ubXRiLTIge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5ociB7XHJcbiAgbWF4LXdpZHRoOiAxMGVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogIzBlNjE5OSBzb2xpZCAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNhNmY1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyOTVkMDtcclxuXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzVkOWVlMzsgKi9cclxufVxyXG5cclxuLmJnLXByaW1hcnktbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmEzZTc7XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxufVxyXG5cclxuLm1lYWwtbGlzdCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZWFsLWRldGFpbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogIzAwMCAycHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5tZWFsLWRldGFpbCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm1lYWwtZGV0YWlsIGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41ZW0gMDtcclxufVxyXG5cclxuLm1lYWwtZGV0YWlsIGkge1xyXG4gIGNvbG9yOiAjMWNkYTViO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lYWwtZGV0YWlsIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG59XHJcblxyXG4ubWVhbC1kZXRhaWwgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5ZWRhO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lYWwtZGV0YWlsOmhvdmVyIHtcclxuICBib3JkZXI6ICMwZTYxOTkgNHB4IHNvbGlkO1xyXG4gIGJveC1zaGFkb3c6IDRweCAtNnB4IHJnYig3LCAzNiwgMTMxKTtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdCBsaTpob3ZlcixcclxuLmNvbW1lbnQtZm9ybSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBQdXQgYWxsIG1vYmlsZSBjb2RlIGFib3ZlIHRoaXMuICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubWVhbC1kZXRhaWwge1xyXG4gICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1kLTQge1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWQtNiB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyZW0gNWVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY2xvc2Uge1xyXG4gICAgcmlnaHQ6IDRlbTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25C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O0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTp3Z2h0QDQwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTAzMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1sb2dvIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxOHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxOHJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNjVweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyYzM4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMzU0NTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmsge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6aG92ZXIsXFxyXFxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMge1xcclxcbiAgY29sb3I6ICNmMDVmNDA7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVlbTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24sXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjMDAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzdkMGQ1O1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGluaXRpYWwgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbC1tZC0xMixcXHJcXG4uY29sLW1kLTYsXFxyXFxuLmNvbC1tZC00LFxcclxcbi5tZWFsLWRldGFpbCB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNpdGVtSW1hZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAyNWVtO1xcclxcbiAgbWF4LWhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3J5LFxcclxcbiNhcmVhLFxcclxcbiN0YWdzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudHMge1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZmE7XFxyXFxuICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIGgyIHtcXHJcXG4gIGNvbG9yOiAjM2QzZDNkO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLXNlY3Rpb24gaDIge1xcclxcbiAgY29sb3I6ICMzZDNkM2Q7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtLFxcclxcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4td2lkdGg6IDM4JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIGlucHV0LFxcclxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEsXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwZW07XFxyXFxufVxcclxcblxcclxcbi5iZyB7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAjZDJkMmQyIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHAge1xcclxcbiAgcGFkZGluZzogMCAwIDFlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi5wcy0yIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5tYi0yIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm10Yi0yIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhyIHtcXHJcXG4gIG1heC13aWR0aDogMTBlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyOiAjMGU2MTk5IHNvbGlkIDJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNhNmY1O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5iZy1wcmltYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk1ZDA7XFxyXFxuXFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ5ZWUzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcHJpbWFyeS1saWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJhM2U3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0LXNlY3Rpb24ge1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcGFkZGluZzogMmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWxpc3Qge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogIzAwMCAycHggc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsIGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbCBpIHtcXHJcXG4gIGNvbG9yOiAjMWNkYTViO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWwgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5ZWRhO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbDpob3ZlciB7XFxyXFxuICBib3JkZXI6ICMwZTYxOTkgNHB4IHNvbGlkO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IC02cHggcmdiKDcsIDM2LCAxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IGxpOmhvdmVyLFxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHV0IGFsbCBtb2JpbGUgY29kZSBhYm92ZSB0aGlzLiAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFsLWRldGFpbCB7XFxyXFxuICAgIG1heC13aWR0aDogMjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbC1tZC00IHtcXHJcXG4gICAgd2lkdGg6IDE4JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2wtbWQtNiB7XFxyXFxuICAgIHdpZHRoOiA0NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMmVtIDVlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWxpc3Qtc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtY2xvc2Uge1xcclxcbiAgICByaWdodDogNGVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2FzdGlmeS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9hc3RpZnkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiFcbiAqIFRvYXN0aWZ5IGpzIDEuMTIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2FwdmFydW4vdG9hc3RpZnktanNcbiAqIEBsaWNlbnNlIE1JVCBsaWNlbnNlZFxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxOCBWYXJ1biBBIFBcbiAqL1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlRvYXN0aWZ5ID0gZmFjdG9yeSgpO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbihnbG9iYWwpIHtcbiAgLy8gT2JqZWN0IGluaXRpYWxpemF0aW9uXG4gIHZhciBUb2FzdGlmeSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFJldHVybmluZyBhIG5ldyBpbml0IG9iamVjdFxuICAgICAgcmV0dXJuIG5ldyBUb2FzdGlmeS5saWIuaW5pdChvcHRpb25zKTtcbiAgICB9LFxuICAgIC8vIExpYnJhcnkgdmVyc2lvblxuICAgIHZlcnNpb24gPSBcIjEuMTIuMFwiO1xuXG4gIC8vIFNldCB0aGUgZGVmYXVsdCBnbG9iYWwgb3B0aW9uc1xuICBUb2FzdGlmeS5kZWZhdWx0cyA9IHtcbiAgICBvbGRlc3RGaXJzdDogdHJ1ZSxcbiAgICB0ZXh0OiBcIlRvYXN0aWZ5IGlzIGF3ZXNvbWUhXCIsXG4gICAgbm9kZTogdW5kZWZpbmVkLFxuICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgIHNlbGVjdG9yOiB1bmRlZmluZWQsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIGRlc3RpbmF0aW9uOiB1bmRlZmluZWQsXG4gICAgbmV3V2luZG93OiBmYWxzZSxcbiAgICBjbG9zZTogZmFsc2UsXG4gICAgZ3Jhdml0eTogXCJ0b2FzdGlmeS10b3BcIixcbiAgICBwb3NpdGlvbkxlZnQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcnLFxuICAgIGF2YXRhcjogXCJcIixcbiAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgb2Zmc2V0OiB7eDogMCwgeTogMH0sXG4gICAgZXNjYXBlTWFya3VwOiB0cnVlLFxuICAgIGFyaWFMaXZlOiAncG9saXRlJyxcbiAgICBzdHlsZToge2JhY2tncm91bmQ6ICcnfVxuICB9O1xuXG4gIC8vIERlZmluaW5nIHRoZSBwcm90b3R5cGUgb2YgdGhlIG9iamVjdFxuICBUb2FzdGlmeS5saWIgPSBUb2FzdGlmeS5wcm90b3R5cGUgPSB7XG4gICAgdG9hc3RpZnk6IHZlcnNpb24sXG5cbiAgICBjb25zdHJ1Y3RvcjogVG9hc3RpZnksXG5cbiAgICAvLyBJbml0aWFsaXppbmcgdGhlIG9iamVjdCB3aXRoIHJlcXVpcmVkIHBhcmFtZXRlcnNcbiAgICBpbml0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBWZXJpZnlpbmcgYW5kIHZhbGlkYXRpbmcgdGhlIGlucHV0IG9iamVjdFxuICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIG9wdGlvbnMgb2JqZWN0XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcblxuICAgICAgdGhpcy50b2FzdEVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAvLyBWYWxpZGF0aW5nIHRoZSBvcHRpb25zXG4gICAgICB0aGlzLm9wdGlvbnMudGV4dCA9IG9wdGlvbnMudGV4dCB8fCBUb2FzdGlmeS5kZWZhdWx0cy50ZXh0OyAvLyBEaXNwbGF5IG1lc3NhZ2VcbiAgICAgIHRoaXMub3B0aW9ucy5ub2RlID0gb3B0aW9ucy5ub2RlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm5vZGU7ICAvLyBEaXNwbGF5IGNvbnRlbnQgYXMgbm9kZVxuICAgICAgdGhpcy5vcHRpb25zLmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCA/IDAgOiBvcHRpb25zLmR1cmF0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmR1cmF0aW9uOyAvLyBEaXNwbGF5IGR1cmF0aW9uXG4gICAgICB0aGlzLm9wdGlvbnMuc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnNlbGVjdG9yOyAvLyBQYXJlbnQgc2VsZWN0b3JcbiAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgfHwgVG9hc3RpZnkuZGVmYXVsdHMuY2FsbGJhY2s7IC8vIENhbGxiYWNrIGFmdGVyIGRpc3BsYXlcbiAgICAgIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiA9IG9wdGlvbnMuZGVzdGluYXRpb24gfHwgVG9hc3RpZnkuZGVmYXVsdHMuZGVzdGluYXRpb247IC8vIE9uLWNsaWNrIGRlc3RpbmF0aW9uXG4gICAgICB0aGlzLm9wdGlvbnMubmV3V2luZG93ID0gb3B0aW9ucy5uZXdXaW5kb3cgfHwgVG9hc3RpZnkuZGVmYXVsdHMubmV3V2luZG93OyAvLyBPcGVuIGRlc3RpbmF0aW9uIGluIG5ldyB3aW5kb3dcbiAgICAgIHRoaXMub3B0aW9ucy5jbG9zZSA9IG9wdGlvbnMuY2xvc2UgfHwgVG9hc3RpZnkuZGVmYXVsdHMuY2xvc2U7IC8vIFNob3cgdG9hc3QgY2xvc2UgaWNvblxuICAgICAgdGhpcy5vcHRpb25zLmdyYXZpdHkgPSBvcHRpb25zLmdyYXZpdHkgPT09IFwiYm90dG9tXCIgPyBcInRvYXN0aWZ5LWJvdHRvbVwiIDogVG9hc3RpZnkuZGVmYXVsdHMuZ3Jhdml0eTsgLy8gdG9hc3QgcG9zaXRpb24gLSB0b3Agb3IgYm90dG9tXG4gICAgICB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID0gb3B0aW9ucy5wb3NpdGlvbkxlZnQgfHwgVG9hc3RpZnkuZGVmYXVsdHMucG9zaXRpb25MZWZ0OyAvLyB0b2FzdCBwb3NpdGlvbiAtIGxlZnQgb3IgcmlnaHRcbiAgICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9IG9wdGlvbnMucG9zaXRpb24gfHwgVG9hc3RpZnkuZGVmYXVsdHMucG9zaXRpb247IC8vIHRvYXN0IHBvc2l0aW9uIC0gbGVmdCBvciByaWdodFxuICAgICAgdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmJhY2tncm91bmRDb2xvcjsgLy8gdG9hc3QgYmFja2dyb3VuZCBjb2xvclxuICAgICAgdGhpcy5vcHRpb25zLmF2YXRhciA9IG9wdGlvbnMuYXZhdGFyIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmF2YXRhcjsgLy8gaW1nIGVsZW1lbnQgc3JjIC0gdXJsIG9yIGEgcGF0aFxuICAgICAgdGhpcy5vcHRpb25zLmNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNsYXNzTmFtZTsgLy8gYWRkaXRpb25hbCBjbGFzcyBuYW1lcyBmb3IgdGhlIHRvYXN0XG4gICAgICB0aGlzLm9wdGlvbnMuc3RvcE9uRm9jdXMgPSBvcHRpb25zLnN0b3BPbkZvY3VzID09PSB1bmRlZmluZWQgPyBUb2FzdGlmeS5kZWZhdWx0cy5zdG9wT25Gb2N1cyA6IG9wdGlvbnMuc3RvcE9uRm9jdXM7IC8vIHN0b3AgdGltZW91dCBvbiBmb2N1c1xuICAgICAgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPSBvcHRpb25zLm9uQ2xpY2sgfHwgVG9hc3RpZnkuZGVmYXVsdHMub25DbGljazsgLy8gQ2FsbGJhY2sgYWZ0ZXIgY2xpY2tcbiAgICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCBUb2FzdGlmeS5kZWZhdWx0cy5vZmZzZXQ7IC8vIHRvYXN0IG9mZnNldFxuICAgICAgdGhpcy5vcHRpb25zLmVzY2FwZU1hcmt1cCA9IG9wdGlvbnMuZXNjYXBlTWFya3VwICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmVzY2FwZU1hcmt1cCA6IFRvYXN0aWZ5LmRlZmF1bHRzLmVzY2FwZU1hcmt1cDtcbiAgICAgIHRoaXMub3B0aW9ucy5hcmlhTGl2ZSA9IG9wdGlvbnMuYXJpYUxpdmUgfHwgVG9hc3RpZnkuZGVmYXVsdHMuYXJpYUxpdmU7XG4gICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSBvcHRpb25zLnN0eWxlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnN0eWxlO1xuICAgICAgaWYob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuaW5nIHRoZSBjdXJyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcgZnVuY3Rpb25zXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gQnVpbGRpbmcgdGhlIERPTSBlbGVtZW50XG4gICAgYnVpbGRUb2FzdDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBWYWxpZGF0aW5nIGlmIHRoZSBvcHRpb25zIGFyZSBkZWZpbmVkXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucykge1xuICAgICAgICB0aHJvdyBcIlRvYXN0aWZ5IGlzIG5vdCBpbml0aWFsaXplZFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGluZyB0aGUgRE9NIG9iamVjdFxuICAgICAgdmFyIGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0aWZ5IG9uIFwiICsgdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcblxuICAgICAgLy8gUG9zaXRpb25pbmcgdG9hc3QgdG8gbGVmdCBvciByaWdodCBvciBjZW50ZXJcbiAgICAgIGlmICghIXRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiB0b2FzdGlmeS1cIiArIHRoaXMub3B0aW9ucy5wb3NpdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRvIGJlIGRlcHJlY2lhdGVkIGluIGZ1cnRoZXIgdmVyc2lvbnNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbkxlZnQgPT09IHRydWUpIHtcbiAgICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiB0b2FzdGlmeS1sZWZ0XCI7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdQcm9wZXJ0eSBgcG9zaXRpb25MZWZ0YCB3aWxsIGJlIGRlcHJlY2lhdGVkIGluIGZ1cnRoZXIgdmVyc2lvbnMuIFBsZWFzZSB1c2UgYHBvc2l0aW9uYCBpbnN0ZWFkLicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBwb3NpdGlvblxuICAgICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIHRvYXN0aWZ5LXJpZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQXNzaWduaW5nIGdyYXZpdHkgb2YgZWxlbWVudFxuICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLm9wdGlvbnMuZ3Jhdml0eTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBiZWluZyBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHVzaW5nIHRoZSBzdHlsZSBIVE1MIERPTSBwcm9wZXJ0eVxuICAgICAgICBjb25zb2xlLndhcm4oJ0RFUFJFQ0FUSU9OIE5PVElDRTogXCJiYWNrZ3JvdW5kQ29sb3JcIiBpcyBiZWluZyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHRoZSBcInN0eWxlLmJhY2tncm91bmRcIiBwcm9wZXJ0eS4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIG91ciBzdHlsZSBvYmplY3QgYW5kIGFwcGx5IHN0eWxlcyB0byBkaXZFbGVtZW50XG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzLm9wdGlvbnMuc3R5bGUpIHtcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSB0aGlzLm9wdGlvbnMuc3R5bGVbcHJvcGVydHldO1xuICAgICAgfVxuXG4gICAgICAvLyBBbm5vdW5jZSB0aGUgdG9hc3QgdG8gc2NyZWVuIHJlYWRlcnNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXJpYUxpdmUpIHtcbiAgICAgICAgZGl2RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHRoaXMub3B0aW9ucy5hcmlhTGl2ZSlcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIHRoZSB0b2FzdCBtZXNzYWdlL25vZGVcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9kZSAmJiB0aGlzLm9wdGlvbnMubm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkIG5vZGUsIHdlIGluc2VydCBpdFxuICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMub3B0aW9ucy5ub2RlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lc2NhcGVNYXJrdXApIHtcbiAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMub3B0aW9ucy50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF2YXRhciAhPT0gXCJcIikge1xuICAgICAgICAgIHZhciBhdmF0YXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICBhdmF0YXJFbGVtZW50LnNyYyA9IHRoaXMub3B0aW9ucy5hdmF0YXI7XG5cbiAgICAgICAgICBhdmF0YXJFbGVtZW50LmNsYXNzTmFtZSA9IFwidG9hc3RpZnktYXZhdGFyXCI7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uID09IFwibGVmdFwiIHx8IHRoaXMub3B0aW9ucy5wb3NpdGlvbkxlZnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEFkZGluZyBjbG9zZSBpY29uIG9uIHRoZSBsZWZ0IG9mIGNvbnRlbnRcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYXZhdGFyRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZGluZyBjbG9zZSBpY29uIG9uIHRoZSByaWdodCBvZiBjb250ZW50XG4gICAgICAgICAgICBkaXZFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgYXZhdGFyRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBhIGNsb3NlIGljb24gdG8gdGhlIHRvYXN0XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlID09PSB0cnVlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIHNwYW4gZm9yIGNsb3NlIGVsZW1lbnRcbiAgICAgICAgdmFyIGNsb3NlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNsb3NlRWxlbWVudC50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgY2xvc2VFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcbiAgICAgICAgY2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9IFwidG9hc3QtY2xvc2VcIjtcbiAgICAgICAgY2xvc2VFbGVtZW50LmlubmVySFRNTCA9IFwiJiMxMDAwNjtcIjtcblxuICAgICAgICAvLyBUcmlnZ2VyaW5nIHRoZSByZW1vdmFsIG9mIHRvYXN0IGZyb20gRE9NIG9uIGNsb3NlIGNsaWNrXG4gICAgICAgIGNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vQ2FsY3VsYXRpbmcgc2NyZWVuIHdpZHRoXG4gICAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMCA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoO1xuXG4gICAgICAgIC8vIEFkZGluZyB0aGUgY2xvc2UgaWNvbiB0byB0aGUgdG9hc3QgZWxlbWVudFxuICAgICAgICAvLyBEaXNwbGF5IG9uIHRoZSByaWdodCBpZiBzY3JlZW4gd2lkdGggaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDM2MHB4XG4gICAgICAgIGlmICgodGhpcy5vcHRpb25zLnBvc2l0aW9uID09IFwibGVmdFwiIHx8IHRoaXMub3B0aW9ucy5wb3NpdGlvbkxlZnQgPT09IHRydWUpICYmIHdpZHRoID4gMzYwKSB7XG4gICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIGxlZnQgb2YgY29udGVudFxuICAgICAgICAgIGRpdkVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBjbG9zZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFkZGluZyBjbG9zZSBpY29uIG9uIHRoZSByaWdodCBvZiBjb250ZW50XG4gICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHRpbWVvdXQgd2hpbGUgdG9hc3QgaXMgZm9jdXNlZFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdG9wT25Gb2N1cyAmJiB0aGlzLm9wdGlvbnMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gc3RvcCBjb3VudGRvd25cbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwibW91c2VvdmVyXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZGl2RWxlbWVudC50aW1lT3V0VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAvLyBhZGQgYmFjayB0aGUgdGltZW91dFxuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJtb3VzZWxlYXZlXCIsXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LnRpbWVPdXRWYWx1ZSA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRvYXN0IGZyb20gRE9NXG4gICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVFbGVtZW50KGRpdkVsZW1lbnQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIGFuIG9uLWNsaWNrIGRlc3RpbmF0aW9uIHBhdGhcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5uZXdXaW5kb3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLCBcIl9ibGFua1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbGljayA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25DbGljaygpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgb2Zmc2V0XG4gICAgICBpZih0eXBlb2YgdGhpcy5vcHRpb25zLm9mZnNldCA9PT0gXCJvYmplY3RcIikge1xuXG4gICAgICAgIHZhciB4ID0gZ2V0QXhpc09mZnNldEFWYWx1ZShcInhcIiwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdmFyIHkgPSBnZXRBeGlzT2Zmc2V0QVZhbHVlKFwieVwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHZhciB4T2Zmc2V0ID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uID09IFwibGVmdFwiID8geCA6IFwiLVwiICsgeDtcbiAgICAgICAgdmFyIHlPZmZzZXQgPSB0aGlzLm9wdGlvbnMuZ3Jhdml0eSA9PSBcInRvYXN0aWZ5LXRvcFwiID8geSA6IFwiLVwiICsgeTtcblxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgeE9mZnNldCArIFwiLFwiICsgeU9mZnNldCArIFwiKVwiO1xuXG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybmluZyB0aGUgZ2VuZXJhdGVkIGVsZW1lbnRcbiAgICAgIHJldHVybiBkaXZFbGVtZW50O1xuICAgIH0sXG5cbiAgICAvLyBEaXNwbGF5aW5nIHRoZSB0b2FzdFxuICAgIHNob3dUb2FzdDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBDcmVhdGluZyB0aGUgRE9NIG9iamVjdCBmb3IgdGhlIHRvYXN0XG4gICAgICB0aGlzLnRvYXN0RWxlbWVudCA9IHRoaXMuYnVpbGRUb2FzdCgpO1xuXG4gICAgICAvLyBHZXR0aW5nIHRoZSByb290IGVsZW1lbnQgdG8gd2l0aCB0aGUgdG9hc3QgbmVlZHMgdG8gYmUgYWRkZWRcbiAgICAgIHZhciByb290RWxlbWVudDtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgKHR5cGVvZiBTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm9wdGlvbnMuc2VsZWN0b3IgaW5zdGFuY2VvZiBTaGFkb3dSb290KSkge1xuICAgICAgICByb290RWxlbWVudCA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cblxuICAgICAgLy8gVmFsaWRhdGluZyBpZiByb290IGVsZW1lbnQgaXMgcHJlc2VudCBpbiBET01cbiAgICAgIGlmICghcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgXCJSb290IGVsZW1lbnQgaXMgbm90IGRlZmluZWRcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIHRoZSBET00gZWxlbWVudFxuICAgICAgdmFyIGVsZW1lbnRUb0luc2VydCA9IFRvYXN0aWZ5LmRlZmF1bHRzLm9sZGVzdEZpcnN0ID8gcm9vdEVsZW1lbnQuZmlyc3RDaGlsZCA6IHJvb3RFbGVtZW50Lmxhc3RDaGlsZDtcbiAgICAgIHJvb3RFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLnRvYXN0RWxlbWVudCwgZWxlbWVudFRvSW5zZXJ0KTtcblxuICAgICAgLy8gUmVwb3NpdGlvbmluZyB0aGUgdG9hc3RzIGluIGNhc2UgbXVsdGlwbGUgdG9hc3RzIGFyZSBwcmVzZW50XG4gICAgICBUb2FzdGlmeS5yZXBvc2l0aW9uKCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBmcm9tIERPTVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmR1cmF0aW9uXG4gICAgICAgICk7IC8vIEJpbmRpbmcgYHRoaXNgIGZvciBmdW5jdGlvbiBpbnZvY2F0aW9uXG4gICAgICB9XG5cbiAgICAgIC8vIFN1cHBvcnRpbmcgZnVuY3Rpb24gY2hhaW5pbmdcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBoaWRlVG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgfSxcblxuICAgIC8vIFJlbW92aW5nIHRoZSBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgIHJlbW92ZUVsZW1lbnQ6IGZ1bmN0aW9uKHRvYXN0RWxlbWVudCkge1xuICAgICAgLy8gSGlkaW5nIHRoZSBlbGVtZW50XG4gICAgICAvLyB0b2FzdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9uXCIpO1xuICAgICAgdG9hc3RFbGVtZW50LmNsYXNzTmFtZSA9IHRvYXN0RWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShcIiBvblwiLCBcIlwiKTtcblxuICAgICAgLy8gUmVtb3ZpbmcgdGhlIGVsZW1lbnQgZnJvbSBET00gYWZ0ZXIgdHJhbnNpdGlvbiBlbmRcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyByZW1vdmUgb3B0aW9ucyBub2RlIGlmIGFueVxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9kZSAmJiB0aGlzLm9wdGlvbnMubm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMub3B0aW9ucy5ub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgRE9NLCBvbmx5IHdoZW4gdGhlIHBhcmVudCBub2RlIHdhcyBub3QgcmVtb3ZlZCBiZWZvcmUuXG4gICAgICAgICAgaWYgKHRvYXN0RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0b2FzdEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2FzdEVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhbGxpbmcgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrLmNhbGwodG9hc3RFbGVtZW50KTtcblxuICAgICAgICAgIC8vIFJlcG9zaXRpb25pbmcgdGhlIHRvYXN0cyBhZ2FpblxuICAgICAgICAgIFRvYXN0aWZ5LnJlcG9zaXRpb24oKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICA0MDBcbiAgICAgICk7IC8vIEJpbmRpbmcgYHRoaXNgIGZvciBmdW5jdGlvbiBpbnZvY2F0aW9uXG4gICAgfSxcbiAgfTtcblxuICAvLyBQb3NpdGlvbmluZyB0aGUgdG9hc3RzIG9uIHRoZSBET01cbiAgVG9hc3RpZnkucmVwb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gVG9wIG1hcmdpbnMgd2l0aCBncmF2aXR5XG4gICAgdmFyIHRvcExlZnRPZmZzZXRTaXplID0ge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIGJvdHRvbTogMTUsXG4gICAgfTtcbiAgICB2YXIgdG9wUmlnaHRPZmZzZXRTaXplID0ge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIGJvdHRvbTogMTUsXG4gICAgfTtcbiAgICB2YXIgb2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG5cbiAgICAvLyBHZXQgYWxsIHRvYXN0IG1lc3NhZ2VzIG9uIHRoZSBET01cbiAgICB2YXIgYWxsVG9hc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvYXN0aWZ5XCIpO1xuXG4gICAgdmFyIGNsYXNzVXNlZDtcblxuICAgIC8vIE1vZGlmeWluZyB0aGUgcG9zaXRpb24gb2YgZWFjaCB0b2FzdCBlbGVtZW50XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxUb2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldHRpbmcgdGhlIGFwcGxpZWQgZ3Jhdml0eVxuICAgICAgaWYgKGNvbnRhaW5zQ2xhc3MoYWxsVG9hc3RzW2ldLCBcInRvYXN0aWZ5LXRvcFwiKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGFzc1VzZWQgPSBcInRvYXN0aWZ5LXRvcFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NVc2VkID0gXCJ0b2FzdGlmeS1ib3R0b21cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhlaWdodCA9IGFsbFRvYXN0c1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBjbGFzc1VzZWQgPSBjbGFzc1VzZWQuc3Vic3RyKDksIGNsYXNzVXNlZC5sZW5ndGgtMSlcbiAgICAgIC8vIFNwYWNpbmcgYmV0d2VlbiB0b2FzdHNcbiAgICAgIHZhciBvZmZzZXQgPSAxNTtcblxuICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPiAwID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XG5cbiAgICAgIC8vIFNob3cgdG9hc3QgaW4gY2VudGVyIGlmIHNjcmVlbiB3aXRoIGxlc3MgdGhhbiBvciBlcXVhbCB0byAzNjBweFxuICAgICAgaWYgKHdpZHRoIDw9IDM2MCkge1xuICAgICAgICAvLyBTZXR0aW5nIHRoZSBwb3NpdGlvblxuICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IG9mZnNldFNpemVbY2xhc3NVc2VkXSArIFwicHhcIjtcblxuICAgICAgICBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbnRhaW5zQ2xhc3MoYWxsVG9hc3RzW2ldLCBcInRvYXN0aWZ5LWxlZnRcIikgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBwb3NpdGlvblxuICAgICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gdG9wTGVmdE9mZnNldFNpemVbY2xhc3NVc2VkXSArIFwicHhcIjtcblxuICAgICAgICAgIHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHBvc2l0aW9uXG4gICAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSB0b3BSaWdodE9mZnNldFNpemVbY2xhc3NVc2VkXSArIFwicHhcIjtcblxuICAgICAgICAgIHRvcFJpZ2h0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN1cHBvcnRpbmcgZnVuY3Rpb24gY2hhaW5pbmdcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IG9mZnNldC5cbiAgZnVuY3Rpb24gZ2V0QXhpc09mZnNldEFWYWx1ZShheGlzLCBvcHRpb25zKSB7XG5cbiAgICBpZihvcHRpb25zLm9mZnNldFtheGlzXSkge1xuICAgICAgaWYoaXNOYU4ob3B0aW9ucy5vZmZzZXRbYXhpc10pKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm9mZnNldFtheGlzXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5vZmZzZXRbYXhpc10gKyAncHgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnMHB4JztcblxuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbnNDbGFzcyhlbGVtLCB5b3VyQ2xhc3MpIHtcbiAgICBpZiAoIWVsZW0gfHwgdHlwZW9mIHlvdXJDbGFzcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBlbGVtLmNsYXNzTmFtZSAmJlxuICAgICAgZWxlbS5jbGFzc05hbWVcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoL1xccysvZ2kpXG4gICAgICAgIC5pbmRleE9mKHlvdXJDbGFzcykgPiAtMVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXR0aW5nIHVwIHRoZSBwcm90b3R5cGUgZm9yIHRoZSBpbml0IG9iamVjdFxuICBUb2FzdGlmeS5saWIuaW5pdC5wcm90b3R5cGUgPSBUb2FzdGlmeS5saWI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoZSBUb2FzdGlmeSBmdW5jdGlvbiB0byBiZSBhc3NpZ25lZCB0byB0aGUgd2luZG93IG9iamVjdC9tb2R1bGVcbiAgcmV0dXJuIFRvYXN0aWZ5O1xufSk7XG4iLCJpbXBvcnQgTWVhbExpc3QgZnJvbSAnLi9tb2R1bGVzL21lYWxsaXN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS8nO1xuY29uc3QgYmFzZVVybEludm9sdmUgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IG1lYWxBcHBJZE5hbWUgPSAnbWVhbGxpc3QnO1xubGV0IGFwcElkID0gJyc7XG5cbmNvbnN0IHNhdmVEYXRhID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShtZWFsQXBwSWROYW1lLCBhcHBJZCk7XG59O1xuXG5jb25zdCBjcmVhdGVBcHAgPSAoYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVVybEludm9sdmV9YCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdGV4dCcsXG4gICAgfSxcbiAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pO1xuICBhcHBJZCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgc2F2ZURhdGEoKTtcbn0pO1xuXG5jb25zdCByZXRyaWV2ZUlkID0gYXN5bmMgKCkgPT4ge1xuICBhcHBJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG1lYWxBcHBJZE5hbWUpO1xuICBpZiAoYXBwSWQgPT09IG51bGwpIGF3YWl0IGNyZWF0ZUFwcCgpO1xufTtcblxuZG9jdW1lbnQuYm9keS5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHJldHJpZXZlSWQoKTtcbiAgY29uc3QgbWVhbHNOZXcgPSBuZXcgTWVhbExpc3QoYXBwSWQsIGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCA1Mjc3Mik7XG4gIG1lYWxzTmV3LmdldE1lYWxzKG51bGwpO1xuICAvLyBjb25zdCBtZWFsTmV3ID0gbmV3IE1lYWxMaXN0KGFwcElkLCBiYXNlVXJsLCBiYXNlVXJsSW52b2x2ZSwgNTI3NzIpO1xuICAvLyBjb25zdCBtZWFsTmV3ID0gbmV3IE1lYWxMaXN0KDUzMDc1KTtcbiAgLy8gbWVhbE5ldy5nZXRNZWFsKG51bGwpO1xuICAvLyBpZiAobWVhbE5ldy5nYW1lSWQgPT09IG51bGwpIG1lYWxOZXcuY3JlYXRlQXBwKCk7XG59O1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbG9zZScpO1xubW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xufSk7XG5cbmRvY3VtZW50Lm9ua2V5ZG93biA9IChldnQpID0+IHtcbiAgZXZ0ID0gZXZ0IHx8IHdpbmRvdy5ldmVudDtcbiAgbGV0IGlzRXNjYXBlID0gZmFsc2U7XG4gIGlmICgna2V5JyBpbiBldnQpIHtcbiAgICAgIGlzRXNjYXBlID0gKGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXkgPT09ICdFc2MnKTtcbiAgfSBlbHNlIHtcbiAgICAgIGlzRXNjYXBlID0gKGV2dC5rZXlDb2RlID09PSAyNyk7XG4gIH1cbiAgaWYgKGlzRXNjYXBlICYmIG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH1cbn07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgVG9hc3RpZnkgZnJvbSAndG9hc3RpZnktanMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICd0b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzJztcblxuY2xhc3MgTWVhbFBvcHVwIHtcbiAgY29uc3RydWN0b3IoYXBwSWQsIGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCBtZWFsSWQpIHtcbiAgICB0aGlzLm1lYWxJZCA9IG1lYWxJZDtcblxuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0aGlzLmNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgIHRoaXMuY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XG4gICAgdGhpcy5jb21tZW50VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC10b3RhbCcpO1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgICB0aGlzLmFwcElkID0gYXBwSWQ7XG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xuICAgIHRoaXMubGJsTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICB0aGlzLmJhc2VVcmxJbnZvbHZlID0gYmFzZVVybEludm9sdmU7XG4gICAgdGhpcy5jb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LW5hbWUnKTtcbiAgICAgIGNvbnN0IGluc2lnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1pbnNpZ2h0Jyk7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1idXR0b24nKTtcbiAgICAgIHRoaXMuYWRkQ29tbWVudChidXR0b24sIHVzZXJuYW1lLnZhbHVlLCBpbnNpZ2h0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE1lYWxsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLm1lYWxsaXN0O1xuICB9XG5cbiAgc2hvd01lYWwobWVhbCkge1xuICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtVGl0bGUnKTtcbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbUltYWdlJyk7XG4gICAgY29uc3QgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWdzJyk7XG4gICAgY29uc3QgeW91dHViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5b3V0dWJlJyk7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnknKTtcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FyZWEnKTtcbiAgICBjb25zdCBpbnN0cnVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0cnVjdGlvbicpO1xuICAgIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZ3JlZGllbnRzJyk7XG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gbWVhbC5zdHJNZWFsO1xuICAgIHRhZ3MudGV4dENvbnRlbnQgPSBtZWFsLnN0clRhZ3M7XG4gICAgeW91dHViZS5ocmVmID0gbWVhbC5zdHJZb3V0dWJlO1xuICAgIGl0ZW1JbWFnZS5zcmMgPSBtZWFsLnN0ck1lYWxUaHVtYjtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IG1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gbWVhbC5zdHJDYXRlZ29yeTtcbiAgICBhcmVhLnRleHRDb250ZW50ID0gbWVhbC5zdHJBcmVhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpbmcgPSBtZWFsW2BzdHJJbmdyZWRpZW50JHtpICsgMX1gXTtcbiAgICAgIGlmIChpbmcgIT09ICcnICYmIGluZyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdpbmdyZWRpZW50JztcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBpbmc7XG4gICAgICAgIGluZ3JlZGllbnRzLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93Q29tbWVudChjb21tZW50KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgbGkuY2xhc3NOYW1lID0gJ2JnJztcblxuICAgIGVsTmFtZS50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQudXNlcm5hbWV9OiBgO1xuICAgIGVsQ29tbWVudC50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgIGVsVGltZS50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gYDtcblxuICAgIGxpLmFwcGVuZENoaWxkKGVsVGltZSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZWxOYW1lKTtcbiAgICBsaS5hcHBlbmRDaGlsZChlbENvbW1lbnQpO1xuICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cblxuICBnZXRNZWFsID0gKGFzeW5jIChidG5SZWZyZXNoID0gbnVsbCkgPT4ge1xuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2VVcmx9bG9va3VwLnBocD9pPSR7dGhpcy5tZWFsSWR9YCwge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSk7XG4gICAgY29uc3QgbWVhbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAobWVhbC5tZXNzYWdlKSB7XG4gICAgICB0aGlzLmxibE1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZWFsLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd01lYWwobWVhbC5tZWFsc1swXSk7XG4gICAgICB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgfVxuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gIH0pO1xuXG4gIGFkZENvbW1lbnQgPSAoYXN5bmMgKGJ0blJlZnJlc2ggPSBudWxsLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICBjb25zdCBjb21tZW50T2JqZWN0ID0ge1xuICAgICAgICBpdGVtX2lkOiB0aGlzLm1lYWxJZCxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsSW52b2x2ZX0ke3RoaXMuYXBwSWR9L2NvbW1lbnRzYCwge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRPYmplY3QpLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICBUb2FzdGlmeSh7XG4gICAgICAgIHRleHQ6IHJlc3VsdC5lcnJvci5tZXNzYWdlLFxuICAgICAgICBjbGFzc05hbWU6ICdpbmZvJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKScsXG4gICAgICAgIH0sXG4gICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9hc3RpZnkoe1xuICAgICAgICB0ZXh0OiByZXN1bHQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgdGhpcy5nZXRDb21tZW50cygpO1xuICAgIH1cbiAgICBpZiAoYnRuUmVmcmVzaCAhPT0gbnVsbCkgYnRuUmVmcmVzaC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZSA9ICcnO1xuICB9KTtcblxuICBnZXRDb21tZW50cyA9IChhc3luYyAoYnRuUmVmcmVzaCA9IG51bGwpID0+IHtcbiAgICB0aGlzLmxpc3QuaW5uZXJUZXh0ID0gJyc7XG4gICAgdGhpcy5jb21tZW50VG90YWwuaW5uZXJUZXh0ID0gMDtcbiAgICBpZiAoYnRuUmVmcmVzaCAhPT0gbnVsbCkgYnRuUmVmcmVzaC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZSA9ICgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsSW52b2x2ZSArIHRoaXMuYXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHt0aGlzLm1lYWxJZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSk7XG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKGNvbW1lbnRzLmVycm9yKSB7XG4gICAgICBUb2FzdGlmeSh7XG4gICAgICAgIHRleHQ6IGNvbW1lbnRzLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgIH0gZWxzZSBpZiAoY29tbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dDb21tZW50KGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb3VudENvbW1lbnRzKCk7XG4gICAgfVxuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gJyc7XG4gIH0pO1xuXG4gIGNvdW50Q29tbWVudHMgPSAoKCkgPT4ge1xuICAgIHRoaXMuY29tbWVudFRvdGFsLmlubmVyVGV4dCA9IHRoaXMuY29tbWVudHMubGVuZ3RoO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVhbFBvcHVwOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBUb2FzdGlmeSBmcm9tICd0b2FzdGlmeS1qcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgJ3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3MnO1xuaW1wb3J0IE1lYWxQb3B1cCBmcm9tICcuL21lYWxQb3B1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWxMaXN0IHtcbiAgY29uc3RydWN0b3IoYXBwSWQsIGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCBtZWFsSWQpIHtcbiAgICB0aGlzLm1lYWxJZCA9IG1lYWxJZDtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbC1saXN0Jyk7XG4gICAgdGhpcy5saWtlVG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlrZVRvdGFsJyk7XG4gICAgdGhpcy5hcHBJZCA9IGFwcElkO1xuICAgIHRoaXMubGlrZXMgPSBbXTtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHRoaXMuYmFzZVVybEludm9sdmUgPSBiYXNlVXJsSW52b2x2ZTtcbiAgfVxuXG4gIGdldE1lYWxsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLm1lYWxsaXN0O1xuICB9XG5cbiAgc2hvd01lYWwobWVhbCwgbGlrZUNvdW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZWxMaWtlUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbExpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZWxMaWtlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBkaXYuY2xhc3NOYW1lID0gJ21lYWwtZGV0YWlsJztcbiAgICBlbExpa2VQYXJlbnQuY2xhc3NOYW1lID0gJ3BzLTInO1xuICAgIGVsTGlrZS5jbGFzc05hbWUgPSAnZmEgZmEtaGVhcnQnO1xuXG4gICAgZWxOYW1lLnRleHRDb250ZW50ID0gbWVhbC5zdHJNZWFsO1xuICAgIGVsQ29tbWVudC50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gICAgZWxJY29uLnNyYyA9IG1lYWwuc3RyTWVhbFRodW1iO1xuXG4gICAgZWxDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLCAoKSA9PiBuZXcgTWVhbFBvcHVwKHRoaXMuYXBwSWQsIHRoaXMuYmFzZVVybCwgdGhpcy5iYXNlVXJsSW52b2x2ZSwgbWVhbC5pZE1lYWwpLmdldE1lYWwobnVsbCksXG4gICAgKTtcblxuICAgIGVsTGlrZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJywgKCkgPT4gdGhpcy5hZGRMaWtlKG51bGwsIG1lYWwuaWRNZWFsLCBlbExpa2VDb3VudCksXG4gICAgKTtcbiAgICBlbExpa2VDb3VudC50ZXh0Q29udGVudCA9IGAgKCR7bGlrZUNvdW50fSlgO1xuICAgIGVsTGlrZUNvdW50LmNvdW50ZXIgPSBsaWtlQ291bnQ7XG4gICAgZWxMaWtlUGFyZW50LmFwcGVuZENoaWxkKGVsTGlrZSk7XG4gICAgZWxMaWtlUGFyZW50LmFwcGVuZENoaWxkKGVsTGlrZUNvdW50KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChlbEljb24pO1xuICAgIGRpdkRldGFpbHMuYXBwZW5kQ2hpbGQoZWxOYW1lKTtcbiAgICBkaXZEZXRhaWxzLmFwcGVuZENoaWxkKGVsTGlrZVBhcmVudCk7XG4gICAgZGl2QnV0dG9uLmFwcGVuZENoaWxkKGVsQ29tbWVudCk7XG4gICAgZGl2RGV0YWlscy5hcHBlbmRDaGlsZChkaXZCdXR0b24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZEZXRhaWxzKTtcbiAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIGdldE1lYWxzID0gKGFzeW5jIChidG5SZWZyZXNoID0gbnVsbCkgPT4ge1xuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2VVcmx9c2VhcmNoLnBocD9zPWAsIHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIH0pO1xuICAgIGNvbnN0IG1lYWxzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChtZWFscy5tZXNzYWdlKSB7XG4gICAgICB0aGlzLmxibE1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZWFscy5tZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmxJbnZvbHZlICsgdGhpcy5hcHBJZH0vbGlrZXNgO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBlciA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIGlmIChlciAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgbGlrZXMgPSBKU09OLnBhcnNlKGVyKTtcbiAgICAgICAgaWYgKGxpa2VzLmVycm9yKSB7XG4gICAgICAgICAgVG9hc3RpZnkoe1xuICAgICAgICAgICAgdGV4dDogbGlrZXMuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaWtlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxpa2VzID0gbGlrZXM7XG4gICAgICAgICAgICB0aGlzLmNvdW50TGlrZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWVhbHMubWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgICBsZXQgbGlrZSA9IHRoaXMubGlrZXMuZmluZCgoeCkgPT4geC5pdGVtX2lkID09PSBtZWFsLmlkTWVhbCk7XG4gICAgICAgIGlmIChsaWtlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWtlID0ge1xuICAgICAgICAgICAgICBsaWtlczogMCxcbiAgICAgICAgICAgICAgaXRlbV9pZDogbWVhbC5pZE1lYWwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dNZWFsKG1lYWwsIGxpa2UubGlrZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gIH0pO1xuXG4gIGFkZExpa2UgPSAoYXN5bmMgKGJ0blJlZnJlc2ggPSBudWxsLCBpZE1lYWwsIGVsTGlrZUNvdW50KSA9PiB7XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1swXS5jbGFzc05hbWUgPSAoJ2ZhIGZhLXNwaW4gZmEtc3Bpbm5lcicpO1xuICAgIGNvbnN0IGxpa2VPYmplY3QgPSB7XG4gICAgICAgIGl0ZW1faWQ6IGlkTWVhbCxcbiAgICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2VVcmxJbnZvbHZlfSR7dGhpcy5hcHBJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobGlrZU9iamVjdCksXG4gICAgfSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgdGV4dDogcmVzdWx0LmVycm9yLm1lc3NhZ2UsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb2FzdGlmeSh7XG4gICAgICAgIHRleHQ6IHJlc3VsdCxcbiAgICAgICAgY2xhc3NOYW1lOiAnaW5mbycsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZCknLFxuICAgICAgICB9LFxuICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgICBlbExpa2VDb3VudC5jb3VudGVyID0gTnVtYmVyKGVsTGlrZUNvdW50LmNvdW50ZXIpICsgMTtcbiAgICAgIGVsTGlrZUNvdW50LnRleHRDb250ZW50ID0gYCAoJHtOdW1iZXIoZWxMaWtlQ291bnQuY291bnRlcil9KWA7XG4gICAgfVxuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gJyc7XG4gIH0pO1xuXG4gIGNvdW50TGlrZXMgPSAoKCkgPT4ge1xuICAgIHRoaXMubGlrZVRvdGFsLmlubmVyVGV4dCA9IHRoaXMubGlrZXMubGVuZ3RoO1xuICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=