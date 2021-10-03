(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addqr-addqr-module"],{

/***/ "+Q6C":
/*!***************************************!*\
  !*** ./src/app/addqr/addqr.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRxci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "SE9G":
/*!***********************************************!*\
  !*** ./src/app/addqr/addqr-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AddqrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddqrPageRoutingModule", function() { return AddqrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addqr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addqr.page */ "oLec");




const routes = [
    {
        path: '',
        component: _addqr_page__WEBPACK_IMPORTED_MODULE_3__["AddqrPage"]
    }
];
let AddqrPageRoutingModule = class AddqrPageRoutingModule {
};
AddqrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddqrPageRoutingModule);



/***/ }),

/***/ "Wz04":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addqr/addqr.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>addqr</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "o0VF":
/*!***************************************!*\
  !*** ./src/app/addqr/addqr.module.ts ***!
  \***************************************/
/*! exports provided: AddqrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddqrPageModule", function() { return AddqrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addqr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addqr-routing.module */ "SE9G");
/* harmony import */ var _addqr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addqr.page */ "oLec");







let AddqrPageModule = class AddqrPageModule {
};
AddqrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addqr_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddqrPageRoutingModule"]
        ],
        declarations: [_addqr_page__WEBPACK_IMPORTED_MODULE_6__["AddqrPage"]]
    })
], AddqrPageModule);



/***/ }),

/***/ "oLec":
/*!*************************************!*\
  !*** ./src/app/addqr/addqr.page.ts ***!
  \*************************************/
/*! exports provided: AddqrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddqrPage", function() { return AddqrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addqr_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addqr.page.html */ "Wz04");
/* harmony import */ var _addqr_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addqr.page.scss */ "+Q6C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddqrPage = class AddqrPage {
    constructor() { }
    ngOnInit() {
    }
};
AddqrPage.ctorParameters = () => [];
AddqrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addqr',
        template: _raw_loader_addqr_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addqr_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddqrPage);



/***/ })

}]);
//# sourceMappingURL=addqr-addqr-module-es2015.js.map