(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-add-product-module"], {
    /***/
    "7py5": function py5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductPage", function () {
        return AddProductPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-product.page.html */
      "SDL9");
      /* harmony import */


      var _add_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-product.page.scss */
      "LZri");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");

      var AddProductPage = /*#__PURE__*/function () {
        function AddProductPage(http, storage, alertCtrl, camera, router) {
          _classCallCheck(this, AddProductPage);

          this.http = http;
          this.storage = storage;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.router = router;
          this.tags = ['Ionic', 'Angular', 'TypeScript'];
          this.accept = false;
          this.upload_div = true;
          this.image_div = false;
          this.video_img = false;
          this.video_div = true;
          this.banner_div = true;
          this.banner_img = false;
          this.img1_div = true;
          this.img1_img = false;
          this.img2_div = true;
          this.img2_img = false;
          this.img3_div = true;
          this.img3_img = false;
        }

        _createClass(AddProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bid").then(function (val) {
              _this.buid = val;
              console.log(_this.buid);
            });
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "uoms.php").subscribe(function (resposne) {
              _this.uoms = resposne;
            });
          }
        }, {
          key: "getPicture",
          value: function getPicture() {
            var _this2 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this2.image = 'data:image/jpeg;base64,' + imageData;
              _this2.upload_div = false;
              _this2.image_div = true;
            });
          }
        }, {
          key: "getBanner",
          value: function getBanner() {
            var _this3 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (BannerData) {
              _this3.banner = 'data:image/jpeg;base64,' + BannerData;
              _this3.banner_img = true;
              _this3.banner_div = false;
            });
          }
        }, {
          key: "getVideo",
          value: function getVideo() {
            var _this4 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (videoimg) {
              _this4.video = 'data:image/jpeg;base64,' + videoimg;
              _this4.video_div = false;
              _this4.video_img = true;
            });
          }
        }, {
          key: "getImg1",
          value: function getImg1() {
            var _this5 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (img1Data) {
              _this5.img1 = 'data:image/jpeg;base64,' + img1Data;
              _this5.img1_div = false;
              _this5.img1_img = true;
            });
          }
        }, {
          key: "getImg2",
          value: function getImg2() {
            var _this6 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (img2Data) {
              _this6.img2 = 'data:image/jpeg;base64,' + img2Data;
              _this6.img2_div = false;
              _this6.img2_img = true;
            });
          }
        }, {
          key: "getImg3",
          value: function getImg3() {
            var _this7 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (img3Data) {
              _this7.img3 = 'data:image/jpeg;base64,' + img3Data;
              _this7.img3_div = false;
              _this7.img3_img = true;
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this8 = this;

            var link = _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "addproduct.php";
            var mydata = JSON.stringify({
              'bid': this.buid,
              'producttitle': this.producttitle,
              'producttags': this.producttags,
              'measuringtype': this.measuringtype,
              'measuringdetails': this.measuringdetails,
              'description': this.description,
              'actualprice': this.actualprice,
              'discount': this.discount,
              'image': this.image,
              'banner': this.banner,
              'video': this.video,
              'img1': this.img1,
              'img2': this.img2,
              'img3': this.img3
            });
            console.log(mydata);
            this.http.post(link, mydata).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.addproduct = data;
                        console.log("product details", this.addproduct);
                        this.router.navigate(['product']);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "checkbox",
          value: function checkbox() {
            this.accept = !this.accept;
          }
        }]);

        return AddProductPage;
      }();

      AddProductPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      AddProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-product',
        template: _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddProductPage);
      /***/
    },

    /***/
    "LZri": function LZri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nh5 {\n  color: #871178;\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-card ion-icon {\n  width: 40px;\n  height: 30px;\n  color: #9f9f9f;\n}\n\nion-card p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 0.625em 3.125em;\n  text-align: center;\n  line-height: 1.5em;\n}\n\n.first-card {\n  height: 249px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.second-card {\n  height: 169px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.third-card {\n  height: 75px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.left {\n  padding: 5px 2.5px 0px 0px;\n}\n\n.third-card ion-icon {\n  width: 25px;\n  height: 20px;\n}\n\n.third-card p {\n  font-size: 0.625em;\n  margin: 0.25em 0px;\n}\n\n.right {\n  padding: 5px 0px 0px 2.5px;\n}\n\n.second-grid p {\n  margin: 30px 0px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin: 1em 0px;\n}\n\n.toggle ion-col {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.toggle .textflow {\n  display: flex;\n  justify-content: flex-end;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.check {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 16px;\n  width: 7.6875em;\n  height: 3.125em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLDBCQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksMEJBQUE7QUFXSjs7QUFSQTtFQUNJLGdCQUFBO0FBV0o7O0FBVEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWdCSjs7QUFiQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFnQko7O0FBZEE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQWlCSjs7QUFmQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBa0JKOztBQWhCQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBb0JKIiwiZmlsZSI6ImFkZC1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmg1IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICBtYXJnaW46IDE0cHggMThweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG59XHJcbmlvbi1jYXJkIHAge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMC42MjVlbSAzLjEyNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcbi5maXJzdC1jYXJkIHtcclxuICAgIGhlaWdodDogMjQ5cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNlY29uZC1jYXJkIHtcclxuICAgIGhlaWdodDogMTY5cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRoaXJkLWNhcmQge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDVweCAyLjVweCAwcHggMHB4O1xyXG59XHJcbi50aGlyZC1jYXJkIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi50aGlyZC1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjYyNWVtO1xyXG4gICAgbWFyZ2luOiAwLjI1ZW0gMHB4O1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAyLjVweDtcclxufVxyXG5cclxuLnNlY29uZC1ncmlkIHAge1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1ZW07XHJcbn1cclxuaW9uLWNoaXAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi50b2dnbGUgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbi50b2dnbGUgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9nZ2xlIC50ZXh0ZmxvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5pb24tcm93IGlvbi10b2dnbGUge1xyXG4gICAgLS13aWR0aDogMzRweDtcclxuICAgIC0taGVpZ2h0OiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzlmOWY5ZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjcxODc1ZW07XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzcwNzA3MDtcclxuICAgIG9wYWNpdHk6IDcwJTtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjODcxMTc4O1xyXG4gICAgLS1jaGVja21hcmstd2lkdGg6IDQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1jb2wgLmNvbmZpcm0ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbn1cclxuLmNvbmZpcm0gc3BhbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnRuIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogNy42ODc1ZW07XHJcbiAgICBoZWlnaHQ6IDMuMTI1ZW07XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "SDL9": function SDL9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Add Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"left\">\n        <div *ngIf=\"upload_div\">\n        <ion-card class=\"first-card\" (click)=\"getPicture()\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Product Image</p>\n          </ion-row>\n        </ion-card>\n      </div>\n        <ion-card *ngIf=\"image_div\" class=\"first-card\">\n          <img *ngIf=\"image != ''\" width=\"100%\" src=\"{{image}}\" />\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <div *ngIf=\"video_div\">\n        <ion-card class=\"second-card\"  (click)=\"getVideo()\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Product video</p>\n          </ion-row>\n        </ion-card>\n      </div>\n      <ion-card *ngIf=\"video_img\" class=\"second-card\">\n        <img *ngIf=\"video != ''\" width=\"100%\" src=\"{{video}}\" />\n      </ion-card>\n        <ion-row class=\"pad\">\n          <ion-col class=\"left\">\n            <div *ngIf=\"img1_div\">\n            <ion-card class=\"third-card\"  (click)=\"getImg1()\">\n              <ion-row>\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n              </ion-row>\n              <ion-row>\n                <p>Upload Image</p>\n              </ion-row>\n            </ion-card>\n          </div>\n          <ion-card class=\"third-card\"  *ngIf=\"img1_img\">\n            <img *ngIf=\"img1 != ''\" width=\"100%\" src=\"{{img1}}\" />\n          </ion-card>\n          </ion-col>\n          <ion-col class=\"right\">\n            <div *ngIf=\"img2_div\">\n            <ion-card class=\"third-card\"  (click)=\"getImg2()\">\n              <ion-row>\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n              </ion-row>\n              <ion-row>\n                <p>Upload Image</p>\n              </ion-row>\n            </ion-card>\n            </div>\n            <ion-card class=\"third-card\"  *ngIf=\"img2_img\">\n              <img *ngIf=\"img2 != ''\" width=\"100%\" src=\"{{img2}}\" />\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" class=\"left\">\n        <div *ngIf=\"img3_div\">\n        <ion-card class=\"third-card\"  (click)=\"getImg3()\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Image</p>\n          </ion-row>\n        </ion-card>\n        </div>\n        <ion-card class=\"third-card\"  *ngIf=\"img3_img\">\n          <img *ngIf=\"img3 != ''\" width=\"100%\" src=\"{{img3}}\" />\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <div *ngIf=\"banner_div\">\n        <ion-card class=\"third-card\"  (click)=\"getBanner()\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Banner</p>\n          </ion-row>\n        </ion-card>\n        </div>\n        <ion-card class=\"third-card\"  *ngIf=\"banner_img\">\n          <img *ngIf=\"banner != ''\" width=\"100%\" src=\"{{banner}}\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"second-grid\">\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Product Title\" [(ngModel)]=\"producttitle\" id=\"title\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      Product Tags\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"producttags\" id=\"tags\">\n         \n        </ion-textarea>\n      </ion-row>\n    </p>\n   \n    <ion-item>\n      <ion-label>Measuring Type</ion-label>\n      <ion-select  interface=\"popover\" [(ngModel)]=\"measuringtype\" id=\"type\">\n        <ion-select-option *ngFor=\"let u of uoms; let i= index\" value=\"{{u.text}}\" selected>{{u.text}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <br>\n    <ion-row>\n      <ion-textarea placeholder=\"Measuring Details\" [(ngModel)]=\"measuringdetails\" id=\"details\"> </ion-textarea>\n    </ion-row>\n    <p>\n      Description\n      <ion-row>\n        <ion-textarea [(ngModel)]=\"description\" id=\"desc\"></ion-textarea>\n      </ion-row>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Actual Price\" [(ngModel)]=\"actualprice\" id=\"price\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Discount Price\" [(ngModel)]=\"discount\" id=\"count\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-row class=\"toggle\">\n        <ion-col>\n          <p>Cash on Delivery</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"textflow\">\n\n          <ion-toggle checked mode=\"md\"></ion-toggle>\n          <!-- <ion-toggle [(ngModel)]=\"var1\" mode=\"md\" (ionChange)=\"change($event)\">\n          </ion-toggle> -->\n\n        </ion-col>\n      </ion-row>\n    </p>\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox (ionChange)=\"checkbox()\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button [disabled]=\"!accept\" (click)=submit()>Submit</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "aRnh": function aRnh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductPageRoutingModule", function () {
        return AddProductPageRoutingModule;
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


      var _add_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-product.page */
      "7py5");

      var routes = [{
        path: '',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_3__["AddProductPage"]
      }];

      var AddProductPageRoutingModule = function AddProductPageRoutingModule() {
        _classCallCheck(this, AddProductPageRoutingModule);
      };

      AddProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddProductPageRoutingModule);
      /***/
    },

    /***/
    "gp+k": function gpK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function () {
        return AddProductPageModule;
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


      var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-product-routing.module */
      "aRnh");
      /* harmony import */


      var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-product.page */
      "7py5");

      var AddProductPageModule = function AddProductPageModule() {
        _classCallCheck(this, AddProductPageModule);
      };

      AddProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProductPageRoutingModule"]],
        declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]]
      })], AddProductPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-product-add-product-module-es5.js.map