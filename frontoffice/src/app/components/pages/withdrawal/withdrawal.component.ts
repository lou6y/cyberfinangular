import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../../_services/transaction.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {

    constructor(private transactionService: TransactionService, private modalService: NgbModal){}
    account_id:any;
    amount:any;
  ngOnInit(): void {
  }
    withrawal(){
        console.log("account id "+this.account_id);
        console.log("account amount "+this.amount);

        this.transactionService.withdraw(this.account_id,this.amount).subscribe(res => {
            console.log("done"+res);

        });

    }
}
