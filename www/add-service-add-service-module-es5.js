(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-service-add-service-module"], {
    /***/
    "9cQi": function cQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nh5 {\n  color: #871178;\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nion-grid {\n  margin: 14px 18px;\n  padding: 0px;\n}\n\nion-card ion-icon {\n  width: 40px;\n  height: 30px;\n  color: #9f9f9f;\n}\n\nion-card p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 0.625em 3.125em;\n  text-align: center;\n  line-height: 1.5em;\n}\n\n.first-card {\n  height: 249px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.second-card {\n  height: 169px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.third-card {\n  height: 75px;\n  margin: 0px;\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.left {\n  padding: 5px 2.5px 0px 0px;\n}\n\n.third-card ion-icon {\n  width: 25px;\n  height: 20px;\n}\n\n.third-card p {\n  font-size: 0.625em;\n  margin: 0.25em 0px;\n}\n\n.right {\n  padding: 5px 0px 0px 2.5px;\n}\n\n.second-grid p {\n  margin: 30px 0px;\n  margin-top: 10px;\n}\n\nion-textarea {\n  border: 1px solid #707070;\n  width: 100%;\n  opacity: 70%;\n  border-radius: 0.3125em;\n}\n\nion-chip {\n  font-size: 0.75em;\n  margin: 10px;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin: 1em 0px;\n}\n\n.toggle ion-col {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.toggle .textflow {\n  display: flex;\n  justify-content: flex-end;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.check {\n  margin-top: 30px;\n  margin-bottom: -8px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n}\n\n.btn ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 16px;\n  width: 7.6875em;\n  height: 3.125em;\n}\n\nion-select {\n  --placeholder-opacity: 100%;\n  --padding-start: 0px;\n}\n\nion-input {\n  --placeholder-opacity: 1 !important;\n  --padding-start: 0px;\n}\n\nion-item {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1zZXJ2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLDBCQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksMEJBQUE7QUFXSjs7QUFSQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBYUo7O0FBVkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFlSjs7QUFiQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBZ0JKOztBQWJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWdCSjs7QUFkQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBaUJKOztBQWZBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBbUJKOztBQWhCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQW1CSjs7QUFqQkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFvQko7O0FBbEJBO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxtQ0FBQTtFQUNBLG9CQUFBO0FBc0JKOztBQXBCQTtFQUNJLG9CQUFBO0FBdUJKIiwiZmlsZSI6ImFkZC1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmg1IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICBtYXJnaW46IDE0cHggMThweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG59XHJcbmlvbi1jYXJkIHAge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMC42MjVlbSAzLjEyNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcbi5maXJzdC1jYXJkIHtcclxuICAgIGhlaWdodDogMjQ5cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNlY29uZC1jYXJkIHtcclxuICAgIGhlaWdodDogMTY5cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRoaXJkLWNhcmQge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDVweCAyLjVweCAwcHggMHB4O1xyXG59XHJcbi50aGlyZC1jYXJkIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi50aGlyZC1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjYyNWVtO1xyXG4gICAgbWFyZ2luOiAwLjI1ZW0gMHB4O1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAyLjVweDtcclxufVxyXG5cclxuLnNlY29uZC1ncmlkIHAge1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLXRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtO1xyXG59XHJcbmlvbi1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4udG9nZ2xlIHAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbjogMWVtIDBweDtcclxufVxyXG4udG9nZ2xlIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRvZ2dsZSAudGV4dGZsb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuaW9uLXJvdyBpb24tdG9nZ2xlIHtcclxuICAgIC0td2lkdGg6IDM0cHg7XHJcbiAgICAtLWhlaWdodDogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM5ZjlmOWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMC43MTg3NWVtO1xyXG59XHJcblxyXG4uY2hlY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICM3MDcwNzA7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzg3MTE3ODtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiA0O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tY29sIC5jb25maXJtIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG59XHJcbi5jb25maXJtIHNwYW4ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ0biBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDcuNjg3NWVtO1xyXG4gICAgaGVpZ2h0OiAzLjEyNWVtO1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "aAcI": function aAcI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"left\">\n        <div *ngIf=\"upload_div\">\n          <ion-card class=\"first-card\" (click)=\"getPicture()\">\n            <ion-row>\n              <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n            </ion-row>\n            <ion-row>\n              <p>Upload Service Image</p>\n            </ion-row>\n          </ion-card>\n        </div>\n        <ion-card *ngIf=\"image_div\" class=\"first-card\">\n          <img *ngIf=\"image != ''\" width=\"100%\" src=\"{{image}}\" />\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <div *ngIf=\"video_div\">\n          <ion-card class=\"second-card\" (click)=\"getVideo()\">\n            <ion-row>\n              <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n            </ion-row>\n            <ion-row>\n              <p>Upload Service video</p>\n            </ion-row>\n          </ion-card>\n        </div>\n        <ion-card *ngIf=\"video_img\" class=\"second-card\">\n          <img *ngIf=\"video != ''\" width=\"100%\" src=\"{{video}}\" />\n        </ion-card>\n        <ion-row class=\"pad\">\n          <ion-col class=\"left\">\n            <div *ngIf=\"img1_div\">\n              <ion-card class=\"third-card\" (click)=\"getImg1()\">\n                <ion-row>\n                  <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n                </ion-row>\n                <ion-row>\n                  <p>Upload Image</p>\n                </ion-row>\n              </ion-card>\n            </div>\n            <ion-card class=\"third-card\" *ngIf=\"img1_img\">\n              <img *ngIf=\"img1 != ''\" width=\"100%\" src=\"{{img1}}\" />\n            </ion-card>\n          </ion-col>\n          <ion-col class=\"right\">\n            <div *ngIf=\"img2_div\">\n              <ion-card class=\"third-card\" (click)=\"getImg2()\">\n                <ion-row>\n                  <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n                </ion-row>\n                <ion-row>\n                  <p>Upload Image</p>\n                </ion-row>\n              </ion-card>\n            </div>\n            <ion-card class=\"third-card\" *ngIf=\"img2_img\">\n              <img *ngIf=\"img2 != ''\" width=\"100%\" src=\"{{img2}}\" />\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" class=\"left\">\n        <div *ngIf=\"img3_div\">\n          <ion-card class=\"third-card\" (click)=\"getImg3()\">\n            <ion-row>\n              <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n            </ion-row>\n            <ion-row>\n              <p>Upload Image</p>\n            </ion-row>\n          </ion-card>\n        </div>\n        <ion-card class=\"third-card\" *ngIf=\"img3_img\">\n          <img *ngIf=\"img3 != ''\" width=\"100%\" src=\"{{img3}}\" />\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <div *ngIf=\"banner_div\">\n          <ion-card class=\"third-card\" (click)=\"getBanner()\">\n            <ion-row>\n              <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n            </ion-row>\n            <ion-row>\n              <p>Upload Banner</p>\n            </ion-row>\n          </ion-card>\n        </div>\n        <ion-card class=\"third-card\" *ngIf=\"banner_img\">\n          <img *ngIf=\"banner != ''\" width=\"100%\" src=\"{{banner}}\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"second-grid\">\n\n    <ion-item>\n      <ion-input placeholder=\"Service Title\" [(ngModel)]=\"servicetitle\"></ion-input>\n    </ion-item>\n    <p style=\"margin: 0%; margin-top: 16px;\"> Service Tags</p>\n    <ion-row>\n      <ion-textarea [(ngModel)]=\"servicetags\">\n\n      </ion-textarea>\n    </ion-row>\n\n    <!-- <p>\n      <ion-item>\n        <ion-input placeholder=\"Measuring Type\"></ion-input>\n      </ion-item>\n    </p>\n    <ion-row>\n      <ion-textarea placeholder=\"Measuring Details\">\n      </ion-textarea>\n    </ion-row>\n    <p> -->\n    <p style=\"margin: 0%; margin-top: 16px;\">Description</p>\n    <ion-row>\n      <ion-textarea [(ngModel)]=\"description\"></ion-textarea>\n    </ion-row>\n\n    <p>\n      <ion-item>\n        <ion-input type=\"number\" placeholder=\"Actual Price\" [(ngModel)]=\"actualprice\"></ion-input>\n      </ion-item>\n    </p>\n    <p>\n      <ion-item>\n        <ion-input type=\"number\" placeholder=\"Discount\" [(ngModel)]=\"discount\"></ion-input>\n      </ion-item>\n    </p>\n    <!-- <p>\n      <ion-row class=\"toggle\">\n        <ion-col>\n          <p>Cash on Delivery</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"textflow\">\n          <ion-toggle checked mode=\"md\"></ion-toggle>\n        </ion-col>\n      </ion-row>\n    </p> -->\n    <ion-row class=\"check\">\n      <ion-col size=\"1\">\n        <ion-checkbox ></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn\">\n      <ion-button (click)=\"submit()\">Submit</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "nXAF": function nXAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddServicePageRoutingModule", function () {
        return AddServicePageRoutingModule;
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


      var _add_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-service.page */
      "wW+W");

      var routes = [{
        path: '',
        component: _add_service_page__WEBPACK_IMPORTED_MODULE_3__["AddServicePage"]
      }];

      var AddServicePageRoutingModule = function AddServicePageRoutingModule() {
        _classCallCheck(this, AddServicePageRoutingModule);
      };

      AddServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddServicePageRoutingModule);
      /***/
    },

    /***/
    "oOJ9": function oOJ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddServicePageModule", function () {
        return AddServicePageModule;
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


      var _add_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-service-routing.module */
      "nXAF");
      /* harmony import */


      var _add_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-service.page */
      "wW+W");

      var AddServicePageModule = function AddServicePageModule() {
        _classCallCheck(this, AddServicePageModule);
      };

      AddServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddServicePageRoutingModule"]],
        declarations: [_add_service_page__WEBPACK_IMPORTED_MODULE_6__["AddServicePage"]]
      })], AddServicePageModule);
      /***/
    },

    /***/
    "wW+W": function wWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddServicePage", function () {
        return AddServicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-service.page.html */
      "aAcI");
      /* harmony import */


      var _add_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-service.page.scss */
      "9cQi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");

      var AddServicePage = /*#__PURE__*/function () {
        function AddServicePage(storage, http, camera) {
          _classCallCheck(this, AddServicePage);

          this.storage = storage;
          this.http = http;
          this.camera = camera;
          this.upload_div = true;
          this.image_div = false;
          this.video_img = false;
          this.video_div = true;
          this.banner_div = true;
          this.banner_img = false;
          this.img1_div = true;
          this.img1_img = false;
          this.img2_div = true;
          this.img2_img = false;
          this.img3_div = true;
          this.img3_img = false;
        }

        _createClass(AddServicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bid").then(function (val) {
              _this.buid = val;
              console.log(_this.buid);
            });
          }
        }, {
          key: "getPicture",
          value: function getPicture() {
            var _this2 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this2.image = 'data:image/jpeg;base64,' + imageData;
              _this2.upload_div = false;
              _this2.image_div = true;
            });
          }
        }, {
          key: "getBanner",
          value: function getBanner() {
            var _this3 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (BannerData) {
              _this3.banner = 'data:image/jpeg;base64,' + BannerData;
              _this3.banner_img = true;
              _this3.banner_div = false;
            });
          }
        }, {
          key: "getVideo",
          value: function getVideo() {
            var _this4 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (videoimg) {
              _this4.video = 'data:image/jpeg;base64,' + videoimg;
              _this4.video_div = false;
              _this4.video_img = true;
            });
          }
        }, {
          key: "getImg1",
          value: function getImg1() {
            var _this5 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (img1Data) {
              _this5.img1 = 'data:image/jpeg;base64,' + img1Data;
              _this5.img1_div = false;
              _this5.img1_img = true;
            });
          }
        }, {
          key: "getImg2",
          value: function getImg2() {
            var _this6 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (img2Data) {
              _this6.img2 = 'data:image/jpeg;base64,' + img2Data;
              _this6.img2_div = false;
              _this6.img2_img = true;
            });
          }
        }, {
          key: "getImg3",
          value: function getImg3() {
            var _this7 = this;

            var options = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (img3Data) {
              _this7.img3 = 'data:image/jpeg;base64,' + img3Data;
              _this7.img3_div = false;
              _this7.img3_img = true;
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this8 = this;

            var link = _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].ApiUrl + "addservice.php";
            var mydata = JSON.stringify({
              'bid': this.buid,
              'servicetitle': this.servicetitle,
              'servicetags': this.servicetags,
              'description': this.description,
              'actualprice': this.actualprice,
              'discount': this.discount,
              'image': this.image,
              'banner': this.banner,
              'video': this.video,
              'img1': this.img1,
              'img2': this.img2,
              'img3': this.img3
            });
            console.log(mydata);
            this.http.post(link, mydata).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.addservice = data;
                        console.log("Service details", this.addservice);

                        if (this.addservice == 1) {
                          this.router.navigate(['/service']);
                        } else {
                          alert("Something went wrong !");
                        }

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }]);

        return AddServicePage;
      }();

      AddServicePage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
        }];
      };

      AddServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-service',
        template: _raw_loader_add_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddServicePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-service-add-service-module-es5.js.map