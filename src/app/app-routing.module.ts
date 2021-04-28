import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
