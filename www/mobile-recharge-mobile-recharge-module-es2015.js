(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-recharge-mobile-recharge-module"],{

/***/ "0MCu":
/*!***********************************************************!*\
  !*** ./src/app/mobile-recharge/mobile-recharge.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: center;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 1.3125em;\n  float: right;\n}\n\nion-segment {\n  background: #f5f5f5;\n  color: #707070;\n  font-size: 0.9375em;\n}\n\n.segment-button-checked {\n  --color-checked: #871178 !important;\n  color: #707070;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n}\n\n.first {\n  margin: 1.5em 1.125em;\n}\n\n.first p {\n  margin: 0.625em;\n}\n\n.left {\n  text-align: left;\n  font-size: 1em;\n  color: #22272a;\n}\n\n.right {\n  color: #707070;\n  font-size: 0.625em;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: right;\n  align-items: center;\n}\n\nion-item {\n  margin: 0.625em;\n  width: 100%;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.875em;\n  margin-bottom: 1.25em;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 1.25em;\n  width: 131px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vYmlsZS1yZWNoYXJnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQ0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLDBCQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFNSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFNSjs7QUFKQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFPSiIsImZpbGUiOiJtb2JpbGUtcmVjaGFyZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVhZFxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zMTI1ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1ZW07XHJcbn1cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjODcxMTc4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5pb24tc2VnbWVudCBpb24tbGFiZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5maXJzdCB7XHJcbiAgICBtYXJnaW46IDEuNWVtIDEuMTI1ZW07XHJcbn1cclxuLmZpcnN0IHAge1xyXG4gICAgbWFyZ2luOiAwLjYyNWVtO1xyXG59XHJcbi5sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjYyNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMS44NzVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcclxufVxyXG4uYnRuIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIHdpZHRoOiAxMzFweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "3LZ6":
/*!*********************************************************!*\
  !*** ./src/app/mobile-recharge/mobile-recharge.page.ts ***!
  \*********************************************************/
/*! exports provided: MobileRechargePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRechargePage", function() { return MobileRechargePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mobile_recharge_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mobile-recharge.page.html */ "xXkw");
/* harmony import */ var _mobile_recharge_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-recharge.page.scss */ "0MCu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MobileRechargePage = class MobileRechargePage {
    constructor() { }
    ngOnInit() {
    }
};
MobileRechargePage.ctorParameters = () => [];
MobileRechargePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mobile-recharge',
        template: _raw_loader_mobile_recharge_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mobile_recharge_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MobileRechargePage);



/***/ }),

/***/ "KC2/":
/*!*******************************************************************!*\
  !*** ./src/app/mobile-recharge/mobile-recharge-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MobileRechargePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRechargePageRoutingModule", function() { return MobileRechargePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mobile_recharge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-recharge.page */ "3LZ6");




const routes = [
    {
        path: '',
        component: _mobile_recharge_page__WEBPACK_IMPORTED_MODULE_3__["MobileRechargePage"]
    }
];
let MobileRechargePageRoutingModule = class MobileRechargePageRoutingModule {
};
MobileRechargePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobileRechargePageRoutingModule);



/***/ }),

/***/ "xXkw":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-recharge/mobile-recharge.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mobile Recharge</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment>\n    <ion-segment-button value=\"prepaid\">\n      <ion-label>Prepaid</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"postpaid\">\n      <ion-label>Postpaid</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-card class=\"first\">\n    <ion-row>\n      <ion-col class=\"left\">\n        <p>Payment</p>\n      </ion-col>\n      <ion-col class=\"right\">\n        <p>05/26/2021 <span>11:30AM</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-input placeholder=\"Prepaid mobile number\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Service Operator\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Recharge Amount\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button>Proceed</ion-button>\n    </ion-row>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "zdTX":
/*!***********************************************************!*\
  !*** ./src/app/mobile-recharge/mobile-recharge.module.ts ***!
  \***********************************************************/
/*! exports provided: MobileRechargePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRechargePageModule", function() { return MobileRechargePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mobile_recharge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-recharge-routing.module */ "KC2/");
/* harmony import */ var _mobile_recharge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-recharge.page */ "3LZ6");







let MobileRechargePageModule = class MobileRechargePageModule {
};
MobileRechargePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobile_recharge_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileRechargePageRoutingModule"]
        ],
        declarations: [_mobile_recharge_page__WEBPACK_IMPORTED_MODULE_6__["MobileRechargePage"]]
    })
], MobileRechargePageModule);



/***/ })

}]);
//# sourceMappingURL=mobile-recharge-mobile-recharge-module-es2015.js.map