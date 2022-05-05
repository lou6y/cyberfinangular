import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../../_services/transaction.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

    constructor(private transactionService: TransactionService, private modalService: NgbModal, private toast:NgToastService) {
    }

    account_id: any;
    amount: any;

    ngOnInit(): void {
    }

    deposit() {
        console.log("account id " + this.account_id);
        console.log("account amount " + this.amount);

        this.transactionService.deposit(this.account_id, this.amount).subscribe(res => {

            if(res.includes("deposit amount cannot be 0, please enter a value greater than 0")){

                this.toast.info({detail:"Info", summary:"please enter a value greater than 0", duration:5000});
            }
            if(res.includes("deposit successful")){

                this.toast.success({detail:"Success", summary:"deposit successful", duration:5000});
            }

        }, err => {
        });
    }
}
