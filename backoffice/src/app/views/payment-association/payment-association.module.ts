import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAssociationComponent } from './payment-association/payment-association.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {AssociationComponent} from "../association/association.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";



  const routes: Routes = [
  {
    path: '',
    component: PaymentAssociationComponent
  }
    ]
@NgModule({
  declarations: [
    PaymentAssociationComponent
  ],
  exports: [
    PaymentAssociationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxDatatableModule,


  ]
})
export class PaymentAssociationModule { }
