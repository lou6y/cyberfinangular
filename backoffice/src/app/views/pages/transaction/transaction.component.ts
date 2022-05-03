import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../../shared/Model/transaction";
import {TransactionService} from "../../../shared/Service/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {
  term: string;
  listTransactions:any;
  form:boolean=false;
  transaction!:Transaction;
  closeResult!: string;
  Transfer: any="Transfer";
  Deposit: any="deposit";
  Withdrawal: any="Withdrawal";
  Payment: any="Payment";
  success: string="success";
  failed: string ="failed";
  transaction_type: ({ transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string })[];



  constructor(private transactionService: TransactionService, private modalService: NgbModal){}
  ngOnInit(): void {
    this.getTransactions();
    this.transaction= {

      transaction_id:null,

      account_id:null,
      transaction_type:null,
      amount:null,
      source:null,
      status:null,
      reason_code:null,
      created_at:null,
    }

    this.transaction_type=[
      {transaction_type:"Transfer"},
      {transaction_type:"deposit"},
      {transaction_type:"Withdrawal"},
      {transaction_type:"Payment"}

    ]
  }
  getTransactions(){
    this.transactionService.getTransactions().subscribe(res=>this.listTransactions=res)
  }
  addTransaction(t:any) {
    this.transactionService.addTransaction(t).subscribe(()=> {
        this.getTransactions();
        this.form = false;
      });
    }

    editTransaction(transaction:Transaction){
      this.transactionService.editTransaction(transaction).subscribe();
      }

    deleteTransaction(transactionId:any){
      this.transactionService.deleteTransaction(transactionId).subscribe(()=>this.getTransactions());
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

  save(f: NgForm){ //f de type ngForm
    console.log(f.value['account_id'],f.value['transaction_type'], f.value['amount'],f.value['source'], f.value['status'],f.value['reason_code'], f.value['created_at']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)
  }

  }








