(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-col>\n      <ion-col class=\"center\">\n        <ion-row>\n          <ion-col size=\"3\"><img class=\"logo-img\" src=\"assets/logo-inside.png\" /></ion-col>\n          <ion-col class=\"location\">Hyderabad\n            <ion-icon style=\"padding-top: 5px;\" name=\"chevron-down-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-row>\n          <ion-col  (click)=\"showsearch()\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n          </ion-col>\n          <ion-col id=\"cart-btn\" ion-button icon-only routerLink=\"/notifications\">\n            <ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge id=\"cart-badge\" color=\"danger\">00</ion-badge>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-searchbar *ngIf=\"SearchBar\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <img src=\"../assets/banner1.png\" style=\"border-radius: 10px;\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../assets/banner2.png\" style=\"border-radius: 10px;\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../assets/banner3.png\" style=\"border-radius: 10px;\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../assets/banner4.png\" style=\"border-radius: 10px;\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../assets/banner5.png\" style=\"border-radius: 10px;\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../assets/banner6.png\" style=\"border-radius: 10px;\">\n    </ion-slide>\n  </ion-slides>\n\n\n  <ion-card>\n    <h5>Trending Offers</h5>\n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <img src=\"../assets/offer1.png\" />\n            </ion-card>\n          </ion-col>\n          <ion-col>\n            <ion-card>\n              <img src=\"../assets/offer2.png\" />\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <img src=\"../assets/offer3.png\" />\n            </ion-card>\n          </ion-col>\n          <ion-col>\n            <ion-card>\n              <img src=\"../assets/offer1.png\" />\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n    </ion-slides>\n  </ion-card>\n\n  <!-- <ion-card>\n  <h5>Shops Near you</h5>\n  <ion-slides>\n    <ion-slide>\n      <ion-row>\n        <ion-col class=\"nearby-col\" size=\"4\" routerLink=\"/listing\">\n          <ion-card>\n            <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\"/>\n            <p>Kavya Kiranam</p>\n          </ion-card>\n        </ion-col>\n        <ion-col class=\"nearby-col\" size=\"4\" routerLink=\"/listing\">\n          <ion-card>\n            <img src=\"https://static.parade.com/wp-content/uploads/2020/03/target-senior-hours-ftr.jpg\" />\n            <p>Beyond Bakers</p>\n          </ion-card>\n        </ion-col>\n        <ion-col class=\"nearby-col\" size=\"4\" routerLink=\"/listing\">\n          <ion-card>\n            <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\"/>\n            <p>Kavya Kiranam</p>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  <ion-slide>\n  <ion-row>\n        <ion-col  size=\"4\">\n          <ion-card>\n            <img src=\"https://www.duluthtrading.com/on/demandware.static/-/Sites/default/dwec506700/images/stores/Franklin-TN-store.jpg\"/>\n            <p>Kavya Kiranam</p>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-card >\n            <img src=\"https://www.duluthtrading.com/on/demandware.static/-/Sites/default/dwec506700/images/stores/Franklin-TN-store.jpg\"/>\n            <p>Kavya Kiranam</p>\n          </ion-card>\n        </ion-col>\n        <ion-col  size=\"4\">\n          <ion-card>\n            <img src=\"https://www.duluthtrading.com/on/demandware.static/-/Sites/default/dwec506700/images/stores/Franklin-TN-store.jpg\"/>\n            <p>Kavya Kiranam</p>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n</ion-card> -->\n\n\n  <ion-card>\n    \n      <ion-row>\n        <ion-col size=\"8\">\n          <h5>Shops Near you</h5>\n        </ion-col>\n        <ion-col style=\"text-align: right; padding-right: 10px;\">\n          <p routerLink=\"/categories\">View All</p>\n        </ion-col>\n      </ion-row>\n    \n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n            <p>Grocery</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n            <p>Hotel</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/chicken.png\" />\n            <p>Meat</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/milk.png\" />\n            <p>Dairy</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n            <p>Grocery</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n            <p>Hotel</p>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/grocery.png\" />\n            <p>Grocery</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/restaurant.png\" />\n            <p>Restaurant</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/pharmacy.png\" />\n            <p>Pharmacy</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/bakery.png\" />\n            <p>Bakery</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/pharmacy.png\" />\n            <p>Pharmacy</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"img-pad\" src=\"assets/category/bakery.png\" />\n            <p>Bakery</p>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-row>\n          <ion-col>\n            <img class=\"img-pad\"\n              src=\"https://idealdesigns.in/wp-content/uploads/2017/10/hotel-branding-hyderabad-bangalore-branding-agency-hyderabad-restaurant-complete-branding-bangalore-India-dhanturi-group-of-hotels-1.jpg\" />\n          </ion-col>\n          <ion-col>\n            <img class=\"img-pad\" src=\"https://www.paradisefoodcourt.in/images/side-logo.jpg\">\n          </ion-col>\n          <ion-col>\n            <img class=\"img-pad\"\n              src=\"https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/37817/optimized_large_thumb_stage.jpg\" />\n          </ion-col>\n          <ion-col>\n            <img class=\"img-pad\"\n              src=\"http://idealbranding.in/wp-content/uploads/2018/04/restaurant-logo-design-hotel-shubham-palace2-300x200.jpg\" />\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-row>\n          <ion-col>\n            <img class=\"img-pad\"\n              src=\"https://www.babaibhojanam.com/wp-content/uploads/2020/09/babaibhojanam-logo.png\" />\n          </ion-col>\n          <ion-col>\n            <img class=\"img-pad\"\n              src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MM/Bhojanam_Multicuisine_Restaurant_edvo_logo\" />\n          </ion-col>\n          <ion-col>\n            <img class=\"img-pad\" src=\"https://image3.mouthshut.com/images/imagesp/925865276s.jpg\" />\n          </ion-col>\n          <ion-col>\n            <img class=\"img-pad\"\n              src=\"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-1/p720x720/76705062_116506136473811_1787817451635867648_o.png?_nc_cat=102&ccb=3&_nc_sid=dbb9e7&_nc_ohc=TSBoJ_qynmUAX_vkZ4Y&_nc_ht=scontent.fhyd5-1.fna&_nc_tp=30&oh=3c21dcac8992c38560e7af8c874d288a&oe=6056EE2B\" />\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n    </ion-slides>\n  </ion-card>\n\n\n\n\n  <ion-card>\n    \n      <ion-row>\n        <ion-col size=\"8\">\n          <h5>Services for you</h5>\n        </ion-col>\n        <ion-col style=\"text-align: right; padding-right: 10px;\">\n          <p routerLink=\"/services\">View All</p>\n        </ion-col>\n      </ion-row>\n    \n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"fast-food-outline\"></ion-icon>\n            <div class=\"card-title\">Food & Drinks</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"pizza-outline\"></ion-icon>\n            <div class=\"card-title\">Food & Drinks</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"barbell-outline\"></ion-icon>\n            <div class=\"card-title\">Fitness & GYM</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"cart-outline\"></ion-icon>\n            <div class=\"card-title\">Grocery Store</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"cafe-outline\"></ion-icon>\n            <div class=\"card-title\">Coffee Shop</div>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"desktop-outline\"></ion-icon>\n            <div class=\"card-title\">Internet Cafe</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"bicycle-outline\"></ion-icon>\n            <div class=\"card-title\">Bicycle Store</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"car-sport-outline\"></ion-icon>\n            <div class=\"card-title\">Car Mechanic</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"flower-outline\"></ion-icon>\n            <div class=\"card-title\">Flowers Shop</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"paw-outline\"></ion-icon>\n            <div class=\"card-title\">Veterinary Shop</div>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"school-outline\"></ion-icon>\n            <div class=\"card-title\">Training Center</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"fitness-outline\"></ion-icon>\n            <div class=\"card-title\">Diagnostic Center</div>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-card>\n    <h5>New in your Area</h5>\n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://static.toiimg.com/thumb/50307230/kashmir-handicraft-1.jpg?width=1200&height=900\" />\n              <p>Kavya Kiranam</p>\n              <ion-badge color=\"warning\">Grocery</ion-badge>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Colorful_and_Inviting_Candy_Store_%2814867133277%29.jpg/1200px-Colorful_and_Inviting_Candy_Store_%2814867133277%29.jpg\" />\n              <p>Beyond Bakers</p>\n              <ion-badge color=\"warning\">Bakery</ion-badge>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://cms.qz.com/wp-content/uploads/2015/07/bata-viviana-store_new.jpg?quality=75&strip=all&w=1200&h=900&crop=1\" />\n              <p>Kavya Kiranam</p>\n              <ion-badge color=\"warning\">Automobiles</ion-badge>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://www.super99.in/media/imagegallery/super-store-image2-gallery-img-2017-10-12-05-55-01.jpg\" />\n              <p>Kavya Kiranam</p>\n              <ion-badge color=\"warning\">Agriculture</ion-badge>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\" />\n              <p>Kavya Kiranam</p>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://static.parade.com/wp-content/uploads/2020/03/target-senior-hours-ftr.jpg\" />\n              <p>Beyond Bakers</p>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\" />\n              <p>Kavya Kiranam</p>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\" />\n              <p>Kavya Kiranam</p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n\n\n\n  <ion-card>\n    <h5>Recently Viewed</h5>\n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-card>\n              <img src=\"https://i.guim.co.uk/img/media/7b961065aac46d3803ed1304500f1a452a882253/0_0_4368_2624/master/4368.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7c9121af67d95569186cd9b92094ec9e\" />\n              <p>Kavya Kiranam</p>\n              <ion-badge color=\"warning\">Automobiles</ion-badge>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-card>\n              <img src=\"https://img.etimg.com/thumb/width-1200,height-900,imgsize-789754,resizemode-1,msid-73320212/small-biz/sme-sector/the-kirana-is-a-technology-shop-too.jpg\" />\n              <p>Kavya Kiranam</p>\n              <ion-badge color=\"warning\">Grocery</ion-badge>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-card>\n              <img src=\"https://www.kaibab.org/kaibab.org/tr001/lg_jun_17_2000_094558.jpg\" />\n              <p>Kavya Kiranam</p>\n              <ion-badge color=\"warning\">Vegetables</ion-badge>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-card>\n              <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\" />\n              <p>Kavya Kiranam</p>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-card>\n              <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\" />\n              <p>Kavya Kiranam</p>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-card>\n              <img src=\"https://cdn.britannica.com/16/204716-050-8BB76BE8/Walmart-store-Mountain-View-California.jpg\" />\n              <p>Kavya Kiranam</p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n\n  <ion-card>\n    <h5>Featured Listing</h5>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <img src=\"http://www.thelogomix.com/files/imagecache/v3-logo-detail/gingerLogo.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <img\n            src=\"https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37817/optimized_large_thumb_stage.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <img\n            src=\"https://images-platform.99static.com/_ro01DE8BFHd7HK0n99dkPTThdY=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/86/86660/attachment_86660057\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <img\n            src=\"https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/37738/optimized_large_thumb_stage.jpg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <img src=\"http://www.thelogomix.com/files/imagecache/v3-logo-detail/Swantone%20Purple.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <img src=\"http://www.thelogomix.com/files/imagecache/v3-logo-detail/gaiamun.jpg\">\n        </ion-avatar>\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <h5>Recommended for you </h5>\n    <ion-slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://static.toiimg.com/thumb/50307230/kashmir-handicraft-1.jpg?width=1200&height=900\" />\n             \n              <p>Kavya Kiranam</p>\n              <ion-row>\n                <ion-col><ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8</ion-col>\n                <ion-col><ion-badge color=\"warning\">Automobiles</ion-badge></ion-col>\n                <ion-col><ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts</ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://static.toiimg.com/thumb/57200599/ThinkstockPhotos-492983054.jpg?width=1200&height=900\" />\n              <p>Kavya Kiranam</p>\n              <ion-row>\n                <ion-col><ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8</ion-col>\n                <ion-col><ion-badge color=\"warning\">Automobiles</ion-badge></ion-col>\n                <ion-col><ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts</ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://static.toiimg.com/thumb/54249765/3122879823_2cf668b5f4_b.jpg?width=1200&height=900\" />\n              <p>Kavya Kiranam</p>\n              <ion-row>\n                <ion-col><ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8</ion-col>\n                <ion-col><ion-badge color=\"warning\">Automobiles</ion-badge></ion-col>\n                <ion-col><ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts</ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-card>\n              <img src=\"https://static.toiimg.com/thumb/54249765/3122879823_2cf668b5f4_b.jpg?width=1200&height=900\" />\n              <p>Kavya Kiranam</p>\n              <ion-row>\n                <ion-col><ion-icon color=\"primary\" name=\"star-half-outline\"></ion-icon> 4.8</ion-col>\n                <ion-col><ion-badge color=\"warning\">Automobiles</ion-badge></ion-col>\n                <ion-col><ion-icon color=\"primary\" name=\"location-outline\"></ion-icon> 100 Mts</ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col routerLink=\"/calllist\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/message\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/home\">\n      <ion-icon name=\"home-outline\" class=\"home-icon\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/favourite\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-col>\n    <ion-col routerLink=\"/profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-content {\n  --padding: 10px;\n  --font-size: 12px;\n  --background:#fafafa;\n}\n.row-bg {\n  background: #f4f4f4;\n}\n.category {\n  padding: 10px 0 0 0;\n  margin: 0px;\n  text-align: center;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 2px ​2px 3px #ccc;\n}\nion-header {\n  display: block;\n}\nion-header ion-icon {\n  font-size: 18px;\n}\n.img-pad {\n  padding: 10px;\n  border: 0;\n  margin-bottom: -10px;\n}\n.ion-col-cat {\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.card-title {\n  font-size: 10px;\n  margin: 0;\n  padding: 5px;\n}\n.card-subtitle {\n  font-size: 10px;\n  margin: 0;\n  padding: 0;\n  background: #f4f4f4;\n}\nion-slide ion-icon {\n  color: #9c27b0;\n  font-size: 24px;\n  padding-top: 5px;\n}\nion-slide ion-col {\n  font-size: 10px;\n  padding: 0;\n}\nion-footer {\n  height: 50px;\n}\nion-slides {\n  background: #fff;\n}\nion-header ion-icon {\n  padding-top: 10px !important;\n  font-size: 22px !important;\n}\nh5 {\n  padding-left: 1rem;\n  margin: 0;\n  padding: 10px;\n  font-weight: bold;\n  color: #5e1c57;\n}\n#cart-btn {\n  position: relative;\n}\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 5px;\n  font-size: 12px;\n}\n.center {\n  text-align: center;\n}\n.location {\n  line-height: 36px;\n  font-size: 1.2rem;\n  text-align: left;\n  padding-top: 5px;\n  padding: 0;\n}\n.logo-img {\n  margin-left: -15%;\n  width: 60%;\n}\n.nearby-col {\n  padding: 0;\n  margin: 0;\n}\nion-col ion-card {\n  margin: 5px;\n}\np {\n  margin: 0 !important;\n  font-size: 12px;\n  padding: 5px 0 5px 0;\n  color: #5e1c57;\n}\nion-avatar {\n  margin: 0 auto;\n  margin-bottom: 10px;\n  width: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRUo7QUFBQTtFQUVJLG1CQUFBO0FBRUo7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBR0o7QUFEQTtFQUVJLGNBQUE7QUFHSjtBQURBO0VBRUksZUFBQTtBQUdKO0FBREE7RUFFSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBR0o7QUFEQTtFQUVJLDRCQUFBO0VBQ0EsNkJBQUE7QUFHSjtBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBR0o7QUFEQTtFQUVJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBR0o7QUFEQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQURBO0VBRUksZUFBQTtFQUNBLFVBQUE7QUFHSjtBQURBO0VBRUksWUFBQTtBQUdKO0FBREE7RUFFSSxnQkFBQTtBQUdKO0FBQUE7RUFFSSw0QkFBQTtFQUNBLDBCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHSjtBQUFBO0VBQ0ksa0JBQUE7QUFHSjtBQUFDO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHSjtBQURBO0VBRUksa0JBQUE7QUFHSjtBQURBO0VBRUksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBR0o7QUFEQztFQUVHLGlCQUFBO0VBQ0EsVUFBQTtBQUdKO0FBQUM7RUFFSSxVQUFBO0VBQ0EsU0FBQTtBQUVMO0FBQ0M7RUFFSSxXQUFBO0FBQ0w7QUFDQztFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUNMO0FBR0M7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURMIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmc6IDEwcHg7XG4gIC0tZm9udC1zaXplOiAxMnB4O1xuICAtLWJhY2tncm91bmQ6I2ZhZmFmYTtcbn1cblxuLnJvdy1iZyB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5cbi5jYXRlZ29yeSB7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDJweCDigIsycHggM3B4ICNjY2M7XG59XG5cbmlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmltZy1wYWQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uaW9uLWNvbC1jYXQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG5pb24tc2xpZGUgaW9uLWljb24ge1xuICBjb2xvcjogIzljMjdiMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5pb24tc2xpZGUgaW9uLWNvbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1oZWFkZXIgaW9uLWljb24ge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbn1cblxuaDUge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNWUxYzU3O1xufVxuXG4jY2FydC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9jYXRpb24ge1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sb2dvLWltZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTUlO1xuICB3aWR0aDogNjAlO1xufVxuXG4ubmVhcmJ5LWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNvbCBpb24tY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIGNvbG9yOiAjNWUxYzU3O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomePage = /*#__PURE__*/function () {
        function HomePage() {
          _classCallCheck(this, HomePage);

          this.slideOpts = {
            speed: 1000,
            slidesPerView: 1.10,
            loop: true,
            autoplay: true,
            centeredSlides: true,
            spaceBetween: 2
          };
          this.SearchBar = false;
        }

        _createClass(HomePage, [{
          key: "showsearch",
          value: function showsearch() {
            if (this.SearchBar == true) {
              this.SearchBar = false;
            } else {
              this.SearchBar = true;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map