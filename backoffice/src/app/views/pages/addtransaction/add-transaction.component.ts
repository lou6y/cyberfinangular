import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {TransactionService} from "../../../shared/Service/transaction.service";
import {NgToastService} from "ng-angular-popup";
import {Transaction} from "../../../shared/Model/transaction";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
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

  constructor(private modalService: NgbModal,private transactionService: TransactionService, private toast: NgToastService) { }

  ngOnInit(): void {
   // this.triggerClick();
    // @ts-ignore
    document.getElementById('addbuttontransaction').click();


  //  open("mymodal1");
  }
  @ViewChild('myButton') myButton : ElementRef;

  triggerClick() {
    let el: HTMLElement = this.myButton.nativeElement as HTMLElement;
    setTimeout(()=> el.click(), 5000);
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
  addTransaction(t:any) {
    this.transactionService.addTransaction(t).subscribe(()=> {
      this.getTransactions();
      this.form = false;
      this.toast.success({detail:"Success Message", summary:"Transaction added Successfully", duration:5000})

    }, err=>{
      this.toast.error({detail:"Error Message", summary:"Transaction Failed", duration:5000})
    })
  }
  getTransactions(){
    this.transactionService.getTransactions().subscribe(res=>this.listTransactions=res)
  }

  save(f: NgForm){ //f de type ngForm
    console.log(f.value['account_id'],f.value['transaction_type'], f.value['amount'],f.value['source'], f.value['status'],f.value['reason_code'], f.value['created_at']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)
  }
}
