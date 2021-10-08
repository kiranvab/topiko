(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["featured-featured-module"], {
    /***/
    "2oIE": function oIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedPage", function () {
        return FeaturedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_featured_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./featured.page.html */
      "3LpD");
      /* harmony import */


      var _featured_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./featured.page.scss */
      "XLwr");
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

      var FeaturedPage = /*#__PURE__*/function () {
        function FeaturedPage(http) {
          _classCallCheck(this, FeaturedPage);

          this.http = http;
        }

        _createClass(FeaturedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Get Featured
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].ApiUrl + "featured.php").subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.featured = data;
                        console.log("Featured", this.featured);

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }]);

        return FeaturedPage;
      }();

      FeaturedPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      FeaturedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-featured',
        template: _raw_loader_featured_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_featured_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeaturedPage);
      /***/
    },

    /***/
    "3LpD": function LpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" icon=\"chevron-back\"></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Featured</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon class=\"search\" name=search-outline></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"featured-img\">\n    <ion-col  *ngFor=\"let fet of featured let i=index\" size=\"4\">\n      <img  src=\"{{fet.logo}}\"  class=\"icon-img\">\n      <img *ngIf=\"fet.logo == ''\" class=\"icon-img\" src=\"assets/logo.png\" style=\"padding: 10px; background: #871178; border-radius: 25%;\">\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col>\n      <ion-icon name=\"home\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "D6Wc": function D6Wc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedPageRoutingModule", function () {
        return FeaturedPageRoutingModule;
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


      var _featured_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./featured.page */
      "2oIE");

      var routes = [{
        path: '',
        component: _featured_page__WEBPACK_IMPORTED_MODULE_3__["FeaturedPage"]
      }];

      var FeaturedPageRoutingModule = function FeaturedPageRoutingModule() {
        _classCallCheck(this, FeaturedPageRoutingModule);
      };

      FeaturedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeaturedPageRoutingModule);
      /***/
    },

    /***/
    "HHnp": function HHnp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturedPageModule", function () {
        return FeaturedPageModule;
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


      var _featured_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./featured-routing.module */
      "D6Wc");
      /* harmony import */


      var _featured_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./featured.page */
      "2oIE");

      var FeaturedPageModule = function FeaturedPageModule() {
        _classCallCheck(this, FeaturedPageModule);
      };

      FeaturedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _featured_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeaturedPageRoutingModule"]],
        declarations: [_featured_page__WEBPACK_IMPORTED_MODULE_6__["FeaturedPage"]]
      })], FeaturedPageModule);
      /***/
    },

    /***/
    "XLwr": function XLwr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  font-size: 1.5em;\n  padding: 5px;\n}\n\nion-content {\n  --padding-start:10px;\n  --padding-end:10px;\n  --padding-bottom:10px;\n  --padding-top:10px;\n  --background:#fff ;\n}\n\n.featured-img ion-col img {\n  border-radius: 50%;\n  padding: 0;\n}\n\n.icon-img {\n  border-radius: 3px;\n  width: 104px !important;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZlYXR1cmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBRUksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUtBO0VBRU0sa0JBQUE7RUFDQSxVQUFBO0FBSE47O0FBTUU7RUFFRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFKSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKIiwiZmlsZSI6ImZlYXR1cmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnRcclxue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOjEwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6I2ZmZlxyXG5cclxufVxyXG5cclxuLmZlYXR1cmVkLWltZyBpb24tY29sIGltZ1xyXG4gIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmljb24taW1nXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uaW1nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=featured-featured-module-es5.js.map