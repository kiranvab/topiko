(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-module"],{

/***/ "+7PL":
/*!***************************************************!*\
  !*** ./src/app/service/service-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ServicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageRoutingModule", function() { return ServicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.page */ "4dE1");




const routes = [
    {
        path: '',
        component: _service_page__WEBPACK_IMPORTED_MODULE_3__["ServicePage"]
    }
];
let ServicePageRoutingModule = class ServicePageRoutingModule {
};
ServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicePageRoutingModule);



/***/ }),

/***/ "0QPQ":
/*!*******************************************!*\
  !*** ./src/app/service/service.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\n.title {\n  text-align: center;\n  font-size: 1em;\n  color: #871178;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 70px;\n  height: 70px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 10px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 20px;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.price-div {\n  color: #272722;\n  font-size: 14px;\n}\n\n.price {\n  color: #871178;\n  font-size: 14px;\n  padding: 0 5px;\n}\n\n.ori_price {\n  font-size: 14px;\n  padding: 0 5px;\n  color: #9f9f9f;\n  text-decoration: line-through;\n}\n\n.discount {\n  font-size: 14px;\n  color: #39ac00;\n  padding: 0 5px;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 1em;\n  text-align: center;\n  line-height: 0;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 1.25em;\n  text-align: center;\n  margin: 0%;\n  line-height: 1;\n  margin-bottom: 0px;\n  margin-top: 21px;\n}\n\n.sep {\n  margin: 12px 0px;\n  margin-top: 20px;\n  padding: 0%;\n  border-right: 1px solid #d5d5d5;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 45px;\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBU0o7O0FBUEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWNKOztBQVpBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQWVKOztBQWJBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQWRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaUJKIiwiZmlsZSI6InNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy10b3A6IDhweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxOHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMC43NWVtIDBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udGltZSB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5wY2xhc3Mge1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5lbGxpcHNpcyBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnByaWNlLWRpdiB7XHJcbiAgICBjb2xvcjogIzI3MjcyMjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG4ub3JpX3ByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uZGlzY291bnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzOWFjMDA7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG4uY2hhdHMgLnRleHQge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi5jaGF0cyAubnVtYmVyIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG59XHJcbi5zZXAge1xyXG4gICAgbWFyZ2luOiAxMnB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNWQ1ZDU7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLy8gZmFiXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNC4zNzVlbTtcclxuICAgIHdpZHRoOiA0LjM3NWVtO1xyXG59XHJcbi5mYWIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "4dE1":
/*!*****************************************!*\
  !*** ./src/app/service/service.page.ts ***!
  \*****************************************/
/*! exports provided: ServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePage", function() { return ServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service.page.html */ "pZbl");
/* harmony import */ var _service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.page.scss */ "0QPQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");










let ServicePage = class ServicePage {
    constructor(http, actionsheetCtrl, router, storage, alertController) {
        this.http = http;
        this.actionsheetCtrl = actionsheetCtrl;
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.storage.get("bid").then(val => {
            this.buid = val;
            console.log("Business ID", this.buid);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getoffered_services.php?bid=" + this.buid).subscribe(data => {
                this.services = data;
                console.log("Services", this.services);
            });
        });
    }
    openMenu(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Edit',
                        handler: () => {
                            this.services[i].id;
                            console.log(this.services[i].id);
                            this.storage.set("sid", this.services[i].id);
                            this.router.navigate(['/edit-service']);
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log('Archive clicked');
                            this.presentAlertConfirm(i);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    presentAlertConfirm(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log('Confirm Okay');
                            console.log(this.services[i].id);
                            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "deleteservice.php?sid=" + this.services[i].id).subscribe(data => {
                                console.log("Response", data);
                                this.AlertDelete();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    AlertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Deleted!',
                message: 'Service has been deleted sucesfully.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
ServicePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-service',
        template: _raw_loader_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServicePage);



/***/ }),

/***/ "mhyn":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-routing.module */ "+7PL");
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service.page */ "4dE1");







let ServicePageModule = class ServicePageModule {
};
ServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicePageRoutingModule"]
        ],
        declarations: [_service_page__WEBPACK_IMPORTED_MODULE_6__["ServicePage"]]
    })
], ServicePageModule);



/***/ }),

/***/ "pZbl":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service/service.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card *ngFor=\"let service of services; let i = index\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"product-img\"\n            src=\"{{service.image}}\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name pclass\">{{service.service_title}}</p>\n        <p class=\"time pclass\">{{service.created_date}}</p>\n        <p class=\"price-div pclass\">Price - <span class=\"price\">{{service.discount_price}}</span> <span class=\"ori_price\">{{service.mrp}}</span> <span\n            class=\"discount\">{{service.discount / service.mrp * 100}}%off</span></p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu(i)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"chats scroll\" >\n      <ion-col>\n        <p class=\"text\">Shares</p>\n        <p class=\"number\">{{service.sharecnt}}</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Likes</p>\n        <p class=\"number\">{{service.likecnt}}</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Favourites</p>\n        <p class=\"number\">{{service.favcnt}}</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text\">Comments</p>\n        <p class=\"number\">{{service.cmtcnt}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"fab\" routerLink=\"/add-service\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=service-service-module-es2015.js.map