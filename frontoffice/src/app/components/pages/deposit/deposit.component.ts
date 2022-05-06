import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../../_services/transaction.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

    constructor(private transactionService: TransactionService, private modalService: NgbModal){}
    account_id:any;
    amount:any;

  ngOnInit(): void {
  }
    deposit(){
        console.log("account id "+this.account_id);
        console.log("account amount "+this.amount);

        this.transactionService.deposit(this.account_id,this.amount).subscribe(res => {
            console.log("done"+res);

        });

    }
}
