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


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 85px;\n  --ion-background-color: #fff !important;\n}\n\n.detail-img {\n  border-radius: 3px;\n  min-width: 100%;\n  height: 254px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.margin-class {\n  margin-left: 18px;\n  margin-right: 18px;\n}\n\n.top-slide {\n  margin-top: 16px;\n}\n\n.purple-btn-sm {\n  --background: linear-gradient(#871178, #3c1378) !important;\n  height: 30px;\n  border: 0;\n  width: 70px;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 9px;\n}\n\n.red-bus {\n  margin-top: 10px;\n}\n\n.star {\n  color: orange;\n}\n\n.shield {\n  color: green;\n}\n\n.ceo {\n  font-size: 12px;\n  color: #9f9f9f;\n  margin: 0px;\n}\n\n.shop-btn {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.travel ion-button {\n  margin-right: 10px;\n}\n\n.b-tags {\n  margin: 0px;\n  color: #871178;\n  border: 1px solid #871178;\n  padding: 2px 8px;\n  border-radius: 18px;\n  margin-top: 2px;\n  font-size: 14px;\n}\n\n.lorem {\n  color: #707070;\n  font-size: 12px;\n}\n\n.map {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nstrong {\n  color: #22272a;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.third-bg {\n  background: #ebebeb;\n  padding-top: 18px;\n}\n\n.col-mt-3 {\n  margin-top: 3%;\n  margin-bottom: -5%;\n}\n\n.col-mt-3 img {\n  border-radius: 10px;\n}\n\n.img-title {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.featured-img ion-col img {\n  border-radius: 50%;\n  padding: 0;\n}\n\n.hearticon-div {\n  display: flex;\n  align-items: center;\n}\n\n.heart-icon {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  color: #de0000;\n}\n\n.coun {\n  font-size: 12px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n.service-grid {\n  padding: 0px 8px;\n  background: #ffffff;\n}\n\n.service-img {\n  border-radius: 8px;\n}\n\n/* Carerer Styles start */\n\n.cont {\n  text-align: center;\n}\n\n.cont ion-title {\n  font-size: 18px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 1.5px;\n}\n\n.notif {\n  font-size: 1.225em;\n  font-weight: bold;\n}\n\nion-content {\n  --color: #22272a;\n  --background: #f5f5f5;\n}\n\n.row {\n  height: 12em;\n  background: #f5f5f5;\n}\n\n.firstcard {\n  border: none;\n  box-shadow: none;\n}\n\n.bg {\n  width: 100%;\n  height: 9.375em;\n  background: linear-gradient(#871178, #44093c);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-avatar {\n  width: 8.1875em;\n  height: 8.1875em;\n  margin-top: 90px;\n}\n\n.details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f5f5f5;\n}\n\n.name {\n  font-size: 1.25em;\n  margin: 0%;\n  margin-top: 0.5em;\n  color: #871178;\n  font-weight: bold;\n}\n\n.number {\n  font-size: 0.875em;\n  margin-top: 0.5em;\n  margin-bottom: 0%;\n  color: #707070;\n}\n\n.dashboard {\n  margin-top: 0.773125em;\n  margin-bottom: 0.590625em;\n  margin-left: 18px;\n  font-size: 0.875em;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\n.icons ion-icon {\n  font-size: 30px;\n  background: #ffffff;\n  padding: 11px;\n  border-radius: 50%;\n}\n\nion-fab-button {\n  --ion-color-base: #f2f2f2 !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\nion-badge {\n  --ion-color-base: #d60000 !important;\n  --border-radius: 50%;\n}\n\n.icon-img {\n  height: 100px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 2px;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 1.375em;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.likes ion-col {\n  text-align: center;\n  border-right: 1px solid #707070;\n  border-collapse: 50%;\n}\n\n.like {\n  font-size: 0.875em;\n}\n\n.count {\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.likes .comment {\n  border: none;\n}\n\n.image {\n  min-width: 100%;\n  margin-top: 10px;\n  min-height: 230px;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n  bottom: 25px;\n}\n\n.round-img {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 50px;\n  right: 9px;\n  background: #919191;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.round-img ion-icon {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n/* Career styles end */\n\n/*overview styles star */\n\n.cont {\n  text-align: center;\n}\n\n.cont ion-title {\n  font-size: 18px;\n  color: #ffffff;\n  padding: 0px;\n  letter-spacing: 1.5px;\n}\n\nion-content {\n  --color: #22272a;\n  --background: #f5f5f5;\n  margin: 0px 1.125em;\n}\n\nion-segment {\n  background: #f5f5f5;\n  color: #707070;\n  font-size: 0.9375em;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n}\n\n.box {\n  padding: 10px 18px;\n  padding-bottom: 0.5em;\n  margin: 0%;\n  border-radius: 0%;\n}\n\n.box ion-avatar {\n  margin-top: 5px;\n}\n\nion-avatar {\n  width: 61px;\n  height: 61px;\n}\n\nion-avatar .border {\n  border: 0.0125em solid #707070;\n}\n\n.title {\n  margin-top: 0em;\n  padding-left: 0%;\n}\n\n.title p {\n  font-size: 1.125em;\n  color: #22272a;\n  letter-spacing: 0.0375em;\n  line-height: 1em;\n  margin: 3px 0px;\n}\n\n.title ion-icon {\n  color: #39ac00;\n}\n\n.ceo p {\n  font-size: 0.75em;\n  color: #707070;\n}\n\n.director p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 4px 0px;\n}\n\n.text p {\n  margin: 0px 0.625em;\n  font-size: 0.875em;\n  line-height: 1.5em;\n}\n\n.read-more {\n  float: right;\n}\n\n.read-more p {\n  font-size: 0.75em;\n  font-weight: bold;\n  color: #871178;\n  margin: 0px;\n  margin-right: 0.625em;\n  margin-bottom: 0.75em;\n}\n\n.ratings {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.rating p {\n  color: #871178;\n  font-size: 0.875em;\n  font-weight: bold;\n  margin: 1.5625em 0px;\n  margin-bottom: 0%;\n}\n\n.rate p {\n  color: #871178;\n  font-size: 40px;\n  margin: 4px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star p {\n  font-size: 0.625em;\n  padding-left: 5px;\n  color: #22272a;\n  margin: 0%;\n  margin-top: 2px;\n}\n\n.num p {\n  font-size: 0.75em;\n  color: #9f9f9f;\n  margin: 3px;\n}\n\n.certify p {\n  font-size: 0.875em;\n  color: #871178;\n  font-weight: bold;\n  margin-bottom: 0.3125em;\n}\n\nion-card {\n  padding: 10px 5px;\n  margin: 0;\n}\n\n.square ion-card {\n  box-shadow: 0px 3px 6px #00000029;\n  height: 55px;\n  width: 66px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.product p {\n  font-size: 0.875em;\n  color: #871178;\n  margin-bottom: 0.3125em;\n}\n\n.product ion-icon {\n  color: #871178;\n  margin-top: 10px;\n}\n\n.overview-row {\n  margin-bottom: 10px;\n}\n\n.third-card .overflowroww {\n  margin-bottom: 7px;\n  padding-left: 5px;\n}\n\n.name .namee {\n  margin-top: 0%;\n}\n\n.namerow .nameee {\n  padding-left: 5px;\n}\n\n.designn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  font-size: 0.75em;\n  margin: 0px 10px;\n}\n\n.scrolll {\n  height: 30px;\n  margin-bottom: 10px;\n  display: flex;\n  overflow-x: auto;\n}\n\n.scrolll p {\n  color: #707070;\n}\n\n.borderr p {\n  height: 1.2em;\n  width: 1px;\n  border-right: 1px solid #00000029;\n  margin-top: 5.5px;\n}\n\n.avatarr ion-avatar {\n  width: 78px;\n  height: 78px;\n}\n\n.designer p {\n  color: #707070;\n  font-size: 0.75em;\n  margin: 0.3125em 0px;\n}\n\n.border p {\n  border-right: 1px solid #707070;\n  height: 1em;\n}\n\n.address {\n  padding: 0.3125em;\n  border-radius: 3px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.add p {\n  color: #707070;\n  font-size: 0.875em;\n  margin: 5px 0px;\n}\n\n.street p {\n  color: #22272a;\n  font-size: 0.75em;\n  margin: 0%;\n  line-height: 1.8em;\n}\n\n.third-card {\n  border-radius: 0px;\n  box-shadow: none;\n  border-bottom: 1px solid rgba(112, 112, 112, 0.3);\n  padding-bottom: 0.625em;\n}\n\n.name {\n  padding-left: 0%;\n}\n\n.name p {\n  color: #22272a;\n  font-size: 1.125em;\n  margin: 2px 0px;\n  margin-top: 0.625em;\n}\n\n.market p {\n  color: #707070;\n  font-size: 0.75em;\n  margin: 2px 0px;\n}\n\n.lang p {\n  color: #871178;\n  font-size: 0.625em;\n  margin: 2px 0px;\n}\n\n.lang span {\n  color: #707070;\n  padding: 0px 2px;\n}\n\n.fabb {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 2.125em;\n  width: 2.125em;\n  --box-shadow: none;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 18px;\n  width: 18px;\n}\n\n.views p {\n  color: #1e1e1e;\n  font-size: 0.875em;\n  margin: 0.3125em 0.625em;\n  margin-top: 12px;\n  font-weight: bold;\n}\n\n.inp .grid {\n  border: 0.3px solid rgba(112, 112, 112, 0.3);\n  border-radius: 31px;\n  background-color: #f5f5f5;\n}\n\n.grid {\n  padding: 1.5%;\n}\n\n.msg {\n  padding: 0%;\n}\n\n.icn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid ion-icon {\n  color: #707070;\n  font-size: 18px;\n}\n\n.topup {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: right;\n  align-items: center;\n  padding-right: 0.3125em;\n}\n\n.topup ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  width: 90px;\n  height: 36px;\n  --border-radius: 18px;\n  font-size: 1.125em;\n  margin-bottom: 20px;\n}\n\n/*overview styles end */\n\n/* Product styles start */\n\n.rs {\n  color: #871178;\n  padding: 0;\n}\n\n.real-price {\n  text-decoration: line-through;\n  color: #9f9f9f;\n}\n\n.off {\n  color: #39ac00;\n  font-size: 0.625em;\n}\n\n.containers {\n  background-color: #e0e0e0;\n}\n\n.ics {\n  background: #fff;\n  border-radius: 50%;\n  padding: 10px;\n  font-size: 32px;\n  text-align: center;\n  margin: 10px;\n  height: 60px;\n}\n\n.ics-text {\n  text-align: center;\n  color: #871178;\n  line-height: 0;\n  padding-bottom: 15px;\n  font-size: 12px;\n}\n\n.item {\n  background-color: #f6f6f6;\n}\n\n.item p {\n  color: #22272a;\n  font-size: 1em;\n  margin: 6px 0px;\n  padding-left: 4px;\n}\n\n.item span {\n  font-size: 0.875em;\n  padding-left: 4px;\n}\n\nh6 {\n  color: #22272a;\n  margin-top: 5px;\n}\n\n.des p {\n  line-height: 1.6;\n  font-size: 0.8em;\n  color: #707070;\n  margin-bottom: -8px;\n}\n\n.third {\n  padding-top: 0%;\n  margin-bottom: 10px;\n}\n\n.fourth {\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.head {\n  font-size: 1em;\n}\n\n.view-all {\n  color: #871178;\n  font-size: 12px;\n  text-align: right;\n}\n\n.rfq {\n  text-align: center;\n  color: #871178;\n  font-size: 0.8em;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n/* prodcut styles end */\n\n/* post styles start */\n\n.chats .text {\n  color: #707070;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 12px;\n}\n\n.seperator {\n  margin: 28px 0px;\n  margin-bottom: 32px;\n}\n\n.post-chats {\n  padding-top: 0%;\n}\n\n.post-div {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.post-card {\n  background: transparent;\n  padding: 0%;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n  margin: 0 auto;\n  padding: 5px;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.image {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n}\n\nion-card {\n  box-shadow: none;\n  border-radius: 0%;\n}\n\n.qualification p {\n  color: #9f9f9f;\n  font-size: 0.75em;\n  margin: 2px 0px;\n}\n\n.degree p {\n  color: #707070;\n  font-size: 0.75em;\n  margin: 2px 0px;\n}\n\n.bcom p {\n  color: #707070;\n  font-size: 0.875em;\n  margin: 0px;\n}\n\n.dashboard {\n  margin-top: 0.773125em;\n  margin-bottom: 0.590625em;\n  margin-left: 18px;\n  font-size: 0.875em;\n  line-height: 2em;\n}\n\n.description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 20px;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.likes ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.like {\n  font-size: 0.875em;\n  margin: 5px 0px;\n}\n\n.count {\n  color: #871178;\n  font-size: 0.875em;\n  margin: 5px 0px;\n}\n\n.likes .comment {\n  border: none;\n}\n\n.border p {\n  border-right: 1px solid #00000029;\n  height: 2em;\n}\n\n/* post styles end */\n\nion-fab-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  height: 4.375em;\n  width: 4.375em;\n}\n\n.fab ion-icon {\n  color: #ffffff;\n  height: 36px;\n  width: 36px;\n}\n\nion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\n.fab-overview {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fab-overview .fabbb {\n  width: 42px;\n  height: 42px;\n}\n\n.fabbb ion-icon {\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.ser-img {\n  width: 100%;\n  height: 200px;\n}\n\n.fabs {\n  width: 4em;\n  height: 4em;\n}\n\n.fabstxt {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFHQSx1Q0FBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFGSjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSwwREFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7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IiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogODVweDtcclxuICAgIC8vIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgIC8vIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyB0b3Bpa28gZGl2IHN0YXJ0cyBoZXJlXHJcbi5kZXRhaWwtaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjU0cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubWFyZ2luLWNsYXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcbi50b3Atc2xpZGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4ucHVycGxlLWJ0bi1zbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcbi5yZWQtYnVzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnN0YXIge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4uc2hpZWxkIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uY2VvIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnNob3AtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi50cmF2ZWwgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLy8gLnRyYXZlbCBwIHtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjODcxMTc4O1xyXG4vLyB9XHJcbi5iLXRhZ3Mge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NzExNzg7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubG9yZW0ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1hcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnN0cm9uZyB7XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnRoaXJkLWJnIHtcclxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICBwYWRkaW5nLXRvcDogMThweDtcclxufVxyXG5cclxuLmNvbC1tdC0zIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTUlO1xyXG59XHJcbi5jb2wtbXQtMyBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaW1nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4vLyAuY291bnQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgcGFkZGluZzogOHB4IDA7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vIH1cclxuLmZlYXR1cmVkLWltZyBpb24tY29sIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5oZWFydGljb24tZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5oZWFydC1pY29uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2RlMDAwMDtcclxufVxyXG4uY291biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4vLyB0b3Bpa28gZGl2IGVuZHMgaGVyZVxyXG5cclxuLy8gc2VydmljZSBTdHlsZXMgc3RhcnQgLy9cclxuLnNlcnZpY2UtZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG4uc2VydmljZS1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi8vIHNlcnZpY2UgZGl2IGVuZHMgaGVyZVxyXG5cclxuLyogQ2FyZXJlciBTdHlsZXMgc3RhcnQgKi9cclxuXHJcbi5jb250IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udCBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbn1cclxuLm5vdGlmIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yMjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tY29sb3I6ICMyMjI3MmE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5maXJzdGNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzQ0MDkzYyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDguMTg3NWVtO1xyXG4gICAgaGVpZ2h0OiA4LjE4NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5kYXNoYm9hcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMC43NzMxMjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNTkwNjI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG4uaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5pY29ucyBwIHtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5pY29ucyBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNkNjAwMDAgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pY29uLWltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxufVxyXG4uZGF0ZSBwIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjZjhmOGY4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNjI1ZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3MTI1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4ubGlrZXMgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiA1MCU7XHJcbn1cclxuLmxpa2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5jb3VudCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG4ubGlrZXMgLmNvbW1lbnQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5pbWFnZSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjMwcHg7XHJcbn1cclxuLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjVweDtcclxufVxyXG4ucm91bmQtaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDlweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MTkxOTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yb3VuZC1pbWcgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi8qIENhcmVlciBzdHlsZXMgZW5kICovXHJcblxyXG4vKm92ZXJ2aWV3IHN0eWxlcyBzdGFyICovXHJcbi5jb250IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udCBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tY29sb3I6ICMyMjI3MmE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBtYXJnaW46IDBweCAxLjEyNWVtO1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuOTM3NWVtO1xyXG59XHJcbmlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuLmJveCBpb24tYXZhdGFyIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgaGVpZ2h0OiA2MXB4O1xyXG59XHJcbmlvbi1hdmF0YXIgLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDAuMDEyNWVtIHNvbGlkICM3MDcwNzA7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbn1cclxuLnRpdGxlIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMzc1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luOiAzcHggMHB4O1xyXG59XHJcbi50aXRsZSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxufVxyXG4uY2VvIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4uZGlyZWN0b3IgcCB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luOiA0cHggMHB4O1xyXG59XHJcbi50ZXh0IHAge1xyXG4gICAgbWFyZ2luOiAwcHggMC42MjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxufVxyXG4ucmVhZC1tb3JlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ucmVhZC1tb3JlIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XHJcbn1cclxuXHJcbi5yYXRpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yYXRpbmcgcCB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxLjU2MjVlbSAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxufVxyXG4ucmF0ZSBwIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuLnN0YXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmY2I5MDA7XHJcbn1cclxuLnN0YXIgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNjI1ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4ubnVtIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5jZXJ0aWZ5IHAge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMzEyNWVtO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uc3F1YXJlIGlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zMTI1ZW07XHJcbn1cclxuLnByb2R1Y3QgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5vdmVydmlldy1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4udGhpcmQtY2FyZCAub3ZlcmZsb3dyb3d3IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5uYW1lIC5uYW1lZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxufVxyXG4ubmFtZXJvdyAubmFtZWVlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5kZXNpZ25uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuLnNjcm9sbGwge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5zY3JvbGxsIHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmJvcmRlcnIgcCB7XHJcbiAgICBoZWlnaHQ6IDEuMmVtO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbi10b3A6IDUuNXB4O1xyXG59XHJcbi5hdmF0YXJyIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDc4cHg7XHJcbiAgICBoZWlnaHQ6IDc4cHg7XHJcbn1cclxuXHJcbi5kZXNpZ25lciBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IDAuMzEyNWVtIDBweDtcclxufVxyXG4uYm9yZGVyIHAge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGhlaWdodDogMWVtO1xyXG59XHJcbi5hZGRyZXNzIHtcclxuICAgIHBhZGRpbmc6IDAuMzEyNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcbi5hZGQgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4uc3RyZWV0IHAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbn1cclxuLnRoaXJkLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcclxufVxyXG4ubmFtZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG59XHJcbi5uYW1lIHAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICBtYXJnaW46IDJweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjYyNWVtO1xyXG59XHJcbi5tYXJrZXQgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG59XHJcbi5sYW5nIHAge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDAuNjI1ZW07XHJcbiAgICBtYXJnaW46IDJweCAwcHg7XHJcbn1cclxuLmxhbmcgc3BhbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDBweCAycHg7XHJcbn1cclxuXHJcbi5mYWJiIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAyLjEyNWVtO1xyXG4gICAgd2lkdGg6IDIuMTI1ZW07XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmZhYiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG59XHJcbi52aWV3cyBwIHtcclxuICAgIGNvbG9yOiAjMWUxZTFlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbSAwLjYyNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pbnAgLmdyaWQge1xyXG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4uZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG59XHJcbi5tc2cge1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn1cclxuLmljbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5ncmlkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi50b3B1cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjMxMjVlbTtcclxufVxyXG4udG9wdXAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLypvdmVydmlldyBzdHlsZXMgZW5kICovXHJcblxyXG4vKiBQcm9kdWN0IHN0eWxlcyBzdGFydCAqL1xyXG4ucnMge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5yZWFsLXByaWNlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbn1cclxuLm9mZiB7XHJcbiAgICBjb2xvcjogIzM5YWMwMDtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVlbTtcclxufVxyXG4uY29udGFpbmVycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uaWNzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uaWNzLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcbi5pdGVtIHAge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcbi5pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuaDYge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmRlcyBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcbi50aGlyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3VydGgge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4udmlldy1hbGwge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ucmZxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLyogcHJvZGN1dCBzdHlsZXMgZW5kICovXHJcblxyXG4vKiBwb3N0IHN0eWxlcyBzdGFydCAqL1xyXG5cclxuLy8gLmRhc2hib2FyZCBwIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAuNzczMTI1ZW07XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwLjU5MDYyNWVtO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcbi8vICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbi8vIH1cclxuLy8gLnNjcm9sbCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbi8vIH1cclxuLy8gLmljb25zIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDEuMTI1ZW07XHJcbi8vIH1cclxuLy8gLmljb25zIHAge1xyXG4vLyAgICAgbWFyZ2luOiA4cHggMHB4O1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vIH1cclxuLy8gaW9uLWZhYi1idXR0b24ge1xyXG4vLyAgICAgLS1pb24tY29sb3ItYmFzZTogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4vLyAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4vLyB9XHJcbi8vIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcclxuLy8gICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4vLyAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4vLyB9XHJcbi8vIGlvbi1iYWRnZSB7XHJcbi8vICAgICAtLWlvbi1jb2xvci1iYXNlOiAjZDYwMDAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG4vLyBkaXYge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAuZGF0ZSB7XHJcbi8vICAgICB3aWR0aDogOTVweDtcclxuLy8gICAgIGhlaWdodDogMjZweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwLjYyNWVtO1xyXG4vLyB9XHJcbi8vIC5kYXRlIHAge1xyXG4vLyAgICAgbWFyZ2luOiAwJTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4vLyAgICAgY29sb3I6ICNmOGY4Zjg7XHJcbi8vIH1cclxuLy8gLmltYWdlIHtcclxuLy8gICAgIG1pbi13aWR0aDogMTAwJTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vICAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxuLy8gfVxyXG4vLyAuY29sdW1uIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm90dG9tOiAyMnB4O1xyXG4vLyB9XHJcbi8vIC5yb3VuZC1pbWcge1xyXG4vLyAgICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDMwcHg7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICB0b3A6IDUwcHg7XHJcbi8vICAgICByaWdodDogOXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzkxOTE5MTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG4vLyAucm91bmQtaW1nIGlvbi1pY29uIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyB9XHJcblxyXG4vLyAuc2Vjb25kIHtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICBtYXJnaW46IDEycHggMHB4O1xyXG4vLyB9XHJcbi8vIC5kZXNjcmlwdGlvbiB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMC42MjVlbTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjA3MTI1ZW07XHJcbi8vICAgICBjb2xvcjogIzcwNzA3MDtcclxuLy8gfVxyXG4vLyAubGlrZXMgaW9uLWNvbCB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuLy8gLmxpa2Uge1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4vLyB9XHJcbi8vIC5saW5lcyB7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbi8vICAgICBtYXJnaW46IDE0cHggMHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwJTtcclxuLy8gfVxyXG4vLyAuY291bnQge1xyXG4vLyAgICAgY29sb3I6ICM4NzExNzg7XHJcbi8vICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbi8vIH1cclxuLy8gLmxpa2VzIC5jb21tZW50IHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG5cclxuLmNoYXRzIC50ZXh0IHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uY2hhdHMgLm51bWJlciB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLnNlcGVyYXRvciB7XHJcbiAgICBtYXJnaW46IDI4cHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG4ucG9zdC1jaGF0cyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbn1cclxuLnBvc3QtZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5wb3N0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uc2Nyb2xsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG4uZGF0ZSB7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjYyNWVtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmRhdGUgcCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogI2Y4ZjhmODtcclxufVxyXG4uaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxufVxyXG5cclxuLnF1YWxpZmljYXRpb24gcCB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG59XHJcbi5kZWdyZWUgcCB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG59XHJcbi5iY29tIHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZGFzaGJvYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNzczMTI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjU5MDYyNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC42MjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDcxMjVlbTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4ubGlrZXMgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGlrZSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLmNvdW50IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5saWtlcyAuY29tbWVudCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJvcmRlciBwIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDAyOTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4vKiBwb3N0IHN0eWxlcyBlbmQgKi9cclxuXHJcbi8vIGZhYlxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDQuMzc1ZW07XHJcbiAgICB3aWR0aDogNC4zNzVlbTtcclxufVxyXG4uZmFiIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbn1cclxuaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZmFiLW92ZXJ2aWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZhYi1vdmVydmlldyAuZmFiYmIge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuLmZhYmJiIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc2VyLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmZhYnMge1xyXG4gICAgd2lkdGg6IDRlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG59XHJcbi5mYWJzdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLy8gLmNhcmRzIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyB9XHJcbiJdfQ== */";
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
              console.log("BID", _this2.business_id);

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
            this.storage.set("bname", this.name);
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon=\"chevron-back\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-segment value=\"all\" scrollable=\"true\" mode=\"md\" color=\"secondary\" [(ngModel)]=\"segmentModel\">\n  <ion-segment-button value=\"topiko\">\n    <ion-label>Overview</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"products\">\n    <ion-label>Products</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"service\">\n    <ion-label>Services</ion-label>\n  </ion-segment-button>\n  <!-- <ion-segment-button value=\"post\">\n    <ion-label>Post</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"career\">\n    <ion-label>Career</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"overview\">\n    <ion-label>Overview</ion-label>\n  </ion-segment-button> -->\n</ion-segment>\n\n<ion-content>\n\n  <!-- Topiko Div Start-->\n  <div style=\"background: #F5F5F5;\" *ngIf=\"segmentModel === 'topiko'\">\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"margin-class top-slide\">\n      <ion-slide>\n        <img src=\"{{business_image}}\" class=\"detail-img\">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-row class=\"margin-class red-bus\">\n      <ion-col>\n        {{name}} <ion-icon name=\"shield-checkmark\" class=\"shield\"></ion-icon><br>\n        <ion-icon name=\"star\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star-outline\" class=\"star\"></ion-icon>\n        <ion-icon name=\"star-outline\" class=\"star\"></ion-icon>\n        <span style=\"margin: 0%; font-size: 10px; position: absolute;\n        top: 33px; left: 90px;\">4.1 Ratings</span>\n        <p class=\"ceo\">CEO {{owner_name}} </p>\n        <p style=\"margin:10px 0 0 0\">Business Tags</p>\n      </ion-col>\n      <ion-col size=\"4\" class=\"shop-btn\">\n        <ion-button class=\"purple-btn-sm\" size=\"small\" (click)=\"shophere()\"> Shop Here </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"margin-class\">\n      <ion-col class=\"travel scroll\">\n        <p *ngFor=\"let busi of bdetails; let i=index;\" class=\"b-tags\">{{busi.tags}}</p>\n      </ion-col>\n    </ion-row>\n    <p class=\"margin-class lorem\">{{story}}</p>\n\n    <ion-card class=\"third-bg margin-class\">\n      <ion-row>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\">\n            <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Share</p>\n        </ion-col>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\">\n            <ion-icon name=\"navigate-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Direction</p>\n        </ion-col>\n        <!-- <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\" (click)=\"likebusiness()\">\n            <ion-icon name=\"thumbs-up-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Like</p>\n        </ion-col> -->\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\" (click)=\"favbusiness()\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Favourite</p>\n        </ion-col>\n        <ion-col class=\"icons\">\n          <ion-fab-button class=\"fabs\" color=\"light\">\n            <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n          </ion-fab-button>\n          <p class=\"fabstxt\">Comment</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <br>\n    <ion-card class=\"margin-class fourth\">\n      <ion-row>\n        <ion-col>\n          <strong>Address</strong>\n          <p>{{address}},<br> {{city}}-{{pincode}}, <br>{{state}}, <br> {{country}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"map\">\n          <img\n            src=\"https://previews.123rf.com/images/vasilyrosca/vasilyrosca1612/vasilyrosca161200298/68591274-perspective-city-map-gps-service-concept-3d-city-map-route-template-design-.jpg\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row class=\"margin-class\" style=\"display: none;\">\n      <ion-col class=\"head\">Similar Products</ion-col>\n      <ion-col size=\"3\" class=\"view-all\">View All</ion-col>\n    </ion-row>\n\n    <ion-row class=\"margin-class\" style=\"display: none;\">\n      <ion-col size=\"4\">\n        <img src=\"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"https://lithub.com/wp-content/uploads/2019/01/9781616208882.jpg\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"https://www.oberlo.com/media/1603897577-image22-1.jpg?w=1824&fit=max\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"margin-class\" style=\"margin-top: 18px;\">\n      <ion-col class=\"head\">Recently Viewed</ion-col>\n      <ion-col size=\"3\" class=\"view-all\" routerLink=\"/recent\">View All</ion-col>\n    </ion-row>\n\n    <ion-row class=\"margin-class\">\n      <ion-col size=\"4\" class=\"p-0\" *ngFor=\"let rec of recent;  let i=index\" (click)=\"recdetails(i)\">\n        <img *ngIf=\"rec.logo != ''\" src=\"{{rec.logo}}\" class=\"icon-img\">\n        <img *ngIf=\"rec.logo == ''\" class=\"icon-img\" src=\"assets/logo-color.png\"\n          style=\"padding: 10px; background: #fafafa;\">\n        <!-- <div class=\"img-title center text-center p-0\" text-center>{{rec.business_name}}</div> -->\n      </ion-col>\n    </ion-row>\n\n  </div>\n  <!-- Topiko Div End-->\n\n\n  <!-- product Div Start-->\n  <!-- <div *ngIf=\"segmentModel === 'products'\" style=\"background-color: #fff; padding: 0 10px;\">\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let product of products; let i=index\">\n        <ion-card class=\"cards\" (click)=\"productDetials(i)\">\n          <img src=\"{{product.product_image}}\" alt=\"\">\n          <p style=\"padding: 5px 10px; margin: 0;\">{{product.title}}</p>\n          <span style=\"padding:0px 10px\">\n            <span>Price-</span>\n            <span class=\"rs\">Rs{{product.discount}} </span>\n            <span class=\"real-price\">{{product.mrp}} </span>\n            <span class=\"off\">{{product.discount_price}} Off</span>\n          </span>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <div *ngIf=\"segmentModel === 'products'\" style=\"background-color: #fff;\">\n    <ion-row style=\"padding-top: 12px;\">\n      <ion-col size=\"6\" *ngFor=\"let product of products; let i=index\" style=\"padding: 8px;\">\n        <ion-card class=\"cards text-overflow\" (click)=\"productDetials(i)\" style=\"background: #f5f5f5; padding: 0%;\">\n          <img src=\"{{product.product_image}}\" alt=\"\">\n          <p style=\"color: #22272A; padding-left: 4px; margin: 4px 0px;\">{{product.title}}</p>\n          <p style=\"margin: 4px 0px;\">\n            <span style=\"padding-left: 4px;\">Price-</span>\n            <span class=\"rs\">Rs{{product.discount}} </span>\n            <span class=\"real-price\">{{product.mrp}} </span>\n            <span class=\"off\">{{product.discount_price}} Off</span>\n          </p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- produt Div End-->\n\n  <!-- service Div Start-->\n  <div *ngIf=\"segmentModel === 'service'\">\n    <ion-grid class=\"service-grid\">\n      <!-- <ion-card class=\"first\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide>\n            <img\n              src=\"https://suyaaninfrastructure.jcbindia.co.in/media/4988/intelli-performancefuel-efficiency_1050_768_v2.jpg\"\n              style=\"border-radius: 10px;\">\n          </ion-slide>\n          <ion-slide>\n            <img src=\"https://businessrights.in/wp-content/uploads/2020/11/Swiggy-Restaurant-Listing.png\"\n              style=\"border-radius: 10px;\">\n          </ion-slide>\n          <ion-slide>\n            <img\n              src=\"https://mir-s3-cdn-cf.behance.net/projects/original/3445c9110418311.Y3JvcCwxMzgwLDEwODAsNDEzLDA.jpg\"\n              style=\"border-radius: 10px;\">\n          </ion-slide>\n        </ion-slides>\n      </ion-card> -->\n\n      <div *ngFor=\"let ser of services; let i = index;\" style=\"padding-bottom: 18px;\">\n        <ion-card class=\"second\">\n          <ion-row>\n            <ion-col class=\"item\" size=\"12\" style=\"padding: 0%;\">\n              <img class=\"ser-img\" src=\"{{ser.image}}\" alt=\"\">\n              <p style=\"color: #22272a;\">{{ser.service_title}}</p>\n              <span>Actual Price-</span>\n              <span class=\"rs\">{{ser.mrp}} </span><br>\n              <span>Discount Price-</span>\n              <span class=\"rs\">{{ser.discount_price}} </span>\n            </ion-col>\n            <ion-col class=\"des\" size=\"12\">\n              <h6>Description</h6>\n              <p> {{ser.description}}\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-card class=\"third-bg\" style=\"margin: 0px 5px\">\n          <ion-row>\n            <ion-col class=\"icons\" (click)=\"shareservice(i)\">\n              <ion-fab-button class=\"fabs\" color=\"light\">\n                <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n              </ion-fab-button>\n              <p class=\"fabstxt\">Share</p>\n            </ion-col>\n            <ion-col class=\"icons\" (click)=\"likeservice(i)\">\n              <ion-fab-button class=\"fabs\" color=\"light\">\n                <ion-icon name=\"thumbs-up-outline\"></ion-icon>\n              </ion-fab-button>\n              <p class=\"fabstxt\">Like</p>\n            </ion-col>\n            <ion-col class=\"icons\" (click)=\"favservice(i)\">\n              <ion-fab-button class=\"fabs\" color=\"light\">\n                <ion-icon name=\"heart-outline\"></ion-icon>\n              </ion-fab-button>\n              <p class=\"fabstxt\">Favourite</p>\n            </ion-col>\n            <ion-col class=\"icons\" (click)=\"cmtservice(i)\">\n              <ion-fab-button class=\"fabs\" color=\"light\">\n                <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n              </ion-fab-button>\n              <p class=\"fabstxt\">Comment</p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </ion-grid>\n\n\n\n\n\n  </div>\n  <!-- service Div End-->\n\n  <!-- post Div Start-->\n  <div *ngIf=\"segmentModel === 'post'\">\n\n    <div class=\"post-div\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-card class=\"margin-class post-card\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n          <img\n            src=\"https://edlab.nl/wp-content/uploads/2015/10/looking-for-a-job-pandora-and-190-companies-are-hiring-c1b39cd0a1.jpg\"\n            style=\"border-radius: 10px;\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"https://businessrights.in/wp-content/uploads/2020/11/Swiggy-Restaurant-Listing.png\"\n            style=\"border-radius: 10px;\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"https://mir-s3-cdn-cf.behance.net/projects/original/3445c9110418311.Y3JvcCwxMzgwLDEwODAsNDEzLDA.jpg\"\n            style=\"border-radius: 10px;\">\n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n\n    <p class=\"dashboard\">Job Info</p>\n    <ion-card class=\"margin-class\">\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Qualification-</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>Any Degree</p>\n        </ion-col>\n        <ion-col class=\"bcom\" size=\"3\">\n          <p>Bcom</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Working Experience-</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>Fresher</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Working Hours</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>8hours</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"qualification\" size=\"5\">\n          <p>Salary</p>\n        </ion-col>\n        <ion-col class=\"degree\" size=\"4\">\n          <p>2lacks-3.5lacks</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"margin-class\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"margin-class post-chats\">\n      <ion-row class=\"chats scroll\">\n        <ion-col>\n          <p class=\"text\">Chat</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Video</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Call</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col class=\"calls\">\n          <p class=\"text\">Branches</p>\n          <p class=\"number\">02</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </div>\n  <!-- post Div End-->\n\n  <!-- career Div Start-->\n  <div *ngIf=\"segmentModel === 'career'\">\n    <div class=\"post-div\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"margin-class\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second margin-class\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"margin-class post-chats\">\n      <ion-row class=\"chats scroll\">\n        <ion-col>\n          <p class=\"text\">Likes</p>\n          <p class=\"number\">36</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Dislikes</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Share</p>\n          <p class=\"number\">05</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Comment</p>\n          <p class=\"number\">15</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <div class=\"post-div\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"margin-class\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second margin-class\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"margin-class post-chats\">\n      <ion-row class=\"chats scroll\">\n        <ion-col>\n          <p class=\"text\">Likes</p>\n          <p class=\"number\">36</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Dislikes</p>\n          <p class=\"number\">0</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Share</p>\n          <p class=\"number\">05</p>\n        </ion-col>\n        <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"text\">Comment</p>\n          <p class=\"number\">15</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <!-- career Div End-->\n\n  <!-- Overview Div Start-->\n  <div *ngIf=\"segmentModel === 'overview'\">\n    <ion-card class=\"box\">\n      <ion-row class=\"overview-row\">\n        <div class=\"avatar\">\n          <ion-avatar>\n            <img class=\"border\"\n              src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n              alt=\"\">\n          </ion-avatar>\n        </div>\n        <ion-col class=\"title text-overflow\">\n          <p>Sun Group water <ion-icon name=\"shield-checkmark\"></ion-icon>\n          </p>\n          <ion-row class=\"ceo text-overflow\">\n            <p>CEO-Murali</p>\n          </ion-row>\n          <ion-row class=\"director text-overflow\">\n            <p>Referral id -791541</p>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"text\">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's\n          standard dummy text ever since the</p>\n      </ion-row>\n      <ion-row class=\"read-more\">\n        <p>Read More</p>\n      </ion-row>\n      <ion-row class=\"rating\">\n        <p>Rating & Review</p>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ratings\">\n          <ion-row class=\"rate\">\n            <p>4.0</p>\n          </ion-row>\n          <ion-row class=\"star\">\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <ion-icon name=\"star\"></ion-icon>\n            <p>4.1 Ratings</p>\n          </ion-row>\n          <ion-row class=\"num\">\n            <p>2,122,00</p>\n          </ion-row>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row class=\"certify\">\n        <p>Topiko Certification</p>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"certify\">\n        <p>Topiko Awards</p>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Product & Services</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"scrolll\">\n        <p class=\"designn\">Designer</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Banner Design</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Logo Design</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Poster Designer</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Image Design</p>\n        <div class=\"borderr\" size=\"0.1\">\n          <p></p>\n        </div>\n        <p class=\"designn\">Website Design</p>\n      </div>\n\n      <ion-card class=\"address\">\n        <ion-row>\n          <ion-col size=\"8\">\n            <div class=\"add\">\n              Address\n            </div>\n            <div class=\"street\">\n              {{this.address}}\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img src=\"https://www.xda-developers.com/files/2019/06/google-maps-india.jpg\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Online Supporters</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-card class=\"third-card\">\n        <ion-row>\n          <div class=\"avatar avatarr\">\n            <ion-avatar>\n              <img class=\"border\"\n                src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n                alt=\"\">\n            </ion-avatar>\n          </div>\n          <ion-col class=\"name text-overflow overflowroww\">\n            <p class=\"namee\">Kiran</p>\n            <ion-row class=\"market text-overflow\">\n              <p>Marketing | Telecaller | Delivery</p>\n            </ion-row>\n            <ion-row class=\"lang text-overflow\">\n              <p>Tamil <span>|</span> Telugu <span>|</span> Malayalam</p>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-card class=\"third-card\">\n        <ion-row>\n          <div class=\"avatar avatarr\">\n            <ion-avatar>\n              <img class=\"border\"\n                src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n                alt=\"\">\n            </ion-avatar>\n          </div>\n          <ion-col class=\"name text-overflow overflowroww\">\n            <p class=\"namee\">Kiran</p>\n            <ion-row class=\"market text-overflow\">\n              <p>Marketing | Telecaller | Delivery</p>\n            </ion-row>\n            <ion-row class=\"lang text-overflow\">\n              <p>Tamil <span>|</span> Telugu <span>|</span> Malayalam</p>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Company Certificate</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Company Gallery</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Partners</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"namerow\">\n        <div class=\"avatar avatarr\">\n          <ion-avatar>\n            <img class=\"border\"\n              src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCplPn3Mq26bkNeD71qseA9m-aNavXIG2yw&usqp=CAU\"\n              alt=\"\">\n          </ion-avatar>\n        </div>\n        <ion-col class=\"name text-overflow nameee\">\n          <p class=\"namee\">Murali</p>\n          <ion-row class=\"market text-overflow\">\n            <p>CEO</p>\n          </ion-row>\n        </ion-col>\n        <ion-col class=\"fab-overview\" size=\"1.5\">\n          <ion-fab>\n            <ion-fab-button class=\"fabbb\">\n              <ion-icon name=\"call\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"views\">\n        <p>Views</p>\n      </ion-row>\n      <ion-row class=\"text\">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's\n          standard dummy text ever since the</p>\n      </ion-row>\n      <ion-row class=\"read-more\">\n        <p>Read More</p>\n      </ion-row>\n      <ion-row class=\"views\">\n        <p>Gallery</p>\n      </ion-row>\n      <ion-row class=\"square\">\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"2.8\">\n          <ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"product\">\n        <ion-col>\n          <p>Reach</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inp\">\n        <ion-col>\n          <ion-grid class=\"grid\">\n            <ion-row>\n              <ion-col class=\"msg\">\n                <ion-input placeholder=\"Send a message...\"></ion-input>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1\">\n                <ion-icon name=\"mic-outline\"></ion-icon>\n              </ion-col>\n              <ion-col class=\"icn\" size=\"1\">\n                <ion-icon name=\"camera-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"topup\" float=\"right\">\n        <ion-button>Send</ion-button>\n      </ion-row>\n    </ion-card>\n\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/connect\" style=\"margin-bottom: 70px;\">\n    <ion-fab-button class=\"fab\">\n      <ion-icon name=\"headset-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- Topiko Div End-->\n</ion-content>\n\n\n<ion-footer mode=\"md\" class=\"home-footer\">\n  <ion-row>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <p class=\"click-footer\">Home</p>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col routerLink=\"/qr-scanner\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col routerLink=\"/favourites\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col routerLink=\"/calls\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=details-details-module-es5.js.map