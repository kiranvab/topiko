(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-business-create-business-module"], {
    /***/
    "S1s8": function S1s8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBusinessPage", function () {
        return CreateBusinessPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_business_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-business.page.html */
      "oqWI");
      /* harmony import */


      var _create_business_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-business.page.scss */
      "aufm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");

      var CreateBusinessPage = /*#__PURE__*/function () {
        function CreateBusinessPage(http, storage, alertCtrl, router, geolocation, camera) {
          var _this = this;

          _classCallCheck(this, CreateBusinessPage);

          this.http = http;
          this.storage = storage;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.geolocation = geolocation;
          this.camera = camera;
          this.accept = false;
          this.cat_div = false;
          this.ser_div = false;
          this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getcategories.php").subscribe(function (cat) {
            _this.categoreis = cat;
            console.log("categories:", _this.categoreis);
          });
          this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getservices.php").subscribe(function (ser) {
            _this.services = ser;
            console.log("services:", _this.services);
          });
        }

        _createClass(CreateBusinessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storage.get("userdetails").then(function (val) {
              _this2.udata = val;
              _this2.uid = _this2.udata[0].id;
            });
            this.bid = Math.floor(Math.random() * 100000) + 100000;
            console.log(this.bid);
            this.bpin = Math.floor(Math.random() * 1000) + 1000;
            console.log(this.bpin);
            this.geolocation.getCurrentPosition().then(function (resp) {
              // resp.coords.latitude
              // resp.coords.longitude
              _this2.lat = resp.coords.latitude;
              _this2["long"] = resp.coords.longitude;
              console.log(_this2.lat);
              console.log(_this2["long"]);
            });
          }
        }, {
          key: "getserccat",
          value: function getserccat(data) {
            var _this3 = this;

            console.log(this.mode);

            if (this.mode == "category") {
              this.cat_div = true;
              this.ser_div = false;
              this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getcategories.php").subscribe(function (cat) {
                _this3.options = cat;
                console.log("categories:", _this3.categoreis);
              });
            } else {
              this.ser_div = true;
              this.cat_div = false;
              this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getservices.php").subscribe(function (ser) {
                _this3.services = ser;
                console.log("services:", _this3.services);
              });
            }
          }
        }, {
          key: "getPicture",
          value: function getPicture() {
            var _this4 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this4.image = 'data:image/jpeg;base64,' + imageData;
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.image == '') {
              alert("Please Upload Business image / Logo");
            } else {
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
                'longitude': this["long"],
                'latitude': this.lat,
                'category_id': this.category_id,
                'service_id': this.service_id
              });
              console.log(mydata); //var link = AppComponent.ApiUrl + "create_business.php"
              // this.http.post(link, mydata).subscribe(async data => {
              //   this.businessdata = data;
              //   console.log("userdetails", this.businessdata);
              //   if (this.businessdata == "Data already Exists") {
              //     const alert = await this.alertCtrl.create({
              //       header: 'Alert',
              //       message: 'Business Already Exist',
              //       buttons: ['OK']
              //     });
              //     await alert.present();
              //     //this.router.navigate(['my-business']);
              //   }
              //   else {
              //     this.router.navigate(['my-business']);
              //   }
              // });
            }
          }
        }, {
          key: "checkbox",
          value: function checkbox() {
            this.accept = !this.accept;
          }
        }]);

        return CreateBusinessPage;
      }();

      CreateBusinessPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
        }];
      };

      CreateBusinessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-business',
        template: _raw_loader_create_business_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_business_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CreateBusinessPage);
      /***/
    },

    /***/
    "aufm": function aufm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 18px;\n  --padding-start: 18px;\n  --padding-top: 20px;\n  --ion-background-color: #fff;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.pin {\n  color: #871178;\n  font-size: 18px;\n  padding: 10px 0;\n  text-decoration: underline;\n  padding-left: 16px;\n}\n\n.purple-btn {\n  width: 50%;\n}\n\n.business-dyn {\n  background: #f2f2f2 !important;\n  padding: 0.5em;\n  padding-left: 14px;\n}\n\n.business-dyn ion-col {\n  padding: 0%;\n}\n\n.mt-20 {\n  margin-top: 10%;\n}\n\n.create-icon {\n  font-size: 32px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 3%;\n}\n\n.bcard-head {\n  background: linear-gradient(#871178, #44093c);\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  padding: 0;\n  height: 25%;\n}\n\n.bcard-body {\n  background-color: #fff;\n  padding: 5%;\n}\n\n.first {\n  margin: 0px;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.business-dyn {\n  background: #f2f2f2 !important;\n  padding: 0.5em;\n  padding-left: 14px;\n  margin-top: 6px;\n}\n\n.id-color {\n  color: #871178;\n}\n\n.title {\n  font-size: 16px;\n  color: #871178;\n  line-height: 25px;\n  margin-top: 20px;\n  margin-bottom: -8px;\n}\n\n.text {\n  font-size: 16px;\n  color: #22272a;\n}\n\n.title-name {\n  font-size: 18px;\n  color: #871178;\n  line-height: 0;\n  text-align: center;\n  font-size: 24px;\n}\n\n.text-desc {\n  font-size: 14px;\n  color: #707070;\n  text-align: center;\n  line-height: 5px;\n}\n\nion-icon {\n  font-size: 32px;\n  color: #9f9f9f;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.view-more {\n  text-align: center;\n  color: #871178;\n  text-decoration: underline;\n  font-size: 16px;\n  padding-bottom: 10%;\n}\n\nspan {\n  text-decoration: underline;\n  color: #871178;\n}\n\nh3 {\n  color: #22272a;\n}\n\nion-input,\nion-select {\n  border-bottom: 1px solid #ccc;\n}\n\ntextarea {\n  width: 100%;\n  min-height: 150px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n}\n\n.checkbox {\n  font-size: 20px;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n  margin-right: 8px;\n  margin-top: 4px;\n}\n\n.flex {\n  display: flex;\n}\n\nion-col .agree {\n  font-size: 12px;\n  color: #22272a;\n  margin-top: 2%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.agree span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.buton {\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n}\n\n.buton ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 20px;\n  width: 123px;\n  height: 50px;\n  margin-bottom: 20px;\n}\n\nion-select {\n  --placeholder-opacity: 100%;\n  --padding-start: 0px;\n}\n\nion-input {\n  --placeholder-opacity: 1 !important;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyZWF0ZS1idXNpbmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtBQVFGOztBQUxBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVNGOztBQU5BO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxjQUFBO0FBU0Y7O0FBUEE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVlGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBY0Y7O0FBWkE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFlRjs7QUFiQTtFQUNFLGNBQUE7QUFnQkY7O0FBYkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWdCRjs7QUFkQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBaUJGOztBQWJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZ0JGOztBQWRBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBaUJGOztBQWRBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFpQkY7O0FBZEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWlCRjs7QUFkQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQWlCRjs7QUFmQTtFQUNFLGNBQUE7QUFrQkY7O0FBZkE7O0VBRUUsNkJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQW1CRjs7QUFqQkE7RUFDRSxlQUFBO0FBb0JGOztBQWpCQTs7RUFFRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBb0JGOztBQWxCQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBcUJGOztBQWhCQTtFQUNFLGFBQUE7QUFtQkY7O0FBakJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF1QkY7O0FBckJBO0VBQ0UsMkJBQUE7RUFDQSxvQkFBQTtBQXdCRjs7QUF0QkE7RUFDRSxtQ0FBQTtFQUNBLG9CQUFBO0FBeUJGIiwiZmlsZSI6ImNyZWF0ZS1idXNpbmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5waW4ge1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcbi5wdXJwbGUtYnRuIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5idXNpbmVzcy1keW4ge1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbn1cclxuLmJ1c2luZXNzLWR5biBpb24tY29sIHtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG4ubXQtMjAge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNyZWF0ZS1pY29uIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG4uYmNhcmQtaGVhZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuLmJjYXJkLWJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi8vIGZpcnN0LWNhcmRcclxuLmZpcnN0IHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4ucm93IHtcclxuICBoZWlnaHQ6IDE0LjRlbTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJnIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiAxNDZweDtcclxuICBoZWlnaHQ6IDE0NnB4O1xyXG59XHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG4ucG9zaXRpb24tY2FtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTJweDtcclxuICB0b3A6IDM3cHg7XHJcbn1cclxuLmJ1c2luZXNzLWR5biB7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMTRweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmlkLWNvbG9yIHtcclxuICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4NzExNzg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcbi50ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMyMjI3MmE7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi50aXRsZS1uYW1lIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM4NzExNzg7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4udGV4dC1kZXNjIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udmlldy1tb3JlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM4NzExNzg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbmgzIHtcclxuICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG5cclxuaW9uLWlucHV0LFxyXG5pb24tc2VsZWN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmNoZWNrYm94IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3MDcwNzA7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjODcxMTc4O1xyXG4gIC0tY2hlY2ttYXJrLXdpZHRoOiA0O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4vLyAuY2hlY2sge1xyXG4vLyAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4vLyB9XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmlvbi1jb2wgLmFncmVlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMyMjI3MmE7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG59XHJcbi5hZ3JlZSBzcGFuIHtcclxuICBjb2xvcjogIzg3MTE3ODtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYnV0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmJ1dG9uIGlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAxMjNweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "eJ5f": function eJ5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBusinessPageModule", function () {
        return CreateBusinessPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _create_business_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-business-routing.module */
      "xToO");
      /* harmony import */


      var _create_business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-business.page */
      "S1s8");

      var CreateBusinessPageModule = function CreateBusinessPageModule() {
        _classCallCheck(this, CreateBusinessPageModule);
      };

      CreateBusinessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_business_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateBusinessPageRoutingModule"]],
        declarations: [_create_business_page__WEBPACK_IMPORTED_MODULE_6__["CreateBusinessPage"]]
      })], CreateBusinessPageModule);
      /***/
    },

    /***/
    "oqWI": function oqWI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"bcard-head\">\n    <div><img src=\"assets/profile.svg\" class=\"mt-20\"></div>\n  </div>\n\n  <div class=\"bcard-body\">\n    <div class=\"business-dyn\">\n      <ion-row>\n        <ion-col size=\"4\">Business ID</ion-col>\n        <ion-col>{{bid}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">Pin No</ion-col>\n        <ion-col>{{bpin}}</ion-col>\n      </ion-row>\n    </div> -->\n\n  <ion-card class=\"first\" style=\"border-radius: 0px;\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\" (click)=\"getPicture();\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n  <div class=\"business-dyn\">\n    <ion-row>\n      <ion-col size=\"5\" style=\"color: #22272A;\">Business ID</ion-col>\n      <ion-col class=\"id-color\">{{bid}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\" style=\"color: #22272A;\">Pin No</ion-col>\n      <ion-col class=\"id-color\">{{bpin}}</ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"bcard-body\" style=\"padding-top: 0%;\">\n    <p class=\"text\">\n      <ion-input placeholder=\"Business Name\" [(ngModel)]=\"businessname\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-select placeholder=\"Business Type\" [(ngModel)]=\"type\">\n        <ion-select-option value=\"proprietorship\">Proprietorship</ion-select-option>\n        <ion-select-option value=\"partnership\">Partnership</ion-select-option>\n        <ion-select-option value=\"opc\">OPC</ion-select-option>\n        <ion-select-option value=\"llp\">LLP</ion-select-option>\n        <ion-select-option value=\"private\">Private Limited</ion-select-option>\n        <ion-select-option value=\"public\">Public Limited</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\">\n      <ion-input placeholder=\"Business Contact No\" [(ngModel)]=\"number\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-input placeholder=\"Owner Name\" [(ngModel)]=\"ownername\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-select placeholder=\"Business mode\" [(ngModel)]=\"mode\" (ionChange)=\"getserccat()\">\n        <ion-select-option value=\"services\">Services </ion-select-option>\n        <ion-select-option value=\"category\">Category</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\" *ngIf=\"cat_div\">\n      <ion-select placeholder=\"Select Category\" [(ngModel)]=\"category_id\">\n        <ion-select-option *ngFor=\"let cat of categoreis; let i=index;\" value=\"{{cat.id}}\">{{cat.category}}\n        </ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\" *ngIf=\"ser_div\">\n      <ion-select placeholder=\"Select Services\" [(ngModel)]=\"service_id\">\n        <ion-select-option *ngFor=\"let ser of services; let i=index;\" value=\"{{ser.id}}\">{{ser.service}}\n        </ion-select-option>\n      </ion-select>\n    </p>\n\n\n    <p class=\"title\">Select Business Tags</p>\n    <p class=\"text\">\n      <textarea [(ngModel)]=\"tag1\"></textarea>\n    </p>\n\n    <p>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input [(ngModel)]=\"add1\"></ion-input>\n      <ion-input [(ngModel)]=\"add2\"></ion-input>\n      <ion-input [(ngModel)]=\"add3\"></ion-input>\n    </p>\n    <p class=\"text\">\n      <ion-select placeholder=\"Country\" [(ngModel)]=\"country\">\n        <ion-select-option value=\"India\">India</ion-select-option>\n        <ion-select-option value=\"USA\">USA</ion-select-option>\n      </ion-select>\n    </p>\n    <p class=\"text\">\n      <ion-select placeholder=\"State\" [(ngModel)]=\"state\">\n        <ion-select-option value=\"andhra pradesh\">Andhra Pradesh</ion-select-option> -->\n        <ion-select-option value=\"andaman and Nicobar Islands\">Andaman and Nicobar Islands</ion-select-option>\n        <ion-select-option value=\"assam\">Assam</ion-select-option>\n        <ion-select-option value=\"bihar\">Bihar</ion-select-option>\n        <ion-select-option value=\"chandigarh\">Chandigarh</ion-select-option>\n        <ion-select-option value=\"chhattisgarh\">chhattisgarh</ion-select-option>\n        <ion-select-option value=\"dadar and Nagarhaveli\">Dadar and Nagarhaveli</ion-select-option>\n        <ion-select-option value=\"daman and Diu\">Daman and Diu</ion-select-option>\n        <ion-select-option value=\"delhi\">Delhi</ion-select-option>\n        <ion-select-option value=\"lakshadweep\">Lakshadweep</ion-select-option>\n        <ion-select-option value=\"puducherry\">Puducherry</ion-select-option>\n        <ion-select-option value=\"goa\">Goa</ion-select-option>\n        <ion-select-option value=\"gujarat\">Gujarat</ion-select-option>\n        <ion-select-option value=\"haryana\">Haryana</ion-select-option>\n        <ion-select-option value=\"himachal Pradesh\">Himachal Pradesh</ion-select-option>\n        <ion-select-option value=\"jammu and Kashmir\">Jammu and Kashmir</ion-select-option>\n        <ion-select-option value=\"jharkhand\">Jharkhand</ion-select-option>\n        <ion-select-option value=\"karnataka\">Karnataka</ion-select-option>\n        <ion-select-option value=\"kerala\">Kerala</ion-select-option>\n        <ion-select-option value=\"madhya Pradesh\">Madhya Pradesh</ion-select-option>\n        <ion-select-option value=\"maharashtra\">Maharashtra</ion-select-option>\n        <ion-select-option value=\"manipur\">Manipur</ion-select-option>\n        <ion-select-option value=\"meghalaya\">Meghalaya</ion-select-option>\n        <ion-select-option value=\"mizoram\">Mizoram</ion-select-option>\n        <ion-select-option value=\"nagaland\">Nagaland</ion-select-option>\n        <ion-select-option value=\"odisha\">Odisha</ion-select-option>\n        <ion-select-option value=\"punjab\">Punjab</ion-select-option>\n        <ion-select-option value=\"rajasthan\">Rajasthan</ion-select-option>\n        <ion-select-option value=\"sikkim\">Sikkim</ion-select-option>\n        <ion-select-option value=\"tamilnadu\">Tamilnadu</ion-select-option>\n        <ion-select-option value=\"telangana\">Telangana</ion-select-option>\n        <ion-select-option value=\"tripura\">Tripura</ion-select-option>\n        <ion-select-option value=\"uttar Pradesh\">Uttar Pradesh</ion-select-option>\n        <ion-select-option value=\"uttarakhand\">Uttarakhand</ion-select-option>\n        <ion-select-option value=\"westbengal\">Westbengal</ion-select-option>\n      </ion-select>\n    </p>\n    <p class=\"text\">\n      <ion-input type=\"mobile\" [(ngModel)]=\"pincode\" placeholder=\"Pin Code\" [(ngModel)]=\"pincode\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-input type=\"text\" placeholder=\"SHOP URL\" [(ngModel)]=\"shopurl\"></ion-input>\n    </p>\n\n    <p class=\"title\">Shop Description</p>\n    <p class=\"text\">\n      <textarea [(ngModel)]=\"shopdesc\"></textarea>\n    </p>\n\n    <ion-row class=\"pin-location\">\n      <div style=\"display: flex; width: 18px;\">\n        <img src=\"assets/location.svg\">\n      </div>\n      <ion-col class=\"pin\">\n        Business location\n      </ion-col>\n    </ion-row>\n\n    <p class=\"title\">View on your Businesss (Optional)</p>\n    <p class=\"text\">\n      <textarea [(ngModel)]=\"tag2\"></textarea>\n    </p>\n\n    <p class=\"title\">Your Business Story (Optional)</p>\n    <p class=\"text\" style=\"margin-bottom: 0%;\">\n      <textarea [(ngModel)]=\"tag3\"></textarea>\n    </p>\n    <br>\n\n    <!-- <div class=\"text-center\" class=\"pb-15\">\n      <ion-checkbox color=\"success\" checked></ion-checkbox> I Agree for the <span>Terms and Conditions</span>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" routerLink=\"/my-business\">Submit</ion-button>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class=\"check\">\n      <ion-col class=\"flex\">\n        <ion-checkbox (ionChange)=\"checkbox()\"></ion-checkbox>\n        <ion-label class=\"agree\">I agree for the <span>Terms and Conditions</span></ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"buton\">\n      <ion-button [disabled]=\"!accept\" (click)=\"submit()\">Submit</ion-button>\n    </ion-row>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "xToO": function xToO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBusinessPageRoutingModule", function () {
        return CreateBusinessPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _create_business_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-business.page */
      "S1s8");

      var routes = [{
        path: '',
        component: _create_business_page__WEBPACK_IMPORTED_MODULE_3__["CreateBusinessPage"]
      }];

      var CreateBusinessPageRoutingModule = function CreateBusinessPageRoutingModule() {
        _classCallCheck(this, CreateBusinessPageRoutingModule);
      };

      CreateBusinessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateBusinessPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-business-create-business-module-es5.js.map