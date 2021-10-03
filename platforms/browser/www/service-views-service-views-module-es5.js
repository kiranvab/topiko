(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-views-service-views-module"], {
    /***/
    "8AfA": function AfA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Service Views</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <div class=\"select\">\n        <ion-select placeholder=\"Select One\" value=\"share\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"share\" selected>Share</ion-select-option>\n          <ion-select-option value=\"like\">Likes</ion-select-option>\n          <ion-select-option value=\"favourites\">Favourites</ion-select-option>\n          <ion-select-option value=\"comments\">Comments</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"2.2\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem Ipsum is Simple</p>\n      </ion-col>\n      <ion-col size=\"2.2\" class=\"chat-time\">\n        12:04 pm\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "T/UR": function TUR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceViewsPageModule", function () {
        return ServiceViewsPageModule;
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


      var _service_views_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./service-views-routing.module */
      "m1ro");
      /* harmony import */


      var _service_views_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./service-views.page */
      "ncSg");

      var ServiceViewsPageModule = function ServiceViewsPageModule() {
        _classCallCheck(this, ServiceViewsPageModule);
      };

      ServiceViewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _service_views_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceViewsPageRoutingModule"]],
        declarations: [_service_views_page__WEBPACK_IMPORTED_MODULE_6__["ServiceViewsPage"]]
      })], ServiceViewsPageModule);
      /***/
    },

    /***/
    "m1ro": function m1ro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceViewsPageRoutingModule", function () {
        return ServiceViewsPageRoutingModule;
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


      var _service_views_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service-views.page */
      "ncSg");

      var routes = [{
        path: '',
        component: _service_views_page__WEBPACK_IMPORTED_MODULE_3__["ServiceViewsPage"]
      }];

      var ServiceViewsPageRoutingModule = function ServiceViewsPageRoutingModule() {
        _classCallCheck(this, ServiceViewsPageRoutingModule);
      };

      ServiceViewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServiceViewsPageRoutingModule);
      /***/
    },

    /***/
    "nVhk": function nVhk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-name {\n  color: #22272A;\n  font-size: 16px;\n  line-height: 0;\n}\n\n.time {\n  color: #9F9F9F;\n  font-size: 12px;\n}\n\n.chat-time {\n  color: #871178;\n  font-size: 12px;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZpY2Utdmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUVJLFlBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFFSSxjQUFBO0FBRko7O0FBSUE7RUFFSSxjQUFBO0FBRko7O0FBS0E7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFISiIsImZpbGUiOiJzZXJ2aWNlLXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW5hbWVcclxue1xyXG4gICAgY29sb3I6IzIyMjcyQTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi50aW1lXHJcbntcclxuICAgIGNvbG9yOiM5RjlGOUY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNoYXQtdGltZVxyXG57XHJcbiAgICBjb2xvcjojODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc2VsZWN0XHJcbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcblxyXG4uc2VsZWN0LXRleHRcclxue1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxubGFiZWxcclxue1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5zZWxlY3QtaWNvblxyXG57XHJcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM4NzExODcgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ncSg": function ncSg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceViewsPage", function () {
        return ServiceViewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_service_views_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./service-views.page.html */
      "8AfA");
      /* harmony import */


      var _service_views_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service-views.page.scss */
      "nVhk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ServiceViewsPage = /*#__PURE__*/function () {
        function ServiceViewsPage() {
          _classCallCheck(this, ServiceViewsPage);
        }

        _createClass(ServiceViewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServiceViewsPage;
      }();

      ServiceViewsPage.ctorParameters = function () {
        return [];
      };

      ServiceViewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-views',
        template: _raw_loader_service_views_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_views_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ServiceViewsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=service-views-service-views-module-es5.js.map