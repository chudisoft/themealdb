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
  const response = await fetch(`${baseUrlInvolve}`, {
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
      this.countLikes();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1B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QVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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bEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CLEVBQUUsV0FBVztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU0sa0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUNOLE1BQU0sa0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxxQ0FBcUMsNEJBQTRCO0FBQ2pFO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzcz8yYWU5Iiwid2VicGFjazovL3RoZW1lYWxkYi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL3NyYy9tb2R1bGVzL21lYWxQb3B1cC5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9zcmMvbW9kdWxlcy9tZWFsbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIVxuICogVG9hc3RpZnkganMgMS4xMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXB2YXJ1bi90b2FzdGlmeS1qc1xuICogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VkXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFZhcnVuIEEgUFxuICovXG5cbi50b2FzdGlmeSB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDEwcHggMzZweCAtNHB4IHJnYmEoNzcsIDk2LCAyMzIsIDAuMyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNzNhNWZmLCAjNTQ3N2Y1KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzNhNWZmLCAjNTQ3N2Y1KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XG4gICAgei1pbmRleDogMjE0NzQ4MzY0Nztcbn1cblxuLnRvYXN0aWZ5Lm9uIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4udG9hc3QtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLnRvYXN0aWZ5LXJpZ2h0IHtcbiAgICByaWdodDogMTVweDtcbn1cblxuLnRvYXN0aWZ5LWxlZnQge1xuICAgIGxlZnQ6IDE1cHg7XG59XG5cbi50b2FzdGlmeS10b3Age1xuICAgIHRvcDogLTE1MHB4O1xufVxuXG4udG9hc3RpZnktYm90dG9tIHtcbiAgICBib3R0b206IC0xNTBweDtcbn1cblxuLnRvYXN0aWZ5LXJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi50b2FzdGlmeS1hdmF0YXIge1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIG1hcmdpbjogLTdweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udG9hc3RpZnktY2VudGVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogLW1vei1maXQtY29udGVudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC50b2FzdGlmeS1yaWdodCwgLnRvYXN0aWZ5LWxlZnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7RUFNRTs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHVGQUF1RjtJQUN2Riw2REFBNkQ7SUFDN0QscURBQXFEO0lBQ3JELGVBQWU7SUFDZixVQUFVO0lBQ1Ysd0RBQXdEO0lBQ3hELGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsUUFBUTtRQUNSLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIVxcbiAqIFRvYXN0aWZ5IGpzIDEuMTIuMFxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXFxuICogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VkXFxuICpcXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXFxuICovXFxuXFxuLnRvYXN0aWZ5IHtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDEwcHggMzZweCAtNHB4IHJnYmEoNzcsIDk2LCAyMzIsIDAuMyk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XFxuICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7XFxufVxcblxcbi50b2FzdGlmeS5vbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50b2FzdC1jbG9zZSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi50b2FzdGlmeS1yaWdodCB7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4udG9hc3RpZnktbGVmdCB7XFxuICAgIGxlZnQ6IDE1cHg7XFxufVxcblxcbi50b2FzdGlmeS10b3Age1xcbiAgICB0b3A6IC0xNTBweDtcXG59XFxuXFxuLnRvYXN0aWZ5LWJvdHRvbSB7XFxuICAgIGJvdHRvbTogLTE1MHB4O1xcbn1cXG5cXG4udG9hc3RpZnktcm91bmRlZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi50b2FzdGlmeS1hdmF0YXIge1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIG1hcmdpbjogLTdweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnRvYXN0aWZ5LWNlbnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcXG4gICAgLnRvYXN0aWZ5LXJpZ2h0LCAudG9hc3RpZnktbGVmdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTp3Z2h0QDQwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuXHJcbi5uYXZiYXItbG9nbyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgcGFkZGluZzogMThweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNjVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMzU0NTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cyB7XHJcbiAgY29sb3I6ICNmMDVmNDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogNWVtO1xyXG4gIG1pbi1oZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbnNlY3Rpb24sXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzdkMGQ1O1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIG92ZXJmbG93LXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41ZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDAuNWVtO1xyXG59XHJcblxyXG4uY29sLW1kLTEyLFxyXG4uY29sLW1kLTYsXHJcbi5jb2wtbWQtNCxcclxuLm1lYWwtZGV0YWlsIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNpdGVtSW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMjVlbTtcclxuICBtYXgtaGVpZ2h0OiAxMGVtO1xyXG59XHJcblxyXG4jY2F0ZWdvcnksXHJcbiNhcmVhLFxyXG4jdGFncyB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMge1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4jbW9kYWwtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHBhZGRpbmc6IDJlbSAwO1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0LXNlY3Rpb24gaDIge1xyXG4gIGNvbG9yOiAjM2QzZDNkO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiNtb2RhbC1zZWN0aW9uIGgyIHtcclxuICBjb2xvcjogIzNkM2QzZDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY29tbWVudC1mb3JtLFxyXG4uY29tbWVudC1saXN0LXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDFlbSAwO1xyXG59XHJcblxyXG4uY29tbWVudC1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDAuNWVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAzOCU7XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm0gaW5wdXQsXHJcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEsXHJcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm0gaW5wdXQsXHJcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcclxuICBoZWlnaHQ6IDNlbTtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG59XHJcblxyXG4uYmcge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXItYm90dG9tOiAjZDJkMmQyIHNvbGlkIDFweDtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHAge1xyXG4gIHBhZGRpbmc6IDAgMCAxZW0gMWVtO1xyXG59XHJcblxyXG4ucHMtMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxufVxyXG5cclxuLm1iLTIge1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLm10Yi0yIHtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uaHIge1xyXG4gIG1heC13aWR0aDogMTBlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXI6ICMwZTYxOTkgc29saWQgMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYTZmNTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk1ZDA7XHJcblxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ZDllZTM7ICovXHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5LWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJhM2U3O1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0LXNlY3Rpb24ge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgcGFkZGluZzogMmVtIDA7XHJcbn1cclxuXHJcbi5tZWFsLWxpc3Qge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWVhbC1kZXRhaWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6ICMwMDAgMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4ubWVhbC1kZXRhaWwgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5tZWFsLWRldGFpbCBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDA7XHJcbn1cclxuXHJcbi5tZWFsLWRldGFpbCBpIHtcclxuICBjb2xvcjogIzFjZGE1YjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZWFsLWRldGFpbCBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxufVxyXG5cclxuLm1lYWwtZGV0YWlsIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOWVkYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZWFsLWRldGFpbDpob3ZlciB7XHJcbiAgYm9yZGVyOiAjMGU2MTk5IDRweCBzb2xpZDtcclxuICBib3gtc2hhZG93OiA0cHggLTZweCByZ2IoNywgMzYsIDEzMSk7XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3QgbGk6aG92ZXIsXHJcbi5jb21tZW50LWZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogUHV0IGFsbCBtb2JpbGUgY29kZSBhYm92ZSB0aGlzLiAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lYWwtZGV0YWlsIHtcclxuICAgIG1heC13aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tZC00IHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1kLTYge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMmVtIDVlbTtcclxuICB9XHJcblxyXG4gIC5jb21tZW50LWxpc3Qtc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNsb3NlIHtcclxuICAgIHJpZ2h0OiA0ZW07XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5REFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixT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QUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBLG9DQUFvQztBQUNwQztFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XFxyXFxufVxcclxcblxcclxcbi5hcHAtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMzA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbG9nbyB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMThweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMThyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZycpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDY1cHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzM1NDU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiAjZjA1ZjQwO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1ZW07XFxyXFxuICBtaW4taGVpZ2h0OiA3NXZoO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLFxcclxcbmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAycHggIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWM3ZDBkNTtcXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBvdmVyZmxvdy15OiBpbml0aWFsICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jb2wtbWQtMTIsXFxyXFxuLmNvbC1tZC02LFxcclxcbi5jb2wtbWQtNCxcXHJcXG4ubWVhbC1kZXRhaWwge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jaXRlbUltYWdlIHtcXHJcXG4gIG1heC13aWR0aDogMjVlbTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwZW07XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yeSxcXHJcXG4jYXJlYSxcXHJcXG4jdGFncyB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnRzIHtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZhO1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcGFkZGluZzogMmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiBoMiB7XFxyXFxuICBjb2xvcjogIzNkM2QzZDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1zZWN0aW9uIGgyIHtcXHJcXG4gIGNvbG9yOiAjM2QzZDNkO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSxcXHJcXG4uY29tbWVudC1saXN0LXNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLXdpZHRoOiAzOCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1mb3JtIHRleHRhcmVhLFxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gaW5wdXQsXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmcge1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2QyZDJkMiBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiBwIHtcXHJcXG4gIHBhZGRpbmc6IDAgMCAxZW0gMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHMtMiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWItMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5tdGItMiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5ociB7XFxyXFxuICBtYXgtd2lkdGg6IDEwZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlcjogIzBlNjE5OSBzb2xpZCAycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYTZmNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcHJpbWFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5NWQwO1xcclxcblxcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzVkOWVlMzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmJnLXByaW1hcnktbGlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYTNlNztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1saXN0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6ICMwMDAgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbCBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWwgaSB7XFxyXFxuICBjb2xvcjogIzFjZGE1YjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbCBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOWVkYTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWw6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAjMGU2MTk5IDRweCBzb2xpZDtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCAtNnB4IHJnYig3LCAzNiwgMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCBsaTpob3ZlcixcXHJcXG4uY29tbWVudC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFB1dCBhbGwgbW9iaWxlIGNvZGUgYWJvdmUgdGhpcy4gKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVhbC1kZXRhaWwge1xcclxcbiAgICBtYXgtd2lkdGg6IDIwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2wtbWQtNCB7XFxyXFxuICAgIHdpZHRoOiAxOCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sLW1kLTYge1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDJlbSA1ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1saXN0LXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWNsb3NlIHtcXHJcXG4gICAgcmlnaHQ6IDRlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9hc3RpZnkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvYXN0aWZ5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyohXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXG4gKi9cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5Ub2FzdGlmeSA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIC8vIE9iamVjdCBpbml0aWFsaXphdGlvblxuICB2YXIgVG9hc3RpZnkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBSZXR1cm5pbmcgYSBuZXcgaW5pdCBvYmplY3RcbiAgICAgIHJldHVybiBuZXcgVG9hc3RpZnkubGliLmluaXQob3B0aW9ucyk7XG4gICAgfSxcbiAgICAvLyBMaWJyYXJ5IHZlcnNpb25cbiAgICB2ZXJzaW9uID0gXCIxLjEyLjBcIjtcblxuICAvLyBTZXQgdGhlIGRlZmF1bHQgZ2xvYmFsIG9wdGlvbnNcbiAgVG9hc3RpZnkuZGVmYXVsdHMgPSB7XG4gICAgb2xkZXN0Rmlyc3Q6IHRydWUsXG4gICAgdGV4dDogXCJUb2FzdGlmeSBpcyBhd2Vzb21lIVwiLFxuICAgIG5vZGU6IHVuZGVmaW5lZCxcbiAgICBkdXJhdGlvbjogMzAwMCxcbiAgICBzZWxlY3RvcjogdW5kZWZpbmVkLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBkZXN0aW5hdGlvbjogdW5kZWZpbmVkLFxuICAgIG5ld1dpbmRvdzogZmFsc2UsXG4gICAgY2xvc2U6IGZhbHNlLFxuICAgIGdyYXZpdHk6IFwidG9hc3RpZnktdG9wXCIsXG4gICAgcG9zaXRpb25MZWZ0OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICBhdmF0YXI6IFwiXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIHN0b3BPbkZvY3VzOiB0cnVlLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIG9mZnNldDoge3g6IDAsIHk6IDB9LFxuICAgIGVzY2FwZU1hcmt1cDogdHJ1ZSxcbiAgICBhcmlhTGl2ZTogJ3BvbGl0ZScsXG4gICAgc3R5bGU6IHtiYWNrZ3JvdW5kOiAnJ31cbiAgfTtcblxuICAvLyBEZWZpbmluZyB0aGUgcHJvdG90eXBlIG9mIHRoZSBvYmplY3RcbiAgVG9hc3RpZnkubGliID0gVG9hc3RpZnkucHJvdG90eXBlID0ge1xuICAgIHRvYXN0aWZ5OiB2ZXJzaW9uLFxuXG4gICAgY29uc3RydWN0b3I6IFRvYXN0aWZ5LFxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHRoZSBvYmplY3Qgd2l0aCByZXF1aXJlZCBwYXJhbWV0ZXJzXG4gICAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gVmVyaWZ5aW5nIGFuZCB2YWxpZGF0aW5nIHRoZSBpbnB1dCBvYmplY3RcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG5cbiAgICAgIHRoaXMudG9hc3RFbGVtZW50ID0gbnVsbDtcblxuICAgICAgLy8gVmFsaWRhdGluZyB0aGUgb3B0aW9uc1xuICAgICAgdGhpcy5vcHRpb25zLnRleHQgPSBvcHRpb25zLnRleHQgfHwgVG9hc3RpZnkuZGVmYXVsdHMudGV4dDsgLy8gRGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm9wdGlvbnMubm9kZSA9IG9wdGlvbnMubm9kZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5ub2RlOyAgLy8gRGlzcGxheSBjb250ZW50IGFzIG5vZGVcbiAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPT09IDAgPyAwIDogb3B0aW9ucy5kdXJhdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5kdXJhdGlvbjsgLy8gRGlzcGxheSBkdXJhdGlvblxuICAgICAgdGhpcy5vcHRpb25zLnNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zZWxlY3RvcjsgLy8gUGFyZW50IHNlbGVjdG9yXG4gICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNhbGxiYWNrOyAvLyBDYWxsYmFjayBhZnRlciBkaXNwbGF5XG4gICAgICB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmRlc3RpbmF0aW9uOyAvLyBPbi1jbGljayBkZXN0aW5hdGlvblxuICAgICAgdGhpcy5vcHRpb25zLm5ld1dpbmRvdyA9IG9wdGlvbnMubmV3V2luZG93IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm5ld1dpbmRvdzsgLy8gT3BlbiBkZXN0aW5hdGlvbiBpbiBuZXcgd2luZG93XG4gICAgICB0aGlzLm9wdGlvbnMuY2xvc2UgPSBvcHRpb25zLmNsb3NlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNsb3NlOyAvLyBTaG93IHRvYXN0IGNsb3NlIGljb25cbiAgICAgIHRoaXMub3B0aW9ucy5ncmF2aXR5ID0gb3B0aW9ucy5ncmF2aXR5ID09PSBcImJvdHRvbVwiID8gXCJ0b2FzdGlmeS1ib3R0b21cIiA6IFRvYXN0aWZ5LmRlZmF1bHRzLmdyYXZpdHk7IC8vIHRvYXN0IHBvc2l0aW9uIC0gdG9wIG9yIGJvdHRvbVxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9IG9wdGlvbnMucG9zaXRpb25MZWZ0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uTGVmdDsgLy8gdG9hc3QgcG9zaXRpb24gLSBsZWZ0IG9yIHJpZ2h0XG4gICAgICB0aGlzLm9wdGlvbnMucG9zaXRpb24gPSBvcHRpb25zLnBvc2l0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uOyAvLyB0b2FzdCBwb3NpdGlvbiAtIGxlZnQgb3IgcmlnaHRcbiAgICAgIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5iYWNrZ3JvdW5kQ29sb3I7IC8vIHRvYXN0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIHRoaXMub3B0aW9ucy5hdmF0YXIgPSBvcHRpb25zLmF2YXRhciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5hdmF0YXI7IC8vIGltZyBlbGVtZW50IHNyYyAtIHVybCBvciBhIHBhdGhcbiAgICAgIHRoaXMub3B0aW9ucy5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jbGFzc05hbWU7IC8vIGFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy5vcHRpb25zLnN0b3BPbkZvY3VzID0gb3B0aW9ucy5zdG9wT25Gb2N1cyA9PT0gdW5kZWZpbmVkID8gVG9hc3RpZnkuZGVmYXVsdHMuc3RvcE9uRm9jdXMgOiBvcHRpb25zLnN0b3BPbkZvY3VzOyAvLyBzdG9wIHRpbWVvdXQgb24gZm9jdXNcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrID0gb3B0aW9ucy5vbkNsaWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm9uQ2xpY2s7IC8vIENhbGxiYWNrIGFmdGVyIGNsaWNrXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgfHwgVG9hc3RpZnkuZGVmYXVsdHMub2Zmc2V0OyAvLyB0b2FzdCBvZmZzZXRcbiAgICAgIHRoaXMub3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBvcHRpb25zLmVzY2FwZU1hcmt1cCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5lc2NhcGVNYXJrdXAgOiBUb2FzdGlmeS5kZWZhdWx0cy5lc2NhcGVNYXJrdXA7XG4gICAgICB0aGlzLm9wdGlvbnMuYXJpYUxpdmUgPSBvcHRpb25zLmFyaWFMaXZlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmFyaWFMaXZlO1xuICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zdHlsZTtcbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybmluZyB0aGUgY3VycmVudCBvYmplY3QgZm9yIGNoYWluaW5nIGZ1bmN0aW9uc1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEJ1aWxkaW5nIHRoZSBET00gZWxlbWVudFxuICAgIGJ1aWxkVG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVmFsaWRhdGluZyBpZiB0aGUgb3B0aW9ucyBhcmUgZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgXCJUb2FzdGlmeSBpcyBub3QgaW5pdGlhbGl6ZWRcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3RcbiAgICAgIHZhciBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdGlmeSBvbiBcIiArIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cbiAgICAgIC8vIFBvc2l0aW9uaW5nIHRvYXN0IHRvIGxlZnQgb3IgcmlnaHQgb3IgY2VudGVyXG4gICAgICBpZiAoISF0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktXCIgKyB0aGlzLm9wdGlvbnMucG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUbyBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktbGVmdFwiO1xuICAgICAgICAgIGNvbnNvbGUud2FybignUHJvcGVydHkgYHBvc2l0aW9uTGVmdGAgd2lsbCBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zLiBQbGVhc2UgdXNlIGBwb3NpdGlvbmAgaW5zdGVhZC4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgcG9zaXRpb25cbiAgICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiB0b2FzdGlmeS1yaWdodFwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFzc2lnbmluZyBncmF2aXR5IG9mIGVsZW1lbnRcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5vcHRpb25zLmdyYXZpdHk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYmVpbmcgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB1c2luZyB0aGUgc3R5bGUgSFRNTCBET00gcHJvcGVydHlcbiAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVElPTiBOT1RJQ0U6IFwiYmFja2dyb3VuZENvbG9yXCIgaXMgYmVpbmcgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0aGUgXCJzdHlsZS5iYWNrZ3JvdW5kXCIgcHJvcGVydHkuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgc3R5bGUgb2JqZWN0IGFuZCBhcHBseSBzdHlsZXMgdG8gZGl2RWxlbWVudFxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcy5vcHRpb25zLnN0eWxlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gdGhpcy5vcHRpb25zLnN0eWxlW3Byb3BlcnR5XTtcbiAgICAgIH1cblxuICAgICAgLy8gQW5ub3VuY2UgdGhlIHRvYXN0IHRvIHNjcmVlbiByZWFkZXJzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFyaWFMaXZlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCB0aGlzLm9wdGlvbnMuYXJpYUxpdmUpXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgdG9hc3QgbWVzc2FnZS9ub2RlXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBub2RlLCB3ZSBpbnNlcnQgaXRcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXNjYXBlTWFya3VwKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm9wdGlvbnMudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdmF0YXIgIT09IFwiXCIpIHtcbiAgICAgICAgICB2YXIgYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5zcmMgPSB0aGlzLm9wdGlvbnMuYXZhdGFyO1xuXG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0aWZ5LWF2YXRhclwiO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgbGVmdCBvZiBjb250ZW50XG4gICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgICAgZGl2RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgYSBjbG9zZSBpY29uIHRvIHRoZSB0b2FzdFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBzcGFuIGZvciBjbG9zZSBlbGVtZW50XG4gICAgICAgIHZhciBjbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjbG9zZUVsZW1lbnQudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XG4gICAgICAgIGNsb3NlRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0LWNsb3NlXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5pbm5lckhUTUwgPSBcIiYjMTAwMDY7XCI7XG5cbiAgICAgICAgLy8gVHJpZ2dlcmluZyB0aGUgcmVtb3ZhbCBvZiB0b2FzdCBmcm9tIERPTSBvbiBjbG9zZSBjbGlja1xuICAgICAgICBjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvL0NhbGN1bGF0aW5nIHNjcmVlbiB3aWR0aFxuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aDtcblxuICAgICAgICAvLyBBZGRpbmcgdGhlIGNsb3NlIGljb24gdG8gdGhlIHRvYXN0IGVsZW1lbnRcbiAgICAgICAgLy8gRGlzcGxheSBvbiB0aGUgcmlnaHQgaWYgc2NyZWVuIHdpZHRoIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAzNjBweFxuICAgICAgICBpZiAoKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSAmJiB3aWR0aCA+IDM2MCkge1xuICAgICAgICAgIC8vIEFkZGluZyBjbG9zZSBpY29uIG9uIHRoZSBsZWZ0IG9mIGNvbnRlbnRcbiAgICAgICAgICBkaXZFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aW1lb3V0IHdoaWxlIHRvYXN0IGlzIGZvY3VzZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RvcE9uRm9jdXMgJiYgdGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHN0b3AgY291bnRkb3duXG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRpdkVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLy8gYWRkIGJhY2sgdGhlIHRpbWVvdXRcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwibW91c2VsZWF2ZVwiLFxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBmcm9tIERPTVxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlRWxlbWVudChkaXZFbGVtZW50KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLmR1cmF0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBhbiBvbi1jbGljayBkZXN0aW5hdGlvbiBwYXRoXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubmV3V2luZG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xpY2soKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIG9mZnNldFxuICAgICAgaWYodHlwZW9mIHRoaXMub3B0aW9ucy5vZmZzZXQgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICB2YXIgeCA9IGdldEF4aXNPZmZzZXRBVmFsdWUoXCJ4XCIsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciB5ID0gZ2V0QXhpc09mZnNldEFWYWx1ZShcInlcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICB2YXIgeE9mZnNldCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiA/IHggOiBcIi1cIiArIHg7XG4gICAgICAgIHZhciB5T2Zmc2V0ID0gdGhpcy5vcHRpb25zLmdyYXZpdHkgPT0gXCJ0b2FzdGlmeS10b3BcIiA/IHkgOiBcIi1cIiArIHk7XG5cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIHhPZmZzZXQgKyBcIixcIiArIHlPZmZzZXQgKyBcIilcIjtcblxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5pbmcgdGhlIGdlbmVyYXRlZCBlbGVtZW50XG4gICAgICByZXR1cm4gZGl2RWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gRGlzcGxheWluZyB0aGUgdG9hc3RcbiAgICBzaG93VG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3QgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy50b2FzdEVsZW1lbnQgPSB0aGlzLmJ1aWxkVG9hc3QoKTtcblxuICAgICAgLy8gR2V0dGluZyB0aGUgcm9vdCBlbGVtZW50IHRvIHdpdGggdGhlIHRvYXN0IG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICB2YXIgcm9vdEVsZW1lbnQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8ICh0eXBlb2YgU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5vcHRpb25zLnNlbGVjdG9yIGluc3RhbmNlb2YgU2hhZG93Um9vdCkpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZhbGlkYXRpbmcgaWYgcm9vdCBlbGVtZW50IGlzIHByZXNlbnQgaW4gRE9NXG4gICAgICBpZiAoIXJvb3RFbGVtZW50KSB7XG4gICAgICAgIHRocm93IFwiUm9vdCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgRE9NIGVsZW1lbnRcbiAgICAgIHZhciBlbGVtZW50VG9JbnNlcnQgPSBUb2FzdGlmeS5kZWZhdWx0cy5vbGRlc3RGaXJzdCA/IHJvb3RFbGVtZW50LmZpcnN0Q2hpbGQgOiByb290RWxlbWVudC5sYXN0Q2hpbGQ7XG4gICAgICByb290RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy50b2FzdEVsZW1lbnQsIGVsZW1lbnRUb0luc2VydCk7XG5cbiAgICAgIC8vIFJlcG9zaXRpb25pbmcgdGhlIHRvYXN0cyBpbiBjYXNlIG11bHRpcGxlIHRvYXN0cyBhcmUgcHJlc2VudFxuICAgICAgVG9hc3RpZnkucmVwb3NpdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgICAgfVxuXG4gICAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaGlkZVRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICByZW1vdmVFbGVtZW50OiBmdW5jdGlvbih0b2FzdEVsZW1lbnQpIHtcbiAgICAgIC8vIEhpZGluZyB0aGUgZWxlbWVudFxuICAgICAgLy8gdG9hc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcbiAgICAgIHRvYXN0RWxlbWVudC5jbGFzc05hbWUgPSB0b2FzdEVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoXCIgb25cIiwgXCJcIik7XG5cbiAgICAgIC8vIFJlbW92aW5nIHRoZSBlbGVtZW50IGZyb20gRE9NIGFmdGVyIHRyYW5zaXRpb24gZW5kXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbnMgbm9kZSBpZiBhbnlcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIERPTSwgb25seSB3aGVuIHRoZSBwYXJlbnQgbm9kZSB3YXMgbm90IHJlbW92ZWQgYmVmb3JlLlxuICAgICAgICAgIGlmICh0b2FzdEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdG9hc3RFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9hc3RFbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFjay5jYWxsKHRvYXN0RWxlbWVudCk7XG5cbiAgICAgICAgICAvLyBSZXBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgYWdhaW5cbiAgICAgICAgICBUb2FzdGlmeS5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgNDAwXG4gICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgIH0sXG4gIH07XG5cbiAgLy8gUG9zaXRpb25pbmcgdGhlIHRvYXN0cyBvbiB0aGUgRE9NXG4gIFRvYXN0aWZ5LnJlcG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgIC8vIFRvcCBtYXJnaW5zIHdpdGggZ3Jhdml0eVxuICAgIHZhciB0b3BMZWZ0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIHRvcFJpZ2h0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIG9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IGFsbCB0b2FzdCBtZXNzYWdlcyBvbiB0aGUgRE9NXG4gICAgdmFyIGFsbFRvYXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2FzdGlmeVwiKTtcblxuICAgIHZhciBjbGFzc1VzZWQ7XG5cbiAgICAvLyBNb2RpZnlpbmcgdGhlIHBvc2l0aW9uIG9mIGVhY2ggdG9hc3QgZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsVG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBHZXR0aW5nIHRoZSBhcHBsaWVkIGdyYXZpdHlcbiAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS10b3BcIikgPT09IHRydWUpIHtcbiAgICAgICAgY2xhc3NVc2VkID0gXCJ0b2FzdGlmeS10b3BcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzVXNlZCA9IFwidG9hc3RpZnktYm90dG9tXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHQgPSBhbGxUb2FzdHNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgY2xhc3NVc2VkID0gY2xhc3NVc2VkLnN1YnN0cig5LCBjbGFzc1VzZWQubGVuZ3RoLTEpXG4gICAgICAvLyBTcGFjaW5nIGJldHdlZW4gdG9hc3RzXG4gICAgICB2YXIgb2Zmc2V0ID0gMTU7XG5cbiAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMCA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoO1xuXG4gICAgICAvLyBTaG93IHRvYXN0IGluIGNlbnRlciBpZiBzY3JlZW4gd2l0aCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHhcbiAgICAgIGlmICh3aWR0aCA8PSAzNjApIHtcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS1sZWZ0XCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBwb3NpdGlvblxuICAgICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BSaWdodE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBvZmZzZXQuXG4gIGZ1bmN0aW9uIGdldEF4aXNPZmZzZXRBVmFsdWUoYXhpcywgb3B0aW9ucykge1xuXG4gICAgaWYob3B0aW9ucy5vZmZzZXRbYXhpc10pIHtcbiAgICAgIGlmKGlzTmFOKG9wdGlvbnMub2Zmc2V0W2F4aXNdKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5vZmZzZXRbYXhpc107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub2Zmc2V0W2F4aXNdICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJzBweCc7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zQ2xhc3MoZWxlbSwgeW91ckNsYXNzKSB7XG4gICAgaWYgKCFlbGVtIHx8IHR5cGVvZiB5b3VyQ2xhc3MgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZWxlbS5jbGFzc05hbWUgJiZcbiAgICAgIGVsZW0uY2xhc3NOYW1lXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KC9cXHMrL2dpKVxuICAgICAgICAuaW5kZXhPZih5b3VyQ2xhc3MpID4gLTFcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0dGluZyB1cCB0aGUgcHJvdG90eXBlIGZvciB0aGUgaW5pdCBvYmplY3RcbiAgVG9hc3RpZnkubGliLmluaXQucHJvdG90eXBlID0gVG9hc3RpZnkubGliO1xuXG4gIC8vIFJldHVybmluZyB0aGUgVG9hc3RpZnkgZnVuY3Rpb24gdG8gYmUgYXNzaWduZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QvbW9kdWxlXG4gIHJldHVybiBUb2FzdGlmeTtcbn0pO1xuIiwiaW1wb3J0IE1lYWxMaXN0IGZyb20gJy4vbW9kdWxlcy9tZWFsbGlzdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvJztcbmNvbnN0IGJhc2VVcmxJbnZvbHZlID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBtZWFsQXBwSWROYW1lID0gJ21lYWxsaXN0JztcbmxldCBhcHBJZCA9ICcnO1xuXG5jb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obWVhbEFwcElkTmFtZSwgYXBwSWQpO1xufTtcblxuY29uc3QgY3JlYXRlQXBwID0gKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsSW52b2x2ZX1gLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi90ZXh0JyxcbiAgICB9LFxuICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSk7XG4gIGFwcElkID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICBzYXZlRGF0YSgpO1xufSk7XG5cbmNvbnN0IHJldHJpZXZlSWQgPSBhc3luYyAoKSA9PiB7XG4gIGFwcElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obWVhbEFwcElkTmFtZSk7XG4gIGlmIChhcHBJZCA9PT0gbnVsbCkgYXdhaXQgY3JlYXRlQXBwKCk7XG59O1xuXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcmV0cmlldmVJZCgpO1xuICBjb25zdCBtZWFsc05ldyA9IG5ldyBNZWFsTGlzdChhcHBJZCwgYmFzZVVybCwgYmFzZVVybEludm9sdmUsIDUyNzcyKTtcbiAgbWVhbHNOZXcuZ2V0TWVhbHMobnVsbCk7XG4gIC8vIGNvbnN0IG1lYWxOZXcgPSBuZXcgTWVhbExpc3QoYXBwSWQsIGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCA1Mjc3Mik7XG4gIC8vIGNvbnN0IG1lYWxOZXcgPSBuZXcgTWVhbExpc3QoNTMwNzUpO1xuICAvLyBtZWFsTmV3LmdldE1lYWwobnVsbCk7XG4gIC8vIGlmIChtZWFsTmV3LmdhbWVJZCA9PT0gbnVsbCkgbWVhbE5ldy5jcmVhdGVBcHAoKTtcbn07XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlJyk7XG5tb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG59KTtcblxuZG9jdW1lbnQub25rZXlkb3duID0gKGV2dCkgPT4ge1xuICBldnQgPSBldnQgfHwgd2luZG93LmV2ZW50O1xuICBsZXQgaXNFc2NhcGUgPSBmYWxzZTtcbiAgaWYgKCdrZXknIGluIGV2dCkge1xuICAgICAgaXNFc2NhcGUgPSAoZXZ0LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZ0LmtleSA9PT0gJ0VzYycpO1xuICB9IGVsc2Uge1xuICAgICAgaXNFc2NhcGUgPSAoZXZ0LmtleUNvZGUgPT09IDI3KTtcbiAgfVxuICBpZiAoaXNFc2NhcGUgJiYgbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfVxufTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBUb2FzdGlmeSBmcm9tICd0b2FzdGlmeS1qcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgJ3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3MnO1xuXG5jbGFzcyBNZWFsUG9wdXAge1xuICBjb25zdHJ1Y3RvcihhcHBJZCwgYmFzZVVybCwgYmFzZVVybEludm9sdmUsIG1lYWxJZCkge1xuICAgIHRoaXMubWVhbElkID0gbWVhbElkO1xuXG4gICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIHRoaXMuY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgdGhpcy5jb21tZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWZvcm0nKTtcbiAgICB0aGlzLmNvbW1lbnRUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50LXRvdGFsJyk7XG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcbiAgICB0aGlzLmNvbW1lbnRzID0gW107XG4gICAgdGhpcy5sYmxNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKTtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHRoaXMuYmFzZVVybEludm9sdmUgPSBiYXNlVXJsSW52b2x2ZTtcbiAgICB0aGlzLmNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtbmFtZScpO1xuICAgICAgY29uc3QgaW5zaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWluc2lnaHQnKTtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWJ1dHRvbicpO1xuICAgICAgdGhpcy5hZGRDb21tZW50KGJ1dHRvbiwgdXNlcm5hbWUudmFsdWUsIGluc2lnaHQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TWVhbGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVhbGxpc3Q7XG4gIH1cblxuICBzaG93TWVhbChtZWFsKSB7XG4gICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW1UaXRsZScpO1xuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtSW1hZ2UnKTtcbiAgICBjb25zdCB0YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhZ3MnKTtcbiAgICBjb25zdCB5b3V0dWJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3lvdXR1YmUnKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeScpO1xuICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJlYScpO1xuICAgIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9uJyk7XG4gICAgY29uc3QgaW5ncmVkaWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ncmVkaWVudHMnKTtcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBtZWFsLnN0ck1lYWw7XG4gICAgdGFncy50ZXh0Q29udGVudCA9IG1lYWwuc3RyVGFncztcbiAgICB5b3V0dWJlLmhyZWYgPSBtZWFsLnN0cllvdXR1YmU7XG4gICAgaXRlbUltYWdlLnNyYyA9IG1lYWwuc3RyTWVhbFRodW1iO1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gbWVhbC5zdHJJbnN0cnVjdGlvbnM7XG4gICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBtZWFsLnN0ckNhdGVnb3J5O1xuICAgIGFyZWEudGV4dENvbnRlbnQgPSBtZWFsLnN0ckFyZWE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGluZyA9IG1lYWxbYHN0ckluZ3JlZGllbnQke2kgKyAxfWBdO1xuICAgICAgaWYgKGluZyAhPT0gJycgJiYgaW5nICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2luZ3JlZGllbnQnO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGluZztcbiAgICAgICAgaW5ncmVkaWVudHMuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3dDb21tZW50KGNvbW1lbnQpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGVsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICBsaS5jbGFzc05hbWUgPSAnYmcnO1xuXG4gICAgZWxOYW1lLnRleHRDb250ZW50ID0gYCR7Y29tbWVudC51c2VybmFtZX06IGA7XG4gICAgZWxDb21tZW50LnRleHRDb250ZW50ID0gYCR7Y29tbWVudC5jb21tZW50fWA7XG4gICAgZWxUaW1lLnRleHRDb250ZW50ID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSBgO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoZWxUaW1lKTtcbiAgICBsaS5hcHBlbmRDaGlsZChlbE5hbWUpO1xuICAgIGxpLmFwcGVuZENoaWxkKGVsQ29tbWVudCk7XG4gICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuXG4gIGdldE1lYWwgPSAoYXN5bmMgKGJ0blJlZnJlc2ggPSBudWxsKSA9PiB7XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVVybH1sb29rdXAucGhwP2k9JHt0aGlzLm1lYWxJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICB9KTtcbiAgICBjb25zdCBtZWFsID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChtZWFsLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMubGJsTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lYWwubWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93TWVhbChtZWFsLm1lYWxzWzBdKTtcbiAgICAgIHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICB9XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgfSk7XG5cbiAgYWRkQ29tbWVudCA9IChhc3luYyAoYnRuUmVmcmVzaCA9IG51bGwsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1swXS5jbGFzc05hbWUgPSAoJ2ZhIGZhLXNwaW4gZmEtc3Bpbm5lcicpO1xuICAgIGNvbnN0IGNvbW1lbnRPYmplY3QgPSB7XG4gICAgICAgIGl0ZW1faWQ6IHRoaXMubWVhbElkLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY29tbWVudCxcbiAgICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2VVcmxJbnZvbHZlfSR7dGhpcy5hcHBJZH0vY29tbWVudHNgLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudE9iamVjdCksXG4gICAgfSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgdGV4dDogcmVzdWx0LmVycm9yLm1lc3NhZ2UsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb2FzdGlmeSh7XG4gICAgICAgIHRleHQ6IHJlc3VsdCxcbiAgICAgICAgY2xhc3NOYW1lOiAnaW5mbycsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZCknLFxuICAgICAgICB9LFxuICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgICB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgfVxuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gJyc7XG4gIH0pO1xuXG4gIGdldENvbW1lbnRzID0gKGFzeW5jIChidG5SZWZyZXNoID0gbnVsbCkgPT4ge1xuICAgIHRoaXMubGlzdC5pbm5lclRleHQgPSAnJztcbiAgICB0aGlzLmNvbW1lbnRUb3RhbC5pbm5lclRleHQgPSAwO1xuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmxJbnZvbHZlICsgdGhpcy5hcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke3RoaXMubWVhbElkfWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICB9KTtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoY29tbWVudHMuZXJyb3IpIHtcbiAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgdGV4dDogY29tbWVudHMuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnaW5mbycsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZCknLFxuICAgICAgICB9LFxuICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgfSBlbHNlIGlmIChjb21tZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd0NvbW1lbnQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvdW50Q29tbWVudHMoKTtcbiAgICB9XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1swXS5jbGFzc05hbWUgPSAnJztcbiAgfSk7XG5cbiAgY291bnRDb21tZW50cyA9ICgoKSA9PiB7XG4gICAgdGhpcy5jb21tZW50VG90YWwuaW5uZXJUZXh0ID0gdGhpcy5jb21tZW50cy5sZW5ndGg7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWFsUG9wdXA7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IFRvYXN0aWZ5IGZyb20gJ3RvYXN0aWZ5LWpzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAndG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgTWVhbFBvcHVwIGZyb20gJy4vbWVhbFBvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhbExpc3Qge1xuICBjb25zdHJ1Y3RvcihhcHBJZCwgYmFzZVVybCwgYmFzZVVybEludm9sdmUsIG1lYWxJZCkge1xuICAgIHRoaXMubWVhbElkID0gbWVhbElkO1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLWxpc3QnKTtcbiAgICB0aGlzLmxpa2VUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWtlVG90YWwnKTtcbiAgICB0aGlzLmFwcElkID0gYXBwSWQ7XG4gICAgdGhpcy5saWtlcyA9IFtdO1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgdGhpcy5iYXNlVXJsSW52b2x2ZSA9IGJhc2VVcmxJbnZvbHZlO1xuICB9XG5cbiAgZ2V0TWVhbGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVhbGxpc3Q7XG4gIH1cblxuICBzaG93TWVhbChtZWFsLCBsaWtlQ291bnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbExpa2VQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGVsTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBlbExpa2VDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBlbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGRpdi5jbGFzc05hbWUgPSAnbWVhbC1kZXRhaWwnO1xuICAgIGVsTGlrZVBhcmVudC5jbGFzc05hbWUgPSAncHMtMic7XG4gICAgZWxMaWtlLmNsYXNzTmFtZSA9ICdmYSBmYS1oZWFydCc7XG5cbiAgICBlbE5hbWUudGV4dENvbnRlbnQgPSBtZWFsLnN0ck1lYWw7XG4gICAgZWxDb21tZW50LnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcbiAgICBlbEljb24uc3JjID0gbWVhbC5zdHJNZWFsVGh1bWI7XG5cbiAgICBlbENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsICgpID0+IG5ldyBNZWFsUG9wdXAodGhpcy5hcHBJZCwgdGhpcy5iYXNlVXJsLCB0aGlzLmJhc2VVcmxJbnZvbHZlLCBtZWFsLmlkTWVhbCkuZ2V0TWVhbChudWxsKSxcbiAgICApO1xuXG4gICAgZWxMaWtlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLCAoKSA9PiB0aGlzLmFkZExpa2UobnVsbCwgbWVhbC5pZE1lYWwsIGVsTGlrZUNvdW50KSxcbiAgICApO1xuICAgIGVsTGlrZUNvdW50LnRleHRDb250ZW50ID0gYCAoJHtsaWtlQ291bnR9KWA7XG4gICAgZWxMaWtlQ291bnQuY291bnRlciA9IGxpa2VDb3VudDtcbiAgICBlbExpa2VQYXJlbnQuYXBwZW5kQ2hpbGQoZWxMaWtlKTtcbiAgICBlbExpa2VQYXJlbnQuYXBwZW5kQ2hpbGQoZWxMaWtlQ291bnQpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGVsSWNvbik7XG4gICAgZGl2RGV0YWlscy5hcHBlbmRDaGlsZChlbE5hbWUpO1xuICAgIGRpdkRldGFpbHMuYXBwZW5kQ2hpbGQoZWxMaWtlUGFyZW50KTtcbiAgICBkaXZCdXR0b24uYXBwZW5kQ2hpbGQoZWxDb21tZW50KTtcbiAgICBkaXZEZXRhaWxzLmFwcGVuZENoaWxkKGRpdkJ1dHRvbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkRldGFpbHMpO1xuICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbiAgZ2V0TWVhbHMgPSAoYXN5bmMgKGJ0blJlZnJlc2ggPSBudWxsKSA9PiB7XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVVybH1zZWFyY2gucGhwP3M9YCwge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSk7XG4gICAgY29uc3QgbWVhbHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKG1lYWxzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMubGJsTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lYWxzLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybEludm9sdmUgKyB0aGlzLmFwcElkfS9saWtlc2A7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGVyID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgaWYgKGVyICE9PSAnJykge1xuICAgICAgICBjb25zdCBsaWtlcyA9IEpTT04ucGFyc2UoZXIpO1xuICAgICAgICBpZiAobGlrZXMuZXJyb3IpIHtcbiAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICB0ZXh0OiBsaWtlcy5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaW5mbycsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpa2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGlrZXMgPSBsaWtlcztcbiAgICAgICAgICAgIHRoaXMuY291bnRMaWtlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtZWFscy5tZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgICAgIGxldCBsaWtlID0gdGhpcy5saWtlcy5maW5kKCh4KSA9PiB4Lml0ZW1faWQgPT09IG1lYWwuaWRNZWFsKTtcbiAgICAgICAgaWYgKGxpa2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxpa2UgPSB7XG4gICAgICAgICAgICAgIGxpa2VzOiAwLFxuICAgICAgICAgICAgICBpdGVtX2lkOiBtZWFsLmlkTWVhbCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd01lYWwobWVhbCwgbGlrZS5saWtlcyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY291bnRMaWtlcygpO1xuICAgIH1cbiAgICBpZiAoYnRuUmVmcmVzaCAhPT0gbnVsbCkgYnRuUmVmcmVzaC5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC50b2dnbGUoJ2ZhIGZhLXNwaW4gZmEtc3Bpbm5lcicpO1xuICB9KTtcblxuICBhZGRMaWtlID0gKGFzeW5jIChidG5SZWZyZXNoID0gbnVsbCwgaWRNZWFsLCBlbExpa2VDb3VudCkgPT4ge1xuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICBjb25zdCBsaWtlT2JqZWN0ID0ge1xuICAgICAgICBpdGVtX2lkOiBpZE1lYWwsXG4gICAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsSW52b2x2ZX0ke3RoaXMuYXBwSWR9L2xpa2VzYCwge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxpa2VPYmplY3QpLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICBUb2FzdGlmeSh7XG4gICAgICAgIHRleHQ6IHJlc3VsdC5lcnJvci5tZXNzYWdlLFxuICAgICAgICBjbGFzc05hbWU6ICdpbmZvJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKScsXG4gICAgICAgIH0sXG4gICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9hc3RpZnkoe1xuICAgICAgICB0ZXh0OiByZXN1bHQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgZWxMaWtlQ291bnQuY291bnRlciA9IE51bWJlcihlbExpa2VDb3VudC5jb3VudGVyKSArIDE7XG4gICAgICBlbExpa2VDb3VudC50ZXh0Q29udGVudCA9IGAgKCR7TnVtYmVyKGVsTGlrZUNvdW50LmNvdW50ZXIpfSlgO1xuICAgIH1cbiAgICBpZiAoYnRuUmVmcmVzaCAhPT0gbnVsbCkgYnRuUmVmcmVzaC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZSA9ICcnO1xuICB9KTtcblxuICBjb3VudExpa2VzID0gKCgpID0+IHtcbiAgICB0aGlzLmxpa2VUb3RhbC5pbm5lclRleHQgPSB0aGlzLmxpa2VzLmxlbmd0aDtcbiAgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9