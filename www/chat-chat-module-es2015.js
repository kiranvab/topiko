(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "2yxt":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "cC0O");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "laW7");







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "SyIY":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#fff;\n}\n\nion-header {\n  --background: #5b2573;\n}\n\nion-toolbar,\nion-item {\n  --background: #778899;\n}\n\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.imageAvatarRight {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.imageAvatarRight .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarRight .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarRight .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarRight .chatDiv {\n  text-align: justify;\n  position: relative;\n  background: lightslategray;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 72vw;\n  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n.imageAvatarRight ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarRight .sharper.chatDiv {\n  border-radius: 0;\n}\n\n.imageAvatarRight .sharper-bottom.chatDiv {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarRight .sharper-top.chatDiv {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.imageAvatarLeft {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.imageAvatarLeft .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarLeft .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarLeft .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarLeft .chatDiv {\n  text-align: left;\n  position: relative;\n  background: #43063c;\n  border-radius: 6px;\n  border-bottom-right-radius: 0;\n  max-width: 72vw;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n.imageAvatarLeft ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarLeft .sharper.chatDiv {\n  border-radius: 0;\n}\n\n.imageAvatarLeft .sharper-bottom.chatDiv {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarLeft .sharper-top.chatDiv {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important;\n}\n\nion-fab {\n  bottom: -22px !important;\n}\n\n.footerIcon {\n  color: rgba(244, 245, 248, 0.7);\n}\n\nion-input {\n  --placeholder-color: rgba(244, 245, 248, 0.7);\n}\n\n.chatDivLoader {\n  position: relative;\n  background: #ccc;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n}\n\n.chatDivLoader .corner-parent-right {\n  background: #9164ac7a;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  left: -4px;\n  bottom: -2px;\n  border-radius: 0;\n  border-radius: 5px;\n}\n\n.chatDivLoader .corner-parent-right .corner-child-right {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #9164ac7a;\n  position: absolute;\n  top: 7px;\n  left: -7px;\n}\n\nion-text {\n  font-size: 12px;\n  color: #d7d8dac7;\n}\n\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.loading-col {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.right {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.left {\n  justify-content: flex-end;\n  padding-right: 20px;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 31px;\n  width: 31px;\n  background: transparent;\n  position: absolute;\n  left: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n  width: 31px;\n  height: 31px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: 15px 12px 0 0px lightslategray;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 31px;\n  width: 31px;\n  background: transparent;\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n  width: 31px;\n  height: 31px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: -15px 12px 0 0px #43063c;\n}\n\n.input-box {\n  color: white;\n}\n\n.user-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n  border: 2px solid #b8b9ea;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\nimg {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7O0VBRUUscUJBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFKRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBR0EsZUFBQTtFQUNBLDJDQUFBO0FBR0o7O0FBREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFJO0VBQ0UsZ0JBQUE7QUFFTjs7QUFFSTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFBTjs7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFGTjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSkY7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUdBLGVBQUE7RUFDQSwwQ0FBQTtBQU5KOztBQVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFTSTtFQUNFLGdCQUFBO0FBUE47O0FBV0k7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBVE47O0FBYUk7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBWE47O0FBZUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBWkY7O0FBY0E7RUFDRSx3QkFBQTtBQVhGOztBQWFBO0VBQ0UsK0JBQUE7QUFWRjs7QUFZQTtFQUNFLDZDQUFBO0FBVEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBUkY7O0FBU0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFRSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFOTjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBTEY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU1BO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQVFNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTFI7O0FBTVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBQUpWOztBQVdNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVFI7O0FBVVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQVJWOztBQWNBO0VBQ0UsWUFBQTtBQVhGOztBQWNBO0VBRUUsb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQVpGOztBQWNBO0VBQ0Usa0JBQUE7QUFYRiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6I2ZmZjtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICM1YjI1NzM7XHJcbn1cclxuaW9uLXRvb2xiYXIsXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICM3Nzg4OTk7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmltYWdlQXZhdGFyUmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIC5pbWFnZUF2YXRhckJvdHRvbSB7XHJcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM1QjI1NzM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gIH1cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByaWdodDogMTAuMSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jaGF0RGl2IHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOmxpZ2h0c2xhdGVncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAvLyBtaW4td2lkdGg6IDcydnc7XHJcbiAgICBtYXgtd2lkdGg6IDcydnc7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICAuc2hhcnBlciB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci1ib3R0b20ge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaGFycGVyLXRvcCB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZUF2YXRhckxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcclxuICAgIG1heC13aWR0aDogMjE0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzVCMjU3MztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgfVxyXG4gIC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHJpZ2h0OiAxMC4xJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmNoYXREaXYge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IzQzMDYzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIC8vIG1pbi13aWR0aDogNzJ2dztcclxuICAgIG1heC13aWR0aDogNzJ2dztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgLnNoYXJwZXIge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXJwZXItYm90dG9tIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci10b3Age1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICB3aWR0aDogNDdweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mYWIge1xyXG4gIGJvdHRvbTogLTIycHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVySWNvbiB7XHJcbiAgY29sb3I6IHJnYmEoMjQ0LCAyNDUsIDI0OCwgMC43KTtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjQ0LCAyNDUsIDI0OCwgMC43KTtcclxufVxyXG4uY2hhdERpdkxvYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogIzkxNjRhYzdhO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNHB4O1xyXG4gICAgYm90dG9tOiAtMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC5jb3JuZXItY2hpbGQtcmlnaHQge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIGxlZnQ6IC03cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNkN2Q4ZGFjNztcclxufVxyXG5pb24tY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlQXZhdGFyQm90dG9tTG9hZGVyIHtcclxuICBtYXgtd2lkdGg6IDIxNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sb2FkaW5nLWNvbCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5sZWZ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jbHViYmVkIHtcclxuICAuaW1hZ2VBdmF0YXJSaWdodCB7XHJcbiAgICAuY2hhdERpdiB7XHJcbiAgICAgIC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLmNvcm5lci1jaGlsZC1yaWdodCB7XHJcbiAgICAgICAgICB3aWR0aDogMzFweDtcclxuICAgICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDE1cHggMTJweCAwIDBweCBsaWdodHNsYXRlZ3JheTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlQXZhdGFyTGVmdCB7XHJcbiAgICAuY2hhdERpdiB7XHJcbiAgICAgIC5jb3JuZXItcGFyZW50LWxlZnQge1xyXG4gICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICB3aWR0aDogMzFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLmNvcm5lci1jaGlsZC1sZWZ0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogLTE1cHggMTJweCAwIDBweCAjNDMwNjNjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uaW5wdXQtYm94IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi51c2VyLWltZyB7XHJcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYjhiOWVhO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcclxufVxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "cC0O":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "laW7");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "laW7":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.page.html */ "n54z");
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.page.scss */ "SyIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ChatPage = class ChatPage {
    constructor(activRoute) {
        this.activRoute = activRoute;
        this.user_input = "";
        this.User = "Me";
        this.toUser = "HealthBot";
        this.activRoute.params.subscribe((params) => {
            // console.log(params)
            this.paramData = params;
            this.userName = params.name;
        });
        this.msgList = [
            {
                userId: "HealthBot",
                userName: "HealthBot",
                userAvatar: "../../assets/chat/chat4.jpg",
                time: "12:00",
                message: "Hello, have you seen this great chat UI",
                id: 0
            },
            {
                userId: "Me",
                userName: "Me",
                userAvatar: "../../assets/chat/chat5.jpg",
                time: "12:03",
                message: "Yeah, I see pagas this. This looks great. ",
                id: 1,
            },
            {
                userId: "HealthBot",
                userName: "HealthBot",
                userAvatar: "../../assets/chat/chat4.jpg",
                time: "12:05",
                message: "this is absolutely great UI chat themes, anyone can use",
                id: 3
            },
            {
                userId: "Me",
                userName: "Me",
                userAvatar: "../../assets/chat/chat5.jpg",
                time: "12:06",
                message: "wow ! that's great. Love to see more of such chat themes",
                id: 4
            },
            {
                userId: "HealthBot",
                userName: "HealthBot",
                userAvatar: "../../assets/chat/chat4.jpg",
                time: "12:07",
                message: "Oh there are several other designs. Check all their designs on their website enappd.com",
                id: 5
            }
        ];
    }
    ngOnInit() {
    }
    sendMsg() {
        if (this.user_input !== '') {
            this.msgList.push({
                userId: this.toUser,
                userName: this.toUser,
                userAvatar: this.paramData.image ? this.paramData.image : "../../assets/chat/chat4.jpg",
                time: "12:01",
                message: this.user_input,
                id: this.msgList.length + 1
            });
            this.user_input = "";
            this.scrollDown();
            setTimeout(() => {
                this.senderSends();
            }, 500);
        }
    }
    senderSends() {
        this.loader = true;
        setTimeout(() => {
            this.msgList.push({
                userId: this.User,
                userName: this.User,
                userAvatar: "../../assets/chat/chat5.jpg",
                time: "12:01",
                message: "Hi This is Customer Support From Topiko How can i help you"
            });
            this.loader = false;
            this.scrollDown();
        }, 2000);
        this.scrollDown();
    }
    scrollDown() {
        setTimeout(() => {
            this.content.scrollToBottom(50);
        }, 50);
    }
    userTyping(event) {
        // console.log(event);
        this.start_typing = event.target.value;
        this.scrollDown();
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['IonContent', { static: true },] }]
};
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatPage);



/***/ }),

/***/ "n54z":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar color=\"primary\">\r\n   <ion-buttons slot=\"start\">\r\n     <ion-back-button></ion-back-button>\r\n   </ion-buttons>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"{{paramData.image}}\" >\r\n    </ion-thumbnail>\r\n    <ion-title color=\"light\">\r\n      {{paramData.name}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #IonContent fullscreen=\"true\">\r\n  <ion-list>\r\n    <div *ngFor=\"let chat of msgList; let i = index; \">\r\n      <ion-row *ngIf=\"chat.userId == User\">\r\n        <ion-col class=\"right\" class=\"ion-no-padding\" [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\r\n          <div class=\"imageAvatarRight\">\r\n            <div class=\"imageAvatarBottom\">\r\n              <ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\r\n                <div class=\"imageAvatarBottomIcon\">\r\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n                </div>\r\n                <ion-img class=\"user-img\" [src]=\"paramData.image\"></ion-img>\r\n              </ion-avatar>\r\n            </div>\r\n            <ion-label color=\"light\">\r\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \r\n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\r\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\r\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\r\n                <p class=\"ion-text-wrap\" class=\"ion-padding\">{{chat.message}}\r\n                </p>\r\n                <div class=\"corner-parent-right\">\r\n                  <div class=\"corner-child-right\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"chat.userId == toUser\">\r\n        <ion-col class=\"left\" class=\"ion-no-padding\" [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\r\n          <div class=\"imageAvatarLeft\">\r\n            <ion-label color=\"light\">\r\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \r\n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\r\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\r\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\r\n                <p class=\"ion-text-wrap\" class=\"ion-padding\" >{{chat.message}}</p>\r\n                <div class=\"corner-parent-left\">\r\n                  <div class=\"corner-child-left\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-label>\r\n            <div class=\"imageAvatarBottom\">\r\n              <ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\r\n                <div class=\"imageAvatarBottomIcon\">\r\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n                </div>\r\n                <ion-img class=\"user-img\" src=\"../../../assets/chat/pagas.jpg\"></ion-img>\r\n              </ion-avatar>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])\">\r\n        <ion-col>\r\n          <ion-text>{{chat.time}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\" sendMsg()\">\r\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-row *ngIf=\"loader\">\r\n    <ion-col class=\"ion-no-padding\" class=\"loading-col\">\r\n      <div class=\"imageAvatarRight\">\r\n        <div class=\"imageAvatarBottomLoader\">\r\n          <ion-avatar class=\"avatar\">\r\n            <div class=\"imageAvatarBottomIcon\">\r\n            </div>\r\n            <ion-img src=\"{{paramData.image}}\"></ion-img>\r\n          </ion-avatar>\r\n        </div>\r\n        <ion-label>\r\n          <div class=\"chatDivLoader\">\r\n              <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\r\n            <div class=\"corner-parent-right\">\r\n              <div class=\"corner-child-right\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n<ion-footer translucent>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" name=\"camera\" expand=\"icon-only\" class=\"footerIcon\"></ion-icon>\r\n    <ion-input class=\"input-box\" type=\"text\" placeholder=\"Write a message...\" [(ngModel)]=\"user_input\" (keypress)=\"userTyping($event)\"></ion-input>\r\n  </ion-item>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map