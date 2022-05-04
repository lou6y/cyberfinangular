import { Component, OnInit } from '@angular/core';
import {Payment} from "../../../shared/Model/payment";
import {Transaction} from "../../../shared/Model/transaction";
import {PaymentService} from "../../../shared/Service/payment.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  term: string;
  listPayments:any;
  form:boolean=false;
  payment!:Payment;
  closeResult!: string;

  success: string="success";
  failed: string ="failed";





  constructor(private paymentService: PaymentService, private modalService: NgbModal){}
  ngOnInit(): void {
    this.getPayments();

  }
  getPayments(){
    this.paymentService.getPayments().subscribe(res=>this.listPayments=res)
  }



  editPayment(payment:Payment){
    this.paymentService.editPayment(payment).subscribe();
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }


}
