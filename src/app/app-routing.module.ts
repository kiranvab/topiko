import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'createdvc',
    loadChildren: () => import('./createdvc/createdvc.module').then( m => m.CreatedvcPageModule)
  },
  {
    path: 'digitalcard',
    loadChildren: () => import('./digitalcard/digitalcard.module').then( m => m.DigitalcardPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'digitalvcard',
    loadChildren: () => import('./digitalvcard/digitalvcard.module').then( m => m.DigitalvcardPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'myvcard',
    loadChildren: () => import('./myvcard/myvcard.module').then( m => m.MyvcardPageModule)
  },
  {
    path: 'morevcards',
    loadChildren: () => import('./morevcards/morevcards.module').then( m => m.MorevcardsPageModule)
  },
  {
    path: 'editdvdetails',
    loadChildren: () => import('./editdvdetails/editdvdetails.module').then( m => m.EditdvdetailsPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'connect',
    loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule)
  },
  {
    path: 'dial',
    loadChildren: () => import('./dial/dial.module').then( m => m.DialPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'addemployee',
    loadChildren: () => import('./addemployee/addemployee.module').then( m => m.AddemployeePageModule)
  },
  {
    path: 'qrreach',
    loadChildren: () => import('./qrreach/qrreach.module').then( m => m.QrreachPageModule)
  },
  {
    path: 'mpin',
    loadChildren: () => import('./mpin/mpin.module').then( m => m.MpinPageModule)
  },
  {
    path: 'mycard',
    loadChildren: () => import('./mycard/mycard.module').then( m => m.MycardPageModule)
  },
  {
    path: 'qr-scanner',
    loadChildren: () => import('./qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule)
  },
  {
    path: 'addqr',
    loadChildren: () => import('./addqr/addqr.module').then( m => m.AddqrPageModule)
  },
  {
    path: 'add-qr-reach',
    loadChildren: () => import('./add-qr-reach/add-qr-reach.module').then( m => m.AddQrReachPageModule)
  },
  {
    path: 'my-business',
    loadChildren: () => import('./my-business/my-business.module').then( m => m.MyBusinessPageModule)
  },
  {
    path: 'create-business',
    loadChildren: () => import('./create-business/create-business.module').then( m => m.CreateBusinessPageModule)
  },
  {
    path: 'business-details',
    loadChildren: () => import('./business-details/business-details.module').then( m => m.BusinessDetailsPageModule)
  },
  {
    path: 'business-profile',
    loadChildren: () => import('./business-profile/business-profile.module').then( m => m.BusinessProfilePageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'record-view',
    loadChildren: () => import('./record-view/record-view.module').then( m => m.RecordViewPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  {
    path: 'qr-payments',
    loadChildren: () => import('./qr-payments/qr-payments.module').then( m => m.QrPaymentsPageModule)
  },
  {
    path: 'add-qr-payments',
    loadChildren: () => import('./add-qr-payments/add-qr-payments.module').then( m => m.AddQrPaymentsPageModule)
  },
  {
    path: 'plans',
    loadChildren: () => import('./plans/plans.module').then( m => m.PlansPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'global-search',
    loadChildren: () => import('./global-search/global-search.module').then( m => m.GlobalSearchPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'offersnearyou',
    loadChildren: () => import('./offersnearyou/offersnearyou.module').then( m => m.OffersnearyouPageModule)
  },
  {
    path: 'shopsnearyou',
    loadChildren: () => import('./shopsnearyou/shopsnearyou.module').then( m => m.ShopsnearyouPageModule)
  },
  {
    path: 'servicesnearyou',
    loadChildren: () => import('./servicesnearyou/servicesnearyou.module').then( m => m.ServicesnearyouPageModule)
  },
  {
    path: 'featured',
    loadChildren: () => import('./featured/featured.module').then( m => m.FeaturedPageModule)
  },
  {
    path: 'recent',
    loadChildren: () => import('./recent/recent.module').then( m => m.RecentPageModule)
  },
  {
    path: 'shop-categories',
    loadChildren: () => import('./shop-categories/shop-categories.module').then( m => m.ShopCategoriesPageModule)
  },
  {
    path: 'service-categories',
    loadChildren: () => import('./service-categories/service-categories.module').then( m => m.ServiceCategoriesPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'favourite-details',
    loadChildren: () => import('./favourite-details/favourite-details.module').then( m => m.FavouriteDetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'business-views',
    loadChildren: () => import('./business-views/business-views.module').then( m => m.BusinessViewsPageModule)
  },
  {
    path: 'product-views',
    loadChildren: () => import('./product-views/product-views.module').then( m => m.ProductViewsPageModule)
  },
  {
    path: 'offer-views',
    loadChildren: () => import('./offer-views/offer-views.module').then( m => m.OfferViewsPageModule)
  },
  {
    path: 'service-views',
    loadChildren: () => import('./service-views/service-views.module').then( m => m.ServiceViewsPageModule)
  },
  {
    path: 'record-views',
    loadChildren: () => import('./record-views/record-views.module').then( m => m.RecordViewsPageModule)
  },
  {
    path: 'qr-reach-view',
    loadChildren: () => import('./qr-reach-view/qr-reach-view.module').then( m => m.QrReachViewPageModule)
  },
  {
    path: 'edit-qr-reach',
    loadChildren: () => import('./edit-qr-reach/edit-qr-reach.module').then( m => m.EditQrReachPageModule)
  },
  {
    path: 'add-offer',
    loadChildren: () => import('./add-offer/add-offer.module').then( m => m.AddOfferPageModule)
  },
  {
    path: 'addbranches',
    loadChildren: () => import('./addbranches/addbranches.module').then( m => m.AddbranchesPageModule)
  },
  {
    path: 'branches',
    loadChildren: () => import('./branches/branches.module').then( m => m.BranchesPageModule)
  },
  {
    path: 'edit-product',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'edit-offer',
    loadChildren: () => import('./edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'edit-service',
    loadChildren: () => import('./edit-service/edit-service.module').then( m => m.EditServicePageModule)
  },
  {
    path: 'showcase',
    loadChildren: () => import('./showcase/showcase.module').then( m => m.ShowcasePageModule)
  },
  {
    path: 'editshowcase',
    loadChildren: () => import('./editshowcase/editshowcase.module').then( m => m.EditshowcasePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'chatbox',
    loadChildren: () => import('./chatbox/chatbox.module').then( m => m.ChatboxPageModule)
  },
  {
    path: 'shophere',
    loadChildren: () => import('./shophere/shophere.module').then( m => m.ShopherePageModule)
  },
  {
    path: 'careerview',
    loadChildren: () => import('./careerview/careerview.module').then( m => m.CareerviewPageModule)
  },
  {
    path: 'search-company-records',
    loadChildren: () => import('./search-company-records/search-company-records.module').then( m => m.SearchCompanyRecordsPageModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./career/career.module').then( m => m.CareerPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./record/record.module').then( m => m.RecordPageModule)
  },
  {
    path: 'records',
    loadChildren: () => import('./records/records.module').then( m => m.RecordsPageModule)
  },
  {
    path: 'company-chats',
    loadChildren: () => import('./company-chats/company-chats.module').then( m => m.CompanyChatsPageModule)
  },
  {
    path: 'interview',
    loadChildren: () => import('./interview/interview.module').then( m => m.InterviewPageModule)
  },
  {
    path: 'partner',
    loadChildren: () => import('./partner/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'employee-view',
    loadChildren: () => import('./employee-view/employee-view.module').then( m => m.EmployeeViewPageModule)
  },
  {
    path: 'add-resume',
    loadChildren: () => import('./add-resume/add-resume.module').then( m => m.AddResumePageModule)
  },
  {
    path: 'employee-group',
    loadChildren: () => import('./employee-group/employee-group.module').then( m => m.EmployeeGroupPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'add-value',
    loadChildren: () => import('./add-value/add-value.module').then( m => m.AddValuePageModule)
  },
  {
    path: 'pay-bills',
    loadChildren: () => import('./pay-bills/pay-bills.module').then( m => m.PayBillsPageModule)
  },
  {
    path: 'value-history',
    loadChildren: () => import('./value-history/value-history.module').then( m => m.ValueHistoryPageModule)
  },
  {
    path: 'referral-points',
    loadChildren: () => import('./referral-points/referral-points.module').then( m => m.ReferralPointsPageModule)
  },
  {
    path: 'mobile-recharge',
    loadChildren: () => import('./mobile-recharge/mobile-recharge.module').then( m => m.MobileRechargePageModule)
  },
  {
    path: 'current-plan',
    loadChildren: () => import('./current-plan/current-plan.module').then( m => m.CurrentPlanPageModule)
  },
  {
    path: 'plan-details',
    loadChildren: () => import('./plan-details/plan-details.module').then( m => m.PlanDetailsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'person-connect',
    loadChildren: () => import('./person-connect/person-connect.module').then( m => m.PersonConnectPageModule)
  },
  {
    path: 'calling',
    loadChildren: () => import('./calling/calling.module').then( m => m.CallingPageModule)
  },
  {
    path: 'calls-contact',
    loadChildren: () => import('./calls-contact/calls-contact.module').then( m => m.CallsContactPageModule)
  },
  {
    path: 'chats-contact',
    loadChildren: () => import('./chats-contact/chats-contact.module').then( m => m.ChatsContactPageModule)
  },
  {
    path: 'top-up',
    loadChildren: () => import('./top-up/top-up.module').then( m => m.TopUpPageModule)
  },
  {
    path: 'my-qr-reach',
    loadChildren: () => import('./my-qr-reach/my-qr-reach.module').then( m => m.MyQrReachPageModule)
  },
  {
    path: 'choose',
    loadChildren: () => import('./choose/choose.module').then( m => m.ChoosePageModule)
  },
  {
    path: 'company-qrpayment',
    loadChildren: () => import('./company-qrpayment/company-qrpayment.module').then( m => m.CompanyQrpaymentPageModule)
  },
  {
    path: 'relogin',
    loadChildren: () => import('./relogin/relogin.module').then( m => m.ReloginPageModule)
  },
  {
    path: 'videocall',
    loadChildren: () => import('./videocall/videocall.module').then( m => m.VideocallPageModule)
  },
  {
    path: 'businesses',
    loadChildren: () => import('./businesses/businesses.module').then( m => m.BusinessesPageModule)
  },
  {
    path: 'businesses-service',
    loadChildren: () => import('./businesses-service/businesses-service.module').then( m => m.BusinessesServicePageModule)
  },
  {
    path: 'gdetails',
    loadChildren: () => import('./gdetails/gdetails.module').then( m => m.GdetailsPageModule)
  },
  {
    path: 'gcategory',
    loadChildren: () => import('./gcategory/gcategory.module').then( m => m.GcategoryPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'shop-here',
    loadChildren: () => import('./shop-here/shop-here.module').then( m => m.ShopHerePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'edit-branch',
    loadChildren: () => import('./edit-branch/edit-branch.module').then( m => m.EditBranchPageModule)
  },
  {
    path: 'edit-business',
    loadChildren: () => import('./edit-business/edit-business.module').then( m => m.EditBusinessPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
