(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"], {
    /***/
    "HLTW": function HLTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"background\">\n\n  <div class=\"logo\">\n    <img src=\"assets/logo.png\" width=\"30%\">\n  </div>\n\n  <ion-row class=\"mt25-10\">\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"otp1\" type=\"number\" maxlength=\"1\" #otp_1 (keyup)=\"gotoNextField(otp_2)\" (keydown)=\"check()\" ></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"otp2\" type=\"number\" maxlength=\"1\" #otp_2 (keyup)=\"gotoNextField(otp_3)\" (keydown)=\"check()\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"otp3\" type=\"number\" maxlength=\"1\" #otp_3 (keyup)=\"gotoNextField(otp_4)\" (keydown)=\"check()\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"otp4\" type=\"number\" maxlength=\"1\" #otp_4 (keyup)=\"check()\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"otp-text\">\n    <ion-col>Re send OTP</ion-col>\n    <ion-col>1:32 Sec</ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt-10 \">\n    <ion-col class=\"text-center\">\n      <ion-col>\n        <img src=\"assets/refresh.svg\" (click)=\"checkotp()\">\n      </ion-col>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "L5nD": function L5nD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
        return OtpPageRoutingModule;
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


      var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var routes = [{
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
      }];

      var OtpPageRoutingModule = function OtpPageRoutingModule() {
        _classCallCheck(this, OtpPageRoutingModule);
      };

      OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpPageRoutingModule);
      /***/
    },

    /***/
    "NLUG": function NLUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  --ion-background-color:linear-gradient(#871178, #3C1378) !important;\n}\n\n.logo {\n  text-align: center;\n  padding-top: 40%;\n  padding-bottom: 10px;\n}\n\nion-item {\n  --ion-background-color: transparent;\n  text-align: center;\n  color: #fff;\n  font-size: 32px;\n  --padding-start: 10;\n  --padding-end: 10;\n  border-bottom: 3px solid;\n}\n\nion-input {\n  border-bottom: 2px;\n  --padding-start:20px !important;\n}\n\n.item-inner {\n  border: 5px;\n}\n\n.mt25-10 {\n  margin: 10% 10% 5% 9%;\n}\n\n.mt-10 {\n  margin-top: 10%;\n}\n\n.otp-text {\n  text-align: center;\n  font-size: 20px;\n  color: #cacaca;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtRUFBQTtBQUFKOztBQUVBO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFFSSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFESjs7QUFJQTtFQUVJLGtCQUFBO0VBQ0EsK0JBQUE7QUFGSjs7QUFNQTtFQUVJLFdBQUE7QUFKSjs7QUFPQTtFQUVJLHFCQUFBO0FBTEo7O0FBUUE7RUFFSSxlQUFBO0FBTko7O0FBUUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFOSiIsImZpbGUiOiJvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRcclxue1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNDMTM3OCkgIWltcG9ydGFudDtcclxufVxyXG4ubG9nb1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTA7XHJcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZDtcclxufVxyXG5cclxuaW9uLWlucHV0XHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLml0ZW0taW5uZXJcclxue1xyXG4gICAgYm9yZGVyOjVweDtcclxufVxyXG5cclxuLm10MjUtMTBcclxue1xyXG4gICAgbWFyZ2luOiAxMCUgMTAlIDUlIDklO1xyXG59XHJcblxyXG4ubXQtMTAgXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4ub3RwLXRleHRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "ikiF": function ikiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
        return OtpPageModule;
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


      var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-routing.module */
      "L5nD");
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp.page */
      "so1i");

      var OtpPageModule = function OtpPageModule() {
        _classCallCheck(this, OtpPageModule);
      };

      OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
      })], OtpPageModule);
      /***/
    },

    /***/
    "so1i": function so1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
        return OtpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp.page.html */
      "HLTW");
      /* harmony import */


      var _otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp.page.scss */
      "NLUG");
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


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var OtpPage = /*#__PURE__*/function () {
        function OtpPage(router, route, http) {
          _classCallCheck(this, OtpPage);

          this.router = router;
          this.route = route;
          this.http = http;
        }

        _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (params && params.user) {
                console.log(params);
                _this.udata = JSON.parse(params.user);
                _this.mobile = _this.udata[0].mobile;
              }
            });
          }
        }, {
          key: "gotoNextField",
          value: function gotoNextField(nextElement) {
            nextElement.setFocus();
          }
        }, {
          key: "check",
          value: function check() {
            if (this.otp1 && this.otp2 && this.otp3 && this.otp4) {
              this.checkotp();
            }
          }
        }, {
          key: "checkotp",
          value: function checkotp() {
            var _this2 = this;

            var otp = this.otp1 + "" + this.otp2 + "" + this.otp3 + "" + this.otp4;
            var mobile = this.mobile;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "checkotp.php?mobile=" + mobile + "&otp=" + otp).subscribe(function (otp) {
              _this2.otpstatus = otp;

              if (_this2.otpstatus == 0) {
                alert("Invalid OTP");
              } else {
                var navigationExtras = {
                  queryParams: {
                    user: JSON.stringify(_this2.udata)
                  }
                };

                _this2.router.navigate(['mpin'], navigationExtras);
              }
            });
          }
        }]);

        return OtpPage;
      }();

      OtpPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OtpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=otp-otp-module-es5.js.map