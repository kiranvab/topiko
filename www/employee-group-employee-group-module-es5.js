(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-group-employee-group-module"], {
    /***/
    "1jrV": function jrV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeGroupPage", function () {
        return EmployeeGroupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_employee_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./employee-group.page.html */
      "mBao");
      /* harmony import */


      var _employee_group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee-group.page.scss */
      "aERi");
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

      var EmployeeGroupPage = /*#__PURE__*/function () {
        function EmployeeGroupPage(actionsheetCtrl, route) {
          _classCallCheck(this, EmployeeGroupPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.segmentModel = "designer";
        }

        _createClass(EmployeeGroupPage, [{
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
                          text: 'View Employee',
                          handler: function handler() {
                            _this.route.navigate(['employee-view']);

                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Rating',
                          handler: function handler() {
                            console.log('Destructive clicked');
                          }
                        }, {
                          text: 'Report',
                          handler: function handler() {
                            console.log('Archive clicked');
                          }
                        }, {
                          text: 'Resignation Letter',
                          handler: function handler() {
                            console.log('Cancel clicked');
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

        return EmployeeGroupPage;
      }();

      EmployeeGroupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      EmployeeGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-group',
        template: _raw_loader_employee_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmployeeGroupPage);
      /***/
    },

    /***/
    "CkFA": function CkFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeGroupPageRoutingModule", function () {
        return EmployeeGroupPageRoutingModule;
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


      var _employee_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employee-group.page */
      "1jrV");

      var routes = [{
        path: '',
        component: _employee_group_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeGroupPage"]
      }];

      var EmployeeGroupPageRoutingModule = function EmployeeGroupPageRoutingModule() {
        _classCallCheck(this, EmployeeGroupPageRoutingModule);
      };

      EmployeeGroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmployeeGroupPageRoutingModule);
      /***/
    },

    /***/
    "L28L": function L28L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeGroupPageModule", function () {
        return EmployeeGroupPageModule;
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


      var _employee_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-group-routing.module */
      "CkFA");
      /* harmony import */


      var _employee_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee-group.page */
      "1jrV");

      var EmployeeGroupPageModule = function EmployeeGroupPageModule() {
        _classCallCheck(this, EmployeeGroupPageModule);
      };

      EmployeeGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _employee_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeGroupPageRoutingModule"]],
        declarations: [_employee_group_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeGroupPage"]]
      })], EmployeeGroupPageModule);
      /***/
    },

    /***/
    "aERi": function aERi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 65px;\n  height: 65px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #871178;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\np {\n  font-size: 12px;\n  color: #9f9f9f;\n  margin: 0%;\n  line-height: 18px;\n}\n\n.lang {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  font-size: 14px;\n  margin: 0px 10px;\n  color: #871178;\n}\n\n.scrol {\n  display: flex;\n  overflow-x: auto;\n  height: 30px;\n  margin-bottom: 10px;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.title ion-icon {\n  color: #871178;\n}\n\n.delivery p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 2px 0px;\n}\n\n.last {\n  padding-top: 0.625em;\n  font-size: 1.2em;\n  color: #871178;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.seperator {\n  margin: 14px 0px;\n  margin-bottom: 25px;\n}\n\nion-row .gps {\n  font-size: 16px;\n  color: #22272a;\n  line-height: 1.3125em;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n  float: right;\n}\n\n.tog {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\n.conf {\n  padding-top: 0px;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n  margin: 6px 0px;\n}\n\n.button ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVtcGxveWVlLWdyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFMQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFjSjs7QUFaQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFlSjs7QUFaQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFlSjs7QUFiQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQWdCSjs7QUFkQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBaUJKOztBQWRBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFpQko7O0FBZkE7RUFDSSxnQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFxQkoiLCJmaWxlIjoiZW1wbG95ZWUtZ3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxOHB4O1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMC43NWVtIDBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udXNlci1uYW1lIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5lbGxpcHNpcyBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4ubGFuZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5zY3JvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLnRpdGxlIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5kZWxpdmVyeSBwIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDJweCAwcHg7XHJcbn1cclxuLmxhc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNjI1ZW07XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi5jaGF0cyAudGV4dCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmNoYXRzIC5udW1iZXIge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5zZXBlcmF0b3Ige1xyXG4gICAgbWFyZ2luOiAxNHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1yb3cgLmdwcyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMxMjVlbTtcclxufVxyXG5pb24tcm93IGlvbi10b2dnbGUge1xyXG4gICAgLS13aWR0aDogMzRweDtcclxuICAgIC0taGVpZ2h0OiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzlmOWY5ZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjcxODc1ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnRvZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3MDcwNzA7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzg3MTE3ODtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiA0O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY29uZiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbmlvbi1jb2wgLmNvbmZpcm0ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDZweCAwcHg7XHJcbn1cclxuLmJ1dHRvbiBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "mBao": function mBao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"https://content3.jdmagicbox.com/comp/chennai/w1/044pxx44.xx44.121221101633.y3w1/catalogue/velavan-concrete-poonamallee-chennai-ht0zkb-250.jpg\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Velavan Concrete <ion-icon name=\"qr-code-outline\"></ion-icon>\n        </p>\n        <p class=\"time\">Maha Lakshmi</p>\n        <p class=\"time\">Tele caller/ Delivery</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu()\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"scrol\">\n      <p class=\"lang\">Telugu</p>\n      <p class=\"lang\">Hindi</p>\n      <p class=\"lang\">English</p>\n      <p class=\"lang\">Tamil</p>\n      <p class=\"lang\">Kannada</p>\n    </div>\n\n    <ion-row class=\"chats scroll\">\n      <ion-col>\n        <p class=\"text\">Chat</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Video</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Call</p>\n        <p class=\"number\">0</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text\">Branches</p>\n        <p class=\"number\">02</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"tog\">\n      <p class=\"gps\">Support Active</p>\n      <ion-toggle checked mode=\"md\"></ion-toggle>\n    </ion-row>\n    <ion-row>\n      <div>\n        <ion-checkbox checked></ion-checkbox>\n      </div>\n      <ion-col class=\"conf\">\n        <p class=\"confirm\">Confirm your acceptance and click call during call you will get OTP (SMS) and procced with\n          your owner</p>\n      </ion-col>\n    </ion-row>\n    <div class=\"button\">\n      <ion-button>Agree & Call</ion-button>\n    </div>\n  </ion-card>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=employee-group-employee-group-module-es5.js.map