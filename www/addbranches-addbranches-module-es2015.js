(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbranches-addbranches-module"],{

/***/ "/s7y":
/*!*************************************************!*\
  !*** ./src/app/addbranches/addbranches.page.ts ***!
  \*************************************************/
/*! exports provided: AddbranchesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbranchesPage", function() { return AddbranchesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addbranches_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addbranches.page.html */ "Hicx");
/* harmony import */ var _addbranches_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addbranches.page.scss */ "o3Fh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AddbranchesPage = class AddbranchesPage {
    constructor(storage, http, alertController, router) {
        this.storage = storage;
        this.http = http;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.storage.get("bid").then(val => {
            this.buid = val;
            console.log(this.buid);
        });
    }
    submit() {
        var link = _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].ApiUrl + "addbranch.php";
        var mydata = JSON.stringify({
            "business_id": this.buid,
            "branch_title": this.branch_title,
            "branch_address": this.branch_address,
            "branch_head": this.branch_head,
            "contact_number": this.contact_number,
            "contact_email": this.contact_email,
            "alternate_number": this.alternate_number,
            "branch_area": this.branch_area,
            "branch_pincode": this.branch_pincode,
            "branch_city": this.branch_city,
            "branch_state": this.branch_state,
            "branch_country": this.branch_country
        });
        console.log("payload", mydata);
        this.http.post(link, mydata).subscribe(data => {
            console.log(data);
            if (data == 1) {
                this.Created();
                this.router.navigate(["/branches"]);
            }
            else {
                this.Failed();
            }
        });
    }
    Created() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Created!',
                message: 'Branch has been Created sucesfully.',
                buttons: ['OK'],
            });
            yield alert.present();
            this.router.navigate(['branches']);
        });
    }
    Failed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Failed!',
                message: 'Failed to create branch try again.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AddbranchesPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
AddbranchesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addbranches',
        template: _raw_loader_addbranches_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addbranches_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddbranchesPage);



/***/ }),

/***/ "44tG":
/*!***********************************************************!*\
  !*** ./src/app/addbranches/addbranches-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddbranchesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbranchesPageRoutingModule", function() { return AddbranchesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addbranches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbranches.page */ "/s7y");




const routes = [
    {
        path: '',
        component: _addbranches_page__WEBPACK_IMPORTED_MODULE_3__["AddbranchesPage"]
    }
];
let AddbranchesPageRoutingModule = class AddbranchesPageRoutingModule {
};
AddbranchesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddbranchesPageRoutingModule);



/***/ }),

/***/ "Hicx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addbranches/addbranches.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n     \n    </ion-buttons>\n    <ion-title>Add Branches</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Branch Name</ion-label>\n    <ion-input [(ngModel)]=\"branch_title\" ></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Address</ion-label>\n    <ion-input [(ngModel)]=\"branch_address\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Branch Head</ion-label>\n    <ion-input [(ngModel)]=\"branch_head\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Contact Number </ion-label>\n    <ion-input [(ngModel)]=\"contact_number\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Branch Email </ion-label>\n    <ion-input [(ngModel)]=\"contact_email\"></ion-input>\n  </ion-item> \n  \n  <ion-item>\n    <ion-label position=\"floating\">Alternate Phone No</ion-label>\n    <ion-input [(ngModel)]=\"alternate_number\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Area</ion-label>\n    <ion-input [(ngModel)]=\"branch_area\"></ion-input>\n  </ion-item>   \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Pincode</ion-label>\n    <ion-input [(ngModel)]=\"branch_pincode\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch City</ion-label>\n    <ion-input [(ngModel)]=\"branch_city\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch State</ion-label>\n    <ion-input [(ngModel)]=\"branch_state\"></ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label position=\"floating\">Branch Country</ion-label>\n    <ion-input   [(ngModel)]=\"branch_country\"></ion-input>\n  </ion-item> \n  \n  <br>\n  <div expand=\"block\" class=\"purple-btn\" size=\"small\" (click)=\"submit()\">Submit</div>\n  <br>\n  </ion-card>\n\n  \n</ion-content>");

/***/ }),

/***/ "o3Fh":
/*!***************************************************!*\
  !*** ./src/app/addbranches/addbranches.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".adress p {\n  margin: 17px 0px;\n}\n\n.add {\n  font-size: 40px;\n  color: #871178;\n}\n\n.adds {\n  padding: 10px;\n  color: purple;\n  font-size: 20px;\n}\n\n.title {\n  text-align: center;\n}\n\nion-header ion-title {\n  color: #FFFFFF;\n  font-size: 18px;\n}\n\n.ellipsis ion-icon {\n  font-size: 22px;\n  color: #FFFFFF;\n}\n\n.img {\n  padding: 5px;\n  max-width: 100px;\n  height: 110px;\n}\n\nion-card {\n  margin: 0;\n  padding: 5px;\n}\n\n.label-floating.sc-ion-label-ios-h,\n.label-stacked.sc-ion-label-md-h,\n.label-floating.sc-ion-label-md-h {\n  color: #871178;\n}\n\n.purple-btn {\n  background: linear-gradient(#871178, #3c1378) !important;\n  height: 50px;\n  border: 0;\n  width: 90%;\n  text-align: center;\n  font-size: 18px;\n  margin: 0 auto;\n  text-transform: capitalize;\n  color: #fff;\n  line-height: 2.5;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZGJyYW5jaGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBRUEsY0FBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNGLGVBQUE7QUFJRjs7QUFGQTtFQUNBLGVBQUE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUpBOzs7RUFJSSxjQUFBO0FBTUo7O0FBSkE7RUFDSSx3REFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0oiLCJmaWxlIjoiYWRkYnJhbmNoZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkcmVzcyBwe1xyXG4gICAgbWFyZ2luOiAxN3B4IDBweDtcclxufVxyXG4uYWRke1xyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcblxyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB9XHJcbi5hZGRze1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taGVhZGVyIGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZWxsaXBzaXMgaW9uLWljb257XHJcbmZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbn1cclxuLmltZ3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgbWF4LXdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjExMHB4O1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLFxyXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgXHJcbi5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4ucHVycGxlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMi41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "wcdY":
/*!***************************************************!*\
  !*** ./src/app/addbranches/addbranches.module.ts ***!
  \***************************************************/
/*! exports provided: AddbranchesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbranchesPageModule", function() { return AddbranchesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addbranches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbranches-routing.module */ "44tG");
/* harmony import */ var _addbranches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbranches.page */ "/s7y");







let AddbranchesPageModule = class AddbranchesPageModule {
};
AddbranchesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addbranches_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddbranchesPageRoutingModule"]
        ],
        declarations: [_addbranches_page__WEBPACK_IMPORTED_MODULE_6__["AddbranchesPage"]]
    })
], AddbranchesPageModule);



/***/ })

}]);
//# sourceMappingURL=addbranches-addbranches-module-es2015.js.map