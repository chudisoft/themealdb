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
    this.itemsTotal = document.querySelector('.itemsTotal');
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
      this.countItems();
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

  countItems = (() => {
    this.itemsTotal.innerText = this.list.childNodes.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1B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QVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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bEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQixFQUFFLFdBQVc7QUFDckU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNLGtEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU07QUFDTixNQUFNLGtEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EscUNBQXFDLDRCQUE0QjtBQUNqRTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3MiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3M/MmFlOSIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmpzIiwid2VicGFjazovL3RoZW1lYWxkYi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGVtZWFsZGIvLi9zcmMvbW9kdWxlcy9tZWFsUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdGhlbWVhbGRiLy4vc3JjL21vZHVsZXMvbWVhbGxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiFcbiAqIFRvYXN0aWZ5IGpzIDEuMTIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2FwdmFydW4vdG9hc3RpZnktanNcbiAqIEBsaWNlbnNlIE1JVCBsaWNlbnNlZFxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxOCBWYXJ1biBBIFBcbiAqL1xuXG4udG9hc3RpZnkge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMHB4IDM2cHggLTRweCByZ2JhKDc3LCA5NiwgMjMyLCAwLjMpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7XG59XG5cbi50b2FzdGlmeS5vbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnRvYXN0LWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgcGFkZGluZzogMCA1cHg7XG59XG5cbi50b2FzdGlmeS1yaWdodCB7XG4gICAgcmlnaHQ6IDE1cHg7XG59XG5cbi50b2FzdGlmeS1sZWZ0IHtcbiAgICBsZWZ0OiAxNXB4O1xufVxuXG4udG9hc3RpZnktdG9wIHtcbiAgICB0b3A6IC0xNTBweDtcbn1cblxuLnRvYXN0aWZ5LWJvdHRvbSB7XG4gICAgYm90dG9tOiAtMTUwcHg7XG59XG5cbi50b2FzdGlmeS1yb3VuZGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4udG9hc3RpZnktYXZhdGFyIHtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBtYXJnaW46IC03cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRvYXN0aWZ5LWNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAudG9hc3RpZnktcmlnaHQsIC50b2FzdGlmeS1sZWZ0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0VBTUU7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix1RkFBdUY7SUFDdkYsNkRBQTZEO0lBQzdELHFEQUFxRDtJQUNyRCxlQUFlO0lBQ2YsVUFBVTtJQUNWLHdEQUF3RDtJQUN4RCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFFBQVE7UUFDUixzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiFcXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXB2YXJ1bi90b2FzdGlmeS1qc1xcbiAqIEBsaWNlbnNlIE1JVCBsaWNlbnNlZFxcbiAqXFxuICogQ29weXJpZ2h0IChDKSAyMDE4IFZhcnVuIEEgUFxcbiAqL1xcblxcbi50b2FzdGlmeSB7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMHB4IDM2cHggLTRweCByZ2JhKDc3LCA5NiwgMjMyLCAwLjMpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzNhNWZmLCAjNTQ3N2Y1KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xcbn1cXG5cXG4udG9hc3RpZnkub24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9hc3QtY2xvc2Uge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4udG9hc3RpZnktcmlnaHQge1xcbiAgICByaWdodDogMTVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LWxlZnQge1xcbiAgICBsZWZ0OiAxNXB4O1xcbn1cXG5cXG4udG9hc3RpZnktdG9wIHtcXG4gICAgdG9wOiAtMTUwcHg7XFxufVxcblxcbi50b2FzdGlmeS1ib3R0b20ge1xcbiAgICBib3R0b206IC0xNTBweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXJvdW5kZWQge1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4udG9hc3RpZnktYXZhdGFyIHtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICBtYXJnaW46IC03cHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50b2FzdGlmeS1jZW50ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XFxuICAgIC50b2FzdGlmeS1yaWdodCwgLnRvYXN0aWZ5LWxlZnQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG4ubmF2YmFyLWxvZ28ge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyYzM4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzM1NDU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjA1ZjQwO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDVlbTtcclxuICBtaW4taGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG5zZWN0aW9uLFxyXG5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiBzb2xpZCAycHggIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLnNob3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWM3ZDBkNTtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBvdmVyZmxvdy15OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNWVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAwLjVlbTtcclxufVxyXG5cclxuLmNvbC1tZC0xMixcclxuLmNvbC1tZC02LFxyXG4uY29sLW1kLTQsXHJcbi5tZWFsLWRldGFpbCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jaXRlbUltYWdlIHtcclxuICBtYXgtd2lkdGg6IDI1ZW07XHJcbiAgbWF4LWhlaWdodDogMTBlbTtcclxufVxyXG5cclxuI2NhdGVnb3J5LFxyXG4jYXJlYSxcclxuI3RhZ3Mge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzIHtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuI21vZGFsLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZmE7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIGgyIHtcclxuICBjb2xvcjogIzNkM2QzZDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4jbW9kYWwtc2VjdGlvbiBoMiB7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybSxcclxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAwLjVlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMzglO1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uY29tbWVudC1mb3JtIGlucHV0LFxyXG4uY29tbWVudC1mb3JtIHRleHRhcmVhLFxyXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29tbWVudC1mb3JtIGlucHV0LFxyXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzZW07XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMTBlbTtcclxufVxyXG5cclxuLmJnIHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogI2QyZDJkMiBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiBwIHtcclxuICBwYWRkaW5nOiAwIDAgMWVtIDFlbTtcclxufVxyXG5cclxuLnBzLTIge1xyXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbn1cclxuXHJcbi5tYi0yIHtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5tdGItMiB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmhyIHtcclxuICBtYXgtd2lkdGg6IDEwZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyOiAjMGU2MTk5IHNvbGlkIDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2E2ZjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5NWQwO1xyXG5cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ5ZWUzOyAqL1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYTNlNztcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHBhZGRpbmc6IDJlbSAwO1xyXG59XHJcblxyXG4ubWVhbC1saXN0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lYWwtZGV0YWlsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiAjMDAwIDJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLm1lYWwtZGV0YWlsIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubWVhbC1kZXRhaWwgZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVlbSAwO1xyXG59XHJcblxyXG4ubWVhbC1kZXRhaWwgaSB7XHJcbiAgY29sb3I6ICMxY2RhNWI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVhbC1kZXRhaWwgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbn1cclxuXHJcbi5tZWFsLWRldGFpbCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzllZGE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVhbC1kZXRhaWw6aG92ZXIge1xyXG4gIGJvcmRlcjogIzBlNjE5OSA0cHggc29saWQ7XHJcbiAgYm94LXNoYWRvdzogNHB4IC02cHggcmdiKDcsIDM2LCAxMzEpO1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0IGxpOmhvdmVyLFxyXG4uY29tbWVudC1mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFB1dCBhbGwgbW9iaWxlIGNvZGUgYWJvdmUgdGhpcy4gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5tZWFsLWRldGFpbCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWQtNCB7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tZC02IHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJlbSA1ZW07XHJcbiAgfVxyXG5cclxuICAuY29tbWVudC1saXN0LXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1jbG9zZSB7XHJcbiAgICByaWdodDogNGVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseURBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztF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QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDMwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxvZ28ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE4cmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cyB7XFxyXFxuICBjb2xvcjogI2YwNWY0MDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogNWVtO1xcclxcbiAgbWluLWhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbixcXHJcXG5mb290ZXIge1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICMwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2QwZDU7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgb3ZlcmZsb3cteTogaW5pdGlhbCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sLW1kLTEyLFxcclxcbi5jb2wtbWQtNixcXHJcXG4uY29sLW1kLTQsXFxyXFxuLm1lYWwtZGV0YWlsIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW1JbWFnZSB7XFxyXFxuICBtYXgtd2lkdGg6IDI1ZW07XFxyXFxuICBtYXgtaGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcnksXFxyXFxuI2FyZWEsXFxyXFxuI3RhZ3Mge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cyB7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0LXNlY3Rpb24gaDIge1xcclxcbiAgY29sb3I6ICMzZDNkM2Q7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtc2VjdGlvbiBoMiB7XFxyXFxuICBjb2xvcjogIzNkM2QzZDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0sXFxyXFxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi13aWR0aDogMzglO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gaW5wdXQsXFxyXFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSxcXHJcXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIGlucHV0LFxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnIHtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNkMmQyZDIgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0LXNlY3Rpb24gcCB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBzLTIge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1iLTIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubXRiLTIge1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaHIge1xcclxcbiAgbWF4LXdpZHRoOiAxMGVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXI6ICMwZTYxOTkgc29saWQgMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2E2ZjU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyOTVkMDtcXHJcXG5cXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ZDllZTM7ICovXFxyXFxufVxcclxcblxcclxcbi5iZy1wcmltYXJ5LWxpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmEzZTc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiB7XFxyXFxuICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbGlzdCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAjMDAwIDJweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWwgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsIGkge1xcclxcbiAgY29sb3I6ICMxY2RhNWI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWwgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzllZGE7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogIzBlNjE5OSA0cHggc29saWQ7XFxyXFxuICBib3gtc2hhZG93OiA0cHggLTZweCByZ2IoNywgMzYsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3QgbGk6aG92ZXIsXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQdXQgYWxsIG1vYmlsZSBjb2RlIGFib3ZlIHRoaXMuICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWwtZGV0YWlsIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sLW1kLTQge1xcclxcbiAgICB3aWR0aDogMTglO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbC1tZC02IHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyZW0gNWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jbG9zZSB7XFxyXFxuICAgIHJpZ2h0OiA0ZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvYXN0aWZ5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2FzdGlmeS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIVxuICogVG9hc3RpZnkganMgMS4xMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXB2YXJ1bi90b2FzdGlmeS1qc1xuICogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VkXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFZhcnVuIEEgUFxuICovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuVG9hc3RpZnkgPSBmYWN0b3J5KCk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKGdsb2JhbCkge1xuICAvLyBPYmplY3QgaW5pdGlhbGl6YXRpb25cbiAgdmFyIFRvYXN0aWZ5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gUmV0dXJuaW5nIGEgbmV3IGluaXQgb2JqZWN0XG4gICAgICByZXR1cm4gbmV3IFRvYXN0aWZ5LmxpYi5pbml0KG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLy8gTGlicmFyeSB2ZXJzaW9uXG4gICAgdmVyc2lvbiA9IFwiMS4xMi4wXCI7XG5cbiAgLy8gU2V0IHRoZSBkZWZhdWx0IGdsb2JhbCBvcHRpb25zXG4gIFRvYXN0aWZ5LmRlZmF1bHRzID0ge1xuICAgIG9sZGVzdEZpcnN0OiB0cnVlLFxuICAgIHRleHQ6IFwiVG9hc3RpZnkgaXMgYXdlc29tZSFcIixcbiAgICBub2RlOiB1bmRlZmluZWQsXG4gICAgZHVyYXRpb246IDMwMDAsXG4gICAgc2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgZGVzdGluYXRpb246IHVuZGVmaW5lZCxcbiAgICBuZXdXaW5kb3c6IGZhbHNlLFxuICAgIGNsb3NlOiBmYWxzZSxcbiAgICBncmF2aXR5OiBcInRvYXN0aWZ5LXRvcFwiLFxuICAgIHBvc2l0aW9uTGVmdDogZmFsc2UsXG4gICAgcG9zaXRpb246ICcnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJycsXG4gICAgYXZhdGFyOiBcIlwiLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICBzdG9wT25Gb2N1czogdHJ1ZSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBvZmZzZXQ6IHt4OiAwLCB5OiAwfSxcbiAgICBlc2NhcGVNYXJrdXA6IHRydWUsXG4gICAgYXJpYUxpdmU6ICdwb2xpdGUnLFxuICAgIHN0eWxlOiB7YmFja2dyb3VuZDogJyd9XG4gIH07XG5cbiAgLy8gRGVmaW5pbmcgdGhlIHByb3RvdHlwZSBvZiB0aGUgb2JqZWN0XG4gIFRvYXN0aWZ5LmxpYiA9IFRvYXN0aWZ5LnByb3RvdHlwZSA9IHtcbiAgICB0b2FzdGlmeTogdmVyc2lvbixcblxuICAgIGNvbnN0cnVjdG9yOiBUb2FzdGlmeSxcblxuICAgIC8vIEluaXRpYWxpemluZyB0aGUgb2JqZWN0IHdpdGggcmVxdWlyZWQgcGFyYW1ldGVyc1xuICAgIGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFZlcmlmeWluZyBhbmQgdmFsaWRhdGluZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGluZyB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuXG4gICAgICB0aGlzLnRvYXN0RWxlbWVudCA9IG51bGw7XG5cbiAgICAgIC8vIFZhbGlkYXRpbmcgdGhlIG9wdGlvbnNcbiAgICAgIHRoaXMub3B0aW9ucy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnRleHQ7IC8vIERpc3BsYXkgbWVzc2FnZVxuICAgICAgdGhpcy5vcHRpb25zLm5vZGUgPSBvcHRpb25zLm5vZGUgfHwgVG9hc3RpZnkuZGVmYXVsdHMubm9kZTsgIC8vIERpc3BsYXkgY29udGVudCBhcyBub2RlXG4gICAgICB0aGlzLm9wdGlvbnMuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uID09PSAwID8gMCA6IG9wdGlvbnMuZHVyYXRpb24gfHwgVG9hc3RpZnkuZGVmYXVsdHMuZHVyYXRpb247IC8vIERpc3BsYXkgZHVyYXRpb25cbiAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgVG9hc3RpZnkuZGVmYXVsdHMuc2VsZWN0b3I7IC8vIFBhcmVudCBzZWxlY3RvclxuICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjayB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jYWxsYmFjazsgLy8gQ2FsbGJhY2sgYWZ0ZXIgZGlzcGxheVxuICAgICAgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uID0gb3B0aW9ucy5kZXN0aW5hdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5kZXN0aW5hdGlvbjsgLy8gT24tY2xpY2sgZGVzdGluYXRpb25cbiAgICAgIHRoaXMub3B0aW9ucy5uZXdXaW5kb3cgPSBvcHRpb25zLm5ld1dpbmRvdyB8fCBUb2FzdGlmeS5kZWZhdWx0cy5uZXdXaW5kb3c7IC8vIE9wZW4gZGVzdGluYXRpb24gaW4gbmV3IHdpbmRvd1xuICAgICAgdGhpcy5vcHRpb25zLmNsb3NlID0gb3B0aW9ucy5jbG9zZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jbG9zZTsgLy8gU2hvdyB0b2FzdCBjbG9zZSBpY29uXG4gICAgICB0aGlzLm9wdGlvbnMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eSA9PT0gXCJib3R0b21cIiA/IFwidG9hc3RpZnktYm90dG9tXCIgOiBUb2FzdGlmeS5kZWZhdWx0cy5ncmF2aXR5OyAvLyB0b2FzdCBwb3NpdGlvbiAtIHRvcCBvciBib3R0b21cbiAgICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbkxlZnQgPSBvcHRpb25zLnBvc2l0aW9uTGVmdCB8fCBUb2FzdGlmeS5kZWZhdWx0cy5wb3NpdGlvbkxlZnQ7IC8vIHRvYXN0IHBvc2l0aW9uIC0gbGVmdCBvciByaWdodFxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uID0gb3B0aW9ucy5wb3NpdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5wb3NpdGlvbjsgLy8gdG9hc3QgcG9zaXRpb24gLSBsZWZ0IG9yIHJpZ2h0XG4gICAgICB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgVG9hc3RpZnkuZGVmYXVsdHMuYmFja2dyb3VuZENvbG9yOyAvLyB0b2FzdCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICB0aGlzLm9wdGlvbnMuYXZhdGFyID0gb3B0aW9ucy5hdmF0YXIgfHwgVG9hc3RpZnkuZGVmYXVsdHMuYXZhdGFyOyAvLyBpbWcgZWxlbWVudCBzcmMgLSB1cmwgb3IgYSBwYXRoXG4gICAgICB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgfHwgVG9hc3RpZnkuZGVmYXVsdHMuY2xhc3NOYW1lOyAvLyBhZGRpdGlvbmFsIGNsYXNzIG5hbWVzIGZvciB0aGUgdG9hc3RcbiAgICAgIHRoaXMub3B0aW9ucy5zdG9wT25Gb2N1cyA9IG9wdGlvbnMuc3RvcE9uRm9jdXMgPT09IHVuZGVmaW5lZCA/IFRvYXN0aWZ5LmRlZmF1bHRzLnN0b3BPbkZvY3VzIDogb3B0aW9ucy5zdG9wT25Gb2N1czsgLy8gc3RvcCB0aW1lb3V0IG9uIGZvY3VzXG4gICAgICB0aGlzLm9wdGlvbnMub25DbGljayA9IG9wdGlvbnMub25DbGljayB8fCBUb2FzdGlmeS5kZWZhdWx0cy5vbkNsaWNrOyAvLyBDYWxsYmFjayBhZnRlciBjbGlja1xuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCA9IG9wdGlvbnMub2Zmc2V0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm9mZnNldDsgLy8gdG9hc3Qgb2Zmc2V0XG4gICAgICB0aGlzLm9wdGlvbnMuZXNjYXBlTWFya3VwID0gb3B0aW9ucy5lc2NhcGVNYXJrdXAgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZXNjYXBlTWFya3VwIDogVG9hc3RpZnkuZGVmYXVsdHMuZXNjYXBlTWFya3VwO1xuICAgICAgdGhpcy5vcHRpb25zLmFyaWFMaXZlID0gb3B0aW9ucy5hcmlhTGl2ZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5hcmlhTGl2ZTtcbiAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IG9wdGlvbnMuc3R5bGUgfHwgVG9hc3RpZnkuZGVmYXVsdHMuc3R5bGU7XG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5pbmcgdGhlIGN1cnJlbnQgb2JqZWN0IGZvciBjaGFpbmluZyBmdW5jdGlvbnNcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBCdWlsZGluZyB0aGUgRE9NIGVsZW1lbnRcbiAgICBidWlsZFRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFZhbGlkYXRpbmcgaWYgdGhlIG9wdGlvbnMgYXJlIGRlZmluZWRcbiAgICAgIGlmICghdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRocm93IFwiVG9hc3RpZnkgaXMgbm90IGluaXRpYWxpemVkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBET00gb2JqZWN0XG4gICAgICB2YXIgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9IFwidG9hc3RpZnkgb24gXCIgKyB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lO1xuXG4gICAgICAvLyBQb3NpdGlvbmluZyB0b2FzdCB0byBsZWZ0IG9yIHJpZ2h0IG9yIGNlbnRlclxuICAgICAgaWYgKCEhdGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIHRvYXN0aWZ5LVwiICsgdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG8gYmUgZGVwcmVjaWF0ZWQgaW4gZnVydGhlciB2ZXJzaW9uc1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIHRvYXN0aWZ5LWxlZnRcIjtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3BlcnR5IGBwb3NpdGlvbkxlZnRgIHdpbGwgYmUgZGVwcmVjaWF0ZWQgaW4gZnVydGhlciB2ZXJzaW9ucy4gUGxlYXNlIHVzZSBgcG9zaXRpb25gIGluc3RlYWQuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHBvc2l0aW9uXG4gICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktcmlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBc3NpZ25pbmcgZ3Jhdml0eSBvZiBlbGVtZW50XG4gICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMub3B0aW9ucy5ncmF2aXR5O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAvLyBUaGlzIGlzIGJlaW5nIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgdXNpbmcgdGhlIHN0eWxlIEhUTUwgRE9NIHByb3BlcnR5XG4gICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRJT04gTk9USUNFOiBcImJhY2tncm91bmRDb2xvclwiIGlzIGJlaW5nIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdGhlIFwic3R5bGUuYmFja2dyb3VuZFwiIHByb3BlcnR5LicpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggb3VyIHN0eWxlIG9iamVjdCBhbmQgYXBwbHkgc3R5bGVzIHRvIGRpdkVsZW1lbnRcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMub3B0aW9ucy5zdHlsZSkge1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHRoaXMub3B0aW9ucy5zdHlsZVtwcm9wZXJ0eV07XG4gICAgICB9XG5cbiAgICAgIC8vIEFubm91bmNlIHRoZSB0b2FzdCB0byBzY3JlZW4gcmVhZGVyc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hcmlhTGl2ZSkge1xuICAgICAgICBkaXZFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgdGhpcy5vcHRpb25zLmFyaWFMaXZlKVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgdGhlIHRvYXN0IG1lc3NhZ2Uvbm9kZVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub2RlICYmIHRoaXMub3B0aW9ucy5ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgbm9kZSwgd2UgaW5zZXJ0IGl0XG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5vcHRpb25zLm5vZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVzY2FwZU1hcmt1cCkge1xuICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5vcHRpb25zLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXZhdGFyICE9PSBcIlwiKSB7XG4gICAgICAgICAgdmFyIGF2YXRhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGF2YXRhckVsZW1lbnQuc3JjID0gdGhpcy5vcHRpb25zLmF2YXRhcjtcblxuICAgICAgICAgIGF2YXRhckVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdGlmeS1hdmF0YXJcIjtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgfHwgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIGxlZnQgb2YgY29udGVudFxuICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChhdmF0YXJFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBhdmF0YXJFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIGEgY2xvc2UgaWNvbiB0byB0aGUgdG9hc3RcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2UgPT09IHRydWUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgY2xvc2UgZWxlbWVudFxuICAgICAgICB2YXIgY2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VFbGVtZW50LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBjbG9zZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xuICAgICAgICBjbG9zZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdC1jbG9zZVwiO1xuICAgICAgICBjbG9zZUVsZW1lbnQuaW5uZXJIVE1MID0gXCImIzEwMDA2O1wiO1xuXG4gICAgICAgIC8vIFRyaWdnZXJpbmcgdGhlIHJlbW92YWwgb2YgdG9hc3QgZnJvbSBET00gb24gY2xvc2UgY2xpY2tcbiAgICAgICAgY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9DYWxjdWxhdGluZyBzY3JlZW4gd2lkdGhcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPiAwID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XG5cbiAgICAgICAgLy8gQWRkaW5nIHRoZSBjbG9zZSBpY29uIHRvIHRoZSB0b2FzdCBlbGVtZW50XG4gICAgICAgIC8vIERpc3BsYXkgb24gdGhlIHJpZ2h0IGlmIHNjcmVlbiB3aWR0aCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHhcbiAgICAgICAgaWYgKCh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgfHwgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkgJiYgd2lkdGggPiAzNjApIHtcbiAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgbGVmdCBvZiBjb250ZW50XG4gICAgICAgICAgZGl2RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNsb3NlRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGNsb3NlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgdGltZW91dCB3aGlsZSB0b2FzdCBpcyBmb2N1c2VkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0b3BPbkZvY3VzICYmIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyBzdG9wIGNvdW50ZG93blxuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJtb3VzZW92ZXJcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChkaXZFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC8vIGFkZCBiYWNrIHRoZSB0aW1lb3V0XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlbGVhdmVcIixcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpdkVsZW1lbnQudGltZU91dFZhbHVlID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUVsZW1lbnQoZGl2RWxlbWVudCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgYW4gb24tY2xpY2sgZGVzdGluYXRpb24gcGF0aFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5ld1dpbmRvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24sIFwiX2JsYW5rXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrKCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBvZmZzZXRcbiAgICAgIGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMub2Zmc2V0ID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgdmFyIHggPSBnZXRBeGlzT2Zmc2V0QVZhbHVlKFwieFwiLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB2YXIgeSA9IGdldEF4aXNPZmZzZXRBVmFsdWUoXCJ5XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHhPZmZzZXQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgPyB4IDogXCItXCIgKyB4O1xuICAgICAgICB2YXIgeU9mZnNldCA9IHRoaXMub3B0aW9ucy5ncmF2aXR5ID09IFwidG9hc3RpZnktdG9wXCIgPyB5IDogXCItXCIgKyB5O1xuXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4T2Zmc2V0ICsgXCIsXCIgKyB5T2Zmc2V0ICsgXCIpXCI7XG5cbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuaW5nIHRoZSBnZW5lcmF0ZWQgZWxlbWVudFxuICAgICAgcmV0dXJuIGRpdkVsZW1lbnQ7XG4gICAgfSxcblxuICAgIC8vIERpc3BsYXlpbmcgdGhlIHRvYXN0XG4gICAgc2hvd1RvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIENyZWF0aW5nIHRoZSBET00gb2JqZWN0IGZvciB0aGUgdG9hc3RcbiAgICAgIHRoaXMudG9hc3RFbGVtZW50ID0gdGhpcy5idWlsZFRvYXN0KCk7XG5cbiAgICAgIC8vIEdldHRpbmcgdGhlIHJvb3QgZWxlbWVudCB0byB3aXRoIHRoZSB0b2FzdCBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgdmFyIHJvb3RFbGVtZW50O1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCAodHlwZW9mIFNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnICYmIHRoaXMub3B0aW9ucy5zZWxlY3RvciBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpKSB7XG4gICAgICAgIHJvb3RFbGVtZW50ID0gdGhpcy5vcHRpb25zLnNlbGVjdG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgfVxuXG4gICAgICAvLyBWYWxpZGF0aW5nIGlmIHJvb3QgZWxlbWVudCBpcyBwcmVzZW50IGluIERPTVxuICAgICAgaWYgKCFyb290RWxlbWVudCkge1xuICAgICAgICB0aHJvdyBcIlJvb3QgZWxlbWVudCBpcyBub3QgZGVmaW5lZFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgdGhlIERPTSBlbGVtZW50XG4gICAgICB2YXIgZWxlbWVudFRvSW5zZXJ0ID0gVG9hc3RpZnkuZGVmYXVsdHMub2xkZXN0Rmlyc3QgPyByb290RWxlbWVudC5maXJzdENoaWxkIDogcm9vdEVsZW1lbnQubGFzdENoaWxkO1xuICAgICAgcm9vdEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMudG9hc3RFbGVtZW50LCBlbGVtZW50VG9JbnNlcnQpO1xuXG4gICAgICAvLyBSZXBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgaW4gY2FzZSBtdWx0aXBsZSB0b2FzdHMgYXJlIHByZXNlbnRcbiAgICAgIFRvYXN0aWZ5LnJlcG9zaXRpb24oKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRvYXN0IGZyb20gRE9NXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgKTsgLy8gQmluZGluZyBgdGhpc2AgZm9yIGZ1bmN0aW9uIGludm9jYXRpb25cbiAgICAgIH1cblxuICAgICAgLy8gU3VwcG9ydGluZyBmdW5jdGlvbiBjaGFpbmluZ1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGhpZGVUb2FzdDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZpbmcgdGhlIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgcmVtb3ZlRWxlbWVudDogZnVuY3Rpb24odG9hc3RFbGVtZW50KSB7XG4gICAgICAvLyBIaWRpbmcgdGhlIGVsZW1lbnRcbiAgICAgIC8vIHRvYXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwib25cIik7XG4gICAgICB0b2FzdEVsZW1lbnQuY2xhc3NOYW1lID0gdG9hc3RFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFwiIG9uXCIsIFwiXCIpO1xuXG4gICAgICAvLyBSZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIERPTSBhZnRlciB0cmFuc2l0aW9uIGVuZFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25zIG5vZGUgaWYgYW55XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub2RlICYmIHRoaXMub3B0aW9ucy5ub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5vcHRpb25zLm5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIHRoZSBET00sIG9ubHkgd2hlbiB0aGUgcGFyZW50IG5vZGUgd2FzIG5vdCByZW1vdmVkIGJlZm9yZS5cbiAgICAgICAgICBpZiAodG9hc3RFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRvYXN0RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbGluZyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2suY2FsbCh0b2FzdEVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gUmVwb3NpdGlvbmluZyB0aGUgdG9hc3RzIGFnYWluXG4gICAgICAgICAgVG9hc3RpZnkucmVwb3NpdGlvbigpO1xuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgIDQwMFxuICAgICAgKTsgLy8gQmluZGluZyBgdGhpc2AgZm9yIGZ1bmN0aW9uIGludm9jYXRpb25cbiAgICB9LFxuICB9O1xuXG4gIC8vIFBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgb24gdGhlIERPTVxuICBUb2FzdGlmeS5yZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBUb3AgbWFyZ2lucyB3aXRoIGdyYXZpdHlcbiAgICB2YXIgdG9wTGVmdE9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuICAgIHZhciB0b3BSaWdodE9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuICAgIHZhciBvZmZzZXRTaXplID0ge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIGJvdHRvbTogMTUsXG4gICAgfTtcblxuICAgIC8vIEdldCBhbGwgdG9hc3QgbWVzc2FnZXMgb24gdGhlIERPTVxuICAgIHZhciBhbGxUb2FzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9hc3RpZnlcIik7XG5cbiAgICB2YXIgY2xhc3NVc2VkO1xuXG4gICAgLy8gTW9kaWZ5aW5nIHRoZSBwb3NpdGlvbiBvZiBlYWNoIHRvYXN0IGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbFRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0dGluZyB0aGUgYXBwbGllZCBncmF2aXR5XG4gICAgICBpZiAoY29udGFpbnNDbGFzcyhhbGxUb2FzdHNbaV0sIFwidG9hc3RpZnktdG9wXCIpID09PSB0cnVlKSB7XG4gICAgICAgIGNsYXNzVXNlZCA9IFwidG9hc3RpZnktdG9wXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc1VzZWQgPSBcInRvYXN0aWZ5LWJvdHRvbVwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVpZ2h0ID0gYWxsVG9hc3RzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIGNsYXNzVXNlZCA9IGNsYXNzVXNlZC5zdWJzdHIoOSwgY2xhc3NVc2VkLmxlbmd0aC0xKVxuICAgICAgLy8gU3BhY2luZyBiZXR3ZWVuIHRvYXN0c1xuICAgICAgdmFyIG9mZnNldCA9IDE1O1xuXG4gICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aDtcblxuICAgICAgLy8gU2hvdyB0b2FzdCBpbiBjZW50ZXIgaWYgc2NyZWVuIHdpdGggbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDM2MHB4XG4gICAgICBpZiAod2lkdGggPD0gMzYwKSB7XG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBvc2l0aW9uXG4gICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgIG9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29udGFpbnNDbGFzcyhhbGxUb2FzdHNbaV0sIFwidG9hc3RpZnktbGVmdFwiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHBvc2l0aW9uXG4gICAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgICAgdG9wTGVmdE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IHRvcFJpZ2h0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgICAgdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydGluZyBmdW5jdGlvbiBjaGFpbmluZ1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgb2Zmc2V0LlxuICBmdW5jdGlvbiBnZXRBeGlzT2Zmc2V0QVZhbHVlKGF4aXMsIG9wdGlvbnMpIHtcblxuICAgIGlmKG9wdGlvbnMub2Zmc2V0W2F4aXNdKSB7XG4gICAgICBpZihpc05hTihvcHRpb25zLm9mZnNldFtheGlzXSkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub2Zmc2V0W2F4aXNdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm9mZnNldFtheGlzXSArICdweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcwcHgnO1xuXG4gIH1cblxuICBmdW5jdGlvbiBjb250YWluc0NsYXNzKGVsZW0sIHlvdXJDbGFzcykge1xuICAgIGlmICghZWxlbSB8fCB0eXBlb2YgeW91ckNsYXNzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGVsZW0uY2xhc3NOYW1lICYmXG4gICAgICBlbGVtLmNsYXNzTmFtZVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgvXFxzKy9naSlcbiAgICAgICAgLmluZGV4T2YoeW91ckNsYXNzKSA+IC0xXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldHRpbmcgdXAgdGhlIHByb3RvdHlwZSBmb3IgdGhlIGluaXQgb2JqZWN0XG4gIFRvYXN0aWZ5LmxpYi5pbml0LnByb3RvdHlwZSA9IFRvYXN0aWZ5LmxpYjtcblxuICAvLyBSZXR1cm5pbmcgdGhlIFRvYXN0aWZ5IGZ1bmN0aW9uIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSB3aW5kb3cgb2JqZWN0L21vZHVsZVxuICByZXR1cm4gVG9hc3RpZnk7XG59KTtcbiIsImltcG9ydCBNZWFsTGlzdCBmcm9tICcuL21vZHVsZXMvbWVhbGxpc3QuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xLyc7XG5jb25zdCBiYXNlVXJsSW52b2x2ZSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgbWVhbEFwcElkTmFtZSA9ICdtZWFsbGlzdCc7XG5sZXQgYXBwSWQgPSAnJztcblxuY29uc3Qgc2F2ZURhdGEgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG1lYWxBcHBJZE5hbWUsIGFwcElkKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9IChhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybEludm9sdmV9YCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdGV4dCcsXG4gICAgfSxcbiAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pO1xuICBhcHBJZCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgc2F2ZURhdGEoKTtcbn0pO1xuXG5jb25zdCByZXRyaWV2ZUlkID0gYXN5bmMgKCkgPT4ge1xuICBhcHBJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG1lYWxBcHBJZE5hbWUpO1xuICBpZiAoYXBwSWQgPT09IG51bGwpIGF3YWl0IGNyZWF0ZUFwcCgpO1xufTtcblxuZG9jdW1lbnQuYm9keS5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHJldHJpZXZlSWQoKTtcbiAgY29uc3QgbWVhbHNOZXcgPSBuZXcgTWVhbExpc3QoYXBwSWQsIGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCA1Mjc3Mik7XG4gIG1lYWxzTmV3LmdldE1lYWxzKG51bGwpO1xuICAvLyBjb25zdCBtZWFsTmV3ID0gbmV3IE1lYWxMaXN0KGFwcElkLCBiYXNlVXJsLCBiYXNlVXJsSW52b2x2ZSwgNTI3NzIpO1xuICAvLyBjb25zdCBtZWFsTmV3ID0gbmV3IE1lYWxMaXN0KDUzMDc1KTtcbiAgLy8gbWVhbE5ldy5nZXRNZWFsKG51bGwpO1xuICAvLyBpZiAobWVhbE5ldy5nYW1lSWQgPT09IG51bGwpIG1lYWxOZXcuY3JlYXRlQXBwKCk7XG59O1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbG9zZScpO1xubW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xufSk7XG5cbmRvY3VtZW50Lm9ua2V5ZG93biA9IChldnQpID0+IHtcbiAgZXZ0ID0gZXZ0IHx8IHdpbmRvdy5ldmVudDtcbiAgbGV0IGlzRXNjYXBlID0gZmFsc2U7XG4gIGlmICgna2V5JyBpbiBldnQpIHtcbiAgICAgIGlzRXNjYXBlID0gKGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXkgPT09ICdFc2MnKTtcbiAgfSBlbHNlIHtcbiAgICAgIGlzRXNjYXBlID0gKGV2dC5rZXlDb2RlID09PSAyNyk7XG4gIH1cbiAgaWYgKGlzRXNjYXBlICYmIG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH1cbn07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgVG9hc3RpZnkgZnJvbSAndG9hc3RpZnktanMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICd0b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzJztcblxuY2xhc3MgTWVhbFBvcHVwIHtcbiAgY29uc3RydWN0b3IoYXBwSWQsIGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCBtZWFsSWQpIHtcbiAgICB0aGlzLm1lYWxJZCA9IG1lYWxJZDtcblxuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0aGlzLmNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgIHRoaXMuY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XG4gICAgdGhpcy5jb21tZW50VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC10b3RhbCcpO1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgICB0aGlzLmFwcElkID0gYXBwSWQ7XG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xuICAgIHRoaXMubGJsTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICB0aGlzLmJhc2VVcmxJbnZvbHZlID0gYmFzZVVybEludm9sdmU7XG4gICAgdGhpcy5jb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LW5hbWUnKTtcbiAgICAgIGNvbnN0IGluc2lnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1pbnNpZ2h0Jyk7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1idXR0b24nKTtcbiAgICAgIHRoaXMuYWRkQ29tbWVudChidXR0b24sIHVzZXJuYW1lLnZhbHVlLCBpbnNpZ2h0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE1lYWxsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLm1lYWxsaXN0O1xuICB9XG5cbiAgc2hvd01lYWwobWVhbCkge1xuICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtVGl0bGUnKTtcbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbUltYWdlJyk7XG4gICAgY29uc3QgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWdzJyk7XG4gICAgY29uc3QgeW91dHViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5b3V0dWJlJyk7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnknKTtcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FyZWEnKTtcbiAgICBjb25zdCBpbnN0cnVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0cnVjdGlvbicpO1xuICAgIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZ3JlZGllbnRzJyk7XG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gbWVhbC5zdHJNZWFsO1xuICAgIHRhZ3MudGV4dENvbnRlbnQgPSBtZWFsLnN0clRhZ3M7XG4gICAgeW91dHViZS5ocmVmID0gbWVhbC5zdHJZb3V0dWJlO1xuICAgIGl0ZW1JbWFnZS5zcmMgPSBtZWFsLnN0ck1lYWxUaHVtYjtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IG1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gbWVhbC5zdHJDYXRlZ29yeTtcbiAgICBhcmVhLnRleHRDb250ZW50ID0gbWVhbC5zdHJBcmVhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpbmcgPSBtZWFsW2BzdHJJbmdyZWRpZW50JHtpICsgMX1gXTtcbiAgICAgIGlmIChpbmcgIT09ICcnICYmIGluZyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdpbmdyZWRpZW50JztcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBpbmc7XG4gICAgICAgIGluZ3JlZGllbnRzLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93Q29tbWVudChjb21tZW50KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZWxDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgbGkuY2xhc3NOYW1lID0gJ2JnJztcblxuICAgIGVsTmFtZS50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQudXNlcm5hbWV9OiBgO1xuICAgIGVsQ29tbWVudC50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgIGVsVGltZS50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gYDtcblxuICAgIGxpLmFwcGVuZENoaWxkKGVsVGltZSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZWxOYW1lKTtcbiAgICBsaS5hcHBlbmRDaGlsZChlbENvbW1lbnQpO1xuICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cblxuICBnZXRNZWFsID0gKGFzeW5jIChidG5SZWZyZXNoID0gbnVsbCkgPT4ge1xuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2VVcmx9bG9va3VwLnBocD9pPSR7dGhpcy5tZWFsSWR9YCwge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSk7XG4gICAgY29uc3QgbWVhbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAobWVhbC5tZXNzYWdlKSB7XG4gICAgICB0aGlzLmxibE1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZWFsLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd01lYWwobWVhbC5tZWFsc1swXSk7XG4gICAgICB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgfVxuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gIH0pO1xuXG4gIGFkZENvbW1lbnQgPSAoYXN5bmMgKGJ0blJlZnJlc2ggPSBudWxsLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICBjb25zdCBjb21tZW50T2JqZWN0ID0ge1xuICAgICAgICBpdGVtX2lkOiB0aGlzLm1lYWxJZCxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsSW52b2x2ZX0ke3RoaXMuYXBwSWR9L2NvbW1lbnRzYCwge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRPYmplY3QpLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICBUb2FzdGlmeSh7XG4gICAgICAgIHRleHQ6IHJlc3VsdC5lcnJvci5tZXNzYWdlLFxuICAgICAgICBjbGFzc05hbWU6ICdpbmZvJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKScsXG4gICAgICAgIH0sXG4gICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9hc3RpZnkoe1xuICAgICAgICB0ZXh0OiByZXN1bHQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgdGhpcy5nZXRDb21tZW50cygpO1xuICAgIH1cbiAgICBpZiAoYnRuUmVmcmVzaCAhPT0gbnVsbCkgYnRuUmVmcmVzaC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZSA9ICcnO1xuICB9KTtcblxuICBnZXRDb21tZW50cyA9IChhc3luYyAoYnRuUmVmcmVzaCA9IG51bGwpID0+IHtcbiAgICB0aGlzLmxpc3QuaW5uZXJUZXh0ID0gJyc7XG4gICAgdGhpcy5jb21tZW50VG90YWwuaW5uZXJUZXh0ID0gMDtcbiAgICBpZiAoYnRuUmVmcmVzaCAhPT0gbnVsbCkgYnRuUmVmcmVzaC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZSA9ICgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsSW52b2x2ZSArIHRoaXMuYXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHt0aGlzLm1lYWxJZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSk7XG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKGNvbW1lbnRzLmVycm9yKSB7XG4gICAgICBUb2FzdGlmeSh7XG4gICAgICAgIHRleHQ6IGNvbW1lbnRzLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luZm8nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGIwOWIsICM5NmM5M2QpJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgIH0gZWxzZSBpZiAoY29tbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dDb21tZW50KGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb3VudENvbW1lbnRzKCk7XG4gICAgfVxuICAgIGlmIChidG5SZWZyZXNoICE9PSBudWxsKSBidG5SZWZyZXNoLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gJyc7XG4gIH0pO1xuXG4gIGNvdW50Q29tbWVudHMgPSAoKCkgPT4ge1xuICAgIHRoaXMuY29tbWVudFRvdGFsLmlubmVyVGV4dCA9IHRoaXMuY29tbWVudHMubGVuZ3RoO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVhbFBvcHVwOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBUb2FzdGlmeSBmcm9tICd0b2FzdGlmeS1qcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgJ3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3MnO1xuaW1wb3J0IE1lYWxQb3B1cCBmcm9tICcuL21lYWxQb3B1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWxMaXN0IHtcbiAgY29uc3RydWN0b3IoYXBwSWQsIGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCBtZWFsSWQpIHtcbiAgICB0aGlzLm1lYWxJZCA9IG1lYWxJZDtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbC1saXN0Jyk7XG4gICAgdGhpcy5pdGVtc1RvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zVG90YWwnKTtcbiAgICB0aGlzLmFwcElkID0gYXBwSWQ7XG4gICAgdGhpcy5saWtlcyA9IFtdO1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgdGhpcy5iYXNlVXJsSW52b2x2ZSA9IGJhc2VVcmxJbnZvbHZlO1xuICB9XG5cbiAgZ2V0TWVhbGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVhbGxpc3Q7XG4gIH1cblxuICBzaG93TWVhbChtZWFsLCBsaWtlQ291bnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbExpa2VQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGVsTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBlbExpa2VDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBlbENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGRpdi5jbGFzc05hbWUgPSAnbWVhbC1kZXRhaWwnO1xuICAgIGVsTGlrZVBhcmVudC5jbGFzc05hbWUgPSAncHMtMic7XG4gICAgZWxMaWtlLmNsYXNzTmFtZSA9ICdmYSBmYS1oZWFydCc7XG5cbiAgICBlbE5hbWUudGV4dENvbnRlbnQgPSBtZWFsLnN0ck1lYWw7XG4gICAgZWxDb21tZW50LnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcbiAgICBlbEljb24uc3JjID0gbWVhbC5zdHJNZWFsVGh1bWI7XG5cbiAgICBlbENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsICgpID0+IG5ldyBNZWFsUG9wdXAodGhpcy5hcHBJZCwgdGhpcy5iYXNlVXJsLCB0aGlzLmJhc2VVcmxJbnZvbHZlLCBtZWFsLmlkTWVhbCkuZ2V0TWVhbChudWxsKSxcbiAgICApO1xuXG4gICAgZWxMaWtlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLCAoKSA9PiB0aGlzLmFkZExpa2UobnVsbCwgbWVhbC5pZE1lYWwsIGVsTGlrZUNvdW50KSxcbiAgICApO1xuICAgIGVsTGlrZUNvdW50LnRleHRDb250ZW50ID0gYCAoJHtsaWtlQ291bnR9KWA7XG4gICAgZWxMaWtlQ291bnQuY291bnRlciA9IGxpa2VDb3VudDtcbiAgICBlbExpa2VQYXJlbnQuYXBwZW5kQ2hpbGQoZWxMaWtlKTtcbiAgICBlbExpa2VQYXJlbnQuYXBwZW5kQ2hpbGQoZWxMaWtlQ291bnQpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGVsSWNvbik7XG4gICAgZGl2RGV0YWlscy5hcHBlbmRDaGlsZChlbE5hbWUpO1xuICAgIGRpdkRldGFpbHMuYXBwZW5kQ2hpbGQoZWxMaWtlUGFyZW50KTtcbiAgICBkaXZCdXR0b24uYXBwZW5kQ2hpbGQoZWxDb21tZW50KTtcbiAgICBkaXZEZXRhaWxzLmFwcGVuZENoaWxkKGRpdkJ1dHRvbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkRldGFpbHMpO1xuICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbiAgZ2V0TWVhbHMgPSAoYXN5bmMgKGJ0blJlZnJlc2ggPSBudWxsKSA9PiB7XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVVybH1zZWFyY2gucGhwP3M9YCwge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSk7XG4gICAgY29uc3QgbWVhbHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKG1lYWxzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMubGJsTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lYWxzLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybEludm9sdmUgKyB0aGlzLmFwcElkfS9saWtlc2A7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGVyID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgaWYgKGVyICE9PSAnJykge1xuICAgICAgICBjb25zdCBsaWtlcyA9IEpTT04ucGFyc2UoZXIpO1xuICAgICAgICBpZiAobGlrZXMuZXJyb3IpIHtcbiAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICB0ZXh0OiBsaWtlcy5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaW5mbycsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpa2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGlrZXMgPSBsaWtlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWVhbHMubWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgICBsZXQgbGlrZSA9IHRoaXMubGlrZXMuZmluZCgoeCkgPT4geC5pdGVtX2lkID09PSBtZWFsLmlkTWVhbCk7XG4gICAgICAgIGlmIChsaWtlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWtlID0ge1xuICAgICAgICAgICAgICBsaWtlczogMCxcbiAgICAgICAgICAgICAgaXRlbV9pZDogbWVhbC5pZE1lYWwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dNZWFsKG1lYWwsIGxpa2UubGlrZXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvdW50SXRlbXMoKTtcbiAgICB9XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdmYSBmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgfSk7XG5cbiAgYWRkTGlrZSA9IChhc3luYyAoYnRuUmVmcmVzaCA9IG51bGwsIGlkTWVhbCwgZWxMaWtlQ291bnQpID0+IHtcbiAgICBpZiAoYnRuUmVmcmVzaCAhPT0gbnVsbCkgYnRuUmVmcmVzaC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZSA9ICgnZmEgZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gICAgY29uc3QgbGlrZU9iamVjdCA9IHtcbiAgICAgICAgaXRlbV9pZDogaWRNZWFsLFxuICAgICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVVybEludm9sdmV9JHt0aGlzLmFwcElkfS9saWtlc2AsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsaWtlT2JqZWN0KSxcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgVG9hc3RpZnkoe1xuICAgICAgICB0ZXh0OiByZXN1bHQuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnaW5mbycsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZCknLFxuICAgICAgICB9LFxuICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgdGV4dDogcmVzdWx0LFxuICAgICAgICBjbGFzc05hbWU6ICdpbmZvJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKScsXG4gICAgICAgIH0sXG4gICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgIGVsTGlrZUNvdW50LmNvdW50ZXIgPSBOdW1iZXIoZWxMaWtlQ291bnQuY291bnRlcikgKyAxO1xuICAgICAgZWxMaWtlQ291bnQudGV4dENvbnRlbnQgPSBgICgke051bWJlcihlbExpa2VDb3VudC5jb3VudGVyKX0pYDtcbiAgICB9XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1swXS5jbGFzc05hbWUgPSAnJztcbiAgfSk7XG5cbiAgY291bnRJdGVtcyA9ICgoKSA9PiB7XG4gICAgdGhpcy5pdGVtc1RvdGFsLmlubmVyVGV4dCA9IHRoaXMubGlzdC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9