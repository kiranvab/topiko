(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["careerview-careerview-module"],{

/***/ "0/Vn":
/*!***********************************************!*\
  !*** ./src/app/careerview/careerview.page.ts ***!
  \***********************************************/
/*! exports provided: CareerviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerviewPage", function() { return CareerviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_careerview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./careerview.page.html */ "kRqK");
/* harmony import */ var _careerview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./careerview.page.scss */ "g6ac");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let CareerviewPage = class CareerviewPage {
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
                        text: 'Apply',
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
CareerviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CareerviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-careerview',
        template: _raw_loader_careerview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_careerview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CareerviewPage);



/***/ }),

/***/ "SdWo":
/*!*********************************************************!*\
  !*** ./src/app/careerview/careerview-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CareerviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerviewPageRoutingModule", function() { return CareerviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _careerview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./careerview.page */ "0/Vn");




const routes = [
    {
        path: '',
        component: _careerview_page__WEBPACK_IMPORTED_MODULE_3__["CareerviewPage"]
    }
];
let CareerviewPageRoutingModule = class CareerviewPageRoutingModule {
};
CareerviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CareerviewPageRoutingModule);



/***/ }),

/***/ "g6ac":
/*!*************************************************!*\
  !*** ./src/app/careerview/careerview.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: center;\n}\n\nion-content {\n  --color: #22272a;\n  --background: #f5f5f5;\n  --padding-start: 18px;\n  --padding-end: 18px;\n}\n\n.row {\n  height: 12em;\n  background: #f5f5f5;\n}\n\n.first {\n  margin: 15px 0px;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 0.3125em;\n  border-radius: 0%;\n  padding-right: 0%;\n}\n\n.firstcard {\n  border: none !important;\n  box-shadow: none !important;\n  background: #f5f5f5;\n  padding: 0px;\n  border-radius: 8px 8px 0px 0px;\n  margin-left: 0%;\n  margin-right: 0%;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.firs {\n  margin: 1em 0em;\n}\n\n.row {\n  height: 14.4em;\n}\n\n.firs {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bg ion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 24%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 0px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f5f5f5;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 0.5em;\n  color: #871178;\n  font-weight: bold;\n}\n\n.number {\n  font-size: 0.875em;\n  margin-top: 0.5em;\n  margin-bottom: 0%;\n  color: #707070;\n}\n\n.dashboard p {\n  margin-top: 0.773125em;\n  margin-bottom: 0.590625em;\n  margin-left: 11px;\n  font-size: 0.875em;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\nion-fab-button {\n  --ion-color-base: #f2f2f2 !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\nion-badge {\n  --ion-color-base: #d60000 !important;\n  --border-radius: 50%;\n}\n\ndiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.image {\n  min-width: 100%;\n  margin-top: 10px;\n  min-height: 230px;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n  bottom: 22px;\n}\n\n.round-img {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 50px;\n  right: 9px;\n  background: #919191;\n  border-radius: 50%;\n}\n\n.round-img ion-icon {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.second {\n  box-shadow: none;\n  margin: 12px 0px;\n}\n\n.description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 1.8em;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.likes ion-col {\n  text-align: center;\n}\n\n.like {\n  font-size: 0.875em;\n}\n\n.lines {\n  border-right: 1px solid #00000033;\n  margin: 14px 0px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  padding: 0%;\n}\n\n.count {\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.likes .comment {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmVlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVRBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBYUo7O0FBWEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWVKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWdCSjs7QUFiQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBaUJKOztBQWZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBa0JKOztBQWhCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBbUJKOztBQWpCQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFxQko7O0FBbkJBO0VBQ0ksb0NBQUE7RUFDQSxvQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUEwQko7O0FBeEJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUEyQko7O0FBekJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTRCSjs7QUExQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQTZCSjs7QUExQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBNkJKOztBQTNCQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQThCSjs7QUE1QkE7RUFDSSxrQkFBQTtBQStCSjs7QUE3QkE7RUFDSSxrQkFBQTtBQWdDSjs7QUE5QkE7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBa0NKOztBQWhDQTtFQUNJLFlBQUE7QUFtQ0oiLCJmaWxlIjoiY2FyZWVydmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tY29sb3I6ICMyMjI3MmE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxOHB4O1xyXG59XHJcbi5yb3cge1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIHBhZGRpbmc6IDAuMzEyNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxufVxyXG4uZmlyc3RjYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4LjE4NzVlbTtcclxuICAgIGhlaWdodDogOC4xODc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG59XHJcblxyXG4uZmlycyB7XHJcbiAgICBtYXJnaW46IDFlbSAwZW07XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDE0LjRlbTtcclxufVxyXG4uZmlycyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5iZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOS4zNzVlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjNDQwOTNjKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5iZyBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxNDZweDtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbn1cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjQlO1xyXG59XHJcbi5wb3NpdGlvbi1jYW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTJweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcbi5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLmRhc2hib2FyZCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNzczMTI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjU5MDYyNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLmljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEuMTI1ZW07XHJcbn1cclxuLmljb25zIHAge1xyXG4gICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZDYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF0ZSB7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjYyNWVtO1xyXG59XHJcbi5kYXRlIHAge1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuLmltYWdlIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxufVxyXG4uY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyMnB4O1xyXG59XHJcbi5yb3VuZC1pbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogOXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkxOTE5MTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ucm91bmQtaW1nIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC42MjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3MTI1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4ubGlrZXMgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpa2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5saW5lcyB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbiAgICBtYXJnaW46IDE0cHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uY291bnQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLmxpa2VzIC5jb21tZW50IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "kRqK":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/careerview/careerview.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Career</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"firs\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"name\">JAGANKATHIK.G</P>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"number\">+91 988134832</P>\n    </ion-row>\n  </ion-card>\n\n  <p class=\"dashboard\">Dashboard</p>\n  <ion-card class=\"first\">\n    <ion-row class=\"scroll\">\n      <ion-col class=\"icons\">\n        <ion-fab-button color=\"light\" routerLink=\"/resume\">\n          <ion-icon name=\"briefcase-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Resume</p>\n      </ion-col>\n      <ion-col class=\"icons\">\n        <ion-fab-button color=\"light\" routerLink=\"/interview\">\n          <ion-icon name=\"headset-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Interview</p>\n      </ion-col>\n      <ion-col class=\"icons\">\n        <ion-fab-button color=\"light\" routerLink=\"/partner\">\n          <ion-icon name=\"people-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Partner</p>\n      </ion-col>\n      <ion-col class=\"icons\">\n        <ion-fab-button color=\"light\" routerLink=\"/records\">\n          <ion-icon name=\"receipt-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Records</p>\n      </ion-col>\n      <ion-col class=\"icons\">\n        <ion-fab-button color=\"light\" routerLink=\"/employee-group\">\n          <ion-icon name=\"headset-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Employee</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div>\n    <div class=\"date\">\n      <p>04/23/2021</p>\n    </div>\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\" (click)=\"openMenu()\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <p class=\"dashboard\">Descriptions</p>\n  <ion-card class=\"second\">\n    <ion-row>\n      <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n        quidem reiciendis iusto modi temporibus impedit</p>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"second\">\n    <ion-row class=\"likes\">\n      <ion-col>\n        <p class=\"like\">Likes</p>\n        <p class=\"count\">036</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"like\">Dislikes</p>\n        <p class=\"count\">30</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"like\">Share</p>\n        <p class=\"count\">105</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col class=\"comment\">\n        <p class=\"like\">Comment</p>\n        <p class=\"count\">150</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div>\n    <div class=\"date\">\n      <p>04/23/2021</p>\n    </div>\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\" (click)=\"openMenu()\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <p class=\"dashboard\">Descriptions</p>\n  <ion-card class=\"second\">\n    <ion-row>\n      <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n        quidem reiciendis iusto</p>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"second\">\n    <ion-row class=\"likes\">\n      <ion-col>\n        <p class=\"like\">Likes</p>\n        <p class=\"count\">036</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"like\">Dislikes</p>\n        <p class=\"count\">30</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"like\">Share</p>\n        <p class=\"count\">105</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col class=\"comment\">\n        <p class=\"like\">Comment</p>\n        <p class=\"count\">150</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div>\n    <div class=\"date\">\n      <p>04/23/2021</p>\n    </div>\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\" (click)=\"openMenu()\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"column\">\n        <div class=\"round-img\">\n          <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n        </div>\n        <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <p class=\"dashboard\">Descriptions</p>\n  <ion-card class=\"second\">\n    <ion-row>\n      <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n        quidem reiciendis iusto</p>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"second\">\n    <ion-row class=\"likes\">\n      <ion-col>\n        <p class=\"like\">Likes</p>\n        <p class=\"count\">036</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"like\">Dislikes</p>\n        <p class=\"count\">30</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"like\">Share</p>\n        <p class=\"count\">105</p>\n      </ion-col>\n      <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n      <ion-col class=\"comment\">\n        <p class=\"like\">Comment</p>\n        <p class=\"count\">150</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "neAm":
/*!*************************************************!*\
  !*** ./src/app/careerview/careerview.module.ts ***!
  \*************************************************/
/*! exports provided: CareerviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerviewPageModule", function() { return CareerviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _careerview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./careerview-routing.module */ "SdWo");
/* harmony import */ var _careerview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./careerview.page */ "0/Vn");







let CareerviewPageModule = class CareerviewPageModule {
};
CareerviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _careerview_routing_module__WEBPACK_IMPORTED_MODULE_5__["CareerviewPageRoutingModule"]
        ],
        declarations: [_careerview_page__WEBPACK_IMPORTED_MODULE_6__["CareerviewPage"]]
    })
], CareerviewPageModule);



/***/ })

}]);
//# sourceMappingURL=careerview-careerview-module-es2015.js.map