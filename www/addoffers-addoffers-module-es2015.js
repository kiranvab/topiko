(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addoffers-addoffers-module"],{

/***/ "SAzb":
/*!***********************************************!*\
  !*** ./src/app/addoffers/addoffers.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #122959;\n  font-family: Comfortaa;\n  color: #fff;\n}\n\nion-card {\n  margin: 3px;\n}\n\nh5 {\n  color: #fff;\n  text-align: center;\n}\n\nion-footer {\n  background: #eaeaea;\n  height: 60px;\n}\n\n.addmore {\n  text-align: right;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZG9mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBRUksV0FBQTtBQUFKOztBQUdBO0VBRUksV0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFJQTtFQUVJLGlCQUFBO0VBQ0EsYUFBQTtBQUZKIiwiZmlsZSI6ImFkZG9mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMjI5NTk7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIFxyXG57XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuaDUgXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tZm9vdGVyXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmFkZG1vcmVcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "ZA9h":
/*!*********************************************!*\
  !*** ./src/app/addoffers/addoffers.page.ts ***!
  \*********************************************/
/*! exports provided: AddoffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddoffersPage", function() { return AddoffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addoffers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addoffers.page.html */ "pUJT");
/* harmony import */ var _addoffers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addoffers.page.scss */ "SAzb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddoffersPage = class AddoffersPage {
    constructor() { }
    ngOnInit() {
    }
};
AddoffersPage.ctorParameters = () => [];
AddoffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addoffers',
        template: _raw_loader_addoffers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addoffers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddoffersPage);



/***/ }),

/***/ "pUJT":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addoffers/addoffers.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h5>Choose Your service</h5>\n  <ion-card>\n    <ion-item>\n      <ion-label>Select Sub Category</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Category</ion-select-option>\n        <ion-select-option value=\"m\">Category</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Select Need</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Select Need</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Select City</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Hyderabad</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-card>\n  <h5>Offer Details</h5>\n  <ion-card>\n  <ion-item>\n    <ion-label position=\"stacked\">Offer Title</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Actual Price </ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Offer Price</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Start Date</ion-label>\n    <ion-datetime value=\"2021-01-01T15:43:40.394Z\" display-timezone=\"utc\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">End Date</ion-label>\n    <ion-datetime value=\"2021-01-31T15:43:40.394Z\" display-timezone=\"utc\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Terms & Conditions</ion-label>\n    <ion-textarea clearOnEdit=\"true\"></ion-textarea>\n  </ion-item>\n  <div class=\"addmore\"><a href=\"#\">Add more</a></div>\n  <ion-item>\n    <ion-label position=\"stacked\">Description</ion-label>\n    <ion-textarea clearOnEdit=\"true\"></ion-textarea>\n  </ion-item>\n</ion-card>\n\n<h5>Offer images</h5>\n  <ion-card>\n  <ion-row>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img src=\"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047546.jpg\">\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"text-align: right;\">\n    <ion-col><ion-button color=\"primary\"  size=\"small\">Upload Images</ion-button></ion-col>\n  </ion-row>\n  </ion-card>\n  \n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-checkbox></ion-checkbox>\n      </ion-col>\n      <ion-col style=\"color: #fff; font-size: 12px; padding:15px\">\n        I Accept the terms and conditon of topiko \n      </ion-col>\n    </ion-row>\n    \n  \n    \n</ion-content>\n\n<ion-footer>\n    <ion-button size=\"block\" routerLink=\"/dashboard\" color=\"warning\">Submit</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "qZg6":
/*!***********************************************!*\
  !*** ./src/app/addoffers/addoffers.module.ts ***!
  \***********************************************/
/*! exports provided: AddoffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddoffersPageModule", function() { return AddoffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addoffers-routing.module */ "yTla");
/* harmony import */ var _addoffers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addoffers.page */ "ZA9h");







let AddoffersPageModule = class AddoffersPageModule {
};
AddoffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddoffersPageRoutingModule"]
        ],
        declarations: [_addoffers_page__WEBPACK_IMPORTED_MODULE_6__["AddoffersPage"]]
    })
], AddoffersPageModule);



/***/ }),

/***/ "yTla":
/*!*******************************************************!*\
  !*** ./src/app/addoffers/addoffers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddoffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddoffersPageRoutingModule", function() { return AddoffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addoffers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addoffers.page */ "ZA9h");




const routes = [
    {
        path: '',
        component: _addoffers_page__WEBPACK_IMPORTED_MODULE_3__["AddoffersPage"]
    }
];
let AddoffersPageRoutingModule = class AddoffersPageRoutingModule {
};
AddoffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddoffersPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=addoffers-addoffers-module-es2015.js.map