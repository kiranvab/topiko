(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pin-pin-module"],{

/***/ "BPIG":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pin/pin.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-back-button></ion-back-button>\n  <!-- <div class=\"curve\"></div>\n  <div class=\"curve1\"></div>\n  <div class=\"curve2\"></div> -->\n  <div class=\"back-img\">\n    <img src=\"assets/back.png\" >\n  </div>\n  \n  <div class=\"logo\">\n    <img src=\"assets/logo.png\"/>\n  </div>\n\n  <div class=\"login-block\">\n    <h3>MPIN</h3>\n    <ion-item>\n      <table width=\"100%\">\n        <tr>\n          <td>\n            <ion-input type=\"text\" #otp1 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\">\n            </ion-input>\n          </td>\n          <td>\n            <ion-input type=\"text\" #otp2 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\">\n            </ion-input>\n          </td>\n          <td>\n            <ion-input type=\"text\" #otp3 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\" >\n            </ion-input>\n          </td>\n          <td>\n            <ion-input type=\"text\" #otp4 class=\"otp\" pattern=\"[0-9]{6}\" maxlength=\"1\" size=\"1\">\n            </ion-input>\n          </td>\n        </tr>\n      </table>\n    </ion-item>\n    <p class=\"forgot\">Forgot MPIN</p>\n    <ion-button expand=\"block\" routerLink=\"/home\">Login</ion-button>\n  </div>\n\n  <div class=\"footer-img\">\n    <img src=\"assets/footer-img.png\" />\n  </div>\n\n   \n</ion-content>");

/***/ }),

/***/ "Fzu4":
/*!*********************************!*\
  !*** ./src/app/pin/pin.page.ts ***!
  \*********************************/
/*! exports provided: PinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPage", function() { return PinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pin.page.html */ "BPIG");
/* harmony import */ var _pin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pin.page.scss */ "SpuY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PinPage = class PinPage {
    constructor() { }
    ngOnInit() {
    }
};
PinPage.ctorParameters = () => [];
PinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pin',
        template: _raw_loader_pin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PinPage);



/***/ }),

/***/ "SpuY":
/*!***********************************!*\
  !*** ./src/app/pin/pin.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #5e1c57;\n  font-family: Comfortaa;\n}\n\n.curve {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #813f7a;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 21%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-6deg);\n  z-index: -1;\n}\n\n.curve1 {\n  display: block;\n  width: 150%;\n  height: 180px;\n  background-color: #672560;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  position: absolute;\n  top: 15%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-25deg);\n  z-index: -1;\n}\n\n.curve2 {\n  display: block;\n  width: 135%;\n  height: 180px;\n  background-color: #5e1c57;\n  border-radius: 50%;\n  position: absolute;\n  top: 14%;\n  margin: -20% 0 0 -20%;\n  transform: rotate(-16deg);\n  z-index: -1;\n}\n\n.logo {\n  margin: 0 auto;\n  top: 8%;\n  position: absolute;\n  text-align: center;\n}\n\n.logo img {\n  width: 30%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.login-block {\n  position: relative;\n  top: 45%;\n  left: 5%;\n  margin-right: 15% !important;\n  color: #fff;\n}\n\n.signup-content {\n  padding: 1.5rem;\n}\n\n.login-btn {\n  color: purple;\n  text-align: right;\n  float: right;\n  padding-top: 10px;\n  font-size: 60px;\n  position: absolute;\n  right: 0.2em;\n}\n\n.login-text {\n  font-size: 1.5rem;\n}\n\n.footer-img {\n  position: absolute;\n  bottom: -5px;\n  z-index: -1;\n}\n\nion-input {\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  margin-top: 10px;\n}\n\nion-item {\n  --inner-border-width:0;\n  --background:transparent;\n}\n\n.back-img {\n  position: absolute;\n  top: 20%;\n}\n\n.forgot {\n  text-align: right;\n  font-size: 12px;\n  padding-right: 5%;\n}\n\n.otp {\n  color: #fff;\n  border-style: none;\n  width: 60px;\n  height: 60px;\n  font-size: 32px;\n  text-align: center;\n}\n\ntd {\n  border: 1px solid #813f7a;\n}\n\ntable {\n  border-collapse: collapse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFFSSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUVJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFHQTtFQUVJLGVBQUE7QUFESjs7QUFHQTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFHQTtFQUVJLGlCQUFBO0FBREo7O0FBSUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtBQURKOztBQUdBO0VBRUksa0JBQUE7RUFDQSxRQUFBO0FBREo7O0FBR0E7RUFFRSxpQkFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJRTtFQUNFLHlCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtBQURKIiwiZmlsZSI6InBpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNWUxYzU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxufVxyXG5cclxuLmN1cnZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxM2Y3YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJS82MCUgNjAlIDQwJSA0MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIxJTtcclxuICAgIG1hcmdpbjogLTIwJSAwIDAgLTIwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmN1cnZlMSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzY3MjU2MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJS82MCUgNjAlIDQwJSA0MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIG1hcmdpbjogLTIwJSAwIDAgLTIwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIC5jdXJ2ZTIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTM1JTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWUxYzU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNCU7XHJcbiAgICBtYXJnaW46IC0yMCUgMCAwIC0yMCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuLmxvZ28gXHJcbntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOjglO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dvIGltZ1xyXG57XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luLWJsb2NrXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZ251cC1jb250ZW50XHJcbntcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG4ubG9naW4tYnRuXHJcbntcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDowLjJlbTtcclxufVxyXG4ubG9naW4tdGV4dFxyXG57XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1pbWdcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIFxyXG5pb24taXRlbXtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7ICBcclxuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICB9XHJcbi5iYWNrLWltZ1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxufVxyXG4uZm9yZ290XHJcbntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcbi5vdHAge1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgxM2Y3YTtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9Il19 */");

/***/ }),

/***/ "cCD0":
/*!***********************************!*\
  !*** ./src/app/pin/pin.module.ts ***!
  \***********************************/
/*! exports provided: PinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageModule", function() { return PinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pin-routing.module */ "lgGr");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pin.page */ "Fzu4");







let PinPageModule = class PinPageModule {
};
PinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pin_routing_module__WEBPACK_IMPORTED_MODULE_5__["PinPageRoutingModule"]
        ],
        declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]]
    })
], PinPageModule);



/***/ }),

/***/ "lgGr":
/*!*******************************************!*\
  !*** ./src/app/pin/pin-routing.module.ts ***!
  \*******************************************/
/*! exports provided: PinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageRoutingModule", function() { return PinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pin.page */ "Fzu4");




const routes = [
    {
        path: '',
        component: _pin_page__WEBPACK_IMPORTED_MODULE_3__["PinPage"]
    }
];
let PinPageRoutingModule = class PinPageRoutingModule {
};
PinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PinPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pin-pin-module-es2015.js.map