(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mycard-mycard-module"],{

/***/ "4BzV":
/*!***************************************!*\
  !*** ./src/app/mycard/mycard.page.ts ***!
  \***************************************/
/*! exports provided: MycardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPage", function() { return MycardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mycard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mycard.page.html */ "aJKK");
/* harmony import */ var _mycard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mycard.page.scss */ "t2OM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");








let MycardPage = class MycardPage {
    constructor(route, http, router, storage) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.hdiv = false;
        this.vdiv = true;
    }
    rotate() {
        console.log("Rotate");
        if (this.hdiv == true) {
            this.hdiv = false;
            this.vdiv = true;
        }
        else {
            this.hdiv = true;
            this.vdiv = false;
        }
    }
    ngOnInit() {
        this.route.params.subscribe(val => {
            this.storage.get("userdetails").then(val => {
                this.userdetails = val;
                this.uid = this.userdetails[0].id;
                let car = this;
                setTimeout(() => {
                    car.loadcard();
                }, 2000);
            });
        });
    }
    loadcard() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getcarddetails.php?user_id=" + this.uid).subscribe(data => {
            this.carddata = data;
            console.log("Mycard Data", this.carddata);
            if (this.carddata == null) {
                this.router.navigate(['/createdvc']);
            }
            else {
                this.carddata = data;
                console.log(this.ucarddata);
            }
        });
    }
    morecards() {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getcarddetails.php?user_id=" + this.uid).subscribe(data => {
            console.log(data);
            this.carddata = data;
            //this.router.navigate(['morevcards']);
        });
    }
};
MycardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
MycardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-mycard',
        template: _raw_loader_mycard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mycard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MycardPage);



/***/ }),

/***/ "9deR":
/*!*************************************************!*\
  !*** ./src/app/mycard/mycard-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MycardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPageRoutingModule", function() { return MycardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mycard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mycard.page */ "4BzV");




const routes = [
    {
        path: '',
        component: _mycard_page__WEBPACK_IMPORTED_MODULE_3__["MycardPage"]
    }
];
let MycardPageRoutingModule = class MycardPageRoutingModule {
};
MycardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MycardPageRoutingModule);



/***/ }),

/***/ "WZkD":
/*!*****************************************!*\
  !*** ./src/app/mycard/mycard.module.ts ***!
  \*****************************************/
/*! exports provided: MycardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPageModule", function() { return MycardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mycard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mycard-routing.module */ "9deR");
/* harmony import */ var _mycard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycard.page */ "4BzV");







let MycardPageModule = class MycardPageModule {
};
MycardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mycard_routing_module__WEBPACK_IMPORTED_MODULE_5__["MycardPageRoutingModule"]
        ],
        declarations: [_mycard_page__WEBPACK_IMPORTED_MODULE_6__["MycardPage"]]
    })
], MycardPageModule);



/***/ }),

/***/ "aJKK":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mycard/mycard.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Visiting Card</ion-title>\n    <ion-buttons slot=\"end\" class=\"create-icon\">\n      <ion-icon name=\"ellipsis-vertical\" color=\"custom\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"width: 90%; margin: 0 auto;\">\n    <ion-col>\n      <img src=\"assets/rotate.svg\" (click)=\"rotate()\" >\n    </ion-col>\n    <ion-col style=\"font-size: 18px; text-align: center;\" size=\"8\">Default</ion-col>\n    <ion-col style=\"text-align: right;\">\n      <img src=\"assets/docs.svg\" >\n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"vdiv\" >\n  <div class=\"vertical\" id=\"vertical\" *ngFor=\"let card of carddata\">\n  <ion-card  style=\"background:url(assets/vertical-front.jpg); background-position: top; background-size: cover; height:200px\">\n    <ion-row class=\"text-center\">\n      <ion-col style=\"text-align: left; padding-top: 10px;\" size=\"4\">\n        <img src=\"assets/logo.png\" width=\"50%\">\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-col size=\"12\">\n            <img src=\"{{card.image}}\" width=\"45%\">\n          </ion-col>\n          <ion-col size=\"12\" class=\"name\">\n            {{card.name}}\n          </ion-col>\n          <ion-col size=\"12\" class=\"phone\">\n            {{card.mobile}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card  style=\"background:url(assets/vertical-back.jpg); background-position: top; background-size: cover;\">\n    <ion-row>\n      <ion-col>\n        <div class=\"comp-title\">{{card.workingin}}</div>\n        <ion-row>\n          <ion-col>\n            <img class=\"bdr\" src=\"assets/map-marker.svg\">\n            <div class=\"content-text\">\n              {{card.address}}\n            </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <img class=\"bdr\" src=\"assets/call.svg\">\n            <div class=\"content-text\">{{card.mobile}}</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <img class=\"bdr\" src=\"assets/email.svg\">\n            <div class=\"content-text\">{{card.mail}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-linkedin\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"globe-outline\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-youtube\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col  style=\"text-align: right;\">\n        <ion-row>\n          <ion-col>\n            <h5>{{card.profession}}</h5>\n            <h5>{{card.designation}}</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"padding-top: 32%;\">\n          <ion-col>\n            <img src=\"assets/logo.png\" width=\"30%\">\n          </ion-col>\n        </ion-row>\n      </ion-col>\n     \n    </ion-row>\n    </ion-card>\n  </div>\n  </div>\n\n\n<div *ngIf=\"hdiv\">\n  <div class=\"horizontal\" id=\"horizontal\" *ngFor=\"let hcard of carddata\" >\n    <ion-card  style=\"background:url(assets/horizontal-front.jpg); background-position: top; background-size: cover;\">\n      <ion-row class=\"text-center\">\n        <ion-col style=\"text-align: right; padding-top: 10px;\" size=\"12\">\n          <img src=\"assets/logo.png\" width=\"20%\">\n        </ion-col>\n        <ion-col>\n          <ion-row style=\"margin-top: 20%; margin-bottom:37% ;\">\n            <ion-col size=\"12\">\n              <img src=\"assets/profile.png\" width=\"45%\">\n            </ion-col>\n            <ion-col size=\"12\" class=\"name\">\n              {{hcard.name}}\n            </ion-col>\n            <ion-col size=\"12\" class=\"phone\">\n              {{hcard.mobile}}\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  \n    <ion-card  style=\"background:url(assets/horizontal-back.jpg); background-position: top; background-size: cover; padding: 0 5% 16% 5%; \">\n      <ion-row>\n        \n        <ion-col>\n          <ion-row style=\"text-align: right;\">\n            <ion-col>\n              <img src=\"assets/logo.png\" width=\"30%\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h5>{{hcard.profession}}</h5>\n              <h5>{{hcard.designation}}</h5>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"horizontal-comp-title\">{{hcard.workingin}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img class=\"bdr\" src=\"assets/map-marker.svg\">\n          <div class=\"content-text\">\n            {{hcard.address}}\n          </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img class=\"bdr\" src=\"assets/call.svg\">\n          <div class=\"content-text\">{{hcard.mobile}}</div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img class=\"bdr\" src=\"assets/email.svg\">\n          <div class=\"content-text\">{{hcard.mail}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-linkedin\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"globe-outline\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-youtube\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      </ion-card>\n    </div>\n    </div>\n    <div class=\"view-more\" (click)=\"morecards()\">\n      View More\n    </div>\n\n  <div class=\"text-center\" class=\"pb-15\">\n  <ion-checkbox color=\"success\" checked></ion-checkbox> I Agree for the <span>Terms and Conditions</span>\n</div>\n \n<ion-row>\n  <ion-col>\n    <ion-button expand=\"full\"  class=\"purple-bdr-btn\"  color=\"custom\" routerLink=\"/home\">Later</ion-button>\n  </ion-col>\n  <ion-col>\n    <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" routerLink=\"/digitalcard\">Share</ion-button>\n  </ion-col>\n</ion-row>\n</ion-content>\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "t2OM":
/*!*****************************************!*\
  !*** ./src/app/mycard/mycard.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 15px;\n  --padding-start: 15px;\n  --padding-top: 30px;\n  --ion-background-color:#fff;\n}\n\n.view-more {\n  text-align: center;\n  color: #871178;\n  text-decoration: underline;\n  font-size: 16px;\n  padding-bottom: 10%;\n}\n\nspan {\n  text-decoration: underline;\n  color: #871178;\n}\n\n.pb-15 {\n  padding-bottom: 15%;\n  font-size: 16px;\n  text-align: center;\n}\n\nh5 {\n  color: #fff;\n  line-height: 10px;\n}\n\n.bdr {\n  border: 1px solid #871178;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  padding: 2px 3px;\n  position: absolute;\n}\n\n.content-text {\n  font-size: 10px;\n  margin-left: 25px;\n  color: #871178;\n  padding-top: 3px;\n}\n\nion-icon {\n  color: #871178;\n  text-align: right;\n  padding-left: 20%;\n  margin-top: 50%;\n}\n\n.name {\n  font-size: 24px;\n  color: #871178;\n  line-height: 20px;\n}\n\n.phone {\n  font-size: 16px;\n  color: #707070;\n  line-height: 30px;\n}\n\n.comp-title {\n  color: #871178;\n  padding: 5%;\n}\n\n.horizontal-comp-title {\n  color: #871178;\n  padding: 20% 0 0 5%;\n}\n\n.horizontal {\n  width: 80%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG15Y2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUU7RUFFSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDRixtQkFBQTtBQUFKOztBQUVFO0VBRUksMEJBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0U7RUFFSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUROOztBQUlBO0VBRUksV0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0E7RUFFRyxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUVFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU1BO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBRUUsY0FBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUVFLGNBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBRUUsVUFBQTtFQUNBLGNBQUE7QUFQRiIsImZpbGUiOiJteWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIH1cclxuXHJcbiAgLnZpZXctbW9yZVxyXG4gIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG4gIHNwYW5cclxuICB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBjb2xvcjogIzg3MTE3ODtcclxuICB9XHJcblxyXG4gIC5wYi0xNVxyXG4gIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1JTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuaDVcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG5cclxuLmJkclxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg3MTE3ODtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jb250ZW50LXRleHRcclxue1xyXG4gICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuaW9uLWljb25cclxue1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG4ubmFtZVxyXG57XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5waG9uZVxyXG57XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29tcC10aXRsZVxyXG57XHJcbiAgY29sb3I6Izg3MTE3ODtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmhvcml6b250YWwtY29tcC10aXRsZVxyXG57XHJcbiAgY29sb3I6Izg3MTE3ODtcclxuICBwYWRkaW5nOiAyMCUgMCAwIDUlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbFxyXG57XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bzsgXHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=mycard-mycard-module-es2015.js.map