import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../../_services/transaction.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {

    constructor(private transactionService: TransactionService, private modalService: NgbModal, private toast:NgToastService){}
    account_id:any;
    amount:any;
  ngOnInit(): void {
  }
    withrawal(){
        console.log("account id "+this.account_id);
        console.log("account amount "+this.amount);

        this.transactionService.withdraw(this.account_id,this.amount).subscribe(res => {
            if(res.includes("Withdrawal Amount Cannot be of 0 (Zero) value, please enter a value greater than 0 (Zero)")){

                this.toast.error({detail:"Success", summary:"Withdrawal Amount Cannot be of 0 (Zero) value, please enter a value greater than 0 (Zero)", duration:5000});
            }
            if(res.includes("You Have insufficient Funds to perform this Withdrawal!")){

                this.toast.error({detail:"Success", summary:"You Have insufficient Funds to perform this Withdrawal!", duration:5000});
            }
            if(res.includes("withdrawal successful")){

                this.toast.success({detail:"Success", summary:"withdrawal successful", duration:5000});
            }
        }, err=>{
        });

    }

}
