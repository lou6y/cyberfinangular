import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../../_services/transaction.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

    constructor(private transactionService: TransactionService, private modalService: NgbModal){}
    beneficiary: any;
    account_number:any;
    account_id:any;
    reference:any;
    payment_amount:any;
    paybills(){
        console.log("account id "+this.beneficiary);
        console.log("account amount "+this.account_number);

        this.transactionService.paybills(this.beneficiary,this.account_number,this.account_id,this.reference,this.payment_amount).subscribe(res => {
            console.log("done"+res);

        });

    }
  ngOnInit(): void {
  }

}
