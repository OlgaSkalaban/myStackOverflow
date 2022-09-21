import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminPageComponent } from './shared/components/admin-page/admin-page.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { EditPostPageComponent } from './edit-post-page/edit-post-page.component';
import { DashbordPageComponent } from './dashbord-page/dashbord-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdminPageComponent},
      {}
    ])
  ],
  exports:[],
  declarations: [
    AdminPageComponent,
    CreatePostPageComponent,
    EditPostPageComponent,
    DashbordPageComponent
  ]
})
export class AdminModule {

}
