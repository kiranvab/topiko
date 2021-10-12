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
          this.upload_div = true;
          this.image_div = false;
          this.overview = true;
          this.address = false;
          this.description = false;
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
              if (this.mode == "services") {
                this.ser_div = true;
                this.cat_div = false;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getservices.php").subscribe(function (ser) {
                  _this3.services = ser;
                  console.log("services:", _this3.services);
                });
              } else {
                this.ser_div = true;
                this.cat_div = true;
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getservices.php").subscribe(function (ser) {
                  _this3.services = ser;
                  console.log("services:", _this3.services);
                });
                this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "getcategories.php").subscribe(function (cat) {
                  _this3.options = cat;
                  console.log("categories:", _this3.categoreis);
                });
              }
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
              _this4.upload_div = false;
              _this4.image_div = true;
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this5 = this;

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
              console.log(mydata);
              var link = _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "create_business.php";
              this.http.post(link, mydata).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _alert;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.businessdata = data;
                          console.log("userdetails", this.businessdata);

                          if (!(this.businessdata == "Data already Exists")) {
                            _context.next = 10;
                            break;
                          }

                          _context.next = 5;
                          return this.alertCtrl.create({
                            header: 'Alert',
                            message: 'Business Already Exist',
                            buttons: ['OK']
                          });

                        case 5:
                          _alert = _context.sent;
                          _context.next = 8;
                          return _alert.present();

                        case 8:
                          _context.next = 11;
                          break;

                        case 10:
                          this.router.navigate(['my-business']);

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            }
          }
        }, {
          key: "checkbox",
          value: function checkbox() {
            this.accept = !this.accept;
          }
        }, {
          key: "next1",
          value: function next1() {
            this.overview = false;
            this.address = true;
          }
        }, {
          key: "next2",
          value: function next2() {
            this.address = false;
            this.description = true;
          }
        }, {
          key: "prev1",
          value: function prev1() {
            this.overview = true;
            this.address = false;
          }
        }, {
          key: "prev2",
          value: function prev2() {
            this.address = true;
            this.description = false;
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


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 5px;\n  --padding-start: 5px;\n  --padding-top: 5px;\n  --ion-background-color: #fff;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.pin {\n  color: #871178;\n  font-size: 18px;\n  padding: 10px 0;\n  text-decoration: underline;\n  padding-left: 16px;\n}\n\n.purple-btn {\n  width: 50%;\n}\n\n.business-dyn {\n  background: #f2f2f2 !important;\n  padding: 0.5em;\n  padding-left: 14px;\n}\n\n.business-dyn ion-col {\n  padding: 0%;\n}\n\n.mt-20 {\n  margin-top: 10%;\n}\n\n.create-icon {\n  font-size: 32px;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 3%;\n}\n\n.bcard-head {\n  background: linear-gradient(#871178, #44093c);\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  padding: 0;\n  height: 25%;\n}\n\n.bcard-body {\n  background-color: #fff;\n  padding: 5%;\n}\n\n.first {\n  margin: 5px;\n}\n\n.row {\n  height: 14em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n  margin-top: 15%;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 30%;\n}\n\n.position-cam {\n  position: relative;\n  left: 45px;\n  top: 5px;\n  width: 40px;\n}\n\n.business-dyn {\n  background: #f2f2f2 !important;\n  padding: 0.5em;\n  padding-left: 14px;\n  margin-top: 0px;\n}\n\n.id-color {\n  color: #871178;\n}\n\n.title {\n  font-size: 16px;\n  color: #871178;\n  line-height: 25px;\n  margin-top: 20px;\n  margin-bottom: -8px;\n}\n\n.text {\n  font-size: 16px;\n  color: #22272a;\n}\n\n.title-name {\n  font-size: 18px;\n  color: #871178;\n  line-height: 0;\n  text-align: center;\n  font-size: 24px;\n}\n\n.text-desc {\n  font-size: 14px;\n  color: #707070;\n  text-align: center;\n  line-height: 5px;\n}\n\nion-icon {\n  font-size: 32px;\n  color: #9f9f9f;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.view-more {\n  text-align: center;\n  color: #871178;\n  text-decoration: underline;\n  font-size: 16px;\n  padding-bottom: 10%;\n}\n\nspan {\n  text-decoration: underline;\n  color: #871178;\n}\n\nh3 {\n  color: #22272a;\n}\n\nion-input,\nion-select {\n  border-bottom: 1px solid #ccc;\n}\n\ntextarea {\n  width: 100%;\n  min-height: 150px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n}\n\n.checkbox {\n  font-size: 20px;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n  margin-right: 8px;\n  margin-top: 4px;\n}\n\n.flex {\n  display: flex;\n}\n\nion-col .agree {\n  font-size: 12px;\n  color: #22272a;\n  margin-top: 2%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.agree span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.buton {\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n}\n\nion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 20px;\n  width: 165px;\n  height: 50px;\n  --border-radius: 3px;\n}\n\nion-select {\n  --placeholder-opacity: 100%;\n  --padding-start: 0px;\n}\n\nion-input {\n  --placeholder-opacity: 1 !important;\n  --padding-start: 0px;\n}\n\n.next-div {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  background: #fff;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n\n.fixed-head {\n  position: fixed;\n  width: 97%;\n  height: 250px;\n  overflow: scroll;\n  top: 50px;\n}\n\n.center-content {\n  z-index: -1;\n  margin: 0 auto;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS1idXNpbmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtBQVFGOztBQUxBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVNGOztBQU5BO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFDRSxZQUFBO0FBU0Y7O0FBUEE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFZRjs7QUFWQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQWFGOztBQVhBO0VBQ0Usa0JBQUE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFjSjs7QUFaQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWVGOztBQWJBO0VBQ0UsY0FBQTtBQWdCRjs7QUFiQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZ0JGOztBQWRBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFpQkY7O0FBYkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFnQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFpQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWlCRjs7QUFkQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBaUJGOztBQWRBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBaUJGOztBQWZBO0VBQ0UsY0FBQTtBQWtCRjs7QUFmQTs7RUFFRSw2QkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBbUJGOztBQWpCQTtFQUNFLGVBQUE7QUFvQkY7O0FBakJBOztFQUVFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFxQkY7O0FBaEJBO0VBQ0UsYUFBQTtBQW1CRjs7QUFqQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBb0JGOztBQWxCQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQXNCRjs7QUFwQkE7RUFDRSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0FBd0JGOztBQXRCQTtFQUNFLG1DQUFBO0VBQ0Esb0JBQUE7QUF5QkY7O0FBdEJBO0VBRUksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUF3Qko7O0FBckJBO0VBRUcsZUFBQTtFQUNDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBdUJKOztBQXJCQTtFQUVJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQXVCSiIsImZpbGUiOiJjcmVhdGUtYnVzaW5lc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDVweDtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ucGluIHtcclxuICBjb2xvcjogIzg3MTE3ODtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG4ucHVycGxlLWJ0biB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uYnVzaW5lc3MtZHluIHtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG59XHJcbi5idXNpbmVzcy1keW4gaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMCU7XHJcbn1cclxuLm10LTIwIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jcmVhdGUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbn1cclxuLmJjYXJkLWhlYWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjNDQwOTNjKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbi5iY2FyZC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4vLyBmaXJzdC1jYXJkXHJcbi5maXJzdCB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgaGVpZ2h0OiAxNGVtO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOS4zNzVlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDE0NnB4O1xyXG4gIGhlaWdodDogMTQ2cHg7XHJcbiAgbWFyZ2luLXRvcDoxNSU7XHJcbn1cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luLXRvcDogMzAlO1xyXG59XHJcbi5wb3NpdGlvbi1jYW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcbi5idXNpbmVzcy1keW4ge1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5pZC1jb2xvciB7XHJcbiAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG4udGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjIyNzJhO1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4udGl0bGUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnRleHQtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNXB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjOWY5ZjlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnZpZXctbW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjODcxMTc4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5oMyB7XHJcbiAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCxcclxuaW9uLXNlbGVjdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5jaGVja2JveCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjNzA3MDcwO1xyXG4gIG9wYWNpdHk6IDcwJTtcclxuICAtLWNoZWNrbWFyay1jb2xvcjogIzg3MTE3ODtcclxuICAtLWNoZWNrbWFyay13aWR0aDogNDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuLy8gLmNoZWNrIHtcclxuLy8gICBwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gfVxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5pb24tY29sIC5hZ3JlZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMjIyNzJhO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG4uYWdyZWUgc3BhbiB7XHJcbiAgY29sb3I6ICM4NzExNzg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmJ1dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAxNjVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbi5uZXh0LWRpdlxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmZpeGVkLWhlYWRcclxue1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICB0b3A6IDUwcHg7XHJcbn1cclxuLmNlbnRlci1jb250ZW50XHJcbntcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTUlO1xyXG59Il19 */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create Business</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-card class=\"first\" style=\"border-radius: 0px;\" (click)=\"getPicture();\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\" *ngIf=\"upload_div\" >\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\" >\n      </ion-col>\n      <ion-col class=\"bg\" *ngIf=\"image_div\" >\n      <ion-avatar>\n        <img *ngIf=\"image != ''\" width=\"100%\" src=\"{{image}}\" />\n      </ion-avatar>\n    </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div class=\"business-dyn\">\n    <ion-row>\n      <ion-col size=\"5\" style=\"color: #22272A;\">Business ID</ion-col>\n      <ion-col class=\"id-color\">{{bid}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\" style=\"color: #22272A;\">Pin No</ion-col>\n      <ion-col class=\"id-color\">{{bpin}}</ion-col>\n    </ion-row>\n  </div>\n  <!-- <div class=\"bcard-head\">\n    <div><img src=\"assets/profile.svg\" class=\"mt-20\"></div>\n  </div>\n\n  <div class=\"bcard-body\">\n    <div class=\"business-dyn\">\n      <ion-row>\n        <ion-col size=\"4\">Business ID</ion-col>\n        <ion-col>{{bid}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">Pin No</ion-col>\n        <ion-col>{{bpin}}</ion-col>\n      </ion-row>\n    </div> -->\n    <div class=\"fixed-head\">\n  \n</div>\n  <div class=\"bcard-body\" style=\"padding-top: 0%;\"  class=\"center-content\">\n    <div *ngIf=\"overview\">\n    <p class=\"text\">\n      <ion-input placeholder=\"Business Name\" [(ngModel)]=\"businessname\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-select placeholder=\"Business Type\" [(ngModel)]=\"type\">\n        <ion-select-option value=\"proprietorship\">Proprietorship</ion-select-option>\n        <ion-select-option value=\"partnership\">Partnership</ion-select-option>\n        <ion-select-option value=\"opc\">OPC</ion-select-option>\n        <ion-select-option value=\"llp\">LLP</ion-select-option>\n        <ion-select-option value=\"private\">Private Limited</ion-select-option>\n        <ion-select-option value=\"public\">Public Limited</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\">\n      <ion-input placeholder=\"Business Contact No\" [(ngModel)]=\"number\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-input placeholder=\"Owner Name\" [(ngModel)]=\"ownername\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-select placeholder=\"Business mode\" [(ngModel)]=\"mode\" (ionChange)=\"getserccat()\">\n        <ion-select-option value=\"services\">Services </ion-select-option>\n        <ion-select-option value=\"category\">Products</ion-select-option>\n        <ion-select-option value=\"both\">Both</ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\" *ngIf=\"cat_div\">\n      <ion-select placeholder=\"Select Category\" [(ngModel)]=\"category_id\">\n        <ion-select-option *ngFor=\"let cat of categoreis; let i=index;\" value=\"{{cat.id}}\">{{cat.category}}\n        </ion-select-option>\n      </ion-select>\n    </p>\n\n    <p class=\"text\" *ngIf=\"ser_div\">\n      <ion-select placeholder=\"Select Services\" [(ngModel)]=\"service_id\">\n        <ion-select-option *ngFor=\"let ser of services; let i=index;\" value=\"{{ser.id}}\">{{ser.service}}\n        </ion-select-option>\n      </ion-select>\n    </p>\n\n\n    <p class=\"title\">Select Business Tags</p>\n    <p class=\"text\" >\n      <textarea [(ngModel)]=\"tag1\"></textarea>\n    </p>\n    <br>\n    <br>\n    <br>\n    <ion-row class=\"next-div\">\n      <ion-col></ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"next1()\">Next</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"address\"  class=\"center-content\">\n    <p>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input [(ngModel)]=\"add1\"></ion-input>\n      <ion-input [(ngModel)]=\"add2\"></ion-input>\n      <ion-input [(ngModel)]=\"add3\"></ion-input>\n    </p>\n    <p class=\"text\">\n      <ion-select placeholder=\"Country\" [(ngModel)]=\"country\">\n        <ion-select-option value=\"India\">India</ion-select-option>\n        <ion-select-option value=\"USA\">USA</ion-select-option>\n      </ion-select>\n    </p>\n    <p class=\"text\">\n      <ion-select placeholder=\"State\" [(ngModel)]=\"state\">\n        <ion-select-option value=\"andhra pradesh\">Andhra Pradesh</ion-select-option> -->\n        <ion-select-option value=\"andaman and Nicobar Islands\">Andaman and Nicobar Islands</ion-select-option>\n        <ion-select-option value=\"assam\">Assam</ion-select-option>\n        <ion-select-option value=\"bihar\">Bihar</ion-select-option>\n        <ion-select-option value=\"chandigarh\">Chandigarh</ion-select-option>\n        <ion-select-option value=\"chhattisgarh\">chhattisgarh</ion-select-option>\n        <ion-select-option value=\"dadar and Nagarhaveli\">Dadar and Nagarhaveli</ion-select-option>\n        <ion-select-option value=\"daman and Diu\">Daman and Diu</ion-select-option>\n        <ion-select-option value=\"delhi\">Delhi</ion-select-option>\n        <ion-select-option value=\"lakshadweep\">Lakshadweep</ion-select-option>\n        <ion-select-option value=\"puducherry\">Puducherry</ion-select-option>\n        <ion-select-option value=\"goa\">Goa</ion-select-option>\n        <ion-select-option value=\"gujarat\">Gujarat</ion-select-option>\n        <ion-select-option value=\"haryana\">Haryana</ion-select-option>\n        <ion-select-option value=\"himachal Pradesh\">Himachal Pradesh</ion-select-option>\n        <ion-select-option value=\"jammu and Kashmir\">Jammu and Kashmir</ion-select-option>\n        <ion-select-option value=\"jharkhand\">Jharkhand</ion-select-option>\n        <ion-select-option value=\"karnataka\">Karnataka</ion-select-option>\n        <ion-select-option value=\"kerala\">Kerala</ion-select-option>\n        <ion-select-option value=\"madhya Pradesh\">Madhya Pradesh</ion-select-option>\n        <ion-select-option value=\"maharashtra\">Maharashtra</ion-select-option>\n        <ion-select-option value=\"manipur\">Manipur</ion-select-option>\n        <ion-select-option value=\"meghalaya\">Meghalaya</ion-select-option>\n        <ion-select-option value=\"mizoram\">Mizoram</ion-select-option>\n        <ion-select-option value=\"nagaland\">Nagaland</ion-select-option>\n        <ion-select-option value=\"odisha\">Odisha</ion-select-option>\n        <ion-select-option value=\"punjab\">Punjab</ion-select-option>\n        <ion-select-option value=\"rajasthan\">Rajasthan</ion-select-option>\n        <ion-select-option value=\"sikkim\">Sikkim</ion-select-option>\n        <ion-select-option value=\"tamilnadu\">Tamilnadu</ion-select-option>\n        <ion-select-option value=\"telangana\">Telangana</ion-select-option>\n        <ion-select-option value=\"tripura\">Tripura</ion-select-option>\n        <ion-select-option value=\"uttar Pradesh\">Uttar Pradesh</ion-select-option>\n        <ion-select-option value=\"uttarakhand\">Uttarakhand</ion-select-option>\n        <ion-select-option value=\"westbengal\">Westbengal</ion-select-option>\n      </ion-select>\n    </p>\n    <p class=\"text\">\n      <ion-input type=\"mobile\" [(ngModel)]=\"pincode\" placeholder=\"Pin Code\" [(ngModel)]=\"pincode\"></ion-input>\n    </p>\n\n    <p class=\"text\">\n      <ion-input type=\"text\" placeholder=\"SHOP URL\" [(ngModel)]=\"shopurl\"></ion-input>\n    </p>\n    <br>\n    <ion-row class=\"next-div\">\n      <ion-col>\n        <ion-button expand=\"block\" color=\"light\" (click)=\"prev1()\" >Previous</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"next2()\">Next</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"description\"  class=\"center-content\">\n    <p class=\"title\">Shop Description</p>\n    <p class=\"text\">\n      <textarea [(ngModel)]=\"shopdesc\"></textarea>\n    </p>\n\n    <!-- <ion-row class=\"pin-location\">\n      <div style=\"display: flex; width: 18px;\">\n        <img src=\"assets/location.svg\">\n      </div>\n      <ion-col class=\"pin\">\n        Business location\n      </ion-col>\n    </ion-row> -->\n\n    <p class=\"title\">View on your Businesss <span style=\"color: #ccc; font-size: 12px; text-decoration: none;\">( Optional )</span></p>\n    <p class=\"text\">\n      <textarea [(ngModel)]=\"tag2\"></textarea>\n    </p>\n\n    <p class=\"title\">Your Business Story <span style=\"color: #ccc; font-size: 12px;  text-decoration: none;\">( Optional )</span></p>\n    <p class=\"text\" style=\"margin-bottom: 0%;\">\n      <textarea [(ngModel)]=\"tag3\"></textarea>\n    </p>\n    <br>\n\n    <!-- <div class=\"text-center\" class=\"pb-15\">\n      <ion-checkbox color=\"success\" checked></ion-checkbox> I Agree for the <span>Terms and Conditions</span>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"purple-btn\" color=\"custom\" routerLink=\"/my-business\">Submit</ion-button>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class=\"check\">\n      <ion-col class=\"flex\">\n        <ion-checkbox (ionChange)=\"checkbox()\"></ion-checkbox>\n        <ion-label class=\"agree\">I agree for the <span>Terms and Conditions</span></ion-label>\n      </ion-col>\n    </ion-row>\n    <br>\n    <br>\n    <br>\n    <ion-row class=\"next-div\">\n      <ion-col>\n        <ion-button expand=\"block\" color=\"light\" (click)=\"prev2()\">Previous</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" [disabled]=\"!accept\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n  </div>\n</ion-content>";
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