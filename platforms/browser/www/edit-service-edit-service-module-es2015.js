(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-service-edit-service-module"],{

/***/ "+HPe":
/*!*****************************************************!*\
  !*** ./src/app/edit-service/edit-service.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .title {\n  text-align: center;\n  size: 18px;\n  color: #ffffff;\n}\n\nh5 {\n  color: #871178;\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-card ion-icon {\n  width: 40px;\n  height: 30px;\n  color: #9f9f9f;\n}\n\nion-card p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 0.625em 3.125em;\n  text-align: center;\n  line-height: 1.5em;\n}\n\n.first-card {\n  height: 249px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.first-card img {\n  width: 100%;\n  height: 100%;\n}\n\n.second-card {\n  height: 169px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.third-card {\n  height: 75px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.left {\n  padding: 5px 2.5px 0px 0px;\n}\n\n.third-card ion-icon {\n  width: 25px;\n  height: 20px;\n}\n\n.third-card p {\n  font-size: 0.625em;\n  margin: 0.25em 0px;\n}\n\n.right {\n  padding: 5px 0px 0px 2.5px;\n}\n\n.second-grid p {\n  margin: 30px 0px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin: 1em 0px;\n}\n\n.toggle ion-col {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.check {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.75em;\n  width: 7.6875em;\n  height: 3.125em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtc2VydmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLDBCQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksMEJBQUE7QUFZSjs7QUFUQTtFQUNJLGdCQUFBO0FBWUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFhSjs7QUFYQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVhBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWJBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx1REFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFnQko7O0FBYkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFpQko7O0FBZkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFtQko7O0FBaEJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBbUJKOztBQWpCQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFvQkoiLCJmaWxlIjoiZWRpdC1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5oNSB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgbWFyZ2luOiAxNHB4IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuaW9uLWNhcmQgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxufVxyXG5pb24tY2FyZCBwIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDAuNjI1ZW0gMy4xMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxufVxyXG4uZmlyc3QtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDI0OXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5maXJzdC1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uc2Vjb25kLWNhcmQge1xyXG4gICAgaGVpZ2h0OiAxNjlweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGhpcmQtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxlZnQge1xyXG4gICAgcGFkZGluZzogNXB4IDIuNXB4IDBweCAwcHg7XHJcbn1cclxuLnRoaXJkLWNhcmQgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLnRoaXJkLWNhcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNjI1ZW07XHJcbiAgICBtYXJnaW46IDAuMjVlbSAwcHg7XHJcbn1cclxuLnJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDVweCAwcHggMHB4IDIuNXB4O1xyXG59XHJcblxyXG4uc2Vjb25kLWdyaWQgcCB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcclxufVxyXG5pb24tY2hpcCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnRvZ2dsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuLnRvZ2dsZSBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1yb3cgaW9uLXRvZ2dsZSB7XHJcbiAgICAtLXdpZHRoOiAzNHB4O1xyXG4gICAgLS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjOWY5ZjlmO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNzE4NzVlbTtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjNzA3MDcwO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICM4NzExNzg7XHJcbiAgICAtLWNoZWNrbWFyay13aWR0aDogNDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWNvbCAuY29uZmlybSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG4uY29uZmlybSBzcGFuIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idG4gaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgd2lkdGg6IDcuNjg3NWVtO1xyXG4gICAgaGVpZ2h0OiAzLjEyNWVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Frel":
/*!***************************************************!*\
  !*** ./src/app/edit-service/edit-service.page.ts ***!
  \***************************************************/
/*! exports provided: EditServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicePage", function() { return EditServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-service.page.html */ "v2bj");
/* harmony import */ var _edit_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-service.page.scss */ "+HPe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");








let EditServicePage = class EditServicePage {
    constructor(storage, http, camera) {
        this.storage = storage;
        this.http = http;
        this.camera = camera;
    }
    ngOnInit() {
        this.storage.get("sid").then(val => {
            this.sid = val;
            console.log(this.sid);
            console.log("getservice_details.php?sid=" + this.sid);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getservice_details.php?sid=" + this.sid).subscribe(data => {
                this.service = data;
                console.log(this.service);
                this.servicetitle = this.service[0].service_title;
                this.servicetags = this.service[0].service_tag;
                this.description = this.service[0].description;
                this.mrp = this.service[0].mrp;
                this.discount = this.service[0].discount_price;
                this.image = this.service[0].image;
                this.video = this.service[0].video;
                this.banner = this.service[0].banner;
                this.img1 = this.service[0].img1;
                this.img2 = this.service[0].img2;
                this.img3 = this.service[0].img3;
            });
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
    getBanner() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((BannerData) => {
            this.banner = 'data:image/jpeg;base64,' + BannerData;
        });
    }
    getVideo() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((videoimg) => {
            this.video = 'data:image/jpeg;base64,' + videoimg;
        });
    }
    getImg1() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((img1Data) => {
            this.img1 = 'data:image/jpeg;base64,' + img1Data;
        });
    }
    getImg2() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((img2Data) => {
            this.img2 = 'data:image/jpeg;base64,' + img2Data;
        });
    }
    getImg3() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((img3Data) => {
            this.img3 = 'data:image/jpeg;base64,' + img3Data;
        });
    }
    submit() {
        console.log("Submit Clicked");
        var link = _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "updateservice.php";
        var myData = JSON.stringify({
            'sid': this.sid,
            'servicetitle': this.servicetitle,
            'servicetags': this.servicetags,
            'description': this.description,
            'actualprice': this.mrp,
            'discount': this.discount,
            'image': this.image,
            'banner': this.banner,
            'video': this.video,
            'img1': this.img1,
            'img2': this.img2,
            'img3': this.img3
        });
        this.http.post(link, myData).subscribe(data => {
            this.update = data;
            console.log("update", this.update);
            if (this.update == 1) {
                alert("Service Updated Sucesfully");
            }
        });
    }
};
EditServicePage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] }
];
EditServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-service',
        template: _raw_loader_edit_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditServicePage);



/***/ }),

/***/ "KHLo":
/*!*************************************************************!*\
  !*** ./src/app/edit-service/edit-service-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditServicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicePageRoutingModule", function() { return EditServicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-service.page */ "Frel");




const routes = [
    {
        path: '',
        component: _edit_service_page__WEBPACK_IMPORTED_MODULE_3__["EditServicePage"]
    }
];
let EditServicePageRoutingModule = class EditServicePageRoutingModule {
};
EditServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditServicePageRoutingModule);



/***/ }),

/***/ "WFNT":
/*!*****************************************************!*\
  !*** ./src/app/edit-service/edit-service.module.ts ***!
  \*****************************************************/
/*! exports provided: EditServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicePageModule", function() { return EditServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-service-routing.module */ "KHLo");
/* harmony import */ var _edit_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-service.page */ "Frel");







let EditServicePageModule = class EditServicePageModule {
};
EditServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditServicePageRoutingModule"]
        ],
        declarations: [_edit_service_page__WEBPACK_IMPORTED_MODULE_6__["EditServicePage"]]
    })
], EditServicePageModule);



/***/ }),

/***/ "v2bj":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-service/edit-service.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Edit Service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"left\">\n        <ion-card class=\"first-card\" (click)=\"getPicture()\">\n          <div *ngIf=\"image == ''\"  > Upload Image</div>\n          <img  *ngIf=\"image != ''\" src=\"{{image}}\" alt=\"\">\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"second-card\" (click)=\"getVideo()\">\n          <div *ngIf=\"video == null\" >Upload Video</div>\n          <img *ngIf=\"video != null\" src=\"{{video}}\" alt=\"\">\n        </ion-card>\n        <ion-row class=\"pad\">\n          <ion-col class=\"left\">\n            <ion-card class=\"third-card\"  (click)=\"getImg1()\">\n             <div *ngIf=\"img1 == null\" > Upload </div>\n            <img *ngIf=\"img1 != null\" src=\"{{img1}}\" alt=\"\">\n            </ion-card>\n          </ion-col>\n          <ion-col class=\"right\">\n            <ion-card class=\"third-card\"  (click)=\"getImg2()\">\n              <div *ngIf=\"img2 == null\" >Upload</div>\n              <img *ngIf=\"img2 != null\" src=\"{{img2}}\" alt=\"\">\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" class=\"left\">\n        <ion-card class=\"third-card\"  (click)=\"getImg3()\">\n          <div *ngIf=\"img3 === null\"> Upload </div>\n          <img *ngIf=\"img3 != null\" src=\"{{img3}}\" alt=\"\">\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"third-card\" (click)=\"getBanner()\">\n          <div *ngIf=\"banner == null\" > Upload Banner</div>\n          <img *ngIf=\"banner != null\"  src=\"{{banner}}\" alt=\"\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"second-grid\">\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Service Title\" [(ngModel)]=\"servicetitle\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      Service Tags\n      <ion-row>\n        <ion-textarea  [(ngModel)]=\"servicetags\">\n          \n        </ion-textarea>\n      </ion-row>\n    </p>\n    <!-- <p>\n      <ion-item>\n        <ion-input placeholder=\"Measuring Type\"></ion-input>\n      </ion-item>\n    </p>\n    <ion-row>\n      <ion-textarea placeholder=\"Measuring Details\">\n      </ion-textarea>\n    </ion-row>-->\n    <p>\n      Description\n      <ion-row>\n        <ion-textarea  [(ngModel)]=\"description\"></ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Actual Price\" [(ngModel)]=\"mrp\" ></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Discount\" [(ngModel)]=\"discount\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-row class=\"toggle\">\n        <ion-col>\n          <p>Cash on Delivery</p>\n        </ion-col>\n        <ion-col size=\"2.5\">\n          <ion-toggle checked></ion-toggle>\n        </ion-col>\n      </ion-row>\n    </p>\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button (click)=\"submit()\">Submit</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=edit-service-edit-service-module-es2015.js.map