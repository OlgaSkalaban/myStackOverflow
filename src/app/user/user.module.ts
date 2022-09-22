import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { CreateQuestionComponent } from './create-question/create-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { DashbordPageComponent } from './dashbord-page/dashbord-page.component';
import {HomePageComponent} from "../home-page/home-page.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([

    ])
  ],
  exports:[],
  declarations: [
    HomePageComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
    DashbordPageComponent
  ]
})
export class UserModule {

}
