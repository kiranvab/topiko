(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recent-recent-module"], {
    /***/
    "N6b7": function N6b7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecentPageModule", function () {
        return RecentPageModule;
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


      var _recent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recent-routing.module */
      "h6Bs");
      /* harmony import */


      var _recent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recent.page */
      "bFjj");

      var RecentPageModule = function RecentPageModule() {
        _classCallCheck(this, RecentPageModule);
      };

      RecentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recent_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecentPageRoutingModule"]],
        declarations: [_recent_page__WEBPACK_IMPORTED_MODULE_6__["RecentPage"]]
      })], RecentPageModule);
      /***/
    },

    /***/
    "Wc9A": function Wc9A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Recently Viewed</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon class=\"search\" name=search-outline></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n  <ion-col size=\"3\" *ngFor=\"let rec of recent;  let i=index\" (click)=\"details(i)\">\n    <img *ngIf=\"rec.logo\" src=\"{{rec.logo}}\" class=\"icon-img\">\n    <img *ngIf=\"rec.logo == ''\" class=\"icon-img\" src=\"assets/logo.png\" style=\"padding: 10px; background: #871178; border-radius: 25%;\">\n    <div class=\"img-title center text-center p-0\" text-center>{{rec.business_name}}</div>\n  </ion-col>\n</ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "bFjj": function bFjj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecentPage", function () {
        return RecentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recent_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recent.page.html */
      "Wc9A");
      /* harmony import */


      var _recent_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recent.page.scss */
      "pKhG");
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


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var RecentPage = /*#__PURE__*/function () {
        function RecentPage(http, storage, router) {
          _classCallCheck(this, RecentPage);

          this.http = http;
          this.storage = storage;
          this.router = router;
        }

        _createClass(RecentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("userdetails").then(function (val) {
              _this.udata = val;
              _this.user_id = _this.udata[0].id; //Get Recent Viewed

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "recentviews.php?user_id=" + _this.user_id).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.recent = data;
                          console.log(this.recent);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
          }
        }, {
          key: "details",
          value: function details(i) {
            //console.log(this.recent[i].id);
            this.storage.set("bid", this.recent[i].id);
            this.router.navigate(['details']);
          }
        }]);

        return RecentPage;
      }();

      RecentPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RecentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-recent',
        template: _raw_loader_recent_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recent_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecentPage);
      /***/
    },

    /***/
    "h6Bs": function h6Bs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecentPageRoutingModule", function () {
        return RecentPageRoutingModule;
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


      var _recent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recent.page */
      "bFjj");

      var routes = [{
        path: '',
        component: _recent_page__WEBPACK_IMPORTED_MODULE_3__["RecentPage"]
      }];

      var RecentPageRoutingModule = function RecentPageRoutingModule() {
        _classCallCheck(this, RecentPageRoutingModule);
      };

      RecentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecentPageRoutingModule);
      /***/
    },

    /***/
    "pKhG": function pKhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 10px;\n  --padding-top: 10px;\n  --background:#fff;\n}\n\nion-header ion-icon {\n  font-size: 1.5em;\n  padding: 5px;\n}\n\n.icon-img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  border: 1px solid #871178;\n  padding: 5px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  height: 75px;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY2VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxnQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUVJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJyZWNlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0IDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQgOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbSA6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wIDogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDojZmZmO1xyXG59XHJcbmlvbi1oZWFkZXIgaW9uLWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmljb24taW1nXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NzExNzg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uaW1nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=recent-recent-module-es5.js.map