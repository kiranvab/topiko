(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partner-partner-module"], {
    /***/
    "Bms8": function Bms8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartnerPageModule", function () {
        return PartnerPageModule;
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


      var _partner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./partner-routing.module */
      "USio");
      /* harmony import */


      var _partner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./partner.page */
      "eCi/");

      var PartnerPageModule = function PartnerPageModule() {
        _classCallCheck(this, PartnerPageModule);
      };

      PartnerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _partner_routing_module__WEBPACK_IMPORTED_MODULE_5__["PartnerPageRoutingModule"]],
        declarations: [_partner_page__WEBPACK_IMPORTED_MODULE_6__["PartnerPage"]]
      })], PartnerPageModule);
      /***/
    },

    /***/
    "USio": function USio(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartnerPageRoutingModule", function () {
        return PartnerPageRoutingModule;
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


      var _partner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./partner.page */
      "eCi/");

      var routes = [{
        path: '',
        component: _partner_page__WEBPACK_IMPORTED_MODULE_3__["PartnerPage"]
      }];

      var PartnerPageRoutingModule = function PartnerPageRoutingModule() {
        _classCallCheck(this, PartnerPageRoutingModule);
      };

      PartnerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PartnerPageRoutingModule);
      /***/
    },

    /***/
    "Xhap": function Xhap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 0.75em 0px;\n  padding: 7px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 65px;\n  height: 65px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.ellipsis ion-icon {\n  font-size: 18px;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\np {\n  font-size: 12px;\n  color: #9f9f9f;\n  margin: 0%;\n  line-height: 18px;\n}\n\n.ellipsis {\n  padding-top: 0.625em;\n  font-size: 1.2em;\n  color: #871178;\n}\n\n.up-img {\n  width: 90px;\n}\n\n.upload p {\n  color: #22272a;\n  font-size: 1em;\n  margin: 12px 5px;\n}\n\n.desp {\n  margin: 8px 5px;\n}\n\n.upload ion-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0em 0.1875em 0.375em #00000029;\n  padding: 1.875em 0.3125em;\n  margin: 0.3125em;\n}\n\n.upload ion-icon {\n  width: 1.25em;\n  height: 1em;\n}\n\n.upload ion-card p {\n  margin: 0px;\n  text-align: center;\n  font-size: 0.5em;\n}\n\n.chec {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.des p {\n  font-size: 1.125em;\n  color: #22272a;\n  margin: 0.3125em;\n}\n\n.text {\n  margin-top: 0.375em;\n  font-size: 0.875em;\n  color: #9f9f9f;\n  border: 1px solid #9f9f9f;\n  border-radius: 0.25em;\n  opacity: 70%;\n  width: 100%;\n  margin: 0.3125em;\n  height: 65px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n}\n\n.button ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.75em;\n  padding-bottom: 1.0625em;\n}\n\n.second {\n  margin-top: 25px;\n}\n\n.second {\n  padding-top: 10px;\n}\n\n.second .avatar ion-avatar {\n  width: 60px;\n  height: 60px;\n}\n\n.lorem {\n  color: #707070;\n  line-height: 1.375em;\n  font-size: 0.75em;\n  padding: 0.625em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhcnRuZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQU9KOztBQXlCQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBdEJKOztBQXlCQTtFQUNJLFdBQUE7QUF0Qko7O0FBd0JBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXJCSjs7QUF1QkE7RUFDSSxlQUFBO0FBcEJKOztBQXNCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFuQko7O0FBcUJBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFsQko7O0FBb0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFqQko7O0FBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFtQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFrQkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWZKOztBQWtCQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBZko7O0FBaUJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFkSjs7QUFnQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFiSjs7QUFlQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFaSjs7QUFlQTtFQUNJLGdCQUFBO0FBWko7O0FBY0E7RUFDSSxpQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFWSjs7QUFZQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFUSiIsImZpbGUiOiJwYXJ0bmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMThweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDAuNzVlbSAwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgIzcwNzA3MDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmVsbGlwc2lzIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4udGltZSB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi8vIC5tYWluIGlvbi1hdmF0YXIge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyB9XHJcbi8vIGlvbi1hdmF0YXIge1xyXG4vLyAgICAgd2lkdGg6IDYxcHg7XHJcbi8vICAgICBoZWlnaHQ6IDYxcHg7XHJcbi8vIH1cclxuLy8gaW9uLWF2YXRhciAuYm9yZGVyIHtcclxuLy8gICAgIGJvcmRlcjogMC4wMTI1ZW0gc29saWQgIzcwNzA3MDtcclxuLy8gfVxyXG4vLyAudGl0bGUge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4vLyB9XHJcbi8vIC50aXRsZSBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuLy8gICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM3NWVtO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuLy8gICAgIG1hcmdpbjogM3B4IDBweDtcclxuLy8gfVxyXG4vLyAudGl0bGUgaW9uLWljb24ge1xyXG4vLyAgICAgY29sb3I6ICMzOWFjMDA7XHJcbi8vIH1cclxuLy8gLm9mZmljZXIgcCB7XHJcbi8vICAgICBjb2xvcjogIzlmOWY5ZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4vLyAgICAgbWFyZ2luOiA0cHggMHB4O1xyXG4vLyB9XHJcbi5lbGxpcHNpcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC42MjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnVwLWltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG4udXBsb2FkIHAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbjogMTJweCA1cHg7XHJcbn1cclxuLmRlc3Age1xyXG4gICAgbWFyZ2luOiA4cHggNXB4O1xyXG59XHJcbi51cGxvYWQgaW9uLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwZW0gMC4xODc1ZW0gMC4zNzVlbSAjMDAwMDAwMjk7XHJcbiAgICBwYWRkaW5nOiAxLjg3NWVtIDAuMzEyNWVtO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxufVxyXG4udXBsb2FkIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAxLjI1ZW07XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxufVxyXG4udXBsb2FkIGlvbi1jYXJkIHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNWVtO1xyXG59XHJcbi5jaGVjIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZGVzIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDAuMzc1ZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZjlmOWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW07XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbmlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjNzA3MDcwO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICM4NzExNzg7XHJcbiAgICAtLWNoZWNrbWFyay13aWR0aDogNDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWNvbCAuY29uZmlybSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjA2MjVlbTtcclxufVxyXG5cclxuLnNlY29uZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5zZWNvbmQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLnNlY29uZCAuYXZhdGFyIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmxvcmVtIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIHBhZGRpbmc6IDAuNjI1ZW07XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "eCi/": function eCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartnerPage", function () {
        return PartnerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_partner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./partner.page.html */
      "uZ8X");
      /* harmony import */


      var _partner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./partner.page.scss */
      "Xhap");
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

      var PartnerPage = /*#__PURE__*/function () {
        function PartnerPage(actionsheetCtrl, route) {
          _classCallCheck(this, PartnerPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.route = route;
          this.segmentModel = "designer";
        }

        _createClass(PartnerPage, [{
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
        }, {
          key: "hideDelete",
          value: function hideDelete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Hide',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            console.log('Destructive clicked');
                          }
                        }]
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
        }]);

        return PartnerPage;
      }();

      PartnerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PartnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-partner',
        template: _raw_loader_partner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_partner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PartnerPage);
      /***/
    },

    /***/
    "uZ8X": function uZ8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Partner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"avatar\">\n  <ion-avatar>\n    <img class=\"border\"\n      src=\"https://content3.jdmagicbox.com/comp/chennai/w1/044pxx44.xx44.121221101633.y3w1/catalogue/velavan-concrete-poonamallee-chennai-ht0zkb-250.jpg\"\n      alt=\"\">\n  </ion-avatar>\n</div>\n<ion-col class=\"text-overflow\">\n  <p class=\"user-name\">Velavan Concrete <ion-icon name=\"qr-code-outline\"></ion-icon>\n  </p>\n  <p class=\"time\">Maha Lakshmi</p>\n  <p class=\"time\">Tele caller/ Delivery</p>\n</ion-col>\n<ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu()\">\n  <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n</ion-col>\n</ion-row> -->\n\n<ion-content>\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\"\n            src=\"https://content3.jdmagicbox.com/comp/chennai/w1/044pxx44.xx44.121221101633.y3w1/catalogue/velavan-concrete-poonamallee-chennai-ht0zkb-250.jpg\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Velavan Concrete</p>\n        <ion-row class=\"officer\">\n          <p class=\"time\">Gopinath Sarvanan</p>\n        </ion-row>\n        <ion-row class=\"officer\">\n          <p class=\"time\">Dispatch Officer</p>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"openMenu()\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"upload\">\n      <p class=\"desc\">Upload Profile Image</p>\n    </ion-row>\n    <ion-row class=\"upload\">\n      <ion-col size=\"4\">\n        <ion-card class=\"up-img\">\n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          <p>upload image</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"des desp\">\n      <p class=\"desc\">Description</p>\n      <textarea class=\"text\" placeholder=\"write something about you\"></textarea>\n    </ion-row>\n\n    <ion-row class=\"chec\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">Confirm your acceptance and click call during call you will get OTP (SMS) and procced with\n          your owner</p>\n      </ion-col>\n    </ion-row>\n    <div class=\"button\">\n      <ion-button>Agree & Call</ion-button>\n    </div>\n  </ion-card>\n\n  <ion-card class=\"second\">\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img\n            src=\"https://einsteinmarketer.ams3.digitaloceanspaces.com/em/uploads/2018/01/ben-sweet-456320-unsplash.jpg\"\n            alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name\">Gopinath Sarvanan</p>\n        <ion-row class=\"officer\">\n          <p class=\"time\">Dispatch Officer</p>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ellipsis\" (click)=\"hideDelete()\">\n        <ion-icon class=\"btn\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"lorem\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate iusto explicabo reprehenderit dicta\n        non unde, esse amet porro, dolore, odit corporis placeat animi velit.</p>\n    </ion-row>\n  </ion-card>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=partner-partner-module-es5.js.map