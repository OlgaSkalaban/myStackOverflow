import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
//import { AuthModule } from './auth/auth.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { PostPageComponent } from './post-page/post-page.component';
import { QuestionComponent } from './shared/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupFormComponent,
    LoginFormComponent,
    NavbarComponent,
    PostPageComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
