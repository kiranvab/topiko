(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["record-view-record-view-module"],{

/***/ "+ZGF":
/*!***************************************************!*\
  !*** ./src/app/record-view/record-view.module.ts ***!
  \***************************************************/
/*! exports provided: RecordViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordViewPageModule", function() { return RecordViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _record_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record-view-routing.module */ "k0sP");
/* harmony import */ var _record_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./record-view.page */ "TM1j");







let RecordViewPageModule = class RecordViewPageModule {
};
RecordViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _record_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordViewPageRoutingModule"]
        ],
        declarations: [_record_view_page__WEBPACK_IMPORTED_MODULE_6__["RecordViewPage"]]
    })
], RecordViewPageModule);



/***/ }),

/***/ "TM1j":
/*!*************************************************!*\
  !*** ./src/app/record-view/record-view.page.ts ***!
  \*************************************************/
/*! exports provided: RecordViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordViewPage", function() { return RecordViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_record_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./record-view.page.html */ "iE0F");
/* harmony import */ var _record_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record-view.page.scss */ "xJpa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RecordViewPage = class RecordViewPage {
    constructor() { }
    ngOnInit() {
    }
};
RecordViewPage.ctorParameters = () => [];
RecordViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-record-view',
        template: _raw_loader_record_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_record_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecordViewPage);



/***/ }),

/***/ "iE0F":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/record-view/record-view.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Record</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col>\n      <p>Total Viewed- <span>140</span></p>\n    </ion-col>\n    <ion-col>\n      <div class=\"select\">\n        <ion-select placeholder=\"Select One\" value=\"recent\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"recent\" selected>Recent</ion-select-option>\n          <ion-select-option value=\"like\">Viewed</ion-select-option>\n          <ion-select-option value=\"favourites\">Customer</ion-select-option>\n          <ion-select-option value=\"comments\">Favourites</ion-select-option>\n          <ion-select-option>Call Records</ion-select-option>\n          <ion-select-option>Employee</ion-select-option>\n          <ion-select-option>Report</ion-select-option>\n          <ion-select-option>Offer History</ion-select-option>\n          <ion-select-option>Blocked</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-card class=\"first\" routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"name text-overflow\">\n        <p class=\"pclass\">Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p class=\"pclass\">Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time text-overflow\" size=\"2.8\">\n        <p>12:04PM</p>\n        <ion-row class=\"badge\">\n          <ion-badge color=\"primary\">1</ion-badge>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"name text-overflow\">\n        <p class=\"pclass\">Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p class=\"pclass\">Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time text-overflow\" size=\"2.8\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"name text-overflow\">\n        <p class=\"pclass\">Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p class=\"pclass\">Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time text-overflow\" size=\"2.8\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"name text-overflow\">\n        <p class=\"pclass\">Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p class=\"pclass\">Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time text-overflow\" size=\"2.8\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"name text-overflow\">\n        <p class=\"pclass\">Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p class=\"pclass\">Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time text-overflow\" size=\"2.8\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"name text-overflow\">\n        <p class=\"pclass\">Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p class=\"pclass\">Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time text-overflow\" size=\"2.8\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"name text-overflow\">\n        <p class=\"pclass\">Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p class=\"pclass\">Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time text-overflow\" size=\"2.8\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "k0sP":
/*!***********************************************************!*\
  !*** ./src/app/record-view/record-view-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RecordViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordViewPageRoutingModule", function() { return RecordViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _record_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record-view.page */ "TM1j");




const routes = [
    {
        path: '',
        component: _record_view_page__WEBPACK_IMPORTED_MODULE_3__["RecordViewPage"]
    }
];
let RecordViewPageRoutingModule = class RecordViewPageRoutingModule {
};
RecordViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecordViewPageRoutingModule);



/***/ }),

/***/ "xJpa":
/*!***************************************************!*\
  !*** ./src/app/record-view/record-view.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\n.main {\n  margin: 0px 0.8125em;\n}\n\n.main p {\n  font-size: 1em;\n  color: #707070;\n  margin-bottom: 0em;\n}\n\nspan {\n  color: #871178;\n}\n\n.icon {\n  text-align: right;\n}\n\n.icon p {\n  font-size: 1em;\n  color: #871178;\n}\n\n.first .text p {\n  color: #22272a;\n}\n\n.badge {\n  float: right;\n}\n\nion-badge {\n  background-color: #d93131;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  box-shadow: #00000029 0px 3px 6px;\n}\n\nion-avatar {\n  width: 4em;\n  height: 4em;\n}\n\n.name p {\n  font-size: 1.125em;\n  color: #22272a;\n  margin: 0px;\n  font-weight: bold;\n}\n\n.text p {\n  font-size: 0.875em;\n  color: #9f9f9f;\n  margin: 0px;\n  font-weight: normal;\n}\n\n.time {\n  text-align: right;\n}\n\n.time p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  font-weight: bold;\n  margin: 0.3125em 0em;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY29yZC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksb0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFGQTtFQUNJLGlDQUFBO0FBS0o7O0FBSEE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFKQTtFQUNJLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVNKOztBQU5BO0VBQ0ksY0FBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtBQVVKOztBQVBBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBWUoiLCJmaWxlIjoicmVjb3JkLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIG1hcmdpbjogMHB4IDAuODEyNWVtO1xyXG59XHJcblxyXG4ubWFpbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbn1cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmljb24gcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcblxyXG4uZmlyc3QgLnRleHQgcCB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5pb24tYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MzEzMTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDI5IDBweCAzcHggNnB4O1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDRlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG59XHJcblxyXG4ubmFtZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGV4dCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGltZSBwIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW0gMGVtO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5zZWxlY3QtdGV4dCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjODcxMTg3ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5wY2xhc3Mge1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=record-view-record-view-module-es2015.js.map