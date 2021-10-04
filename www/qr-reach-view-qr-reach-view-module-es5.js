(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-reach-view-qr-reach-view-module"], {
    /***/
    "Hzdy": function Hzdy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrReachViewPageModule", function () {
        return QrReachViewPageModule;
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


      var _qr_reach_view_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qr-reach-view-routing.module */
      "LGAC");
      /* harmony import */


      var _qr_reach_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./qr-reach-view.page */
      "sp7q");

      var QrReachViewPageModule = function QrReachViewPageModule() {
        _classCallCheck(this, QrReachViewPageModule);
      };

      QrReachViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeModule"], _qr_reach_view_routing_module__WEBPACK_IMPORTED_MODULE_6__["QrReachViewPageRoutingModule"]],
        declarations: [_qr_reach_view_page__WEBPACK_IMPORTED_MODULE_7__["QrReachViewPage"]]
      })], QrReachViewPageModule);
      /***/
    },

    /***/
    "L5g2": function L5g2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.second {\n  margin: 1.625em 1.125em;\n  background: #f2f2f2;\n}\n\n.second .reach {\n  font-size: 1em;\n  margin: 10px 0px;\n  padding-left: 10px;\n  color: #22272a;\n}\n\n.second .id {\n  margin: 10px;\n  color: #871178;\n}\n\n.image-card {\n  margin: 1.75em 1.125em;\n  width: 100%;\n}\n\n.image-card p {\n  font-size: 1em;\n  color: #871178;\n}\n\n.image-card img {\n  width: 6.43em;\n  height: 6.43em;\n  margin-right: 1em;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.third {\n  margin: 1.75em 2.1875em;\n  width: 100%;\n}\n\n.third p {\n  font-size: 1em;\n  color: #871178;\n}\n\n.third img {\n  width: 6.43em;\n  height: 6.43em;\n  margin-right: 1em;\n  box-shadow: 0px 3px 6px #00000029;\n  margin-bottom: 2.1875em;\n}\n\n.heading p {\n  font-size: 1em;\n  color: #871178;\n  margin: 0.5em 0px;\n}\n\n.ans p {\n  font-size: 0.875em;\n  color: #22272a;\n  margin-left: 0.625em;\n  margin-top: 0.5em;\n  line-height: 1em;\n}\n\nh6 {\n  margin: 0.3125em 0%;\n  color: #22272a;\n  font-size: 13px !important;\n}\n\nh4 {\n  color: #871178;\n  text-align: center;\n  margin: 1em 0px;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.select-row {\n  margin-right: 18px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n\n.generate-card {\n  margin: 1.125em;\n  border: 2px solid #871178;\n  border-radius: 0%;\n}\n\n.generate {\n  width: 186px;\n}\n\n.generate .reach {\n  font-size: 16px;\n  margin: 0px;\n  margin-top: 6px;\n  color: #22272a;\n}\n\n.aligncol {\n  text-align: right;\n}\n\n.generate .id {\n  font-size: 16px;\n  margin: 0px;\n  margin-top: 6px;\n  color: #871178;\n}\n\n.gpay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.78125em;\n}\n\n.gpay img {\n  width: 4em;\n  height: 1.53125em;\n}\n\n.gpay .qr {\n  height: 15.8125em;\n  width: 15.8125em;\n}\n\n.gpay .phone {\n  color: #871178;\n  font-size: 1.125em;\n  margin-bottom: 1.5625em;\n}\n\n.note {\n  color: #871178;\n  font-size: 0.875em;\n  margin-bottom: 1.5625em;\n  margin-left: 6px;\n}\n\nspan {\n  color: #707070;\n  font-size: 0.875em;\n}\n\n.fifth {\n  margin: 1.125em;\n  border: 2px solid #871178;\n  border-radius: 0%;\n  padding: 2.5em 1.5em;\n}\n\n.rowa {\n  height: 12em;\n  background-color: #f5f5f5;\n}\n\n.rowb {\n  width: 100%;\n}\n\n.bground {\n  width: 100%;\n  height: 4.25em;\n  background: linear-gradient(#871178, #3c1378);\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.bground ion-avatar {\n  width: 4.0625em;\n  height: 4.0625em;\n  margin-left: 20px;\n}\n\n.thick-border {\n  width: 9px;\n  height: 36px;\n  background: #00000029;\n  border-radius: 25px;\n  position: absolute;\n  top: 63px;\n}\n\n.nam p {\n  margin: 0px;\n  color: #22272a;\n  font-size: 18px;\n  position: absolute;\n  top: 60px;\n  left: 140px;\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n}\n\n.refer {\n  margin-top: 24px;\n  margin-left: 20px;\n}\n\n.refer ion-col {\n  padding: 0%;\n}\n\n.refer .reach {\n  margin: 0px;\n  color: #22272a;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.refer .id {\n  font-size: 16px;\n  margin: 0px;\n  color: #871178;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: left;\n}\n\n.vehic {\n  margin-left: 20px;\n}\n\n.vehic ion-col {\n  padding: 0px;\n}\n\n.vehic p {\n  font-size: 11px;\n  color: #22272a;\n  margin: 0px;\n}\n\n.vehic .vehicno {\n  font-size: 11px;\n  color: #707070;\n  text-align: left;\n  margin: 0%;\n}\n\n.noteclas {\n  margin-left: 20px;\n}\n\n.noteclass {\n  color: #871178;\n  font-size: 9px;\n  margin: 0%;\n}\n\n.noteclass span {\n  color: #707070;\n}\n\n.qrclas {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.qrr {\n  width: 60px;\n  height: 60px;\n}\n\n.choose {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0.3125em;\n}\n\n.rupees p {\n  font-size: 20px;\n  color: #871178;\n  margin-bottom: 0%;\n}\n\n.rupees p span {\n  color: #22272a;\n  font-size: 18px;\n}\n\n.stickers p {\n  color: #707070;\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.choose .center {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.last-grid {\n  margin: 0.3125em;\n}\n\n.last-grid .left {\n  text-align: left;\n  text-decoration: underline;\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.last-grid .right {\n  text-align: right;\n  text-decoration: underline;\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.button .lef {\n  text-align: left;\n}\n\n.button .righ {\n  text-align: right;\n}\n\n.button .lef ion-button {\n  --background: #ffffff;\n  --color: #871178;\n  border: 2px solid #871178;\n  text-transform: capitalize;\n  font-size: 18px;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n\n.button .righ ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 18px;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHFyLXJlYWNoLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFPSjs7QUFIQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFRSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQVNKOztBQUxBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9C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REE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUE5Q0o7O0FBZ0RBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQTdDSjs7QUErQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQTVDSjs7QUE4Q0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBM0NKOztBQTZDQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQTFDSjs7QUE2Q0E7RUFDSSxnQkFBQTtBQTFDSjs7QUE0Q0E7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBekNKOztBQTJDQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksZ0JBQUE7QUF4Q0o7O0FBMENBO0VBQ0ksaUJBQUE7QUF2Q0o7O0FBeUNBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXRDSjs7QUF3Q0E7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXJDSiIsImZpbGUiOiJxci1yZWFjaC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8vIGZpcnN0LWNhcmRcclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDE0LjRlbTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5iZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOS4zNzVlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjNDQwOTNjKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDE0NnB4O1xyXG4gICAgaGVpZ2h0OiAxNDZweDtcclxufVxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuLnBvc2l0aW9uLWNhbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MnB4O1xyXG4gICAgdG9wOiAzN3B4O1xyXG59XHJcblxyXG4vLyBzZWNvbmQtY2FyZFxyXG4uc2Vjb25kIHtcclxuICAgIG1hcmdpbjogMS42MjVlbSAxLjEyNWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxufVxyXG4uc2Vjb25kIC5yZWFjaCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG4uc2Vjb25kIC5pZCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLy8gaW1hZ2UtY2FyZFxyXG4uaW1hZ2UtY2FyZCB7XHJcbiAgICBtYXJnaW46IDEuNzVlbSAxLjEyNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltYWdlLWNhcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5pbWFnZS1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogNi40M2VtO1xyXG4gICAgaGVpZ2h0OiA2LjQzZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLy8gdGhpcmQtY2FyZFxyXG4udGhpcmQge1xyXG4gICAgbWFyZ2luOiAxLjc1ZW0gMi4xODc1ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGhpcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi50aGlyZCBpbWcge1xyXG4gICAgd2lkdGg6IDYuNDNlbTtcclxuICAgIGhlaWdodDogNi40M2VtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjE4NzVlbTtcclxufVxyXG5cclxuLmhlYWRpbmcgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwcHg7XHJcbn1cclxuLmFucyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuaDYge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbSAwJTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaDQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuXHJcbi8vZm91cnRoLWNhcmRcclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLy8gLmZpcnN0IHtcclxuLy8gICAgIG1hcmdpbjogMWVtIDEuMTI1ZW07XHJcbi8vIH1cclxuLy8gLnJvdyB7XHJcbi8vICAgICBoZWlnaHQ6IDEyZW07XHJcbi8vIH1cclxuLy8gaW9uLWNhcmQge1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gfVxyXG4vLyAuYmcge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcbi8vIGlvbi1hdmF0YXIge1xyXG4vLyAgICAgd2lkdGg6IDguMTg3NWVtO1xyXG4vLyAgICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC8vIHNlY29uZC1jYXJkXHJcbi8vIC5zZWNvbmQge1xyXG4vLyAgICAgbWFyZ2luOiAxLjYyNWVtIDEuMTI1ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4vLyB9XHJcbi8vIC5zZWNvbmQgLnJlYWNoIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy8gICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4vLyB9XHJcbi8vIC5zZWNvbmQgLmlkIHtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyB9XHJcblxyXG4vLyAvLyB0aGlyZC1jYXJkXHJcbi8vIC50aGlyZCB7XHJcbi8vICAgICBtYXJnaW46IDEuNzVlbSAyLjE4NzVlbTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcbi8vIC50aGlyZCBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vIH1cclxuLy8gLnRoaXJkIGltZyB7XHJcbi8vICAgICB3aWR0aDogNi40M2VtO1xyXG4vLyAgICAgaGVpZ2h0OiA2LjQzZW07XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDIuMTg3NWVtO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVhZGluZyBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vICAgICBtYXJnaW46IDAuNWVtIDBweDtcclxuLy8gfVxyXG4vLyAuYW5zIHAge1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4vLyAgICAgY29sb3I6ICMyMjI3MmE7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMC42MjVlbTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuLy8gfVxyXG4vLyBoNiB7XHJcbi8vICAgICBtYXJnaW46IDAuMzEyNWVtIDAlO1xyXG4vLyAgICAgY29sb3I6ICMyMjI3MmE7XHJcbi8vIH1cclxuXHJcbi5zZWxlY3Qtcm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnNlbGVjdC10ZXh0IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5zZWxlY3QtaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE4NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBoNCB7XHJcbi8vICAgICBjb2xvcjogIzg3MTE3ODtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogMWVtIDBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDZweDtcclxuLy8gfVxyXG5cclxuLy9mb3VydGgtY2FyZFxyXG4uZ2VuZXJhdGUtY2FyZCB7XHJcbiAgICBtYXJnaW46IDEuMTI1ZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODcxMTc4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuLmdlbmVyYXRlIHtcclxuICAgIHdpZHRoOiAxODZweDtcclxufVxyXG4uZ2VuZXJhdGUgLnJlYWNoIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLmFsaWduY29sIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5nZW5lcmF0ZSAuaWQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLmdwYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjc4MTI1ZW07XHJcbn1cclxuLmdwYXkgaW1nIHtcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDEuNTMxMjVlbTtcclxufVxyXG4uZ3BheSAucXIge1xyXG4gICAgaGVpZ2h0OiAxNS44MTI1ZW07XHJcbiAgICB3aWR0aDogMTUuODEyNWVtO1xyXG59XHJcbi5ncGF5IC5waG9uZSB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNWVtO1xyXG59XHJcbi5ub3RlIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuXHJcbi8vZmlmdGgtY2FyZFxyXG4uZmlmdGgge1xyXG4gICAgbWFyZ2luOiAxLjEyNWVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg3MTE3ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgcGFkZGluZzogMi41ZW0gMS41ZW07XHJcbn1cclxuLnJvd2Ege1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4ucm93YiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmdyb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNC4yNWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJncm91bmQgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNC4wNjI1ZW07XHJcbiAgICBoZWlnaHQ6IDQuMDYyNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRoaWNrLWJvcmRlciB7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjNweDtcclxufVxyXG4ubmFtIHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGxlZnQ6IDE0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcclxufVxyXG4vLyAucmVmZXIgcCB7XHJcbi8vICAgICBjb2xvcjogIzFlMWUxZTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vIH1cclxuLy8gLnJlZmVyIHAgc3BhbiB7XHJcbi8vICAgICBjb2xvcjogIzg3MTE3ODtcclxuLy8gfVxyXG4ucmVmZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5yZWZlciBpb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcbi5yZWZlciAucmVhY2gge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnJlZmVyIC5pZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udmVoaWMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnZlaGljIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi52ZWhpYyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnZlaGljIC52ZWhpY25vIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLm5vdGVjbGFzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5ub3RlY2xhc3Mge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLm5vdGVjbGFzcyBzcGFuIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5xcmNsYXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5xcnIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5jaG9vc2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG59XHJcbi5ydXBlZXMgcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG59XHJcbi5ydXBlZXMgcCBzcGFuIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zdGlja2VycyBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY2hvb3NlIC5jZW50ZXIge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmxhc3QtZ3JpZCB7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG59XHJcbi5sYXN0LWdyaWQgLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLmxhc3QtZ3JpZCAucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcblxyXG4uYnV0dG9uIC5sZWYge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYnV0dG9uIC5yaWdoIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idXR0b24gLmxlZiBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICM4NzExNzg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODcxMTc4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcclxufVxyXG4uYnV0dG9uIC5yaWdoIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "LGAC": function LGAC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrReachViewPageRoutingModule", function () {
        return QrReachViewPageRoutingModule;
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


      var _qr_reach_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qr-reach-view.page */
      "sp7q");

      var routes = [{
        path: '',
        component: _qr_reach_view_page__WEBPACK_IMPORTED_MODULE_3__["QrReachViewPage"]
      }];

      var QrReachViewPageRoutingModule = function QrReachViewPageRoutingModule() {
        _classCallCheck(this, QrReachViewPageRoutingModule);
      };

      QrReachViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QrReachViewPageRoutingModule);
      /***/
    },

    /***/
    "sImN": function sImN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n      <ion-menu-button mode=ios></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Qr Reach View</ion-title>\n    <ion-buttons slot=\"end\" routerLink=\"/edit-qr-reach\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor=\"let qr of qrdetails\">\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"{{uimage}}\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"second\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <p class=\"reach\">Reach ID</p>\n      </ion-col>\n      <ion-col>\n        <p class=\"id\">{{qr.qr_id}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"image-card\">\n    <ion-row>\n      <p>Image</p>\n    </ion-row>\n    <div class=\"scroll\">\n      <img src=\"{{qr.image1}}\" alt=\"\">\n      <img src=\"{{qr.image2}}\" alt=\"\">\n      <img src=\"{{qr.image3}}\" alt=\"\">\n      <img src=\"{{qr.image4}}\" alt=\"\">\n    </div>\n  </ion-card>\n\n  <ion-card class=\"third\">\n\n    <ion-row class=\"heading\">\n      <p>User Name</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <p>{{qr.name}}</p>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>User Number</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <p>{{qr.mobile}}</p>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>User Mail ID</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <p>{{qr.email}}</p>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>Purpose (Vehicle)</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <ion-col size=\"12\">\n        <h6>Vehicle</h6>\n      </ion-col>\n      <ion-col size=\"12\">\n        <h6>{{qr.vehicle_type}}</h6>\n      </ion-col>\n      <ion-col size=\"12\">\n        <h6>{{qr.registration_number}}</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>Address</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <p>{{uaddress}}</p>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>Nominee Name</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <p>{{qr.nominee_name}}</p>\n    </ion-row>\n    <ion-row class=\"heading\">\n      <p>Contact No</p>\n    </ion-row>\n    <ion-row class=\"ans\">\n      <p>{{qr.nominee_mobile}}</p>\n    </ion-row>\n  </ion-card>\n\n  <h4>Sticker & Tag</h4>\n\n  <ion-card class=\"generate-card\">\n    <ion-row class=\"gpay\">\n      <img\n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg/1280px-Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg.png\"\n        alt=\"\">\n\n      <ion-card>\n        <ion-row class=\"generate\">\n          <ion-col>\n            <p class=\"reach\">Reach ID</p>\n          </ion-col>\n          <ion-col class=\"aligncol\">\n            <p class=\"id\">{{qr.qr_id}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <qrcode [qrdata]=\"qr.qr_id\" style=\"height: 230px !important;width: 230px !important;\"></qrcode>\n      <p class=\"phone\">{{qr.registration_number}}</p>\n      <span class=\"note\">Note: <span>Scan to reach belongers in case of emergency. don't misuse</span></span>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"fifth\">\n    <ion-card>\n      <ion-row class=\"rowa\">\n        <ion-row class=\"rowb\">\n          <ion-col class=\"bground\">\n            <ion-row class=\"thick-border\">\n            </ion-row>\n            <ion-avatar>\n              <img src=\"http://www.eurocarnews.com/media/pictorials/1445/6905.jpg\" alt=\"\">\n            </ion-avatar>\n            <ion-row class=\"nam text-overflow\">\n              <p>{{qr.name}}</p>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row class=\"refer text-overflow\">\n              <ion-col size=\"5.2\">\n                <p class=\"reach\">Refer ID</p>\n              </ion-col>\n              <ion-col>\n                <span class=\"aligncol text-overflow\">\n                  <p class=\"id\">{{qr.qr_id}}</p>\n                </span>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"vehic text-overflow\">\n              <ion-col size=\"5.2\">\n                <p>Vechile</p>\n              </ion-col>\n              <ion-col class=\"text-overflow\">\n                <p class=\"vehicno\">{{qr.registration_number}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"noteclas\">\n              <span class=\"noteclass\">Note: <span>Scan to reach belongers in case of emergency. don't\n                  misuse</span></span>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\" class=\"qrclas\">\n            <img class=\"qrr\"\n              src=\"https://www.freepnglogos.com/uploads/qr-code-png/qr-code-code-sticker-transparent-png-svg-vector-19.png\"\n              alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-row>\n    </ion-card>\n  </ion-card>\n\n  <ion-grid class=\"last-grid\">\n    <ion-row>\n      <ion-col class=\"left\">\n        <p>Payment History</p>\n      </ion-col>\n      <ion-col class=\"right\">\n        <p>Choose</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"button\">\n      <ion-col class=\"lef\">\n        <ion-button>Download</ion-button>\n      </ion-col>\n      <ion-col class=\"righ\">\n        <ion-button>Renewal</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n\n\n<!-- <ion-card class=\"fourth\">\n    <ion-row class=\"gpay\">\n      <img\n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg/1280px-Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg.png\"\n        alt=\"\">\n      <img class=\"qr\"\n        src=\"https://www.freepnglogos.com/uploads/qr-code-png/qr-code-code-sticker-transparent-png-svg-vector-19.png\"\n        alt=\"\">\n      <p class=\"phone\">TN 22 DH 9354</p>\n      <span class=\"note\">Note: <span>Scan to reach belongers in case of emergency. don't misuse</span></span>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"fifth\">\n    <ion-card>\n      <ion-row class=\"rowa\">\n        <ion-col class=\"bground\">\n          <ion-avatar>\n            <img src=\"http://www.eurocarnews.com/media/pictorials/1445/6905.jpg\" alt=\"\">\n          </ion-avatar>\n        </ion-col>\n        <ion-row>\n          <ion-col>\n            <ion-row class=\"refer\">\n              <p>Refer ID <span>985621</span></p>\n            </ion-row>\n            <ion-row class=\"refer\">\n              <p>Vechile <span>TN 22 DH 9133</span></p>\n            </ion-row>\n            <ion-row>\n              <span class=\"note\">Note: <span>Scan to reach belongers in case of emergency. don't misuse</span></span>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"qrr\" size=\"3\">\n            <img class=\"qr\"\n              src=\"https://www.freepnglogos.com/uploads/qr-code-png/qr-code-code-sticker-transparent-png-svg-vector-19.png\"\n              alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-row>\n    </ion-card>\n  </ion-card>\n\n  <ion-grid class=\"last-grid\">\n    <ion-row>\n      <ion-col class=\"left\">\n        <p>Payment History</p>\n      </ion-col>\n      <ion-col class=\"right\">\n        <p>Choose</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"button\">\n      <ion-col class=\"lef\">\n        <ion-button>Download</ion-button>\n      </ion-col>\n      <ion-col class=\"righ\">\n        <ion-button>Renewal</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content> -->";
      /***/
    },

    /***/
    "sp7q": function sp7q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrReachViewPage", function () {
        return QrReachViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_qr_reach_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./qr-reach-view.page.html */
      "sImN");
      /* harmony import */


      var _qr_reach_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./qr-reach-view.page.scss */
      "L5g2");
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

      var QrReachViewPage = /*#__PURE__*/function () {
        function QrReachViewPage(http, storage) {
          _classCallCheck(this, QrReachViewPage);

          this.http = http;
          this.storage = storage;
        }

        _createClass(QrReachViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("userdetails").then(function (val) {
              _this.udata = val;
              _this.uimage = _this.udata[0].image;
              _this.uaddress = _this.udata[0].address;
              console.log("UserID", _this.uimage);
            });
            this.storage.get("qrid").then(function (val) {
              _this.qr_id = val;
              console.log("QRID:", _this.qr_id);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"].ApiUrl + "getqrreach.php?qrid=" + _this.qr_id).subscribe(function (response) {
                _this.qrdetails = response;
                console.log("QR Deials", _this.qrdetails);
              });
            });
          }
        }]);

        return QrReachViewPage;
      }();

      QrReachViewPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      QrReachViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-qr-reach-view',
        template: _raw_loader_qr_reach_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_reach_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QrReachViewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=qr-reach-view-qr-reach-view-module-es5.js.map