import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../loan-service';

@Component({
  selector: 'app-myloan-requests',
  templateUrl: './myloan-requests.component.html',
  styleUrls: ['./myloan-requests.component.scss']
})
export class MyloanRequestsComponent implements OnInit {

  ListLoan: any;

  constructor(private loanservice:LoanService) { }

  ngOnInit(): void {
    this.getAllLoan();
    this.ListLoan=null;
  }

  getAllLoan(){
    this.loanservice.getAllLoan().subscribe(res=> this.ListLoan=res)
  }




}
