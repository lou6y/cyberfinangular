import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Loan } from '../../loan';
import { LoanService } from '../../loan-service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  ListLoan: any;
  form: boolean=false;
  loan!: Loan;
  stest!: any;
  closeResult!: string;

  constructor (private laonservice:LoanService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllLoan();

    this.loan={
      idloan: null,
      iduser: null,
      loanamount:null,
      nbrpayments:null,
      email:null,
      reason:null,
      annualincom:null,
      status:null,
      interstrate:null,
      score:null,
      age:null,
      guarantor:null,
      startdate:null,
      requestdate:null,
      nextpayment:null,
    }


  }

getAllLoan(){
    this.laonservice.getAllLoan().subscribe(res => this.ListLoan = res)
  }

addLoan(l:any){
  this.laonservice.addLoan(l).subscribe(()=>{
    this.getAllLoan();
    this.form=false;
  });
}

modifyLoan(l:any){
  this.laonservice.editLoan(l).subscribe(()=>{
    this.getAllLoan();
    this.form=false;
  });
}

deleteLoan(idLoan : any){
  this.laonservice.deleteLoan(idLoan).subscribe(()=>{
    this.getAllLoan();
  });
}

test(){
  console.log('hello')
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
