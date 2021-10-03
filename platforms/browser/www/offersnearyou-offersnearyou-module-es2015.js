(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offersnearyou-offersnearyou-module"],{

/***/ "0Wm/":
/*!*******************************************************!*\
  !*** ./src/app/offersnearyou/offersnearyou.module.ts ***!
  \*******************************************************/
/*! exports provided: OffersnearyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersnearyouPageModule", function() { return OffersnearyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _offersnearyou_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offersnearyou-routing.module */ "yUQ7");
/* harmony import */ var _offersnearyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offersnearyou.page */ "3Jsb");







let OffersnearyouPageModule = class OffersnearyouPageModule {
};
OffersnearyouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offersnearyou_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersnearyouPageRoutingModule"]
        ],
        declarations: [_offersnearyou_page__WEBPACK_IMPORTED_MODULE_6__["OffersnearyouPage"]]
    })
], OffersnearyouPageModule);



/***/ }),

/***/ "3Jsb":
/*!*****************************************************!*\
  !*** ./src/app/offersnearyou/offersnearyou.page.ts ***!
  \*****************************************************/
/*! exports provided: OffersnearyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersnearyouPage", function() { return OffersnearyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offersnearyou_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offersnearyou.page.html */ "yMny");
/* harmony import */ var _offersnearyou_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offersnearyou.page.scss */ "nefq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let OffersnearyouPage = class OffersnearyouPage {
    constructor(http, storage, router) {
        this.http = http;
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() {
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.ucity = this.udata[0].city;
            this.user_id = this.udata[0].id;
            console.log(this.ucity);
            // Get Offers Near you 
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "offersnearyou.php?city=" + this.ucity).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.offersNear = data;
                console.log("Offers Near you", this.offersNear);
            }));
        });
        // Get position 2
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos2.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position2 = data;
            console.log("position 2", this.position2);
        }));
        // Get position 3
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos3.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position3 = data;
            this.posbanner3 = this.position3[0].image;
            this.pos3bid = this.position3[0].bid;
            console.log("position 3", this.position3);
        }));
        // Get position 4
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos4.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position4 = data;
            console.log("position 4", this.position5);
        }));
        // Get position 5
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getbanerpos5.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position5 = data;
            console.log("position 5", this.position5);
        }));
    }
    offersdetails(i) {
        console.log(this.offersNear[i].bid);
        this.storage.set("bid", this.offersNear[i].bid);
        this.router.navigate(['details']);
    }
    pos1details() {
        this.storage.set("bid", this.pos1bid);
        this.router.navigate(['details']);
        this.Viewbusiness(this.pos1bid);
    }
    pos1bid(arg0, pos1bid) {
        throw new Error('Method not implemented.');
    }
    pos2details(i) {
        this.storage.set("bid", this.position2[i].bid);
        this.router.navigate(['details']);
        this.Viewbusiness(this.position2[i].bid);
    }
    pos3details() {
        this.storage.set("bid", this.pos3bid);
        this.router.navigate(['details']);
        this.Viewbusiness(this.pos3bid);
    }
    pos4details(i) {
        this.storage.set("bid", this.position4[i].id);
        this.router.navigate(['details']);
        this.Viewbusiness(this.position4[i].id);
    }
    pos5details(i) {
        this.storage.set("bid", this.position5[i].id);
        this.router.navigate(['details']);
        this.Viewbusiness(this.position5[i].id);
    }
    Viewbusiness(id) {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "viewbusiness.php?bid=" + id + "&user_id=" + this.user_id).subscribe(vrespo => {
            this.vrespo = vrespo;
            console.log("View Response:", this.user_id);
        });
    }
};
OffersnearyouPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
OffersnearyouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-offersnearyou',
        template: _raw_loader_offersnearyou_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offersnearyou_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OffersnearyouPage);



/***/ }),

/***/ "nefq":
/*!*******************************************************!*\
  !*** ./src/app/offersnearyou/offersnearyou.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.col-mt-3 {\n  margin-top: 3%;\n  margin-bottom: -5%;\n}\n\n.col-mt-3 img {\n  border-radius: 10px;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.count {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n.featured-img ion-col img {\n  border-radius: 50%;\n  padding: 0;\n}\n\n.hearticon-div {\n  display: flex;\n  align-items: center;\n}\n\n.heart-icon {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  color: #de0000;\n}\n\n.count {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n.icon-img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  border: 1px solid #871178;\n  padding: 5px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  height: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29mZmVyc25lYXJ5b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFPSjs7QUFMQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBVUo7O0FBUEE7RUFFSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVNKIiwiZmlsZSI6Im9mZmVyc25lYXJ5b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbmlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jb2wtbXQtMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC01JTtcclxufVxyXG4uY29sLW10LTMgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmltZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5mZWF0dXJlZC1pbWcgaW9uLWNvbCBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaGVhcnRpY29uLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaGVhcnQtaWNvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNkZTAwMDA7XHJcbn1cclxuLmNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaWNvbi1pbWdcclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg3MTE3ODtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "yMny":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offersnearyou/offersnearyou.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Offers</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=search-outline></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"3\" class=\"p-0\"  *ngFor=\"let offn of offersNear; let i=index\"  (click)=\"offersdetails(i)\">\n      <img *ngIf=\"offn.image\" class=\"icon-img\" src=\"{{offn.image}}\">\n      <img *ngIf=\"offn.image == ''\" class=\"icon-img\" src=\"assets/logo-color.png\" style=\"padding: 10px; background: #fafafa; border-radius: 25%;\">\n      <div class=\"img-title center text-center p-0\" text-center>{{offn.offer}}</div>\n    </ion-col>\n  </ion-row>\n  \n  \n  <ion-row>\n    <ion-col class=\"col-mt-3\" size=\"6\" *ngFor=\"let pos2 of position2; let i = index;\"  (click)=\"pos2details(i)\" >\n      <img class=\"bdr-rad-20\" style=\"height:150px; width:100%\"\n        src=\"{{pos2.image}}\">\n      <ion-row>\n        <ion-col class=\"img-title\">\n          {{pos2.business_name}} | {{pos2.city}}\n        </ion-col>\n        <div class=\"hearticon-div\">\n          <ion-icon class=\"heart-icon\" name=\"heart\"></ion-icon>\n        </div>\n        <ion-col size=\"2\" class=\"count text-overflow\">389</ion-col>\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"col-mt-3\"  (click)=\"pos3details()\">\n      <img \n        src=\"{{posbanner3}}\" />\n      <ion-row>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"col-mt-3\" size=\"6\"  *ngFor=\"let pos4 of position4; let i = index;\"  (click)=\"pos4details(i)\">\n      <img class=\"bdr-rad-20\" style=\"height:150px; width:100%\"\n        src=\"{{pos4.image}}\" />\n      <ion-row>\n        <ion-col class=\"img-title\">\n          {{pos4.business_name}} | {{pos4.city}}\n        </ion-col>\n        <div class=\"hearticon-div\">\n          <ion-icon class=\"heart-icon\" name=\"heart\"></ion-icon>\n        </div>\n        <ion-col size=\"2\" class=\"count text-overflow\">389</ion-col>\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n\n  <br>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let pos5 of position5; let i = index;\" (click)=\"pos5details(i)\" >\n      <img\n        src=\"{{pos5.image}}\"\n        style=\"border-radius: 10px;\">\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "yUQ7":
/*!***************************************************************!*\
  !*** ./src/app/offersnearyou/offersnearyou-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OffersnearyouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersnearyouPageRoutingModule", function() { return OffersnearyouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _offersnearyou_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offersnearyou.page */ "3Jsb");




const routes = [
    {
        path: '',
        component: _offersnearyou_page__WEBPACK_IMPORTED_MODULE_3__["OffersnearyouPage"]
    }
];
let OffersnearyouPageRoutingModule = class OffersnearyouPageRoutingModule {
};
OffersnearyouPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersnearyouPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=offersnearyou-offersnearyou-module-es2015.js.map