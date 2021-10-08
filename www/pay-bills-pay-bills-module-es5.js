(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pay-bills-pay-bills-module"], {
    /***/
    "28LX": function LX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pay Bills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"grid\">\n    <ion-row>\n      <ion-col>\n        <ion-card routerLink=\"/mobile-recharge\">\n          <ion-icon name=\"phone-portrait-outline\"></ion-icon>\n          <p>Mobile</p>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n          <p>Gas Bills</p>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-icon name=\"bulb-outline\"></ion-icon>\n          <p>Electricity</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-icon name=\"albums-outline\"></ion-icon>\n          <p>FastTag</p>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-icon name=\"recording-outline\"></ion-icon>\n          <p>DTH</p>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-icon name=\"call-outline\"></ion-icon>\n          <p>Landline</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-card>\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <p>Broadband</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "BPrH": function BPrH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayBillsPageRoutingModule", function () {
        return PayBillsPageRoutingModule;
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


      var _pay_bills_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pay-bills.page */
      "vQqR");

      var routes = [{
        path: '',
        component: _pay_bills_page__WEBPACK_IMPORTED_MODULE_3__["PayBillsPage"]
      }];

      var PayBillsPageRoutingModule = function PayBillsPageRoutingModule() {
        _classCallCheck(this, PayBillsPageRoutingModule);
      };

      PayBillsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PayBillsPageRoutingModule);
      /***/
    },

    /***/
    "GSSK": function GSSK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: center;\n}\n\n.grid {\n  margin: 0px 0.8125em;\n}\n\nion-card {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 1em 0.3125em;\n  margin-bottom: 0%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.75em;\n  padding-top: 1.25em;\n  text-align: center;\n}\n\nion-card ion-icon {\n  color: #871178;\n  height: 30px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheS1iaWxscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0FBQUo7O0FBRUE7RUFDSSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKIiwiZmlsZSI6InBheS1iaWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWFkXHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgbWFyZ2luOiAwcHggMC44MTI1ZW07XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAuMTg3NWVtIDAuMzc1ZW0gIzAwMDAwMDI5O1xyXG4gICAgbWFyZ2luOiAxZW0gMC4zMTI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC43NWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEuMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "X9m8": function X9m8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayBillsPageModule", function () {
        return PayBillsPageModule;
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


      var _pay_bills_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pay-bills-routing.module */
      "BPrH");
      /* harmony import */


      var _pay_bills_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pay-bills.page */
      "vQqR");

      var PayBillsPageModule = function PayBillsPageModule() {
        _classCallCheck(this, PayBillsPageModule);
      };

      PayBillsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pay_bills_routing_module__WEBPACK_IMPORTED_MODULE_5__["PayBillsPageRoutingModule"]],
        declarations: [_pay_bills_page__WEBPACK_IMPORTED_MODULE_6__["PayBillsPage"]]
      })], PayBillsPageModule);
      /***/
    },

    /***/
    "vQqR": function vQqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayBillsPage", function () {
        return PayBillsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pay_bills_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pay-bills.page.html */
      "28LX");
      /* harmony import */


      var _pay_bills_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pay-bills.page.scss */
      "GSSK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PayBillsPage = /*#__PURE__*/function () {
        function PayBillsPage() {
          _classCallCheck(this, PayBillsPage);
        }

        _createClass(PayBillsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PayBillsPage;
      }();

      PayBillsPage.ctorParameters = function () {
        return [];
      };

      PayBillsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pay-bills',
        template: _raw_loader_pay_bills_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pay_bills_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PayBillsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pay-bills-pay-bills-module-es5.js.map