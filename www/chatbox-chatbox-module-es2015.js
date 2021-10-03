(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chatbox-chatbox-module"],{

/***/ "3nvi":
/*!*******************************************!*\
  !*** ./src/app/chatbox/chatbox.module.ts ***!
  \*******************************************/
/*! exports provided: ChatboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxPageModule", function() { return ChatboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chatbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatbox-routing.module */ "KKsG");
/* harmony import */ var _chatbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatbox.page */ "BnJ5");







let ChatboxPageModule = class ChatboxPageModule {
};
ChatboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chatbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatboxPageRoutingModule"]
        ],
        declarations: [_chatbox_page__WEBPACK_IMPORTED_MODULE_6__["ChatboxPage"]]
    })
], ChatboxPageModule);



/***/ }),

/***/ "6jJ/":
/*!*******************************************!*\
  !*** ./src/app/chatbox/chatbox.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar ion-avatar {\n  height: 42px;\n  width: 42px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  text-align: left;\n  line-height: 19px;\n}\n\n.dat ion-title {\n  font-size: 10px;\n  letter-spacing: 0px;\n  color: #ffffff;\n}\n\nion-header ion-icon {\n  font-size: 20px;\n  color: #ffffff;\n}\n\nion-content {\n  --background: #d6d6d6;\n}\n\n.div-date {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #e9e9e9;\n  border-radius: 1em;\n  margin-top: 0.625em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #707070;\n}\n\n.chat-lbox {\n  border-radius: 0px 8px 8px 8px;\n  max-width: 80%;\n  padding: 6px;\n  box-shadow: none;\n  margin: 10px;\n  background: #fff;\n}\n\n.time {\n  float: right;\n}\n\n.time p {\n  color: #cecece;\n  font-size: 0.625em;\n  padding-right: 0.3125em;\n  margin: 0%;\n}\n\n.left-chat {\n  background-color: #fff;\n  text-align: left;\n  padding-bottom: 0%;\n}\n\n.title {\n  color: #871178;\n  font-size: 16px;\n  font-weight: bold;\n  margin: 4px 0px;\n  margin-top: 0%;\n  display: none;\n}\n\n.subtitle {\n  color: #22272a;\n  font-size: 14px;\n  margin: 4px 0px;\n  margin-bottom: 0%;\n}\n\n.rt {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.chat-rbox {\n  border-radius: 8px 0px 8px 8px;\n  min-width: 80%;\n  max-width: 80%;\n  padding: 6px;\n  margin: 10px;\n  box-shadow: none;\n  background-color: #871178;\n}\n\n.right-chat {\n  background-color: #871178;\n  text-align: left;\n  padding-bottom: 0%;\n}\n\n.right-chat .subtitle {\n  color: #fff;\n}\n\n.right-chat .time {\n  color: #fff;\n}\n\n.bottom {\n  position: fixed;\n  bottom: -0.4437em;\n  width: 100%;\n  padding-bottom: 7px;\n}\n\n.inp .grid {\n  border: 0.3px solid rgba(112, 112, 112, 0.3);\n  border-radius: 50px;\n  background-color: #f8f8f8;\n  height: 49px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: -webkit-fill-available;\n}\n\n.grid {\n  padding: 1.5%;\n  padding-top: 1.7%;\n}\n\n.msg {\n  padding: 0%;\n}\n\n.msg ion-input {\n  --padding: 0%;\n  --padding-bottom: 10px;\n  color: #22272a;\n  text-align: left;\n}\n\n.icn {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  padding: 0%;\n}\n\n.grid ion-icon {\n  color: #707070;\n  font-size: 24px;\n}\n\n.fabb {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 42px;\n  width: 42px;\n  --box-shadow: none;\n}\n\n.fab ion-icon {\n  color: #f8f8f8;\n  height: 20px;\n  width: 20px;\n}\n\nion-footer {\n  background: #d6d6d6 !important;\n  padding-top: 0px;\n  height: 50px;\n}\n\nion-footer ion-toolbar {\n  --background: #d6d6d6;\n  --padding-bottom: 0.875em;\n}\n\ndiv.main {\n  overflow-y: auto;\n  height: 90% !important;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXRib3gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFMSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQTtBQUZKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQU1KOztBQUpBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQU9KOztBQUxBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTEE7RUFDRyxXQUFBO0FBUUg7O0FBTEE7RUFDSSxXQUFBO0FBUUo7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBU0o7O0FBUEE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7QUFXSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFlSjs7QUFiQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaUJKOztBQWZBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFrQko7O0FBaEJBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQW9CSiIsImZpbGUiOiJjaGF0Ym94LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaGVhZGVyXHJcbi8vIC5uYW1lIGlvbi1hdmF0YXIge1xyXG4vLyAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDQycHg7XHJcbi8vICAgICB3aWR0aDogNDJweDtcclxuLy8gfVxyXG4uYXZhdGFyIGlvbi1hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG59XHJcbi5kYXQgaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5pb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkNmQ2ZDY7XHJcbn1cclxuLmRpdi1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRhdGUgcCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLy9jYXJkc1xyXG4uY2hhdC1sYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA4cHggOHB4IDhweDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50aW1lIHAge1xyXG4gICAgY29sb3I6ICNjZWNlY2U7XHJcbiAgICBmb250LXNpemU6IDAuNjI1ZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjMxMjVlbTtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuLmxlZnQtY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogNHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDRweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxufVxyXG4ucnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4uY2hhdC1yYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDhweDtcclxuICAgIG1pbi13aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3MTE3ODtcclxufVxyXG4ucmlnaHQtY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcclxufVxyXG5cclxuLnJpZ2h0LWNoYXQgLnN1YnRpdGxlIHtcclxuICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5yaWdodC1jaGF0IC50aW1lIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gfVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0wLjQ0MzdlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4uaW5wIC5ncmlkIHtcclxuICAgIGJvcmRlcjogMC4zcHggc29saWQgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLmdyaWQge1xyXG4gICAgcGFkZGluZzogMS41JTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjclO1xyXG59XHJcbi5tc2cge1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn1cclxuLm1zZyBpb24taW5wdXQge1xyXG4gICAgLS1wYWRkaW5nOiAwJTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmljbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uZ3JpZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uZmFiYiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5mYWIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5pb24tZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkNmQ2ZDYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkNmQ2ZDY7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwLjg3NWVtO1xyXG59XHJcbmRpdi5tYWlue1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGhlaWdodDo5MCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "84jT":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <ion-title>{{partner_name}}</ion-title>\n        <ion-row class=\"dat\">\n          <ion-title *ngIf=\"online==0\">Last Seen {{last_seen}}</ion-title>\n          <ion-title *ngIf=\"online==1\">Online</ion-title>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"videocam\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #scrollElement padding>\n  <div id=\"condiv\" class=\"main\">\n<div *ngFor=\"let chat of chatmessages; let i-index\" >\n  <ion-card class=\"chat-lbox\"  *ngIf=\"chat.posted_by === user_id\" (mouseup)=\"diSable()\">\n    <ion-row *ngIf=\"chat.type==='text'\">\n      <ion-col class=\"left-chat\">\n        <p class=\"title\">{{chat.name}}</p>\n        <p class=\"subtitle\">{{chat.message}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"chat.type === 'image'\">\n      <ion-col>\n        <img src=\"{{fileurl}}{{chat.file_path}}\"/>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"chat.type === 'video'\">\n      <ion-col>\n        <video width=\"100%\" height=\"auto\" controls (play)=\"diSable()\" (pause)=\"ReActivate()\" (ended)=\"ReActivate()\">\n          <source src=\"{{fileurl}}{{chat.file_path}}\" type=\"video/mp4\">\n        </video>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"chat.type === 'audio'\">\n      <ion-col>\n        <audio style=\"width: 100%;\" controls (play)=\"diSable()\" (pause)=\"ReActivate()\" (ended)=\"ReActivate()\">\n          <source src=\"{{fileurl}}{{chat.file_path}}\" type=\"audio/mpeg\">\n        </audio>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"chat.type === 'doc1'\">\n      <ion-col>\n        <object data=\"{{fileurl}}{{chat.file_path}}\" type=\"application/pdf\" width=\"220\" height=\"160\">\n          alt : <a href=\"{{fileurl}}{{chat.file_path}}\">{{chat.file_path}}</a>\n      </object>\n      <iframe src=\"{{fileurl}}{{chat.file_path}}\" style=\"width:100%;height:700px;\"></iframe>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"time\">\n      <p>{{chat.created_date}}</p>\n    </ion-row>\n  </ion-card>\n  <ion-row class=\"rt\"  *ngIf=\"chat.posted_by !== user_id\" >\n    <ion-card class=\"chat-rbox\">\n      <ion-row>\n        <ion-col class=\"right-chat\">\n          <p class=\"title\">{{chat.name}}</p>\n          <p class=\"subtitle\">{{chat.message}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"time\">\n        <p>{{chat.created_date}}</p>\n      </ion-row>\n    </ion-card>\n  </ion-row>\n  </div>\n  </div>\n  <div style=\"min-height: 220px; text-align: center; background:#fff; padding:5%;width:100%; position: fixed; bottom:40px; z-index:9999; border-radius: 20px;\" *ngIf=\"bottomdiv\" >\n    <ion-row >\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <input class=\"ion-hide\" #f type=\"file\" [(ngModel)]=\"docfile\" (change)=\"UploadDocument($event)\" id=\"file-input\"\n        accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf\">\n        <div style=\"background: rgb(153, 3, 78); border-radius: 50%; height:50px; width:50px;\" (click)=\"f.click()\"><ion-icon name=\"document-outline\" color=\"light\" style=\"font-size:2em; margin-top: 15%;\"></ion-icon></div></ion-col>\n    \n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <div style=\"background: rgb(6, 94, 28); border-radius: 50%; height:50px; width:50px;\" (click)=\"takePicture()\"><ion-icon name=\"camera-outline\" color=\"light\" style=\"font-size:2em; margin-top: 15%;\"></ion-icon></div></ion-col>\n   \n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <input class=\"ion-hide\" [(ngModel)]=\"imagefile\" #g type=\"file\" (change)=\"pickGallery($event)\" id=\"file-input\"\n        accept=\"image/*\">\n        <div style=\"background: rgb(18, 3, 153); border-radius: 50%; height:50px; width:50px;\" (click)=\"g.click()\"><ion-icon name=\"image-outline\" color=\"light\" style=\"font-size:2em; margin-top: 15%;\"></ion-icon></div></ion-col>\n  \n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <input class=\"ion-hide\" [(ngModel)]=\"audfile\" #a type=\"file\" (change)=\"UploadAudio($event)\" id=\"file-input\"\n        accept=\"audio/*\">\n        <div style=\"background: rgb(141, 190, 5); border-radius: 50%; height:50px; width:50px;\" (click)=\"a.click()\"><ion-icon name=\"mic-outline\" color=\"light\" style=\"font-size:2em; margin-top: 15%;\"></ion-icon></div></ion-col>\n     \n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <input class=\"ion-hide\" [(ngModel)]=\"vidfile\" #v type=\"file\" (change)=\"UploadVideo($event)\" id=\"file-input\"\n        accept=\"video/*\">\n        <div style=\"background: rgb(4, 76, 104); border-radius: 50%; height:50px; width:50px;\" (click)=\"v.click()\"><ion-icon name=\"videocam-outline\" color=\"light\" style=\"font-size:2em; margin-top: 15%;\"></ion-icon></div></ion-col>\n      \n      <ion-col size=\"4\" style=\"text-align: center;\"><div style=\"background: rgb(119, 0, 16); border-radius: 50%; height:50px; width:50px;\" (click)=\"UploadLoction()\"><ion-icon name=\"location-outline\" color=\"light\" style=\"font-size:2em; margin-top: 15%;\"></ion-icon></div></ion-col>\n     \n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer mode=\"md\" color=\"primary\">\n  <ion-toolbar>\n    <ion-grid class=\"bottom\">\n      <ion-row class=\"inp\">\n        <ion-col size=\"10.5\">\n          <ion-grid class=\"grid\">\n            <ion-row>\n              <ion-col class=\"icn\" size=\"1\">\n                <ion-icon name=\"happy-outline\"></ion-icon>\n              </ion-col>\n              <ion-col class=\"msg\" size=\"9\">\n                <ion-input class=\"ioninput\" placeholder=\"Send a message...\" #message (keydown.enter)=\"SendMessage()\"></ion-input>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1\">\n                <ion-icon name=\"attach-outline\" (click)=\"attachments()\"></ion-icon>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1\">\n                <ion-icon name=\"mic-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n        <ion-col class=\"fabb\" size=\"1.5\">\n          <ion-fab>\n            <ion-fab-button class=\"fab\" (click)=\"SendMessage()\">\n              <ion-icon name=\"paper-plane\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "BnJ5":
/*!*****************************************!*\
  !*** ./src/app/chatbox/chatbox.page.ts ***!
  \*****************************************/
/*! exports provided: ChatboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxPage", function() { return ChatboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chatbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chatbox.page.html */ "84jT");
/* harmony import */ var _chatbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatbox.page.scss */ "6jJ/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var Rxjs_rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Rxjs/rx */ "SH02");
/* harmony import */ var Rxjs_rx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(Rxjs_rx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");













let ChatboxPage = class ChatboxPage {
    constructor(route, storage, http, file, transfer, loadingController, camera, router) {
        this.route = route;
        this.storage = storage;
        this.http = http;
        this.file = file;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.camera = camera;
        this.router = router;
        this.bottomdiv = false;
        const fileTransfer = this.transfer.create();
        this.fileurl = "https://topiko.com/app/chatfiles/";
    }
    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            this.chatroom = params["room"];
            this.partner_name = params["name"];
            this.last_seen = params['last_seen'];
            this.online = params['onine'];
            console.log("chatroom :", this.chatroom);
            console.log("partner Name:", this.partner_name);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getchatmessages.php?chatroom=" + this.chatroom).subscribe((data) => {
                this.chatmessages = data;
                console.log("chatmessages", this.chatmessages);
                this.scrollToBottomOnInit();
            });
        });
        this.storage.get('userdetails').then((udetails) => {
            this.userDetails = udetails;
            console.log("UserDetails:", this.userDetails);
            this.user_id = this.userDetails[0].id;
            console.log(this.user_id, 'User ID');
        });
        this.ObservableVar = Rxjs_rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(2000).subscribe(() => {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getchatmessages.php?chatroom=" + this.chatroom).subscribe((data) => {
                this.chatmessages = data;
                console.log("chatmessages", this.chatmessages);
            });
        });
        this.ObservableVar1 = Rxjs_rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].interval(100).subscribe(() => {
            this.scrollToBottomOnInit();
        });
    }
    callFun() {
    }
    UploadDocument(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please Wait',
            });
            yield loading.present();
            this.fileType = "doc";
            this.Ufile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', this.Ufile);
            this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "uploadfile.php", formData).subscribe((resdata) => {
                console.log(resdata);
                if (resdata == 1) {
                    this.FileName = this.docfile.substr(this.docfile.lastIndexOf('\\') + 1),
                        this.path = this.FileName;
                    this.type = "doc";
                    this.SendMessage();
                }
            });
        });
    }
    pickGallery(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please Wait',
            });
            yield loading.present();
            this.fileType = "doc";
            this.Ufile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', this.Ufile);
            this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "uploadfile.php", formData).subscribe((resdata) => {
                console.log(resdata);
                if (resdata == 1) {
                    this.FileName = this.imagefile.substr(this.imagefile.lastIndexOf('\\') + 1),
                        this.path = this.FileName;
                    this.type = "image";
                    var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "chatmessage.php";
                    var Data = JSON.stringify({
                        'chatroom': this.chatroom,
                        'posted_by': this.user_id,
                        'type': 'image',
                        'message': this.message.value,
                        'filepath': this.path
                    });
                    console.log(Data);
                    this.http.post(link, Data).subscribe((cresponse) => {
                        this.chatresponse = cresponse;
                        console.log("chat Response:", this.chatresponse);
                        if (this.chatresponse == 1) {
                            this.loadingController.dismiss();
                            this.message.value = '';
                            this.bottomdiv = false;
                            this.route.navigate(['chatbox']);
                        }
                    });
                }
            });
        });
    }
    UploadAudio(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please Wait',
            });
            yield loading.present();
            this.fileType = "doc";
            this.Ufile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', this.Ufile);
            this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "uploadfile.php", formData).subscribe((resdata) => {
                console.log(resdata);
                if (resdata == 1) {
                    this.FileName = this.audfile.substr(this.audfile.lastIndexOf('\\') + 1),
                        this.path = this.FileName;
                    var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "chatmessage.php";
                    var Data = JSON.stringify({
                        'chatroom': this.chatroom,
                        'posted_by': this.user_id,
                        'type': 'audio',
                        'message': this.message.value,
                        'filepath': this.path
                    });
                    console.log(Data);
                    this.http.post(link, Data).subscribe((cresponse) => {
                        this.chatresponse = cresponse;
                        console.log("chat Response:", this.chatresponse);
                        if (this.chatresponse == 1) {
                            this.loadingController.dismiss();
                            this.message.value = '';
                            this.bottomdiv = false;
                            this.route.navigate(['chatbox']);
                        }
                    });
                }
            });
        });
    }
    UploadVideo(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please Wait',
            });
            yield loading.present();
            this.fileType = "doc";
            this.Ufile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', this.Ufile);
            this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "uploadfile.php", formData).subscribe((resdata) => {
                console.log(resdata);
                if (resdata == 1) {
                    this.FileName = this.vidfile.substr(this.vidfile.lastIndexOf('\\') + 1),
                        this.path = this.FileName;
                    var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "chatmessage.php";
                    var Data = JSON.stringify({
                        'chatroom': this.chatroom,
                        'posted_by': this.user_id,
                        'type': 'video',
                        'message': this.message.value,
                        'filepath': this.path
                    });
                    console.log(Data);
                    this.http.post(link, Data).subscribe((cresponse) => {
                        this.chatresponse = cresponse;
                        console.log("chat Response:", this.chatresponse);
                        if (this.chatresponse == 1) {
                            this.loadingController.dismiss();
                            this.message.value = '';
                            this.bottomdiv = false;
                            this.route.navigate(['chatbox']);
                        }
                    });
                }
            });
        });
    }
    scrollToBottomOnInit() {
        var element = document.getElementById("condiv");
        element.scrollTop = element.scrollHeight - element.clientHeight;
    }
    attachments() {
        if (this.bottomdiv == false) {
            this.bottomdiv = true;
        }
        else {
            this.bottomdiv = false;
        }
    }
    TakePictrue() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.image = 'data:image/jpeg;base64,' + imageData;
        });
        var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "chatmessage.php";
        var Data = JSON.stringify({
            'chatroom': this.chatroom,
            'posted_by': this.user_id,
            'type': "image",
            'message': this.message.value,
            'filepath': this.image
        });
        console.log(Data);
        this.http.post(link, Data).subscribe((cresponse) => {
            this.chatresponse = cresponse;
            console.log("chat Response:", this.chatresponse);
            if (this.chatresponse == 1) {
                this.loadingController.dismiss();
                this.message.value = '';
                this.bottomdiv = false;
                this.route.navigate(['chatbox']);
            }
        });
    }
    SendMessage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var link = _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "chatmessage.php";
            var Data = JSON.stringify({
                'chatroom': this.chatroom,
                'posted_by': this.user_id,
                'type': this.type,
                'message': this.message.value,
                'filepath': this.path
            });
            console.log(Data);
            this.http.post(link, Data).subscribe((cresponse) => {
                this.chatresponse = cresponse;
                console.log("chat Response:", this.chatresponse);
                if (this.chatresponse == 1) {
                    this.loadingController.dismiss();
                    this.message.value = '';
                    this.bottomdiv = false;
                }
            });
        });
    }
    ionViewDidLeave() {
        this.ObservableVar.unsubscribe();
    }
    diSable() {
        this.ObservableVar.unsubscribe();
    }
    ReActivate() {
        this.callFun();
    }
    ScrollUp() {
        alert("scroll");
        this.ObservableVar.unsubscribe();
    }
};
ChatboxPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
ChatboxPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['scrollElement',] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['message',] }]
};
ChatboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-chatbox',
        template: _raw_loader_chatbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chatbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatboxPage);



/***/ }),

/***/ "KKsG":
/*!***************************************************!*\
  !*** ./src/app/chatbox/chatbox-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxPageRoutingModule", function() { return ChatboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chatbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatbox.page */ "BnJ5");




const routes = [
    {
        path: '',
        component: _chatbox_page__WEBPACK_IMPORTED_MODULE_3__["ChatboxPage"]
    }
];
let ChatboxPageRoutingModule = class ChatboxPageRoutingModule {
};
ChatboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatboxPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=chatbox-chatbox-module-es2015.js.map