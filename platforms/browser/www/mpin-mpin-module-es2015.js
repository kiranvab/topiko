(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mpin-mpin-module"],{

/***/ "Mubj":
/*!*************************************!*\
  !*** ./src/app/mpin/mpin.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --ion-background-color:linear-gradient(#871178, #3C1378) !important;\n}\n\n.logo {\n  text-align: center;\n  padding-top: 40%;\n  padding-bottom: 10px;\n}\n\nion-item {\n  --ion-background-color: transparent;\n  text-align: center;\n  color: #fff;\n  font-size: 32px;\n  --padding-start: 10;\n  --padding-end: 10;\n  border-bottom: 3px solid;\n}\n\nion-input {\n  border-bottom: 2px;\n  --padding-start:20px !important;\n}\n\n.item-inner {\n  border: 5px;\n}\n\n.mt25-10 {\n  margin: 10% 10% 5% 9%;\n}\n\n.mt-10 {\n  margin-top: 10%;\n}\n\n.otp-text {\n  text-align: center;\n  font-size: 20px;\n  color: #cacaca;\n  padding-top: 20px;\n}\n\n.lbl-text {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21waW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUVBQUE7QUFBSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBRUksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBREo7O0FBSUE7RUFFSSxrQkFBQTtFQUNBLCtCQUFBO0FBRko7O0FBTUE7RUFFSSxXQUFBO0FBSko7O0FBT0E7RUFFSSxxQkFBQTtBQUxKOztBQVFBO0VBRUksZUFBQTtBQU5KOztBQVFBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTko7O0FBU0E7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVBKIiwiZmlsZSI6Im1waW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRcclxue1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNDMTM3OCkgIWltcG9ydGFudDtcclxufVxyXG4ubG9nb1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTA7XHJcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZDtcclxufVxyXG5cclxuaW9uLWlucHV0XHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLml0ZW0taW5uZXJcclxue1xyXG4gICAgYm9yZGVyOjVweDtcclxufVxyXG5cclxuLm10MjUtMTBcclxue1xyXG4gICAgbWFyZ2luOiAxMCUgMTAlIDUlIDklO1xyXG59XHJcblxyXG4ubXQtMTAgXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4ub3RwLXRleHRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG59XHJcblxyXG4ubGJsLXRleHRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "SOG4":
/*!*************************************!*\
  !*** ./src/app/mpin/mpin.module.ts ***!
  \*************************************/
/*! exports provided: MpinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MpinPageModule", function() { return MpinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mpin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mpin-routing.module */ "tRk9");
/* harmony import */ var _mpin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mpin.page */ "WJHf");







let MpinPageModule = class MpinPageModule {
};
MpinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mpin_routing_module__WEBPACK_IMPORTED_MODULE_5__["MpinPageRoutingModule"]
        ],
        declarations: [_mpin_page__WEBPACK_IMPORTED_MODULE_6__["MpinPage"]]
    })
], MpinPageModule);



/***/ }),

/***/ "WJHf":
/*!***********************************!*\
  !*** ./src/app/mpin/mpin.page.ts ***!
  \***********************************/
/*! exports provided: MpinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MpinPage", function() { return MpinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mpin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mpin.page.html */ "otMp");
/* harmony import */ var _mpin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mpin.page.scss */ "Mubj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");








let MpinPage = class MpinPage {
    constructor(route, http, router, storage) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params && params.user) {
                this.udata = JSON.parse(params.user);
                this.mobile = this.udata[0].mobile;
                console.log(this.mobile);
                this.storage.set("userdetails", this.udata);
                console.log(this.udata);
            }
        });
    }
    gotoNextField(nextElement) {
        nextElement.setFocus();
        this.check();
    }
    check() {
        if (this.mpin1 && this.mpin2 && this.mpin3 && this.mpin4 && this.cmpin && this.cmpin2 && this.cmpin3 && this.cmpin4) {
            this.setmpin();
        }
    }
    setmpin() {
        let mpin = this.mpin1 + "" + this.mpin2 + "" + this.mpin3 + "" + this.mpin4;
        let cmpin = this.cmpin1 + "" + this.cmpin2 + "" + this.cmpin3 + "" + this.cmpin4;
        console.log(mpin);
        console.log(cmpin);
        if (mpin != cmpin) {
            alert("MPIN and Confirm MPIN should be Same");
        }
        let mobile = this.mobile;
        console.log(mobile);
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "createpassword.php?mobile=" + mobile + "&mpin=" + mpin).subscribe(mpin => {
            this.mpinstatus = mpin;
            console.log(this.mpinstatus);
            if (this.mpinstatus == 1) {
                this.router.navigate(['digitalcard']);
            }
            else {
                alert("Invalid OTP");
            }
        });
    }
};
MpinPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
MpinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-mpin',
        template: _raw_loader_mpin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mpin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MpinPage);



/***/ }),

/***/ "otMp":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mpin/mpin.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background\">\n\n  <div class=\"logo\">\n    <img src=\"assets/logo.png\" width=\"30%\">\n  </div>\n\n  <ion-row class=\"mt25-10\">\n    <ion-col size=\"12\" class=\"lbl-text\">\n      <ion-label>Create MPIN</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"mpin1\" type=\"number\" max=\"1\" #mpin_1 (keyup)=\"gotoNextField(mpin_2)\" ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"mpin2\" type=\"number\" max=\"1\" #mpin_2 (keyup)=\"gotoNextField(mpin_3)\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"mpin3\" type=\"number\" max=\"1\" #mpin_3 (keyup)=\"gotoNextField(mpin_4)\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"mpin4\" type=\"number\" max=\"1\" #mpin_4 (keyup)=\"gotoNextField(cmpin_1)\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"mt25-10\">\n    <ion-col size=\"12\" class=\"lbl-text\">\n    <ion-label>Confirm MPIN</ion-label>\n  </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"cmpin1\" type=\"number\" max=\"1\" #cmpin_1 (keyup)=\"gotoNextField(cmpin_2)\" ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"cmpin2\" type=\"number\" max=\"1\" #cmpin_2 (keyup)=\"gotoNextField(cmpin_3)\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"cmpin3\" type=\"number\" max=\"1\" #cmpin_3 (keyup)=\"gotoNextField(cmpin_4)\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"cmpin4\" type=\"number\" max=\"1\" #cmpin_4 (keyup)=\"check()\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  \n  <ion-row class=\"mt-10 \">\n    <ion-col class=\"text-center\">\n      <ion-col>\n        <img src=\"assets/refresh.svg\" (click)=\"setmpin()\">\n      </ion-col>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "tRk9":
/*!*********************************************!*\
  !*** ./src/app/mpin/mpin-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MpinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MpinPageRoutingModule", function() { return MpinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mpin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mpin.page */ "WJHf");




const routes = [
    {
        path: '',
        component: _mpin_page__WEBPACK_IMPORTED_MODULE_3__["MpinPage"]
    }
];
let MpinPageRoutingModule = class MpinPageRoutingModule {
};
MpinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MpinPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=mpin-mpin-module-es2015.js.map