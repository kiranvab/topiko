(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addproduct-addproduct-module"],{

/***/ "7x3C":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addproduct/addproduct.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Products </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <div class=\"details-div\">\n  <ion-label>Product Name</ion-label>\n  <ion-input placeholder=\"Business / Store Name\"></ion-input>\n\n  <ion-label>Actual Price</ion-label>\n  <ion-input placeholder=\"Business / Store Name\"></ion-input>\n\n  <ion-label>Selling Price</ion-label>\n  <ion-input placeholder=\"Business / Store Name\"></ion-input>\n\n  <ion-label>Product Description</ion-label>\n  <ion-textarea></ion-textarea>\n\n  <ion-label>Product Images</ion-label>\n  <ion-card>\n  <ion-row>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><ion-button color=\"primary\" size=\"block\">Upload Images</ion-button></ion-col>\n  </ion-row>\n  </ion-card>\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col><ion-button size=\"block\" routerLink=\"/producttype\" color=\"light\">Back</ion-button></ion-col>\n    <ion-col><ion-button size=\"block\" routerLink=\"/dashboard\" color=\"warning\">Continue</ion-button></ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "83T4":
/*!***********************************************!*\
  !*** ./src/app/addproduct/addproduct.page.ts ***!
  \***********************************************/
/*! exports provided: AddproductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductPage", function() { return AddproductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addproduct_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addproduct.page.html */ "7x3C");
/* harmony import */ var _addproduct_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addproduct.page.scss */ "kBEq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddproductPage = class AddproductPage {
    constructor() { }
    ngOnInit() {
    }
};
AddproductPage.ctorParameters = () => [];
AddproductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addproduct',
        template: _raw_loader_addproduct_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addproduct_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddproductPage);



/***/ }),

/***/ "PYC4":
/*!*********************************************************!*\
  !*** ./src/app/addproduct/addproduct-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddproductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductPageRoutingModule", function() { return AddproductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproduct.page */ "83T4");




const routes = [
    {
        path: '',
        component: _addproduct_page__WEBPACK_IMPORTED_MODULE_3__["AddproductPage"]
    }
];
let AddproductPageRoutingModule = class AddproductPageRoutingModule {
};
AddproductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddproductPageRoutingModule);



/***/ }),

/***/ "kBEq":
/*!*************************************************!*\
  !*** ./src/app/addproduct/addproduct.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #122959;\n  font-family: Comfortaa;\n  color: #fff;\n}\n\nion-header {\n  border: 0;\n}\n\nion-input, ion-textarea {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  margin: 10px;\n  width: 95%;\n  padding-left: 10px !important;\n  color: #122959;\n}\n\nion-label {\n  padding: 10px;\n  color: #122959;\n}\n\nion-footer {\n  background: #eaeaea;\n  height: 60px;\n}\n\n.details-div {\n  position: absolute;\n  width: 96%;\n  bottom: 0;\n  background: #fff;\n  border-radius: 10px 10px 0 0;\n  padding: 10px;\n  margin: 8px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUVJLFNBQUE7QUFBSjs7QUFHQTtFQUVJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUtBO0VBRUksYUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTEoiLCJmaWxlIjoiYWRkcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMjI5NTk7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgXHJcbntcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWFcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzEyMjk1OVxyXG5cclxufVxyXG5cclxuaW9uLWxhYmVsIFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICMxMjI5NTk7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmRldGFpbHMtZGl2XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "qqFf":
/*!*************************************************!*\
  !*** ./src/app/addproduct/addproduct.module.ts ***!
  \*************************************************/
/*! exports provided: AddproductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductPageModule", function() { return AddproductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addproduct-routing.module */ "PYC4");
/* harmony import */ var _addproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addproduct.page */ "83T4");







let AddproductPageModule = class AddproductPageModule {
};
AddproductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddproductPageRoutingModule"]
        ],
        declarations: [_addproduct_page__WEBPACK_IMPORTED_MODULE_6__["AddproductPage"]]
    })
], AddproductPageModule);



/***/ })

}]);
//# sourceMappingURL=addproduct-addproduct-module-es2015.js.map