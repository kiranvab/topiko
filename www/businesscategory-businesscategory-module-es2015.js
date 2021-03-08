(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["businesscategory-businesscategory-module"],{

/***/ "1SGM":
/*!*********************************************************************!*\
  !*** ./src/app/businesscategory/businesscategory-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BusinesscategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesscategoryPageRoutingModule", function() { return BusinesscategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _businesscategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./businesscategory.page */ "7D+3");




const routes = [
    {
        path: '',
        component: _businesscategory_page__WEBPACK_IMPORTED_MODULE_3__["BusinesscategoryPage"]
    }
];
let BusinesscategoryPageRoutingModule = class BusinesscategoryPageRoutingModule {
};
BusinesscategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusinesscategoryPageRoutingModule);



/***/ }),

/***/ "7D+3":
/*!***********************************************************!*\
  !*** ./src/app/businesscategory/businesscategory.page.ts ***!
  \***********************************************************/
/*! exports provided: BusinesscategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesscategoryPage", function() { return BusinesscategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_businesscategory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./businesscategory.page.html */ "FQIs");
/* harmony import */ var _businesscategory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./businesscategory.page.scss */ "Dw11");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BusinesscategoryPage = class BusinesscategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
BusinesscategoryPage.ctorParameters = () => [];
BusinesscategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-businesscategory',
        template: _raw_loader_businesscategory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_businesscategory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BusinesscategoryPage);



/***/ }),

/***/ "Dw11":
/*!*************************************************************!*\
  !*** ./src/app/businesscategory/businesscategory.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #122959;\n  font-family: Comfortaa;\n  color: #fff;\n}\n\nh5 {\n  color: #fff;\n  text-align: center;\n}\n\np {\n  font-size: 70%;\n  text-align: center;\n  padding: 0 5px;\n}\n\nimg {\n  padding: 0 10% 5% 10%;\n}\n\nion-card {\n  margin: 0;\n}\n\n.details-div {\n  position: absolute;\n  width: 96%;\n  bottom: 0;\n  background: #fff;\n  border-radius: 10px 10px 0 0;\n  padding: 10px;\n  margin: 8px;\n  margin-bottom: 0;\n}\n\nion-card {\n  margin: 0;\n  text-align: center;\n  padding: 10px;\n}\n\nion-footer {\n  background: #eaeaea;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ1c2luZXNzY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBRUksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUVJLFNBQUE7QUFBSjs7QUFHQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBRUksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUlBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0FBRkoiLCJmaWxlIjoiYnVzaW5lc3NjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMjI5NTk7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuaDUgXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnAgXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBwYWRkaW5nOiAwIDEwJSA1JSAxMCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkXHJcbntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRldGFpbHMtZGl2XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIFxyXG57XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmlvbi1mb290ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgIGhlaWdodDogNjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "FQIs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscategory/businesscategory.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n<h5>Select Shop Type</h5>\n<div>\n  <img src=\"assets/step2.png\">\n  </div>\n    <div class=\"details-div\">\n<ion-row>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n  <ion-col size=\"3\">\n    <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n    <p>Category Name</p>\n  </ion-col>\n</ion-row>\n    </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col><ion-button size=\"block\" routerLink=\"/businessdetails\" color=\"light\">Back</ion-button></ion-col>\n    <ion-col><ion-button size=\"block\" routerLink=\"/businessimages\" color=\"warning\">Continue</ion-button></ion-col>\n  </ion-row>\n</ion-footer>\n\n");

/***/ }),

/***/ "I7iv":
/*!*************************************************************!*\
  !*** ./src/app/businesscategory/businesscategory.module.ts ***!
  \*************************************************************/
/*! exports provided: BusinesscategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesscategoryPageModule", function() { return BusinesscategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _businesscategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./businesscategory-routing.module */ "1SGM");
/* harmony import */ var _businesscategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./businesscategory.page */ "7D+3");







let BusinesscategoryPageModule = class BusinesscategoryPageModule {
};
BusinesscategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _businesscategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinesscategoryPageRoutingModule"]
        ],
        declarations: [_businesscategory_page__WEBPACK_IMPORTED_MODULE_6__["BusinesscategoryPage"]]
    })
], BusinesscategoryPageModule);



/***/ })

}]);
//# sourceMappingURL=businesscategory-businesscategory-module-es2015.js.map