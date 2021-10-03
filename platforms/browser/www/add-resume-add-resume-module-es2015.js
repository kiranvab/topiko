(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-resume-add-resume-module"],{

/***/ "0hTx":
/*!***********************************************!*\
  !*** ./src/app/add-resume/add-resume.page.ts ***!
  \***********************************************/
/*! exports provided: AddResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResumePage", function() { return AddResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_resume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-resume.page.html */ "7jTo");
/* harmony import */ var _add_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-resume.page.scss */ "h1IB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddResumePage = class AddResumePage {
    constructor() { }
    ngOnInit() {
    }
};
AddResumePage.ctorParameters = () => [];
AddResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-resume',
        template: _raw_loader_add_resume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddResumePage);



/***/ }),

/***/ "7jTo":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-resume/add-resume.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\" mode=\"md\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg\" alt=\"\">\n        </ion-avatar>\n        <img class=\"position-cam\" src=\"assets/camera.svg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-item>\n    <ion-label></ion-label>\n    <ion-input type=\"text\" placeholder=\"Name\" class=\"input\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label></ion-label>\n    <ion-input type=\"number\" placeholder=\"Contact No\" class=\"input\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label></ion-label>\n    <ion-input type=\"text\" placeholder=\"Email Id\" class=\"input\"></ion-input>\n  </ion-item>\n\n  <h5>DOB</h5>\n  <ion-grid class=\"dob\">\n    <ion-row>\n      <ion-col class=\"border\">\n        <ion-input type=\"number\" placeholder=\"Date\" class=\"input\"></ion-input>\n      </ion-col>\n      <ion-col class=\"border\">\n        <ion-input type=\"number\" placeholder=\"Month\" class=\"input\"></ion-input>\n      </ion-col>\n      <ion-col class=\"border\">\n        <ion-input type=\"number\" placeholder=\"Year\" class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-radio-group value=\"gender\">\n      <h5>Gender</h5>\n      <ion-grid class=\"gender\">\n        <ion-row>\n          <ion-col>\n            <ion-radio value=\"male\"></ion-radio>\n            <ion-label>Male</ion-label>\n          </ion-col>\n\n          <ion-col>\n            <ion-radio value=\"female\"></ion-radio>\n            <ion-label>Female</ion-label>\n          </ion-col>\n\n          <ion-col>\n            <ion-radio value=\"other\"></ion-radio>\n            <ion-label>Other</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-radio-group>\n  </ion-list>\n\n  <h5>Designation For</h5>\n  <ion-item class=\"dob\">\n    <ion-label></ion-label>\n    <ion-input type=\"text\" placeholder=\"Enter Your Designation\" class=\"input\"></ion-input>\n  </ion-item>\n  <h5>Job Tags</h5>\n\n  <ion-row>\n    <ion-textarea>\n      <ion-chip>\n        <ion-label>UI&UX Designer</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n      <ion-chip>\n        <ion-label>Designer</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n    </ion-textarea>\n  </ion-row>\n\n  <ion-grid class=\"edu\">\n    <ion-row>\n      <ion-col>\n        <span class=\"title\">Education</span>\n      </ion-col>\n      <ion-col class=\"color\">\n        <span class=\"add\"><span class=\"plus\">+</span>Add</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class=\"title\">Experience</span>\n      </ion-col>\n      <ion-col class=\"color\">\n        <span class=\"add\"><span class=\"plus\">+</span>Add</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class=\"title\">Portfolio URL</span>\n      </ion-col>\n      <ion-col class=\"color\">\n        <span class=\"add\"><span class=\"plus\">+</span>Add</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"resume\">\n    <p>Upload Resume</p>\n    <ion-card class=\"upload\">\n      <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n      <p class=\"pdf\">Upload PDF</p>\n    </ion-card>\n\n    <input type=\"checkbox\" class=\"agree\" name=\"agree\">\n    <label for=\"agree\"> I agree to the <span class=\"terms\">Terms and Conditions</span></label>\n  </div>\n  <div class=\"button\">\n    <ion-button>Submit</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "h1IB":
/*!*************************************************!*\
  !*** ./src/app/add-resume/add-resume.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 1.125em;\n  color: #ffffff;\n  padding: 0px;\n  text-align: left;\n  height: 56px;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.input {\n  font-size: 1em;\n  color: #9f9f9f;\n}\n\nion-item {\n  margin-top: 2.24625em;\n  padding: 0em 2.1875em;\n}\n\nh5 {\n  margin-left: 1.75em;\n  margin-top: 1em;\n}\n\n.dob {\n  margin-top: 0.99625em;\n  margin-left: 1.75em;\n}\n\n.gender {\n  margin: 0px 18px;\n}\n\n.border {\n  border-bottom: 1px solid #9f9f9f;\n  margin: 0px 15px;\n  padding-left: 0%;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  margin: 0% 2.1875em 0% 1.75em;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n}\n\n.edu {\n  margin-top: 1.4375em;\n  margin-left: 1.75em;\n  margin-right: 2.1875em;\n}\n\n.title {\n  font-size: 1.125em;\n}\n\n.add {\n  float: right;\n  font-size: 1em;\n}\n\n.plus {\n  font-size: 1.5125em;\n}\n\n.color {\n  color: #871178;\n}\n\n.resume {\n  margin-left: 28px;\n  padding: 0.625em;\n}\n\n.upload {\n  width: 5.625em;\n  height: 5.625em;\n  background-color: #ffffff;\n  box-shadow: 0 0.1875em 0.375em #00000029;\n  margin-top: 21px;\n  margin-left: 0%;\n  color: #9f9f9f;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np {\n  font-size: 1.125em;\n}\n\n.pdf {\n  font-size: 0.5em;\n  margin-top: 0%;\n}\n\n.agree {\n  margin-top: 1.5625em;\n}\n\n.terms {\n  color: #871178;\n  text-decoration: underline;\n}\n\nlabel {\n  font-size: 0.875em;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0.625em;\n}\n\n.button ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFNSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBWUo7O0FBVkE7RUFDSSxpQkFBQTtBQWFKOztBQVhBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBY0o7O0FBWkE7RUFDSSxrQkFBQTtBQWVKOztBQWJBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxtQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGNBQUE7QUFrQko7O0FBaEJBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBb0JKOztBQWxCQTtFQUNJLGtCQUFBO0FBcUJKOztBQW5CQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQXNCSjs7QUFwQkE7RUFDSSxvQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksa0JBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUEwQko7O0FBeEJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUEyQkoiLCJmaWxlIjoiYWRkLXJlc3VtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4vLyBmaXJzdC1jYXJkXHJcbi5maXJzdCB7XHJcbiAgICBtYXJnaW46IDFlbSAxLjEyNWVtO1xyXG59XHJcbi5yb3cge1xyXG4gICAgaGVpZ2h0OiAxNC40ZW07XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxNDZweDtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbn1cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcbi5wb3NpdGlvbi1jYW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTJweDtcclxuICAgIHRvcDogMzdweDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNDYyNWVtO1xyXG4gICAgcGFkZGluZzogMGVtIDIuMTg3NWVtO1xyXG59XHJcbmg1IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuLmRvYiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjk5NjI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMS43NWVtO1xyXG59XHJcbi5nZW5kZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMThweDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWY5ZjlmO1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbn1cclxuaW9uLXRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCUgMi4xODc1ZW0gMCUgMS43NWVtO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1ZW07XHJcbn1cclxuaW9uLWNoaXAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbn1cclxuLmVkdSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjQzNzVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjc1ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuMTg3NWVtO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbn1cclxuLmFkZCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4ucGx1cyB7XHJcbiAgICBmb250LXNpemU6IDEuNTEyNWVtO1xyXG59XHJcbi5jb2xvciB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG4ucmVzdW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgcGFkZGluZzogMC42MjVlbTtcclxufVxyXG4udXBsb2FkIHtcclxuICAgIHdpZHRoOiA1LjYyNWVtO1xyXG4gICAgaGVpZ2h0OiA1LjYyNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xODc1ZW0gMC4zNzVlbSAjMDAwMDAwMjk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxufVxyXG4ucGRmIHtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxufVxyXG4uYWdyZWUge1xyXG4gICAgbWFyZ2luLXRvcDogMS41NjI1ZW07XHJcbn1cclxuLnRlcm1zIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVlbTtcclxufVxyXG4uYnV0dG9uIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "i4yQ":
/*!*************************************************!*\
  !*** ./src/app/add-resume/add-resume.module.ts ***!
  \*************************************************/
/*! exports provided: AddResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResumePageModule", function() { return AddResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-resume-routing.module */ "u7NM");
/* harmony import */ var _add_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-resume.page */ "0hTx");







let AddResumePageModule = class AddResumePageModule {
};
AddResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddResumePageRoutingModule"]
        ],
        declarations: [_add_resume_page__WEBPACK_IMPORTED_MODULE_6__["AddResumePage"]]
    })
], AddResumePageModule);



/***/ }),

/***/ "u7NM":
/*!*********************************************************!*\
  !*** ./src/app/add-resume/add-resume-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResumePageRoutingModule", function() { return AddResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-resume.page */ "0hTx");




const routes = [
    {
        path: '',
        component: _add_resume_page__WEBPACK_IMPORTED_MODULE_3__["AddResumePage"]
    }
];
let AddResumePageRoutingModule = class AddResumePageRoutingModule {
};
AddResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddResumePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=add-resume-add-resume-module-es2015.js.map