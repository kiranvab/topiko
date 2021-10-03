(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gcategory-gcategory-module"],{

/***/ "Luw3":
/*!*******************************************************!*\
  !*** ./src/app/gcategory/gcategory-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcategoryPageRoutingModule", function() { return GcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gcategory.page */ "eUhW");




const routes = [
    {
        path: '',
        component: _gcategory_page__WEBPACK_IMPORTED_MODULE_3__["GcategoryPage"]
    }
];
let GcategoryPageRoutingModule = class GcategoryPageRoutingModule {
};
GcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GcategoryPageRoutingModule);



/***/ }),

/***/ "aaJf":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gcategory/gcategory.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"ios\"></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cateogory</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- <ion-item>\n    <ion-range min=\"1\" max=\"50\" step=\"5\" snaps=\"true\" color=\"secondary\">\n      <ion-label slot=\"start\">1</ion-label>\n      <ion-label slot=\"end\">50</ion-label>\n    </ion-range>\n  </ion-item> -->\n\n<ion-label class=\"titl\">TOPIKO Listed</ion-label>\n\n<ion-card *ngFor=\"let bus of business  let i=index;\"  (click)=\"catdetails(i)\">\n  <ion-row>\n    <div class=\"avatar\">\n      <ion-avatar>\n        <img  class=\"border\" src=\"{{bus.logo}}\" />\n      </ion-avatar>\n    </div>\n    <ion-col class=\"text-overflow\">\n      <p class=\"user-name\">{{bus.business_name}}</p>\n      <ion-row class=\"star\">\n        <span>\n          {{bus.busienss_story}} \n        </span>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-card *ngFor=\"let ser of services  let i=index;\"  (click)=\"serdetails(i)\">\n  <ion-row>\n    <div class=\"avatar\">\n      <ion-avatar>\n        <img  class=\"border\" src=\"{{ser.logo}}\" />\n      </ion-avatar>\n    </div>\n    <ion-col class=\"text-overflow\">\n      <p class=\"user-name\">{{ser.business_name}}</p>\n      <ion-row class=\"star\">\n        <span>\n          {{ser.busienss_story}} \n        </span>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n\n\n<ion-label class=\"titl\">Powered by Google</ion-label>\n  <ion-card *ngFor=\"let cat of categories | slice:0:19; let i=index;\"  (click)=\"gdetails(i)\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar *ngIf=\"cat.opening_hours\">\n          <img  class=\"border\" src=\"https://topiko.com/app/icons/open.jpg\" />\n        </ion-avatar>\n        <ion-avatar *ngIf=\"cat.opening_hours == false\">\n          <img  class=\"border\" src=\"https://topiko.com/app/icons/closed.jpg\" />\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">{{cat.name}}</p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>\n            {{cat.rating}} Ratings\n          </span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"heart\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "cWrZ":
/*!***********************************************!*\
  !*** ./src/app/gcategory/gcategory.module.ts ***!
  \***********************************************/
/*! exports provided: GcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcategoryPageModule", function() { return GcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _gcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gcategory-routing.module */ "Luw3");
/* harmony import */ var _gcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gcategory.page */ "eUhW");







let GcategoryPageModule = class GcategoryPageModule {
};
GcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["GcategoryPageRoutingModule"]
        ],
        declarations: [_gcategory_page__WEBPACK_IMPORTED_MODULE_6__["GcategoryPage"]]
    })
], GcategoryPageModule);



/***/ }),

/***/ "eUhW":
/*!*********************************************!*\
  !*** ./src/app/gcategory/gcategory.page.ts ***!
  \*********************************************/
/*! exports provided: GcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcategoryPage", function() { return GcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gcategory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gcategory.page.html */ "aaJf");
/* harmony import */ var _gcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gcategory.page.scss */ "fK7+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");










let GcategoryPage = class GcategoryPage {
    constructor(actionsheetCtrl, router, storage, http, geolocation) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.router = router;
        this.storage = storage;
        this.http = http;
        this.geolocation = geolocation;
    }
    ngOnInit() {
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.user_id = this.udata[0].id;
        });
        this.storage.get("catid").then(val => {
            this.cat_id = val;
            console.log("Category Id", this.cat_id);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbusbycat.php?cat_id=" + this.cat_id).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.business = data;
                console.log("Business", this.business);
            }));
        });
        this.storage.get("sid").then(sval => {
            this.sid = sval;
            console.log("Service Id", this.sid);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbusbyservice.php?sid=" + this.sid).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.services = data;
                console.log("Services", this.services);
            }));
        });
        this.storage.get("type").then(val => {
            console.log("type", val);
            this.type = val;
            console.log("Cat type", this.type);
            this.geolocation.getCurrentPosition().then((resp) => {
                this.lat = resp.coords.latitude;
                this.long = resp.coords.longitude;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "gcategories.php?lat=" + this.lat + "&long=" + this.long + "&type=" + this.type).subscribe(response => {
                    this.cate = response;
                    this.categories = this.cate.results;
                    console.log("Categories", this.categories);
                    this.http.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins='this.lat','this.long'+&destinations='this.dlat','this.dlng'&key=AIzaSyBW0TeLuYYvzuzEGXF53uxTEJ6PIcaF89w").subscribe(response => {
                        this.dis = response;
                        console.log("Distance", this.dis);
                    });
                });
            });
        });
    }
    gdetails(i) {
        console.log(this.categories[i].place_id);
        this.storage.set("placeid", this.categories[i].place_id);
        this.router.navigate(['/gdetails']);
    }
    catdetails(i) {
        //console.log(this.recent[i].id);
        this.storage.set("bid", this.categories[i].id);
        this.router.navigate(['details']);
        this.Viewbusiness(this.categories[i].id);
    }
    serdetails(i) {
        //console.log(this.recent[i].id);
        this.storage.set("bid", this.services[i].id);
        this.router.navigate(['details']);
        this.Viewbusiness(this.services[i].id);
    }
    Viewbusiness(id) {
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "viewbusiness.php?bid=" + id + "&user_id=" + this.user_id).subscribe(vrespo => {
            this.vrespo = vrespo;
            console.log("View Response:", this.user_id);
        });
    }
    ionViewDidLeave() {
        console.log("VIew Did Load");
        this.storage.remove("sid");
        this.storage.remove("catid");
    }
};
GcategoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] }
];
GcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-gcategory',
        template: _raw_loader_gcategory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GcategoryPage);



/***/ }),

/***/ "fK7+":
/*!***********************************************!*\
  !*** ./src/app/gcategory/gcategory.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-name {\n  color: #871178;\n  line-height: 1;\n  padding: 10px 0;\n  margin: 0;\n  font-size: 1.2em;\n}\n\n.titl {\n  color: #871178;\n  border-bottom: 1px solid #cacaca;\n  width: 100%;\n  display: block;\n  height: 40px;\n  margin-top: 30px;\n  margin: 0 auto;\n  background: #f3f3f3;\n  padding: 10px;\n}\n\nion-card {\n  padding: 0 10px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2djYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUVJLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksZUFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJnY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbmFtZVxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4udGl0bFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=gcategory-gcategory-module-es2015.js.map