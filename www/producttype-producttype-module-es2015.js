(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producttype-producttype-module"],{

/***/ "OwMa":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producttype/producttype.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<h2>how do you want to add products?</h2>\n<div class=\"selction-div\">\n<ion-card  (click)=\"showcatalog()\">\n  <ion-row>\n    <ion-col size=\"3\">\n      <img src=\"assets/list.png\">\n    </ion-col>\n    <ion-col>\n      <h3>Choose From our List</h3>\n    </ion-col>\n    <ion-col size=\"2\" class=\"checkbox\">\n    \n    </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-card routerLink=\"/addproduct\">\n  <ion-row>\n    <ion-col size=\"3\">\n      <img src=\"assets/new.png\">\n    </ion-col>\n    <ion-col>\n      <h3>Create New Product</h3>\n    </ion-col>\n    <ion-col size=\"2\" class=\"checkbox\">\n    \n    </ion-col>\n  </ion-row>\n</ion-card>\n</div>\n<div *ngIf=\"catalog\">\n  <div class=\"close\" (click)=\"close()\"><ion-icon name=\"close-outline\"></ion-icon></div>\n\n<div class=\"catalog-div\">\n  <ion-badge color=\"warning\">Limited Time offer</ion-badge>\n  <ion-row>\n    <ion-col>\n      <h3>Free Catalog Builder</h3>\n      <p>Add Porducts in your catalog for free</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <img src=\"assets/catalog.png\">\n    </ion-col>\n  </ion-row>\n  <ion-button size=\"block\" routerLink=\"/productcategory\"> Explore categories</ion-button>\n</div>\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-button size=\"block\" routerLink=\"/dashboard\" shape=\"round\" color=\"warning\">Continue</ion-button>\n</ion-footer>");

/***/ }),

/***/ "WmHL":
/*!***************************************************!*\
  !*** ./src/app/producttype/producttype.module.ts ***!
  \***************************************************/
/*! exports provided: ProducttypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducttypePageModule", function() { return ProducttypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _producttype_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producttype-routing.module */ "t6eb");
/* harmony import */ var _producttype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producttype.page */ "uL7C");







let ProducttypePageModule = class ProducttypePageModule {
};
ProducttypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _producttype_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProducttypePageRoutingModule"]
        ],
        declarations: [_producttype_page__WEBPACK_IMPORTED_MODULE_6__["ProducttypePage"]]
    })
], ProducttypePageModule);



/***/ }),

/***/ "cZA7":
/*!***************************************************!*\
  !*** ./src/app/producttype/producttype.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #122959;\n  font-family: Comfortaa;\n  color: #fff;\n}\n\nion-header {\n  border: 0;\n}\n\nh2 {\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n}\n\n.selction-div {\n  padding-top: 5%;\n}\n\n.checkbox {\n  padding: 10% 0;\n}\n\nion-badge {\n  padding: 10px;\n}\n\n.catalog-div {\n  position: fixed;\n  background: #fff;\n  top: 0;\n  width: 94%;\n  margin: 3%;\n  height: 100%;\n  border-radius: 25px;\n  padding: 60px 20px;\n}\n\n.close {\n  position: absolute;\n  top: 20px;\n  color: #e91e63;\n  font-size: 30px;\n  background: #cacaca;\n  border-radius: 50%;\n  z-index: 999;\n  right: 5%;\n  height: 30px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3R0eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFFSSxTQUFBO0FBQUo7O0FBRUE7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBR0E7RUFFSSxjQUFBO0FBREo7O0FBSUE7RUFFSSxhQUFBO0FBRko7O0FBSUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhKIiwiZmlsZSI6InByb2R1Y3R0eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzEyMjk1OTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWhlYWRlciBcclxue1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcbmgyXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnNlbGN0aW9uLWRpdlxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbi5jaGVja2JveCBcclxue1xyXG4gICAgcGFkZGluZzogMTAlIDA7XHJcbn1cclxuXHJcbmlvbi1iYWRnZVxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jYXRhbG9nLWRpdiBcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxufVxyXG5cclxuLmNsb3NlXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGNvbG9yOiAjZTkxZTYzO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NhY2FjYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "t6eb":
/*!***********************************************************!*\
  !*** ./src/app/producttype/producttype-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProducttypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducttypePageRoutingModule", function() { return ProducttypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _producttype_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producttype.page */ "uL7C");




const routes = [
    {
        path: '',
        component: _producttype_page__WEBPACK_IMPORTED_MODULE_3__["ProducttypePage"]
    }
];
let ProducttypePageRoutingModule = class ProducttypePageRoutingModule {
};
ProducttypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProducttypePageRoutingModule);



/***/ }),

/***/ "uL7C":
/*!*************************************************!*\
  !*** ./src/app/producttype/producttype.page.ts ***!
  \*************************************************/
/*! exports provided: ProducttypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducttypePage", function() { return ProducttypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_producttype_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./producttype.page.html */ "OwMa");
/* harmony import */ var _producttype_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producttype.page.scss */ "cZA7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProducttypePage = class ProducttypePage {
    constructor() {
        this.catalog = false;
    }
    showcatalog() {
        if (this.catalog == true) {
            this.catalog = false;
        }
        else {
            this.catalog = true;
        }
    }
    close() {
        this.catalog = false;
    }
    ngOnInit() {
    }
};
ProducttypePage.ctorParameters = () => [];
ProducttypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-producttype',
        template: _raw_loader_producttype_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_producttype_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProducttypePage);



/***/ })

}]);
//# sourceMappingURL=producttype-producttype-module-es2015.js.map