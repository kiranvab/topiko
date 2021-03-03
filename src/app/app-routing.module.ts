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
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'selection',
    loadChildren: () => import('./selection/selection.module').then( m => m.SelectionPageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'selectcategory',
    loadChildren: () => import('./selectcategory/selectcategory.module').then( m => m.SelectcategoryPageModule)
  },
  {
    path: 'selectservice',
    loadChildren: () => import('./selectservice/selectservice.module').then( m => m.SelectservicePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'calllist',
    loadChildren: () => import('./calllist/calllist.module').then( m => m.CalllistPageModule)
  },
  {
    path: 'calling',
    loadChildren: () => import('./calling/calling.module').then( m => m.CallingPageModule)
  },
  {
    path: 'businessdetails',
    loadChildren: () => import('./businessdetails/businessdetails.module').then( m => m.BusinessdetailsPageModule)
  },
  {
    path: 'businesscategory',
    loadChildren: () => import('./businesscategory/businesscategory.module').then( m => m.BusinesscategoryPageModule)
  },
  {
    path: 'businessimages',
    loadChildren: () => import('./businessimages/businessimages.module').then( m => m.BusinessimagesPageModule)
  },
  {
    path: 'businesstime',
    loadChildren: () => import('./businesstime/businesstime.module').then( m => m.BusinesstimePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'enquiries',
    loadChildren: () => import('./enquiries/enquiries.module').then( m => m.EnquiriesPageModule)
  },
  {
    path: 'callenquiry',
    loadChildren: () => import('./callenquiry/callenquiry.module').then( m => m.CallenquiryPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'postoffers',
    loadChildren: () => import('./postoffers/postoffers.module').then( m => m.PostoffersPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'addproducts',
    loadChildren: () => import('./addproducts/addproducts.module').then( m => m.AddproductsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
