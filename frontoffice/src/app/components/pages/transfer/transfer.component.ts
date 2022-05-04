import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Transaction, transactionObject } from 'src/app/_models/transaction';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {TransactionService} from "../../../_services/transaction.service";
import{NgToastService} from "ng-angular-popup";


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
    listTransactions: any;
    listAccounts: any;

    form = false;
    transaction!: Transaction;
    TransactionsObject!: transactionObject;
    accountBalance: any;
    closeResult!: string;

    b1: any;
    b2: any;
    fromAccount: any ;
    toAccount: any ;
    account_id:any;
    amount:any;


    transaction_type = 'Transfer';
    source = 'online';
    status = 'success';
    reason_code = 'Transfer Transaction Successful';
    created_at: any;
    transferForm: FormGroup;
    completeDate: Date;

    constructor(private transactionService: TransactionService, private modalService: NgbModal, private toast: NgToastService){

        this.completeDate = new Date();
        this.created_at = this.completeDate.toISOString();
        this.created_at = this.created_at.substring(0, this.created_at.length - 1);
    }

  ngOnInit(): void {
      this.getTransactions();
      this.transaction = {

          transaction_id: null,

          account_id: null,
          transaction_type: null,
          amount: null,
          source: null,
          status: null,
          reason_code: null,
          created_at: null,
      };
  }
    getTransactions(){
        this.transactionService.getTransactions().subscribe(res => this.listTransactions = res);
    }
    addTransaction(t: any) {
        this.transactionService.addTransaction(t).subscribe(() => {
            this.getTransactions();
            this.form = false;
            this.toast.success({detail:"Success Message", summary:"Transfer Successful", duration:5000})

        }, err=>{
            this.toast.error({detail:"Error Message", summary:"Transfer Failed", duration:5000})
        })
    }

    editTransaction(transaction: Transaction){
        this.transactionService.editTransaction(transaction).subscribe();
    }

    deleteTransaction(transactionId: any){
        this.transactionService.deleteTransaction(transactionId).subscribe(() => this.getTransactions());
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
    open(content: any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    cancel(){
        this.form = false;
    }

    submit() {
        console.log('submitted:', );

        if (!this.transferForm.valid) {
            return alert('Please fill up all fields properly');
        }
        this.transactionService.sendMoneyAction({openModal: true, transactionObject: this.transferForm.value, });
    }

    transferMoney(){
        if(this.account_id==null){
            this.toast.error({detail:"Success", summary:"Please write your account id", duration:5000});

        }else{
            if(this.toAccount==null){

                this.toast.error({detail:"Success", summary:"To account", duration:5000});

            }else{
                if(this.amount==null){

                    this.toast.error({detail:"Success", summary:"Check the amout", duration:5000});
                }else{
                this.transactionService.transferMoney(this.account_id,this.toAccount,this.amount).subscribe((res: string) => {
                    if(res.includes("Cannot Transfer Into The same Account, Please select the appropriate account to perform transfer")){

                        this.toast.error({detail:"Success", summary:"Cannot Transfer Into The same Account, Please select the appropriate account to perform transfe", duration:5000});
                    }
                    if(res.includes("Cannot Transfer an amount of 0 , please enter a value greater than 0")){

                        this.toast.error({detail:"Success", summary:"Cannot Transfer an amount of 0 , please enter a value greater than 0", duration:5000});
                    }
                    if(res.includes("You Have insufficient Funds to perform this Transfer!")){

                        this.toast.error({detail:"Success", summary:"You Have insufficient Funds to perform this Transfer!", duration:5000});
                    }


                });
                    this.toast.success({detail:"Success", summary:"Transfer done", duration:5000});
            }}


        }





    }
           // this.toast.error({detail:"Error Message", summary:"Transfer Failed", duration:5000})


}
