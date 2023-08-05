"use strict";
(self["webpackChunk_api_based_webapp"] = self["webpackChunk_api_based_webapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
  gap: 2.2rem;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1.5rem;
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

.nav-item:hover {
  transform: scale(1.3);
}

a {
  text-decoration: none;
}

main {
  margin-top: 5em;
  min-height: 75vh;
}

.meals-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

@media only screen and (min-width: 768px) {
  .meals-card {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .meals-card::after {
    content: '';
    flex: auto;
  }
}

.mealItem {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  border: 2px solid darkgray;
  border-radius: 8px;
  background-color: #fff;
  gap: 1rem;
}

@media only screen and (min-width: 768px) {
  .mealItem {
    flex-direction: column;
    margin: 1rem 0.5rem;
    padding: 1rem 0.5rem;
    width: 44%;
    justify-content: flex-start;
    gap: 0;
  }
}

@media only screen and (min-width: 992px) {
  .mealItem {
    width: 30%;
  }
}

@media only screen and (min-width: 1200px) {
  .mealItem {
    width: 23%;
  }
}

.strUl {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: large;
}

.likeUl {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 0.1rem;
  padding-bottom: 0.1rem;
}

.thumb {
  height: 220px;
  width: 220px;
  border-radius: 1rem;
  align-self: center;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
}

.thumb:hover {
  filter: drop-shadow(0 0 0.75rem crimson);
  transform: scale(1.2);
}

.catlablel {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  text-align: left;
}

.arealabel {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
}

.buttonDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}

.comments-board button,
.button {
  background-color: #dc3dcb;
  border: 1px solid #000;
  border-radius: 3px;
  width: 8.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  margin-left: 4.5rem;
  margin-top: 1rem;
  text-align: center;
  cursor: pointer;
}

.button:hover {
  background-color: #19f5aa;
  transition: 1s;
}

.imgLike {
  height: 1.5rem;
}

.imgLike:hover {
  cursor: pointer;
  filter: invert(8%) sepia(98%) saturate(6374%) hue-rotate(246deg) brightness(111%) contrast(147%);
}

.imgLike:active {
  filter: invert(42%) sepia(98%) saturate(7352%) hue-rotate(354deg) brightness(98%) contrast(124%);
}

span {
  margin: 1rem;
  font-size: 1.6rem;
}

.hide {
  display: none;
}

p {
  margin: 0.2rem;
  font-size: 1rem;
}

#submit {
  font-family: 'Poppins', serif;
  font-weight: lighter;
  cursor: pointer;
}

.open-popup {
  position: fixed;
  z-index: 100;
  top: 1rem;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 95%;
  backdrop-filter: blur(80px);
  transition: height 1s ease;
  padding: 1.5rem;
}

.close-popup {
  margin-left: 75.5%;
  margin-top: 3.5%;
  position: fixed;
  border-radius: 5px;
}

.comments-board {
  padding-top: 0.2rem;
  padding-left: 2rem;
  margin: 3% auto;
  display: flex;
  border: 5px solid grey;
  border-radius: 10px;
  overflow: auto;
  flex-direction: column;
  width: 850px;
  height: 500px;
  background-color: #a3cfbb;
}

.comments-board #imgThumb {
  width: 300px;
  height: 300px;
  border-radius: 1rem;
  order: -1;
  margin: 1rem;
}

.comments-board Label {
  display: block;
  font-size: 1.3em;
  margin-block-start: 0.5rem;
  margin-block-end: 0.2rem;
  margin-inline-start: 5rem;
  margin-inline-end: 0px;
  font-weight: bold;
}

.comments-board h3 {
  display: block;
  font-size: 1.5rem;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  margin-inline-start: 5rem;
  margin-inline-end: 0px;
}

.comments-board h4 {
  display: block;
  font-size: 1.5rem;
  margin: 1rem;
  margin-block-start: 2rem;
  margin-block-end: 0.1rem;
  margin-inline-start: 5rem;
  margin-inline-end: 0px;
  font-weight: bold;
}

.comments-board h5 {
  font-size: 1.2rem;
}

.comments-board input {
  margin: 1% 10%;
  width: 25rem;
  height: 30px;
  border-radius: 5px;
  padding: 0.5rem;
  border-color: #fed136;
  box-shadow: none;
}

.comments-board #comment {
  height: 6rem;
}

.divComments {
  border-radius: 5px;
  padding: 0.1rem;
  margin: 1rem;
  background-color: white;
}

.comment {
  padding: 0.2rem;
  margin: 0.8rem;
  background-color: rgb(206, 121, 138, 0.4);
}

.imgCancel {
  height: 2rem;
  width: 2rem;
  position: fixed;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(104%) contrast(106%);
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.2rem;
}

section,
footer {
  padding: 2em;
}

.author {
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  color: #3763f4;
}

footer {
  border-top: solid 2px #dc3545;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  font-weight: 900;
  padding: 1.5rem;
  background-color: #2d2c38;
  color: rgba(255, 255, 255, 0.85);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lora\", serif;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #dfdfdf;\r\n}\r\n\r\n.app-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.navbar-logo {\r\n  height: auto;\r\n  margin-left: 1.5rem;\r\n  padding: 18px;\r\n  padding-left: 18rem;\r\n  list-style: none;\r\n  background-image: url('../src/assets/images/logo.png');\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  height: 65px;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem;\r\n  background-color: #2d2c38;\r\n  border: 2px solid #dc3545;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-nav {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 2.2rem;\r\n  flex-direction: row;\r\n  padding-left: 1rem;\r\n  padding-right: 1.5rem;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link {\r\n  color: rgba(255, 255, 255, 0.85);\r\n  font-size: 0.9rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link:hover,\r\n.navbar-nav > li.nav-item > a.nav-link:focus {\r\n  color: #f05f40;\r\n}\r\n\r\n.nav-item:hover {\r\n  transform: scale(1.3);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 5em;\r\n  min-height: 75vh;\r\n}\r\n\r\n.meals-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: transparent;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .meals-card {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 0;\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .meals-card::after {\r\n    content: '';\r\n    flex: auto;\r\n  }\r\n}\r\n\r\n.mealItem {\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 2px solid darkgray;\r\n  border-radius: 8px;\r\n  background-color: #fff;\r\n  gap: 1rem;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .mealItem {\r\n    flex-direction: column;\r\n    margin: 1rem 0.5rem;\r\n    padding: 1rem 0.5rem;\r\n    width: 44%;\r\n    justify-content: flex-start;\r\n    gap: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .mealItem {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .mealItem {\r\n    width: 23%;\r\n  }\r\n}\r\n\r\n.strUl {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-weight: bold;\r\n  font-size: large;\r\n}\r\n\r\n.likeUl {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1.2rem;\r\n  margin-bottom: 0.1rem;\r\n  padding-bottom: 0.1rem;\r\n}\r\n\r\n.thumb {\r\n  height: 220px;\r\n  width: 220px;\r\n  border-radius: 1rem;\r\n  align-self: center;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.1rem;\r\n}\r\n\r\n.thumb:hover {\r\n  filter: drop-shadow(0 0 0.75rem crimson);\r\n  transform: scale(1.2);\r\n}\r\n\r\n.catlablel {\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-align: left;\r\n}\r\n\r\n.arealabel {\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  font-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.comments-board button,\r\n.button {\r\n  background-color: #dc3dcb;\r\n  border: 1px solid #000;\r\n  border-radius: 3px;\r\n  width: 8.5rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  margin-left: 4.5rem;\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #19f5aa;\r\n  transition: 1s;\r\n}\r\n\r\n.imgLike {\r\n  height: 1.5rem;\r\n}\r\n\r\n.imgLike:hover {\r\n  cursor: pointer;\r\n  filter: invert(8%) sepia(98%) saturate(6374%) hue-rotate(246deg) brightness(111%) contrast(147%);\r\n}\r\n\r\n.imgLike:active {\r\n  filter: invert(42%) sepia(98%) saturate(7352%) hue-rotate(354deg) brightness(98%) contrast(124%);\r\n}\r\n\r\nspan {\r\n  margin: 1rem;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\np {\r\n  margin: 0.2rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n#submit {\r\n  font-family: 'Poppins', serif;\r\n  font-weight: lighter;\r\n  cursor: pointer;\r\n}\r\n\r\n.open-popup {\r\n  position: fixed;\r\n  z-index: 100;\r\n  top: 1rem;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  opacity: 95%;\r\n  backdrop-filter: blur(80px);\r\n  transition: height 1s ease;\r\n  padding: 1.5rem;\r\n}\r\n\r\n.close-popup {\r\n  margin-left: 75.5%;\r\n  margin-top: 3.5%;\r\n  position: fixed;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comments-board {\r\n  padding-top: 0.2rem;\r\n  padding-left: 2rem;\r\n  margin: 3% auto;\r\n  display: flex;\r\n  border: 5px solid grey;\r\n  border-radius: 10px;\r\n  overflow: auto;\r\n  flex-direction: column;\r\n  width: 850px;\r\n  height: 500px;\r\n  background-color: #a3cfbb;\r\n}\r\n\r\n.comments-board #imgThumb {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 1rem;\r\n  order: -1;\r\n  margin: 1rem;\r\n}\r\n\r\n.comments-board Label {\r\n  display: block;\r\n  font-size: 1.3em;\r\n  margin-block-start: 0.5rem;\r\n  margin-block-end: 0.2rem;\r\n  margin-inline-start: 5rem;\r\n  margin-inline-end: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n.comments-board h3 {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  margin-block-start: 1rem;\r\n  margin-block-end: 1rem;\r\n  margin-inline-start: 5rem;\r\n  margin-inline-end: 0px;\r\n}\r\n\r\n.comments-board h4 {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  margin: 1rem;\r\n  margin-block-start: 2rem;\r\n  margin-block-end: 0.1rem;\r\n  margin-inline-start: 5rem;\r\n  margin-inline-end: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n.comments-board h5 {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.comments-board input {\r\n  margin: 1% 10%;\r\n  width: 25rem;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  border-color: #fed136;\r\n  box-shadow: none;\r\n}\r\n\r\n.comments-board #comment {\r\n  height: 6rem;\r\n}\r\n\r\n.divComments {\r\n  border-radius: 5px;\r\n  padding: 0.1rem;\r\n  margin: 1rem;\r\n  background-color: white;\r\n}\r\n\r\n.comment {\r\n  padding: 0.2rem;\r\n  margin: 0.8rem;\r\n  background-color: rgb(206, 121, 138, 0.4);\r\n}\r\n\r\n.imgCancel {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: fixed;\r\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(104%) contrast(106%);\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  margin: 0.2rem;\r\n}\r\n\r\nsection,\r\nfooter {\r\n  padding: 2em;\r\n}\r\n\r\n.author {\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  color: #3763f4;\r\n}\r\n\r\nfooter {\r\n  border-top: solid 2px #dc3545;\r\n  display: flex;\r\n  justify-content: center;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  font-weight: 900;\r\n  padding: 1.5rem;\r\n  background-color: #2d2c38;\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_cards_mealDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards/mealDisplay.js */ "./src/modules/cards/mealDisplay.js");



(0,_modules_cards_mealDisplay_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/cards/getMeals.js":
/*!***************************************!*\
  !*** ./src/modules/cards/getMeals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const displayMeals = async () => {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);

/***/ }),

/***/ "./src/modules/cards/mealCard.js":
/*!***************************************!*\
  !*** ./src/modules/cards/mealCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../likes/heart.gif */ "./src/modules/likes/heart.gif");
/* harmony import */ var _likes_x_circle_fill_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../likes/x-circle-fill.svg */ "./src/modules/likes/x-circle-fill.svg");
/* harmony import */ var _likes_addLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../likes/addLike.js */ "./src/modules/likes/addLike.js");
/* harmony import */ var _mealPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mealPopup.js */ "./src/modules/mealPopup.js");





const myLike = new Image();
myLike.src = _likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__;
myLike.classList = 'imgLike';

const myCancel = new Image();
myCancel.src = _likes_x_circle_fill_svg__WEBPACK_IMPORTED_MODULE_1__;
myCancel.classList = ('imgCancel');

const mealCard = (title, category, area, instructions, id, imageId, likeNum) => {
const board = document.querySelector('.meals-card');

const ul = document.createElement('ul');
ul.className = 'mealItem';

const strUl = document.createElement('ul');
strUl.className = 'strUl';

const strCat = document.createElement('ul');
strCat.className = 'strCat';

const strArea = document.createElement('ul');
strArea.className = 'strArea';

const strInstr = document.createElement('ul');
strInstr.className = 'strInstr';

const likeUl = document.createElement('ul');
likeUl.className = 'likeUl';

const buttonUl = document.createElement('ul');
  buttonUl.className = 'buttonUl';

const buttonComment = document.createElement('ul');
  buttonComment.className = 'button';

ul.innerHTML = `<img class='thumb' src='${imageId}'>`;
strUl.innerHTML = `<span>${title}</span>`;
strCat.innerHTML = `<span class='catlablel'>Catgory:- ${category}</span>`;
strArea.innerHTML = `<span class='arealabel'>Area:- ${area}</span>`;
strInstr.innerHTML = `<p class='hide'>${instructions}</p>`;
likeUl.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${_likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__}'><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;
buttonComment.innerHTML = `<ul>Comments</ul><span class='hide'>${id}</span>`;

strUl.appendChild(likeUl);
ul.appendChild(strUl);
ul.appendChild(strCat);
ul.appendChild(strArea);
ul.appendChild(strInstr);
buttonUl.appendChild(buttonComment);
ul.appendChild(buttonUl);
board.appendChild(ul);

likeUl.addEventListener('click', (e) => {
  if (e.target.classList.contains('stop')) {
    return;
  }

  (0,_likes_addLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target.previousElementSibling.textContent);
  const sumlike = e.target.nextElementSibling.textContent;
  e.target.nextElementSibling.textContent = parseInt(sumlike, 10) + 1;
});

const overlay = document.querySelector('.open-popup');
const cancel = document.querySelector('.close-popup');
cancel.appendChild(myCancel);

buttonComment.addEventListener('click', (e) => {
  overlay.style.display = 'block';
  (0,_mealPopup_js__WEBPACK_IMPORTED_MODULE_3__.mealPopup)(e.target.nextElementSibling.textContent);
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.querySelector('.comments-board').innerHTML = '';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.querySelector('.comments-board').innerHTML = '';
});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCard);

/***/ }),

/***/ "./src/modules/cards/mealCounter.js":
/*!******************************************!*\
  !*** ./src/modules/cards/mealCounter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mealCounter = () => {
    const toatalMeals = document.querySelector('#totalMeals');
    toatalMeals.innerHTML = document.getElementsByClassName('mealItem').length;
    return Number(toatalMeals.innerHTML);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCounter);

/***/ }),

/***/ "./src/modules/cards/mealDisplay.js":
/*!******************************************!*\
  !*** ./src/modules/cards/mealDisplay.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMeals.js */ "./src/modules/cards/getMeals.js");
/* harmony import */ var _mealCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealCard.js */ "./src/modules/cards/mealCard.js");
/* harmony import */ var _mealCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealCounter.js */ "./src/modules/cards/mealCounter.js");




const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/likes/';

const mealDisplay = async () => {
    const response = await fetch(URL);
    const likes = await response.json();

    const data = await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    data.meals.forEach((meal) => {
      let likeNum = 0;
      likes.forEach((item) => {
        if (item.item_id === meal.idMeal) {
          likeNum = item.likes;
        }
      });

      (0,_mealCard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
                meal.strMeal,
                meal.strCategory,
                meal.strArea,
                meal.strInstructions,
                meal.idMeal,
                meal.strMealThumb,
                likeNum,
                meal.strTags,
             );
    });
    (0,_mealCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealDisplay);

/***/ }),

/***/ "./src/modules/likes/addLike.js":
/*!**************************************!*\
  !*** ./src/modules/likes/addLike.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/likes/';

const addLike = async (idMeal) => {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: idMeal,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-control-allow-origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
    const data = await response.json();
    return data;
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);

/***/ }),

/***/ "./src/modules/mealPopup.js":
/*!**********************************!*\
  !*** ./src/modules/mealPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commentArray: () => (/* binding */ commentArray),
/* harmony export */   commentCard: () => (/* binding */ commentCard),
/* harmony export */   commentCounter: () => (/* binding */ commentCounter),
/* harmony export */   commentsCard: () => (/* binding */ commentsCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getComments: () => (/* binding */ getComments),
/* harmony export */   mealPopup: () => (/* binding */ mealPopup),
/* harmony export */   postComment: () => (/* binding */ postComment)
/* harmony export */ });
/* harmony import */ var _cards_getMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards/getMeals.js */ "./src/modules/cards/getMeals.js");


const commentCard = (name, date, comment) => {
  const comments = document.querySelector('.divComments');
  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<h5>${date}<span>:-</span> ${name} ${comment}</h5>`;
  comments.appendChild(div);
};

const getComments = async (idMeal) => {
  let url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/comments?item_id=';
  url += idMeal;
  const response = await fetch(url);
  const data = await response.json(url);
  return data;
};

const commentCounter = () => {
  const commentCount = document.getElementsByClassName('comment').length;
  return commentCount;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

const commentArray = async (idMeal) => {
  const counter = document.querySelector('.divCounter');
  const div = document.createElement('div');
  div.className = 'counting';
  const data = await getComments(idMeal);
  data.forEach((comment) => {
    commentCard(comment.username, comment.creation_date, comment.comment);
  });
  counter.innerHTML = '';
  div.innerHTML = `<h4>Comments(${commentCounter()})</h4>`;
  counter.appendChild(div);
};

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/comments';

const postComment = async (name, comment, idMeal) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: idMeal,
      username: name,
      // eslint-disable-next-line object-shorthand
      comment: comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
  const data = await response.json();
  return data;
};

const commentsCard = (title, tag, imageThumb, id, category, area, instructions) => {
  const commentsBoard = document.querySelector('.comments-board');

  const imgThumb = document.createElement('img');
  imgThumb.id = 'imgThumb';
  imgThumb.src = imageThumb;

  const form = document.createElement('form');

  const divText = document.createElement('div');
  divText.className = 'divText';
  const divCounter = document.createElement('div');
  divCounter.className = 'divCounter';
  const divTable = document.createElement('div');
  divTable.className = 'divComments';

  if (!tag) {
    tag = '';
  }

  divText.innerHTML = `<h1>${title}</h1>
                        <h3>Area: ${area} | Catgory: ${category} | Tag: ${tag}</h3>
                        <p>Instructions: ${instructions}</p>`;

  const formLabel = document.createElement('label');
  formLabel.id = 'label';
  formLabel.textContent = 'Add your comment';

  const inputName = document.createElement('input');
  inputName.id = 'name';
  inputName.className = 'remove';
  inputName.placeholder = 'Your Name';
  inputName.required = true;

  const inputComment = document.createElement('input');
  inputComment.id = 'comment';
  inputComment.placeholder = 'Your Insights';
  inputComment.required = true;

  const submitButton = document.createElement('button');
  submitButton.id = 'submit';
  submitButton.textContent = 'SUBMIT';

  const inputs = [formLabel, inputName, inputComment, submitButton];

  for (let i = 0; i < inputs.length; i += 1) {
    form.appendChild(inputs[i]);
  }

  commentsBoard.appendChild(imgThumb);
  commentsBoard.appendChild(divText);
  divText.appendChild(form);
  divText.appendChild(divCounter);
  commentsBoard.appendChild(divTable);
  commentArray(id);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name');
    const comment = document.getElementById('comment');
    postComment(userName.value, comment.value, id);
    userName.value = 'Please Wait';
    comment.value = 'Please Wait';
    setTimeout(() => {
      userName.value = '';
      comment.value = '';
      divTable.innerHTML = '';
      commentArray(id);
    }, 2000);
  });
};

const mealPopup = async (idMeal) => {
  const data = await (0,_cards_getMeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  data.meals.forEach((meal) => {
    if (meal.idMeal === idMeal) {
      commentsCard(
                    meal.strMeal,
                    meal.strTags,
                    meal.strMealThumb,
                    meal.idMeal,
                     meal.strCategory,
                    meal.strArea,
                    meal.strInstructions,
                    );
    }
  });
};




/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3714c37fac597e01a8ea.png";

/***/ }),

/***/ "./src/modules/likes/heart.gif":
/*!*************************************!*\
  !*** ./src/modules/likes/heart.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f6a06c1aecc121f961f.gif";

/***/ }),

/***/ "./src/modules/likes/x-circle-fill.svg":
/*!*********************************************!*\
  !*** ./src/modules/likes/x-circle-fill.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f3133fe1cd1ea4a07d2.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxrSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw2R0FBNkcsa0JBQWtCO0FBQy9ILDZHQUE2RyxtQ0FBbUMsTUFBTSxvQkFBb0I7QUFDMUsseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9B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QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DLG9DQUFvQyxNQUFNLGFBQWEsVUFBVSxTQUFTLElBQUk7QUFDOUUsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRzL2dldE1lYWxzLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvY2FyZHMvbWVhbENhcmQuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9jYXJkcy9tZWFsQ291bnRlci5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRzL21lYWxEaXNwbGF5LmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvbGlrZXMvYWRkTGlrZS5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL21lYWxQb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG4ubmF2YmFyLWxvZ28ge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyYzM4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzM1NDU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMi4ycmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjA1ZjQwO1xyXG59XHJcblxyXG4ubmF2LWl0ZW06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgbWluLWhlaWdodDogNzV2aDtcclxufVxyXG5cclxuLm1lYWxzLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubWVhbHMtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubWVhbHMtY2FyZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm1lYWxJdGVtIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lYWxJdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5tZWFsSXRlbSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWVhbEl0ZW0ge1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcbn1cclxuXHJcbi5zdHJVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmxpa2VVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG59XHJcblxyXG4udGh1bWIge1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbn1cclxuXHJcbi50aHVtYjpob3ZlciB7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSBjcmltc29uKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5jYXRsYWJsZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hcmVhbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnV0dG9uRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb21tZW50cy1ib2FyZCBidXR0b24sXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzNkY2I7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDguNXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogNC41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5ZjVhYTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuLmltZ0xpa2Uge1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uaW1nTGlrZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZpbHRlcjogaW52ZXJ0KDglKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYzNzQlKSBodWUtcm90YXRlKDI0NmRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxNDclKTtcclxufVxyXG5cclxuLmltZ0xpa2U6YWN0aXZlIHtcclxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNzM1MiUpIGh1ZS1yb3RhdGUoMzU0ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTI0JSk7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMC4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuI3N1Ym1pdCB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3Blbi1wb3B1cCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0b3A6IDFyZW07XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG9wYWNpdHk6IDk1JTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoODBweCk7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4uY2xvc2UtcG9wdXAge1xyXG4gIG1hcmdpbi1sZWZ0OiA3NS41JTtcclxuICBtYXJnaW4tdG9wOiAzLjUlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jb21tZW50cy1ib2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgbWFyZ2luOiAzJSBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDg1MHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzY2ZiYjtcclxufVxyXG5cclxuLmNvbW1lbnRzLWJvYXJkICNpbWdUaHVtYiB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBvcmRlcjogLTE7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4uY29tbWVudHMtYm9hcmQgTGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVyZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC4ycmVtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVyZW07XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbW1lbnRzLWJvYXJkIGgzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFyZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMXJlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cmVtO1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50cy1ib2FyZCBoNCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMnJlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjFyZW07XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNXJlbTtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29tbWVudHMtYm9hcmQgaDUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uY29tbWVudHMtYm9hcmQgaW5wdXQge1xyXG4gIG1hcmdpbjogMSUgMTAlO1xyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItY29sb3I6ICNmZWQxMzY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWJvYXJkICNjb21tZW50IHtcclxuICBoZWlnaHQ6IDZyZW07XHJcbn1cclxuXHJcbi5kaXZDb21tZW50cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuMXJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgbWFyZ2luOiAwLjhyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMTIxLCAxMzgsIDAuNCk7XHJcbn1cclxuXHJcbi5pbWdDYW5jZWwge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI4MmRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDYlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbjogMC4ycmVtO1xyXG59XHJcblxyXG5zZWN0aW9uLFxyXG5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxufVxyXG5cclxuLmF1dGhvciB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMzNzYzZjQ7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNkYzM1NDU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLGFB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O0VBQ2QseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsOEZBQThGO0VBQzlGLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTp3Z2h0QDQwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTAzMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1sb2dvIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxOHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxOHJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNjVweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyYzM4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMzU0NTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyLjJyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cyB7XFxyXFxuICBjb2xvcjogI2YwNWY0MDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogNWVtO1xcclxcbiAgbWluLWhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLWNhcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxzLWNhcmQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWxzLWNhcmQ6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGZsZXg6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZWFsSXRlbSB7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFsSXRlbSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgICB3aWR0aDogNDQlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgLm1lYWxJdGVtIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5tZWFsSXRlbSB7XFxyXFxuICAgIHdpZHRoOiAyMyU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdHJVbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZVVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50aHVtYiB7XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1iOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuNzVyZW0gY3JpbXNvbik7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5jYXRsYWJsZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5hcmVhbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgYnV0dG9uLFxcclxcbi5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjM2RjYjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB3aWR0aDogOC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0LjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOWY1YWE7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0xpa2Uge1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWdMaWtlOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDglKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYzNzQlKSBodWUtcm90YXRlKDI0NmRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxNDclKTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0xpa2U6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDQyJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg3MzUyJSkgaHVlLXJvdGF0ZSgzNTRkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMjQlKTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3Blbi1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICB0b3A6IDFyZW07XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3BhY2l0eTogOTUlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDgwcHgpO1xcclxcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cCB7XFxyXFxuICBtYXJnaW4tbGVmdDogNzUuNSU7XFxyXFxuICBtYXJnaW4tdG9wOiAzLjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQge1xcclxcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIG1hcmdpbjogMyUgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBncmV5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA4NTBweDtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNjZmJiO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgI2ltZ1RodW1iIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgb3JkZXI6IC0xO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgTGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjJyZW07XFxyXFxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cmVtO1xcclxcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgaDMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFyZW07XFxyXFxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cmVtO1xcclxcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJvYXJkIGg0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJyZW07XFxyXFxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjFyZW07XFxyXFxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cmVtO1xcclxcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgaDUge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ib2FyZCBpbnB1dCB7XFxyXFxuICBtYXJnaW46IDElIDEwJTtcXHJcXG4gIHdpZHRoOiAyNXJlbTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZlZDEzNjtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ib2FyZCAjY29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDZyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXZDb21tZW50cyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjFyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgbWFyZ2luOiAwLjhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAxMjEsIDEzOCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhbmNlbCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyODJkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTA2JSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24sXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvciB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMzc2M2Y0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNkYzM1NDU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG1lYWxEaXNwbGF5IGZyb20gJy4vbW9kdWxlcy9jYXJkcy9tZWFsRGlzcGxheS5qcyc7XG5cbm1lYWxEaXNwbGF5KCk7XG4iLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cz0nO1xuXG5jb25zdCBkaXNwbGF5TWVhbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVhbHM7IiwiaW1wb3J0IGxpa2UgZnJvbSAnLi4vbGlrZXMvaGVhcnQuZ2lmJztcclxuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuLi9saWtlcy94LWNpcmNsZS1maWxsLnN2Zyc7XHJcbmltcG9ydCBhZGRMaWtlIGZyb20gJy4uL2xpa2VzL2FkZExpa2UuanMnO1xyXG5pbXBvcnQgeyBtZWFsUG9wdXAgfSBmcm9tICcuLi9tZWFsUG9wdXAuanMnO1xyXG5cclxuY29uc3QgbXlMaWtlID0gbmV3IEltYWdlKCk7XHJcbm15TGlrZS5zcmMgPSBsaWtlO1xyXG5teUxpa2UuY2xhc3NMaXN0ID0gJ2ltZ0xpa2UnO1xyXG5cclxuY29uc3QgbXlDYW5jZWwgPSBuZXcgSW1hZ2UoKTtcclxubXlDYW5jZWwuc3JjID0gY2xvc2VJY29uO1xyXG5teUNhbmNlbC5jbGFzc0xpc3QgPSAoJ2ltZ0NhbmNlbCcpO1xyXG5cclxuY29uc3QgbWVhbENhcmQgPSAodGl0bGUsIGNhdGVnb3J5LCBhcmVhLCBpbnN0cnVjdGlvbnMsIGlkLCBpbWFnZUlkLCBsaWtlTnVtKSA9PiB7XHJcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLWNhcmQnKTtcclxuXHJcbmNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxudWwuY2xhc3NOYW1lID0gJ21lYWxJdGVtJztcclxuXHJcbmNvbnN0IHN0clVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuc3RyVWwuY2xhc3NOYW1lID0gJ3N0clVsJztcclxuXHJcbmNvbnN0IHN0ckNhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbnN0ckNhdC5jbGFzc05hbWUgPSAnc3RyQ2F0JztcclxuXHJcbmNvbnN0IHN0ckFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5zdHJBcmVhLmNsYXNzTmFtZSA9ICdzdHJBcmVhJztcclxuXHJcbmNvbnN0IHN0ckluc3RyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuc3RySW5zdHIuY2xhc3NOYW1lID0gJ3N0ckluc3RyJztcclxuXHJcbmNvbnN0IGxpa2VVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbmxpa2VVbC5jbGFzc05hbWUgPSAnbGlrZVVsJztcclxuXHJcbmNvbnN0IGJ1dHRvblVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBidXR0b25VbC5jbGFzc05hbWUgPSAnYnV0dG9uVWwnO1xyXG5cclxuY29uc3QgYnV0dG9uQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgYnV0dG9uQ29tbWVudC5jbGFzc05hbWUgPSAnYnV0dG9uJztcclxuXHJcbnVsLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPSd0aHVtYicgc3JjPScke2ltYWdlSWR9Jz5gO1xyXG5zdHJVbC5pbm5lckhUTUwgPSBgPHNwYW4+JHt0aXRsZX08L3NwYW4+YDtcclxuc3RyQ2F0LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0nY2F0bGFibGVsJz5DYXRnb3J5Oi0gJHtjYXRlZ29yeX08L3NwYW4+YDtcclxuc3RyQXJlYS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J2FyZWFsYWJlbCc+QXJlYTotICR7YXJlYX08L3NwYW4+YDtcclxuc3RySW5zdHIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPSdoaWRlJz4ke2luc3RydWN0aW9uc308L3A+YDtcclxubGlrZVVsLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0naGlkZSc+JHtpZH08L3NwYW4+PGltZyBjbGFzcz0naW1nTGlrZScgc3JjPScke2xpa2V9Jz48dWwgY2xhc3M9XCJzdG9wXCI+JHtsaWtlTnVtfTwvdWw+PHAgY2xhc3M9XCJzdG9wXCI+TGlrZXM8L3A+YDtcclxuYnV0dG9uQ29tbWVudC5pbm5lckhUTUwgPSBgPHVsPkNvbW1lbnRzPC91bD48c3BhbiBjbGFzcz0naGlkZSc+JHtpZH08L3NwYW4+YDtcclxuXHJcbnN0clVsLmFwcGVuZENoaWxkKGxpa2VVbCk7XHJcbnVsLmFwcGVuZENoaWxkKHN0clVsKTtcclxudWwuYXBwZW5kQ2hpbGQoc3RyQ2F0KTtcclxudWwuYXBwZW5kQ2hpbGQoc3RyQXJlYSk7XHJcbnVsLmFwcGVuZENoaWxkKHN0ckluc3RyKTtcclxuYnV0dG9uVWwuYXBwZW5kQ2hpbGQoYnV0dG9uQ29tbWVudCk7XHJcbnVsLmFwcGVuZENoaWxkKGJ1dHRvblVsKTtcclxuYm9hcmQuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxubGlrZVVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdG9wJykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGFkZExpa2UoZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudCk7XHJcbiAgY29uc3Qgc3VtbGlrZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBwYXJzZUludChzdW1saWtlLCAxMCkgKyAxO1xyXG59KTtcclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wb3B1cCcpO1xyXG5jb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcclxuY2FuY2VsLmFwcGVuZENoaWxkKG15Q2FuY2VsKTtcclxuXHJcbmJ1dHRvbkNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgbWVhbFBvcHVwKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCk7XHJcbn0pO1xyXG5cclxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYm9hcmQnKS5pbm5lckhUTUwgPSAnJztcclxufSk7XHJcblxyXG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1ib2FyZCcpLmlubmVySFRNTCA9ICcnO1xyXG59KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lYWxDYXJkOyIsImNvbnN0IG1lYWxDb3VudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvYXRhbE1lYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsTWVhbHMnKTtcbiAgICB0b2F0YWxNZWFscy5pbm5lckhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZWFsSXRlbScpLmxlbmd0aDtcbiAgICByZXR1cm4gTnVtYmVyKHRvYXRhbE1lYWxzLmlubmVySFRNTCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZWFsQ291bnRlcjsiLCJpbXBvcnQgZGlzcGxheU1lYWxzIGZyb20gJy4vZ2V0TWVhbHMuanMnO1xuaW1wb3J0IG1lYWxDYXJkIGZyb20gJy4vbWVhbENhcmQuanMnO1xuaW1wb3J0IG1lYWxDb3VudGVyIGZyb20gJy4vbWVhbENvdW50ZXIuanMnO1xuXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaURrUVRqdVFGUzdQZWltQUx1Y0gvbGlrZXMvJztcblxuY29uc3QgbWVhbERpc3BsYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRpc3BsYXlNZWFscygpO1xuICAgIGRhdGEubWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgbGV0IGxpa2VOdW0gPSAwO1xuICAgICAgbGlrZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBtZWFsLmlkTWVhbCkge1xuICAgICAgICAgIGxpa2VOdW0gPSBpdGVtLmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbWVhbENhcmQoXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJNZWFsLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RyQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJBcmVhLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RySW5zdHJ1Y3Rpb25zLFxuICAgICAgICAgICAgICAgIG1lYWwuaWRNZWFsLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RyTWVhbFRodW1iLFxuICAgICAgICAgICAgICAgIGxpa2VOdW0sXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJUYWdzLFxuICAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgbWVhbENvdW50ZXIoKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBtZWFsRGlzcGxheTsiLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaURrUVRqdVFGUzdQZWltQUx1Y0gvbGlrZXMvJztcblxuY29uc3QgYWRkTGlrZSA9IGFzeW5jIChpZE1lYWwpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkTWVhbCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJzogJyonLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnOiAndHJ1ZScsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTsiLCJpbXBvcnQgZGlzcGxheU1lYWxzIGZyb20gJy4vY2FyZHMvZ2V0TWVhbHMuanMnO1xyXG5cclxuY29uc3QgY29tbWVudENhcmQgPSAobmFtZSwgZGF0ZSwgY29tbWVudCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkNvbW1lbnRzJyk7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmNsYXNzTmFtZSA9ICdjb21tZW50JztcclxuICBkaXYuaW5uZXJIVE1MID0gYDxoNT4ke2RhdGV9PHNwYW4+Oi08L3NwYW4+ICR7bmFtZX0gJHtjb21tZW50fTwvaDU+YDtcclxuICBjb21tZW50cy5hcHBlbmRDaGlsZChkaXYpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWRNZWFsKSA9PiB7XHJcbiAgbGV0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9pRGtRVGp1UUZTN1BlaW1BTHVjSC9jb21tZW50cz9pdGVtX2lkPSc7XHJcbiAgdXJsICs9IGlkTWVhbDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24odXJsKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbW1lbnQnKS5sZW5ndGg7XHJcbiAgcmV0dXJuIGNvbW1lbnRDb3VudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyO1xyXG5cclxuY29uc3QgY29tbWVudEFycmF5ID0gYXN5bmMgKGlkTWVhbCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2Q291bnRlcicpO1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc05hbWUgPSAnY291bnRpbmcnO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDb21tZW50cyhpZE1lYWwpO1xyXG4gIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgY29tbWVudENhcmQoY29tbWVudC51c2VybmFtZSwgY29tbWVudC5jcmVhdGlvbl9kYXRlLCBjb21tZW50LmNvbW1lbnQpO1xyXG4gIH0pO1xyXG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgZGl2LmlubmVySFRNTCA9IGA8aDQ+Q29tbWVudHMoJHtjb21tZW50Q291bnRlcigpfSk8L2g0PmA7XHJcbiAgY291bnRlci5hcHBlbmRDaGlsZChkaXYpO1xyXG59O1xyXG5cclxuY29uc3QgVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2lEa1FUanVRRlM3UGVpbUFMdWNIL2NvbW1lbnRzJztcclxuXHJcbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKG5hbWUsIGNvbW1lbnQsIGlkTWVhbCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogaWRNZWFsLFxyXG4gICAgICB1c2VybmFtZTogbmFtZSxcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1zaG9ydGhhbmRcclxuICAgICAgY29tbWVudDogY29tbWVudCxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJzogJyonLFxyXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnOiAndHJ1ZScsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBjb21tZW50c0NhcmQgPSAodGl0bGUsIHRhZywgaW1hZ2VUaHVtYiwgaWQsIGNhdGVnb3J5LCBhcmVhLCBpbnN0cnVjdGlvbnMpID0+IHtcclxuICBjb25zdCBjb21tZW50c0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWJvYXJkJyk7XHJcblxyXG4gIGNvbnN0IGltZ1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nVGh1bWIuaWQgPSAnaW1nVGh1bWInO1xyXG4gIGltZ1RodW1iLnNyYyA9IGltYWdlVGh1bWI7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gIGNvbnN0IGRpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXZUZXh0LmNsYXNzTmFtZSA9ICdkaXZUZXh0JztcclxuICBjb25zdCBkaXZDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2Q291bnRlci5jbGFzc05hbWUgPSAnZGl2Q291bnRlcic7XHJcbiAgY29uc3QgZGl2VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXZUYWJsZS5jbGFzc05hbWUgPSAnZGl2Q29tbWVudHMnO1xyXG5cclxuICBpZiAoIXRhZykge1xyXG4gICAgdGFnID0gJyc7XHJcbiAgfVxyXG5cclxuICBkaXZUZXh0LmlubmVySFRNTCA9IGA8aDE+JHt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QXJlYTogJHthcmVhfSB8IENhdGdvcnk6ICR7Y2F0ZWdvcnl9IHwgVGFnOiAke3RhZ308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnN0cnVjdGlvbnM6ICR7aW5zdHJ1Y3Rpb25zfTwvcD5gO1xyXG5cclxuICBjb25zdCBmb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGZvcm1MYWJlbC5pZCA9ICdsYWJlbCc7XHJcbiAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ0FkZCB5b3VyIGNvbW1lbnQnO1xyXG5cclxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0TmFtZS5pZCA9ICduYW1lJztcclxuICBpbnB1dE5hbWUuY2xhc3NOYW1lID0gJ3JlbW92ZSc7XHJcbiAgaW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgTmFtZSc7XHJcbiAgaW5wdXROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgaW5wdXRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dENvbW1lbnQuaWQgPSAnY29tbWVudCc7XHJcbiAgaW5wdXRDb21tZW50LnBsYWNlaG9sZGVyID0gJ1lvdXIgSW5zaWdodHMnO1xyXG4gIGlucHV0Q29tbWVudC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5pZCA9ICdzdWJtaXQnO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xyXG5cclxuICBjb25zdCBpbnB1dHMgPSBbZm9ybUxhYmVsLCBpbnB1dE5hbWUsIGlucHV0Q29tbWVudCwgc3VibWl0QnV0dG9uXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRzW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbW1lbnRzQm9hcmQuYXBwZW5kQ2hpbGQoaW1nVGh1bWIpO1xyXG4gIGNvbW1lbnRzQm9hcmQuYXBwZW5kQ2hpbGQoZGl2VGV4dCk7XHJcbiAgZGl2VGV4dC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdkNvdW50ZXIpO1xyXG4gIGNvbW1lbnRzQm9hcmQuYXBwZW5kQ2hpbGQoZGl2VGFibGUpO1xyXG4gIGNvbW1lbnRBcnJheShpZCk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XHJcbiAgICBwb3N0Q29tbWVudCh1c2VyTmFtZS52YWx1ZSwgY29tbWVudC52YWx1ZSwgaWQpO1xyXG4gICAgdXNlck5hbWUudmFsdWUgPSAnUGxlYXNlIFdhaXQnO1xyXG4gICAgY29tbWVudC52YWx1ZSA9ICdQbGVhc2UgV2FpdCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdXNlck5hbWUudmFsdWUgPSAnJztcclxuICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICBkaXZUYWJsZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgY29tbWVudEFycmF5KGlkKTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbWVhbFBvcHVwID0gYXN5bmMgKGlkTWVhbCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkaXNwbGF5TWVhbHMoKTtcclxuICBkYXRhLm1lYWxzLmZvckVhY2goKG1lYWwpID0+IHtcclxuICAgIGlmIChtZWFsLmlkTWVhbCA9PT0gaWRNZWFsKSB7XHJcbiAgICAgIGNvbW1lbnRzQ2FyZChcclxuICAgICAgICAgICAgICAgICAgICBtZWFsLnN0ck1lYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVhbC5zdHJUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lYWwuc3RyTWVhbFRodW1iLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lYWwuaWRNZWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICBtZWFsLnN0ckNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIG1lYWwuc3RyQXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBtZWFsLnN0ckluc3RydWN0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuIG1lYWxQb3B1cCwgY29tbWVudHNDYXJkLCBwb3N0Q29tbWVudCwgY29tbWVudEFycmF5LCBjb21tZW50Q291bnRlciwgZ2V0Q29tbWVudHMsIGNvbW1lbnRDYXJkLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=