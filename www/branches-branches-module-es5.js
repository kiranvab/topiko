(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branches-branches-module"], {
    /***/
    "7zc+": function zc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesPageModule", function () {
        return BranchesPageModule;
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


      var _branches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./branches-routing.module */
      "IPBg");
      /* harmony import */


      var _branches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./branches.page */
      "KFnR");

      var BranchesPageModule = function BranchesPageModule() {
        _classCallCheck(this, BranchesPageModule);
      };

      BranchesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _branches_routing_module__WEBPACK_IMPORTED_MODULE_5__["BranchesPageRoutingModule"]],
        declarations: [_branches_page__WEBPACK_IMPORTED_MODULE_6__["BranchesPage"]]
      })], BranchesPageModule);
      /***/
    },

    /***/
    "IPBg": function IPBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesPageRoutingModule", function () {
        return BranchesPageRoutingModule;
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


      var _branches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./branches.page */
      "KFnR");

      var routes = [{
        path: '',
        component: _branches_page__WEBPACK_IMPORTED_MODULE_3__["BranchesPage"]
      }];

      var BranchesPageRoutingModule = function BranchesPageRoutingModule() {
        _classCallCheck(this, BranchesPageRoutingModule);
      };

      BranchesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BranchesPageRoutingModule);
      /***/
    },

    /***/
    "JyFz": function JyFz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" icon=\"chevron-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Branches</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"getBranches()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor=\"let branch of branches; let i = index;\">\n    <ion-row>\n      <ion-col size=\"8\" class=\"address\">\n        <span style=\"color:#871178;\">{{branch.branch_title}}</span>\n        <p><b>Address :</b><br>\n          {{branch.branch_address}}\n          {{branch.branch_area}}\n          {{branch.branch_city}}\n          {{branch.branch_state}}\n          {{branch.branch_pincode}}\n          {{branch.branch_country}}\n        </p>\n        <span style=\"color: #871178;\">{{branch.created_date}} - {{branch.created_time}}</span>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img src=\"https://localsearchforum.com/attachments/maps-embed-api-example-png.3469/\" class=\"img\">\n      </ion-col>\n      <ion-col style=\"text-align: right;\">\n        <ion-icon name=\"ellipsis-vertical\"  (click)=\"openMenu(i)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/addbranches\">\n    <ion-fab-button>\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
      /***/
    },

    /***/
    "KFnR": function KFnR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesPage", function () {
        return BranchesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_branches_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./branches.page.html */
      "JyFz");
      /* harmony import */


      var _branches_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./branches.page.scss */
      "aWVi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var BranchesPage = /*#__PURE__*/function () {
        function BranchesPage(storage, http, router, actionsheetCtrl, alertController) {
          _classCallCheck(this, BranchesPage);

          this.storage = storage;
          this.http = http;
          this.router = router;
          this.actionsheetCtrl = actionsheetCtrl;
          this.alertController = alertController;
        }

        _createClass(BranchesPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getBranches();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bid").then(function (val) {
              _this.buid = val;
              console.log(_this.buid);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].ApiUrl + "getbranches.php?bid=" + _this.buid).subscribe(function (data) {
                _this.branches = data;
                console.log("Branches", _this.branches);
              });
            });
            this.getBranches();
          }
        }, {
          key: "getBranches",
          value: function getBranches() {
            var _this2 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].ApiUrl + "getbranches.php?bid=" + this.buid).subscribe(function (data) {
              _this2.branches = data;
              console.log("Branches", _this2.branches);
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Edit',
                          handler: function handler() {
                            _this3.storage.set("brid", _this3.branches[i].id);

                            console.log("brid", _this3.branches[i].id);

                            _this3.router.navigate(['edit-branch']);
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this3.presentAlertConfirm(i);

                            _this3.router.navigate(['branches']);
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
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: 'Are You Sure you want to <strong>Delete</strong> Branch!!!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Confirm Okay');
                            console.log(_this4.branches[i].id);

                            _this4.http.get(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].ApiUrl + "deletebranch.php?brid=" + _this4.branches[i].id).subscribe(function (data) {
                              console.log("Response", data);

                              _this4.getBranches();

                              _this4.AlertDelete();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "AlertDelete",
          value: function AlertDelete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Deleted!',
                        message: 'Branch has been deleted sucesfully.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      this.router.navigate(['/branches']);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return BranchesPage;
      }();

      BranchesPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      BranchesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-branches',
        template: _raw_loader_branches_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_branches_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BranchesPage);
      /***/
    },

    /***/
    "aWVi": function aWVi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".adress p {\n  margin: 17px 0px;\n}\n\n.add {\n  font-size: 40px;\n  color: #871178;\n}\n\n.adds {\n  padding: 10px;\n  color: purple;\n  font-size: 20px;\n}\n\n.title {\n  text-align: center;\n}\n\nion-header ion-title {\n  color: #FFFFFF;\n  font-size: 18px;\n}\n\n.ellipsis ion-icon {\n  font-size: 22px;\n  color: #FFFFFF;\n}\n\n.img {\n  padding: 5px;\n  max-width: 90px;\n}\n\nion-card {\n  padding: 5px;\n  margin: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJyYW5jaGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBRUEsY0FBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNGLGVBQUE7QUFJRjs7QUFGQTtFQUNBLGVBQUE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBT0oiLCJmaWxlIjoiYnJhbmNoZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkcmVzcyBwe1xyXG4gICAgbWFyZ2luOiAxN3B4IDBweDtcclxufVxyXG4uYWRke1xyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcblxyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB9XHJcbi5hZGRze1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taGVhZGVyIGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZWxsaXBzaXMgaW9uLWljb257XHJcbmZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbn1cclxuLmltZ3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgbWF4LXdpZHRoOjkwcHg7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=branches-branches-module-es5.js.map