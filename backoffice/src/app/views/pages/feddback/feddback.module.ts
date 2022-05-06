import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';


  import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
const routes: Routes = [
  {
    path: '',
    component: FeedbackComponent
  }
]

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [

    CommonModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
  ]
})
export class FeddbackModule { }
