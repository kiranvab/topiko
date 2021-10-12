(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["careerview-careerview-module"], {
    /***/
    "0/Vn": function Vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareerviewPage", function () {
        return CareerviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_careerview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./careerview.page.html */
      "kRqK");
      /* harmony import */


      var _careerview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./careerview.page.scss */
      "g6ac");
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


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var CareerviewPage = /*#__PURE__*/function () {
        function CareerviewPage(actionsheetCtrl, route, storage, http) {
          _classCallCheck(this, CareerviewPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.storage = storage;
          this.http = http;
        }

        _createClass(CareerviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("userdetails").then(function (val) {
              _this.udata = val;
              _this.uid = _this.udata[0].id;
              _this.uname = _this.udata[0].name;
              _this.ucity = _this.udata[0].city;
              _this.umobile = _this.udata[0].mobile;
              _this.uimg = _this.udata[0].image;
              console.log(_this.udata);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "mybusiness.php?user_id=" + _this.uid).subscribe(function (data) {
                _this.business = data;
                console.log("my business", _this.business);
                _this.bid = _this.business[0].id;
              });
            });
          }
        }, {
          key: "employee",
          value: function employee() {
            this.storage.set("bid", this.bid);
            this.route.navigate(['employee']);
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Apply',
                          handler: function handler() {
                            console.log('Destructive clicked');
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
        }]);

        return CareerviewPage;
      }();

      CareerviewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      CareerviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-careerview',
        template: _raw_loader_careerview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_careerview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CareerviewPage);
      /***/
    },

    /***/
    "SdWo": function SdWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareerviewPageRoutingModule", function () {
        return CareerviewPageRoutingModule;
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


      var _careerview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./careerview.page */
      "0/Vn");

      var routes = [{
        path: '',
        component: _careerview_page__WEBPACK_IMPORTED_MODULE_3__["CareerviewPage"]
      }];

      var CareerviewPageRoutingModule = function CareerviewPageRoutingModule() {
        _classCallCheck(this, CareerviewPageRoutingModule);
      };

      CareerviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CareerviewPageRoutingModule);
      /***/
    },

    /***/
    "g6ac": function g6ac(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: center;\n}\n\nion-content {\n  --color: #22272a;\n  --background: #f5f5f5;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\n.row {\n  height: 12em;\n  background: #f5f5f5;\n}\n\n.first {\n  margin: 15px 0px;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 0.3125em;\n  border-radius: 0%;\n  padding-right: 0%;\n}\n\n.firstcard {\n  border: none !important;\n  box-shadow: none !important;\n  background: #f5f5f5;\n  padding: 0px;\n  border-radius: 8px 8px 0px 0px;\n  margin-left: 0%;\n  margin-right: 0%;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.firs {\n  margin: 1em 0em;\n}\n\n.row {\n  height: 14.4em;\n}\n\n.firs {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bg ion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 24%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 0px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f5f5f5;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 1em;\n  color: #871178;\n  font-weight: bold;\n}\n\n.number {\n  font-size: 0.875em;\n  margin-top: 0.5em;\n  margin-bottom: 0%;\n  color: #707070;\n}\n\n.dashboard p {\n  margin-top: 0.773125em;\n  margin-bottom: 0.590625em;\n  margin-left: 11px;\n  font-size: 0.875em;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\nion-fab-button {\n  --ion-color-base: #f2f2f2 !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\nion-badge {\n  --ion-color-base: #d60000 !important;\n  --border-radius: 50%;\n}\n\ndiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.image {\n  min-width: 100%;\n  margin-top: 10px;\n  min-height: 230px;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n  bottom: 22px;\n}\n\n.round-img {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 50px;\n  right: 9px;\n  background: #919191;\n  border-radius: 50%;\n}\n\n.round-img ion-icon {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.second {\n  box-shadow: none;\n  margin: 12px 0px;\n}\n\n.description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 1.8em;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.likes ion-col {\n  text-align: center;\n}\n\n.like {\n  font-size: 0.875em;\n}\n\n.lines {\n  border-right: 1px solid #00000033;\n  margin: 14px 0px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  padding: 0%;\n}\n\n.count {\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.likes .comment {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcmVlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVRBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBYUo7O0FBWEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQWJBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFnQko7O0FBZEE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFpQko7O0FBZkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFtQko7O0FBakJBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXFCSjs7QUFuQkE7RUFDSSxvQ0FBQTtFQUNBLG9CQUFBO0FBc0JKOztBQXBCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdUJKOztBQXJCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBd0JKOztBQXRCQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXlCSjs7QUF2QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTBCSjs7QUF4QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTJCSjs7QUF6QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBNEJKOztBQTFCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBNkJKOztBQTFCQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBOEJKOztBQTVCQTtFQUNJLGtCQUFBO0FBK0JKOztBQTdCQTtFQUNJLGtCQUFBO0FBZ0NKOztBQTlCQTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWlDSjs7QUEvQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksWUFBQTtBQW1DSiIsImZpbGUiOiJjYXJlZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1jb2xvcjogIzIyMjcyYTtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5maXJzdCB7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgcGFkZGluZzogMC4zMTI1ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xyXG59XHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDguMTg3NWVtO1xyXG4gICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbi5maXJzIHtcclxuICAgIG1hcmdpbjogMWVtIDBlbTtcclxufVxyXG4ucm93IHtcclxuICAgIGhlaWdodDogMTQuNGVtO1xyXG59XHJcbi5maXJzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJnIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDE0NnB4O1xyXG4gICAgaGVpZ2h0OiAxNDZweDtcclxufVxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNCU7XHJcbn1cclxuLnBvc2l0aW9uLWNhbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MnB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbn1cclxuLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLmRhc2hib2FyZCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNzczMTI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjU5MDYyNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLmljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEuMTI1ZW07XHJcbn1cclxuLmljb25zIHAge1xyXG4gICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZDYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF0ZSB7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjYyNWVtO1xyXG59XHJcbi5kYXRlIHAge1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuLmltYWdlIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxufVxyXG4uY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyMnB4O1xyXG59XHJcbi5yb3VuZC1pbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogOXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkxOTE5MTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ucm91bmQtaW1nIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC42MjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3MTI1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4ubGlrZXMgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpa2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5saW5lcyB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbiAgICBtYXJnaW46IDE0cHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uY291bnQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLmxpa2VzIC5jb21tZW50IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "kRqK": function kRqK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" icon=\"chevron-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Career</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-icon name=\"notifications-outline\" routerlink=\"/notification\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"firs\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img *ngIf=\"uimg\"  src=\"{{uimg}}\" alt=\"\">\n          <img *ngIf=\"uimg == ''\" src=\"assets/logo-color.png\" style=\"background: #fff; margin-top: 10%; border-radius: 10px; padding: 5px;\">\n        </ion-avatar>\n       \n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"name\">{{uname}}</P>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"number\">{{umobile}}</P>\n    </ion-row>\n  </ion-card>\n\n  <p class=\"dashboard\">Dashboard</p>\n  \n  <ion-card class=\"first\">\n    <ion-row class=\"scroll\" (click)=\"employee()\">\n      <ion-col size=\"9\" style=\"font-size: 24px;\">\n        <p>Employee</p>\n      </ion-col>\n      <ion-col class=\"icons\">\n        <ion-fab-button color=\"light\" routerLink=\"/resume\">\n          <ion-icon name=\"headset-outline\"></ion-icon>\n        </ion-fab-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  \n\n  \n  \n</ion-content>";
      /***/
    },

    /***/
    "neAm": function neAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareerviewPageModule", function () {
        return CareerviewPageModule;
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


      var _careerview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./careerview-routing.module */
      "SdWo");
      /* harmony import */


      var _careerview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./careerview.page */
      "0/Vn");

      var CareerviewPageModule = function CareerviewPageModule() {
        _classCallCheck(this, CareerviewPageModule);
      };

      CareerviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _careerview_routing_module__WEBPACK_IMPORTED_MODULE_5__["CareerviewPageRoutingModule"]],
        declarations: [_careerview_page__WEBPACK_IMPORTED_MODULE_6__["CareerviewPage"]]
      })], CareerviewPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=careerview-careerview-module-es5.js.map