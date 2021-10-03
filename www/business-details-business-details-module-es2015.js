(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-details-business-details-module"],{

/***/ "5FCR":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/business-details/business-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"custom\">\n  <ion-toolbar color=\"custom\" class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{business_name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon routerLink=\"/qr-payments\" name=\"qr-code-outline\"></ion-icon>\n      <ion-icon (click)=\"openMenu()\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"box\" *ngFor=\"let business of bdata\">\n    <ion-row (click)=\"profile()\">\n      <div class=\"avatar\">\n        <ion-avatar>\n          <img class=\"border\" src=\"{{business.logo}}\" alt=\"\">\n        </ion-avatar>\n      </div>\n      <ion-col class=\"text-overflow\">\n        <p class=\"user-name pclass\">{{business.business_name}} <ion-icon name=\"shield-checkmark\"></ion-icon>\n        </p>\n        <ion-row class=\"star\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n          <span>\n            <p class=\"pclass\">4.1 Ratings</p>\n          </span>\n        </ion-row>\n        <p class=\"time pclass\">CEO - {{business.owner_name}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"reg text-overflow\">\n        <p>Free Package</p>\n      </ion-col>\n      <ion-col size=\"4.2\" class=\"claim ellipsis\" routerLink=\"/contact\">\n        <ion-button>Top up</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"chats scroll\" (click)=\"views()\">\n      <ion-col>\n        <p class=\"text\">Viewed</p>\n        <p class=\"number\">{{viewedcnt}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Likes</p>\n        <p class=\"number\">{{likescnt}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col>\n        <p class=\"text\">Reviews</p>\n        <p class=\"number\">{{reviewcnt}}</p>\n      </ion-col>\n      <ion-col class=\"seperator\" size=\"0.1\"></ion-col>\n      <ion-col class=\"calls\">\n        <p class=\"text\">Favourite</p>\n        <p class=\"number\">{{favouritecnt}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <h6>Dashboard</h6>\n\n  <ion-card class=\"first\">\n    <ion-row class=\"scroll\">\n      <ion-col class=\"icons\" (click)=\"products()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"cube-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Products</p>\n      </ion-col>\n      <ion-col class=\"icons\" (click)=\"offers()\">\n        <ion-fab-button color=\"light\">\n          <img src=\"../assets/offers.png\" width=\"60%\" />\n        </ion-fab-button>\n        <p>Offers</p>\n      </ion-col>\n      <ion-col class=\"icons\" (click)=\"services()\">\n        <ion-fab-button color=\"light\">\n          <img src=\"../assets/service.png\" style=\"width: 70%; filter: opacity(0.6);\" />\n        </ion-fab-button>\n        <p>Services</p>\n      </ion-col>\n      <ion-col class=\"icons\" (click)=\"employees()\">\n        <ion-fab-button color=\"light\">\n          <img src=\"../assets/cs.png\" width=\"75%; filter: opacity(0.8);\" />\n        </ion-fab-button>\n        <p>Employee</p>\n      </ion-col>\n      <ion-col class=\"icons\" (click)=\"employees()\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"recording-outline\"></ion-icon>\n        </ion-fab-button>\n        <p>Records</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-segment value=\"all\" scrollable=\"true\" mode=\"md\" color=\"secondary\" [(ngModel)]=\"segmentModel\">\n    <ion-segment-button value=\"post\">\n      <ion-label>Post</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"upload\">\n      <ion-label>Upload</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"branches\">\n      <ion-label>Branches</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"job\">\n      <ion-label>Job</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"partner\">\n      <ion-label>Partner</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- post Div Start-->\n  <div *ngIf=\"segmentModel === 'post'\">\n    <div class=\"datecont\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"second\">\n      <ion-row class=\"likes\">\n        <ion-col>\n          <p class=\"like\">Likes</p>\n          <p class=\"count\">036</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Dislikes</p>\n          <p class=\"count\">30</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Share</p>\n          <p class=\"count\">105</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col class=\"comment\">\n          <p class=\"like\">Comment</p>\n          <p class=\"count\">150</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <div class=\"datecont\">\n      <div class=\"date\">\n        <p>04/23/2021</p>\n      </div>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\" (click)=\"openMenu()\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://guy-gweth.com/wp-content/uploads/2020/10/1.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"https://sitalcollege.com/edu/wp-content/uploads/2021/01/e-learning.jpg\" alt=\"\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"column\">\n          <div class=\"round-img\">\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n          </div>\n          <img class=\"image\" src=\"http://mediawiremobile.com/news/wp-content/uploads/499924122-612x612.jpg\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <p class=\"dashboard\">Descriptions</p>\n    <ion-card class=\"second\">\n      <ion-row>\n        <p class=\"description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae voluptatibus autem\n          quidem reiciendis iusto</p>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"second\">\n      <ion-row class=\"likes\">\n        <ion-col>\n          <p class=\"like\">Likes</p>\n          <p class=\"count\">036</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Dislikes</p>\n          <p class=\"count\">30</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col>\n          <p class=\"like\">Share</p>\n          <p class=\"count\">105</p>\n        </ion-col>\n        <ion-col class=\"lines\" size=\"0.1\"></ion-col>\n        <ion-col class=\"comment\">\n          <p class=\"like\">Comment</p>\n          <p class=\"count\">150</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- post div end-->\n  <!-- Uplaod div start-->\n  <div class=\"upload\" *ngIf=\"segmentModel === 'upload'\">\n    <ion-row>\n      <ion-col class=\"left\">\n        <ion-card class=\"first-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Service Banner</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"second-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Service video, gif or URL</p>\n          </ion-row>\n        </ion-card>\n        <ion-row class=\"pad\">\n          <ion-col class=\"left\">\n            <ion-card class=\"third-card\">\n              <ion-row>\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n              </ion-row>\n              <ion-row>\n                <p>Upload Image</p>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col class=\"right\">\n            <ion-card class=\"third-card\">\n              <ion-row>\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n              </ion-row>\n              <ion-row>\n                <p>Upload Image</p>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" class=\"left\">\n        <ion-card class=\"third-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Image</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"right\">\n        <ion-card class=\"third-card\">\n          <ion-row>\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            <p>Upload Banner</p>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- uplaod div end-->\n  <!--branches div start-->\n  <div *ngIf=\"segmentModel === 'branches'\">\n    <ion-card>\n      <ion-row routerLink=\"/branches\">\n        <ion-col class=\"add-branch\">\n          <span>+</span> Add\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"branches\" *ngFor=\"let branch of branches;\">\n        <ion-col class=\"branches-text\">\n          <p style=\"color: #871178; margin: 0%;\">{{branch.branch_title}}</p><br>\n          <strong>Address:</strong><br>\n          {{branch.branch_address}}\n          {{branch.branch_area}}\n          {{branch.branch_city}}\n          {{branch.branch_state}}\n          {{branch.branch_pincode}}\n          {{branch.branch_country}}\n          <ion-row class=\"branches-color\">\n            <ion-col>{{branch.created_date}}</ion-col>\n            <ion-col>{{branch.created_time}}</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\">\n          <img src=\"https://www.google.com/maps/d/u/0/thumbnail?mid=1X39vwqR9XQIHWZwXa4HS4FAgjeo&hl=en\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!--Branches div end-->\n  <!--Job div start-->\n  <div *ngIf=\"segmentModel === 'job'\">\n    <ion-card>\n\n    </ion-card>\n  </div>\n  <!--job div end-->\n  <!--partner div start-->\n  <div *ngIf=\"segmentModel === 'partner'\">\n    <ion-card></ion-card>\n  </div>\n  <!--partner div end-->\n\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-icon name=\"home\"></ion-icon>\n      <p>Home</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <p>Profile</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"scan-outline\"></ion-icon>\n      <p>Scan</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>Favourites</p>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <p>Call</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "RAKf":
/*!***********************************************************!*\
  !*** ./src/app/business-details/business-details.page.ts ***!
  \***********************************************************/
/*! exports provided: BusinessDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessDetailsPage", function() { return BusinessDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_business_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./business-details.page.html */ "5FCR");
/* harmony import */ var _business_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-details.page.scss */ "iLIG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");









let BusinessDetailsPage = class BusinessDetailsPage {
    constructor(actionsheetCtrl, router, route, storage, http) {
        this.actionsheetCtrl = actionsheetCtrl;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.http = http;
        this.segmentModel = "post";
    }
    ngOnInit() {
        this.storage.get("bid").then(val => {
            this.buid = val;
            console.log(this.buid);
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getbranches.php?bid=" + this.buid).subscribe(data => {
                this.branches = data;
                console.log("Branches", this.branches);
            });
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getviewcount.php?bid=" + this.buid).subscribe(viewData => {
                this.viewedcnt = viewData;
                console.log("View Count", this.viewedcnt);
            });
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getfavcount.php?bid=" + this.buid).subscribe(viewData => {
                this.favouritecnt = viewData;
                console.log("Favoutire Count", this.favouritecnt);
            });
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getlikescount.php?bid=" + this.buid).subscribe(likeData => {
                this.likescnt = likeData;
                console.log("Likes Count", this.likescnt);
            });
            this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"].ApiUrl + "getreviewcount.php?bid=" + this.buid).subscribe(revData => {
                this.reviewcnt = revData;
                console.log("Review Count", this.reviewcnt);
            });
        });
        this.route.queryParams.subscribe(params => {
            if (params && params.businessdata) {
                this.bdata = JSON.parse(params.businessdata);
                this.business_name = this.bdata[0].business_name;
                this.business_id = this.bdata[0].id;
                console.log(this.bdata);
                this.storage.set("bid", this.business_id);
            }
        });
    }
    openMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                // header: 'Modify your album',  
                buttons: [
                    {
                        text: 'Plans',
                        handler: () => {
                            this.router.navigate(['plans']);
                            console.log('Destructive clicked');
                        }
                    }, {
                        text: 'Verification',
                        handler: () => {
                            this.router.navigate(['verification']);
                            console.log('Archive clicked');
                        }
                    }, {
                        text: 'Show Case',
                        handler: () => {
                            console.log('Cancel clicked');
                            this.router.navigate(['/showcase']);
                        },
                    },
                    {
                        text: 'Promotion',
                        handler: () => {
                            console.log('Promotions clicked');
                        },
                    },
                    {
                        text: 'Customize',
                        handler: () => {
                            console.log('Customize clicked');
                        },
                    },
                    {
                        text: 'Setting',
                        handler: () => {
                            console.log('Setting clicked');
                        },
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    products() {
        console.log(this.business_id);
        this.router.navigate(['product']);
    }
    offers() {
        this.router.navigate(['offers']);
    }
    services() {
        console.log(this.business_id);
        this.router.navigate(['service']);
    }
    employees() {
        console.log(this.business_id);
        this.router.navigate(['employee']);
    }
    records() {
        console.log(this.business_id);
    }
    profile() {
        this.storage.set("bid", this.business_id);
        this.router.navigate(['business-profile']);
    }
    views() {
        this.storage.set("bid", this.business_id);
        this.router.navigate(['business-views']);
    }
};
BusinessDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BusinessDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-business-details',
        template: _raw_loader_business_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_business_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BusinessDetailsPage);



/***/ }),

/***/ "iLIG":
/*!*************************************************************!*\
  !*** ./src/app/business-details/business-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  color: #ffffff;\n  font-size: 21px;\n}\n\nion-title {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 0px;\n  padding-top: 1px;\n  letter-spacing: 0.6px;\n  text-align: left;\n}\n\nion-content {\n  --background: #f5f5f5;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 65px;\n}\n\n.avatar ion-avatar {\n  width: 75px;\n  height: 75px;\n}\n\n.border {\n  border: 0.2px solid #707070;\n}\n\n.user-name {\n  color: #22272a;\n  font-size: 18px;\n  margin: 0px;\n}\n\n.user-name ion-icon {\n  color: #39ac00;\n}\n\n.star {\n  margin-top: 5px;\n}\n\n.star ion-icon {\n  color: #fcb900;\n}\n\n.star span p {\n  font-size: 0.5em;\n  padding-left: 5px;\n  color: #22272a;\n}\n\n.time {\n  color: #9f9f9f;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.pclass {\n  margin: 0%;\n  line-height: 18px;\n}\n\n.box {\n  padding: 10px;\n  padding-bottom: 0px;\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n  margin: 0%;\n  margin-top: 18px;\n}\n\n.reg p {\n  color: #9f9f9f;\n  font-size: 1em;\n}\n\n.claim {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.claim ion-button {\n  --background: linear-gradient(#871178, #3c1378);\n  --color: #ffffff;\n  text-transform: capitalize;\n  width: 77px;\n  height: 2em;\n  font-size: 14px;\n  font-weight: normal;\n  --border-radius: 16px;\n}\n\n.chats .text {\n  color: #707070;\n  font-size: 14px !important;\n  text-align: center;\n  margin: 0px;\n}\n\n.chats .number {\n  color: #871178;\n  font-size: 22px !important;\n  text-align: center;\n  margin: 5px 0px;\n}\n\n.seperator {\n  margin: 16px 0px;\n  margin-bottom: 25px;\n}\n\nh6 {\n  color: #22272a;\n  font-size: 1.2em;\n}\n\n.first {\n  background: #ffffff;\n  margin: 1em 0px;\n  box-shadow: none;\n  border-radius: 0%;\n  box-shadow: 0px 0.1875em 0.375em #00000029;\n}\n\n.icons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.125em;\n}\n\n.icons p {\n  margin: 8px 0px;\n  color: #871178;\n}\n\nion-fab-button {\n  --ion-color-base: #f2f2f2 !important;\n  --box-shadow: none;\n}\n\nion-fab-button ion-icon {\n  color: #707070;\n  font-size: 30px;\n}\n\n.scroll {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\nion-segment {\n  background: #ffffff;\n  color: #707070;\n  font-size: 0.9375em;\n}\n\n.segment-button-checked {\n  --color-checked: #871178 !important;\n  color: #871178;\n}\n\nion-segment ion-label {\n  text-transform: capitalize;\n  font-size: 1em;\n}\n\nion-badge {\n  color: #ffffff;\n  background-color: #d93131;\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  font-size: 10px;\n  padding-top: 5px;\n}\n\n.datecont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date {\n  width: 95px;\n  height: 26px;\n  background-color: #cccccc;\n  border-radius: 1em;\n  margin-top: 0.625em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.date p {\n  margin: 0%;\n  text-align: center;\n  font-size: 0.75em;\n  color: #f8f8f8;\n}\n\n.image {\n  min-width: 100%;\n  margin-top: 10px;\n  min-height: 230px;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n  bottom: 22px;\n}\n\n.round-img {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 50px;\n  right: 9px;\n  background: #919191;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.round-img ion-icon {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.second {\n  box-shadow: none;\n  margin: 12px 0px;\n}\n\n.second .description {\n  margin-left: 0.625em;\n  font-size: 0.875em;\n  line-height: 1.8em;\n  letter-spacing: 0.07125em;\n  color: #707070;\n}\n\n.second .likes ion-col {\n  text-align: center;\n}\n\n.second .like {\n  font-size: 0.875em;\n}\n\n.second .lines {\n  border-right: 1px solid #00000033;\n  margin: 14px 0px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  padding: 0%;\n}\n\n.second .count {\n  color: #871178;\n  font-size: 0.875em;\n}\n\n.second .likes .comment {\n  border: none;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0%;\n  width: 100%;\n}\n\nion-footer ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-footer p {\n  font-size: 0.75em;\n  color: #ffffffbd;\n  margin: 0.3125em;\n}\n\nion-footer ion-icon {\n  width: 20px;\n  height: 20px;\n  color: #fff;\n}\n\n.first-card {\n  height: 249px;\n  margin: 0px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.second-card {\n  height: 169px;\n  margin: 0px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.third-card {\n  height: 75px;\n  margin: 0px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.left {\n  padding: 5px 2.5px 0px 0px;\n}\n\n.third-card ion-icon {\n  width: 25px;\n  height: 20px;\n}\n\n.third-card p {\n  font-size: 0.625em;\n  margin: 0.25em 0px;\n}\n\n.right {\n  padding: 5px 0px 0px 2.5px;\n}\n\n.upload {\n  margin: 0 15px;\n}\n\n.add-branch {\n  text-align: right;\n  color: #871178;\n  font-size: 1.25em;\n}\n\n.add-branch span {\n  font-size: 1.5em;\n}\n\n.branches {\n  border-bottom: 1px solid #cccccc;\n}\n\n.branches-text {\n  color: #333;\n  color: #333;\n  font-size: 0.9em;\n  padding: 1em;\n  padding-top: 0%;\n}\n\n.branches-color {\n  color: #871178;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1c2luZXNzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFVSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQVdKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFWQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFhSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBOEVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBM0VKOztBQStFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQTVFSjs7QUE4RUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUEzRUo7O0FBNkVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUExRUo7O0FBNEVBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQXpFSjs7QUEyRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXhFSjs7QUEwRUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUF2RUo7O0FBMEVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUF2RUo7O0FBeUVBO0VBQ0ksbUNBQUE7RUFDQSxjQUFBO0FBdEVKOztBQXdFQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQXJFSjs7QUF1RUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBcEVKOztBQXdFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBckVKOztBQXVFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFwRUo7O0FBc0VBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbkVKOztBQXFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBbEVKOztBQW9FQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBakVKOztBQW1FQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhFSjs7QUFrRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQS9ESjs7QUFrRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBL0RKOztBQWlFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQTlESjs7QUFnRUE7RUFDSSxrQkFBQTtBQTdESjs7QUErREE7RUFDSSxrQkFBQTtBQTVESjs7QUE4REE7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUEzREo7O0FBNkRBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBMURKOztBQTREQTtFQUNJLFlBQUE7QUF6REo7O0FBNkhBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBMUhKOztBQTRIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF6SEo7O0FBMkhBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBeEhKOztBQTBIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXZISjs7QUFnSUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTdISjs7QUErSEE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTVISjs7QUE4SEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTNISjs7QUE2SEE7RUFDSSwwQkFBQTtBQTFISjs7QUE0SEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXpISjs7QUEySEE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBeEhKOztBQTBIQTtFQUNJLDBCQUFBO0FBdkhKOztBQXlIQTtFQUNJLGNBQUE7QUF0SEo7O0FBMkhBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF4SEo7O0FBMEhBO0VBQ0ksZ0JBQUE7QUF2SEo7O0FBMEhBO0VBQ0ksZ0NBQUE7QUF2SEo7O0FBeUhBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdEhKOztBQXdIQTtFQUNJLGNBQUE7QUFySEoiLCJmaWxlIjoiYnVzaW5lc3MtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNjVweDtcclxufVxyXG5cclxuLmF2YXRhciBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udXNlci1uYW1lIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzlhYzAwO1xyXG59XHJcbi5zdGFyIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uc3RhciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZjYjkwMDtcclxufVxyXG4uc3RhciBzcGFuIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICMyMjI3MmE7XHJcbn1cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGNsYXNzIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcbi5yZWcgcCB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbi5jbGFpbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNsYWltIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg3MTE3OCwgIzNjMTM3OCk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB3aWR0aDogNzdweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG4vLyAuY2hhdHMge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuLy8gfVxyXG4uY2hhdHMgLnRleHQge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5jaGF0cyAubnVtYmVyIHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLy8gLmNoYXRzIC50ZXh0IHtcclxuLy8gICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxZW07XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMDtcclxuLy8gfVxyXG4vLyAuY2hhdHMgLm51bWJlciB7XHJcbi8vICAgICBjb2xvcjogIzg3MTE3ODtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luOiAwJTtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyB9XHJcbi5zZXBlcmF0b3Ige1xyXG4gICAgbWFyZ2luOiAxNnB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi8vIC5ib3gge1xyXG4vLyAgICAgcGFkZGluZzogMC42MjVlbTtcclxuLy8gICAgIG1hcmdpbjogMTVweCAxOHB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDAuMTg3NWVtIDAuMzc1ZW0gIzAwMDAwMDI5O1xyXG4vLyB9XHJcbi8vIC5ib3ggaW9uLWF2YXRhciB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vIH1cclxuLy8gaW9uLWF2YXRhciB7XHJcbi8vICAgICB3aWR0aDogNzBweDtcclxuLy8gICAgIGhlaWdodDogNzBweDtcclxuLy8gICAgIG1hcmdpbjogMTBweCA1cHggMCA1cHg7XHJcbi8vIH1cclxuLy8gaW9uLWF2YXRhciAuYm9yZGVyIHtcclxuLy8gICAgIGJvcmRlcjogMC4wMTI1ZW0gc29saWQgIzcwNzA3MDtcclxuLy8gfVxyXG4vLyAudGl0bGUge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4vLyB9XHJcbi8vIC50aXRsZSBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgY29sb3I6ICMyMjI3MmE7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC4wMzc1ZW07XHJcbi8vICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4vLyAgICAgbWFyZ2luOiAzcHggMHB4O1xyXG4vLyB9XHJcbi8vIC50aXRsZSBpb24taWNvbiB7XHJcbi8vICAgICBjb2xvcjogIzM5YWMwMDtcclxuLy8gfVxyXG4vLyAuZGlyZWN0b3IgcCB7XHJcbi8vICAgICBjb2xvcjogIzlmOWY5ZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4vLyAgICAgbWFyZ2luOiA0cHggMHB4O1xyXG4vLyB9XHJcbi8vIC5zdGFyIGlvbi1pY29uIHtcclxuLy8gICAgIGNvbG9yOiAjZmNiOTAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxZW07XHJcbi8vIH1cclxuLy8gLnN0YXIgcCB7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4vLyB9XHJcbi8vIC5yZWcgcCB7XHJcbi8vICAgICBjb2xvcjogIzlmOWY5ZjtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxZW07XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4vLyB9XHJcbi8vIC5sYXN0IHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAwLjYyNWVtO1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuLy8gICAgIGNvbG9yOiAjODcxMTc4O1xyXG4vLyB9XHJcblxyXG4vLyAucHVycGxlLWJ0biB7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgICB3aWR0aDogMjUlO1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyNXB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbi8vIH1cclxuLy8gLnRvcHVwIHtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG4vLyAudG9wdXAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODcxMTc4LCAjM2MxMzc4KTtcclxuLy8gICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICAgIHdpZHRoOiA2ZW07XHJcbi8vICAgICBoZWlnaHQ6IDEuNWVtO1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbi8vIH1cclxuXHJcbmg2IHtcclxuICAgIGNvbG9yOiAjMjIyNzJhO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLy8gY2FyZFxyXG4uZmlyc3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMWVtIDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjE4NzVlbSAwLjM3NWVtICMwMDAwMDAyOTtcclxufVxyXG4uaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4xMjVlbTtcclxufVxyXG4uaWNvbnMgcCB7XHJcbiAgICBtYXJnaW46IDhweCAwcHg7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1ZW07XHJcbn1cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjODcxMTc4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzg3MTE3ODtcclxufVxyXG5pb24tc2VnbWVudCBpb24tbGFiZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5pb24tYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkzMTMxO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4vLyBwb3N0IHNlZ21lbnQgc3RhcnRcclxuLmRhdGVjb250IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRhdGUgcCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogI2Y4ZjhmODtcclxufVxyXG4uaW1hZ2Uge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xyXG59XHJcbi5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDIycHg7XHJcbn1cclxuLnJvdW5kLWltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHJpZ2h0OiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTE5MTkxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucm91bmQtaW1nIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG59XHJcbi5zZWNvbmQgLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjYyNWVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDcxMjVlbTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5zZWNvbmQgLmxpa2VzIGlvbi1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWNvbmQgLmxpa2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5zZWNvbmQgLmxpbmVzIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICAgIG1hcmdpbjogMTRweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcbi5zZWNvbmQgLmNvdW50IHtcclxuICAgIGNvbG9yOiAjODcxMTc4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi5zZWNvbmQgLmxpa2VzIC5jb21tZW50IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4vLyBwb3N0IHNlZ21lbnQgZW5kXHJcblxyXG4vLyAuc2Vjb25kIGlvbi1jb2wge1xyXG4vLyAgICAgY29sb3I6ICMyMjI3MmE7XHJcbi8vICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbi8vIH1cclxuLy8gLnNlY29uZCBpb24tYXZhdGFyIHtcclxuLy8gICAgIHdpZHRoOiAzMXB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzMXB4O1xyXG4vLyB9XHJcbi8vIC5zZWNvbmQgaW9uLWlucHV0IHtcclxuLy8gICAgIGJvcmRlcjogMC4zcHggc29saWQgIzcwNzA3MDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4vLyB9XHJcblxyXG4vLyBkaXYge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAuZGF0ZSB7XHJcbi8vICAgICB3aWR0aDogMzAlO1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgcGFkZGluZzogNnB4O1xyXG4vLyB9XHJcbi8vIC5kYXRlIHAge1xyXG4vLyAgICAgbWFyZ2luOiAwJTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4vLyAgICAgY29sb3I6ICNmOGY4Zjg7XHJcbi8vIH1cclxuXHJcbi8vIC5pbWFnZSB7XHJcbi8vICAgICBtYXJnaW46IDAuNjg3NWVtIDAuNjI1ZW07XHJcbi8vIH1cclxuLy8gLmRlc2NyaXB0aW9uIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAwLjYyNWVtO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC4wNzEyNWVtO1xyXG4vLyAgICAgY29sb3I6ICM3MDcwNzA7XHJcbi8vIH1cclxuLy8gLmxpa2VzIGlvbi1jb2wge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNzA3MDtcclxuLy8gICAgIGJvcmRlci1jb2xsYXBzZTogNTAlO1xyXG4vLyB9XHJcbi8vIC5saWtlIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyB9XHJcbi8vIC5jb3VudCB7XHJcbi8vICAgICBjb2xvcjogIzg3MTE3ODtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbi8vIH1cclxuLy8gLmxpa2VzIC5jb21tZW50IHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG4vLyAubGFzdC1jYXJkIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbi8vIH1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi1mb290ZXIgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tZm9vdGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZmJkO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVlbTtcclxufVxyXG5pb24tZm9vdGVyIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vIC5zZXAge1xyXG4vLyAgICAgbWFyZ2luOiA1JSAwO1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q1ZDVkNTtcclxuLy8gfVxyXG4vL1VwbGFvZCBkaXYgY3NzIHN0YXJ0XHJcblxyXG4uZmlyc3QtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDI0OXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWNvbmQtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDE2OXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50aGlyZC1jYXJkIHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGVmdCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMi41cHggMHB4IDBweDtcclxufVxyXG4udGhpcmQtY2FyZCBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG4udGhpcmQtY2FyZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVlbTtcclxuICAgIG1hcmdpbjogMC4yNWVtIDBweDtcclxufVxyXG4ucmlnaHQge1xyXG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMi41cHg7XHJcbn1cclxuLnVwbG9hZCB7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxufVxyXG4vL1VwbG9hZCBkaXYgY3NzIGVuZFxyXG5cclxuLy8gQnJuY2hlcyBkaXYgY3NzIHN0YXJ0XHJcbi5hZGQtYnJhbmNoIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxufVxyXG4uYWRkLWJyYW5jaCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5icmFuY2hlcyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcclxufVxyXG4uYnJhbmNoZXMtdGV4dCB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxufVxyXG4uYnJhbmNoZXMtY29sb3Ige1xyXG4gICAgY29sb3I6ICM4NzExNzg7XHJcbn1cclxuXHJcbi8vIGJyYW5jaGVzIGRpdiBjc3MgIGVuZFxyXG4iXX0= */");

/***/ }),

/***/ "iWjC":
/*!*************************************************************!*\
  !*** ./src/app/business-details/business-details.module.ts ***!
  \*************************************************************/
/*! exports provided: BusinessDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessDetailsPageModule", function() { return BusinessDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _business_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-details-routing.module */ "om98");
/* harmony import */ var _business_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-details.page */ "RAKf");







let BusinessDetailsPageModule = class BusinessDetailsPageModule {
};
BusinessDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _business_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessDetailsPageRoutingModule"]
        ],
        declarations: [_business_details_page__WEBPACK_IMPORTED_MODULE_6__["BusinessDetailsPage"]]
    })
], BusinessDetailsPageModule);



/***/ }),

/***/ "om98":
/*!*********************************************************************!*\
  !*** ./src/app/business-details/business-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BusinessDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessDetailsPageRoutingModule", function() { return BusinessDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _business_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business-details.page */ "RAKf");




const routes = [
    {
        path: '',
        component: _business_details_page__WEBPACK_IMPORTED_MODULE_3__["BusinessDetailsPage"]
    }
];
let BusinessDetailsPageRoutingModule = class BusinessDetailsPageRoutingModule {
};
BusinessDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusinessDetailsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=business-details-business-details-module-es2015.js.map