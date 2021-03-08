(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selectcategory-selectcategory-module"],{

/***/ "7syG":
/*!*********************************************************!*\
  !*** ./src/app/selectcategory/selectcategory.module.ts ***!
  \*********************************************************/
/*! exports provided: SelectcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectcategoryPageModule", function() { return SelectcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _selectcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectcategory-routing.module */ "zqld");
/* harmony import */ var _selectcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectcategory.page */ "MGzQ");







let SelectcategoryPageModule = class SelectcategoryPageModule {
};
SelectcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _selectcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectcategoryPageRoutingModule"]
        ],
        declarations: [_selectcategory_page__WEBPACK_IMPORTED_MODULE_6__["SelectcategoryPage"]]
    })
], SelectcategoryPageModule);



/***/ }),

/***/ "BCRb":
/*!*********************************************************!*\
  !*** ./src/app/selectcategory/selectcategory.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #5e1c57;\n  font-family: Comfortaa;\n  padding: 10em;\n}\n\n.curve {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #813f7a;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 21%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-6deg);\n  z-index: -1;\n}\n\n.curve1 {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #672560;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 15%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-25deg);\n  z-index: -1;\n}\n\n.curve2 {\n  display: block;\n  width: 135%;\n  height: 180px;\n  background-color: #5e1c57;\n  border-radius: 50%;\n  position: absolute;\n  top: 14%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-16deg);\n  z-index: -1;\n}\n\n.logo {\n  margin: 0 auto;\n  top: 8%;\n  position: absolute;\n  text-align: center;\n}\n\n.logo img {\n  width: 30%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.selection-block {\n  position: relative;\n  top: 45%;\n  left: 5%;\n  margin-right: 15% !important;\n  color: #fff;\n}\n\n.signup-content {\n  padding: 1.5rem;\n}\n\n.login-btn {\n  color: purple;\n  text-align: right;\n  float: right;\n  padding-top: 10px;\n  font-size: 60px;\n  position: absolute;\n  right: 0.2em;\n}\n\n.login-text {\n  font-size: 1.5rem;\n}\n\n.footer-img {\n  position: absolute;\n  bottom: -5px;\n  z-index: -1;\n}\n\nion-input {\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  margin-top: 10px;\n}\n\nion-item {\n  --inner-border-width:0;\n  --background:transparent;\n}\n\n.back-img {\n  position: absolute;\n  top: 20%;\n}\n\n.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h,\n.item.sc-ion-label-md-h, .item .sc-ion-label-md-h,\n.select-icon,\n.select-text,\nion-select {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlbGVjdGNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFFRSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHRTtFQUVFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHRTtFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFHRTtFQUVFLGVBQUE7QUFESjs7QUFHRTtFQUVFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFHRTtFQUVFLGlCQUFBO0FBREo7O0FBSUU7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUU7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQURKOztBQUdFO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0FBREo7O0FBR0U7Ozs7O0VBTUUsV0FBQTtBQURKIiwiZmlsZSI6InNlbGVjdGNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1ZTFjNTc7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgcGFkZGluZzogMTBlbTtcclxuICB9XHJcbiAgXHJcbiAgLmN1cnZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxM2Y3YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJS82MCUgNjAlIDQwJSA0MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIxJTtcclxuICAgIG1hcmdpbjogLTIwJSAwIDAgLTIwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAuY3VydmUxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjcyNTYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlLzYwJSA2MCUgNDAlIDQwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbWFyZ2luOiAtMjAlIDAgMCAtMjAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAuY3VydmUyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEzNSU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlMWM1NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQlO1xyXG4gICAgbWFyZ2luOiAtMjAlIDAgMCAtMjAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBcclxuICB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDo4JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvZ28gaW1nXHJcbiAge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2VsZWN0aW9uLWJsb2NrXHJcbiAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLnNpZ251cC1jb250ZW50XHJcbiAge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuICAubG9naW4tYnRuXHJcbiAge1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjAuMmVtO1xyXG4gIH1cclxuICAubG9naW4tdGV4dFxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWltZ1xyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBpb24taW5wdXR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDowOyAgXHJcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5iYWNrLWltZ1xyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gIH1cclxuICAuaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgsXHJcbiAgLml0ZW0uc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCxcclxuICAuc2VsZWN0LWljb24sXHJcbiAgLnNlbGVjdC10ZXh0LFxyXG4gIGlvbi1zZWxlY3QgXHJcbiAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "MGzQ":
/*!*******************************************************!*\
  !*** ./src/app/selectcategory/selectcategory.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectcategoryPage", function() { return SelectcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_selectcategory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./selectcategory.page.html */ "iMh4");
/* harmony import */ var _selectcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectcategory.page.scss */ "BCRb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SelectcategoryPage = class SelectcategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
SelectcategoryPage.ctorParameters = () => [];
SelectcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-selectcategory',
        template: _raw_loader_selectcategory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selectcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectcategoryPage);



/***/ }),

/***/ "iMh4":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectcategory/selectcategory.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"padding:10em\">\n  <div style=\"padding:10px 0 0 10px\">\n  <ion-label color=\"light\">Select Category</ion-label>\n</div>\n  <div style=\"padding:5px\">\n  <ion-row>\n    <ion-col>\n      <ion-chip color=\"light\">\n        <ion-label>Category Name</ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n</div>\n<div style=\"padding:10px 0 0 10px\">\n  <ion-label color=\"light\">Select Services</ion-label>\n</div>\n  <div style=\"padding:5px\">\n  <ion-row>\n    <ion-col>\n      <ion-chip color=\"light\">\n        <ion-label>Service Name</ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n</div>\n<div style=\"margin:0 auto; width:90%\">\n<ion-button expand=\"block\" color=\"danger\" routerLink=\"/home\">Submit</ion-button>\n</div>\n\n  \n\n  <div class=\"footer-img\">\n    <img src=\"assets/footer-img.png\" />\n  </div>\n\n</ion-content>\n\n  ");

/***/ }),

/***/ "zqld":
/*!*****************************************************************!*\
  !*** ./src/app/selectcategory/selectcategory-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectcategoryPageRoutingModule", function() { return SelectcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _selectcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectcategory.page */ "MGzQ");




const routes = [
    {
        path: '',
        component: _selectcategory_page__WEBPACK_IMPORTED_MODULE_3__["SelectcategoryPage"]
    }
];
let SelectcategoryPageRoutingModule = class SelectcategoryPageRoutingModule {
};
SelectcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectcategoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=selectcategory-selectcategory-module-es2015.js.map