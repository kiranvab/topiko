(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourites-favourites-module"], {
    /***/
    "4i5R": function i5R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritesPageRoutingModule", function () {
        return FavouritesPageRoutingModule;
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


      var _favourites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favourites.page */
      "IJ/m");

      var routes = [{
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_3__["FavouritesPage"]
      }];

      var FavouritesPageRoutingModule = function FavouritesPageRoutingModule() {
        _classCallCheck(this, FavouritesPageRoutingModule);
      };

      FavouritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavouritesPageRoutingModule);
      /***/
    },

    /***/
    "IJ/m": function IJM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritesPage", function () {
        return FavouritesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_favourites_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./favourites.page.html */
      "T2Gt");
      /* harmony import */


      var _favourites_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./favourites.page.scss */
      "eSf5");
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

      var FavouritesPage = /*#__PURE__*/function () {
        function FavouritesPage(actionsheetCtrl, route, storage, http) {
          var _this = this;

          _classCallCheck(this, FavouritesPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.storage = storage;
          this.http = http;
          this.segmentModel = "business";
          this.storage.get("userdetails").then(function (val) {
            _this.udata = val;
            _this.user_id = _this.udata[0].id;

            _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "myfavorites.php?user_id=" + _this.user_id).subscribe(function (response) {
              _this.myfav = response;
              console.log('Myfavourite shops', _this.myfav);
            });

            _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "myfavproducts.php?user_id=" + _this.user_id).subscribe(function (response) {
              _this.myfavP = response;
              console.log('Myfavourite Products', _this.myfavP);
            });
          });
        }

        _createClass(FavouritesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openMenu",
          value: function openMenu(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Un Favourite',
                          handler: function handler() {
                            alert("Request Submitted");
                          }
                        }, {
                          text: 'Mute Notification',
                          handler: function handler() {
                            alert("Notifications Muted.");
                          }
                        }, {
                          text: 'Customer Care',
                          handler: function handler() {
                            _this2.storage.set("bid", _this2.myfav[i].id);

                            _this2.route.navigate(['connect']);
                          }
                        }, {
                          text: 'Reach',
                          handler: function handler() {
                            alert("Reach us on 040-1111111");
                          }
                        }, {
                          text: 'Report',
                          handler: function handler() {
                            alert("mail us on compliance@topiko.com");
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
          key: "Details",
          value: function Details(i) {
            this.storage.set("fav_id", this.myfav[i].id);
            this.route.navigate(['favourite-details']);
          }
        }]);

        return FavouritesPage;
      }();

      FavouritesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      FavouritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-favourites',
        template: _raw_loader_favourites_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favourites_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FavouritesPage);
      /***/
    },

    /***/
    "LLgE": function LLgE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritesPageModule", function () {
        return FavouritesPageModule;
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


      var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favourites-routing.module */
      "4i5R");
      /* harmony import */


      var _favourites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favourites.page */
      "IJ/m");

      var FavouritesPageModule = function FavouritesPageModule() {
        _classCallCheck(this, FavouritesPageModule);
      };

      FavouritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritesPageRoutingModule"]],
        declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_6__["FavouritesPage"]]
      })], FavouritesPageModule);
      /***/
    },

    /***/
    "T2Gt": function T2Gt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Favourites</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-segment value=\"all\" scrollable=\"true\" mode=\"md\" color=\"secondary\" [(ngModel)]=\"segmentModel\">\n    <ion-segment-button value=\"business\">\n      <ion-label>Business</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"product\">\n      <ion-label>Product</ion-label>\n    </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content>\n  \n\n    <!-- Favourite business start -->\n    <div *ngIf=\"segmentModel === 'business'\">\n  <ion-card *ngFor=\"let fav of myfav; let i=index;\" >\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"{{fav.logo}}\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\" (click)=\"Details(i)\">\n        <p class=\"user-name\">{{fav.business_name}} <ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>\n            <p>4.1 Ratings</p>\n          </span>\n        </ion-row>\n        <p class=\"time\">CEO-{{fav.owner_name}}</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu(i)\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dat\">\n      <p class=\"date\">{{fav.created_date}}</p>\n    </ion-row>\n  </ion-card>\n</div>\n<!-- Favourite business end -->\n\n<!-- Favoutrite produst start-->\n<div *ngIf=\"segmentModel === 'product'\">\n  <ion-card *ngFor=\"let fav of myfavP; let i=index;\" >\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"{{fav.product_image}}\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\" (click)=\"Details(i)\">\n        <p class=\"user-name\">{{fav.title}} <ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n           <p class=\"time\">{{fav.description}}</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu(i)\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dat\">\n      <p class=\"date\">{{fav.created_date}}</p>\n    </ion-row>\n  </ion-card>\n</div>\n<!-- Favoutrite produst End-->\n\n</ion-content>\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"heart\" class=\"click-footer\"></ion-icon>\n      <p class=\"click-footer\">Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "eSf5": function eSf5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-top: 10px;\n  --padding-bottom: 65px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\nion-card {\n  margin: 8px 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  margin-top: 5px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star span p {\n  font-size: 8px;\n  padding-left: 5px;\n  color: #22272a;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\np {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.date {\n  text-align: right;\n  color: #9f9f9f !important;\n  font-size: 12px !important;\n  width: 100%;\n  margin-right: 7px;\n}\n\n.dat {\n  height: 0px;\n}\n\n.dat p {\n  position: relative;\n  bottom: 16px;\n}\n\nion-segment {\n  background: #f5f5f5;\n  color: #707070;\n  font-size: 0.9375em;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSwyQkFBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0FBU0o7O0FBUEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFXSjs7QUFUQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtBQWFKOztBQVhBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFnQko7O0FBYkE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWdCSjs7QUFkQTtFQUNJLDBCQUFBO0FBaUJKIiwiZmlsZSI6ImZhdm91cml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDY1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG4uYXZhdGFyIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbn1cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkICM3MDcwNzA7XHJcbn1cclxuLnVzZXItbmFtZSB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi51c2VyLW5hbWUgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMzOWFjMDA7XHJcbn1cclxuLnN0YXIge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5zdGFyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmNiOTAwO1xyXG59XHJcbi5zdGFyIHNwYW4gcCB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uZWxsaXBzaXMgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM5ZjlmOWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG4uZGF0IHtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcbi5kYXQgcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1ZW07XHJcbn1cclxuaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=favourites-favourites-module-es5.js.map