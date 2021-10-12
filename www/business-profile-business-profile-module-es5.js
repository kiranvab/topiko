(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-profile-business-profile-module"], {
    /***/
    "HWwL": function HWwL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" icon=\"chevron-back\" text=\"\"></ion-back-button>\n     <!--  <ion-menu-button></ion-menu-button> -->\n    </ion-buttons>\n    <ion-title>Business Profile</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"edit()\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor=\"let b of business\">\n\n  <ion-card class=\"first\">\n    <ion-row class=\"row\">\n      <ion-col class=\"bg\">\n        <ion-avatar>\n          <img src=\"{{b.logo}}\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details\">\n      <P class=\"name\">{{b.business_name}}</P>\n    </ion-row>\n    <ion-row class=\"details\">\n      <p class=\"ceo\">{{b.owner_name}}</p>\n    </ion-row>\n  </ion-card>\n\n  <div class=\"business-dyn\">\n    <ion-row>\n      <ion-col size=\"4\">Business ID</ion-col>\n      <ion-col class=\"id-color\">{{b.business_id}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Pin No</ion-col>\n      <ion-col class=\"id-color\">{{b.pin}}</ion-col>\n    </ion-row>\n  </div>\n\n  <!-- <ion-select placeholder=\"Business Profile\" class=\"select\" value=\"businessprofile\" interface=\"popover\" mode=\"ios\">\n    <ion-select-option value=\"businessprofile\" selected>Business Profile</ion-select-option>\n    <ion-select-option value=\"branch\">Branch</ion-select-option>\n    <ion-select-option value=\"city\">City</ion-select-option>\n  </ion-select> -->\n\n  <ion-grid class=\"grid\">\n    <ion-row>\n      <p class=\"top\">Business Type</p> <br>\n      <p class=\"bottom\">{{b.business_type}}</p>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Business Contact No</p>\n      <p class=\"bottom\">{{b.primary_contact}}</p>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Owner Name</p>\n      <p class=\"bottom\">{{b.owner_name}}</p>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Business based on</p>\n      <p class=\"bottom\">{{b.ownership_model}}</p>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Business Tags</p>\n      <p class=\"bottom\">{{b.tags}}</p>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Address</p>\n      <p class=\"bottom\">{{b.business_address}}</p>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Location</p>\n      <img class=\"map\"\n        src=\"https://play-lh.googleusercontent.com/0uRNRSe4iS6nhvfbBcoScHcBTx1PMmxkCx8rrEsI2UQcQeZ5ByKz8fkhwRqR3vttOg\"\n        alt=\"\">\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">View on your business</p>\n      <p class=\"bottom\">{{b.view}}</p>\n    </ion-row>\n    <ion-row>\n      <p class=\"top\">Your business story</p>\n      <p class=\"bottom\">{{b.busienss_story}}</p>\n    </ion-row>\n\n    <!-- <ion-select placeholder=\"Gallery\"></ion-select>\n\n    <ion-row class=\"card\">\n      <ion-col size=\"4\">\n        <ion-card>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-card>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-card>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-select placeholder=\"Certificate\"></ion-select>\n    <p class=\"upload\">Upload Certificate</p>\n    <ion-row class=\"card\">\n      <ion-col size=\"4\">\n        <ion-card>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-card>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"toggle\">\n      <ion-col>\n        <p>Certificate Hide</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-toggle checked></ion-toggle>\n      </ion-col>\n    </ion-row>\n    <ion-select placeholder=\"Partner Details\"></ion-select>\n    <ion-select placeholder=\"Year Of Commencement\"></ion-select>\n    <ion-select placeholder=\"Topiko Awards\"></ion-select>\n    <ion-select placeholder=\"Topiko Star Rating\"></ion-select>\n    \n  </ion-grid> -->\n</ion-content>";
      /***/
    },

    /***/
    "dDhC": function dDhC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessProfilePageRoutingModule", function () {
        return BusinessProfilePageRoutingModule;
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


      var _business_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./business-profile.page */
      "pj+H");

      var routes = [{
        path: '',
        component: _business_profile_page__WEBPACK_IMPORTED_MODULE_3__["BusinessProfilePage"]
      }];

      var BusinessProfilePageRoutingModule = function BusinessProfilePageRoutingModule() {
        _classCallCheck(this, BusinessProfilePageRoutingModule);
      };

      BusinessProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BusinessProfilePageRoutingModule);
      /***/
    },

    /***/
    "nTuE": function nTuE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.first {\n  margin: 1em 1.125em;\n}\n\n.row {\n  height: 14.4em;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 146px;\n  height: 146px;\n}\n\nion-avatar img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 50%;\n}\n\n.position-cam {\n  position: relative;\n  left: 52px;\n  top: 37px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n}\n\n.details .name {\n  color: #871178;\n  font-size: 1.25em;\n  margin: 5px;\n}\n\n.details .ceo {\n  color: #707070;\n  font-size: 0.875em;\n  margin: 0.3125em;\n}\n\n.business-dyn {\n  background: #e0e0e0;\n  padding: 0.5em;\n  margin: 1em 1.125em;\n}\n\n.id-color {\n  color: #871178;\n}\n\n.select {\n  color: #22272a;\n  padding: 6px 30px;\n}\n\n.grid {\n  margin: 0.75em 1.125em;\n  background: #ffffff;\n  padding: 0px 0.8125em;\n  margin-top: 0px;\n}\n\n.top {\n  color: #871178;\n  font-size: 1em;\n  width: 100%;\n  margin: 0.625em 0px;\n}\n\n.bottom {\n  color: #22272a;\n  font-size: 0.875em;\n  margin: 0px;\n  margin-bottom: 0.625em;\n}\n\n.map {\n  margin-bottom: 30px;\n}\n\n.card ion-card {\n  box-shadow: 0px 3px 6px #00000029;\n  height: 90px;\n  width: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card ion-icon {\n  width: 60px;\n  height: 60px;\n  color: #9f9f9f;\n}\n\n.upload {\n  color: #9f9f9f;\n  font-size: 0.9375em;\n}\n\n.toggle p {\n  font-size: 1em;\n  color: #22272a;\n  margin-top: 0.625em;\n}\n\nion-row ion-toggle {\n  --width: 34px;\n  --height: 14px;\n  --background-checked: linear-gradient(#871178, #3c1378);\n  --handle-background-checked: #9f9f9f;\n  padding-top: 0.71875em;\n}\n\n.button .lef {\n  text-align: left;\n}\n\n.button .righ {\n  text-align: right;\n}\n\n.button .lef .ion-buttons {\n  --background: #ffffff;\n  --color: #871178;\n  border: 2px solid #871178;\n  font-size: 0.85em;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n\n.button .righ ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 0.85em;\n  width: 123px;\n  height: 50px;\n  border-radius: 0.1875em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ1c2luZXNzLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFPSjs7QUFMQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBYUo7O0FBVkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBZUo7O0FBYkE7RUFDSSxtQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWlCSjs7QUFmQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQXFCSjs7QUFsQkE7RUFDSSxnQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxpQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBd0JKIiwiZmlsZSI6ImJ1c2luZXNzLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLy8gZmlyc3QtY2FyZFxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAxZW0gMS4xMjVlbTtcclxufVxyXG4ucm93IHtcclxuICAgIGhlaWdodDogMTQuNGVtO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5LjM3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICM0NDA5M2MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICBoZWlnaHQ6IDE0NnB4O1xyXG59XHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG4ucG9zaXRpb24tY2FtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUycHg7XHJcbiAgICB0b3A6IDM3cHg7XHJcbn1cclxuLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmRldGFpbHMgLm5hbWUge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5kZXRhaWxzIC5jZW8ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtO1xyXG59XHJcbi5idXNpbmVzcy1keW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgbWFyZ2luOiAxZW0gMS4xMjVlbTtcclxufVxyXG4uaWQtY29sb3Ige1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuLnNlbGVjdCB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIHBhZGRpbmc6IDZweCAzMHB4O1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgICBtYXJnaW46IDAuNzVlbSAxLjEyNWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweCAwLjgxMjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4udG9wIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMC42MjVlbSAwcHg7XHJcbn1cclxuLmJvdHRvbSB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVlbTtcclxufVxyXG4ubWFwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNhcmQgaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXJkIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbn1cclxuLnVwbG9hZCB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1ZW07XHJcbn1cclxuLnRvZ2dsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjYyNWVtO1xyXG59XHJcbmlvbi1yb3cgaW9uLXRvZ2dsZSB7XHJcbiAgICAtLXdpZHRoOiAzNHB4O1xyXG4gICAgLS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjOWY5ZjlmO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNzE4NzVlbTtcclxufVxyXG5cclxuLmJ1dHRvbiAubGVmIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJ1dHRvbiAucmlnaCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnV0dG9uIC5sZWYgLmlvbi1idXR0b25zIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICM4NzExNzg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcclxufVxyXG4uYnV0dG9uIC5yaWdoIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIHdpZHRoOiAxMjNweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTg3NWVtO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "pj+H": function pjH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessProfilePage", function () {
        return BusinessProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_business_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./business-profile.page.html */
      "HWwL");
      /* harmony import */


      var _business_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./business-profile.page.scss */
      "nTuE");
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

      var BusinessProfilePage = /*#__PURE__*/function () {
        function BusinessProfilePage(storage, http, router) {
          _classCallCheck(this, BusinessProfilePage);

          this.storage = storage;
          this.http = http;
          this.router = router;
        }

        _createClass(BusinessProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("bid").then(function (val) {
              _this.bid = val;
              console.log("Business ID", _this.bid);

              _this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "businessprofile.php?bid=" + _this.bid).subscribe(function (data) {
                _this.business = data;
                console.log("Business", _this.business);
              });
            });
          }
        }, {
          key: "edit",
          value: function edit() {
            this.storage.set("bid", this.bid);
            this.router.navigate(['edit-business']);
          }
        }]);

        return BusinessProfilePage;
      }();

      BusinessProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      BusinessProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-business-profile',
        template: _raw_loader_business_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_business_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BusinessProfilePage);
      /***/
    },

    /***/
    "w0yx": function w0yx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessProfilePageModule", function () {
        return BusinessProfilePageModule;
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


      var _business_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./business-profile-routing.module */
      "dDhC");
      /* harmony import */


      var _business_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./business-profile.page */
      "pj+H");

      var BusinessProfilePageModule = function BusinessProfilePageModule() {
        _classCallCheck(this, BusinessProfilePageModule);
      };

      BusinessProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _business_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessProfilePageRoutingModule"]],
        declarations: [_business_profile_page__WEBPACK_IMPORTED_MODULE_6__["BusinessProfilePage"]]
      })], BusinessProfilePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=business-profile-business-profile-module-es5.js.map