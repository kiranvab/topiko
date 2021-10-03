(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
    /***/
    "A03k": function A03k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
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


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "vgIa");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "QR/W": function QRW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "A03k");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "vgIa");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "tDqb": function tDqb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 85px;\n  --ion-background-color: #fff;\n}\n\n.margin-class {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.top-slide {\n  margin-top: 16px;\n}\n\n.purple-btn-sm {\n  --background: linear-gradient(#871178, #3c1378) !important;\n  height: 30px;\n  border: 0;\n  width: 70px;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 9px;\n}\n\n.red-bus {\n  margin-top: 10px;\n}\n\n.star {\n  color: orange;\n}\n\n.shield {\n  color: green;\n}\n\n.ceo {\n  font-size: 10px;\n  color: #607d8b;\n  margin: 0px;\n}\n\n.shop-btn {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.travel ion-button {\n  margin-right: 10px;\n}\n\n.lorem {\n  color: #707070;\n}\n\n.map {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nstrong {\n  color: #22272a;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.third-bg {\n  background: #ebeb eb;\n}\n\n.col-mt-3 {\n  margin-top: 3%;\n  margin-bottom: -5%;\n}\n\n.col-mt-3 img {\n  border-radius: 10px;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.featured-img ion-col img {\n  border-radius: 50%;\n  padding: 0;\n}\n\n.hearticon-div {\n  display: flex;\n  align-items: center;\n}\n\n.heart-icon {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  color: #de0000;\n}\n\n.coun {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n.service-grid {\n  padding: 0px 8px;\n}\n\n.service-img {\n  border-radius: 8px;\n}\n\n/* Carerer Styles start */\n\n.cont {\n  text-align: center;\n}\n\n.cont ion-title {\n  font-size: 18px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 1.5px;\n}\n\n.notif {\n  font-size: 1.225em;\n  font-weight: bold;\n}\n\nion-content {\n  --color: #22272a;\n  --background: #f5f5f5;\n}\n\n.row {\n  height: 12em;\n  background: #f5f5f5;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f5f5f5;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 0.5em;\n  color: #871178;\n  font-weight: bold;\n}\n\n.number {\n  font-size: 0.875em;\n  margin-top: 0.5em;\n  margin-bottom: 0%;\n  color: #707070;\n}\n\n.dashboard {\n  margin-top: 0.773125em;\n  margin-bottom: 0.590625em;\n  margin-left: 18px;\n  font-size: 0.875em;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\nion-fab-button {\n  --ion-color-base: #f2f2f2 !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\nion-badge {\n  --ion-color-base: #d60000 !important;\n  --border-radius: 50%;\n}\n\n.icon-img {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 2px;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 1.375em;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.likes ion-col {\n  text-align: center;\n  border-right: 1px solid #707070;\n  border-collapse: 50%;\n}\n\n.like {\n  font-size: 0.875em;\n}\n\n.count {\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.likes .comment {\n  border: none;\n}\n\n.image {\n  min-width: 100%;\n  margin-top: 10px;\n  min-height: 230px;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n  bottom: 25px;\n}\n\n.round-img {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 50px;\n  right: 9px;\n  background: #919191;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.round-img ion-icon {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n/* Career styles end */\n\n/*overview styles star */\n\n.cont {\n  text-align: center;\n}\n\n.cont ion-title {\n  font-size: 18px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 1.5px;\n}\n\nion-content {\n  --color: #22272a;\n  --background: #f5f5f5;\n  margin: 0px 1.125em;\n}\n\nion-segment {\n  background: #f5f5f5;\n  color: #707070;\n  font-size: 0.9375em;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n}\n\n.box {\n  padding: 10px 18px;\n  padding-bottom: 0.5em;\n  margin: 0%;\n  border-radius: 0%;\n}\n\n.box ion-avatar {\n  margin-top: 5px;\n}\n\nion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\nion-avatar .border {\n  border: 0.0125em solid #707070;\n}\n\n.title {\n  margin-top: 0em;\n  padding-left: 0%;\n}\n\n.title p {\n  font-size: 1.125em;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 3px 0px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.ceo p {\n  font-size: 0.75em;\n  color: #707070;\n}\n\n.director p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 4px 0px;\n}\n\n.text p {\n  margin: 0px 0.625em;\n  font-size: 0.875em;\n  line-height: 1.5em;\n}\n\n.read-more {\n  float: right;\n}\n\n.read-more p {\n  font-size: 0.75em;\n  font-weight: bold;\n  color: #871178;\n  margin: 0px;\n  margin-right: 0.625em;\n  margin-bottom: 0.75em;\n}\n\n.ratings {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.rating p {\n  color: #871178;\n  font-size: 0.875em;\n  font-weight: bold;\n  margin: 1.5625em 0px;\n  margin-bottom: 0%;\n}\n\n.rate p {\n  color: #871178;\n  font-size: 40px;\n  margin: 4px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star p {\n  font-size: 0.625em;\n  padding-left: 5px;\n  color: #22272a;\n  margin: 0%;\n  margin-top: 2px;\n}\n\n.num p {\n  font-size: 0.75em;\n  color: #9f9f9f;\n  margin: 3px;\n}\n\n.certify p {\n  font-size: 0.875em;\n  color: #871178;\n  font-weight: bold;\n  margin-bottom: 0.3125em;\n}\n\nion-card {\n  padding: 10px 5px;\n  margin: 0;\n}\n\n.square ion-card {\n  box-shadow: 0px 3px 6px #00000029;\n  height: 55px;\n  width: 66px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.product p {\n  font-size: 0.875em;\n  color: #871178;\n  margin-bottom: 0.3125em;\n}\n\n.product ion-icon {\n  color: #871178;\n  margin-top: 10px;\n}\n\n.overview-row {\n  margin-bottom: 10px;\n}\n\n.third-card .overflowroww {\n  margin-bottom: 7px;\n  padding-left: 5px;\n}\n\n.name .namee {\n  margin-top: 0%;\n}\n\n.namerow .nameee {\n  padding-left: 5px;\n}\n\n.designn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  font-size: 0.75em;\n  margin: 0px 10px;\n}\n\n.scrolll {\n  height: 30px;\n  margin-bottom: 10px;\n  display: flex;\n  overflow-x: auto;\n}\n\n.scrolll p {\n  color: #707070;\n}\n\n.borderr p {\n  height: 1.2em;\n  width: 1px;\n  border-right: 1px solid #00000029;\n  margin-top: 5.5px;\n}\n\n.avatarr ion-avatar {\n  width: 78px;\n  height: 78px;\n}\n\n.designer p {\n  color: #707070;\n  font-size: 0.75em;\n  margin: 0.3125em 0px;\n}\n\n.border p {\n  border-right: 1px solid #707070;\n  height: 1em;\n}\n\n.address {\n  padding: 0.3125em;\n  border-radius: 3px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.add p {\n  color: #707070;\n  font-size: 0.875em;\n  margin: 5px 0px;\n}\n\n.street p {\n  color: #22272a;\n  font-size: 0.75em;\n  margin: 0%;\n  line-height: 1.8em;\n}\n\n.third-card {\n  border-radius: 0px;\n  box-shadow: none;\n  border-bottom: 1px solid rgba(112, 112, 112, 0.3);\n  padding-bottom: 0.625em;\n}\n\n.name {\n  padding-left: 0%;\n}\n\n.name p {\n  color: #22272a;\n  font-size: 1.125em;\n  margin: 2px 0px;\n  margin-top: 0.625em;\n}\n\n.market p {\n  color: #707070;\n  font-size: 0.75em;\n  margin: 2px 0px;\n}\n\n.lang p {\n  color: #871178;\n  font-size: 0.625em;\n  margin: 2px 0px;\n}\n\n.lang span {\n  color: #707070;\n  padding: 0px 2px;\n}\n\n.fabb {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 2.125em;\n  width: 2.125em;\n  --box-shadow: none;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 18px;\n  width: 18px;\n}\n\n.views p {\n  color: #1e1e1e;\n  font-size: 0.875em;\n  margin: 0.3125em 0.625em;\n  margin-top: 12px;\n  font-weight: bold;\n}\n\n.inp .grid {\n  border: 0.3px solid rgba(112, 112, 112, 0.3);\n  border-radius: 31px;\n  background-color: #f5f5f5;\n}\n\n.grid {\n  padding: 1.5%;\n}\n\n.msg {\n  padding: 0%;\n}\n\n.icn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid ion-icon {\n  color: #707070;\n  font-size: 18px;\n}\n\n.topup {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: right;\n  align-items: center;\n  padding-right: 0.3125em;\n}\n\n.topup ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  width: 90px;\n  height: 36px;\n  --border-radius: 18px;\n  font-size: 1.125em;\n  margin-bottom: 20px;\n}\n\n/*overview styles end */\n\n/* Product styles start */\n\n.rs {\n  color: #871178;\n}\n\n.real-price {\n  text-decoration: line-through;\n  color: #9f9f9f;\n}\n\n.off {\n  color: #39ac00;\n  font-size: 0.625em;\n}\n\n.containers {\n  background-color: #e0e0e0;\n}\n\n.ics {\n  background: #fff;\n  border-radius: 50%;\n  padding: 10px;\n  font-size: 32px;\n  text-align: center;\n  margin: 10px;\n  height: 60px;\n}\n\n.ics-text {\n  text-align: center;\n  color: #871178;\n  line-height: 0;\n  padding-bottom: 15px;\n  font-size: 12px;\n}\n\n.item {\n  background-color: #f6f6f6;\n}\n\n.item p {\n  color: #22272a;\n  font-size: 1em;\n  margin: 6px 0px;\n}\n\n.item span {\n  font-size: 0.875em;\n}\n\nh6 {\n  color: #22272a;\n  margin-top: 5px;\n}\n\n.des p {\n  line-height: 1.6;\n  font-size: 0.8em;\n  color: #707070;\n}\n\n.third {\n  padding-top: 0%;\n  margin-bottom: 10px;\n}\n\n.fourth {\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.head {\n  font-size: 1em;\n}\n\n.view-all {\n  color: #871178;\n  font-size: 12px;\n  text-align: right;\n}\n\n.rfq {\n  text-align: center;\n  color: #871178;\n  font-size: 0.8em;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n/* prodcut styles end */\n\n/* post styles start */\n\n.chats .text {\n  color: #707070;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.seperator {\n  margin: 28px 0px;\n  margin-bottom: 32px;\n}\n\n.post-chats {\n  padding-top: 0%;\n}\n\n.post-div {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.post-card {\n  background: transparent;\n  padding: 0%;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n  margin: 0 auto;\n  padding: 5px;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.image {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n}\n\nion-card {\n  box-shadow: none;\n  border-radius: 0%;\n}\n\n.qualification p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 2px 0px;\n}\n\n.degree p {\n  color: #707070;\n  font-size: 0.75em;\n  margin: 2px 0px;\n}\n\n.bcom p {\n  color: #707070;\n  font-size: 0.875em;\n  margin: 0px;\n}\n\n.dashboard {\n  margin-top: 0.773125em;\n  margin-bottom: 0.590625em;\n  margin-left: 18px;\n  font-size: 0.875em;\n  line-height: 2em;\n}\n\n.description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 20px;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.likes ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.like {\n  font-size: 0.875em;\n  margin: 5px 0px;\n}\n\n.count {\n  color: #871178;\n  font-size: 0.875em;\n  margin: 5px 0px;\n}\n\n.likes .comment {\n  border: none;\n}\n\n.border p {\n  border-right: 1px solid #00000029;\n  height: 2em;\n}\n\n/* post styles end */\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 36px;\n  width: 36px;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.fab-overview {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fab-overview .fabbb {\n  width: 42px;\n  height: 42px;\n}\n\n.fabbb ion-icon {\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.ser-img {\n  width: 100%;\n  height: 200px;\n}\n\n.fabs {\n  width: 4em;\n  height: 4em;\n}\n\n.fabstxt {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFHQSw0QkFBQTtBQURKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFHQTtFQUNJLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLG9CQUFBO0FBVUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFTSjs7QUFQQTtFQUNJLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFVSjs7QUFMQTtFQUNJLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtBQVNKOztBQUxBLHlCQUFBOztBQUVBO0VBQ0ksa0JB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LG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBRUE7RUFDSSxpQ0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQSxvQkFBQTs7QUFHQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBS0o7O0FBRkE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBRUksVUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUVJLGdCQUFBO0FBSUoiLCJmaWxlIjoiZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4NXB4O1xyXG4gICAgLy8gLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vLyB0b3Bpa28gZGl2IHN0YXJ0cyBoZXJlXHJcbi5tYXJnaW4tY2xhc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnRvcC1zbGlkZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5wdXJwbGUtYnRuLXNtIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuLnJlZC1idXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uc3RhciB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbi5zaGllbGQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5jZW8ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM2MDdkOGI7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uc2hvcC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50cmF2ZWwgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmxvcmVtIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5tYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5zdHJvbmcge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi50aGlyZC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYlxyXG4gICAgZWI7XHJcbn1cclxuXHJcbi5jb2wtbXQtMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC01JTtcclxufVxyXG4uY29sLW10LTMgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmltZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLy8gLmNvdW50IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIHBhZGRpbmc6IDhweCAwO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcbi5mZWF0dXJlZC1pbWcgaW9uLWNvbCBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaGVhcnRpY29uLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaGVhcnQtaWNvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNkZTAwMDA7XHJcbn1cclxuLmNvdW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLy8gdG9waWtvIGRpdiBlbmRzIGhlcmVcclxuXHJcbi8vIHNlcnZpY2UgU3R5bGVzIHN0YXJ0IC8vXHJcbi5zZXJ2aWNlLWdyaWQge1xyXG4gICAgcGFkZGluZzogMHB4IDhweDtcclxufVxyXG4uc2VydmljZS1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi8vIHNlcnZpY2UgZGl2IGVuZHMgaGVyZVxyXG5cclxuLyogQ2FyZXJlciBTdHlsZXMgc3RhcnQgKi9cclxuXHJcbi5jb250IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udCBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbn1cclxuLm5vdGlmIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yMjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tY29sb3I6ICMyMjI3MmE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDguMTg3NWVtO1xyXG4gICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5kYXNoYm9hcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMC43NzMxMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNTkwNjI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG4uaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjA7XHJcbn1cclxuLmljb25zIHAge1xyXG4gICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZDYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaWNvbi1pbWdcclxue1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5kYXRlIHtcclxuICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNjI1ZW07XHJcbn1cclxuLmRhdGUgcCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogI2Y4ZjhmODtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjYyNWVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNzEyNWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmxpa2VzIGlvbi1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogNTAlO1xyXG59XHJcbi5saWtlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG4uY291bnQge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLmxpa2VzIC5jb21tZW50IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaW1hZ2Uge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xyXG59XHJcbi5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbn1cclxuLnJvdW5kLWltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHJpZ2h0OiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTE5MTkxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucm91bmQtaW1nIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4vKiBDYXJlZXIgc3R5bGVzIGVuZCAqL1xyXG5cclxuLypvdmVydmlldyBzdHlsZXMgc3RhciAqL1xyXG4uY29udCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnQgaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWNvbG9yOiAjMjIyNzJhO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgbWFyZ2luOiAwcHggMS4xMjVlbTtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVlbTtcclxufVxyXG5pb24tc2VnbWVudCBpb24tbGFiZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbi5ib3ggaW9uLWF2YXRhciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjFweDtcclxuICAgIGhlaWdodDogNjFweDtcclxufVxyXG5pb24tYXZhdGFyIC5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwLjAxMjVlbSBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG59XHJcbi50aXRsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbjogM3B4IDBweDtcclxufVxyXG4udGl0bGUgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMzOWFjMDA7XHJcbn1cclxuLmNlbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmRpcmVjdG9yIHAge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogNHB4IDBweDtcclxufVxyXG4udGV4dCBwIHtcclxuICAgIG1hcmdpbjogMHB4IDAuNjI1ZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbn1cclxuLnJlYWQtbW9yZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnJlYWQtbW9yZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xyXG59XHJcblxyXG4ucmF0aW5ncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmF0aW5nIHAge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMS41NjI1ZW0gMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbn1cclxuLnJhdGUgcCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbjogNHB4O1xyXG59XHJcbi5zdGFyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmNiOTAwO1xyXG59XHJcbi5zdGFyIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjYyNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuLm51bSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG4uY2VydGlmeSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjMxMjVlbTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnNxdWFyZSBpb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByb2R1Y3QgcCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMzEyNWVtO1xyXG59XHJcbi5wcm9kdWN0IGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ub3ZlcnZpZXctcm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRoaXJkLWNhcmQgLm92ZXJmbG93cm93dyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ubmFtZSAubmFtZWUge1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbn1cclxuLm5hbWVyb3cgLm5hbWVlZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4uZGVzaWdubiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG59XHJcbi5zY3JvbGxsIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uc2Nyb2xsbCBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5ib3JkZXJyIHAge1xyXG4gICAgaGVpZ2h0OiAxLjJlbTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwMjk7XHJcbiAgICBtYXJnaW4tdG9wOiA1LjVweDtcclxufVxyXG4uYXZhdGFyciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA3OHB4O1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG59XHJcblxyXG4uZGVzaWduZXIgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbSAwcHg7XHJcbn1cclxuLmJvcmRlciBwIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxufVxyXG4uYWRkcmVzcyB7XHJcbiAgICBwYWRkaW5nOiAwLjMxMjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG4uYWRkIHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLnN0cmVldCBwIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG59XHJcbi50aGlyZC1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjMpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XHJcbn1cclxuLm5hbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4ubmFtZSBwIHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxufVxyXG4ubWFya2V0IHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMnB4IDBweDtcclxufVxyXG4ubGFuZyBwIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjYyNWVtO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG59XHJcbi5sYW5nIHNwYW4ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBwYWRkaW5nOiAwcHggMnB4O1xyXG59XHJcblxyXG4uZmFiYiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NzExNzgsICMzYzEzNzgpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMi4xMjVlbTtcclxuICAgIHdpZHRoOiAyLjEyNWVtO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5mYWIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxufVxyXG4udmlld3MgcCB7XHJcbiAgICBjb2xvcjogIzFlMWUxZTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbjogMC4zMTI1ZW0gMC42MjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW5wIC5ncmlkIHtcclxuICAgIGJvcmRlcjogMC4zcHggc29saWQgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLmdyaWQge1xyXG4gICAgcGFkZGluZzogMS41JTtcclxufVxyXG4ubXNnIHtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcbi5pY24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZ3JpZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4udG9wdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4zMTI1ZW07XHJcbn1cclxuLnRvcHVwIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qb3ZlcnZpZXcgc3R5bGVzIGVuZCAqL1xyXG5cclxuLyogUHJvZHVjdCBzdHlsZXMgc3RhcnQgKi9cclxuLnJzIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5yZWFsLXByaWNlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbn1cclxuLm9mZiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVlbTtcclxufVxyXG4uY29udGFpbmVycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uaWNzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uaWNzLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcbi5pdGVtIHAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbjogNnB4IDBweDtcclxufVxyXG4uaXRlbSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG5oNiB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZGVzIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4udGhpcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm91cnRoIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuLnZpZXctYWxsIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnJmcSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi8qIHByb2RjdXQgc3R5bGVzIGVuZCAqL1xyXG5cclxuLyogcG9zdCBzdHlsZXMgc3RhcnQgKi9cclxuXHJcbi8vIC5kYXNoYm9hcmQgcCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwLjc3MzEyNWVtO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMC41OTA2MjVlbTtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4vLyB9XHJcbi8vIC5zY3JvbGwge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4vLyB9XHJcbi8vIC5pY29ucyB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxLjEyNWVtO1xyXG4vLyB9XHJcbi8vIC5pY29ucyBwIHtcclxuLy8gICAgIG1hcmdpbjogOHB4IDBweDtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyB9XHJcbi8vIGlvbi1mYWItYnV0dG9uIHtcclxuLy8gICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmMmYyZjIgIWltcG9ydGFudDtcclxuLy8gICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuLy8gfVxyXG4vLyBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbi8vICAgICBjb2xvcjogIzcwNzA3MDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMzBweDtcclxuLy8gfVxyXG4vLyBpb24tYmFkZ2Uge1xyXG4vLyAgICAgLS1pb24tY29sb3ItYmFzZTogI2Q2MDAwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vIH1cclxuLy8gZGl2IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuLy8gLmRhdGUge1xyXG4vLyAgICAgd2lkdGg6IDk1cHg7XHJcbi8vICAgICBoZWlnaHQ6IDI2cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxuLy8gfVxyXG4vLyAuZGF0ZSBwIHtcclxuLy8gICAgIG1hcmdpbjogMCU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuLy8gICAgIGNvbG9yOiAjZjhmOGY4O1xyXG4vLyB9XHJcbi8vIC5pbWFnZSB7XHJcbi8vICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgICAgbWluLWhlaWdodDogMjMwcHg7XHJcbi8vIH1cclxuLy8gLmNvbHVtbiB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIGJvdHRvbTogMjJweDtcclxuLy8gfVxyXG4vLyAucm91bmQtaW1nIHtcclxuLy8gICAgIHdpZHRoOiAzMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgdG9wOiA1MHB4O1xyXG4vLyAgICAgcmlnaHQ6IDlweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICM5MTkxOTE7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vIH1cclxuLy8gLnJvdW5kLWltZyBpb24taWNvbiB7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gfVxyXG5cclxuLy8gLnNlY29uZCB7XHJcbi8vICAgICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgICAgbWFyZ2luOiAxMnB4IDBweDtcclxuLy8gfVxyXG4vLyAuZGVzY3JpcHRpb24ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbi8vICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC4wNzEyNWVtO1xyXG4vLyAgICAgY29sb3I6ICM3MDcwNzA7XHJcbi8vIH1cclxuLy8gLmxpa2VzIGlvbi1jb2wge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5saWtlIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuLy8gfVxyXG4vLyAubGluZXMge1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4vLyAgICAgbWFyZ2luOiAxNHB4IDBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4vLyAgICAgcGFkZGluZzogMCU7XHJcbi8vIH1cclxuLy8gLmNvdW50IHtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4vLyB9XHJcbi8vIC5saWtlcyAuY29tbWVudCB7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi5jaGF0cyAudGV4dCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmNoYXRzIC5udW1iZXIge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5zZXBlcmF0b3Ige1xyXG4gICAgbWFyZ2luOiAyOHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuLnBvc3QtY2hhdHMge1xyXG4gICAgcGFkZGluZy10b3A6IDAlO1xyXG59XHJcbi5wb3N0LWRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucG9zdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5kYXRlIHAge1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuLmltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuXHJcbi5xdWFsaWZpY2F0aW9uIHAge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMnB4IDBweDtcclxufVxyXG4uZGVncmVlIHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMnB4IDBweDtcclxufVxyXG4uYmNvbSBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmRhc2hib2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjc3MzEyNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41OTA2MjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3MTI1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLmxpa2VzIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxpa2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5jb3VudCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubGlrZXMgLmNvbW1lbnQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5ib3JkZXIgcCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwMjk7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuLyogcG9zdCBzdHlsZXMgZW5kICovXHJcblxyXG4vLyBmYWJcclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA0LjM3NWVtO1xyXG4gICAgd2lkdGg6IDQuMzc1ZW07XHJcbn1cclxuLmZhYiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG59XHJcbmlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmZhYi1vdmVydmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mYWItb3ZlcnZpZXcgLmZhYmJiIHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG59XHJcbi5mYWJiYiBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlci1pbWdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5mYWJzXHJcbntcclxuICAgIHdpZHRoOjRlbTtcclxuICAgIGhlaWdodDo0ZW07XHJcbn1cclxuLmZhYnN0eHQgXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "vgIa": function vgIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./details.page.html */
      "z71o");
      /* harmony import */


      var _details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./details.page.scss */
      "tDqb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(actionsheetCtrl, alertCtrl, storage, http, router, alertController) {
          var _this = this;

          _classCallCheck(this, DetailsPage);

          this.actionsheetCtrl = actionsheetCtrl;
          this.alertCtrl = alertCtrl;
          this.storage = storage;
          this.http = http;
          this.router = router;
          this.alertController = alertController;
          this.segmentModel = "topiko";
          this.storage.get("userdetails").then(function (val) {
            _this.udata = val;
            _this.user_id = _this.udata[0].id;

            if (!_this.udata) {
              _this.router.navigate(['login']);
            }
          });
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storage.get("bid").then(function (bval) {
              _this2.business_id = bval;

              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getbusinessdetails.php?bid=" + _this2.business_id).subscribe(function (response) {
                _this2.bdetails = response;
                console.log("business details:", _this2.bdetails);
                _this2.name = _this2.bdetails[0].business_name;
                _this2.owner_name = _this2.bdetails[0].owner_name;
                _this2.address = _this2.bdetails[0].business_address;
                _this2.city = _this2.bdetails[0].city;
                _this2.state = _this2.bdetails[0].state;
                _this2.country = _this2.bdetails[0].country;
                _this2.pincoce = _this2.bdetails[0].pincode;
                _this2.story = _this2.bdetails[0].busienss_story;
                _this2.business_image = _this2.bdetails[0].logo;
              });

              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "viewbusiness.php?bid=" + _this2.business_id + "&user_id=" + _this2.user_id).subscribe(function (vrespo) {
                _this2.vrespo = vrespo;
                console.log("View Response:", _this2.user_id);
              }); // Get Recent Viewed


              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "recentviews.php?user_id=" + _this2.user_id).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.recent = data;
                          console.log(this.recent);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });

              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getproducts.php?bid=" + _this2.business_id).subscribe(function (presponse) {
                _this2.products = presponse;
                console.log("Products:", _this2.products);
              });

              _this2.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "getbusiness_services.php?bid=" + _this2.business_id).subscribe(function (sresponse) {
                _this2.services = sresponse;
                console.log("service:", _this2.services);
              });
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionsheetCtrl.create({
                        // header: 'Modify your album',  
                        buttons: [{
                          text: 'Report',
                          handler: function handler() {
                            _this3.ReportAlert();
                          }
                        } //{  
                        //   text: 'Hide',  
                        //   handler: () => {  
                        //    console.log('Archive clicked');  
                        //   }  
                        // },{  
                        //   text: 'Report',  
                        //   handler: () => {  
                        //    console.log('Archive clicked');  
                        //   }  
                        // },{  
                        //   text: 'Rating',  
                        //   handler: () => {  
                        //    console.log('Archive clicked');  
                        //   }  
                        // }  
                        ]
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
        }, {
          key: "kalyan",
          value: function kalyan() {
            console.log("Handle Clicked under kalyan functions");
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Reach with',
                        message: '<ion-row><ion-col><img src="https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png">Chat</ion-col><ion-col><img src="https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png">Video</ion-col><ion-col><img src="https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png">Call</ion-col></ion-row>'
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context3.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "productDetials",
          value: function productDetials(i) {
            var _this4 = this;

            this.storage.set("prid", this.products[i].id);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "product_view.php?pid=" + this.products[i].id + "&user_id=" + this.user_id).subscribe(function (vrespo) {
              _this4.vrespo = vrespo;
              console.log("View Response:", _this4.vrespo);
            });
            this.router.navigate(['item']);
          }
        }, {
          key: "likebusiness",
          value: function likebusiness() {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "addlike.php?user_id=" + this.user_id + "&bid=" + this.business_id).subscribe(function (ldata) {
              if (ldata == 1) {
                alert("thank you for liking buisnes");
              }
            });
          }
        }, {
          key: "favbusiness",
          value: function favbusiness() {
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "addfavorite.php?user_id=" + this.user_id + "&bid=" + this.business_id).subscribe(function (fdata) {
              if (fdata == 1) {
                alert("Added busines to your favorite");
              }
            });
          }
        }, {
          key: "shareservice",
          value: function shareservice(i) {
            this.sid = this.services[i].id;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "shareservice.php?user_id=" + this.user_id + "&sid=" + this.sid).subscribe(function (shares) {
              if (shares = 1) {
                alert("Service Shared Sucesfully");
              }
            });
          }
        }, {
          key: "cmtservice",
          value: function cmtservice(i) {
            this.sid = this.services[i].id;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "cmtservice.php?user_id=" + this.user_id + "&sid=" + this.sid).subscribe(function (shares) {
              if (shares = 1) {
                alert("Service Commented Sucesfully");
              }
            });
          }
        }, {
          key: "likeservice",
          value: function likeservice(i) {
            this.sid = this.services[i].id;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "likeservice.php?user_id=" + this.user_id + "&sid=" + this.sid).subscribe(function (shares) {
              if (shares = 1) {
                alert("Service Liked Sucesfully");
              }
            });
          }
        }, {
          key: "favservice",
          value: function favservice(i) {
            this.sid = this.services[i].id;
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "favservice.php?user_id=" + this.user_id + "&sid=" + this.sid).subscribe(function (shares) {
              if (shares = 1) {
                alert("Service Favourite Sucesfully");
              }
            });
          }
        }, {
          key: "shophere",
          value: function shophere() {
            this.storage.set("bid", this.business_id);
            this.router.navigate(['shophere']);
          }
        }, {
          key: "recdetails",
          value: function recdetails(i) {
            console.log(this.recent[i].id);
            this.storage.set("bid", this.recent[i].id);
            this.router.navigateByUrl('/details');
            window.location.reload();
          } // async presentPrompt() {
          //   let alert = this.alertCtrl.create({
          //     inputs: [
          //       {
          //         name: 'username',
          //         placeholder: 'Username'
          //       },
          //       {
          //         name: 'password',
          //         placeholder: 'Password',
          //         type: 'password'
          //       }
          //     ],
          //     buttons: [
          //       {
          //         text: 'Cancel',
          //         role: 'cancel',
          //         handler: data => {
          //           console.log('Cancel clicked');
          //         }
          //       },
          //       {
          //         text: 'Login',
          //         handler: data => {
          //           if ("kalyan") {
          //             // logged in!
          //           } else {
          //             // invalid login
          //             return false;
          //           }
          //         }
          //       }
          //     ]
          //   });
          //   await alert.present();
          // }

        }, {
          key: "ReportAlert",
          value: function ReportAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Report Business',
                        inputs: [{
                          name: 'reporttext',
                          type: 'textarea',
                          id: 'reporttxt',
                          placeholder: ''
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Report',
                          handler: function handler(data) {
                            _this5.reporttxt = data.reporttext, console.log("Report Text", _this5.reporttxt);
                            console.log('Confirm Ok');

                            _this5.rptbusiness();
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "rptbusiness",
          value: function rptbusiness() {
            var _this6 = this;

            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"].ApiUrl + "report_business.php?uid=" + this.user_id + "&bid=" + this.business_id + "&report=" + this.reporttxt).subscribe(function (response) {
              _this6.repstatus = response;
              console.log(_this6.repstatus);

              if (_this6.repstatus == 1) {
                alert("Business Rported Sucefully");
              } else {
                alert("Failed to report BUsiness");
              }
            });
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailsPage);
      /***/
    },

    /***/
    "z71o": function z71o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button mode=\"ios\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-segment value=\"all\" scrollable=\"true\" mode=\"md\" color=\"secondary\" [(ngModel)]=\"segmentModel\">\n  <ion-segment-button value=\"topiko\">\n    <ion-label>Topiko</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"products\">\n    <ion-label>Products</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"service\">\n    <ion-label>Service</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"post\">\n    <ion-label>Post</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"career\">\n    <ion-label>Career</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"overview\">\n    <ion-label>Overview</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content>\n\n  <!-- Topiko Div Start-->\n  <div *ngIf=\"segmentModel === 'topiko'\">\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"margin-class top-slide\">\n      <ion-slide >\n        <img src=\"{{business_image}}\" style=\"border-radius: 10px;\">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-row class=\"margin-class red-bus\">\n      <ion-col>\n        {{name}} <ion-icon name=\"shield-checkmark\" class=\"shield\"></ion-icon><br>\n        <ion-icon name=\"star\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star-outline\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star-outline\" class=\"star\"></ion-icon>\n        <p class=\"ceo\">CEO {{owner_name}} </p>\n      </ion-col>\n      <ion-col size=\"4\" class=\"shop-btn\">\n        <ion-button class=\"purple-btn-sm\" size=\"small\" (click)=\"shophere()\"> Shop Here </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"margin-class\" >\n      <ion-col class=\"travel scroll\">\n        <p *ngFor = \"let busi of bdetails; let i=index;\">{{busi.tags}}</p>\n      </ion-col>\n    </ion-row>\n    <p class=\"margin-class lorem\">{{story}}</p>\n\n    <ion-card class=\"third-bg margin-class\">\n      <ion-row>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\">\n            <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Share</p>\n        </ion-col>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\">\n            <ion-icon name=\"navigate-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Direction</p>\n        </ion-col>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\" (click)=\"likebusiness()\">\n            <ion-icon name=\"thumbs-up-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Like</p>\n        </ion-col>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\" (click)=\"favbusiness()\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Favourite</p>\n        </ion-col>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\">\n            <ion-icon  name=\"chatbubble-ellipses-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Comment</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <p class=\"rfq\">Request a Quote</p>\n    <ion-card class=\"margin-class fourth\">\n      <ion-row>\n        <ion-col>\n          <strong>Address</strong>\n          <p>{{address}},<br> {{city}}-{{pincode}}, <br>{{state}}, <br> {{country}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"map\">\n          <img\n            src=\"https://previews.123rf.com/images/vasilyrosca/vasilyrosca1612/vasilyrosca161200298/68591274-perspective-city-map-gps-service-concept-3d-city-map-route-template-design-.jpg\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row class=\"margin-class\" style=\"display: none;\">\n      <ion-col class=\"head\">Similar Products</ion-col>\n      <ion-col size=\"3\" class=\"view-all\">View All</ion-col> \n    </ion-row>\n\n    <ion-row class=\"margin-class\" style=\"display: none;\">\n      <ion-col size=\"4\">\n        <img src=\"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"https://lithub.com/wp-content/uploads/2019/01/9781616208882.jpg\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"https://www.oberlo.com/media/1603897577-image22-1.jpg?w=1824&fit=max\">\n      </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"margin-class\">\n      <ion-col class=\"head\">Recently Viewed</ion-col>\n      <ion-col size=\"3\" class=\"view-all\" routerLink=\"/recent\">View All</ion-col>\n    </ion-row>\n\n    <ion-row class=\"margin-class\">\n      <ion-col size=\"4\" class=\"p-0\"  *ngFor=\"let rec of recent;  let i=index\" (click)=\"recdetails(i)\">\n        <img *ngIf=\"rec.logo != ''\"  src=\"{{rec.logo}}\" class=\"icon-img\">\n        <img *ngIf=\"rec.logo == ''\" class=\"icon-img\" src=\"assets/logo-color.png\" style=\"padding: 10px; background: #fafafa; border-radius: 25%;\">\n        <div class=\"img-title center text-center p-0\" text-center>{{rec.business_name}}</div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n  <!-- Topiko Div End-->\n\n\n  <!-- product Div Start-->\n  <div *ngIf=\"segmentModel === 'products'\">\n   \n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let product of products; let i=index\">\n        <ion-card class=\"cards\" (click)=\"productDetials(i)\">\n          <img\n            src=\"{{product.product_image}}\"\n            alt=\"\">\n            <p style=\"color: #871178;\">{{product.title}}</p>\n          <span>Price-</span>\n          <span class=\"rs\">Rs{{product.discount}} </span>\n          <span class=\"real-price\">{{product.mrp}} </span>\n          <span class=\"off\">{{product.discount_price}} Off</span>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n   \n  </div>\n  <!-- produt Div End-->\n\n  <!-- service Div Start-->\n  <div *ngIf=\"segmentModel === 'service'\">\n    <ion-grid class=\"service-grid\">\n      <!-- <ion-card class=\"first\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide>\n            <img\n              src=\"https://suyaaninfrastructure.jcbindia.co.in/media/4988/intelli-performancefuel-efficiency_1050_768_v2.jpg\"\n              style=\"border-radius: 10px;\">\n          </ion-slide>\n          <ion-slide>\n            <img src=\"https://businessrights.in/wp-content/uploads/2020/11/Swiggy-Restaurant-Listing.png\"\n              style=\"border-radius: 10px;\">\n          </ion-slide>\n          <ion-slide>\n            <img\n              src=\"https://mir-s3-cdn-cf.behance.net/projects/original/3445c9110418311.Y3JvcCwxMzgwLDEwODAsNDEzLDA.jpg\"\n              style=\"border-radius: 10px;\">\n          </ion-slide>\n        </ion-slides>\n      </ion-card> -->\n\n      <div *ngFor=\"let ser of services; let i = index;\">\n      <ion-card class=\"second\">\n        <ion-row>\n          <ion-col class=\"item\" size=\"12\">\n            <img class=\"ser-img\" src=\"{{ser.image}}\" alt=\"\">\n            <p style=\"color: #871178;\">{{ser.service_title}}</p>\n            <span>Actual Price-</span>\n            <span class=\"rs\">{{ser.mrp}} </span><br>\n            <span>Discount Price-</span>\n            <span class=\"rs\">{{ser.discount_price}} </span>\n          </ion-col>\n          <ion-col class=\"des\">\n            <h6>Description</h6>\n            <p> {{ser.description}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card class=\"third\">\n        <ion-row>\n          <ion-col size=\"3\" class=\"icons\" (click)=\"shareservice(i)\">\n            <ion-fab-button color=\"light\">\n              <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n            </ion-fab-button>\n            <p>Share</p>\n          </ion-col>\n          <ion-col size=\"3\" class=\"icons\" (click)=\"likeservice(i)\">\n            <ion-fab-button color=\"light\">\n              <ion-icon name=\"thumbs-up-outline\"></ion-icon>\n            </ion-fab-button>\n            <p>Like</p>\n          </ion-col>\n          <ion-col size=\"3\" class=\"icons\" (click)=\"favservice(i)\"> \n            <ion-fab-button color=\"light\">\n              <ion-icon name=\"heart-outline\"></ion-icon>\n            </ion-fab-button>\n            <p>Favourite</p>\n          </ion-col>\n          <ion-col size=\"3\" class=\"icons\" (click)=\"cmtservice(i)\">\n            <ion-fab-button color=\"light\">\n              <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n            </ion-fab-button>\n            <p>Comment</p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n    </ion-grid>\n\n   \n\n   \n   \n  </div>\n  <!-- service Div End-->\n\n  <!-- post Div Start-->\n  <div *ngIf=\"segmentModel === 'post'\">\n\n    <div class=\"post-div\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-card class=\"margin-class post-card\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n          <img\n            src=\"https://edlab.nl/wp-content/uploads/2015/10/looking-for-a-job-pandora-and-190-companies-are-hiring-c1b39cd0a1.jpg\"\n            style=\"border-radius: 10px;\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"https://businessrights.in/wp-content/uploads/2020/11/Swiggy-Restaurant-Listing.png\"\n            style=\"border-radius: 10px;\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"https://mir-s3-cdn-cf.behance.net/projects/original/3445c9110418311.Y3JvcCwxMzgwLDEwODAsNDEzLDA.jpg\"\n            style=\"border-radius: 10px;\">\n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n\n    <p class=\"dashboard\">Job Info</p>\n    <ion-card class=\"margin-class\">\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Qualification-</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>Any Degree</p>\n        </ion-col>\n        <ion-col class=\"bcom\" size=\"3\">\n          <p>Bcom</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Working Experience-</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>Fresher</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Working Hours</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>8hours</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Salary</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>2lacks-3.5lacks</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"margin-class\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"margin-class post-chats\">\n      <ion-row class=\"chats scroll\">\n        <ion-col>\n          <p class=\"text\">Chat</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Video</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Call</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col class=\"calls\">\n          <p class=\"text\">Branches</p>\n          <p class=\"number\">02</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </div>\n  <!-- post Div End-->\n\n  <!-- career Div Start-->\n  <div *ngIf=\"segmentModel === 'career'\">\n    <div class=\"post-div\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"margin-class\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second margin-class\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"margin-class post-chats\">\n      <ion-row class=\"chats scroll\">\n        <ion-col>\n          <p class=\"text\">Likes</p>\n          <p class=\"number\">36</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Dislikes</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Share</p>\n          <p class=\"number\">05</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Comment</p>\n          <p class=\"number\">15</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <div class=\"post-div\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"margin-class\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second margin-class\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"margin-class post-chats\">\n      <ion-row class=\"chats scroll\">\n        <ion-col>\n          <p class=\"text\">Likes</p>\n          <p class=\"number\">36</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Dislikes</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Share</p>\n          <p class=\"number\">05</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Comment</p>\n          <p class=\"number\">15</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <!-- career Div End-->\n\n  <!-- Overview Div Start-->\n  <div *ngIf=\"segmentModel === 'overview'\">\n    <ion-card class=\"box\">\n      <ion-row class=\"overview-row\">\n        <div class=\"avatar\">\n          <ion-avatar>\n            <img class=\"border\"\n              src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n              alt=\"\">\n          </ion-avatar>\n        </div>\n        <ion-col class=\"title text-overflow\">\n          <p>Sun Group water <ion-icon name=\"shield-checkmark\"></ion-icon>\n          </p>\n          <ion-row class=\"ceo text-overflow\">\n            <p>CEO-Murali</p>\n          </ion-row>\n          <ion-row class=\"director text-overflow\">\n            <p>Referral id -791541</p>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"text\">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's\n          standard dummy text ever since the</p>\n      </ion-row>\n      <ion-row class=\"read-more\">\n        <p>Read More</p>\n      </ion-row>\n      <ion-row class=\"rating\">\n        <p>Rating & Review</p>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ratings\">\n          <ion-row class=\"rate\">\n            <p>4.0</p>\n          </ion-row>\n          <ion-row class=\"star\">\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <p>4.1 Ratings</p>\n          </ion-row>\n          <ion-row class=\"num\">\n            <p>2,122,00</p>\n          </ion-row>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row class=\"certify\">\n        <p>Topiko Certification</p>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"certify\">\n        <p>Topiko Awards</p>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Product & Services</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"scrolll\">\n        <p class=\"designn\">Designer</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Banner Design</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Logo Design</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Poster Designer</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Image Design</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Website Design</p>\n      </div>\n\n      <ion-card class=\"address\">\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-row class=\"add\">\n              <p>Address</p>\n            </ion-row>\n            <ion-row class=\"street\">\n              <p>{{this.address}}</p>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img src=\"https://www.xda-developers.com/files/2019/06/google-maps-india.jpg\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Online Supporters</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-card class=\"third-card\">\n        <ion-row>\n          <div class=\"avatar avatarr\">\n            <ion-avatar>\n              <img class=\"border\"\n                src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n                alt=\"\">\n            </ion-avatar>\n          </div>\n          <ion-col class=\"name text-overflow overflowroww\">\n            <p class=\"namee\">Kiran</p>\n            <ion-row class=\"market text-overflow\">\n              <p>Marketing | Telecaller | Delivery</p>\n            </ion-row>\n            <ion-row class=\"lang text-overflow\">\n              <p>Tamil <span>|</span> Telugu <span>|</span> Malayalam</p>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-card class=\"third-card\">\n        <ion-row>\n          <div class=\"avatar avatarr\">\n            <ion-avatar>\n              <img class=\"border\"\n                src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n                alt=\"\">\n            </ion-avatar>\n          </div>\n          <ion-col class=\"name text-overflow overflowroww\">\n            <p class=\"namee\">Kiran</p>\n            <ion-row class=\"market text-overflow\">\n              <p>Marketing | Telecaller | Delivery</p>\n            </ion-row>\n            <ion-row class=\"lang text-overflow\">\n              <p>Tamil <span>|</span> Telugu <span>|</span> Malayalam</p>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Company Certificate</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Company Gallery</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Partners</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"namerow\">\n        <div class=\"avatar avatarr\">\n          <ion-avatar>\n            <img class=\"border\"\n              src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n              alt=\"\">\n          </ion-avatar>\n        </div>\n        <ion-col class=\"name text-overflow nameee\">\n          <p class=\"namee\">Murali</p>\n          <ion-row class=\"market text-overflow\">\n            <p>CEO</p>\n          </ion-row>\n        </ion-col>\n        <ion-col class=\"fab-overview\" size=\"1.5\">\n          <ion-fab>\n            <ion-fab-button class=\"fabbb\">\n              <ion-icon name=\"call\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"views\">\n        <p>Views</p>\n      </ion-row>\n      <ion-row class=\"text\">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's\n          standard dummy text ever since the</p>\n      </ion-row>\n      <ion-row class=\"read-more\">\n        <p>Read More</p>\n      </ion-row>\n      <ion-row class=\"views\">\n        <p>Gallery</p>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Reach</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inp\">\n        <ion-col>\n          <ion-grid class=\"grid\">\n            <ion-row>\n              <ion-col class=\"msg\">\n                <ion-input placeholder=\"Send a message...\"></ion-input>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1\">\n                <ion-icon name=\"mic-outline\"></ion-icon>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1\">\n                <ion-icon name=\"camera-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"topup\" float=\"right\">\n        <ion-button>Send</ion-button>\n      </ion-row>\n    </ion-card>\n\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/connect\">\n    <ion-fab-button class=\"fab\">\n      <ion-icon name=\"headset-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- Topiko Div End-->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=details-details-module-es5.js.map