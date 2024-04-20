import { Routes } from '@angular/router';
import { LandingMainComponent } from './landing-page/landing-main/landing-main.component';
import { MainComponent } from './dashboard/main/main.component';
import { StdFormComponent } from './dashboard/std-form/std-form.component';
import { StdListComponent } from './dashboard/std-list/std-list.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { UserAccountComponent } from './dashboard/user-account/user-account.component';
import { ImagesComponent } from './dashboard/images/images.component';

export const routes: Routes = [

    { path: '', redirectTo: '/welcome', pathMatch: 'full' },

    {path:'welcome',component:LandingMainComponent},

    
  { path: 'dashboard', component: MainComponent },
  { path: 'std-form', component: StdFormComponent },
  { path: 'std-form/:id', component: StdFormComponent},
  { path: 'std-list', component: StdListComponent },
  {path:'images',component:ImagesComponent},

  { path: 'contact-us', component: ContactUsComponent },
  {path:'account', component:UserAccountComponent},


  {path:'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
];
