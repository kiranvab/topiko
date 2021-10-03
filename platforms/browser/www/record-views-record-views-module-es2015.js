(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["record-views-record-views-module"],{

/***/ "4N7H":
/*!*****************************************************!*\
  !*** ./src/app/record-views/record-views.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvcmQtdmlld3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "LO5U":
/*!*************************************************************!*\
  !*** ./src/app/record-views/record-views-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RecordViewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordViewsPageRoutingModule", function() { return RecordViewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _record_views_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record-views.page */ "nU/K");




const routes = [
    {
        path: '',
        component: _record_views_page__WEBPACK_IMPORTED_MODULE_3__["RecordViewsPage"]
    }
];
let RecordViewsPageRoutingModule = class RecordViewsPageRoutingModule {
};
RecordViewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecordViewsPageRoutingModule);



/***/ }),

/***/ "mkh9":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/record-views/record-views.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>record-views</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "nU/K":
/*!***************************************************!*\
  !*** ./src/app/record-views/record-views.page.ts ***!
  \***************************************************/
/*! exports provided: RecordViewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordViewsPage", function() { return RecordViewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_record_views_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./record-views.page.html */ "mkh9");
/* harmony import */ var _record_views_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record-views.page.scss */ "4N7H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RecordViewsPage = class RecordViewsPage {
    constructor() { }
    ngOnInit() {
    }
};
RecordViewsPage.ctorParameters = () => [];
RecordViewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-record-views',
        template: _raw_loader_record_views_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_record_views_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecordViewsPage);



/***/ }),

/***/ "yqNi":
/*!*****************************************************!*\
  !*** ./src/app/record-views/record-views.module.ts ***!
  \*****************************************************/
/*! exports provided: RecordViewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordViewsPageModule", function() { return RecordViewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _record_views_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record-views-routing.module */ "LO5U");
/* harmony import */ var _record_views_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./record-views.page */ "nU/K");







let RecordViewsPageModule = class RecordViewsPageModule {
};
RecordViewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _record_views_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordViewsPageRoutingModule"]
        ],
        declarations: [_record_views_page__WEBPACK_IMPORTED_MODULE_6__["RecordViewsPage"]]
    })
], RecordViewsPageModule);



/***/ })

}]);
//# sourceMappingURL=record-views-record-views-module-es2015.js.map