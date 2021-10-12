(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gcategory-gcategory-module"], {
    /***/
    "Luw3": function Luw3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GcategoryPageRoutingModule", function () {
        return GcategoryPageRoutingModule;
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


      var _gcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gcategory.page */
      "eUhW");

      var routes = [{
        path: '',
        component: _gcategory_page__WEBPACK_IMPORTED_MODULE_3__["GcategoryPage"]
      }];

      var GcategoryPageRoutingModule = function GcategoryPageRoutingModule() {
        _classCallCheck(this, GcategoryPageRoutingModule);
      };

      GcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GcategoryPageRoutingModule);
      /***/
    },

    /***/
    "aaJf": function aaJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" mode=\"md\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cateogory</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- <ion-item>\n    <ion-range min=\"1\" max=\"50\" step=\"5\" snaps=\"true\" color=\"secondary\">\n      <ion-label slot=\"start\">1</ion-label>\n      <ion-label slot=\"end\">50</ion-label>\n    </ion-range>\n  </ion-item> -->\n\n  <ion-label class=\"titl\">TOPIKO Listed</ion-label>\n\n  <ion-card *ngFor=\"let bus of business  let i=index;\" (click)=\"catdetails(i)\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\" src=\"{{bus.logo}}\" />\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">{{bus.business_name}}</p>\n        <ion-row class=\"star\">\n          <span>\n            {{bus.busienss_story}}\n          </span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card *ngFor=\"let ser of services  let i=index;\" (click)=\"serdetails(i)\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\" src=\"{{ser.logo}}\" />\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">{{ser.business_name}}</p>\n        <ion-row class=\"star\">\n          <span>\n            {{ser.busienss_story}}\n          </span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n\n  <ion-label class=\"titl\">Powered by Google</ion-label>\n  <ion-card *ngFor=\"let cat of categories | slice:0:19; let i=index;\" (click)=\"gdetails(i)\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar *ngIf=\"cat.opening_hours\">\n          <img class=\"border\" src=\"https://topiko.com/app/icons/open.jpg\" />\n        </ion-avatar>\n        <ion-avatar *ngIf=\"cat.opening_hours == false\">\n          <img class=\"border\" src=\"https://topiko.com/app/icons/closed.jpg\" />\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">{{cat.name}}</p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>\n            {{cat.rating}} Ratings\n          </span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "cWrZ": function cWrZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GcategoryPageModule", function () {
        return GcategoryPageModule;
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


      var _gcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gcategory-routing.module */
      "Luw3");
      /* harmony import */


      var _gcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gcategory.page */
      "eUhW");

      var GcategoryPageModule = function GcategoryPageModule() {
        _classCallCheck(this, GcategoryPageModule);
      };

      GcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["GcategoryPageRoutingModule"]],
        declarations: [_gcategory_page__WEBPACK_IMPORTED_MODULE_6__["GcategoryPage"]]
      })], GcategoryPageModule);
      /***/
    },

    /***/
    "eUhW": function eUhW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GcategoryPage", function () {
        return GcategoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gcategory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gcategory.page.html */
      "aaJf");
      /* harmony import */


      var _gcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gcategory.page.scss */
      "fK7+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");

      var GcategoryPage = /*#__PURE__*/function () {
        function GcategoryPage(actionsheetCtrl, router, storage, http, geolocation) {
          _classCallCheck(this, GcategoryPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.router = router;
          this.storage = storage;
          this.http = http;
          this.geolocation = geolocation;
        }

        _createClass(GcategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("userdetails").then(function (val) {
              _this.udata = val;
              _this.user_id = _this.udata[0].id;
            });
            this.storage.get("catid").then(function (val) {
              _this.cat_id = val;
              console.log("Category Id", _this.cat_id);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbusbycat.php?cat_id=" + _this.cat_id).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.business = data;
                          console.log("Business", this.business);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
            this.storage.get("sid").then(function (sval) {
              _this.sid = sval;
              console.log("Service Id", _this.sid);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbusbyservice.php?sid=" + _this.sid).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          this.services = data;
                          console.log("Services", this.services);

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            });
            this.storage.get("type").then(function (val) {
              console.log("type", val);
              _this.type = val;
              console.log("Cat type", _this.type);

              _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.lat = resp.coords.latitude;
                _this["long"] = resp.coords.longitude;

                _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "gcategories.php?lat=" + _this.lat + "&long=" + _this["long"] + "&type=" + _this.type).subscribe(function (response) {
                  _this.cate = response;
                  _this.categories = _this.cate.results;
                  console.log("Categories", _this.categories);

                  _this.http.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins='this.lat','this.long'+&destinations='this.dlat','this.dlng'&key=AIzaSyBW0TeLuYYvzuzEGXF53uxTEJ6PIcaF89w").subscribe(function (response) {
                    _this.dis = response;
                    console.log("Distance", _this.dis);
                  });
                });
              });
            });
          }
        }, {
          key: "gdetails",
          value: function gdetails(i) {
            console.log(this.categories[i].place_id);
            this.storage.set("placeid", this.categories[i].place_id);
            this.router.navigate(['/gdetails']);
          }
        }, {
          key: "catdetails",
          value: function catdetails(i) {
            //console.log(this.recent[i].id);
            this.storage.set("bid", this.categories[i].id);
            this.router.navigate(['details']);
            this.Viewbusiness(this.categories[i].id);
          }
        }, {
          key: "serdetails",
          value: function serdetails(i) {
            //console.log(this.recent[i].id);
            this.storage.set("bid", this.services[i].id);
            this.router.navigate(['details']);
            this.Viewbusiness(this.services[i].id);
          }
        }, {
          key: "Viewbusiness",
          value: function Viewbusiness(id) {
            var _this2 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "viewbusiness.php?bid=" + id + "&user_id=" + this.user_id).subscribe(function (vrespo) {
              _this2.vrespo = vrespo;
              console.log("View Response:", _this2.user_id);
            });
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            console.log("VIew Did Load");
            this.storage.remove("sid");
            this.storage.remove("catid");
          }
        }]);

        return GcategoryPage;
      }();

      GcategoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
        }];
      };

      GcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-gcategory',
        template: _raw_loader_gcategory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gcategory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GcategoryPage);
      /***/
    },

    /***/
    "fK7+": function fK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 80px;\n}\n\n.user-name {\n  color: #871178;\n  line-height: 1;\n  padding: 10px 0;\n  margin: 0;\n  font-size: 1.2em;\n}\n\n.titl {\n  color: #871178;\n  border-bottom: 2px solid #cecece;\n  width: 100%;\n  display: block;\n  height: 40px;\n  margin-top: 30px;\n  margin: 0 auto;\n  background: #f3f3f3;\n  padding: 10px;\n  text-align: center;\n}\n\nion-card {\n  padding: 10px;\n  margin: 10px 18px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdjYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFHSiIsImZpbGUiOiJnY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODBweDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbi50aXRsIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZWNlY2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMThweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=gcategory-gcategory-module-es5.js.map