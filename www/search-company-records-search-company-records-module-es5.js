(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-company-records-search-company-records-module"], {
    /***/
    "7LSm": function LSm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".record {\n  text-align: center;\n}\n\n.record ion-title {\n  font-size: 1.125em;\n  padding: 0%;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 0.6px;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.record ion-col {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ellipse ion-icon {\n  font-size: 16px;\n  float: right;\n}\n\n.head-card {\n  border-radius: 3px;\n  height: 2.25em;\n}\n\n.head-card ion-input {\n  border: none;\n  --padding-top: 0%;\n  --padding-bottom: 5px;\n}\n\n.head-card ion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  bottom: 7px;\n}\n\n.border p {\n  color: #707070;\n  margin-top: 6px;\n}\n\n.searc {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.searc .search {\n  width: 2.5em;\n  height: 2em;\n  background-color: white;\n  border-radius: 10%;\n  margin: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search ion-icon {\n  color: #707070;\n  font-size: 18px;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 0.6px;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 56px;\n  height: 56px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.first .time {\n  color: #22272a;\n}\n\nion-card {\n  box-shadow: #00000029 0px 3px 6px;\n}\n\nion-avatar {\n  width: 4em;\n  height: 4em;\n}\n\n.tim p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 0.3125em 0px;\n  text-align: right;\n}\n\n.tim ion-row {\n  float: right;\n}\n\nion-badge {\n  background-color: #d93131;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlYXJjaC1jb21wYW55LXJlY29yZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBY0o7O0FBWEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQWNKOztBQVhBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQWVKOztBQWJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFnQko7O0FBZEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFpQko7O0FBZkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFrQko7O0FBaEJBO0VBQ0ksY0FBQTtBQW1CSjs7QUFoQkE7RUFDSSxpQ0FBQTtBQW1CSjs7QUFqQkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQW9CSjs7QUFqQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBb0JKOztBQWxCQTtFQUNJLFlBQUE7QUFxQko7O0FBbkJBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFzQkoiLCJmaWxlIjoic2VhcmNoLWNvbXBhbnktcmVjb3Jkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjb3JkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVjb3JkIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG5pb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnJlY29yZCBpb24tY29sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmVsbGlwc2UgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5oZWFkLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgaGVpZ2h0OiAyLjI1ZW07XHJcbn1cclxuLmhlYWQtY2FyZCBpb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMCU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmhlYWQtY2FyZCBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcbi5ib3JkZXIgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4uc2VhcmMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNlYXJjIC5zZWFyY2gge1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZWFyY2ggaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMThweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDAuNzVlbSAwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udGltZSB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5maXJzdCAudGltZSB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDI5IDBweCAzcHggNnB4O1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDRlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG59XHJcblxyXG4udGltIHAge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW0gMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRpbSBpb24tcm93IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5pb24tYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MzEzMTtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "P4RQ": function P4RQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchCompanyRecordsPageModule", function () {
        return SearchCompanyRecordsPageModule;
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


      var _search_company_records_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-company-records-routing.module */
      "Z3zA");
      /* harmony import */


      var _search_company_records_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-company-records.page */
      "T9fb");

      var SearchCompanyRecordsPageModule = function SearchCompanyRecordsPageModule() {
        _classCallCheck(this, SearchCompanyRecordsPageModule);
      };

      SearchCompanyRecordsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_company_records_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchCompanyRecordsPageRoutingModule"]],
        declarations: [_search_company_records_page__WEBPACK_IMPORTED_MODULE_6__["SearchCompanyRecordsPage"]]
      })], SearchCompanyRecordsPageModule);
      /***/
    },

    /***/
    "Q0NB": function Q0NB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Velavan Concrete</ion-title>\n    <ion-buttons slot=\"end\" mode=\"md\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"head-card\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-input type=\"text\" placeholder=\"Name\"></ion-input>\n            </ion-col>\n            <ion-col class=\"border\" size=\"2\">\n              <p>|</p>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-input type=\"text\" placeholder=\"Branch\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"2\" class=\"searc\">\n        <p class=\"search\">\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-row>\n    <ion-col>\n      <div class=\"select\">\n        <ion-select placeholder=\"Select One\" value=\"recent\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"recent\" selected>Recents</ion-select-option>\n          <ion-select-option value=\"like\">Orders</ion-select-option>\n          <ion-select-option value=\"favourites\">Enquiry</ion-select-option>\n          <ion-select-option value=\"comments\">Customer</ion-select-option>\n        </ion-select>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-card class=\"first\" routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n        <ion-row class=\"badge\">\n          <ion-badge color=\"primary\">1</ion-badge>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card routerLink=\"/chatbox\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Sarah Walker</p>\n        <p class=\"time\">Lorem ipsum is Simply?</p>\n      </ion-col>\n      <ion-col class=\"tim text-overflow\" size=\"2.5\">\n        <p>12:04PM</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>";
      /***/
    },

    /***/
    "T9fb": function T9fb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchCompanyRecordsPage", function () {
        return SearchCompanyRecordsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_company_records_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-company-records.page.html */
      "Q0NB");
      /* harmony import */


      var _search_company_records_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-company-records.page.scss */
      "7LSm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchCompanyRecordsPage = /*#__PURE__*/function () {
        function SearchCompanyRecordsPage() {
          _classCallCheck(this, SearchCompanyRecordsPage);
        }

        _createClass(SearchCompanyRecordsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchCompanyRecordsPage;
      }();

      SearchCompanyRecordsPage.ctorParameters = function () {
        return [];
      };

      SearchCompanyRecordsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-company-records',
        template: _raw_loader_search_company_records_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_company_records_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchCompanyRecordsPage);
      /***/
    },

    /***/
    "Z3zA": function Z3zA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchCompanyRecordsPageRoutingModule", function () {
        return SearchCompanyRecordsPageRoutingModule;
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


      var _search_company_records_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-company-records.page */
      "T9fb");

      var routes = [{
        path: '',
        component: _search_company_records_page__WEBPACK_IMPORTED_MODULE_3__["SearchCompanyRecordsPage"]
      }];

      var SearchCompanyRecordsPageRoutingModule = function SearchCompanyRecordsPageRoutingModule() {
        _classCallCheck(this, SearchCompanyRecordsPageRoutingModule);
      };

      SearchCompanyRecordsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchCompanyRecordsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-company-records-search-company-records-module-es5.js.map