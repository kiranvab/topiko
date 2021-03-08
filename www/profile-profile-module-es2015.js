(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProfilePage = class ProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row style=\"margin:10px\">\n  <ion-col size=\"10\">\n    <p class=\"user-name\">Murali krishna</p>\n    <p class=\"user-email\">muralikrishna@topiko.in</p>\n  </ion-col>\n  <ion-col size=\"2\">\n    <ion-thumbnail>\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    </ion-thumbnail>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"1\"><ion-icon name=\"person-outline\"></ion-icon></ion-col>\n        <ion-col size=\"9\">Profile Setting</ion-col>\n        <ion-col size=\"2\">Edit</ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n     \n         <ion-row>\n            <ion-col size=\"4\">Fullname</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">Murali Krishna</ion-col>\n          </ion-row>\n     \n          <ion-row>\n            <ion-col size=\"4\">Dathe of Birth</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">12-10-1983</ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col size=\"4\">Email</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">MuraliKrishna@topiko.in</ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col size=\"4\">Gender</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">Male</ion-col>\n          </ion-row>  \n             \n      \n    </ion-card-content>\n  </ion-card>\n</ion-row>\n\n<ion-row>\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"1\"><ion-icon name=\"person-outline\"></ion-icon></ion-col>\n        <ion-col size=\"11\">Setting</ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n     \n         <ion-row>\n            <ion-col size=\"4\">Fullname</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">Murali Krishna</ion-col>\n          </ion-row>\n     \n          <ion-row>\n            <ion-col size=\"4\">Dathe of Birth</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">12-10-1983</ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col size=\"4\">Email</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">MuraliKrishna@topiko.in</ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col size=\"4\">Gender</ion-col>\n            <ion-col size=\"1\">:</ion-col>\n            <ion-col size=\"7\" class=\"text-right\">Male</ion-col>\n          </ion-row>  \n             \n      \n    </ion-card-content>\n  </ion-card>\n</ion-row>\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col routerLink=\"/calllist\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/message\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\" class=\"home-icon\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/favourite\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  font-size: 12px;\n}\n\n.user-name {\n  padding: 3px 0;\n  margin: 0;\n  color: #5e1c57;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.user-email {\n  padding: 0;\n  margin: 0;\n  font-size: 12px;\n  color: #333;\n}\n\nion-card-content {\n  font-size: 12px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-card {\n  width: 100%;\n  margin: 3%;\n}\n\nion-card-header {\n  background: #5e1c57;\n  color: #fff;\n  height: 40px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUVJLFdBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFFSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi51c2VyLW5hbWVcclxue1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzVlMWM1NztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udXNlci1lbWFpbHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5pb24tY2FyZC1jb250ZW50XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuaW9uLWNhcmQgXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWUxYzU3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map