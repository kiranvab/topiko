(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-view-employee-view-module"],{

/***/ "93zE":
/*!*****************************************************!*\
  !*** ./src/app/employee-view/employee-view.page.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeViewPage", function() { return EmployeeViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-view.page.html */ "i29V");
/* harmony import */ var _employee_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-view.page.scss */ "GyLQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EmployeeViewPage = class EmployeeViewPage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeViewPage.ctorParameters = () => [];
EmployeeViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-view',
        template: _raw_loader_employee_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeViewPage);



/***/ }),

/***/ "GyLQ":
/*!*******************************************************!*\
  !*** ./src/app/employee-view/employee-view.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: center;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-grid p {\n  margin: 30px 0px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\nion-label {\n  font-weight: normal;\n}\n\n.toggle {\n  display: flex;\n  justify-content: space-between;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin: 1em 0px;\n}\n\n.toggle ion-col {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\nh6 {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.select {\n  float: right;\n  color: #871178;\n}\n\n.branches p {\n  color: #871178;\n  font-size: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.card {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 0px;\n  padding: 0px;\n}\n\n.address p {\n  margin: 0.3125em;\n  font-size: 1em;\n  color: #707070;\n}\n\n.add p {\n  margin: 0.3125em;\n  font-size: 0.875em;\n  color: #22272a;\n  line-height: 2em;\n}\n\n.gmap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gmap img {\n  max-width: 77px;\n  max-height: 77px;\n}\n\n.sun {\n  text-align: center;\n  font-size: 1em;\n  color: #22272a;\n}\n\n.qr {\n  text-align: center;\n}\n\n.qr ion-icon {\n  color: #871178;\n  width: 110px;\n  height: 110px;\n}\n\n.check {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n  margin-bottom: 1.25em;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.75em;\n  width: 9.375em;\n  height: 3.125em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVtcGxveWVlLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFPSjs7QUFKQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWVKOztBQVpBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBZUo7O0FBYkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBbUJKOztBQWpCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUF1Qko7O0FBckJBO0VBQ0ksa0JBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBeUJKOztBQXZCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUEwQko7O0FBeEJBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUEyQko7O0FBekJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQTRCSjs7QUF6QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTZCSiIsImZpbGUiOiJlbXBsb3llZS12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gZmlyc3QtY2FyZFxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAxZW0gMS4xMjVlbTtcclxufVxyXG4ucm93IHtcclxuICAgIGhlaWdodDogMTQuNGVtO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICBoZWlnaHQ6IDE0NnB4O1xyXG59XHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG4ucG9zaXRpb24tY2FtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUycHg7XHJcbiAgICB0b3A6IDM3cHg7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIG1hcmdpbjogMTRweCAxOHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbmlvbi1ncmlkIHAge1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1ZW07XHJcbn1cclxuaW9uLWNoaXAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50b2dnbGUgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbi50b2dnbGUgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tcm93IGlvbi10b2dnbGUge1xyXG4gICAgLS13aWR0aDogMzRweDtcclxuICAgIC0taGVpZ2h0OiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzlmOWY5ZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjcxODc1ZW07XHJcbn1cclxuXHJcbmg2IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNlbGVjdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4uYnJhbmNoZXMgcCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5hZGRyZXNzIHAge1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmFkZCBwIHtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuLmdtYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZ21hcCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA3N3B4O1xyXG4gICAgbWF4LWhlaWdodDogNzdweDtcclxufVxyXG4uc3VuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzcwNzA3MDtcclxuICAgIG9wYWNpdHk6IDcwJTtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjODcxMTc4O1xyXG4gICAgLS1jaGVja21hcmstd2lkdGg6IDQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1jb2wgLmNvbmZpcm0ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idG4gaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgd2lkdGg6IDkuMzc1ZW07XHJcbiAgICBoZWlnaHQ6IDMuMTI1ZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "i29V":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-view/employee-view.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sun Group Water View</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"create-outline\" routerLink='/edit-employee'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-grid>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee name\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input placeholder=\"Employee number\"></ion-input>\n      </ion-item>\n    </p>\n    <p class=\"desc\">\n      Designation Tags\n      <ion-row>\n        <ion-textarea>\n          <ion-chip>\n            <ion-label>Tele Caller</ion-label>\n            <ion-icon name=\"close-circle\"></ion-icon>\n          </ion-chip>\n          <ion-chip>\n            <ion-label>Delivery support</ion-label>\n            <ion-icon name=\"close-circle\"></ion-icon>\n          </ion-chip>\n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p class=\"desc\">\n      Language Support\n      <ion-row>\n        <ion-textarea>\n          <ion-chip>\n            <ion-label>Tamil</ion-label>\n            <ion-icon name=\"close-circle\"></ion-icon>\n          </ion-chip>\n          <ion-chip>\n            <ion-label>English</ion-label>\n            <ion-icon name=\"close-circle\"></ion-icon>\n          </ion-chip>\n        </ion-textarea>\n      </ion-row>\n    </p>\n    <p class=\"desc\">\n      Online Tele Support\n      <ion-row class=\"check\">\n        <ion-col>\n          <ion-checkbox checked></ion-checkbox>\n          <ion-label> Chat</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox checked></ion-checkbox>\n          <ion-label> Video</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox></ion-checkbox>\n          <ion-label> Call</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n    <p class=\"desc\">\n      Delivery Support\n      <ion-row class=\"check\">\n        <ion-col>\n          <ion-checkbox checked></ion-checkbox>\n          <ion-label> Delivery</ion-label>\n        </ion-col>\n      </ion-row>\n    </p>\n    <p>\n      <ion-row class=\"toggle\">\n        <p>GPS Tracking</p>\n        <ion-toggle checked></ion-toggle>\n      </ion-row>\n    </p>\n    <h6>Work Hour Settings</h6>\n    <p>\n      <ion-item>\n        <ion-select placeholder=\"Working Hours\"></ion-select>\n      </ion-item>\n    </p>\n    <ion-row>\n      <ion-col>\n        <div class=\"select\">\n          <ion-select placeholder=\"Select One\" value=\"recent\" interface=\"popover\" mode=\"ios\">\n            <ion-select-option value=\"recent\" selected>Branches</ion-select-option>\n            <ion-select-option value=\"like\">Orders</ion-select-option>\n            <ion-select-option value=\"favourites\">Enquiry</ion-select-option>\n            <ion-select-option value=\"comments\">Customer</ion-select-option>\n          </ion-select>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"card\">\n      <ion-row>\n        <ion-col class=\"address\">\n          <p>Address</p>\n          <ion-row class=\"add\">\n            <p>No-1/38 Parathiyar street moovara pet madipkkam Chennai-600091 TamilNadu - India</p>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\" class=\"gmap\">\n          <img\n            src=\"https://play-lh.googleusercontent.com/0uRNRSe4iS6nhvfbBcoScHcBTx1PMmxkCx8rrEsI2UQcQeZ5ByKz8fkhwRqR3vttOg\"\n            alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <p class=\"sun\">Sun water group payment QR</p>\n    <p class=\"qr\">\n      <ion-icon name=\"qr-code-outline\"></ion-icon>\n    </p>\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">Confirm your acceptance and click call during call you will get OTP (SMS) and procced with\n          your owner</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button>Agree & Call</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "rSqm":
/*!*******************************************************!*\
  !*** ./src/app/employee-view/employee-view.module.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeViewPageModule", function() { return EmployeeViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _employee_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-view-routing.module */ "xM3b");
/* harmony import */ var _employee_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-view.page */ "93zE");







let EmployeeViewPageModule = class EmployeeViewPageModule {
};
EmployeeViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employee_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeViewPageRoutingModule"]
        ],
        declarations: [_employee_view_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeViewPage"]]
    })
], EmployeeViewPageModule);



/***/ }),

/***/ "xM3b":
/*!***************************************************************!*\
  !*** ./src/app/employee-view/employee-view-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EmployeeViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeViewPageRoutingModule", function() { return EmployeeViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-view.page */ "93zE");




const routes = [
    {
        path: '',
        component: _employee_view_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeViewPage"]
    }
];
let EmployeeViewPageRoutingModule = class EmployeeViewPageRoutingModule {
};
EmployeeViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeeViewPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=employee-view-employee-view-module-es2015.js.map