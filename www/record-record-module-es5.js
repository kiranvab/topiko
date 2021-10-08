(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["record-record-module"], {
    /***/
    "5eZB": function eZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordPage", function () {
        return RecordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_record_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./record.page.html */
      "KkV5");
      /* harmony import */


      var _record_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./record.page.scss */
      "hAuV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RecordPage = /*#__PURE__*/function () {
        function RecordPage() {
          _classCallCheck(this, RecordPage);
        }

        _createClass(RecordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecordPage;
      }();

      RecordPage.ctorParameters = function () {
        return [];
      };

      RecordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-record',
        template: _raw_loader_record_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_record_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecordPage);
      /***/
    },

    /***/
    "KkV5": function KkV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row class=\"record\">\n        <ion-col>\n          <ion-title>Record</ion-title>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"search\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"first\">\n    <ion-row class=\"top\">\n      <p>Call record</p>\n      <p>Employee</p>\n      <p>Consumer</p>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <ion-col class=\"img\" size=\"2.3\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class=\"name\">\n        <p>Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p>Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time\" size=\"2\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <ion-col class=\"img\" size=\"2.3\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class=\"name\">\n        <p>Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p>Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time\" size=\"2\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <ion-col class=\"img\" size=\"2.3\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class=\"name\">\n        <p>Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p>Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time\" size=\"2\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <ion-col class=\"img\" size=\"2.3\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class=\"name\">\n        <p>Sarah Walker</p>\n        <ion-row class=\"text\">\n          <p>Lorem ipsum is Simply?</p>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"time\" size=\"2\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>";
      /***/
    },

    /***/
    "faDB": function faDB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordPageModule", function () {
        return RecordPageModule;
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


      var _record_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./record-routing.module */
      "vXIp");
      /* harmony import */


      var _record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./record.page */
      "5eZB");

      var RecordPageModule = function RecordPageModule() {
        _classCallCheck(this, RecordPageModule);
      };

      RecordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _record_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordPageRoutingModule"]],
        declarations: [_record_page__WEBPACK_IMPORTED_MODULE_6__["RecordPage"]]
      })], RecordPageModule);
      /***/
    },

    /***/
    "hAuV": function hAuV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".record {\n  text-align: center;\n  font-size: 1.125em;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n}\n\n.record ion-col {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.record ion-icon {\n  font-size: 21px;\n}\n\n.first {\n  box-shadow: none;\n  background-color: #f5f5f5;\n}\n\nion-card {\n  box-shadow: #00000029 0px 3px 6px;\n}\n\nion-avatar {\n  width: 4em;\n  height: 4em;\n}\n\n.top p {\n  margin: 0.6875em 1.875em;\n  color: #707070;\n}\n\n.name {\n  padding-left: 0%;\n}\n\n.name p {\n  font-size: 1.125em;\n  color: #22272a;\n  padding-top: 0.375em;\n  margin: 0px;\n}\n\n.text p {\n  font-size: 0.875em;\n  color: #9f9f9f;\n  margin: 0px;\n  padding-top: 0.375em;\n}\n\n.time p {\n  color: #871178;\n  font-size: 0.75em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksaUNBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQVVKOztBQVJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFXSiIsImZpbGUiOiJyZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY29yZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMzc1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcbi5yZWNvcmQgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yZWNvcmQgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5maXJzdCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMjkgMHB4IDNweCA2cHg7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNGVtO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbn1cclxuLnRvcCBwIHtcclxuICAgIG1hcmdpbjogMC42ODc1ZW0gMS44NzVlbTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5uYW1lIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbn1cclxuLm5hbWUgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjM3NWVtO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnRleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDAuMzc1ZW07XHJcbn1cclxuLnRpbWUgcCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "vXIp": function vXIp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordPageRoutingModule", function () {
        return RecordPageRoutingModule;
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


      var _record_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./record.page */
      "5eZB");

      var routes = [{
        path: '',
        component: _record_page__WEBPACK_IMPORTED_MODULE_3__["RecordPage"]
      }];

      var RecordPageRoutingModule = function RecordPageRoutingModule() {
        _classCallCheck(this, RecordPageRoutingModule);
      };

      RecordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecordPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=record-record-module-es5.js.map