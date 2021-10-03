(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videocall-videocall-module"],{

/***/ "0R2u":
/*!*********************************************!*\
  !*** ./src/app/videocall/videocall.page.ts ***!
  \*********************************************/
/*! exports provided: VideocallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocallPage", function() { return VideocallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videocall.page.html */ "tyO+");
/* harmony import */ var _videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videocall.page.scss */ "zpFX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VideocallPage = class VideocallPage {
    constructor() { }
    ngOnInit() {
    }
};
VideocallPage.ctorParameters = () => [];
VideocallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videocall',
        template: _raw_loader_videocall_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videocall_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideocallPage);



/***/ }),

/***/ "6Ylz":
/*!***********************************************!*\
  !*** ./src/app/videocall/videocall.module.ts ***!
  \***********************************************/
/*! exports provided: VideocallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocallPageModule", function() { return VideocallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videocall-routing.module */ "S+8M");
/* harmony import */ var _videocall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videocall.page */ "0R2u");







let VideocallPageModule = class VideocallPageModule {
};
VideocallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _videocall_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideocallPageRoutingModule"]
        ],
        declarations: [_videocall_page__WEBPACK_IMPORTED_MODULE_6__["VideocallPage"]]
    })
], VideocallPageModule);



/***/ }),

/***/ "S+8M":
/*!*******************************************************!*\
  !*** ./src/app/videocall/videocall-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VideocallPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocallPageRoutingModule", function() { return VideocallPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _videocall_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videocall.page */ "0R2u");




const routes = [
    {
        path: '',
        component: _videocall_page__WEBPACK_IMPORTED_MODULE_3__["VideocallPage"]
    }
];
let VideocallPageRoutingModule = class VideocallPageRoutingModule {
};
VideocallPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideocallPageRoutingModule);



/***/ }),

/***/ "tyO+":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videocall/videocall.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>videocall</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "zpFX":
/*!***********************************************!*\
  !*** ./src/app/videocall/videocall.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb2NhbGwucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=videocall-videocall-module-es2015.js.map