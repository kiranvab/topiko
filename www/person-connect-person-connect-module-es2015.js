(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person-connect-person-connect-module"],{

/***/ "3QyZ":
/*!*******************************************************!*\
  !*** ./src/app/person-connect/person-connect.page.ts ***!
  \*******************************************************/
/*! exports provided: PersonConnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonConnectPage", function() { return PersonConnectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_person_connect_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./person-connect.page.html */ "vDZ7");
/* harmony import */ var _person_connect_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person-connect.page.scss */ "xYv6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let PersonConnectPage = class PersonConnectPage {
    constructor(actionsheetCtrl, route) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    openMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Emergency',
                        handler: () => {
                            this.route.navigate(['calling']);
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: 'Other',
                        handler: () => {
                            this.route.navigate(['calling']);
                            console.log('Archive clicked');
                        }
                    },
                ]
            });
            yield actionSheet.present();
        });
    }
    openMsg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Emergency',
                        handler: () => {
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: 'Other',
                        handler: () => {
                            console.log('Archive clicked');
                        }
                    },
                ]
            });
            yield actionSheet.present();
        });
    }
};
PersonConnectPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PersonConnectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-person-connect',
        template: _raw_loader_person_connect_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_person_connect_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PersonConnectPage);



/***/ }),

/***/ "nPop":
/*!*********************************************************!*\
  !*** ./src/app/person-connect/person-connect.module.ts ***!
  \*********************************************************/
/*! exports provided: PersonConnectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonConnectPageModule", function() { return PersonConnectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _person_connect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person-connect-routing.module */ "tmsg");
/* harmony import */ var _person_connect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person-connect.page */ "3QyZ");







let PersonConnectPageModule = class PersonConnectPageModule {
};
PersonConnectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _person_connect_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonConnectPageRoutingModule"]
        ],
        declarations: [_person_connect_page__WEBPACK_IMPORTED_MODULE_6__["PersonConnectPage"]]
    })
], PersonConnectPageModule);



/***/ }),

/***/ "tmsg":
/*!*****************************************************************!*\
  !*** ./src/app/person-connect/person-connect-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PersonConnectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonConnectPageRoutingModule", function() { return PersonConnectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _person_connect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-connect.page */ "3QyZ");




const routes = [
    {
        path: '',
        component: _person_connect_page__WEBPACK_IMPORTED_MODULE_3__["PersonConnectPage"]
    }
];
let PersonConnectPageRoutingModule = class PersonConnectPageRoutingModule {
};
PersonConnectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonConnectPageRoutingModule);



/***/ }),

/***/ "vDZ7":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/person-connect/person-connect.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Connect</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"help-circle-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"second\">\n    <ion-row>\n      <ion-col>\n        <p>Murali</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"third\">\n    <ion-row>\n      <p>Image</p>\n    </ion-row>\n    <div class=\"scroll\">\n      <img src=\"https://5.imimg.com/data5/OV/ZZ/EF/SELLER-12251084/rear-view-car-side-mirror-beat-500x500.jpg\" alt=\"\">\n      <img\n        src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67pkHOVMFxVKt0tzGDIQcm2eMng_7ro_0D3T-hrujo2_hFGU9w2uPE3P7IBiGrL5UtJM&usqp=CAU\"\n        alt=\"\">\n      <img src=\"https://amainsider.com/wp-content/uploads/2017/06/auto-glass-insurance-windshield.jpg\" alt=\"\">\n      <img src=\"https://5.imimg.com/data5/OV/ZZ/EF/SELLER-12251084/rear-view-car-side-mirror-beat-500x500.jpg\" alt=\"\">\n      <img src=\"https://amainsider.com/wp-content/uploads/2017/06/auto-glass-insurance-windshield.jpg\" alt=\"\">\n    </div>\n  </ion-card>\n\n  <p class=\"connect\">Connect</p>\n  <ion-card class=\"fourth\">\n    <ion-row>\n      <ion-col>\n        <p>Jagan Karthik</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"call\" (click)=\"openMenu()\" mode=\"md\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>Govind</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"call\" (click)=\"openMenu()\" mode=\"md\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>Babji</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"call\" (click)=\"openMenu()\" mode=\"md\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <p class=\"connect\">Reach</p>\n  <h6 (click)=\"openMsg()\" mode=\"md\">Message</h6>\n</ion-content>");

/***/ }),

/***/ "xYv6":
/*!*********************************************************!*\
  !*** ./src/app/person-connect/person-connect.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: center;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 1.3125em;\n  float: right;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.second {\n  margin: 1.75em 1.125em;\n}\n\n.second p {\n  text-align: left;\n  color: #22272a;\n  font-size: 1.25em;\n  margin: 0%;\n}\n\n.second ion-icon {\n  float: right;\n  color: #5e5e5e;\n  width: 1.375em;\n  height: 1.375em;\n}\n\n.third {\n  margin: 1.75em 1.125em;\n  width: 100%;\n}\n\n.third p {\n  font-size: 1em;\n  color: #871178;\n}\n\n.third img {\n  width: 6.43em;\n  height: 6.43em;\n  margin-right: 1em;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.connect {\n  font-size: 1em;\n  margin: 1.125em 1.125em;\n  color: #871178;\n}\n\n.fourth {\n  box-shadow: 0px 3px 6px #00000029;\n  margin: 1.125em 1.125em;\n}\n\n.fourth p {\n  margin: 0.625em 0.3125em;\n  font-size: 1em;\n  color: #22272a;\n}\n\n.fourth ion-icon {\n  width: 1.375em;\n  height: 1.375em;\n  float: right;\n  color: #5e5e5e;\n  margin: 0.625em 0.3125em;\n}\n\nh6 {\n  font-size: 1.25em;\n  color: #707070;\n  text-decoration: underline;\n  margin-left: 1.3125em;\n  margin-bottom: 1.125em;\n  margin-right: 1.125em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BlcnNvbi1jb25uZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFPSjs7QUFIQTtFQUNJLHNCQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFRSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQVNKOztBQUxBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0ksaUNBQUE7RUFDQSx1QkFBQTtBQVNKOztBQVBBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBV0o7O0FBVEE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVlKIiwiZmlsZSI6InBlcnNvbi1jb25uZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjMxMjVlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLy8gZmlyc3QtY2FyZFxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAxZW0gMS4xMjVlbTtcclxufVxyXG4ucm93IHtcclxuICAgIGhlaWdodDogMTQuNGVtO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICBoZWlnaHQ6IDE0NnB4O1xyXG59XHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG4ucG9zaXRpb24tY2FtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUycHg7XHJcbiAgICB0b3A6IDM3cHg7XHJcbn1cclxuXHJcbi8vIHNlY29uZC1jYXJkXHJcbi5zZWNvbmQge1xyXG4gICAgbWFyZ2luOiAxLjc1ZW0gMS4xMjVlbTtcclxufVxyXG4uc2Vjb25kIHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcbi5zZWNvbmQgaW9uLWljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM1ZTVlNWU7XHJcbiAgICB3aWR0aDogMS4zNzVlbTtcclxuICAgIGhlaWdodDogMS4zNzVlbTtcclxufVxyXG5cclxuLy8gdGhpcmQtY2FyZFxyXG4udGhpcmQge1xyXG4gICAgbWFyZ2luOiAxLjc1ZW0gMS4xMjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50aGlyZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnRoaXJkIGltZyB7XHJcbiAgICB3aWR0aDogNi40M2VtO1xyXG4gICAgaGVpZ2h0OiA2LjQzZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLy8gZm91cnRoLWNhcmRcclxuLmNvbm5lY3Qge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW46IDEuMTI1ZW0gMS4xMjVlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5mb3VydGgge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgbWFyZ2luOiAxLjEyNWVtIDEuMTI1ZW07XHJcbn1cclxuLmZvdXJ0aCBwIHtcclxuICAgIG1hcmdpbjogMC42MjVlbSAwLjMxMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLmZvdXJ0aCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMS4zNzVlbTtcclxuICAgIGhlaWdodDogMS4zNzVlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjNWU1ZTVlO1xyXG4gICAgbWFyZ2luOiAwLjYyNWVtIDAuMzEyNWVtO1xyXG59XHJcbmg2IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjMxMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMTI1ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMTI1ZW07XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=person-connect-person-connect-module-es2015.js.map