import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
//import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { DashboardComponent } from './dashboard.component';
import { EmotionsComponent } from './emotions.component';
import { EmotionDetailComponent } from './emotion-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
   {path: 'emotions', component: EmotionsComponent },
   {path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: EmotionDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

