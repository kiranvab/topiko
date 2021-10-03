(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qrreach-qrreach-module"],{

/***/ "Kq5O":
/*!*******************************************!*\
  !*** ./src/app/qrreach/qrreach.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 64px;\n  height: 64px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.ellipsis {\n  font-size: 24px;\n}\n\n.scroll {\n  height: 26px;\n}\n\n.scroll p {\n  color: #707070;\n}\n\n.design {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  font-size: 12px !important;\n  margin: 0%;\n  margin-right: 24px;\n}\n\n.nominee p {\n  color: #871178;\n  font-size: 18px;\n  margin: 4px 0px;\n  margin-top: 6px;\n}\n\n.nominee-name {\n  color: #707070;\n  font-size: 12px;\n  line-height: 20px;\n  padding: 3px;\n  padding-top: 0px;\n}\n\nion-fab-button ion-icon {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3FycmVhY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFTSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSiIsImZpbGUiOiJxcnJlYWNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMThweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGNsYXNzIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uZWxsaXBzaXMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG59XHJcbi5zY3JvbGwgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4uZGVzaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5ub21pbmVlIHAge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDRweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLm5vbWluZWUtbmFtZSB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Z8Du":
/*!*****************************************!*\
  !*** ./src/app/qrreach/qrreach.page.ts ***!
  \*****************************************/
/*! exports provided: QrreachPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrreachPage", function() { return QrreachPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_qrreach_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./qrreach.page.html */ "ftn6");
/* harmony import */ var _qrreach_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qrreach.page.scss */ "Kq5O");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");









let QrreachPage = class QrreachPage {
    constructor(storage, router, http, actionsheetCtrl) {
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    ngOnInit() {
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.user_id = this.udata[0].id;
            this.uimage = this.udata[0].image;
            console.log("UserID", this.user_id);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "myqrreach.php?uid=" + this.user_id).subscribe(qrdata => {
                this.myqr = qrdata;
                console.log(this.myqr);
            });
        });
    }
    qrdetails(i) {
        console.log(i);
        this.storage.set("qrid", this.myqr[i].id);
        this.router.navigate(['qr-reach-view']);
    }
    openMenu(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Edit',
                        handler: () => {
                            this.storage.set("qrid", this.myqr[i].id);
                            this.router.navigate(['edit-qr-reach']);
                        }
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            console.log('Destructive clicked');
                            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "deleteqr.php?qrid=" + this.myqr[i].id).subscribe(response => {
                                this.delres = response;
                                if (this.delres = 1) {
                                    alert("Qr Reach Deleted Sucesfully");
                                    window.location.reload();
                                    this.router.navigate(['qrreach']);
                                }
                                else {
                                    alert("Failed to Delete QR Reach");
                                }
                            });
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
QrreachPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] }
];
QrreachPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-qrreach',
        template: _raw_loader_qrreach_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qrreach_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QrreachPage);



/***/ }),

/***/ "ftn6":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrreach/qrreach.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>QR Reach</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let qr of myqr; let i = index;\">\n    <ion-row>\n      <div class=\"avatar\"  (click)=\"qrdetails(i)\">\n        <ion-avatar>\n          <img src=\"{{uimage}}\" alt=\"\" >\n        </ion-avatar>\n      </div>\n      <ion-col  (click)=\"qrdetails(i)\"> \n        <p class=\"user-name pclass\">{{qr.name}}</p>\n        <p class=\"time pclass\">{{qr.purpose}}</p>\n        <p class=\"time pclass\">{{qr.registration_number}}</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\">\n        <ion-icon name=\"ellipsis-vertical\"  (click)=\"openMenu(i)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"nominee\">\n      <p>Nominee</p>\n    </ion-row>\n    <div class=\"scroll\">\n      <p class=\"design\">{{qr.nominee_name}}</p>\n    </div>\n\n  </ion-card>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/add-qr-reach\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "pBcL":
/*!*******************************************!*\
  !*** ./src/app/qrreach/qrreach.module.ts ***!
  \*******************************************/
/*! exports provided: QrreachPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrreachPageModule", function() { return QrreachPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _qrreach_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qrreach-routing.module */ "xQh+");
/* harmony import */ var _qrreach_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qrreach.page */ "Z8Du");







let QrreachPageModule = class QrreachPageModule {
};
QrreachPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _qrreach_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrreachPageRoutingModule"]
        ],
        declarations: [_qrreach_page__WEBPACK_IMPORTED_MODULE_6__["QrreachPage"]]
    })
], QrreachPageModule);



/***/ }),

/***/ "xQh+":
/*!***************************************************!*\
  !*** ./src/app/qrreach/qrreach-routing.module.ts ***!
  \***************************************************/
/*! exports provided: QrreachPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrreachPageRoutingModule", function() { return QrreachPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qrreach_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qrreach.page */ "Z8Du");




const routes = [
    {
        path: '',
        component: _qrreach_page__WEBPACK_IMPORTED_MODULE_3__["QrreachPage"]
    }
];
let QrreachPageRoutingModule = class QrreachPageRoutingModule {
};
QrreachPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QrreachPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=qrreach-qrreach-module-es2015.js.map