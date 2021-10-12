(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"], {
    /***/
    "3lYr": function lYr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemPage", function () {
        return ItemPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./item.page.html */
      "shpZ");
      /* harmony import */


      var _item_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./item.page.scss */
      "P1b3");
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


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var ItemPage = /*#__PURE__*/function () {
        function ItemPage(storage, router, http) {
          _classCallCheck(this, ItemPage);

          this.storage = storage;
          this.router = router;
          this.http = http;
        }

        _createClass(ItemPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bname").then(function (name) {
              _this.bname = name;
            });
            this.storage.get("userdetails").then(function (val) {
              _this.udata = val;
              _this.user_id = _this.udata[0].id;
            }); // Get Recent Viewed

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "recentviews.php?user_id=" + this.user_id).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.recent = data;
                        console.log(this.recent);

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
            this.storage.get("prid").then(function (pval) {
              _this.product_id = pval;

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getproduct_details.php?prid=" + _this.product_id).subscribe(function (response) {
                _this.pdtails = response;
                console.log('Prdouct details', _this.pdtails);
              });
            });
          }
        }, {
          key: "share",
          value: function share() {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_share.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(function (shareres) {
              console.log(shareres);
            });
          }
        }, {
          key: "like",
          value: function like() {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_like.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(function (likeres) {
              console.log(likeres);
            });
          }
        }, {
          key: "fav",
          value: function fav() {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_fav.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(function (favres) {
              console.log(favres);
            });
          }
        }, {
          key: "comment",
          value: function comment() {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_comment.php?pid=" + this.product_id + "&user_id=" + this.user_id).subscribe(function (commentres) {
              console.log(commentres);
            });
          }
        }, {
          key: "Callcc",
          value: function Callcc() {
            this.router.navigate(['connect']);
          }
        }, {
          key: "details",
          value: function details(i) {
            //console.log(this.recent[i].id);
            this.storage.set("bid", this.recent[i].id);
            this.router.navigate(['/details']);
          }
        }]);

        return ItemPage;
      }();

      ItemPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-item',
        template: _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ItemPage);
      /***/
    },

    /***/
    "Aiwa": function Aiwa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemPageRoutingModule", function () {
        return ItemPageRoutingModule;
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


      var _item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./item.page */
      "3lYr");

      var routes = [{
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_3__["ItemPage"]
      }];

      var ItemPageRoutingModule = function ItemPageRoutingModule() {
        _classCallCheck(this, ItemPageRoutingModule);
      };

      ItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ItemPageRoutingModule);
      /***/
    },

    /***/
    "P1b3": function P1b3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".knife {\n  margin: 1em 1.125em;\n  background: transparent;\n  box-shadow: none;\n}\n\n.knife img {\n  border-radius: 8px;\n  width: 100%;\n  height: 217px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-grid {\n  margin: 0px 0.8125em;\n}\n\n.title {\n  margin-top: 0.5em;\n  padding-left: 0%;\n}\n\n.title p {\n  font-size: 1.125em;\n  font-weight: bold;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 3px 0px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star p {\n  font-size: 0.5em;\n  padding-left: 5px;\n}\n\n.second-row ion-col {\n  margin: 0.25em 0px;\n  padding-left: 0%;\n}\n\n.second-row p {\n  font-size: 1em;\n  font-weight: bold;\n  color: #22272a;\n  margin: 0%;\n}\n\n.second-row .rt {\n  text-align: right;\n}\n\nspan {\n  padding-left: 0.375em;\n  color: #22272a;\n  font-size: 0.875em;\n  margin: 8px 0px;\n}\n\n.rs {\n  color: #871178;\n}\n\n.real-price {\n  text-decoration: line-through;\n  color: #9f9f9f;\n}\n\n.off {\n  color: #39ac00;\n  font-size: 0.625em;\n}\n\n.third-row p {\n  font-weight: bold;\n  margin: 0.3125em 0em;\n}\n\n.fourth-row p {\n  font-weight: normal;\n  margin: 0.3125em 0em;\n}\n\n.fourth-row span {\n  font-size: 0.75em;\n  color: #39ac00;\n}\n\n.fifth-row h6 {\n  color: #22272a;\n  font-weight: bold;\n}\n\n.fifth-row p {\n  color: #707070;\n  line-height: 1.375em;\n  letter-spacing: 0.11px;\n  margin: 0%;\n}\n\n.first {\n  background: #ebebeb;\n  margin: 1em 1.125em;\n  box-shadow: none;\n  border-radius: 0%;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\n.head {\n  font-size: 1em;\n}\n\nion-fab-button {\n  --ion-color-base: #ffffff !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 36px;\n  width: 36px;\n}\n\n.icon-img-recent {\n  border-radius: 5px;\n  width: 100%;\n  height: 100px;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0FBTUo7O0FBSkE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQVFKOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBT0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7QUFTSjs7QUFQQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUEE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV0oiLCJmaWxlIjoiaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbWFnZVxyXG4ua25pZmUge1xyXG4gICAgbWFyZ2luOiAxZW0gMS4xMjVlbTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ua25pZmUgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMTdweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4vLyBncmlkXHJcbmlvbi1ncmlkIHtcclxuICAgIG1hcmdpbjogMHB4IDAuODEyNWVtO1xyXG59XHJcblxyXG4vLyBmaXJzdC1yb3dcclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4udGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbjogM3B4IDBweDtcclxufVxyXG4udGl0bGUgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMzOWFjMDA7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbn1cclxuLnN0YXIgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8vIHNlY29uZC1yb3dcclxuLnNlY29uZC1yb3cgaW9uLWNvbCB7XHJcbiAgICBtYXJnaW46IDAuMjVlbSAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG59XHJcbi5zZWNvbmQtcm93IHAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAwJTtcclxufVxyXG4uc2Vjb25kLXJvdyAucnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMzc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxufVxyXG4ucnMge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnJlYWwtcHJpY2Uge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxufVxyXG4ub2ZmIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjYyNWVtO1xyXG59XHJcblxyXG4vLyB0aGlyZC1yb3dcclxuLnRoaXJkLXJvdyBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbSAwZW07XHJcbn1cclxuXHJcbi8vIGZvdXJ0aC1yb3dcclxuLmZvdXJ0aC1yb3cgcCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbSAwZW07XHJcbn1cclxuLmZvdXJ0aC1yb3cgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcblxyXG4vLyBmaWZ0aC1yb3dcclxuLmZpZnRoLXJvdyBoNiB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5maWZ0aC1yb3cgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTFweDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuXHJcbi8vIGNhcmRcclxuLmZpcnN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICBtYXJnaW46IDFlbSAxLjEyNWVtO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbi5pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxLjEyNWVtO1xyXG59XHJcbi5pY29ucyBwIHtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLy8gZmFiXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNC4zNzVlbTtcclxuICAgIHdpZHRoOiA0LjM3NWVtO1xyXG59XHJcbi5mYWIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxufVxyXG5cclxuLmljb24taW1nLXJlY2VudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pbWctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "bzNi": function bzNi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemPageModule", function () {
        return ItemPageModule;
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


      var _item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./item-routing.module */
      "Aiwa");
      /* harmony import */


      var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./item.page */
      "3lYr");

      var ItemPageModule = function ItemPageModule() {
        _classCallCheck(this, ItemPageModule);
      };

      ItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemPageRoutingModule"]],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]]
      })], ItemPageModule);
      /***/
    },

    /***/
    "shpZ": function shpZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{bname}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let pd of pdtails\">\n    <ion-card class=\"knife\">\n      <img src=\"{{pd.product_image}}\" style=\"width:100%; height:200px\" alt=\"\">\n    </ion-card>\n\n    <ion-grid class=\"grid\">\n      <ion-row class=\"first-row\">\n        <ion-col class=\"title\">\n          <p>{{bname}}<ion-icon name=\"shield-checkmark\"></ion-icon>\n          </p>\n          <ion-row class=\"star\">\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <p>4.1 Ratings</p>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col size=\"5\">\n          <p>{{pd.title}}</p>\n        </ion-col>\n        <ion-col class=\"rt\">\n          <span>Price-</span>\n          <span class=\"rs\">Rs{{pd.discount}} </span>\n          <span class=\"real-price\">{{pd.mrp}} </span>\n          <span class=\"off\">{{pd.discount_price}} Off</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"third-row\">\n        <p>Per Piece</p>\n      </ion-row>\n      <ion-row class=\"fourth-row\">\n        <p>Cash on Delivery <span>Available</span></p>\n      </ion-row>\n      <ion-row class=\"fifth-row\">\n        <h6 style=\"font-size: 16px;\">Description</h6>\n      </ion-row>\n      <ion-row>\n        <p style=\"color: #707070; font-size: 14px; margin-top: 0%; margin-bottom: -8px;\"> {{pd.description}}</p>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card class=\"first\">\n      <ion-row>\n        <ion-col size=\"3\" class=\"icons\" (click)=\"share()\">\n          <ion-fab-button color=\"light\">\n            <ion-icon name=\"share-social-outline\"></ion-icon>\n          </ion-fab-button>\n          <p>Share</p>\n        </ion-col>\n        <ion-col size=\"3\" class=\"icons\" (click)=\"like()\">\n          <ion-fab-button color=\"light\">\n            <ion-icon name=\"thumbs-up-outline\"></ion-icon>\n          </ion-fab-button>\n          <p>Like</p>\n        </ion-col>\n        <ion-col size=\"3\" class=\"icons\" (click)=\"fav()\">\n          <ion-fab-button color=\"light\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </ion-fab-button>\n          <p>Favourite</p>\n        </ion-col>\n        <ion-col size=\"3\" class=\"icons\" (click)=\"comment()\">\n          <ion-fab-button color=\"light\">\n            <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n          </ion-fab-button>\n          <p>Comment</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <ion-row style=\"display: none;\">\n    <ion-col class=\"head\">Similar Products</ion-col>\n    <ion-col size=\"3\" class=\"view-all\">View All</ion-col>\n  </ion-row>\n\n  <ion-row style=\"display: none;\">\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n    <ion-col><img src=\"https://images.railyatri.in/ry_images_prod/whatsapp-post-1570614557.jpg\"></ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin: 0 10px;\">\n    <ion-col class=\"head\">Recently Viewed</ion-col>\n    <ion-col size=\"3\" class=\"view-all\" routerLink=\"/recent\">View All</ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin: 0 10px;\">\n    <ion-col size=\"4\" class=\"p-0\" *ngFor=\"let rec of recent;  let i=index\" (click)=\"details(i)\">\n      <img *ngIf=\"rec.logo\" class=\"icon-img-recent\" src=\"{{rec.logo}}\">\n      <img *ngIf=\"rec.logo == ''\" class=\"icon-img-recent\" src=\"assets/logo-color.png\"\n        style=\"padding: 10px; background: #fafafa; border-radius: 10px;\">\n      <div class=\"img-title center text-center p-0\" text-center>{{rec.business_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"fab\" (click)=\"Callcc()\">\n      <ion-icon name=\"headset-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=item-item-module-es5.js.map