import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/loan';
import { LoanService } from '../../loan-service';

@Component({
  selector: 'app-requet-loan',
  templateUrl: './requet-loan.component.html',
  styleUrls: ['./requet-loan.component.scss']
})
export class RequetLoanComponent implements OnInit {

  loan!:Loan;
  RUOUL:any;
  Age:any;
  deptratio:any;
  monthlyIncome:any;
  NOOCLAL:any;
  NRELOL:any;
  NOD:any;
  score:any;


  constructor(private laonservice:LoanService) { }

  ngOnInit(): void {

    this.RUOUL=null;
    this.Age=null;
    this.deptratio=null;
    this.monthlyIncome=null;
    this.NOOCLAL=null;
    this.NRELOL=null;
    this.NOD=null;

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

  addLoanWithScore(l:any,RUOUL:any,Age:any,deptratio:any,monthlyIncome:any,NOOCLAL:any,NRELOL:any,NOD:any){
    this.laonservice.getScore(RUOUL,Age,deptratio,monthlyIncome,NOOCLAL,NRELOL,NOD).subscribe(res =>{
      l.score=res;
      l.age=Age;
      this.laonservice.addLoan(l).subscribe(res2 =>{
        console.log("done",l)
      });
    });
  }

}
