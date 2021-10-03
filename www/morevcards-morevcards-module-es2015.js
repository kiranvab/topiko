(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["morevcards-morevcards-module"],{

/***/ "DEnA":
/*!***********************************************!*\
  !*** ./src/app/morevcards/morevcards.page.ts ***!
  \***********************************************/
/*! exports provided: MorevcardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorevcardsPage", function() { return MorevcardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_morevcards_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./morevcards.page.html */ "YDOB");
/* harmony import */ var _morevcards_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./morevcards.page.scss */ "y87a");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");







let MorevcardsPage = class MorevcardsPage {
    constructor(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
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
        this.route.queryParams.subscribe(params => {
            if (params && params.card) {
                this.card = JSON.parse(params.card);
                console.log(this.card[0].user_id);
                this.uid = this.card[0].user_id;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getcarddetails.php?user_id=" + this.uid).subscribe(data => {
                    console.log(data);
                    this.carddata = data;
                    // this.name = this.carddata[0].name;
                    // this.mobile = this.carddata[0].mobile;
                });
            }
        });
    }
};
MorevcardsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MorevcardsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-morevcards',
        template: _raw_loader_morevcards_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_morevcards_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MorevcardsPage);



/***/ }),

/***/ "MGTT":
/*!*********************************************************!*\
  !*** ./src/app/morevcards/morevcards-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MorevcardsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorevcardsPageRoutingModule", function() { return MorevcardsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _morevcards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./morevcards.page */ "DEnA");




const routes = [
    {
        path: '',
        component: _morevcards_page__WEBPACK_IMPORTED_MODULE_3__["MorevcardsPage"]
    }
];
let MorevcardsPageRoutingModule = class MorevcardsPageRoutingModule {
};
MorevcardsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MorevcardsPageRoutingModule);



/***/ }),

/***/ "RdsV":
/*!*************************************************!*\
  !*** ./src/app/morevcards/morevcards.module.ts ***!
  \*************************************************/
/*! exports provided: MorevcardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorevcardsPageModule", function() { return MorevcardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _morevcards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./morevcards-routing.module */ "MGTT");
/* harmony import */ var _morevcards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./morevcards.page */ "DEnA");







let MorevcardsPageModule = class MorevcardsPageModule {
};
MorevcardsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _morevcards_routing_module__WEBPACK_IMPORTED_MODULE_5__["MorevcardsPageRoutingModule"]
        ],
        declarations: [_morevcards_page__WEBPACK_IMPORTED_MODULE_6__["MorevcardsPage"]]
    })
], MorevcardsPageModule);



/***/ }),

/***/ "YDOB":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/morevcards/morevcards.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View More</ion-title>\n    <ion-buttons slot=\"end\" class=\"create-icon\">\n      <ion-icon name=\"ellipsis-vertical\" color=\"custom\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"width: 90%; margin: 0 auto;\">\n    <ion-col>\n      <img src=\"assets/rotate.svg\" (click)=\"rotate()\" >\n    </ion-col>\n    <ion-col style=\"font-size: 18px; text-align: center;\" size=\"8\">Default</ion-col>\n    <ion-col style=\"text-align: right;\">\n      <img src=\"assets/docs.svg\" >\n    </ion-col>\n  </ion-row>\n  \n  <div *ngIf=\"vdiv\">\n  <div class=\"vertical\" id=\"vertical\" *ngFor=\"let card of carddata\">\n  <ion-card  style=\"background:url(assets/vertical-front.jpg); background-position: top; background-size: cover;\">\n    <ion-row class=\"text-center\">\n      <ion-col style=\"text-align: left; padding-top: 10px;\" size=\"4\">\n        <img src=\"assets/logo.png\" width=\"50%\">\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-col size=\"12\">\n            <img src=\"assets/profile.png\" width=\"45%\">\n          </ion-col>\n          <ion-col size=\"12\" class=\"name\">\n            {{card.name}}\n          </ion-col>\n          <ion-col size=\"12\" class=\"phone\">\n            {{card.mobile}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card  style=\"background:url(assets/vertical-back.jpg); background-position: top; background-size: cover;\">\n    <ion-row>\n      <ion-col>\n        <div class=\"comp-title\">{{card.workingin}}</div>\n        <ion-row>\n          <ion-col>\n            <img class=\"bdr\" src=\"assets/map-marker.svg\">\n            <div class=\"content-text\">\n              {{card.address}}\n            </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <img class=\"bdr\" src=\"assets/call.svg\">\n            <div class=\"content-text\">{{card.mobile}}</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <img class=\"bdr\" src=\"assets/email.svg\">\n            <div class=\"content-text\">{{card.mail}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-linkedin\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"globe-outline\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"logo-youtube\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col  style=\"text-align: right;\">\n        <ion-row>\n          <ion-col>\n            <h5>{{card.profession}}</h5>\n            <h5>{{card.designation}}</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"padding-top: 32%;\">\n          <ion-col>\n            <img src=\"assets/logo.png\" width=\"30%\">\n          </ion-col>\n        </ion-row>\n      </ion-col>\n     \n    </ion-row>\n    </ion-card>\n  </div>\n</div>\n\n \n  <div *ngIf=\"hdiv\">\n  <div class=\"horizontal\" id=\"horizontal\" *ngFor=\"let hcard of carddata\">\n    <ion-card  style=\"background:url(assets/horizontal-front.jpg); background-position: top; background-size: cover;\">\n      <ion-row class=\"text-center\">\n        <ion-col style=\"text-align: right; padding-top: 10px;\" size=\"12\">\n          <img src=\"assets/logo.png\" width=\"20%\">\n        </ion-col>\n        <ion-col>\n          <ion-row style=\"margin-top: 20%; margin-bottom:37% ;\">\n            <ion-col size=\"12\">\n              <img src=\"assets/profile.png\" width=\"45%\">\n            </ion-col>\n            <ion-col size=\"12\" class=\"name\">\n              {{hcard.name}}\n            </ion-col>\n            <ion-col size=\"12\" class=\"phone\">\n              {{hcard.mobile}}\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  \n    <ion-card  style=\"background:url(assets/horizontal-back.jpg); background-position: top; background-size: cover; padding: 0 5% 16% 5%; \">\n      <ion-row>\n        \n        <ion-col>\n          <ion-row style=\"text-align: right;\">\n            <ion-col>\n              <img src=\"assets/logo.png\" width=\"30%\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h5>{{hcard.profession}}</h5>\n              <h5>{{hcard.designation}}</h5>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"horizontal-comp-title\">{{hcard.workingin}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img class=\"bdr\" src=\"assets/map-marker.svg\">\n          <div class=\"content-text\">\n            {{hcard.address}}\n          </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img class=\"bdr\" src=\"assets/call.svg\">\n          <div class=\"content-text\">{{hcard.mobile}}</div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img class=\"bdr\" src=\"assets/email.svg\">\n          <div class=\"content-text\">{{hcard.mail}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-linkedin\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"globe-outline\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"logo-youtube\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      </ion-card>\n    </div>\n  </div>\n    <div class=\"price\">\n      250 /-\n    </div>\n\n  <div class=\"text-center\" class=\"pb-15\">\n  <ion-checkbox color=\"success\" checked></ion-checkbox> I Agree for the <span>Terms and Conditions</span>\n</div>\n \n<ion-row>\n \n  <ion-col>\n    <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" routerLink=\"/home\">Buy</ion-button>\n  </ion-col>\n</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "y87a":
/*!*************************************************!*\
  !*** ./src/app/morevcards/morevcards.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 15px;\n  --padding-start: 15px;\n  --padding-top: 30px;\n  --ion-background-color:#fff;\n}\n\n.price {\n  text-align: center;\n  color: #871178;\n  font-size: 32px;\n  padding-bottom: 10%;\n}\n\nspan {\n  text-decoration: underline;\n  color: #871178;\n}\n\n.pb-15 {\n  padding-bottom: 15%;\n  font-size: 16px;\n  text-align: center;\n}\n\nh5 {\n  color: #fff;\n  line-height: 10px;\n}\n\n.bdr {\n  border: 1px solid #871178;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  padding: 2px 3px;\n  position: absolute;\n}\n\n.content-text {\n  font-size: 10px;\n  margin-left: 25px;\n  color: #871178;\n  padding-top: 3px;\n}\n\nion-icon {\n  color: #871178;\n  text-align: right;\n  padding-left: 20%;\n  margin-top: 50%;\n}\n\n.name {\n  font-size: 24px;\n  color: #871178;\n  line-height: 20px;\n}\n\n.phone {\n  font-size: 16px;\n  color: #707070;\n  line-height: 30px;\n}\n\n.comp-title {\n  color: #871178;\n  padding: 5%;\n}\n\n.horizontal-comp-title {\n  color: #871178;\n  padding: 20% 0 0 5%;\n}\n\n.horizontal {\n  width: 80%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vcmV2Y2FyZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNGLG1CQUFBO0FBQUo7O0FBRUU7RUFFSSwwQkFBQTtFQUNBLGNBQUE7QUFBTjs7QUFHRTtFQUVJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRE47O0FBSUE7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUVHLGVBQUE7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBTUE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSkY7O0FBTUE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFFRSxjQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBRUUsY0FBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFFRSxVQUFBO0VBQ0EsY0FBQTtBQVBGIiwiZmlsZSI6Im1vcmV2Y2FyZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlXHJcbiAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIH1cclxuICBzcGFuXHJcbiAge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgY29sb3I6ICM4NzExNzg7XHJcbiAgfVxyXG5cclxuICAucGItMTVcclxuICB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbmg1XHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5iZHJcclxue1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NzExNzg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAycHggM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uY29udGVudC10ZXh0XHJcbntcclxuICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuXHJcbmlvbi1pY29uXHJcbntcclxuICBjb2xvcjogIzg3MTE3ODtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuLm5hbWVcclxue1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzg3MTE3ODtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4ucGhvbmVcclxue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbXAtdGl0bGVcclxue1xyXG4gIGNvbG9yOiM4NzExNzg7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLWNvbXAtdGl0bGVcclxue1xyXG4gIGNvbG9yOiM4NzExNzg7XHJcbiAgcGFkZGluZzogMjAlIDAgMCA1JTtcclxufVxyXG5cclxuLmhvcml6b250YWxcclxue1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87IFxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=morevcards-morevcards-module-es2015.js.map