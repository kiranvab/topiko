(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postoffers-postoffers-module"],{

/***/ "2EPL":
/*!***********************************************!*\
  !*** ./src/app/postoffers/postoffers.page.ts ***!
  \***********************************************/
/*! exports provided: PostoffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostoffersPage", function() { return PostoffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_postoffers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./postoffers.page.html */ "Clai");
/* harmony import */ var _postoffers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postoffers.page.scss */ "nN67");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PostoffersPage = class PostoffersPage {
    constructor() { }
    ngOnInit() {
    }
};
PostoffersPage.ctorParameters = () => [];
PostoffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-postoffers',
        template: _raw_loader_postoffers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_postoffers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostoffersPage);



/***/ }),

/***/ "Clai":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postoffers/postoffers.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>postoffers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "M8zP":
/*!*************************************************!*\
  !*** ./src/app/postoffers/postoffers.module.ts ***!
  \*************************************************/
/*! exports provided: PostoffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostoffersPageModule", function() { return PostoffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _postoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postoffers-routing.module */ "hFP1");
/* harmony import */ var _postoffers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postoffers.page */ "2EPL");







let PostoffersPageModule = class PostoffersPageModule {
};
PostoffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _postoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostoffersPageRoutingModule"]
        ],
        declarations: [_postoffers_page__WEBPACK_IMPORTED_MODULE_6__["PostoffersPage"]]
    })
], PostoffersPageModule);



/***/ }),

/***/ "hFP1":
/*!*********************************************************!*\
  !*** ./src/app/postoffers/postoffers-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PostoffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostoffersPageRoutingModule", function() { return PostoffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _postoffers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postoffers.page */ "2EPL");




const routes = [
    {
        path: '',
        component: _postoffers_page__WEBPACK_IMPORTED_MODULE_3__["PostoffersPage"]
    }
];
let PostoffersPageRoutingModule = class PostoffersPageRoutingModule {
};
PostoffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostoffersPageRoutingModule);



/***/ }),

/***/ "nN67":
/*!*************************************************!*\
  !*** ./src/app/postoffers/postoffers.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0b2ZmZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=postoffers-postoffers-module-es2015.js.map