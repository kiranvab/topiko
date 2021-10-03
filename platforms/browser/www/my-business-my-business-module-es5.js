(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-business-my-business-module"], {
    /***/
    "1HRw": function HRw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyBusinessPage", function () {
        return MyBusinessPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_business_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-business.page.html */
      "M7pn");
      /* harmony import */


      var _my_business_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-business.page.scss */
      "t+uF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var MyBusinessPage = /*#__PURE__*/function () {
        function MyBusinessPage(actionsheetCtrl, route, storage, http, router, toastController) {
          _classCallCheck(this, MyBusinessPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.storage = storage;
          this.http = http;
          this.router = router;
          this.toastController = toastController;
        }

        _createClass(MyBusinessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.router.params.subscribe(function (val) {
              _this.storage.get("userdetails").then(function (val) {
                _this.udata = val;
                console.log("USer Data", _this.udata);
                _this.uid = _this.udata[0].id;

                _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "mybusiness.php?user_id=" + _this.uid).subscribe(function (data) {
                  _this.mybusiness = data;

                  _this.storage.set("mybusiness", _this.mybusiness);

                  _this.bid = _this.mybusiness[0].id;
                  console.log("MyBusiness ID", _this.bid);

                  _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getviewcount.php?bid=" + _this.bid).subscribe(function (viewData) {
                    _this.viewedcnt = viewData;
                    console.log("View Count", _this.viewedcnt);
                  });

                  _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getfavcount.php?bid=" + _this.bid).subscribe(function (viewData) {
                    _this.favouritecnt = viewData;
                    console.log("Favoutire Count", _this.favouritecnt);
                  });

                  _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getlikescount.php?bid=" + _this.bid).subscribe(function (likeData) {
                    _this.likescnt = likeData;
                    console.log("Likes Count", _this.likescnt);
                  });

                  _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getreviewcount.php?bid=" + _this.bid).subscribe(function (revData) {
                    _this.reviewcnt = revData;
                    console.log("Review Count", _this.reviewcnt);
                  });
                });
              });
            });
          }
        }, {
          key: "checkbusiness",
          value: function checkbusiness() {
            var _this2 = this;

            console.log("Business Exist;");
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "checkbcount.php?user_id=" + this.uid).subscribe(function (response) {
              console.log("Business Count", response);

              if (response == 1) {
                _this2.presentToast();
              } else {
                _this2.route.navigate(['create-business']);
              }
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Free User Can Add Only 1 business',
                        duration: 2000,
                        color: 'secondary',
                        position: "middle"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          //   text: 'Plans',  
                          //   handler: () => {  
                          //     this.route.navigate(['plans']);
                          //     console.log('Destructive clicked');  
                          //   }  
                          // },{  
                          //   text: 'Verification',  
                          //   handler: () => {  
                          //     this.route.navigate(['verification'])
                          //     console.log('Archive clicked');  
                          //   }  
                          // },  {  
                          text: 'Show Case',
                          handler: function handler() {
                            console.log('Cancel clicked');

                            _this3.route.navigate(['/showcase']);
                          }
                        } // {  
                        //   text: 'Promotion',  
                        //   handler: () => {  
                        //     console.log('Promotions clicked');  
                        //   },  
                        // }    
                        ]
                      });

                    case 2:
                      actionSheet = _context2.sent;
                      _context2.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "details",
          value: function details(i) {
            var _this4 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "business_details.php?id=" + this.mybusiness[i].id).subscribe(function (bdata) {
              _this4.bdetails = bdata;
              console.log(_this4.bdetails);
              var navigationExtras = {
                queryParams: {
                  businessdata: JSON.stringify(_this4.bdetails)
                }
              };

              _this4.route.navigate(['business-details'], navigationExtras);
            });
          }
        }, {
          key: "views",
          value: function views() {
            this.storage.set("bid", this.bid);
            this.route.navigate(['business-views']);
          }
        }]);

        return MyBusinessPage;
      }();

      MyBusinessPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      MyBusinessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-my-business',
        template: _raw_loader_my_business_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_business_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyBusinessPage);
      /***/
    },

    /***/
    "EHqV": function EHqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyBusinessPageRoutingModule", function () {
        return MyBusinessPageRoutingModule;
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


      var _my_business_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-business.page */
      "1HRw");

      var routes = [{
        path: '',
        component: _my_business_page__WEBPACK_IMPORTED_MODULE_3__["MyBusinessPage"]
      }];

      var MyBusinessPageRoutingModule = function MyBusinessPageRoutingModule() {
        _classCallCheck(this, MyBusinessPageRoutingModule);
      };

      MyBusinessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyBusinessPageRoutingModule);
      /***/
    },

    /***/
    "M7pn": function M7pn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let business of mybusiness; let i = index;\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"{{business.logo}}\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\" (click)=\"details(i)\">\n        <p class=\"user-name pclass\">{{business.business_name}} <ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>\n            <p class=\"pclass\">4.1 Ratings</p>\n          </span>\n        </ion-row>\n        <p class=\"time pclass\">{{business.owner_name}}</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu()\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"reg text-overflow\">\n        <p class=\"pclass\">Free Package</p>\n      </ion-col>\n      <ion-col size=\"4\" class=\"topup\" routerLink=\"/contact\">\n        <ion-button>Top up</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"chats scroll\" (click)=\"views()\">\n      <ion-col>\n        <p class=\"text\">Viewed</p>\n        <p class=\"number\">{{viewedcnt}}</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Likes</p>\n        <p class=\"number\">{{likescnt}}</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Reviews</p>\n        <p class=\"number\">{{reviewcnt}}</p>\n      </ion-col>\n      <ion-col class=\"sep\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text\">Favourite</p>\n        <p class=\"number\">{{favouritecnt}}</p>\n      </ion-col>\n    </div>\n  </ion-card>\n\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"checkbusiness()\">\n    <ion-fab-button class=\"fab\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "t+uF": function tUF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 8px;\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  margin-top: 5px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star span p {\n  font-size: 0.5em;\n  padding-left: 5px;\n  color: #22272a;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.reg {\n  display: flex;\n  align-items: center;\n}\n\n.reg p {\n  color: #9f9f9f;\n  font-size: 14px;\n}\n\n.topup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.topup ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  width: 6em;\n  height: 1.75em;\n  --border-radius: 13px;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 1em;\n  text-align: center;\n  line-height: 0;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 1.25em;\n  text-align: center;\n  margin: 0%;\n  line-height: 1;\n  margin-bottom: 0px;\n  margin-top: 21px;\n}\n\n.sep {\n  margin: 12px 0px;\n  margin-top: 20px;\n  padding: 0%;\n  border-right: 1px solid #d5d5d5;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 45px;\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL215LWJ1c2luZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksMkJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVkE7RUFDSSxlQUFBO0FBYUo7O0FBVkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaUJKOztBQWZBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQW1CSjs7QUFmQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFtQkoiLCJmaWxlIjoibXktYnVzaW5lc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE4cHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjFweDtcclxuICAgIGhlaWdodDogNjFweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnVzZXItbmFtZSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxufVxyXG4uc3RhciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbn1cclxuLnN0YXIgc3BhbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG59XHJcbi50aW1lIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnBjbGFzcyB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmVsbGlwc2lzIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnJlZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmVnIHAge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRvcHVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRvcHVwIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB3aWR0aDogNmVtO1xyXG4gICAgaGVpZ2h0OiAxLjc1ZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuLmNoYXRzIC50ZXh0IHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufVxyXG4uY2hhdHMgLm51bWJlciB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjFweDtcclxufVxyXG4uc2VwIHtcclxuICAgIG1hcmdpbjogMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDVkNWQ1O1xyXG59XHJcblxyXG4vLyBmYWJcclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA0LjM3NWVtO1xyXG4gICAgd2lkdGg6IDQuMzc1ZW07XHJcbn1cclxuLmZhYiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "tg+D": function tgD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyBusinessPageModule", function () {
        return MyBusinessPageModule;
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


      var _my_business_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-business-routing.module */
      "EHqV");
      /* harmony import */


      var _my_business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-business.page */
      "1HRw");

      var MyBusinessPageModule = function MyBusinessPageModule() {
        _classCallCheck(this, MyBusinessPageModule);
      };

      MyBusinessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_business_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyBusinessPageRoutingModule"]],
        declarations: [_my_business_page__WEBPACK_IMPORTED_MODULE_6__["MyBusinessPage"]]
      })], MyBusinessPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-business-my-business-module-es5.js.map