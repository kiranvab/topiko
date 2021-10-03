(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopsnearyou-shopsnearyou-module"],{

/***/ "S/We":
/*!*************************************************************!*\
  !*** ./src/app/shopsnearyou/shopsnearyou-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShopsnearyouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsnearyouPageRoutingModule", function() { return ShopsnearyouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shopsnearyou_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopsnearyou.page */ "hpvx");




const routes = [
    {
        path: '',
        component: _shopsnearyou_page__WEBPACK_IMPORTED_MODULE_3__["ShopsnearyouPage"]
    }
];
let ShopsnearyouPageRoutingModule = class ShopsnearyouPageRoutingModule {
};
ShopsnearyouPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopsnearyouPageRoutingModule);



/***/ }),

/***/ "VdW1":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopsnearyou/shopsnearyou.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Shops</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=search-outline></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-input type=\"text\" [(ngModel)]=\"searchText\"  class=\"form-control\" placeholder=\"Search By Category\" ></ion-input> -->\n\n  <ion-row>\n    <ion-col size=\"3\" class=\"p-0\"  *ngFor=\"let shopn of shopsNear ;  let i=index\">\n      <img *ngIf=\"shopn.logo\"  src=\"{{shopn.logo}}\"  class=\"icon-img\"  (click)=\"details(i)\">\n      <img *ngIf=\"shopn.logo == ''\" class=\"icon-img\" src=\"assets/logo.png\" style=\"padding: 10px; background: #871178; border-radius: 25%;\"  (click)=\"details(i)\">\n      <div class=\"img-title center text-center p-0\" text-center>{{shopn.business_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"3\" class=\"p-0\"  *ngFor=\"let list of listing | slice:1:19;  let i=index\">\n      <img src=\"{{list.icon}}\" class=\"icon-img\">\n      <div class=\"img-title center text-center p-0\" text-center>{{list.name}}</div>\n    </ion-col>\n  </ion-row>\n\n  \n \n  <ion-row>\n    <ion-col class=\"col-mt-3\" size=\"6\" *ngFor=\"let pos2 of position2; let i = index;\"  (click)=\"pos2details(i)\" >\n      <img class=\"bdr-rad-20\" style=\"height:150px; width:100%\"\n        src=\"{{pos2.image}}\">\n      <ion-row>\n        <ion-col class=\"img-title\">\n          {{pos2.business_name}} | {{pos2.city}}\n        </ion-col>\n        <div class=\"hearticon-div\">\n          <ion-icon class=\"heart-icon\" name=\"heart\"></ion-icon>\n        </div>\n        <ion-col size=\"2\" class=\"count text-overflow\">389</ion-col>\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"col-mt-3\"  (click)=\"pos3details()\">\n      <img \n        src=\"{{posbanner3}}\" />\n      <ion-row>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"col-mt-3\" size=\"6\"  *ngFor=\"let pos4 of position4; let i = index;\"  (click)=\"pos4details(i)\">\n      <img class=\"bdr-rad-20\" style=\"height:150px; width:100%\"\n        src=\"{{pos4.image}}\" />\n      <ion-row>\n        <ion-col class=\"img-title\">\n          {{pos4.business_name}} | {{pos4.city}}\n        </ion-col>\n        <div class=\"hearticon-div\">\n          <ion-icon class=\"heart-icon\" name=\"heart\"></ion-icon>\n        </div>\n        <ion-col size=\"2\" class=\"count text-overflow\">389</ion-col>\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n\n  <br>\n\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let pos5 of position5; let i = index;\" (click)=\"pos5details(i)\" >\n      <img\n        src=\"{{pos5.image}}\"\n        style=\"border-radius: 10px;\">\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "ZHX0":
/*!*****************************************************!*\
  !*** ./src/app/shopsnearyou/shopsnearyou.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopsnearyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsnearyouPageModule", function() { return ShopsnearyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shopsnearyou_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopsnearyou-routing.module */ "S/We");
/* harmony import */ var _shopsnearyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopsnearyou.page */ "hpvx");







let ShopsnearyouPageModule = class ShopsnearyouPageModule {
};
ShopsnearyouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shopsnearyou_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopsnearyouPageRoutingModule"],
        ],
        declarations: [_shopsnearyou_page__WEBPACK_IMPORTED_MODULE_6__["ShopsnearyouPage"]]
    })
], ShopsnearyouPageModule);



/***/ }),

/***/ "hpvx":
/*!***************************************************!*\
  !*** ./src/app/shopsnearyou/shopsnearyou.page.ts ***!
  \***************************************************/
/*! exports provided: ShopsnearyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsnearyouPage", function() { return ShopsnearyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopsnearyou_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopsnearyou.page.html */ "VdW1");
/* harmony import */ var _shopsnearyou_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopsnearyou.page.scss */ "q8+P");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ShopsnearyouPage = class ShopsnearyouPage {
    constructor(http, storage, geolocation, router) {
        this.http = http;
        this.storage = storage;
        this.geolocation = geolocation;
        this.router = router;
        this.isDesc = false;
        this.column = 'CategoryName';
    }
    // sort(property) {
    //   this.isDesc = !this.isDesc; //change the direction    
    //   this.column = property;
    //   let direction = this.isDesc ? 1 : -1;
    //   this.shopsNear.sort(function (a, b) {
    //     if (a[property] < b[property]) {
    //       return -1 * direction;
    //     }
    //     else if (a[property] > b[property]) {
    //       return 1 * direction;
    //     }
    //     else {
    //       return 0;
    //     }
    //   });
    // };
    ngOnInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.lat = resp.coords.latitude;
            this.long = resp.coords.longitude;
            console.log("Latitude", this.lat);
            console.log("Latitude", this.long);
            // this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.lat+','+this.long+'&radius=2500&type=shop&key=AIzaSyCPuQadZpFuDF9KOWFrlthnPRdRJb-QlrI').subscribe((response) =>
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "localstores.php?lat=" + this.lat + "&long=" + this.long).subscribe(response => {
                this.listing = response;
                this.listing = this.listing.results;
                console.log("Places", this.listing);
            });
        });
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.ucity = this.udata[0].city;
            console.log(this.ucity);
            // Get Shops Near you 
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "shopsnearyou.php?city=" + this.ucity).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.shopsNear = data;
                console.log("Shops Near You", this.shopsNear);
            }));
        });
        // Get position 2
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getbanerpos2.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position2 = data;
            console.log("position 2", this.position2);
        }));
        // Get position 3
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getbanerpos3.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position3 = data;
            this.posbanner3 = this.position3[0].image;
            this.pos3bid = this.position3[0].bid;
            console.log("position 3", this.position3);
        }));
        // Get position 4
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getbanerpos4.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position4 = data;
            console.log("position 4", this.position5);
        }));
        // Get position 5
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getbanerpos5.php").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.position5 = data;
            console.log("position 5", this.position5);
        }));
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
    // pos5details(i){
    //   this.storage.set("bid",this.position5[i].id);
    //   this.router.navigate(['details']);
    //   this.Viewbusiness(this.position5[i].id);
    // }
    details(i) {
        this.storage.set("bid", this.shopsNear[i].bid);
        this.router.navigate(['details']);
        this.Viewbusiness(this.shopsNear[i].id);
    }
    Viewbusiness(id) {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "viewbusiness.php?bid=" + id + "&user_id=" + this.user_id).subscribe(vrespo => {
            this.vrespo = vrespo;
            console.log("View Response:", this.user_id);
        });
    }
};
ShopsnearyouPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ShopsnearyouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-shopsnearyou',
        template: _raw_loader_shopsnearyou_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shopsnearyou_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShopsnearyouPage);



/***/ }),

/***/ "q8+P":
/*!*****************************************************!*\
  !*** ./src/app/shopsnearyou/shopsnearyou.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.col-mt-3 {\n  margin-top: 3%;\n  margin-bottom: -5%;\n}\n\n.col-mt-3 img {\n  border-radius: 10px;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.count {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n.featured-img ion-col img {\n  border-radius: 50%;\n  padding: 0;\n}\n\n.hearticon-div {\n  display: flex;\n  align-items: center;\n}\n\n.heart-icon {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  color: #de0000;\n}\n\n.count {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n.icon-img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  border: 1px solid #871178;\n  padding: 5px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Nob3BzbmVhcnlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFVSjs7QUFQQTtFQUVJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBU0oiLCJmaWxlIjoic2hvcHNuZWFyeW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5pb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY29sLW10LTMge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNSU7XHJcbn1cclxuLmNvbC1tdC0zIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5pbWctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5jb3VudCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uZmVhdHVyZWQtaW1nIGlvbi1jb2wgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmhlYXJ0aWNvbi1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmhlYXJ0LWljb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZGUwMDAwO1xyXG59XHJcbi5jb3VudCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmljb24taW1nXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NzExNzg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=shopsnearyou-shopsnearyou-module-es2015.js.map