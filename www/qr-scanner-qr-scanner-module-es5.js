(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-scanner-qr-scanner-module"], {
    /***/
    "/jms": function jms(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPageRoutingModule", function () {
        return QrScannerPageRoutingModule;
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


      var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qr-scanner.page */
      "Wt+N");

      var routes = [{
        path: '',
        component: _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__["QrScannerPage"]
      }];

      var QrScannerPageRoutingModule = function QrScannerPageRoutingModule() {
        _classCallCheck(this, QrScannerPageRoutingModule);
      };

      QrScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QrScannerPageRoutingModule);
      /***/
    },

    /***/
    "Gxgy": function Gxgy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  --background: transparent none !important;\n}\n\nion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: center;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 1.3125em;\n  float: right;\n}\n\nion-content {\n  --padding-bottom: 65px;\n}\n\n.container {\n  background-color: #707070;\n  height: 520px;\n  display: flex;\n  flex-direction: column;\n}\n\n.icon {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.icon ion-icon {\n  color: #ffffff;\n  height: 1.60125rem;\n  width: 1.36125rem;\n  margin-right: 0.9375em;\n  margin-top: 0.3125em;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.big {\n  height: 10.82625em;\n  width: 10.82625em;\n  background-color: #ffffff;\n  border-radius: 30%;\n  text-align: center;\n  margin-top: 100px;\n}\n\n.big .first {\n  display: flex;\n  flex-direction: row;\n  padding: 0px;\n  margin: 0px;\n  height: 5.413125em;\n  width: 10.82625em;\n}\n\n.big .second {\n  display: flex;\n  flex-direction: row;\n  padding: 0px;\n  margin: 0px;\n  height: 5.413125em;\n  width: 10.82625em;\n  align-items: flex-end;\n}\n\n.first .box1 {\n  padding: 0px;\n  margin: 0px;\n  height: 2.936875em;\n  width: 2.936875em;\n  background-color: #ffffff;\n  border-top-left-radius: 50%;\n  border: 0.193125em solid #000000;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n}\n\n.first .box2 {\n  padding: 0px;\n  margin: 0px;\n  height: 2.936875em;\n  width: 2.936875em;\n  background-color: #ffffff;\n  border-top-right-radius: 50%;\n  border: 0.193125em solid #000000;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n}\n\n.second .box3 {\n  padding: 0px;\n  margin: 0px;\n  height: 2.936875em;\n  width: 2.936875em;\n  background-color: #ffffff;\n  border-bottom-left-radius: 50%;\n  border: 0.193125em solid #000000;\n  border-right-color: transparent;\n  border-top-color: transparent;\n}\n\n.second .box4 {\n  padding: 0px;\n  margin: 0px;\n  height: 2.936875em;\n  width: 2.936875em;\n  background-color: #ffffff;\n  border-bottom-right-radius: 50%;\n  border: 0.193125em solid #000000;\n  border-left-color: transparent;\n  border-top-color: transparent;\n}\n\n.text p {\n  margin: 0px;\n  margin-top: 1.625rem;\n  text-align: center;\n  font-size: 1em;\n  color: #ffffff;\n}\n\n.last {\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 35px;\n}\n\n.last .line {\n  margin-bottom: 17px;\n  color: #9f9f9f;\n}\n\n.last .or {\n  color: #22272a;\n  margin-top: 6.5px;\n}\n\n.last ion-item {\n  width: 270px;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.875em;\n  margin-bottom: 1.25em;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 1.25em;\n  width: 131px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHFyLXNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQVVKOztBQVJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQVdKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQVlKOztBQVZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQWFKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWNKOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQWVKOztBQWJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksWUFBQTtBQWlCSjs7QUFkQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFpQko7O0FBZkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBa0JKIiwiZmlsZSI6InFyLXNjYW5uZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQgbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zMTI1ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDY1cHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuLmljb24gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDEuNjAxMjVyZW07XHJcbiAgICB3aWR0aDogMS4zNjEyNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC45Mzc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjMxMjVlbTtcclxufVxyXG4ubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYmlnIHtcclxuICAgIGhlaWdodDogMTAuODI2MjVlbTtcclxuICAgIHdpZHRoOiAxMC44MjYyNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5iaWcgLmZpcnN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDUuNDEzMTI1ZW07XHJcbiAgICB3aWR0aDogMTAuODI2MjVlbTtcclxufVxyXG4uYmlnIC5zZWNvbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogNS40MTMxMjVlbTtcclxuICAgIHdpZHRoOiAxMC44MjYyNWVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5maXJzdCAuYm94MSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogMi45MzY4NzVlbTtcclxuICAgIHdpZHRoOiAyLjkzNjg3NWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMC4xOTMxMjVlbSBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5maXJzdCAuYm94MiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogMi45MzY4NzVlbTtcclxuICAgIHdpZHRoOiAyLjkzNjg3NWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDAuMTkzMTI1ZW0gc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zZWNvbmQgLmJveDMge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDIuOTM2ODc1ZW07XHJcbiAgICB3aWR0aDogMi45MzY4NzVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDAuMTkzMTI1ZW0gc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2Vjb25kIC5ib3g0IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiAyLjkzNjg3NWVtO1xyXG4gICAgd2lkdGg6IDIuOTM2ODc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMC4xOTMxMjVlbSBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRleHQgcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEuNjI1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxhc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG4ubGFzdCAubGluZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbn1cclxuLmxhc3QgLm9yIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLXRvcDogNi41cHg7XHJcbn1cclxuLmxhc3QgaW9uLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEuODc1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XHJcbn1cclxuLmJ0biBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICB3aWR0aDogMTMxcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "K9JO": function K9JO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPageModule", function () {
        return QrScannerPageModule;
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


      var _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qr-scanner-routing.module */
      "/jms");
      /* harmony import */


      var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qr-scanner.page */
      "Wt+N");

      var QrScannerPageModule = function QrScannerPageModule() {
        _classCallCheck(this, QrScannerPageModule);
      };

      QrScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrScannerPageRoutingModule"]],
        declarations: [_qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__["QrScannerPage"]]
      })], QrScannerPageModule);
      /***/
    },

    /***/
    "Wt+N": function WtN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPage", function () {
        return QrScannerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./qr-scanner.page.html */
      "m6wF");
      /* harmony import */


      var _qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./qr-scanner.page.scss */
      "Gxgy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var QrScannerPage = /*#__PURE__*/function () {
        function QrScannerPage(actionsheetCtrl, route, qrScanner, http) {
          _classCallCheck(this, QrScannerPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.qrScanner = qrScanner;
          this.http = http;
          this.showqrdata = false;
        }

        _createClass(QrScannerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'History',
                          handler: function handler() {
                            _this.route.navigate(['history']);

                            console.log('Destructive clicked');
                          }
                        }, {
                          text: 'Detail',
                          handler: function handler() {
                            console.log('Archive clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ScanCode",
          value: function ScanCode() {
            var _this2 = this;

            this.qrScanner.prepare().then(function (status) {
              if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub = _this2.qrScanner.scan().subscribe(function (text) {
                  _this2.text = text;
                  alert('Scanned Details: ' + _this2.text);

                  _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getqrdetails.php?qrid=" + _this2.text).subscribe(function (response) {
                    _this2.qrdata = response;

                    if (_this2.qrdata == 0) {
                      alert("this code is not valid or Outside of Application");

                      _this2.route.navigate(['/home']);
                    } else {
                      //alert(this.qrdata);
                      _this2.qrScanner.hide();

                      _this2.showqrdata = true;
                      scanSub.unsubscribe();
                    }
                  }); // hide camera preview
                  // stop scanning

                });
              } else if (status.denied) {// camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
              } else {// permission was denied, but not permanently. You can ask for permission again at a later time.
              }
            })["catch"](function (e) {
              return console.log('Error is', e);
            });
          }
        }]);

        return QrScannerPage;
      }();

      QrScannerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["QRScanner"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      QrScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr-scanner',
        template: _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QrScannerPage);
      /***/
    },

    /***/
    "m6wF": function m6wF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>QR Scanner</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n <ion-button size=\"expand\" (click)=\"ScanCode()\">Start Scaning Code</ion-button>\n <div *ngIf=\"showqrdata\" style=\"background: #fff;\">\n<ion-row *ngFor=\"let qrd of qrdata\">\n  <ion-col size=\"6\">\n    Name\n  </ion-col>\n  <ion-col size=\"6\">\n    : {{qrd.name}}\n  </ion-col>\n  <ion-col size=\"6\">\n    Mobile\n  </ion-col>\n  <ion-col size=\"6\">\n    : {{qrd.mobile}}\n  </ion-col>\n  <ion-col size=\"6\">\n    Email\n  </ion-col>\n  <ion-col size=\"6\">\n    : {{qrd.email}}\n  </ion-col>\n  <ion-col size=\"6\">\n    Reg Number\n  </ion-col>\n  <ion-col size=\"6\">\n    : {{qrd.registration_number}}\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"{{qrd.image1}}\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"{{qrd.image2}}\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"{{qrd.image3}}\">\n  </ion-col>\n  <ion-col size=\"3\">\n    <img src=\"{{qrd.image4}}\">\n  </ion-col>\n  \n</ion-row>\n</div>\n</ion-content>\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"scan\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=qr-scanner-qr-scanner-module-es5.js.map