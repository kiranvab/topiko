(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-business-create-business-module"],{

/***/ "S1s8":
/*!*********************************************************!*\
  !*** ./src/app/create-business/create-business.page.ts ***!
  \*********************************************************/
/*! exports provided: CreateBusinessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBusinessPage", function() { return CreateBusinessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_business_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-business.page.html */ "oqWI");
/* harmony import */ var _create_business_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-business.page.scss */ "aufm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");











let CreateBusinessPage = class CreateBusinessPage {
    constructor(http, storage, alertCtrl, router, geolocation, camera) {
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.geolocation = geolocation;
        this.camera = camera;
        this.accept = false;
        this.cat_div = false;
        this.ser_div = false;
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getcategories.php").subscribe((cat) => {
            this.categoreis = cat;
            console.log("categories:", this.categoreis);
        });
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getservices.php").subscribe((ser) => {
            this.services = ser;
            console.log("services:", this.services);
        });
    }
    ngOnInit() {
        this.storage.get("userdetails").then(val => {
            this.udata = val;
            this.uid = this.udata[0].id;
        });
        this.bid = Math.floor(Math.random() * 100000) + 100000;
        console.log(this.bid);
        this.bpin = Math.floor(Math.random() * 1000) + 1000;
        console.log(this.bpin);
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.lat = resp.coords.latitude;
            this.long = resp.coords.longitude;
            console.log(this.lat);
            console.log(this.long);
        });
    }
    getserccat(data) {
        console.log(this.mode);
        if (this.mode == "category") {
            this.cat_div = true;
            this.ser_div = false;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getcategories.php").subscribe((cat) => {
                this.options = cat;
                console.log("categories:", this.categoreis);
            });
        }
        else {
            this.ser_div = true;
            this.cat_div = false;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getservices.php").subscribe((ser) => {
                this.services = ser;
                console.log("services:", this.services);
            });
        }
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
        if (!this.add1) {
            this.add1 = '';
        }
        if (!this.add2) {
            this.add2 = '';
        }
        if (!this.add3) {
            this.add3 = '';
        }
        if (this.image == '') {
            alert("Please Upload Business image / Logo");
        }
        else {
            var mydata = JSON.stringify({
                'uid': this.uid,
                'image': this.image,
                'business_id': this.bid,
                'pin': this.bpin,
                'business_name': this.businessname,
                'business_type': this.type,
                'primary_contact': this.number,
                'owner_name': this.ownername,
                'basis': this.basis,
                'ownership_model': this.mode,
                'firsttag': this.tag1,
                'business_address': this.add1 + this.add2 + this.add3,
                'country': this.country,
                'state': this.state,
                'pincode': this.pincode,
                'view': this.tag2,
                'busienss_story': this.tag3,
                'shopurl': this.shopurl,
                'shopdesc': this.shopdesc,
                'longitude': this.long,
                'latitude': this.lat,
                'category_id': this.category_id,
                'service_id': this.service_id
            });
            console.log(mydata);
            var link = _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "create_business.php";
            this.http.post(link, mydata).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.businessdata = data;
                console.log("userdetails", this.businessdata);
                if (this.businessdata == "Data already Exists") {
                    const alert = yield this.alertCtrl.create({
                        header: 'Alert',
                        message: 'Business Already Exist',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    //this.router.navigate(['my-business']);
                }
                else {
                    this.router.navigate(['my-business']);
                }
            }));
        }
    }
    checkbox() {
        this.accept = !this.accept;
    }
};
CreateBusinessPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] }
];
CreateBusinessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-business',
        template: _raw_loader_create_business_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_business_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateBusinessPage);



/***/ }),

/***/ "aufm":
/*!***********************************************************!*\
  !*** ./src/app/create-business/create-business.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 18px;\n  --padding-start: 18px;\n  --padding-top: 20px;\n  --ion-background-color: #fff;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.pin {\n  color: #871178;\n  font-size: 20px;\n  padding: 10px 0;\n}\n\n.purple-btn {\n  width: 50%;\n}\n\n.business-dyn {\n  background: #e0e0e0;\n  padding: 0.5em;\n}\n\n.mt-20 {\n  margin-top: 10%;\n}\n\n.create-icon {\n  font-size: 32px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 3%;\n}\n\n.bcard-head {\n  background: linear-gradient(#871178, #44093c);\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  padding: 0;\n  height: 25%;\n}\n\n.bcard-body {\n  background-color: #fff;\n  padding: 5%;\n}\n\n.first {\n  margin: 0px;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.business-dyn {\n  background: #e0e0e0;\n  padding: 0.5em;\n  margin: 1em 0px;\n}\n\n.id-color {\n  color: #871178;\n}\n\n.title {\n  font-size: 18px;\n  color: #871178;\n  line-height: 25px;\n}\n\n.text {\n  font-size: 16px;\n  color: #22272a;\n}\n\n.title-name {\n  font-size: 18px;\n  color: #871178;\n  line-height: 0;\n  text-align: center;\n  font-size: 24px;\n}\n\n.text-desc {\n  font-size: 14px;\n  color: #707070;\n  text-align: center;\n  line-height: 5px;\n}\n\nion-icon {\n  font-size: 32px;\n  color: #9f9f9f;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.view-more {\n  text-align: center;\n  color: #871178;\n  text-decoration: underline;\n  font-size: 16px;\n  padding-bottom: 10%;\n}\n\nspan {\n  text-decoration: underline;\n  color: #871178;\n}\n\nh3 {\n  color: #22272a;\n}\n\nion-input,\nion-select {\n  border-bottom: 1px solid #ccc;\n}\n\ntextarea {\n  width: 100%;\n  min-height: 150px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n}\n\n.checkbox {\n  font-size: 20px;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n  margin-right: 8px;\n}\n\n.flex {\n  display: flex;\n}\n\nion-col .agree {\n  font-size: 12px;\n  color: #22272a;\n  margin-top: 2%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.agree span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.buton {\n  display: flex;\n  justify-content: center;\n  padding-top: 10px;\n}\n\n.buton ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 20px;\n  width: 123px;\n  height: 50px;\n  margin-bottom: 20px;\n}\n\nion-select {\n  --placeholder-opacity: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyZWF0ZS1idXNpbmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVFGOztBQUxBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBUUY7O0FBSkE7RUFDRSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0FBUUY7O0FBTkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVdGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBYUY7O0FBWEE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBY0Y7O0FBWkE7RUFDRSxjQUFBO0FBZUY7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZUY7O0FBYkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWdCRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWVGOztBQWJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQWJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFnQkY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWdCRjs7QUFiQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQWdCRjs7QUFkQTtFQUNFLGNBQUE7QUFpQkY7O0FBZEE7O0VBRUUsNkJBQUE7QUFpQkY7O0FBZkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGVBQUE7QUFtQkY7O0FBaEJBOztFQUVFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFtQkY7O0FBakJBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQW9CRjs7QUFmQTtFQUNFLGFBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQW1CRjs7QUFqQkE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsMkJBQUE7QUF1QkYiLCJmaWxlIjoiY3JlYXRlLWJ1c2luZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24taGVhZGVyIGlvbi1pY29uIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnBpbiB7XHJcbiAgY29sb3I6ICM4NzExNzg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4ucHVycGxlLWJ0biB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uYnVzaW5lc3MtZHluIHtcclxuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG59XHJcbi5tdC0yMCB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY3JlYXRlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG59XHJcbi5iY2FyZC1oZWFkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMjUlO1xyXG59XHJcblxyXG4uYmNhcmQtYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLy8gZmlyc3QtY2FyZFxyXG4uZmlyc3Qge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5yb3cge1xyXG4gIGhlaWdodDogMTQuNGVtO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOS4zNzVlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDE0NnB4O1xyXG4gIGhlaWdodDogMTQ2cHg7XHJcbn1cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcbi5wb3NpdGlvbi1jYW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MnB4O1xyXG4gIHRvcDogMzdweDtcclxufVxyXG4uYnVzaW5lc3MtZHluIHtcclxuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIG1hcmdpbjogMWVtIDBweDtcclxufVxyXG4uaWQtY29sb3Ige1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzg3MTE3ODtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG4udGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjIyNzJhO1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4udGl0bGUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnRleHQtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNXB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjOWY5ZjlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnZpZXctbW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5oMyB7XHJcbiAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCxcclxuaW9uLXNlbGVjdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5jaGVja2JveCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjNzA3MDcwO1xyXG4gIG9wYWNpdHk6IDcwJTtcclxuICAtLWNoZWNrbWFyay1jb2xvcjogIzg3MTE3ODtcclxuICAtLWNoZWNrbWFyay13aWR0aDogNDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4vLyAuY2hlY2sge1xyXG4vLyAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4vLyB9XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmlvbi1jb2wgLmFncmVlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMyMjI3MmE7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG59XHJcbi5hZ3JlZSBzcGFuIHtcclxuICBjb2xvcjogIzg3MTE3ODtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYnV0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmJ1dG9uIGlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAxMjNweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "eJ5f":
/*!***********************************************************!*\
  !*** ./src/app/create-business/create-business.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateBusinessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBusinessPageModule", function() { return CreateBusinessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_business_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-business-routing.module */ "xToO");
/* harmony import */ var _create_business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-business.page */ "S1s8");







let CreateBusinessPageModule = class CreateBusinessPageModule {
};
CreateBusinessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_business_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateBusinessPageRoutingModule"]
        ],
        declarations: [_create_business_page__WEBPACK_IMPORTED_MODULE_6__["CreateBusinessPage"]]
    })
], CreateBusinessPageModule);



/***/ }),

/***/ "oqWI":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-business/create-business.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Create Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"bcard-head\">\n    <div><img src=\"assets/profile.svg\" class=\"mt-20\"></div>\n  </div>\n\n  <div class=\"bcard-body\">\n    <div class=\"business-dyn\">\n      <ion-row>\n        <ion-col size=\"4\">Business ID</ion-col>\n        <ion-col>{{bid}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">Pin No</ion-col>\n        <ion-col>{{bpin}}</ion-col>\n      </ion-row>\n    </div> -->\n\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\"> \n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\" (click)=\"getPicture();\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div class=\"bcard-body\">\n    <div class=\"business-dyn\">\n      <ion-row>\n        <ion-col size=\"5\">Business ID</ion-col>\n        <ion-col class=\"id-color\">{{bid}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Pin No</ion-col>\n        <ion-col class=\"id-color\">{{bpin}}</ion-col>\n      </ion-row>\n    </div>\n\n    <p class=\"text\">\n      <ion-input placeholder=\"Business Name\" [(ngModel)]=\"businessname\"></ion-input>\n    </p>\n\n\n    <p class=\"text\">\n      <ion-select placeholder=\"Business Type\" [(ngModel)]=\"type\">\n        <ion-select-option value=\"proprietorship\">Proprietorship</ion-select-option>\n        <ion-select-option value=\"partnership\">Partnership</ion-select-option>\n        <ion-select-option value=\"opc\">OPC</ion-select-option>\n        <ion-select-option value=\"llp\">LLP</ion-select-option>\n        <ion-select-option value=\"private\">Private Limited</ion-select-option>\n        <ion-select-option value=\"public\">Public Limited</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\">\n      <ion-input placeholder=\"Business Contact No\" [(ngModel)]=\"number\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-input placeholder=\"Owner Name\" [(ngModel)]=\"ownername\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-select placeholder=\"Business mode\" [(ngModel)]=\"mode\" (ionChange)=\"getserccat()\">\n        <ion-select-option value=\"services\">Services </ion-select-option>\n        <ion-select-option value=\"category\">Category</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\" *ngIf=\"cat_div\">\n      <ion-select placeholder=\"Select Category\" [(ngModel)]=\"category_id\">\n        <ion-select-option *ngFor=\"let cat of categoreis; let i=index;\" value=\"{{cat.id}}\">{{cat.category}}</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\"  *ngIf=\"ser_div\">\n      <ion-select placeholder=\"Select Services\" [(ngModel)]=\"service_id\">\n        <ion-select-option *ngFor=\"let ser of services; let i=index;\" value=\"{{ser.id}}\">{{ser.service}}</ion-select-option>\n      </ion-select>\n    </p>\n\n    \n    <p class=\"title\">Select Business Tags</p>\n    <p class=\"text\">\n      <textarea placeholder=\"Select Business Tags\" [(ngModel)]=\"tag1\"></textarea>\n    </p>\n\n    <p>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input [(ngModel)]=\"add1\"></ion-input>\n      <ion-input [(ngModel)]=\"add2\"></ion-input>\n      <ion-input [(ngModel)]=\"add3\"></ion-input>\n    </p>\n    <p class=\"text\">\n      <ion-select placeholder=\"Country\" [(ngModel)]=\"country\">\n        <ion-select-option value=\"India\">India</ion-select-option>\n        <ion-select-option value=\"USA\">USA</ion-select-option>\n      </ion-select>\n    </p>\n    <p class=\"text\">\n      <ion-select placeholder=\"State\" [(ngModel)]=\"state\">\n        <ion-select-option value=\"Andhra Pradesh\">Andhra Pradesh</ion-select-option> -->\n        <ion-select-option value=\"andaman and Nicobar Islands\">Andaman and Nicobar Islands</ion-select-option>\n        <ion-select-option value=\"assam\">Assam</ion-select-option>\n        <ion-select-option value=\"bihar\">Bihar</ion-select-option>\n        <ion-select-option value=\"chandigarh\">Chandigarh</ion-select-option>\n        <ion-select-option value=\"chhattisgarh\">chhattisgarh</ion-select-option>\n        <ion-select-option value=\"dadar and Nagarhaveli\">Dadar and Nagarhaveli</ion-select-option>\n        <ion-select-option value=\"daman and Diu\">Daman and Diu</ion-select-option>\n        <ion-select-option value=\"delhi\">Delhi</ion-select-option>\n        <ion-select-option value=\"lakshadweep\">Lakshadweep</ion-select-option>\n        <ion-select-option value=\"puducherry\">Puducherry</ion-select-option>\n        <ion-select-option value=\"goa\">Goa</ion-select-option>\n        <ion-select-option value=\"gujarat\">Gujarat</ion-select-option>\n        <ion-select-option value=\"haryana\">Haryana</ion-select-option>\n        <ion-select-option value=\"himachal Pradesh\">Himachal Pradesh</ion-select-option>\n        <ion-select-option value=\"jammu and Kashmir\">Jammu and Kashmir</ion-select-option>\n        <ion-select-option value=\"jharkhand\">Jharkhand</ion-select-option>\n        <ion-select-option value=\"karnataka\">Karnataka</ion-select-option>\n        <ion-select-option value=\"kerala\">Kerala</ion-select-option>\n        <ion-select-option value=\"madhya Pradesh\">Madhya Pradesh</ion-select-option>\n        <ion-select-option value=\"maharashtra\">Maharashtra</ion-select-option>\n        <ion-select-option value=\"manipur\">Manipur</ion-select-option>\n        <ion-select-option value=\"meghalaya\">Meghalaya</ion-select-option>\n        <ion-select-option value=\"mizoram\">Mizoram</ion-select-option>\n        <ion-select-option value=\"nagaland\">Nagaland</ion-select-option>\n        <ion-select-option value=\"odisha\">Odisha</ion-select-option>\n        <ion-select-option value=\"punjab\">Punjab</ion-select-option>\n        <ion-select-option value=\"rajasthan\">Rajasthan</ion-select-option>\n        <ion-select-option value=\"sikkim\">Sikkim</ion-select-option>\n        <ion-select-option value=\"Tamilnadu\">Tamilnadu</ion-select-option>\n        <ion-select-option value=\"Telangana\">Telangana</ion-select-option>\n        <ion-select-option value=\"tripura\">Tripura</ion-select-option>\n        <ion-select-option value=\"uttar Pradesh\">Uttar Pradesh</ion-select-option>\n        <ion-select-option value=\"uttarakhand\">Uttarakhand</ion-select-option>\n        <ion-select-option value=\"westbengal\">Westbengal</ion-select-option>\n      </ion-select>\n    </p>\n    <p class=\"text\">\n      <ion-input type=\"mobile\" [(ngModel)]=\"pincode\" placeholder=\"Pin Code\" [(ngModel)]=\"pincode\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-input type=\"text\"  placeholder=\"SHOP URL\" [(ngModel)]=\"shopurl\"></ion-input>\n    </p>\n\n    <p class=\"title\">Shop Description</p>\n    <p class=\"text\">\n      <textarea placeholder=\"Shop Description\" [(ngModel)]=\"shopdesc\"></textarea>\n    </p>\n\n    <ion-row class=\"pin-location\">\n      <ion-col size=\"2\">\n        <img src=\"assets/location.svg\">\n      </ion-col>\n      <ion-col class=\"pin\">\n        Business location\n      </ion-col>\n    </ion-row>\n\n    <p class=\"title\">View on your Businesss (Optional)</p>\n    <p class=\"text\">\n      <textarea placeholder=\"Select Business Tags\" [(ngModel)]=\"tag2\"></textarea>\n    </p>\n\n    <p class=\"title\">Your Business Story (optional)</p>\n    <p class=\"text\">\n      <textarea placeholder=\"Select Business Tags\" [(ngModel)]=\"tag3\"></textarea>\n    </p>\n    <br>\n\n    <!-- <div class=\"text-center\" class=\"pb-15\">\n      <ion-checkbox color=\"success\" checked></ion-checkbox> I Agree for the <span>Terms and Conditions</span>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" routerLink=\"/my-business\">Submit</ion-button>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class=\"check\">\n      <ion-col class=\"flex\">\n        <ion-checkbox (ionChange)=\"checkbox()\"></ion-checkbox>\n        <ion-label class=\"agree\">I agree for the <span>Terms and Conditions</span></ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"buton\">\n      <ion-button [disabled]=\"!accept\" (click)=\"submit()\">Submit</ion-button>\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "xToO":
/*!*******************************************************************!*\
  !*** ./src/app/create-business/create-business-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreateBusinessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBusinessPageRoutingModule", function() { return CreateBusinessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_business_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-business.page */ "S1s8");




const routes = [
    {
        path: '',
        component: _create_business_page__WEBPACK_IMPORTED_MODULE_3__["CreateBusinessPage"]
    }
];
let CreateBusinessPageRoutingModule = class CreateBusinessPageRoutingModule {
};
CreateBusinessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateBusinessPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=create-business-create-business-module-es2015.js.map