(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-views-business-views-module"], {
    /***/
    "7Js0": function Js0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\nion-content {\n  margin-bottom: 20px;\n  --ion-font-family: \"Poppins\", sans-serif;\n}\n.user-name {\n  color: #871178;\n  font-size: 18px;\n  line-height: 1;\n  padding: 5px;\n  margin: 0;\n}\n.time {\n  color: #9F9F9F;\n  font-size: 12px;\n}\n.chat-time {\n  color: #871178;\n  font-size: 12px;\n}\n.select {\n  float: right;\n  color: #871178;\n}\n.select-text {\n  color: #871178;\n}\nlabel {\n  color: #871178;\n}\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\nion-card {\n  margin: 5px;\n}\n.select-div {\n  background: #fff;\n  color: #871178;\n  font-weight: bold;\n}\n.toast-content {\n  text-transform: uppercase !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1c2luZXNzLXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUVBLDRFQUFBO0FBRVI7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0FBREY7QUFHQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBREo7QUFHQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FBREo7QUFHQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FBREo7QUFJQTtFQUVJLFlBQUE7RUFDQSxjQUFBO0FBRko7QUFLQTtFQUVJLGNBQUE7QUFISjtBQUtBO0VBRUksY0FBQTtBQUhKO0FBTUE7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9BO0VBRUksV0FBQTtBQUxKO0FBT0E7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUE7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0FBTkoiLCJmaWxlIjoiYnVzaW5lc3Mtdmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAtLWlvbi1mb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnVzZXItbmFtZVxyXG57XHJcbiAgICBjb2xvcjojODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnRpbWVcclxue1xyXG4gICAgY29sb3I6IzlGOUY5RjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2hhdC10aW1lXHJcbntcclxuICAgIGNvbG9yOiM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zZWxlY3Rcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5zZWxlY3QtdGV4dFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5sYWJlbFxyXG57XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uXHJcbntcclxuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHggICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE4NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZFxyXG57XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uc2VsZWN0LWRpdlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7IFxyXG4gICAgY29sb3I6ICM4NzExNzg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b2FzdC1jb250ZW50XHJcbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "PdI7": function PdI7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessViewsPage", function () {
        return BusinessViewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_business_views_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./business-views.page.html */
      "o1Gm");
      /* harmony import */


      var _business_views_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./business-views.page.scss */
      "7Js0");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var BusinessViewsPage = /*#__PURE__*/function () {
        function BusinessViewsPage(storage, http, toastController) {
          _classCallCheck(this, BusinessViewsPage);

          this.storage = storage;
          this.http = http;
          this.toastController = toastController;
          this.resdata = true;
          this.vtype = "views";
        }

        _createClass(BusinessViewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bid").then(function (val) {
              _this.bid = val;
              console.log("Business Id", _this.bid);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getbviewusers.php?bid=" + _this.bid + "&table=business_" + _this.vtype).subscribe(function (viewData) {
                _this.views = viewData;
              });
            });
          }
        }, {
          key: "checkValue",
          value: function checkValue(event) {
            var _this2 = this;

            console.log("value", this.vtype);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getbviewusers.php?bid=" + this.bid + "&table=business_" + this.vtype).subscribe(function (viewData) {
              _this2.count = viewData;

              if (_this2.count.length > 0) {
                _this2.resdata = true;
                _this2.views = viewData;
              } else {
                _this2.views = "0";
                _this2.resdata = false;

                _this2.presentToast();
              }

              console.log("View Count", _this2.views);
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'No ' + this.vtype,
                        duration: 2000,
                        color: 'secondary',
                        position: "middle"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return BusinessViewsPage;
      }();

      BusinessViewsPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }];
      };

      BusinessViewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-business-views',
        template: _raw_loader_business_views_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_business_views_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BusinessViewsPage);
      /***/
    },

    /***/
    "WC4N": function WC4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessViewsPageModule", function () {
        return BusinessViewsPageModule;
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


      var _business_views_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./business-views-routing.module */
      "XbV4");
      /* harmony import */


      var _business_views_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./business-views.page */
      "PdI7");

      var BusinessViewsPageModule = function BusinessViewsPageModule() {
        _classCallCheck(this, BusinessViewsPageModule);
      };

      BusinessViewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _business_views_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessViewsPageRoutingModule"]],
        declarations: [_business_views_page__WEBPACK_IMPORTED_MODULE_6__["BusinessViewsPage"]]
      })], BusinessViewsPageModule);
      /***/
    },

    /***/
    "XbV4": function XbV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessViewsPageRoutingModule", function () {
        return BusinessViewsPageRoutingModule;
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


      var _business_views_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./business-views.page */
      "PdI7");

      var routes = [{
        path: '',
        component: _business_views_page__WEBPACK_IMPORTED_MODULE_3__["BusinessViewsPage"]
      }];

      var BusinessViewsPageRoutingModule = function BusinessViewsPageRoutingModule() {
        _classCallCheck(this, BusinessViewsPageRoutingModule);
      };

      BusinessViewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BusinessViewsPageRoutingModule);
      /***/
    },

    /***/
    "o1Gm": function o1Gm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Business Views</ion-title>\n  </ion-toolbar>\n  <ion-row class=\"select-div\">\n    <ion-col size=\"4\" style=\"line-height: 2.5;\">Select Type</ion-col>\n    <ion-col>\n      <div class=\"select\">\n        <ion-select placeholder=\"Select One\" value=\"viewed\" interface=\"popover\" [(ngModel)]=\"vtype\" (ionChange)=\"checkValue($event)\">\n          <ion-select-option value=\"views\">Viewed</ion-select-option>\n          <ion-select-option value=\"likes\">Likes</ion-select-option>\n          <ion-select-option value=\"reviews\">Reviews</ion-select-option>\n          <ion-select-option value=\"favourites\">Favourites</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"resdata\">\n  <ion-card *ngFor=\"let v of views\" >\n    <ion-row>\n      <ion-col size=\"2.2\">\n        <ion-avatar>\n          <img *ngIf=\"v.image != ''\" src=\"{{v.image}}\" alt=\"\">\n          <img *ngIf=\"v.image == ''\" class=\"icon-img\" src=\"assets/logo-color.png\" style=\"padding: 10px; background: #fafafa; border-radius: 25%;\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <p class=\"user-name\">{{v.name}}<br />\n        <span *ngIf=\"v.city != ''\" class=\"time\">{{v.city}}</span></p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"chat-time\">\n        {{v.created_date}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"v.review != ''\">\n      <ion-col>\n        <span class=\"time\">{{v.review}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=business-views-business-views-module-es5.js.map