import {Component, OnInit} from '@angular/core';
import {Account} from "../../../shared/Model/account";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";
import {AccountService} from "../../../shared/Service/account.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  term: string;
  listAccounts:any;
  form:boolean=false;
  account!:Account;
  closeResult!: string;
  Transfer: any="Transfer";
  Deposit: any="deposit";
  Withdrawal: any="Withdrawal";
  Payment: any="Payment";
  success: string="success";
  failed: string ="failed";



  constructor(private accountService: AccountService, private modalService: NgbModal, private toast: NgToastService){

  }
  ngOnInit(): void {
    this.getAccounts();



  }
  getAccounts(){
    this.accountService.getAccounts().subscribe(res=>this.listAccounts=res)
  }
  addAccount(t:any) {
    this.accountService.addAccount(t).subscribe(()=> {
      this.getAccounts();
      this.form = false;
      this.toast.success({detail:"Success Message", summary:"Account added Successfully", duration:5000})

    }, err=>{
      this.toast.error({detail:"Error Message", summary:"Account Failed", duration:5000})
    })
  }

  editAccount(account:Account){
    this.accountService.editAccount(account).subscribe();
    this.toast.info({detail:"Success Message", summary:"Account edited Successfully", duration:5000})

  }

  deleteAccount(accountId:any){
    this.accountService.deleteAccount(accountId).subscribe(()=>this.getAccounts());
    this.toast.warning({detail:"Success Message", summary:"Account deleted Successfully", duration:5000})

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
    console.log(f.value['account_id'],f.value['account_type'], f.value['amount'],f.value['source'], f.value['status'],f.value['reason_code'], f.value['created_at']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)
  }

}








