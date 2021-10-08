(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "LcRc":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Notification</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"select\">\n    <ion-select placeholder=\"Select One\" value=\"read\" interface=\"popover\" mode=\"ios\">\n      <ion-select-option value=\"read\" selected>Read</ion-select-option>\n      <ion-select-option value=\"unread\">Unread</ion-select-option>\n      <ion-select-option value=\"started\">Started</ion-select-option>\n      <ion-select-option value=\"reminder\">Reminder</ion-select-option>\n    </ion-select>\n  </ion-row>\n\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/originals/5d/4c/52/5d4c52c502918194e39ef7582a4e8eba.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <p class=\"lorem\">Lorem Ipsum is simply dummy text the printing</p>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ellipsis\">\n            <ion-icon name=\"ellipsis-vertical\" (click)=\"openMenu()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"star-row\">\n          <ion-icon name=\"star\"></ion-icon>\n          <p class=\"pclass\">3hours ago</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/originals/5d/4c/52/5d4c52c502918194e39ef7582a4e8eba.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <p class=\"lorem\">Lorem Ipsum is simply dummy text the printing</p>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ellipsis\">\n            <ion-icon name=\"ellipsis-vertical\" (click)=\"openMenu()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"star-row\">\n          <ion-icon name=\"star\"></ion-icon>\n          <p class=\"pclass\">3hours ago</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/originals/5d/4c/52/5d4c52c502918194e39ef7582a4e8eba.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <p class=\"lorem\">Lorem Ipsum is simply dummy text the printing</p>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ellipsis\">\n            <ion-icon name=\"ellipsis-vertical\" (click)=\"openMenu()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"star-row\">\n          <ion-icon name=\"star\"></ion-icon>\n          <p class=\"pclass\">3hours ago</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/originals/5d/4c/52/5d4c52c502918194e39ef7582a4e8eba.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <p class=\"lorem\">Lorem Ipsum is simply dummy text the printing</p>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ellipsis\">\n            <ion-icon name=\"ellipsis-vertical\" (click)=\"openMenu()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"star-row\">\n          <ion-icon name=\"star\"></ion-icon>\n          <p class=\"pclass\">3hours ago</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/originals/5d/4c/52/5d4c52c502918194e39ef7582a4e8eba.jpg\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <p class=\"lorem\">Lorem Ipsum is simply dummy text the printing</p>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ellipsis\">\n            <ion-icon name=\"ellipsis-vertical\" (click)=\"openMenu()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"star-row\">\n          <ion-icon name=\"star\"></ion-icon>\n          <p class=\"pclass\">3hours ago</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "TLzw":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "mhdW");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "dOoZ");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "Z9r7":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-bottom: 80px;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\nion-card {\n  margin: 8px 0px;\n  padding: 10px 0px 10px 8px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.avatar ion-avatar {\n  width: 74px;\n  height: 74px;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.lorem {\n  color: #707070;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.time {\n  color: #871178;\n  font-size: 10px;\n}\n\n.pclass {\n  font-size: 12px;\n  color: #9f9f9f;\n  margin: 0%;\n  line-height: 18px;\n  margin-right: 7px;\n}\n\n.ellipsis {\n  font-size: 18px;\n  padding: 0px;\n}\n\n.star-row {\n  display: flex;\n  justify-content: space-between;\n}\n\n.star-row ion-icon {\n  color: #fcb900;\n  font-size: 20px;\n}\n\n.star-row p {\n  color: #871178;\n  font-size: 10px;\n}\n\n.inline {\n  width: 100%;\n  font-size: 0.625em;\n  color: #871178;\n  letter-spacing: 0.0375em;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.date {\n  margin-right: 0.75em;\n}\n\n.dat {\n  margin: 0%;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 65px;\n  width: 65px;\n}\n\nion-fab-button ion-icon {\n  color: #ffffff;\n  font-size: 46px;\n}\n\n.text-color {\n  font-size: 25px;\n}\n\n.star {\n  color: #fcb900;\n}\n\n.elipsis {\n  color: #871178;\n  font-size: 1.5em;\n}\n\n.elipsis-head {\n  color: #fff;\n  font-size: 1.5em;\n}\n\n.select {\n  color: #871178;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.select-text {\n  color: #871178;\n}\n\nlabel {\n  color: #871178;\n}\n\n.select-icon {\n  width: 20px !important;\n  height: 20px !important;\n  color: #871187 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBYUo7O0FBWEE7RUFDSSxvQkFBQTtBQWNKOztBQVpBO0VBQ0ksVUFBQTtBQWVKOztBQVhBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWVKOztBQVpBO0VBQ0ksZUFBQTtBQWVKOztBQWJBO0VBQ0ksY0FBQTtBQWdCSjs7QUFiQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFiQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFiQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBZ0JKOztBQWJBO0VBQ0ksY0FBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7QUFpQko7O0FBZEE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFpQkoiLCJmaWxlIjoibm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxOHB4O1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNzRweDtcclxuICAgIGhlaWdodDogNzRweDtcclxufVxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmxvcmVtIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLnBjbGFzcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5lbGxpcHNpcyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnN0YXItcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnN0YXItcm93IGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmNiOTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdGFyLXJvdyBwIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5pbmxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuNjI1ZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzNzVlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XHJcbn1cclxuLmRhdCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcblxyXG4vLyBmYWJcclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbn1cclxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbn1cclxuXHJcbi50ZXh0LWNvbG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uc3RhciB7XHJcbiAgICBjb2xvcjogI2ZjYjkwMDtcclxufVxyXG5cclxuLmVsaXBzaXMge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uZWxpcHNpcy1oZWFkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zZWxlY3QtdGV4dCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjODcxMTg3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "dOoZ":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.page.html */ "LcRc");
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.page.scss */ "Z9r7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let NotificationPage = class NotificationPage {
    constructor(actionsheetCtrl, route) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    openMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Customer Care',
                        handler: () => {
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: 'Report',
                        handler: () => {
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: 'Reminder',
                        handler: () => {
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            console.log('Destructive clicked');
                        }
                    },
                ]
            });
            yield actionSheet.present();
        });
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationPage);



/***/ }),

/***/ "mhdW":
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "dOoZ");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es2015.js.map