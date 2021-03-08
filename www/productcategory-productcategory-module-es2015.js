(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productcategory-productcategory-module"],{

/***/ "NWqg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productcategory/productcategory.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h2>Explore Categories</h2>\n  <ion-card color=\"success\">\n<ion-row>\n  <ion-col>\n    <h4>Grocery / General Store <br><ion-icon name=\"chevron-forward-outline\"></ion-icon></h4>\n  </ion-col>\n  <ion-col>\n    <img src=\"assets/grocery.png\">\n  </ion-col>\n</ion-row>\n  </ion-card>\n  \n\n  <ion-card color=\"danger\">\n    <ion-row>\n      <ion-col>\n        <h4>Grocery / Personal Care <br><ion-icon name=\"chevron-forward-outline\"></ion-icon></h4>\n      </ion-col>\n      <ion-col>\n        <img src=\"assets/personal.png\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card color=\"warning\">\n    <ion-row>\n      <ion-col>\n        <h4>Fruits & Veetables <br><ion-icon name=\"chevron-forward-outline\"></ion-icon></h4>\n      </ion-col>\n      <ion-col>\n        <img src=\"assets/fruits.png\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card color=\"secondary\">\n    <ion-row>\n      <ion-col>\n        <h4>Milk & Milks Products <br><ion-icon name=\"chevron-forward-outline\"></ion-icon></h4>\n        \n      </ion-col>\n      <ion-col>\n        <img src=\"assets/milk.png\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "TXLc":
/*!***********************************************************!*\
  !*** ./src/app/productcategory/productcategory.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcategoryPageModule", function() { return ProductcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _productcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productcategory-routing.module */ "VZM/");
/* harmony import */ var _productcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productcategory.page */ "y3Db");







let ProductcategoryPageModule = class ProductcategoryPageModule {
};
ProductcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _productcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductcategoryPageRoutingModule"]
        ],
        declarations: [_productcategory_page__WEBPACK_IMPORTED_MODULE_6__["ProductcategoryPage"]]
    })
], ProductcategoryPageModule);



/***/ }),

/***/ "VZM/":
/*!*******************************************************************!*\
  !*** ./src/app/productcategory/productcategory-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcategoryPageRoutingModule", function() { return ProductcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _productcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productcategory.page */ "y3Db");




const routes = [
    {
        path: '',
        component: _productcategory_page__WEBPACK_IMPORTED_MODULE_3__["ProductcategoryPage"]
    }
];
let ProductcategoryPageRoutingModule = class ProductcategoryPageRoutingModule {
};
ProductcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductcategoryPageRoutingModule);



/***/ }),

/***/ "l2wS":
/*!***********************************************************!*\
  !*** ./src/app/productcategory/productcategory.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: #122959;\n  padding: 10px 20px;\n}\n\nh4 {\n  padding: 10px 5px;\n  font-size: 18px;\n}\n\nh4 ion-icon {\n  font-size: 20px;\n  margin-bottom: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RjYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0FBSEoiLCJmaWxlIjoicHJvZHVjdGNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMlxyXG57XHJcbiAgICBjb2xvcjogIzEyMjk1OTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuaDRcclxue1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmg0IGlvbi1pY29uIFxyXG57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG59Il19 */");

/***/ }),

/***/ "y3Db":
/*!*********************************************************!*\
  !*** ./src/app/productcategory/productcategory.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcategoryPage", function() { return ProductcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_productcategory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./productcategory.page.html */ "NWqg");
/* harmony import */ var _productcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productcategory.page.scss */ "l2wS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProductcategoryPage = class ProductcategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductcategoryPage.ctorParameters = () => [];
ProductcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-productcategory',
        template: _raw_loader_productcategory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_productcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductcategoryPage);



/***/ })

}]);
//# sourceMappingURL=productcategory-productcategory-module-es2015.js.map