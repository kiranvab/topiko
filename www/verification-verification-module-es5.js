(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
    /***/
    "IOxn": function IOxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Verification</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment value=\"all\" scrollable=\"true\" mode=\"md\" color=\"secondary\" [(ngModel)]=\"segmentModel\">\n    <ion-segment-button value=\"label\">\n      <ion-icon name=\"star-outline\"></ion-icon>\n      <ion-label>Label</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"park\">\n      <ion-icon name=\"star-outline\"></ion-icon>\n      <ion-label>Park</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"genuine\">\n      <ion-icon name=\"key-outline\"></ion-icon>\n      <ion-label>Genuine</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Label div start-->\n  <div *ngIf=\"segmentModel === 'label'\">\n    <ion-row>\n      <ion-col>\n        <h5>Online Verification</h5>\n      </ion-col>\n      <ion-col size=\"2\" class=\"play\">\n        <ion-icon name=\"play-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"second\">\n      <ion-row class=\"first-row\">\n        <ion-col class=\"feat\" size=\"8\">\n          <p>Verification</p>\n        </ion-col>\n        <ion-col class=\"status\" size=\"4\">\n          <p>Status</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>Two Months Free Trial</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>100/-</span> In & Bound Call Benefits After Trail</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Default <span>1GB</span> space Operational Purpose</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Create A Business</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Products / Services / Branches</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>Reach</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Topiko Listing & <span>Web listing 1year</span> update</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Verification <span>(Excluded Chargeable)</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Promotion / Showcase</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Customize <span>(Private URL\"S Not Permitted)</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row class=\"labe\">\n      <p>Label Verification with GST <span>2999/-</span></p>\n    </ion-row>\n    <ion-row class=\"chec\">\n      <ion-col size=\"1\">\n        <ion-checkbox checked></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p class=\"confirm\">I agree for the <span>Terms and Conditions</span></p>\n      </ion-col>\n    </ion-row>\n    <div class=\"button\">\n      <ion-button>Buy</ion-button>\n    </div>\n\n  </div>\n\n  <!-- label div end-->\n\n  <!-- park start-->\n  <div *ngIf=\"segmentModel === 'park'\">\n    <ion-row>\n      <ion-col>\n        <h5>Online Verification</h5>\n      </ion-col>\n      <ion-col size=\"2\" class=\"play\">\n        <ion-icon name=\"play-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"second\">\n      <ion-row class=\"first-row\">\n        <ion-col class=\"feat\" size=\"8\">\n          <p>Verification</p>\n        </ion-col>\n        <ion-col class=\"status\" size=\"4\">\n          <p>Status</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>Two Months Free Trial</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>100/-</span> In & Bound Call Benefits After Trail</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Default <span>1GB</span> space Operational Purpose</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Create A Business</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Products / Services / Branches</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>Reach</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Topiko Listing & <span>Web listing 1year</span> update</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Verification <span>(Excluded Chargeable)</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Promotion / Showcase</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Customize <span>(Private URL\"S Not Permitted)</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row class=\"labe\">\n      <p>Label Verification with GST <span>6999/-</span></p>\n    </ion-row>\n    <ion-row class=\"chec\">\n      <ion-col size=\"7.7\" class=\"text-overflow last-col\">\n        <p class=\"expiry\">Expiry Date - 10/29/2021</p>\n      </ion-col>\n      <ion-col size=\"4.3\" class=\"lastcol\">\n        <div class=\"button\">\n          <ion-button>Renewal</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <!--park end-->\n\n  <!-- genuine start -->\n  <div *ngIf=\"segmentModel === 'genuine'\">\n    <ion-row>\n      <ion-col>\n        <h5>Online with Topiko Executive verification</h5>\n      </ion-col>\n      <ion-col size=\"2\" class=\"play\">\n        <ion-icon name=\"play-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"second\">\n      <ion-row class=\"first-row\">\n        <ion-col class=\"feat\" size=\"8\">\n          <p>Verification</p>\n        </ion-col>\n        <ion-col class=\"status\" size=\"4\">\n          <p>Status</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>Two Months Free Trial</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>100/-</span> In & Bound Call Benefits After Trail</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Default <span>1GB</span> space Operational Purpose</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Create A Business</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Products / Services / Branches</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p><span>Reach</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Topiko Listing & <span>Web listing 1year</span> update</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Verification <span>(Excluded Chargeable)</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Promotion / Showcase</p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"second-row\">\n        <ion-col class=\"left\" size=\"8\">\n          <p>Customize <span>(Private URL\"S Not Permitted)</span></p>\n        </ion-col>\n        <ion-col class=\"right\" size=\"4\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row class=\"labe\">\n      <p>Label Verification with GST <span>9999/-</span></p>\n    </ion-row>\n    <ion-row class=\"chec\">\n      <ion-col size=\"7.7\" class=\"text-overflow lastcol\">\n        <p class=\"expiry\">Expiry Date - 10/29/2021</p>\n      </ion-col>\n      <ion-col size=\"4.3\" class=\"lastcol\">\n        <div class=\"button\">\n          <ion-button>Renewal</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n  <!--genuine end -->\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "JF+G": function JFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --padding-bottom: 25px;\n}\n\n.first {\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 1.125em 1em;\n}\n\n.star {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.star ion-icon {\n  height: 3.125em;\n  width: 3.125em;\n  color: #871178;\n}\n\n.annual p {\n  font-size: 0.875em;\n  color: #707070;\n  margin: 0.5em 0px;\n}\n\n.fwd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fwd ion-icon {\n  height: 25px;\n  width: 25px;\n  color: #707070;\n}\n\nh5 {\n  font-size: 1em;\n  color: #871178;\n  text-align: left;\n  padding-left: 8%;\n  line-height: 1;\n}\n\n.play {\n  font-size: 24px;\n  line-height: 0;\n  margin-top: 10px;\n}\n\n.second {\n  box-shadow: none;\n  border-radius: 0%;\n  margin: 1.125em 1em;\n}\n\n.first-row {\n  background-color: #871178;\n  color: #ffffff;\n}\n\n.feat p {\n  margin-left: 3.125em;\n}\n\n.status p {\n  text-align: right;\n  margin-right: 2.5em;\n}\n\n.left {\n  text-align: left;\n  color: #707070;\n  font-size: 0.875em;\n  padding-left: 0.8125em;\n  border: 0.0625em solid #00000029;\n  border-top: none;\n}\n\n.right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.0625em solid #00000029;\n  border-left: none;\n  border-top: none;\n}\n\n.right ion-icon {\n  height: 1.625em;\n  width: 1.625em;\n  color: #008d0e;\n}\n\n.second-row span {\n  color: #871178;\n}\n\n.labe {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.labe p {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 10px;\n}\n\n.labe span {\n  color: #871178;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.expiry {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 10px;\n}\n\n.lastcol {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.chec {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 18px;\n  margin-right: 18px;\n}\n\nion-checkbox {\n  --border-color-checked: #707070;\n  opacity: 70%;\n  --checkmark-color: #871178;\n  --checkmark-width: 4;\n  --background: transparent;\n  --background-checked: transparent;\n}\n\nion-col .confirm {\n  font-size: 0.75em;\n  color: #22272a;\n  margin-top: 0%;\n  line-height: 1.3em;\n  letter-spacing: 0.025em;\n}\n\n.confirm span {\n  color: #871178;\n  text-decoration: underline;\n}\n\n.button {\n  display: flex;\n  justify-content: center;\n}\n\n.button ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  font-size: 1em;\n  height: 36px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtBQUdKOztBQUFBO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFRSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUkE7RUFDSSxvQkFBQTtBQVdKOztBQVRBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBY0o7O0FBWkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFlSjs7QUFiQTtFQUNJLGNBQUE7QUFnQko7O0FBYkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWlCSjs7QUFmQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFtQko7O0FBakJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFvQko7O0FBbEJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFzQko7O0FBcEJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBd0JKOztBQXRCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQXlCSjs7QUF2QkE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUEwQkoiLCJmaWxlIjoidmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmZpcnN0IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogMS4xMjVlbSAxZW07XHJcbn1cclxuLnN0YXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc3RhciBpb24taWNvbiB7XHJcbiAgICBoZWlnaHQ6IDMuMTI1ZW07XHJcbiAgICB3aWR0aDogMy4xMjVlbTtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG59XHJcbi5hbm51YWwgcCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIG1hcmdpbjogMC41ZW0gMHB4O1xyXG59XHJcbi5md2Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZndkIGlvbi1pY29uIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5wbGF5IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNlY29uZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBtYXJnaW46IDEuMTI1ZW0gMWVtO1xyXG59XHJcbi5maXJzdC1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3MTE3ODtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5mZWF0IHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMuMTI1ZW07XHJcbn1cclxuLnN0YXR1cyBwIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcclxufVxyXG4ubGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuODEyNWVtO1xyXG4gICAgYm9yZGVyOiAwLjA2MjVlbSBzb2xpZCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAwLjA2MjVlbSBzb2xpZCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLnJpZ2h0IGlvbi1pY29uIHtcclxuICAgIGhlaWdodDogMS42MjVlbTtcclxuICAgIHdpZHRoOiAxLjYyNWVtO1xyXG4gICAgY29sb3I6ICMwMDhkMGU7XHJcbn1cclxuLnNlY29uZC1yb3cgc3BhbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5cclxuLmxhYmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGFiZSBwIHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5sYWJlIHNwYW4ge1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZXhwaXJ5IHtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5sYXN0Y29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNoZWMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzcwNzA3MDtcclxuICAgIG9wYWNpdHk6IDcwJTtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjODcxMTc4O1xyXG4gICAgLS1jaGVja21hcmstd2lkdGg6IDQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1jb2wgLmNvbmZpcm0ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzIyMjcyYTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbn1cclxuLmNvbmZpcm0gc3BhbiB7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idXR0b24gaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Kw+X": function KwX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
        return VerificationPageModule;
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


      var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verification-routing.module */
      "SIZt");
      /* harmony import */


      var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verification.page */
      "c9mM");

      var VerificationPageModule = function VerificationPageModule() {
        _classCallCheck(this, VerificationPageModule);
      };

      VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"]],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
      })], VerificationPageModule);
      /***/
    },

    /***/
    "SIZt": function SIZt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
        return VerificationPageRoutingModule;
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


      var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verification.page */
      "c9mM");

      var routes = [{
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
      }];

      var VerificationPageRoutingModule = function VerificationPageRoutingModule() {
        _classCallCheck(this, VerificationPageRoutingModule);
      };

      VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerificationPageRoutingModule);
      /***/
    },

    /***/
    "c9mM": function c9mM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
        return VerificationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verification.page.html */
      "IOxn");
      /* harmony import */


      var _verification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verification.page.scss */
      "JF+G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VerificationPage = /*#__PURE__*/function () {
        function VerificationPage() {
          _classCallCheck(this, VerificationPage);

          this.segmentModel = "label";
        }

        _createClass(VerificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VerificationPage;
      }();

      VerificationPage.ctorParameters = function () {
        return [];
      };

      VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verification',
        template: _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VerificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=verification-verification-module-es5.js.map