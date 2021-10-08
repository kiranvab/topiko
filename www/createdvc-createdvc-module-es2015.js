(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createdvc-createdvc-module"],{

/***/ "BwYs":
/*!***********************************************!*\
  !*** ./src/app/createdvc/createdvc.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-end: 30px;\n  --padding-start: 15px;\n  --padding-top: 20px;\n}\n\nion-title {\n  text-align: center;\n}\n\n.upload-icon {\n  position: absolute;\n  bottom: 10%;\n  right: 30%;\n  font-size: 24px;\n  border-radius: 50%;\n  padding: 5px;\n  background: #fff;\n  color: #871178;\n}\n\n.pin {\n  color: #871178;\n  font-size: 20px;\n  padding: 10px 0;\n}\n\n.pin-location {\n  padding: 5%;\n}\n\nh3 {\n  line-height: 28px;\n}\n\nion-content {\n  padding: 0 1em;\n}\n\nion-icon {\n  text-align: center;\n  font-size: 32px;\n  color: #9f9f9f;\n}\n\nion-label {\n  font-size: 18px !important;\n  color: #22272A !important;\n  padding-bottom: 10px;\n}\n\ntextarea {\n  width: 96%;\n  border: 1px solid #cecece;\n  margin-left: 4%;\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZWR2Yy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBRUksa0JBQUE7QUFBSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBS0E7RUFFSSxjQUFBO0VBQ0osZUFBQTtFQUNBLGVBQUE7QUFIQTs7QUFNQTtFQUVJLFdBQUE7QUFKSjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBS0E7RUFFSSxjQUFBO0FBSEo7O0FBTUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSko7O0FBTUE7RUFFSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFNQTtFQUVJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpKIiwiZmlsZSI6ImNyZWF0ZWR2Yy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFxyXG57XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMzBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXBsb2FkLWljb25cclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICByaWdodDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcblxyXG5cclxuXHJcbi5waW5cclxue1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxucGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4ucGluLWxvY2F0aW9uXHJcbntcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcbmgze1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuaW9uLWNvbnRlbnRcclxue1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbmlvbi1pY29uXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG59XHJcbmlvbi1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjIyNzJBICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG50ZXh0YXJlYVxyXG57XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "FT92":
/*!***********************************************!*\
  !*** ./src/app/createdvc/createdvc.module.ts ***!
  \***********************************************/
/*! exports provided: CreatedvcPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedvcPageModule", function() { return CreatedvcPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _createdvc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createdvc-routing.module */ "Ou2W");
/* harmony import */ var _createdvc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createdvc.page */ "R93R");







let CreatedvcPageModule = class CreatedvcPageModule {
};
CreatedvcPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _createdvc_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatedvcPageRoutingModule"]
        ],
        declarations: [_createdvc_page__WEBPACK_IMPORTED_MODULE_6__["CreatedvcPage"]]
    })
], CreatedvcPageModule);



/***/ }),

/***/ "Ou2W":
/*!*******************************************************!*\
  !*** ./src/app/createdvc/createdvc-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CreatedvcPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedvcPageRoutingModule", function() { return CreatedvcPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _createdvc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createdvc.page */ "R93R");




const routes = [
    {
        path: '',
        component: _createdvc_page__WEBPACK_IMPORTED_MODULE_3__["CreatedvcPage"]
    }
];
let CreatedvcPageRoutingModule = class CreatedvcPageRoutingModule {
};
CreatedvcPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatedvcPageRoutingModule);



/***/ }),

/***/ "R93R":
/*!*********************************************!*\
  !*** ./src/app/createdvc/createdvc.page.ts ***!
  \*********************************************/
/*! exports provided: CreatedvcPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedvcPage", function() { return CreatedvcPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_createdvc_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./createdvc.page.html */ "tK2o");
/* harmony import */ var _createdvc_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createdvc.page.scss */ "BwYs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");









let CreatedvcPage = class CreatedvcPage {
    constructor(route, router, http, storage, camera) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.camera = camera;
    }
    ngOnInit() {
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.uname = this.udata[0].name;
            this.umobile = this.udata[0].mobile;
            this.uid = this.udata[0].id;
            console.log(this.udata);
        });
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getcountries.php").subscribe(country => {
            this.countries = country;
            console.log(this.countries);
        });
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getstates.php").subscribe(state => {
            this.states = state;
            console.log(this.states);
        });
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getcity.php").subscribe(city => {
            this.cities = city;
            console.log(this.cities);
        });
    }
    getPicture() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.image = 'data:image/jpeg;base64,' + imageData;
        });
    }
    submit() {
        var link = _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "createdvc.php";
        var carddata = JSON.stringify({
            'user_id': this.uid,
            'name': this.uname,
            'mobile': this.umobile,
            'country': this.country,
            'state': this.state,
            'city': this.city,
            'postcode': this.postcode,
            'add1': this.add1,
            'add2': this.add2,
            'add3': this.add3,
            'profession': this.proffesion,
            'workingin': this.workingin,
            'designation': this.designation,
            'mail': this.mail,
            'about': this.about,
            'tags': this.tags,
            'image': this.image
        });
        console.log(carddata);
        this.http.post(link, carddata).subscribe(data => {
            console.log(data);
            if (data == 1) {
                let navigationExtras = {
                    queryParams: {
                        card: JSON.stringify(data)
                    }
                };
                this.router.navigate(['mycard'], navigationExtras);
            }
        });
    }
};
CreatedvcPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] }
];
CreatedvcPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-createdvc',
        template: _raw_loader_createdvc_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_createdvc_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreatedvcPage);



/***/ }),

/***/ "tK2o":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createdvc/createdvc.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-title>Digital Visitng Card</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n  <ion-col style=\"text-align: center;\" (click)=\"getPicture()\">\n    <img src=\"assets/profile.png\" width=\"50%\">\n    <ion-icon class=\"upload-icon\" name=\"camera\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row style=\"margin-top: -5%;\">\n  <ion-col>\n    <h3 class=\"text-center\">\n    {{uname}} <br>\n    {{umobile}}\n    </h3>\n  </ion-col>\n</ion-row>\n<ion-item>\n  <ion-label>Country</ion-label>\n  <ion-select placeholder=\"\" [(ngModel)]=\"country\" >\n    <ion-select-option *ngFor=\"let country of countries; let i = index\" value=\"{{country.country_name}}\">{{country.country_name}}</ion-select-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label>State</ion-label>\n  <ion-select placeholder=\"\" [(ngModel)]=\"state\" >\n    <ion-select-option *ngFor=\"let state of states; let i = index;\" value=\"{{state.state_name}}\">{{state.state_name}}</ion-select-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label>City</ion-label>\n  <ion-select placeholder=\"\" [(ngModel)]=\"city\" >\n    <ion-select-option *ngFor=\"let city of cities; let i = index;\" value=\"{{city.city_name}}\">{{city.city_name}}</ion-select-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Pin Code</ion-label>\n <ion-input [(ngModel)]=\"postcode\" required></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Address</ion-label>\n  <ion-input [(ngModel)]=\"add1\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-input [(ngModel)]=\"add2\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-input [(ngModel)]=\"add3\"></ion-input>\n</ion-item>\n<ion-row class=\"pin-location\">\n  <ion-col size=\"2\">\n    <img src=\"assets/location.svg\">\n  </ion-col>\n  <ion-col class=\"pin\">\n    Pin your city location\n  </ion-col>\n</ion-row>\n<ion-item>\n  <ion-label>Proffesion</ion-label>\n  <ion-select placeholder=\"Select One\" [(ngModel)]=\"proffesion\">\n    <ion-select-option value=\"Proffesional\">Proffesional</ion-select-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Working In</ion-label>\n  <ion-input [(ngModel)]=\"workingin\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Designation</ion-label>\n  <ion-input [(ngModel)]=\"designation\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Mail Id</ion-label>\n  <ion-input [(ngModel)]=\"mail\"></ion-input>\n</ion-item>\n<ion-row>\n  <ion-col size=\"12\" style=\"padding:4%\">\n    <ion-label position=\"fixed\">Brief about yourself</ion-label>\n  </ion-col>\n  <ion-col>\n    <textarea [(ngModel)]=\"about\"></textarea>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"12\" style=\"padding:4%\">\n    <ion-label position=\"fixed\">Proffesional Tag's</ion-label>\n    <textarea [(ngModel)]=\"tags\"></textarea>\n  </ion-col>\n</ion-row>\n<h3 class=\"text-center\">Build your Connections</h3>\n<ion-row>\n  <ion-col>\n    <ion-icon name=\"logo-whatsapp\"></ion-icon>\n  </ion-col>\n  <ion-col>\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n  </ion-col>\n  <ion-col>\n    <ion-icon name=\"logo-linkedin\"></ion-icon>\n  </ion-col>\n  <ion-col>\n    <ion-icon name=\"logo-twitter\"></ion-icon>\n  </ion-col>\n  <ion-col>\n    <ion-icon name=\"logo-instagram\"></ion-icon>\n  </ion-col>\n  <ion-col>\n    <ion-icon name=\"logo-youtube\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n    <ion-button expand=\"full\"  class=\"purple-bdr-btn\"  color=\"custom\" routerLink=\"/home\">Later</ion-button>\n  </ion-col>\n  <ion-col>\n    <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" (click)=\"submit()\">Submit</ion-button>\n  </ion-col>\n</ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=createdvc-createdvc-module-es2015.js.map