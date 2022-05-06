import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../loan-service';

@Component({
  selector: 'app-loan-simulator',
  templateUrl: './loan-simulator.component.html',
  styleUrls: ['./loan-simulator.component.scss']
})
export class LoanSimulatorComponent implements OnInit {

  result:any;
  amount:any;duration:any;interest:any;grace:any;rembour:any;

  constructor(private laonservice:LoanService) { }

  ngOnInit(): void {

    amount:null;
    duration:null;
    interest:null;
    grace:null;
    rembour:null;

  }

  simulate(amount:any,duration:any,interest:any,grace:any,rembour:any){
    this.laonservice.simulator(amount,duration,interest,grace,rembour).subscribe(res=>this.result=res+' DT')

  }

}
