import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeGuard } from './guards/home.guard';
import { LoginGuard } from './guards/login.guard';
import {PostPageComponent} from "./post-page/post-page.component";
import {CreateQuestionComponent} from "./user/create-question/create-question.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginFormComponent, canActivate: [LoginGuard]},
    {path: 'signup', component: SignupFormComponent, canActivate: [LoginGuard]},
    {path: 'questions/:id', component: PostPageComponent},
    {path: 'questions/ask', component: CreateQuestionComponent},
    {path: 'home', component: HomePageComponent, canActivate: [HomeGuard]},
    {path: '**', redirectTo: 'login'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
