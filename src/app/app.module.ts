import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { EmotionsComponent } from './emotions.component';
import { EmotionSearchComponent } from './emotion-search.component';
import { EmotionDetailComponent } from './emotion-detail.component';
import { EmotionService } from 'emotion.service';
import { MessageService } from 'message.service';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from 'in-memory-data.service';
//import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HttpModule } from '@angular/http';
//import { LoginComponent } from './login.component';


import { FormsModule }   from '@angular/forms';



import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';




@NgModule({
  declarations: [
    AppComponent,
  //  LoginComponent,
    DashboardComponent,
    EmotionsComponent,
    EmotionSearchComponent,
    EmotionDetailComponent,
    AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
  ],
    

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,

 //   BootstrapModalModule,
  HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false } )

  ],

  providers:[
  EmotionService,
  MessageService,
   AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
