(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gdetails-gdetails-module"],{

/***/ "47e1":
/*!*********************************************!*\
  !*** ./src/app/gdetails/gdetails.module.ts ***!
  \*********************************************/
/*! exports provided: GdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdetailsPageModule", function() { return GdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _gdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gdetails-routing.module */ "bvvS");
/* harmony import */ var _gdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gdetails.page */ "n1aw");







let GdetailsPageModule = class GdetailsPageModule {
};
GdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["GdetailsPageRoutingModule"]
        ],
        declarations: [_gdetails_page__WEBPACK_IMPORTED_MODULE_6__["GdetailsPage"]]
    })
], GdetailsPageModule);



/***/ }),

/***/ "VuZa":
/*!*********************************************!*\
  !*** ./src/app/gdetails/gdetails.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 10px;\n  padding: 10px;\n}\n\n.shop-name {\n  color: #871178;\n  font-weight: bold;\n}\n\nion-badge {\n  background: #871178;\n  margin-top: 15px;\n}\n\n.segment-button-checked {\n  border-bottom: 2px solid #871178;\n  color: #871178;\n  background: rgba(135, 17, 120, 0.1);\n}\n\n.row-top-bdr {\n  border-top: 1px solid #e8e8e8;\n  text-align: center;\n  padding-top: 10px;\n  color: #871178;\n}\n\n.sep {\n  border-right: 1px solid #cacaca;\n}\n\n.time {\n  padding: 5px 10px 5px 40px;\n  color: #871178;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUVJLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0FBREo7O0FBR0E7RUFFSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0E7RUFFSSwrQkFBQTtBQURKOztBQUlBO0VBRUksMEJBQUE7RUFDQSxjQUFBO0FBRkoiLCJmaWxlIjoiZ2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmRcclxue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc2hvcC1uYW1lXHJcbntcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW9uLWJhZGdlXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICM4NzExNzg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZFxyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3MTE3ODtcclxuICAgIGNvbG9yOnJnYigxMzUgMTcgMTIwKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMzUgMTcgMTIwIC8gMTAlKTtcclxufVxyXG4ucm93LXRvcC1iZHJcclxue1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5zZXAgXHJcbntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYWNhY2E7XHJcbn1cclxuXHJcbi50aW1lXHJcbntcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA0MHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn0iXX0= */");

/***/ }),

/***/ "bvvS":
/*!*****************************************************!*\
  !*** ./src/app/gdetails/gdetails-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdetailsPageRoutingModule", function() { return GdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gdetails.page */ "n1aw");




const routes = [
    {
        path: '',
        component: _gdetails_page__WEBPACK_IMPORTED_MODULE_3__["GdetailsPage"]
    }
];
let GdetailsPageRoutingModule = class GdetailsPageRoutingModule {
};
GdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GdetailsPageRoutingModule);



/***/ }),

/***/ "n1aw":
/*!*******************************************!*\
  !*** ./src/app/gdetails/gdetails.page.ts ***!
  \*******************************************/
/*! exports provided: GdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdetailsPage", function() { return GdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gdetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gdetails.page.html */ "wzmL");
/* harmony import */ var _gdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gdetails.page.scss */ "VuZa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "fGQ8");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");










let GdetailsPage = class GdetailsPage {
    constructor(http, storage, CallNumber, launchNavigator, geolocation) {
        this.http = http;
        this.storage = storage;
        this.CallNumber = CallNumber;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.photos = [];
        this.segmentModel = "details";
    }
    ngOnInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.lat = resp.coords.latitude;
            this.long = resp.coords.longitude;
            console.log("Latitude", this.lat);
            console.log("Latitude", this.long);
        });
        this.storage.get("placeid").then(val => {
            this.place = val;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "gdetails.php?placeid=" + this.place).subscribe(response => {
                // console.log(response);
                this.details = response;
                this.name = this.details.result.name;
                this.rating = this.details.result.rating;
                this.address = this.details.result.vicinity;
                this.reviews = this.details.result.reviews;
                this.type = this.details.result.types;
                this.place_id = this.details.result.place_id;
                this.map_loc = this.details.result.url;
                this.open_close = this.details.result.opening_hours.weekday_text;
                this.hours = this.details.result.opening_hours;
                this.photos = this.details.result.photos;
                this.allphotos = this.photos[0].photo_reference;
                this.monday = this.open_close[0];
                this.tuesday = this.open_close[1];
                this.wednesday = this.open_close[2];
                this.thursday = this.open_close[3];
                this.friday = this.open_close[4];
                this.saturday = this.open_close[5];
                this.sunday = this.open_close[6];
                this.phoneno = this.details.result.formatted_phone_number;
                this.dest = this.name + this.address;
                console.log("open close", this.details);
                this.leng = this.photos.lenght;
                for (let item of this.photos) {
                    if (item === this.leng) {
                        return;
                    }
                }
                //console.log(AppComponent.ApiUrl+"getphotos.php?photo="+this.allphotos);
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getphotos.php?photo=" + this.allphotos).subscribe(resphoto => {
                    //console.log("Business photos", resphoto);
                    this.bphoto = resphoto;
                    this.converted_image = "data:image/png;base64," + this.bphoto;
                });
            });
        });
    }
    call() {
        console.log(this.phoneno);
        this.CallNumber.callNumber(this.phoneno, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    share() {
        console.log("Share");
    }
    navigate() {
        console.log("Navigate", this.geolocation.getCurrentPosition);
        let options = {
            start: [this.lat, this.long],
        };
        this.launchNavigator.navigate(this.dest + ', ON', options)
            .then(success => console.log('Launched navigator'), error => console.log('Error launching navigator', error));
    }
};
GdetailsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__["LaunchNavigator"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] }
];
GdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gdetails',
        template: _raw_loader_gdetails_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GdetailsPage);



/***/ }),

/***/ "wzmL":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gdetails/gdetails.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Business Name</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-segment \n  value=\"all\" \n  color=\"custom\" \n  scrollable=\"true\"\n  mode=\"md\"\n  [(ngModel)]=\"segmentModel\" >\n\n    <ion-segment-button value=\"details\">\n    <ion-label>Details</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"reviews\">\n    <ion-label>Reviews</ion-label>\n    </ion-segment-button>\n\n    \n  </ion-segment>\n\n  <div  *ngIf=\"segmentModel === 'details'\">\n    <ion-card style=\"height: 250px;\">\n      <img src=\"{{converted_image}}\" width=\"100%\" height=\"100%\" />\n    </ion-card>\n    <ion-card>\n      <ion-row no-padding>\n        <ion-col><p class=\"shop-name\">{{name}}</p></ion-col>\n        <ion-col size=\"2\"><ion-badge>{{rating}}</ion-badge></ion-col>\n      </ion-row>\n      <p class=\"location\"><ion-icon name=\"location-outline\"></ion-icon> {{address}}</p>\n      <ion-row text-center center class=\"row-top-bdr\">\n        <ion-col  (click)=\"call()\">\n          <ion-icon class=\"icons\" name=\"call-outline\"></ion-icon>\n          Call\n        </ion-col>\n        <ion-col class=\"sep\" size=\"0.2\"></ion-col>\n        <ion-col size=\"4\" (click)=\"navigate()\">\n          <ion-icon  class=\"icons\" name=\"navigate-outline\" ></ion-icon>\n          Directions\n        </ion-col>\n        <ion-col class=\"sep\" size=\"0.2\"></ion-col>\n        <ion-col>\n          <ion-icon  class=\"icons\" name=\"share-social-outline\" (click)=\"share()\"></ion-icon>\n          Share\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  \n    <ion-card>\n      <strong>Store Timings :</strong><br>\n      <div class=\"time\">{{monday}}</div>\n      <div class=\"time\">{{tuesday}}</div>\n      <div class=\"time\">{{wednesday}}</div>\n      <div class=\"time\">{{thursday}}</div>\n      <div class=\"time\">{{friday}}</div>\n      <div class=\"time\">{{saturday}}</div>\n      <div class=\"time\">{{sunday}}</div>\n    </ion-card>\n  \n  </div>\n  \n  \n  <div *ngIf=\"segmentModel === 'products'\">\n  <ion-card>\n     <ion-row no-padding>\n       <ion-col size=\"2\">\n         <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n       </ion-col>\n       <ion-col>\n         <p class=\"shop-name\">Product Name</p>\n         <p class=\"cat\">Product Description</p>        \n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-badge>99.00</ion-badge>\n        </ion-col>\n     </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row no-padding>\n      <ion-col size=\"2\">\n        <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n      </ion-col>\n      <ion-col>\n        <p class=\"shop-name\">Product Name</p>\n        <p class=\"cat\">Product Description</p>        \n       </ion-col>\n       <ion-col size=\"2\">\n         <ion-badge>99.00</ion-badge>\n       </ion-col>\n    </ion-row>\n </ion-card>\n <ion-card>\n  <ion-row no-padding>\n    <ion-col size=\"2\">\n      <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n    </ion-col>\n    <ion-col>\n      <p class=\"shop-name\">Product Name</p>\n      <p class=\"cat\">Product Description</p>        \n     </ion-col>\n     <ion-col size=\"2\">\n       <ion-badge>99.00</ion-badge>\n     </ion-col>\n  </ion-row>\n</ion-card>\n<ion-card>\n<ion-row no-padding>\n  <ion-col size=\"2\">\n    <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n  </ion-col>\n  <ion-col>\n    <p class=\"shop-name\">Product Name</p>\n    <p class=\"cat\">Product Description</p>        \n   </ion-col>\n   <ion-col size=\"2\">\n     <ion-badge>99.00</ion-badge>\n   </ion-col>\n</ion-row>\n</ion-card>\n<ion-card>\n<ion-row no-padding>\n  <ion-col size=\"2\">\n    <img src=\"https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png\" >\n  </ion-col>\n  <ion-col>\n    <p class=\"shop-name\">Product Name</p>\n    <p class=\"cat\">Product Description</p>        \n   </ion-col>\n   <ion-col size=\"2\">\n     <ion-badge>99.00</ion-badge>\n   </ion-col>\n</ion-row>\n</ion-card>\n</div>\n  \n<div *ngIf=\"segmentModel === 'reviews'\">\n  <ion-card>\n    <strong>Add Review</strong>\n    <ion-row>\n      <ion-col class=\"rating\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"text-right\">\n      <ion-button size=\"small\">Submit Review</ion-button>\n    </ion-row>\n  </ion-card>\n\n  <ion-card no-padding  *ngFor=\"let rev of reviews\">\n   <ion-row>\n     <ion-col size=\"3\">\n       <img class=\"img-round\" src=\"{{rev.profile_photo_url}}\">\n     </ion-col>\n     <ion-col>\n      <p class=\"review-name\">{{rev.author_name}}</p>\n      <p><ion-icon name=\"calendar-outline\"></ion-icon> 2021-02-17 10:31</p>\n     </ion-col>\n     <ion-col size=\"2\">\n       <ion-badge><ion-icon name=\"star-outline\"></ion-icon> {{rev.rating}}</ion-badge>\n     </ion-col>\n   </ion-row>\n   <ion-row>\n     <ion-col>\n      <p class=\"review-text\" style=\"line-height: 12px;\">{{rev.text}}</p>\n     </ion-col>\n   </ion-row>\n  </ion-card>\n\n  \n</div>\n\n  <div  *ngIf=\"segmentModel === 'offers'\">\n<ion-card>\n  <ion-row>\n    <ion-col>BUY ONE GET ONE FREE</ion-col>\n    <ion-col size=\"3\">\n      <ion-button color=\"primary\" size=\"small\" expand=\"block\" type=\"ios\">Claim</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n</div>\n\n<div class=\"customer\" *ngIf = \"Customer\">\n  <ion-card>\n    <ion-card-header style=\"text-align: right;\">\n      <ion-icon class=\"close\" (click)=\"CustClose()\" name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col style=\"text-align: right;\">\n         \n        </ion-col>\n      </ion-row>\n          <ion-row>\n            <ion-col size=\"10\" class=\"cust-name\">\n              <div class=\"cust-name\">Surendra</div>\n              <div class=\"cust-lang\">Can Speak: English, Telugu, Hindi</div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"call-btn\" routerLink=\"/calling\"><ion-icon name=\"call-outline\"></ion-icon></ion-col>\n          </ion-row>\n        <hr>\n          <ion-row>\n            <ion-col size=\"10\" class=\"cust-name\">\n              <div class=\"cust-name\">Senthil Kumar</div>\n              <div class=\"cust-lang\">Can Speak: Tamil, English</div>\n            </ion-col>\n            <ion-col size=\"2\" class=\"call-btn\" routerLink=\"/calling\"><ion-icon name=\"call-outline\"></ion-icon></ion-col>\n          </ion-row>\n    </ion-card-content>\n  </ion-card>\n  \n</div>\n\n<div #map id=\"map\"></div>\n</ion-content>\n\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col>\n      <ion-icon name=\"home\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=gdetails-gdetails-module-es2015.js.map