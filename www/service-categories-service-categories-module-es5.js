(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-categories-service-categories-module"], {
    /***/
    "Yugm": function Yugm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceCategoriesPage", function () {
        return ServiceCategoriesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_service_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./service-categories.page.html */
      "cKvF");
      /* harmony import */


      var _service_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service-categories.page.scss */
      "gl5q");
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
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");

      var ServiceCategoriesPage = /*#__PURE__*/function () {
        function ServiceCategoriesPage(http, storage, router) {
          _classCallCheck(this, ServiceCategoriesPage);

          this.http = http;
          this.storage = storage;
          this.router = router;
        }

        _createClass(ServiceCategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getservices.php").subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.services = data;
                        console.log(this.services);

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "details",
          value: function details(i) {
            console.log(this.services[i].type);
            this.storage.set("type", this.services[i].type);
            this.storage.set("sid", this.services[i].id);
            this.router.navigate(['gcategory']);
          }
        }]);

        return ServiceCategoriesPage;
      }();

      ServiceCategoriesPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ServiceCategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-service-categories',
        template: _raw_loader_service_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ServiceCategoriesPage);
      /***/
    },

    /***/
    "cKvF": function cKvF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Service Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-bottom: 100px;\">\n    <ion-col size=\"4\" *ngFor=\"let ser of services; let i = index;\" (click)=\"details(i)\">\n      <div class=\"service-icons\">\n        <img src=\"https://topiko.com/app/icons/{{ser.image}}\">\n        <div>{{ser.service}}</div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-footer mode=\"md\" class=\"home-footer\">\n    <ion-row>\n      <ion-col routerLink=\"/home\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        <p>Home</p>\n      </ion-col>\n      <ion-col routerLink=\"/profile\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        <p>Profile</p>\n      </ion-col>\n      <ion-col routerLink=\"/qr-scanner\">\n        <ion-icon name=\"scan-outline\"></ion-icon>\n        <p>Scan</p>\n      </ion-col>\n      <ion-col routerLink=\"/favourites\">\n        <ion-icon name=\"heart-outline\"></ion-icon>\n        <p>Favourites</p>\n      </ion-col>\n      <ion-col routerLink=\"/calls\">\n        <ion-icon name=\"call-outline\"></ion-icon>\n        <p>Call</p>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n\n</ion-content>";
      /***/
    },

    /***/
    "gl5q": function gl5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\n.service-icons {\n  text-align: center;\n  background: #f5f5f5;\n  padding: 16px 0.5em 0.2em 0.5em;\n  border-radius: 10px;\n  box-shadow: 0px 5px 4px #ccc;\n  font-size: 0.8em;\n  color: #7f1071;\n  height: 115px;\n}\n\n.service-icons img {\n  width: 60%;\n}\n\nion-col {\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZpY2UtY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSiIsImZpbGUiOiJzZXJ2aWNlLWNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zZXJ2aWNlLWljb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDAuNWVtIDAuMmVtIDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNHB4ICNjY2M7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICM3ZjEwNzE7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG59XHJcbi5zZXJ2aWNlLWljb25zIGltZyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbmlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "pKK3": function pKK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceCategoriesPageModule", function () {
        return ServiceCategoriesPageModule;
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


      var _service_categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./service-categories-routing.module */
      "ppmF");
      /* harmony import */


      var _service_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./service-categories.page */
      "Yugm");

      var ServiceCategoriesPageModule = function ServiceCategoriesPageModule() {
        _classCallCheck(this, ServiceCategoriesPageModule);
      };

      ServiceCategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _service_categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceCategoriesPageRoutingModule"]],
        declarations: [_service_categories_page__WEBPACK_IMPORTED_MODULE_6__["ServiceCategoriesPage"]]
      })], ServiceCategoriesPageModule);
      /***/
    },

    /***/
    "ppmF": function ppmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceCategoriesPageRoutingModule", function () {
        return ServiceCategoriesPageRoutingModule;
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


      var _service_categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service-categories.page */
      "Yugm");

      var routes = [{
        path: '',
        component: _service_categories_page__WEBPACK_IMPORTED_MODULE_3__["ServiceCategoriesPage"]
      }];

      var ServiceCategoriesPageRoutingModule = function ServiceCategoriesPageRoutingModule() {
        _classCallCheck(this, ServiceCategoriesPageRoutingModule);
      };

      ServiceCategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServiceCategoriesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=service-categories-service-categories-module-es5.js.map