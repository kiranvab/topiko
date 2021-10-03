(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["businesses-service-businesses-service-module"],{

/***/ "1ZJY":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesses-service/businesses-service.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>businesses-service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "D1pn":
/*!*************************************************************************!*\
  !*** ./src/app/businesses-service/businesses-service-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BusinessesServicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessesServicePageRoutingModule", function() { return BusinessesServicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _businesses_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./businesses-service.page */ "mA5d");




const routes = [
    {
        path: '',
        component: _businesses_service_page__WEBPACK_IMPORTED_MODULE_3__["BusinessesServicePage"]
    }
];
let BusinessesServicePageRoutingModule = class BusinessesServicePageRoutingModule {
};
BusinessesServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusinessesServicePageRoutingModule);



/***/ }),

/***/ "eCS+":
/*!*****************************************************************!*\
  !*** ./src/app/businesses-service/businesses-service.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzc2VzLXNlcnZpY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "mA5d":
/*!***************************************************************!*\
  !*** ./src/app/businesses-service/businesses-service.page.ts ***!
  \***************************************************************/
/*! exports provided: BusinessesServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessesServicePage", function() { return BusinessesServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_businesses_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./businesses-service.page.html */ "1ZJY");
/* harmony import */ var _businesses_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./businesses-service.page.scss */ "eCS+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BusinessesServicePage = class BusinessesServicePage {
    constructor() { }
    ngOnInit() {
    }
};
BusinessesServicePage.ctorParameters = () => [];
BusinessesServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-businesses-service',
        template: _raw_loader_businesses_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_businesses_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BusinessesServicePage);



/***/ }),

/***/ "qZOI":
/*!*****************************************************************!*\
  !*** ./src/app/businesses-service/businesses-service.module.ts ***!
  \*****************************************************************/
/*! exports provided: BusinessesServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessesServicePageModule", function() { return BusinessesServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _businesses_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./businesses-service-routing.module */ "D1pn");
/* harmony import */ var _businesses_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./businesses-service.page */ "mA5d");







let BusinessesServicePageModule = class BusinessesServicePageModule {
};
BusinessesServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _businesses_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessesServicePageRoutingModule"]
        ],
        declarations: [_businesses_service_page__WEBPACK_IMPORTED_MODULE_6__["BusinessesServicePage"]]
    })
], BusinessesServicePageModule);



/***/ })

}]);
//# sourceMappingURL=businesses-service-businesses-service-module-es2015.js.map