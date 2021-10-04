(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shophere-shophere-module"], {
    /***/
    "3OqT": function OqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col class=\"title\">\n        <ion-title>Shop Here</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-segment>\n    <ion-segment-button value=\"private\">\n      <ion-label>Private URL</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"shop\">\n      <ion-label>Shop</ion-label>\n    </ion-segment-button>\n  </ion-segment> -->\n\n  <ion-card *ngFor=\"let shopurl of shopurls\">\n    <ion-row class=\"text-color\">\n      <p>{{shopurl.shopurl}}</p>\n    </ion-row>\n    <ion-row class=\"lorem\">\n      <p>{{shopurl.shopdesc}}\n      </p>\n    </ion-row>\n  </ion-card>\n\n \n</ion-content>";
      /***/
    },

    /***/
    "6YLs": function YLs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopherePageModule", function () {
        return ShopherePageModule;
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


      var _shophere_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shophere-routing.module */
      "pERq");
      /* harmony import */


      var _shophere_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shophere.page */
      "b6mq");

      var ShopherePageModule = function ShopherePageModule() {
        _classCallCheck(this, ShopherePageModule);
      };

      ShopherePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shophere_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopherePageRoutingModule"]],
        declarations: [_shophere_page__WEBPACK_IMPORTED_MODULE_6__["ShopherePage"]]
      })], ShopherePageModule);
      /***/
    },

    /***/
    "FbI1": function FbI1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".space {\n  text-align: left;\n}\n\n.title {\n  text-align: center;\n}\n\nion-header ion-title {\n  color: #ffffff;\n  font-size: 18px;\n}\n\n.ellipsis ion-icon {\n  font-size: 22px;\n  color: #ffffff;\n}\n\nion-segment {\n  --background: #f5f5f5;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n  font-size: 1em;\n  color: #22272a;\n}\n\n.segment-button-checked {\n  background: none;\n}\n\nion-card {\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.text-color {\n  color: purple;\n  text-decoration: underline;\n  padding: 0px;\n}\n\n.text-color p {\n  color: #871178;\n  font-size: 16px;\n  margin: 0%;\n}\n\n.lorem p {\n  font-size: 14px;\n  color: #22272a;\n  margin-bottom: 6px;\n}\n\nion-card {\n  margin: 10px 18px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNob3BoZXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxxQkFBQTtBQUtKOztBQUhBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7QUFPSjs7QUFKQTtFQUNJLGlDQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQVdKIiwiZmlsZSI6InNob3BoZXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmVsbGlwc2lzIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5pb24tc2VnbWVudCBpb24tbGFiZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG59XHJcbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG4udGV4dC1jb2xvciB7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnRleHQtY29sb3IgcCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLmxvcmVtIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "b6mq": function b6mq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopherePage", function () {
        return ShopherePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_shophere_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./shophere.page.html */
      "3OqT");
      /* harmony import */


      var _shophere_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shophere.page.scss */
      "FbI1");
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

      var ShopherePage = /*#__PURE__*/function () {
        function ShopherePage(storage, http) {
          _classCallCheck(this, ShopherePage);

          this.storage = storage;
          this.http = http;
        }

        _createClass(ShopherePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bid").then(function (val) {
              _this.bid = val;

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getbusinessdetails.php?bid=" + _this.bid).subscribe(function (response) {
                _this.shopurls = response;
                console.log("Shop urls", _this.shopurls);
              });
            });
          }
        }]);

        return ShopherePage;
      }();

      ShopherePage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ShopherePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-shophere',
        template: _raw_loader_shophere_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shophere_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShopherePage);
      /***/
    },

    /***/
    "pERq": function pERq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopherePageRoutingModule", function () {
        return ShopherePageRoutingModule;
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


      var _shophere_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shophere.page */
      "b6mq");

      var routes = [{
        path: '',
        component: _shophere_page__WEBPACK_IMPORTED_MODULE_3__["ShopherePage"]
      }];

      var ShopherePageRoutingModule = function ShopherePageRoutingModule() {
        _classCallCheck(this, ShopherePageRoutingModule);
      };

      ShopherePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShopherePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shophere-shophere-module-es5.js.map