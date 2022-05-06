import { NgModule } from '@angular/core';
 import { FeedComponent } from './feed/feed.component';
 import { CommonModule } from '@angular/common';
  import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
const routes: Routes = [
  {
    path: '',
    component: FeedComponent
  }
]

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    
     RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
  ]
})
export class FeddbackModule { }
