(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uname {\n  font-size: 24px;\n  color: #871178;\n  font-weight: bold;\n  margin-top: 5%;\n}\n\n.profession {\n  font-size: 12px;\n  color: #616161;\n}\n\n.bdr-btm {\n  border-bottom: 1px solid #e0e0e0;\n  margin: 0 5px;\n}\n\n.margin {\n  margin: 10px 20px;\n}\n\n.icons {\n  text-align: center;\n  font-size: 28px;\n  background: #f6f8fe;\n  border-radius: 10px;\n  padding: 5px;\n  color: #ba68c8;\n  border: 1px solid #dfdfdf;\n  box-shadow: 1px 4px 4px 0px #e6e6e6;\n}\n\n.link {\n  line-height: 2.5;\n  font-size: 16px;\n  color: #616161;\n  font-weight: 500;\n}\n\n.arrow {\n  text-align: right;\n  line-height: 2.5;\n  font-size: 16px;\n}\n\n.call-us {\n  margin: 10px 10px 30px 10px;\n  border-radius: 10px;\n  padding: 10px;\n  background: #e1bee7;\n}\n\n.call-us ion-icon {\n  font-size: 36px;\n  padding: 10px 0 0 0;\n  color: #871178;\n}\n\n.call-us p {\n  font-size: 14px;\n  color: #871178;\n  font-weight: bold;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBRUksZ0NBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFFSSxpQkFBQTtBQUZKOztBQUlBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQUZKOztBQUlBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFKSiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5hbWVcclxue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5wcm9mZXNzaW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNjE2MTYxO1xyXG59XHJcblxyXG4uYmRyLWJ0bVxyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5cclxue1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbn1cclxuLmljb25zXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY4ZmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6I2JhNjhjODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICBib3gtc2hhZG93OiAxcHggNHB4IDRweCAwcHggI2U2ZTZlNjtcclxufVxyXG4ubGlua1xyXG57XHJcbiAgICBsaW5lLWhlaWdodDogMi41O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYXJyb3dcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi41O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY2FsbC11c3tcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDMwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2UxYmVlNztcclxufVxyXG4uY2FsbC11cyBpb24taWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5jYWxsLXVzIHAgXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxufSJdfQ== */");

/***/ }),

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ "Sy1n");








let SettingsPage = class SettingsPage {
    constructor(storage, http, router) {
        this.storage = storage;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        this.storage.get("uid").then(val => {
            this.uid = val;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getprofile.php?user_id=" + this.uid).subscribe(data => {
                this.profile = data;
                this.uid = this.profile[0].id;
                this.uname = this.profile[0].name;
                this.profession = this.profile[0].profession;
                this.uimage = this.profile[0].image;
                console.log(this.profile);
            });
        });
    }
    editprofile() {
        this.storage.set("uid", this.uid);
        this.router.navigate(['/edit-profile']);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<ion-row class=\"bdr-btm\">\n  <ion-col size=\"3\">\n    <img *ngIf=\"uimage\"  src=\"{{uimage}}\">\n    <img *ngIf=\"uimage == ''\" class=\"icon-img\" src=\"assets/profile.png\" style=\"padding: 10px; background: #fafafa; border-radius: 25%;\">\n  </ion-col>\n  <ion-col>\n    <div class=\"uname\">{{uname}}</div>\n    <div class=\"profession\">{{profession}}</div>\n  </ion-col>\n</ion-row>\n\n\n<ion-row class=\"margin\" (click)=\"editprofile()\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"person-circle-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\">Personal Data</ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"margin\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"language-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\">Change Language </ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"margin\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"lock-closed-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\">Change Password</ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"margin\" routerLink=\"/favourites\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"heart-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\">My Favourites</ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"margin\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"open-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\">Referal Code</ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<div class=\"bdr-btm\"></div>\n\n<ion-row class=\"margin\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"chatbox-ellipses-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\"><strong>FAQ's</strong></ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"margin\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"create-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\"><strong>Handbook</strong></ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"margin\">\n  <ion-col size=\"2\">\n    <ion-icon class=\"icons\" name=\"people-outline\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"link\"><strong>Community</strong></ion-col>\n  <ion-col size=\"2\" class=\"arrow\">\n    <ion-icon  name=\"chevron-forward-outline\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"call-us\" routerLink=\"/contact\">\n  <ion-col size=\"2\">\n    <ion-icon name=\"headset-outline\"></ion-icon>\n  </ion-col>\n  <ion-col>\n   <p> Feel Free to Ask, We are ready to Help!</p>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>&nbsp;</ion-col>\n</ion-row>\n\n\n</ion-content>\n\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"person\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map