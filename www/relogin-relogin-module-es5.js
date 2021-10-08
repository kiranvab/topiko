(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relogin-relogin-module"], {
    /***/
    "3gpu": function gpu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  --ion-background-color:linear-gradient(#871178, #3C1378) !important;\n}\n\n.logo {\n  text-align: center;\n  padding-top: 35%;\n  padding-bottom: 10px;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\n.ion-item-cust {\n  --ion-background-color:transparent;\n  margin: 0 15% 0 15%;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-item {\n  --ion-background-color:transparent;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  --padding-start:10;\n  border-bottom: 1px solid #fff;\n}\n\n.select-margin {\n  margin: 0 0 0 45%;\n  font-size: 16px;\n}\n\n.col-margin {\n  margin: 0 14% 0 0;\n}\n\n.mt-4 {\n  margin-top: 4%;\n}\n\n.mt-20 {\n  margin-top: 20%;\n}\n\n#name::-moz-placeholder {\n  font-size: 10px;\n  text-align: left;\n}\n\n#name:-ms-input-placeholder {\n  font-size: 10px;\n  text-align: left;\n}\n\n#name::placeholder {\n  font-size: 10px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUVBQUE7QUFBSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBRUksa0NBQUE7QUFESjs7QUFHQTtFQUVJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFFSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBREo7O0FBSUE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUVJLGlCQUFBO0FBSEo7O0FBTUE7RUFFSSxjQUFBO0FBSko7O0FBTUE7RUFFSSxlQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUpKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSkoiLCJmaWxlIjoicmVsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxyXG57XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM0MxMzc4KSAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZlXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlvbi1pdGVtLWN1c3Rcclxue1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjowIDE1JSAwIDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDoxMDsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLnNlbGVjdC1tYXJnaW5cclxue1xyXG4gICAgbWFyZ2luOjAgMCAwIDQ1JTtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4uY29sLW1hcmdpblxyXG57XHJcbiAgICBtYXJnaW46MCAxNCUgMCAwXHJcbn1cclxuXHJcbi5tdC00XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5tdC0yMFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcbiNuYW1lOjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "T3sn": function T3sn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReloginPage", function () {
        return ReloginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relogin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relogin.page.html */
      "vozN");
      /* harmony import */


      var _relogin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relogin.page.scss */
      "3gpu");
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


      var _services_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/events.service */
      "riPR");

      var ReloginPage = /*#__PURE__*/function () {
        function ReloginPage(http, storage, router, events, menuCtrl) {
          _classCallCheck(this, ReloginPage);

          this.http = http;
          this.storage = storage;
          this.router = router;
          this.events = events;
          this.menuCtrl = menuCtrl;
          this.menuCtrl.enable(false);
        }

        _createClass(ReloginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.storage.remove('userdetails');
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            console.log(this.mobile);
            console.log(this.mpin);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "login.php?mobile=" + this.mobile + "&password=" + this.mpin).subscribe(function (data) {
              console.log(data);

              if (data == 0) {
                alert("Invalid Logins");
              } else {
                _this.udata = data;

                _this.events.publishSomeData({
                  userdetails: _this.udata
                });

                _this.storage.set("userdetails", _this.udata);

                _this.router.navigate(['home']);
              }
            });
          }
        }]);

        return ReloginPage;
      }();

      ReloginPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }];
      };

      ReloginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-relogin',
        template: _raw_loader_relogin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relogin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReloginPage);
      /***/
    },

    /***/
    "ikKQ": function ikKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReloginPageRoutingModule", function () {
        return ReloginPageRoutingModule;
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


      var _relogin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relogin.page */
      "T3sn");

      var routes = [{
        path: '',
        component: _relogin_page__WEBPACK_IMPORTED_MODULE_3__["ReloginPage"]
      }];

      var ReloginPageRoutingModule = function ReloginPageRoutingModule() {
        _classCallCheck(this, ReloginPageRoutingModule);
      };

      ReloginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReloginPageRoutingModule);
      /***/
    },

    /***/
    "k8cx": function k8cx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReloginPageModule", function () {
        return ReloginPageModule;
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


      var _relogin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./relogin-routing.module */
      "ikKQ");
      /* harmony import */


      var _relogin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relogin.page */
      "T3sn");

      var ReloginPageModule = function ReloginPageModule() {
        _classCallCheck(this, ReloginPageModule);
      };

      ReloginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _relogin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReloginPageRoutingModule"]],
        declarations: [_relogin_page__WEBPACK_IMPORTED_MODULE_6__["ReloginPage"]]
      })], ReloginPageModule);
      /***/
    },

    /***/
    "vozN": function vozN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"background\">\n  <div class=\"logo\">\n    <img src=\"assets/logo.png\" width=\"30%\">\n  </div>\n\n  <ion-row class=\"mt-4\">\n    <ion-col size=\"4\">\n      <ion-item class=\"select-margin\">\n        <ion-select ok-text=\"OK\" cancel-text=\"NO\" value=\"ind\">\n          <ion-select-option value=\"ind\">+91</ion-select-option>\n          <ion-select-option value=\"lunix\">+1</ion-select-option>\n          <ion-select-option value=\"mac7\">+65</ion-select-option>\n          <ion-select-option value=\"mac8\">+60</ion-select-option>\n          <ion-select-option value=\"win3.1\">+92</ion-select-option>\n          <ion-select-option value=\"win95\">+80</ion-select-option>\n          </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col class=\"col-margin\">\n      <ion-item>\n        <ion-input type=\"number\" max=\"10\" [(ngModel)]=\"mobile\" id=\"phone\" placeholder=\"Mobile Number\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-item class=\"ion-item-cust\">\n    <!-- <ion-label position=\"floating\">Password</ion-label> -->\n    <ion-input type=\"Password\" max=\"4\" [(ngModel)]=\"mpin\"  placeholder=\"Password\"></ion-input>\n  </ion-item>\n  \n  <ion-row class=\"mt-20\">\n    <ion-col class=\"text-center\">\n      <img src=\"assets/enter.svg\" (click)=\"login()\">\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=relogin-relogin-module-es5.js.map