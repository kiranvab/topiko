(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enquiries-enquiries-module"],{

/***/ "9D9p":
/*!***********************************************!*\
  !*** ./src/app/enquiries/enquiries.module.ts ***!
  \***********************************************/
/*! exports provided: EnquiriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesPageModule", function() { return EnquiriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _enquiries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enquiries-routing.module */ "GmC5");
/* harmony import */ var _enquiries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enquiries.page */ "TKAw");







let EnquiriesPageModule = class EnquiriesPageModule {
};
EnquiriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _enquiries_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnquiriesPageRoutingModule"]
        ],
        declarations: [_enquiries_page__WEBPACK_IMPORTED_MODULE_6__["EnquiriesPage"]]
    })
], EnquiriesPageModule);



/***/ }),

/***/ "GmC5":
/*!*******************************************************!*\
  !*** ./src/app/enquiries/enquiries-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EnquiriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesPageRoutingModule", function() { return EnquiriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _enquiries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enquiries.page */ "TKAw");




const routes = [
    {
        path: '',
        component: _enquiries_page__WEBPACK_IMPORTED_MODULE_3__["EnquiriesPage"]
    }
];
let EnquiriesPageRoutingModule = class EnquiriesPageRoutingModule {
};
EnquiriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnquiriesPageRoutingModule);



/***/ }),

/***/ "TC2L":
/*!***********************************************!*\
  !*** ./src/app/enquiries/enquiries.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col p {\n  font-size: 16px;\n  color: #5e1c57;\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: 20px;\n  padding-top: 15px;\n  color: #1c4145;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVucXVpcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoiZW5xdWlyaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wgcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzVlMWM1NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24taWNvbiBcclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzFjNDE0NTtcclxufSJdfQ== */");

/***/ }),

/***/ "TKAw":
/*!*********************************************!*\
  !*** ./src/app/enquiries/enquiries.page.ts ***!
  \*********************************************/
/*! exports provided: EnquiriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesPage", function() { return EnquiriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enquiries_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enquiries.page.html */ "eX79");
/* harmony import */ var _enquiries_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enquiries.page.scss */ "TC2L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EnquiriesPage = class EnquiriesPage {
    constructor() { }
    ngOnInit() {
    }
};
EnquiriesPage.ctorParameters = () => [];
EnquiriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-enquiries',
        template: _raw_loader_enquiries_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_enquiries_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnquiriesPage);



/***/ }),

/***/ "eX79":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enquiries/enquiries.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Enquiries</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n<ion-row routerLink='/callenquiry'>\n  <ion-col size=\"2\"><img src=\"assets/customer_calls.png\"></ion-col>\n  <ion-col size=\"9\"><p>Customer Calls</p></ion-col>\n  <ion-col size=\"1\"><ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-col>\n</ion-row>\n</ion-card>\n\n<ion-card>\n  <ion-row routerLink=\"/customerenquiry\">\n    <ion-col size=\"2\"><img src=\"assets/enquiry.png\"></ion-col>\n    <ion-col size=\"9\"><p>Customer Eqnuiries (5)</p></ion-col>\n    <ion-col size=\"1\"><ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-col>\n  </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row routerLink=\"/reviews\">\n      <ion-col size=\"2\"><img src=\"assets/reviews.png\"></ion-col>\n      <ion-col size=\"9\"><p>Customer Reviews (1)</p></ion-col>\n      <ion-col size=\"1\"><ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-col>\n    </ion-row>\n    </ion-card>\n\n    <ion-card>\n      <ion-row routerLink='/message'>\n        <ion-col size=\"2\"><img src=\"assets/chat.png\"></ion-col>\n        <ion-col size=\"9\"><p>Customer Chats (5)</p></ion-col>\n        <ion-col size=\"1\"><ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-col>\n      </ion-row>\n      </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=enquiries-enquiries-module-es2015.js.map