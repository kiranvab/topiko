(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-offer-add-offer-module"],{

/***/ "NoVk":
/*!*********************************************!*\
  !*** ./src/app/add-offer/add-offer.page.ts ***!
  \*********************************************/
/*! exports provided: AddOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOfferPage", function() { return AddOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_offer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-offer.page.html */ "uViP");
/* harmony import */ var _add_offer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-offer.page.scss */ "R3G2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");









let AddOfferPage = class AddOfferPage {
    constructor(route, http, storage, router, camera) {
        this.route = route;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.camera = camera;
        this.image_div = false;
        this.upload_div = true;
    }
    ngOnInit() {
        this.storage.get("bid").then(val => {
            this.buid = val;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbranches.php?bid=" + this.buid).subscribe((res) => {
                this.branches = res;
                console.log('Branches', this.branches);
            });
        });
        // this.storage.get("mybusiness").then((val)=>{
        //   this.mybusiness = val;
        //   console.log("My business Details:", this.mybusiness);
        //   this.owner = this.mybusiness[0].owner_name;
        //   this.address = this.mybusiness[0].business_address;
        //   this.busines_name = this.mybusiness[0].business_name
        //   this.bid= this.mybusiness[0].id;
        // })
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
            this.image_div = true;
            this.upload_div = false;
        });
    }
    AddOffer() {
        if (this.title.value == '' && this.tags.value == '' && this.fromdate.value == '' && this.todate.vallue == '' && this.description.value == '' && this.actual_price.value == '' && this.discount_price.value == '') {
            alert("Please fill all fields");
        }
        else {
            var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "addoffer.php";
            var Data = JSON.stringify({
                'business_id': this.buid,
                'title': this.title.value,
                'tags': this.tags.value,
                'fromdate': this.fromdate.value,
                'todate': this.todate.value,
                'description': this.description.value,
                'actual_price': this.actual_price.value,
                'discount_price': this.discount_price.value,
                'branch_id': this.branch.value,
                'image': this.image
            });
            console.log("offer Data:", Data);
            this.http.post(link, Data).subscribe(response => {
                console.log(response);
                if (response = 1) {
                    this.route.navigate(['offers']);
                }
                else {
                    alert("Failed to add Offer");
                }
            });
        }
    }
};
AddOfferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] }
];
AddOfferPage.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['title',] }],
    tags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tags',] }],
    fromdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['fromdate',] }],
    todate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['todate',] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['description',] }],
    actual_price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['actual_price',] }],
    discount_price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['discount_price',] }],
    branch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['branch',] }]
};
AddOfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-offer',
        template: _raw_loader_add_offer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_offer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddOfferPage);



/***/ }),

/***/ "QX4/":
/*!***********************************************!*\
  !*** ./src/app/add-offer/add-offer.module.ts ***!
  \***********************************************/
/*! exports provided: AddOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOfferPageModule", function() { return AddOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-offer-routing.module */ "wH0x");
/* harmony import */ var _add_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-offer.page */ "NoVk");







let AddOfferPageModule = class AddOfferPageModule {
};
AddOfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddOfferPageRoutingModule"]
        ],
        declarations: [_add_offer_page__WEBPACK_IMPORTED_MODULE_6__["AddOfferPage"]]
    })
], AddOfferPageModule);



/***/ }),

/***/ "R3G2":
/*!***********************************************!*\
  !*** ./src/app/add-offer/add-offer.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.first-card {\n  height: 249px;\n  margin: 22px 18px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.first-card ion-icon {\n  width: 40px;\n  height: 30px;\n}\n\n.first-grid {\n  margin: 22px 18px;\n}\n\nion-item {\n  width: 100%;\n}\n\nh5 {\n  color: #22272a;\n  margin-top: 26px;\n  font-size: 16px;\n  margin-bottom: 2px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\n.send {\n  color: #871178;\n  font-size: 0.875em;\n  text-align: center;\n  margin-top: 2.5em;\n}\n\n.text ion-icon {\n  color: #707070 !important;\n  margin: 15px -13px -33px 0 !important;\n  background-color: transparent;\n  font-size: 27px;\n  padding: 0px 7px 12px 0px;\n}\n\nimg {\n  width: 2.75em;\n  height: 3.5625em;\n  margin: 1.25em 0.3125em;\n  margin-bottom: 0.3125em;\n}\n\n.text-overflow {\n  margin-left: 20px;\n}\n\n.text-overflow p {\n  margin: 10px 0px;\n  margin-bottom: 0%;\n}\n\n.title {\n  font-size: 16px;\n  color: #22272a;\n}\n\n.add {\n  float: right;\n  font-size: 1em;\n}\n\n.plus {\n  font-size: 1.5125em;\n}\n\n.color {\n  color: #871178;\n  display: flex;\n  align-items: center;\n}\n\n.location {\n  margin-top: 2.875em;\n  display: flex;\n  justify-content: center;\n}\n\n.location ion-icon {\n  width: 20px;\n  height: 22px;\n  color: #707070;\n}\n\n.location span {\n  color: #871178;\n  font-size: 1.125em;\n  text-decoration: underline;\n  margin-left: 10px;\n}\n\n.check {\n  margin: 32px 0px;\n  margin-bottom: 25px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n  margin-top: 4px;\n}\n\nion-col .confirm {\n  font-size: 12px;\n  color: #22272a;\n  margin-top: 2%;\n  line-height: 1.3em;\n  padding-left: 5px;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.buttn {\n  display: flex;\n  justify-content: center;\n}\n\n.buttn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 16px;\n  width: 7.6875em;\n  height: 3.125em;\n  margin-bottom: 10px;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n\nion-select {\n  --placeholder-opacity: 100%;\n  --padding-start: 0px;\n}\n\nion-input {\n  --placeholder-opacity: 1 !important;\n  --padding-start: 0px;\n}\n\nion-item {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1vZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVBBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVRBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFlSjs7QUFiQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQWdCSjs7QUFkQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBaUJKOztBQWRBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFpQko7O0FBZkE7RUFDSSwyQkFBQTtFQUNBLG9CQUFBO0FBa0JKOztBQWhCQTtFQUNJLG1DQUFBO0VBQ0Esb0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksb0JBQUE7QUFvQkoiLCJmaWxlIjoiYWRkLW9mZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vL2ZpcnN0LWNhcmRcclxuLmZpcnN0LWNhcmQge1xyXG4gICAgaGVpZ2h0OiAyNDlweDtcclxuICAgIG1hcmdpbjogMjJweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmlyc3QtY2FyZCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmZpcnN0LWdyaWQge1xyXG4gICAgbWFyZ2luOiAyMnB4IDE4cHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaDUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcclxufVxyXG5pb24tY2hpcCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnNlbmQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxufVxyXG5cclxuLnRleHQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTVweCAtMTNweCAtMzNweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHBhZGRpbmc6IDBweCA3cHggMTJweCAwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMi43NWVtO1xyXG4gICAgaGVpZ2h0OiAzLjU2MjVlbTtcclxuICAgIG1hcmdpbjogMS4yNWVtIDAuMzEyNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zMTI1ZW07XHJcbn1cclxuXHJcbi50ZXh0LW92ZXJmbG93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi50ZXh0LW92ZXJmbG93IHAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG4uYWRkIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbi5wbHVzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41MTI1ZW07XHJcbn1cclxuLmNvbG9yIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjg3NWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sb2NhdGlvbiBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5sb2NhdGlvbiBzcGFuIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIG1hcmdpbjogMzJweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjNzA3MDcwO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICM4NzExNzg7XHJcbiAgICAtLWNoZWNrbWFyay13aWR0aDogNDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuaW9uLWNvbCAuY29uZmlybSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmNvbmZpcm0gc3BhbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5idXR0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRuIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogNy42ODc1ZW07XHJcbiAgICBoZWlnaHQ6IDMuMTI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "uViP":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-offer/add-offer.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"image_div\">\n    <img *ngIf=\"image != ''\" src=\"{{image}}\" style=\"width: 100%; height: 200px;\">\n  </ion-card>\n  <ion-card class=\"first-card\" (click)=\"getPicture()\" *ngIf=\"upload_div\">\n    <ion-row>\n      <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n    </ion-row>\n    <ion-row>\n      <p>Upload Offer Banner</p>\n    </ion-row>\n  </ion-card>\n\n  <ion-grid class=\"first-grid\">\n    <ion-row>\n      <ion-item>\n        <ion-input placeholder=\"Offer Title\" #title></ion-input>\n      </ion-item>\n    </ion-row>\n    <h5>Offer Tags</h5>\n    <ion-row>\n      <ion-textarea #tags>\n\n      </ion-textarea>\n    </ion-row>\n    <p class=\"send\">Send Your Offers To Your Customers</p>\n    <ion-row style=\"text-align: center; color: #871178;\">\n      <ion-col>From</ion-col>\n      <ion-col>To</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-input type=\"date\" placeholder=\"From\" #fromdate></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-input type=\"date\" placeholder=\"To\" #todate></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-item>\n      <ion-label color=\"primary\" floating></ion-label>\n      <ion-input type=\"text\" placeholder=\"Enter Your Text\" #description></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color=\"primary\" floating></ion-label>\n      <ion-input type=\"text\" placeholder=\"Actual Price\" #actual_price></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color=\"primary\" floating></ion-label>\n      <ion-input type=\"text\" placeholder=\"Discount\" #discount_price></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Select branch</ion-label>\n      <ion-select interface=\"popover\" #branch>\n        <ion-select-option *ngFor=\"let br of branches; let i= index\" value=\"{{br.id}}\" selected>{{br.branch_title}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <!--  <ion-row>\n      <ion-col size=\"8\" class=\"text-overflow\">\n        <p class=\"title\">Region & Location</p>\n      </ion-col>\n      <ion-col class=\"color\">\n        <span class=\"add\"><span class=\"plus\">+</span>Add</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-item>\n        <ion-label color=\"primary\" floating></ion-label>\n        <ion-input type=\"text\" placeholder=\"Address\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label color=\"primary\" floating></ion-label>\n        <ion-input type=\"text\" placeholder=\"Country\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label color=\"primary\" floating></ion-label>\n        <ion-input type=\"text\" placeholder=\"State\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label color=\"primary\" floating></ion-label>\n        <ion-input type=\"text\" placeholder=\"Pin Code\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row class=\"location\">\n      <ion-icon name=\"location-outline\"></ion-icon> <span> Location</span>\n    </ion-row> -->\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"buttn\" (click)=\"AddOffer()\">\n      <ion-button>Submit</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "wH0x":
/*!*******************************************************!*\
  !*** ./src/app/add-offer/add-offer-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddOfferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOfferPageRoutingModule", function() { return AddOfferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-offer.page */ "NoVk");




const routes = [
    {
        path: '',
        component: _add_offer_page__WEBPACK_IMPORTED_MODULE_3__["AddOfferPage"]
    }
];
let AddOfferPageRoutingModule = class AddOfferPageRoutingModule {
};
AddOfferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddOfferPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=add-offer-add-offer-module-es2015.js.map