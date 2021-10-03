(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-here-shop-here-module"],{

/***/ "64X2":
/*!*******************************************************!*\
  !*** ./src/app/shop-here/shop-here-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ShopHerePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHerePageRoutingModule", function() { return ShopHerePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shop_here_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-here.page */ "oUAg");




const routes = [
    {
        path: '',
        component: _shop_here_page__WEBPACK_IMPORTED_MODULE_3__["ShopHerePage"]
    }
];
let ShopHerePageRoutingModule = class ShopHerePageRoutingModule {
};
ShopHerePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopHerePageRoutingModule);



/***/ }),

/***/ "KbDA":
/*!***********************************************!*\
  !*** ./src/app/shop-here/shop-here.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLWhlcmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "dML1":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-here/shop-here.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>shop-here</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "oUAg":
/*!*********************************************!*\
  !*** ./src/app/shop-here/shop-here.page.ts ***!
  \*********************************************/
/*! exports provided: ShopHerePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHerePage", function() { return ShopHerePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shop_here_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shop-here.page.html */ "dML1");
/* harmony import */ var _shop_here_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-here.page.scss */ "KbDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ShopHerePage = class ShopHerePage {
    constructor() { }
    ngOnInit() {
    }
};
ShopHerePage.ctorParameters = () => [];
ShopHerePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shop-here',
        template: _raw_loader_shop_here_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shop_here_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShopHerePage);



/***/ }),

/***/ "tQiC":
/*!***********************************************!*\
  !*** ./src/app/shop-here/shop-here.module.ts ***!
  \***********************************************/
/*! exports provided: ShopHerePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHerePageModule", function() { return ShopHerePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shop_here_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-here-routing.module */ "64X2");
/* harmony import */ var _shop_here_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-here.page */ "oUAg");







let ShopHerePageModule = class ShopHerePageModule {
};
ShopHerePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_here_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopHerePageRoutingModule"]
        ],
        declarations: [_shop_here_page__WEBPACK_IMPORTED_MODULE_6__["ShopHerePage"]]
    })
], ShopHerePageModule);



/***/ })

}]);
//# sourceMappingURL=shop-here-shop-here-module-es2015.js.map