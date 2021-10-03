(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-search-global-search-module"],{

/***/ "5O6u":
/*!***************************************************************!*\
  !*** ./src/app/global-search/global-search-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GlobalSearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchPageRoutingModule", function() { return GlobalSearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _global_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-search.page */ "IptB");




const routes = [
    {
        path: '',
        component: _global_search_page__WEBPACK_IMPORTED_MODULE_3__["GlobalSearchPage"]
    }
];
let GlobalSearchPageRoutingModule = class GlobalSearchPageRoutingModule {
};
GlobalSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GlobalSearchPageRoutingModule);



/***/ }),

/***/ "6OnT":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-search/global-search.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"head-card\">\n          <ion-row>\n            <div class=\"avatar\">\n              <ion-icon name=\"location-outline\"></ion-icon>\n            </div>\n            <ion-col class=\"seperator\" size=\"0.1\">\n              <p></p>\n            </ion-col>\n            <ion-col>\n              <ion-input type=\"text\" placeholder=\"Chennai Designer\" #keyword (keydown.enter)=\"Search()\"></ion-input>\n            </ion-col>\n            <div class=\"avatar\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n            </div>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-buttons slot=\"end\" routerLink=\"/notification\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"box\" *ngFor=\"let res of result; let i=index\">\n    <ion-row>\n      <div class=\"avatar\">\n        <img src=\"{{res.logo}}\" alt=\"\">\n      </div>\n      <ion-col class=\"title\">\n        <p>{{res.business_name}} <ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <p>4.1 Ratings</p>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\" class=\"last\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"address\">\n      <p>{{res.business_address}},<br> {{res.city}}-{{res.pincode}}</p>\n    </ion-row>\n\n    <div class=\"scroll\">\n      <p class=\"design\">Designer</p>\n      <div class=\"border\" size=\"0.1\">\n        <p></p>\n      </div>\n      <p class=\"design\">Banner Design</p>\n      <div class=\"border\" size=\"0.1\">\n        <p></p>\n      </div>\n      <p class=\"design\">Logo Design</p>\n      <div class=\"border\" size=\"0.1\">\n        <p></p>\n      </div>\n      <p class=\"design\">Poster Designer</p>\n      <div class=\"border\" size=\"0.1\">\n        <p></p>\n      </div>\n      <p class=\"design\">Image Design</p>\n      <div class=\"border\" size=\"0.1\">\n        <p></p>\n      </div>\n      <p class=\"design\">Website Design</p>\n    </div>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col routerLink=\"/home\" (click)=\"footerIconColor()\">\n      <ion-icon [style.color]=\"iconcolor\" name=\"home\"></ion-icon>\n      <p [style.color]=\"iconcolor\">Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\" (click)=\"footerIconColor()\">\n      <ion-icon [style.color]=\"iconcolor\" name=\"person-outline\"></ion-icon>\n      <p [style.color]=\"iconcolor\">Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\" (click)=\"footerIconColor()\">\n      <ion-icon [style.color]=\"iconcolor\" name=\"scan-outline\"></ion-icon>\n      <p [style.color]=\"iconcolor\">Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\" (click)=\"footerIconColor()\">\n      <ion-icon [style.color]=\"iconcolor\" name=\"heart-outline\"></ion-icon>\n      <p [style.color]=\"iconcolor\">Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\" (click)=\"footerIconColor()\">\n      <ion-icon [style.color]=\"iconcolor\" name=\"call-outline\"></ion-icon>\n      <p [style.color]=\"iconcolor\">Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "7v4L":
/*!*******************************************************!*\
  !*** ./src/app/global-search/global-search.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  color: #ffffff;\n  font-size: 1.3125em;\n  float: right;\n}\n\n.head-card {\n  border-radius: 3px;\n}\n\n.head-card ion-row {\n  margin: 0%;\n  padding: 0%;\n}\n\n.head-card .avatar {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.head-card .seperator {\n  margin-top: 5px;\n  height: 23px;\n}\n\n.head-card ion-icon {\n  color: #9f9f9f;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.head-card ion-input {\n  border: none;\n}\n\n.head-card ion-row {\n  height: 32px;\n}\n\n.head-card ion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  height: 32px;\n}\n\nion-content {\n  --padding-bottom: 65px;\n}\n\nion-segment {\n  background: #f5f5f5;\n  color: #707070;\n}\n\n.segment-button-checked {\n  background: var(--background-checked);\n  color: #871178;\n  --color-checked: none;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n  font-size: 12px;\n}\n\n.box {\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 3px;\n  padding: 5px 5px 0px 10px;\n  margin-left: 18px;\n  margin-right: 18px;\n}\n\n.box img {\n  width: 70px;\n  height: 70px;\n  border-radius: 4px;\n  margin-top: 5px;\n}\n\n.title {\n  padding-left: 0.3125em;\n}\n\n.title p {\n  font-size: 1.125em;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 3px 0px;\n  margin-top: 0px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star p {\n  font-size: 0.75em;\n  padding-left: 5px;\n  margin-top: 4px;\n}\n\n.last {\n  padding-right: 0%;\n  font-size: 1.2em;\n  color: #871178;\n  text-align: right;\n}\n\n.last ion-icon {\n  font-size: 1.25em;\n}\n\n.address p {\n  color: #22272a;\n  font-size: 10px;\n  padding: 5px 0px;\n  margin: 0px;\n  margin-top: 10px;\n}\n\n.design {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  font-size: 0.75em;\n  margin: 0px 10px;\n}\n\n.scroll {\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.scroll p {\n  color: #707070;\n}\n\n.border p {\n  height: 1.2em;\n  width: 1px;\n  border-right: 1px solid #00000029;\n  margin-top: 5.5px;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0%;\n  width: 100%;\n}\n\nion-footer ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-footer p {\n  font-size: 0.75em;\n  color: #ffffffbd;\n  margin: 0.3125em;\n}\n\nion-footer ion-icon {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dsb2JhbC1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUZBO0VBQ0ksWUFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUpBO0VBQ0ksc0JBQUE7QUFPSjs7QUFMQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0kscUNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFTSjs7QUFQQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLHNCQUFBO0FBYUo7O0FBWEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFjSjs7QUFaQTtFQUNJLGNBQUE7QUFlSjs7QUFiQTtFQUNJLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWlCSjs7QUFmQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksaUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBcUJKOztBQW5CQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxjQUFBO0FBdUJKOztBQXJCQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQXdCSjs7QUFyQkE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEwQko7O0FBeEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUEyQkoiLCJmaWxlIjoiZ2xvYmFsLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjMxMjVlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmhlYWQtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmhlYWQtY2FyZCBpb24tcm93IHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uaGVhZC1jYXJkIC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5oZWFkLWNhcmQgLnNlcGVyYXRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuLmhlYWQtY2FyZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbn1cclxuLmhlYWQtY2FyZCBpb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5oZWFkLWNhcmQgaW9uLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuLmhlYWQtY2FyZCBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNjVweDtcclxufVxyXG5pb24tc2VnbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jaGVja2VkKTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiBub25lO1xyXG59XHJcbmlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYm94IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG4uYm94IGltZyB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjMxMjVlbTtcclxufVxyXG4udGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW46IDNweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLnRpdGxlIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcbi5zdGFyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmNiOTAwO1xyXG59XHJcbi5zdGFyIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4ubGFzdCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5sYXN0IGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcbi5hZGRyZXNzIHAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5kZXNpZ24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG4uc2Nyb2xsIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNjcm9sbCBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5ib3JkZXIgcCB7XHJcbiAgICBoZWlnaHQ6IDEuMmVtO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbi10b3A6IDUuNXB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tZm9vdGVyIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWZvb3RlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmZiZDtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW07XHJcbn1cclxuaW9uLWZvb3RlciBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "IptB":
/*!*****************************************************!*\
  !*** ./src/app/global-search/global-search.page.ts ***!
  \*****************************************************/
/*! exports provided: GlobalSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchPage", function() { return GlobalSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_global_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./global-search.page.html */ "6OnT");
/* harmony import */ var _global_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-search.page.scss */ "7v4L");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ "Sy1n");








let GlobalSearchPage = class GlobalSearchPage {
    constructor(actionsheetCtrl, route, http) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.route = route;
        this.http = http;
        this.segmentModel = "designer";
    }
    ngOnInit() {
    }
    openMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'view',
                        handler: () => {
                            this.route.navigate(['plans']);
                            console.log('Destructive clicked');
                        }
                    }, {
                        text: 'Call',
                        handler: () => {
                            this.route.navigate(['verification']);
                            console.log('Archive clicked');
                        }
                    }, {
                        text: 'Chat',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                    {
                        text: 'Share',
                        handler: () => {
                            console.log('Promotions clicked');
                        },
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    Search() {
        console.log(this.keyword.value);
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "globalsearch.php?keyword=" + this.keyword.value).subscribe(res => {
            this.result = res;
            console.log("Search Results", this.result);
        });
    }
};
GlobalSearchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
GlobalSearchPage.propDecorators = {
    keyword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['keyword',] }]
};
GlobalSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-global-search',
        template: _raw_loader_global_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_global_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GlobalSearchPage);



/***/ }),

/***/ "PVMv":
/*!*******************************************************!*\
  !*** ./src/app/global-search/global-search.module.ts ***!
  \*******************************************************/
/*! exports provided: GlobalSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchPageModule", function() { return GlobalSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _global_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-search-routing.module */ "5O6u");
/* harmony import */ var _global_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-search.page */ "IptB");







let GlobalSearchPageModule = class GlobalSearchPageModule {
};
GlobalSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _global_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlobalSearchPageRoutingModule"]
        ],
        declarations: [_global_search_page__WEBPACK_IMPORTED_MODULE_6__["GlobalSearchPage"]]
    })
], GlobalSearchPageModule);



/***/ })

}]);
//# sourceMappingURL=global-search-global-search-module-es2015.js.map