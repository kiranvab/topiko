(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-contact-chats-contact-module"], {
    /***/
    "OhGK": function OhGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatsContactPageModule", function () {
        return ChatsContactPageModule;
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


      var _chats_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chats-contact-routing.module */
      "VoqF");
      /* harmony import */


      var _chats_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chats-contact.page */
      "cux0");

      var ChatsContactPageModule = function ChatsContactPageModule() {
        _classCallCheck(this, ChatsContactPageModule);
      };

      ChatsContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chats_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatsContactPageRoutingModule"]],
        declarations: [_chats_contact_page__WEBPACK_IMPORTED_MODULE_6__["ChatsContactPage"]]
      })], ChatsContactPageModule);
      /***/
    },

    /***/
    "VoqF": function VoqF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatsContactPageRoutingModule", function () {
        return ChatsContactPageRoutingModule;
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


      var _chats_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chats-contact.page */
      "cux0");

      var routes = [{
        path: '',
        component: _chats_contact_page__WEBPACK_IMPORTED_MODULE_3__["ChatsContactPage"]
      }];

      var ChatsContactPageRoutingModule = function ChatsContactPageRoutingModule() {
        _classCallCheck(this, ChatsContactPageRoutingModule);
      };

      ChatsContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatsContactPageRoutingModule);
      /***/
    },

    /***/
    "cux0": function cux0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatsContactPage", function () {
        return ChatsContactPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chats_contact_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chats-contact.page.html */
      "y/2S");
      /* harmony import */


      var _chats_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chats-contact.page.scss */
      "faXz");
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ChatsContactPage = /*#__PURE__*/function () {
        function ChatsContactPage(storage, router, http, route, navCtrl) {
          _classCallCheck(this, ChatsContactPage);

          this.storage = storage;
          this.router = router;
          this.http = http;
          this.route = route;
          this.navCtrl = navCtrl;
        }

        _createClass(ChatsContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.router.params.subscribe(function (val) {
              _this.storage.get('userdetails').then(function (udetails) {
                _this.userDetails = udetails;
                _this.user_id = _this.userDetails[0].id;
                console.log(_this.user_id, 'User ID');

                _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getcontacts.php?user_id=" + _this.user_id).subscribe(function (Response) {
                  _this.contacts = Response;
                  _this.cntlength = _this.contacts.length;
                  console.log("contacts", Response);
                });
              });
            });
          }
        }, {
          key: "chat",
          value: function chat(i) {
            var _this2 = this;

            this.prtner_id = this.contacts[i].id;
            console.log("partner_id", this.prtner_id);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "createchtroom.php?user_id=" + this.user_id + "&partner_id=" + this.prtner_id).subscribe(function (chatdata) {
              _this2.chresponse = chatdata;
              console.log("Chat Response", _this2.chresponse);

              if (_this2.chresponse != 0) {
                _this2.chatroom = _this2.chresponse[0].chatroom;
                _this2.name = _this2.contacts[i].name;
                _this2.onine = _this2.contacts[i].online_status;
                _this2.lastseen = _this2.contacts[i].last_seen;

                _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "chatmsg_statusupdate.php?chatroom=" + _this2.chatroom).subscribe(function (cdata) {
                  console.log(cdata);
                });

                console.log("chatroom", _this2.chatroom);
                var navigationExtras = {
                  queryParams: {
                    room: _this2.chatroom,
                    name: _this2.name,
                    onine: _this2.onine,
                    last_seen: _this2.lastseen
                  }
                };

                _this2.navCtrl.navigateForward(['/chatbox'], navigationExtras);
              }
            });
          }
        }]);

        return ChatsContactPage;
      }();

      ChatsContactPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }];
      };

      ChatsContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-chats-contact',
        template: _raw_loader_chats_contact_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chats_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChatsContactPage);
      /***/
    },

    /***/
    "faXz": function faXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 0.6px;\n}\n\n.date ion-title {\n  font-size: 10px;\n  margin-top: 7px;\n  letter-spacing: 0px;\n  color: #ffffff;\n}\n\nion-content {\n  --padding-bottom: 65px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-fab-button {\n  --ion-color-base: linear-gradient(#871178, #3c1378) !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #ffffff;\n  font-size: 30px;\n}\n\nion-card {\n  padding: 7px;\n  padding-left: 10px;\n  margin: 7px 0px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.group ion-col {\n  padding-left: 10px;\n}\n\n.group {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.group p {\n  color: #871178;\n  font-size: 17px;\n  font-weight: bold;\n  padding: 0px;\n  margin-top: 18px;\n}\n\n.avatar ion-avatar {\n  width: 56px;\n  height: 56px;\n}\n\n.num {\n  color: #22272a;\n  font-size: 14px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px 5px 3px 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 4px 0px 4px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXRzLWNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBREE7RUFDSSw4REFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVNKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBWUoiLCJmaWxlIjoiY2hhdHMtY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxufVxyXG4uZGF0ZSBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDY1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxOHB4O1xyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCkgIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDdweCAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuLmdyb3VwIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5ncm91cCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmdyb3VwIHAge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxufVxyXG4ubnVtIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCA1cHggM3B4IDBweDtcclxufVxyXG4udGltZSB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogNHB4IDBweCA0cHggMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "y/2S": function y2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Contacts</ion-title>\n    <ion-row class=\"date\">\n      <ion-title>{{cntlength}} Contacts</ion-title>\n    </ion-row>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n <!--  <ion-grid class=\"group\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"people\"></ion-icon>\n        </ion-fab-button>\n      </div>\n      <ion-col>\n        <p>New group</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"group\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"person-add\"></ion-icon>\n        </ion-fab-button>\n      </div>\n      <ion-col>\n        <p>New Contact</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-card class=\"name\" *ngFor=\"let cnt of contacts; let i=index\" (click)=\"chat(i)\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"num\">{{cnt.name}}</p>\n        <p class=\"num\">{{cnt.city}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=chats-contact-chats-contact-module-es5.js.map