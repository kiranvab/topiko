(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-qr-reach-my-qr-reach-module"], {
    /***/
    "MxXT": function MxXT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=ios></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My QR Reach</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-row class=\"select-row\">\n    <div class=\"select\">\n      <ion-select placeholder=\"Vehicle\" value=\"vehicle\" interface=\"popover\" mode=\"ios\">\n        <ion-select-option value=\"vehicle\">Vehicle</ion-select-option>\n        <ion-select-option value=\"phonepe\">Car</ion-select-option>\n        <ion-select-option value=\"favourites\">Bicycle</ion-select-option>\n      </ion-select>\n    </div>\n  </ion-row> -->\n\n  <h4>Sticker</h4>\n\n  <ion-card class=\"fourth\">\n    <ion-row class=\"gpay\">\n      <ion-row class=\"second\">\n        <ion-col>\n          <p class=\"reach\">Refer ID</p>\n        </ion-col>\n        <ion-col class=\"aligncol\">\n          <p class=\"id\">{{this.myAngularxQrCode}}</p>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-input type=\"text\" placeholder=\"My QR data\" [(ngModel)]=\"myAngularxQrCode\"></ion-input>-->\n      <ion-card >\n        <qrcode [qrdata]=\"myAngularxQrCode\" style=\"height: 230px !important;width: 230px !important;\"></qrcode>\n        <ion-card-content>\n        <p>Value: {{myAngularxQrCode}}</p>\n        </ion-card-content>\n      </ion-card>\n      <p class=\"phone\">{{reg_number}}</p>\n      <span class=\"note\">Note: <span>Scan to reach belongers in case of emergency. don't misuse</span></span>\n    </ion-row>\n  </ion-card>\n\n  <h4>Tag</h4>\n\n  <ion-card class=\"fifth\">\n    <ion-card>\n      <ion-row class=\"rowa\">\n        <ion-row class=\"rowb\">\n          <ion-col class=\"bground\">\n            <ion-row class=\"thick-border\">\n            </ion-row>\n            <ion-avatar>\n              <img src=\"http://www.eurocarnews.com/media/pictorials/1445/6905.jpg\" alt=\"\">\n            </ion-avatar>\n            <ion-row class=\"nam text-overflow\">\n              <p>{{username}}</p>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row class=\"refer text-overflow\">\n              <ion-col size=\"5.2\">\n                <p class=\"reach\">Refer ID</p>\n              </ion-col>\n              <ion-col>\n                <span class=\"aligncol text-overflow\">\n                  <p class=\"id\">{{myAngularxQrCode}}</p>\n                </span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"vehic text-overflow\">\n              <ion-col size=\"5.2\">\n                <p>Vechile</p>\n              </ion-col>\n              <ion-col class=\"text-overflow\">\n                <p class=\"vehicno\">{{reg_number}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"noteclas\">\n              <span class=\"noteclass\">Note: <span>Scan to reach belongers in case of emergency. don't\n                  misuse</span></span>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\" class=\"qrclas\">\n            <img class=\"qrr\"\n              src=\"https://www.freepnglogos.com/uploads/qr-code-png/qr-code-code-sticker-transparent-png-svg-vector-19.png\"\n              alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-row>\n    </ion-card>\n  </ion-card>\n\n  <ion-grid class=\"choose\">\n    <ion-row class=\"rupees\">\n      <p>Rs 1500<span>+18% GST</span></p>\n    </ion-row>\n    <ion-row class=\"stickers\">\n      <p>Two stickers with key tag</p>\n    </ion-row>\n    <ion-row class=\"center\">\n      <p routerLink=\"/choose\">Choose</p>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"last-grid\">\n    <ion-row class=\"button\">\n      <ion-col class=\"lef\">\n        <ion-button routerLink=\"/qrreach\">Later</ion-button>\n      </ion-col>\n      <ion-col class=\"righ\">\n        <ion-button>Buy</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "erSw": function erSw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyQrReachPageModule", function () {
        return MyQrReachPageModule;
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


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularx-qrcode */
      "0hV+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _my_qr_reach_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-qr-reach-routing.module */
      "lGDL");
      /* harmony import */


      var _my_qr_reach_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./my-qr-reach.page */
      "pdPH");

      var MyQrReachPageModule = function MyQrReachPageModule() {
        _classCallCheck(this, MyQrReachPageModule);
      };

      MyQrReachPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeModule"], _my_qr_reach_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyQrReachPageRoutingModule"]],
        declarations: [_my_qr_reach_page__WEBPACK_IMPORTED_MODULE_7__["MyQrReachPage"]]
      })], MyQrReachPageModule);
      /***/
    },

    /***/
    "lGDL": function lGDL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyQrReachPageRoutingModule", function () {
        return MyQrReachPageRoutingModule;
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


      var _my_qr_reach_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-qr-reach.page */
      "pdPH");

      var routes = [{
        path: '',
        component: _my_qr_reach_page__WEBPACK_IMPORTED_MODULE_3__["MyQrReachPage"]
      }];

      var MyQrReachPageRoutingModule = function MyQrReachPageRoutingModule() {
        _classCallCheck(this, MyQrReachPageRoutingModule);
      };

      MyQrReachPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyQrReachPageRoutingModule);
      /***/
    },

    /***/
    "pdPH": function pdPH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyQrReachPage", function () {
        return MyQrReachPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_qr_reach_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-qr-reach.page.html */
      "MxXT");
      /* harmony import */


      var _my_qr_reach_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-qr-reach.page.scss */
      "py5l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");

      var MyQrReachPage = /*#__PURE__*/function () {
        function MyQrReachPage(storage) {
          var _this = this;

          _classCallCheck(this, MyQrReachPage);

          this.storage = storage;
          this.storage.get("qr_data").then(function (val) {
            _this.qrdata = val;
            _this.qrdata = JSON.parse(_this.qrdata);
            console.log("QRdata", _this.qrdata);
            _this.myAngularxQrCode = _this.qrdata.qr_id;
            console.log(_this.myAngularxQrCode, 'Code');
            _this.reg_number = _this.qrdata.reg_number;
            _this.username = _this.qrdata.name;
          });
        }

        _createClass(MyQrReachPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyQrReachPage;
      }();

      MyQrReachPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      MyQrReachPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-qr-reach',
        template: _raw_loader_my_qr_reach_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_qr_reach_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyQrReachPage);
      /***/
    },

    /***/
    "py5l": function py5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.select-row {\n  margin-right: 18px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n\nh4 {\n  color: #22272a;\n  text-align: center;\n  margin: 1em 0px;\n  margin-top: 6px;\n}\n\n.fourth {\n  margin: 1.125em;\n  border: 2px solid #871178;\n  border-radius: 0%;\n}\n\n.second {\n  width: 186px;\n}\n\n.second .reach {\n  font-size: 16px;\n  margin: 0px;\n  margin-top: 6px;\n  color: #22272a;\n}\n\n.aligncol {\n  text-align: right;\n}\n\n.second .id {\n  font-size: 16px;\n  margin: 0px;\n  margin-top: 6px;\n  color: #871178;\n}\n\n.gpay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.78125em;\n}\n\n.gpay img {\n  width: 4em;\n  height: 1.53125em;\n}\n\n.gpay .qr {\n  height: 15.8125em;\n  width: 15.8125em;\n}\n\n.gpay .phone {\n  color: #871178;\n  font-size: 1.125em;\n  margin-bottom: 1.5625em;\n}\n\n.note {\n  color: #871178;\n  font-size: 0.875em;\n  margin-bottom: 1.5625em;\n  margin-left: 6px;\n}\n\nspan {\n  color: #707070;\n  font-size: 0.875em;\n}\n\n.fifth {\n  margin: 1.125em;\n  border: 2px solid #871178;\n  border-radius: 0%;\n  padding: 2.5em 1.5em;\n}\n\n.rowa {\n  height: 12em;\n  background-color: #f5f5f5;\n}\n\n.rowb {\n  width: 100%;\n}\n\n.bground {\n  width: 100%;\n  height: 4.25em;\n  background: linear-gradient(#871178, #3c1378);\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.bground ion-avatar {\n  width: 4.0625em;\n  height: 4.0625em;\n  margin-top: 60px;\n  margin-left: 20px;\n}\n\n.thick-border {\n  width: 9px;\n  height: 36px;\n  background: #00000029;\n  border-radius: 25px;\n  position: absolute;\n  top: 63px;\n}\n\n.nam p {\n  margin: 0px;\n  color: #22272a;\n  font-size: 18px;\n  position: absolute;\n  top: 60px;\n  left: 140px;\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n}\n\n.refer {\n  margin-top: 24px;\n  margin-left: 20px;\n}\n\n.refer ion-col {\n  padding: 0%;\n}\n\n.refer .reach {\n  margin: 0px;\n  color: #22272a;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.refer .id {\n  font-size: 16px;\n  margin: 0px;\n  color: #871178;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: left;\n}\n\n.vehic {\n  margin-left: 20px;\n}\n\n.vehic ion-col {\n  padding: 0px;\n}\n\n.vehic p {\n  font-size: 11px;\n  color: #22272a;\n  margin: 0px;\n}\n\n.vehic .vehicno {\n  font-size: 11px;\n  color: #707070;\n  text-align: left;\n  margin: 0%;\n}\n\n.noteclas {\n  margin-left: 20px;\n}\n\n.noteclass {\n  color: #871178;\n  font-size: 9px;\n  margin: 0%;\n}\n\n.noteclass span {\n  color: #707070;\n}\n\n.qrclas {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.qrr {\n  width: 60px;\n  height: 60px;\n}\n\n.choose {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0.3125em;\n}\n\n.rupees p {\n  font-size: 20px;\n  color: #871178;\n  margin-bottom: 0%;\n}\n\n.rupees p span {\n  color: #22272a;\n  font-size: 18px;\n}\n\n.stickers p {\n  color: #707070;\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.choose .center {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.last-grid {\n  margin: 0.3125em;\n}\n\n.last-grid .left {\n  text-align: left;\n  text-decoration: underline;\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.last-grid .right {\n  text-align: right;\n  text-decoration: underline;\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.button .lef {\n  text-align: left;\n}\n\n.button .righ {\n  text-align: right;\n}\n\n.button .lef ion-button {\n  --background: #ffffff;\n  --color: #871178;\n  border: 2px solid #871178;\n  text-transform: capitalize;\n  font-size: 18px;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n\n.button .righ ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 18px;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL215LXFyLXJlYWNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUEyRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQXhFSjs7QUEwRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQXZFSjs7QUF5RUE7RUFDSSxjQUFBO0FBdEVKOztBQXdFQTtFQUNJLGNBQUE7QUFyRUo7O0FBdUVBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBcEVKOztBQXVFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBcEVKOztBQXdFQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBckVKOztBQXVFQTtFQUNJLFlBQUE7QUFwRUo7O0FBc0VBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQW5FSjs7QUFxRUE7RUFDSSxpQkFBQTtBQWxFSjs7QUFvRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBakVKOztBQW9FQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWpFSjs7QUFtRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFoRUo7O0FBa0VBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQS9ESjs7QUFpRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQTlESjs7QUFnRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBN0RKOztBQStEQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQTVESjs7QUFnRUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBN0RKOztBQStEQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQTVESjs7QUE4REE7RUFDSSxXQUFBO0FBM0RKOztBQTZEQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQTFESjs7QUE0REE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBekRKOztBQTJEQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQXhESjs7QUEwREE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FBdkRKOztBQWdFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUE3REo7O0FBK0RBO0VBQ0ksV0FBQTtBQTVESjs7QUE4REE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUEzREo7O0FBOERBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBM0RKOztBQTZEQTtFQUNJLGlCQUFBO0FBMURKOztBQTREQTtFQUNJLFlBQUE7QUF6REo7O0FBMkRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBeERKOztBQTBEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBdkRKOztBQXlEQTtFQUNJLGlCQUFBO0FBdERKOztBQXdEQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQXJESjs7QUF1REE7RUFDSSxjQUFBO0FBcERKOztBQXNEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBbkRKOztBQXFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBbERKOztBQXFEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWxESjs7QUFvREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBakRKOztBQW1EQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBaERKOztBQWtEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7O0FBaURBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBOUNKOztBQWlEQTtFQUNJLGdCQUFBO0FBOUNKOztBQWdEQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE3Q0o7O0FBK0NBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTVDSjs7QUErQ0E7RUFDSSxnQkFBQTtBQTVDSjs7QUE4Q0E7RUFDSSxpQkFBQTtBQTNDSjs7QUE2Q0E7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBMUNKOztBQTRDQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBekNKIiwiZmlsZSI6Im15LXFyLXJlYWNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8vIC5maXJzdCB7XHJcbi8vICAgICBtYXJnaW46IDFlbSAxLjEyNWVtO1xyXG4vLyB9XHJcbi8vIC5yb3cge1xyXG4vLyAgICAgaGVpZ2h0OiAxMmVtO1xyXG4vLyB9XHJcbi8vIGlvbi1jYXJkIHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vIH1cclxuLy8gLmJnIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4vLyBpb24tYXZhdGFyIHtcclxuLy8gICAgIHdpZHRoOiA4LjE4NzVlbTtcclxuLy8gICAgIGhlaWdodDogOC4xODc1ZW07XHJcbi8vICAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4vLyB9XHJcblxyXG4vLyAvLyBzZWNvbmQtY2FyZFxyXG4vLyAuc2Vjb25kIHtcclxuLy8gICAgIG1hcmdpbjogMS42MjVlbSAxLjEyNWVtO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuLy8gfVxyXG4vLyAuc2Vjb25kIC5yZWFjaCB7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vICAgICBjb2xvcjogIzIyMjcyYTtcclxuLy8gfVxyXG4vLyAuc2Vjb25kIC5pZCB7XHJcbi8vICAgICBtYXJnaW46IDEwcHg7XHJcbi8vICAgICBjb2xvcjogIzg3MTE3ODtcclxuLy8gfVxyXG5cclxuLy8gLy8gdGhpcmQtY2FyZFxyXG4vLyAudGhpcmQge1xyXG4vLyAgICAgbWFyZ2luOiAxLjc1ZW0gMi4xODc1ZW07XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG4vLyAudGhpcmQgcCB7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyB9XHJcbi8vIC50aGlyZCBpbWcge1xyXG4vLyAgICAgd2lkdGg6IDYuNDNlbTtcclxuLy8gICAgIGhlaWdodDogNi40M2VtO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbi8vICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyLjE4NzVlbTtcclxuLy8gfVxyXG5cclxuLy8gLmhlYWRpbmcgcCB7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyAgICAgbWFyZ2luOiAwLjVlbSAwcHg7XHJcbi8vIH1cclxuLy8gLmFucyBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuLy8gICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbi8vIH1cclxuLy8gaDYge1xyXG4vLyAgICAgbWFyZ2luOiAwLjMxMjVlbSAwJTtcclxuLy8gICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4vLyB9XHJcblxyXG4uc2VsZWN0LXJvdyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uc2VsZWN0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5zZWxlY3QtdGV4dCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4uc2VsZWN0LWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM4NzExODcgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDQge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi8vZm91cnRoLWNhcmRcclxuLmZvdXJ0aCB7XHJcbiAgICBtYXJnaW46IDEuMTI1ZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODcxMTc4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuLnNlY29uZCB7XHJcbiAgICB3aWR0aDogMTg2cHg7XHJcbn1cclxuLnNlY29uZCAucmVhY2gge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG4uYWxpZ25jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNlY29uZCAuaWQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLmdwYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjc4MTI1ZW07XHJcbn1cclxuLmdwYXkgaW1nIHtcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDEuNTMxMjVlbTtcclxufVxyXG4uZ3BheSAucXIge1xyXG4gICAgaGVpZ2h0OiAxNS44MTI1ZW07XHJcbiAgICB3aWR0aDogMTUuODEyNWVtO1xyXG59XHJcbi5ncGF5IC5waG9uZSB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNWVtO1xyXG59XHJcbi5ub3RlIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuXHJcbi8vZmlmdGgtY2FyZFxyXG4uZmlmdGgge1xyXG4gICAgbWFyZ2luOiAxLjEyNWVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg3MTE3ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgcGFkZGluZzogMi41ZW0gMS41ZW07XHJcbn1cclxuLnJvd2Ege1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4ucm93YiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmdyb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNC4yNWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJncm91bmQgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNC4wNjI1ZW07XHJcbiAgICBoZWlnaHQ6IDQuMDYyNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi50aGljay1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDlweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYzcHg7XHJcbn1cclxuLm5hbSBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBsZWZ0OiAxNDBweDtcclxuICAgIG1heC13aWR0aDogbWluLWNvbnRlbnQ7XHJcbn1cclxuLy8gLnJlZmVyIHAge1xyXG4vLyAgICAgY29sb3I6ICMxZTFlMWU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5yZWZlciBwIHNwYW4ge1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vIH1cclxuLnJlZmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4ucmVmZXIgaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4ucmVmZXIgLnJlYWNoIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5yZWZlciAuaWQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnZlaGljIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi52ZWhpYyBpb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4udmVoaWMgcCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi52ZWhpYyAudmVoaWNubyB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcbi5ub3RlY2xhcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4ubm90ZWNsYXNzIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcbi5ub3RlY2xhc3Mgc3BhbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4ucXJjbGFzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4ucXJyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uY2hvb3NlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxufVxyXG4ucnVwZWVzIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxufVxyXG4ucnVwZWVzIHAgc3BhbiB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc3RpY2tlcnMgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmNob29zZSAuY2VudGVyIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5sYXN0LWdyaWQge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxufVxyXG4ubGFzdC1ncmlkIC5sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5sYXN0LWdyaWQgLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG5cclxuLmJ1dHRvbiAubGVmIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJ1dHRvbiAucmlnaCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnV0dG9uIC5sZWYgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjODcxMTc4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg3MTE3ODtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xODc1ZW07XHJcbn1cclxuLmJ1dHRvbiAucmlnaCBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xODc1ZW07XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-qr-reach-my-qr-reach-module-es5.js.map