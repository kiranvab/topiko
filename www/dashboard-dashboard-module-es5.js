(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "B3xu":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function B3xu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #122959;\n  font-family: Comfortaa;\n  color: #fff;\n}\n\nstrong {\n  color: #fff;\n}\n\n.daily-div {\n  background: #e1e1e1;\n  padding: 2%;\n  padding-bottom: 8%;\n  font-size: 10px;\n  margin-bottom: -5px;\n}\n\n.daily-div img {\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background: #fff;\n}\n\n.daily-div ion-col {\n  text-align: center;\n}\n\n.daily-div ion-col p {\n  color: red;\n}\n\n.main {\n  background: #fff;\n  padding: 1% 2% 4% 4%;\n  border-radius: 10px 10px 0 0px;\n  font-size: 12px;\n}\n\n.main ion-col {\n  text-align: center;\n  font-size: 12px;\n}\n\n.main-div {\n  background: #ffc107;\n  padding: 5% 0 0 0;\n  margin-bottom: -15px;\n}\n\n.middle-div {\n  background: #e8e8e8;\n  padding: 5px;\n  border-radius: 5px 5px 0 0;\n  margin-top: 10px;\n  padding-bottom: 30px;\n}\n\n.middle-div ion-card {\n  height: 100px;\n}\n\n.middle-div h6 {\n  padding: 10px;\n  text-align: left;\n  margin: 0;\n}\n\n.middle-div ion-icon {\n  font-size: 32px;\n  padding: 5px 0;\n  color: #efefef;\n}\n\n.bottom-div {\n  background: #fafafa;\n  padding: 5px;\n  border-radius: 5px 5px 0 0;\n  margin-top: -10px;\n  padding-bottom: 30px;\n}\n\n.card1 {\n  background: #f2bd12;\n  text-align: center;\n  border-radius: 12px;\n  line-height: 4px;\n  height: 70px;\n  margin-right: 10px;\n}\n\n.card2 {\n  background: #9f1ca9;\n  text-align: center;\n  border-radius: 12px;\n  line-height: 4px;\n  height: 70px;\n  margin-right: 10px;\n}\n\n.card3 {\n  background: #e91e63;\n  text-align: center;\n  border-radius: 12px;\n  line-height: 4px;\n  height: 70px;\n  margin-right: 10px;\n}\n\n.card4 {\n  background: #cddc39;\n  text-align: center;\n  border-radius: 12px;\n  line-height: 4px;\n  height: 70px;\n  margin-right: 10px;\n}\n\nion-card {\n  margin: 0;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 12px;\n}\n\n.address {\n  font-size: 12px;\n}\n\n.small-text {\n  font-size: 11px;\n  line-height: 0;\n  text-align: left;\n}\n\n.count {\n  text-align: left;\n  font-size: 40px;\n  padding: 0;\n  margin: 0;\n  padding-left: 12px;\n  color: #2d3091;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBRUksV0FBQTtBQUNKOztBQUVBO0VBRUksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUVJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUVJLGtCQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0FBQUo7O0FBRUE7RUFFSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUVJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0FBSEo7O0FBTUE7RUFFSSxhQUFBO0FBSko7O0FBTUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSko7O0FBTUE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFKSjs7QUFNQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUpKOztBQU1BO0VBRUksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFNQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSko7O0FBTUE7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1BO0VBRUksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUVJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBRUksZUFBQTtBQU5KOztBQVNBO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVdBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFUSiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTIyOTU5O1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbnN0cm9uZyBcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kYWlseS1kaXZcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDglO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxufVxyXG4uZGFpbHktZGl2IGltZyBcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmRhaWx5LWRpdiBpb24tY29sIFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRhaWx5LWRpdiBpb24tY29sICBwXHJcbntcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ubWFpblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMSUgMiUgNCUgNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1haW4gaW9uLWNvbCBcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWFpbi1kaXZcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgIHBhZGRpbmc6IDUlIDAgIDAgMDtcclxuICAgIG1hcmdpbi1ib3R0b206LTE1cHg7XHJcblxyXG59XHJcbi5taWRkbGUtZGl2XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUtZGl2IGlvbi1jYXJkIFxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5taWRkbGUtZGl2IGg2IFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubWlkZGxlLWRpdiBpb24taWNvbiBcclxue1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxufVxyXG4uYm90dG9tLWRpdlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNhcmQxXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmMmJkMTI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDRweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY2FyZDJcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzlmMWNhOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jYXJkM1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmNhcmQ0XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNjZGRjMzk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDRweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQgXHJcbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWRkcmVzc1xyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zbWFsbC10ZXh0XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbi5jb3VudFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIGNvbG9yOiAjMmQzMDkxO1xyXG59Il19 */";
      /***/
    },

    /***/
    "KR73":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function KR73(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n<div class=\"main-div\">\n  \n  <ion-row>\n    <ion-col size=\"3\"><img  src=\"https://www.freelogodesign.org/Content/img/logo-samples/bakary.png\"></ion-col>\n    <ion-col size=\"9\">\n      <strong>Business Name</strong><br>\n      <div class=\"address\">\n      Business Address Line no 1 <br>\n        Business Address Line 2<br>\n        Postal code, City, State, Country\n      </div>  \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n\n<ion-button expand=\"block\" fill=\"outline\" size=\"small\" color=\"light\">Share Business Card</ion-button>\n<br>\n\n      \n    </ion-col>\n  </ion-row>\n\n</div>\n\n<div class=\"main\">\n  <h6>Business Summary</h6>\n  <ion-row>\n   <ion-col size=\"3\" routerLink=\"/offers\">\n   Visits\n   <p>0</p>\n   </ion-col>\n   <ion-col size=\"3\" routerLink=\"/offers\">\n    Enquiries\n    <p>0</p>\n    </ion-col>\n    <ion-col size=\"3\" routerLink=\"/offers\">\n      Reviews\n      <p>0</p>\n      </ion-col>\n    <ion-col size=\"3\" routerLink=\"/offers\">\n        Orders\n        <p>0</p>\n    </ion-col>\n  </ion-row>\n</div>\n\n<div class=\"daily-div\">\n  <h6>Daily Actions</h6>\n  <p class=\"small-text\">Most Frequently used actions to manage your business</p>\n  <ion-row>\n   <ion-col size=\"3\" routerLink=\"/offers\">\n     <div class=\"img-div\">\n    <img src=\"assets/icon1_1.png\">\n    </div>\n    Post <br> New offers\n   </ion-col>\n   <ion-col size=\"3\">\n    <div class=\"img-div\">\n    <img src=\"assets/icon2_1.png\">\n    </div>\n    Manage Exisitng Offers\n   </ion-col>\n   <ion-col size=\"3\" routerLink=\"/message\">\n    <div class=\"img-div\">\n    <img src=\"assets/icon3_1.png\">\n    </div>\n    Modify Services\n   </ion-col>\n   <ion-col size=\"3\" routerLink=\"/reviews\">\n    <div class=\"img-div\">\n    <img src=\"assets/icon4_1.png\">\n    </div>\n    Add Modify Employees\n   </ion-col>\n  </ion-row>\n</div>\n\n<div class=\"bottom-div\">\n  <h5>Enagage Customer</h5>\n  <p class=\"small-text\">View and interact with customers</p>\n  <ion-row>\n    <ion-col size=\"3\" routerLink=\"/customerenquiry\">\n      <ion-card>\n        <img src=\"assets/icon5.png\">\n        Phone calls\n      </ion-card>\n      \n    </ion-col> \n    <ion-col size=\"3\" routerLink=\"/enquiries\">\n      <ion-card>\n        <img src=\"assets/icon6.png\">\n        Reviews\n      </ion-card>\n      \n    </ion-col> \n      \n  </ion-row>\n</div>\n\n<div class=\"middle-div\">\n  <h5>Business Reports</h5>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card routerLink=\"/products\">\n        <ion-row>\n          <ion-col size=\"9\"><h6>Products</h6></ion-col>\n          <ion-col size=\"3\">\n            <ion-icon name=\"dice-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"count\">\n            12\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col> \n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-row>\n          <ion-col size=\"9\"><h6>Services</h6></ion-col>\n          <ion-col size=\"3\">\n            <ion-icon name=\"aperture-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"count\">\n            8\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col> \n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-row>\n          <ion-col size=\"9\"><h6>Offers</h6></ion-col>\n          <ion-col size=\"3\">\n            <ion-icon name=\"pricetags-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"count\">\n            45\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col> \n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-row>\n          <ion-col size=\"9\"><h6>Reviews</h6></ion-col>\n          <ion-col size=\"3\">\n            <ion-icon name=\"star-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"count\">\n            127\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col> \n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-row>\n          <ion-col size=\"9\"><h6>Business</h6></ion-col>\n          <ion-col size=\"3\">\n            <ion-icon name=\"business-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"count\">\n            2\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col> \n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-row>\n          <ion-col size=\"9\"><h6>Employees</h6></ion-col>\n          <ion-col size=\"3\"><ion-icon name=\"person-add-outline\"></ion-icon></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"count\">\n            5\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>  \n  </ion-row>\n</div>\n\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col routerLink=\"/calllist\">\n      <ion-icon name=\"grid-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/message\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/favourite\">\n      <ion-icon name=\"cog-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "NcNw":
    /*!*********************************************!*\
      !*** ./src/app/dashboard/dashboard.page.ts ***!
      \*********************************************/

    /*! exports provided: DashboardPage */

    /***/
    function NcNw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "KR73");
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      "B3xu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage() {
          _classCallCheck(this, DashboardPage);
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardPage);
      /***/
    },

    /***/
    "Oy4E":
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardPageRoutingModule */

    /***/
    function Oy4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
        return DashboardPageRoutingModule;
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


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.page */
      "NcNw");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
      }];

      var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardPageRoutingModule);
      /***/
    },

    /***/
    "TDBs":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function TDBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "Oy4E");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.page */
      "NcNw");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
      })], DashboardPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map