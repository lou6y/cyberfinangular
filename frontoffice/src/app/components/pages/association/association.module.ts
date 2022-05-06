import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AssociationComponent} from "./association.component";



const routes: Routes = [
  {
    path:'',
    component: AssociationComponent
  }
]

@NgModule({
  declarations: [AssociationComponent],
  bootstrap: [AssociationComponent],
  exports: [
    AssociationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,



  ]
})
export class AssociationModule {

}
