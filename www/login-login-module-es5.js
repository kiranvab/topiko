(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5": function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
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


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(http, geolocation, storage, alertCtrl, router, device, menuCtrl) {
          _classCallCheck(this, LoginPage);

          this.http = http;
          this.geolocation = geolocation;
          this.storage = storage;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.device = device;
          this.menuCtrl = menuCtrl; //this.menuCtrl.enable(false);
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              // resp.coords.latitude
              // resp.coords.longitude
              _this.lat = resp.coords.latitude;
              _this["long"] = resp.coords.longitude;
              console.log("Latitude", _this.lat);
              console.log("Latitude", _this["long"]);

              _this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + _this.lat + "," + _this["long"] + "&result_tyep=street_number&key=AIzaSyCPuQadZpFuDF9KOWFrlthnPRdRJb-QlrI").subscribe(function (data) {
                _this.location = data;
                console.log(location, "Location");
                _this.mylocation = _this.location.results[1].address_components;
                _this.mylength = _this.mylocation.length;
                console.log("location.length", _this.mylength);
                console.log("location Details", _this.mylocation);
                _this.area = _this.mylocation[_this.mylength - 6].long_name;
                _this.city = _this.mylocation[_this.mylength - 5].long_name;
                _this.state = _this.mylocation[_this.mylength - 3].long_name;
                _this.country = _this.mylocation[_this.mylength - 2].long_name;
                _this.pincode = _this.mylocation[_this.mylength - 1].long_name;
                console.log(_this.area, _this.city, _this.state, _this.pincode, _this.country);
              });
            });
          }
        }, {
          key: "onChange",
          value: function onChange(value) {
            var phoneno = value;
            var len = phoneno.length;
            var name = this.name;

            if (len == 10) {
              this.login();
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this2 = this;

            console.log(this.name);
            console.log(this.phone);
            var link = _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "register.php";
            var mydata = JSON.stringify({
              'name': this.name,
              'mobile': this.phone,
              'longitude': this["long"],
              'latitude': this.lat,
              'pincode': this.pincode,
              'area': this.area,
              'city': this.city,
              'state': this.state,
              'country': this.country,
              'os': "Android",
              'notification_id': "1234",
              'referral_code': "12345"
            });
            console.log(mydata);
            this.http.post(link, mydata).subscribe(function (data) {
              _this2.details = data;
              console.log("User Details", _this2.details);

              if (_this2.details == "Mobile already Exists") {
                alert("Mobile Number Already Exist");

                _this2.router.navigate(['relogin']);
              } else {
                var navigationExtras = {
                  queryParams: {
                    user: JSON.stringify(_this2.details)
                  }
                };

                _this2.router.navigate(['otp'], navigationExtras);
              }

              console.log(_this2.details);
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie": function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"background\">\n  <div class=\"logo\">\n    <img src=\"assets/logo.png\" width=\"30%\">\n  </div>\n\n  <ion-item class=\"ion-item-cust\">\n    \n    <ion-input [(ngModel)]=\"name\" id=\"name\" placeholder=\"Name\"></ion-input>\n  </ion-item>\n\n  <ion-row class=\"mt-4\">\n    <ion-col size=\"4\">\n      <ion-item class=\"select-margin\">\n        <ion-select ok-text=\"OK\" cancel-text=\"NO\" value=\"ind\">\n          <ion-select-option value=\"ind\">+91</ion-select-option>\n          <ion-select-option value=\"lunix\">+1</ion-select-option>\n          <ion-select-option value=\"mac7\">+65</ion-select-option>\n          <ion-select-option value=\"mac8\">+60</ion-select-option>\n          <ion-select-option value=\"win3.1\">+92</ion-select-option>\n          <ion-select-option value=\"win95\">+80</ion-select-option>\n          </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col class=\"col-margin\">\n      <ion-item>\n        <ion-input type=\"number\" maxlength=\"10\" [(ngModel)]=\"phone\" id=\"phone\" (keyup)='onChange($event.target.value)'></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"mtb-10\">\n    <ion-col class=\"text-center\">\n      <img src=\"assets/enter.svg\" (click)=\"login()\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"relogin\">\n      <div routerLink=\"/relogin\">Already Have an Account? <br> <u>Click here </u> to login</div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "X3zk": function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS": function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e": function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  --ion-background-color:linear-gradient(#871178, #3C1378) !important;\n}\n\n.logo {\n  text-align: center;\n  padding-top: 35%;\n  padding-bottom: 10px;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\n.ion-item-cust {\n  --ion-background-color:transparent;\n  margin: 0 15% 0 15%;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-item {\n  --ion-background-color:transparent;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  --padding-start:10;\n  border-bottom: 1px solid #fff;\n}\n\n.select-margin {\n  margin: 0 0 0 45%;\n  font-size: 16px;\n}\n\n.col-margin {\n  margin: 0 14% 0 0;\n}\n\n.mt-4 {\n  margin-top: 4%;\n}\n\n.mt-20 {\n  margin-top: 20%;\n}\n\n.mtb-10 {\n  margin-top: 10%;\n  margin-bottom: 10%;\n  font-size: 1em;\n}\n\n.relogin {\n  text-align: center;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1FQUFBO0FBQUo7O0FBR0E7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUVJLGtDQUFBO0FBRko7O0FBSUE7RUFFSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBRUksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUZKOztBQUtBO0VBRUksaUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFFSSxpQkFBQTtBQUpKOztBQU9BO0VBRUksY0FBQTtBQUxKOztBQU9BO0VBRUksZUFBQTtBQUxKOztBQVFBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0FBUEoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRcclxue1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNDMTM3OCkgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5sb2dvXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZlXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlvbi1pdGVtLWN1c3Rcclxue1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjowIDE1JSAwIDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDoxMDsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLnNlbGVjdC1tYXJnaW5cclxue1xyXG4gICAgbWFyZ2luOjAgMCAwIDQ1JTtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4uY29sLW1hcmdpblxyXG57XHJcbiAgICBtYXJnaW46MCAxNCUgMCAwXHJcbn1cclxuXHJcbi5tdC00XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5tdC0yMFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5tdGItMTBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5yZWxvZ2luXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map