import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Loan } from './loan';
import { LoanService } from './loanServices';

@Component({
  selector: 'app-loan-dashboard',
  templateUrl: './loan-dashboard.component.html',
  styleUrls: ['./loan-dashboard.component.scss']
})
export class LoanDashboardComponent implements OnInit {

  ListLoan: any;
  LoansByMounth: any;
  form: boolean=false;
  loan!: Loan;
  stest!: any;
  closeResult!: string;


  //chart
  public barChartOptions: any = {};

  obj = {
    primary        : "#6571ff",
    secondary      : "#7987a1",
    success        : "#05a34a",
    info           : "#66d1d1",
    warning        : "#fbbc06",
    danger         : "#ff3366",
    light          : "#e9ecef",
    dark           : "#060c17",
    muted          : "#7987a1",
    gridBorder     : "rgba(77, 138, 240, .15)",
    bodyColor      : "#000",
    cardBg         : "#fff",
    fontFamily     : "'Roboto', Helvetica, sans-serif"
  }


  constructor(private laonservice:LoanService,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getAllLoan();
    this.getLoansbyMonth();

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

  getLoansbyMonth(){
    this.laonservice.getloansbymonth().subscribe(res => {this.LoansByMounth = res; this.barChartOptions = this.getBarChartOptions(this.obj);})
  }

addLoan(l:any){
  this.laonservice.addLoan(l).subscribe(()=>{
    this.getAllLoan();
    this.getLoansbyMonth();
    this.form=false;
  });
}

modifyLoan(l:any){
  this.laonservice.editLoan(l).subscribe(()=>{
    this.getAllLoan();
    this.getLoansbyMonth();
    this.form=false;
  });
}

deleteLoan(idLoan : any){
  this.laonservice.deleteLoan(idLoan).subscribe(()=>{
    this.getAllLoan();
    this.getLoansbyMonth();
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

  getBarChartOptions(obj: any) {
    return {
      series: [{
        name: 'Loan sRequests',
        data: [this.LoansByMounth['January'],this.LoansByMounth['Febuary'],this.LoansByMounth['March'],this.LoansByMounth['April'],this.LoansByMounth['May'],this.LoansByMounth['June'],this.LoansByMounth['July'],this.LoansByMounth['August'],this.LoansByMounth['September'],this.LoansByMounth['October'],this.LoansByMounth['November'],this.LoansByMounth['December']]
      }],
      chart: {
        type: 'bar',
        height: '320',
        parentHeightOffset: 0,
        foreColor: obj.bodyColor,
        background: obj.cardBg,
        toolbar: {
          show: false
        },
      },
      colors: [obj.primary],
      grid: {
        padding: {
          bottom: -4
        },
        borderColor: obj.gridBorder,
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: 'month',
        categories: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        axisBorder: {
          color: obj.gridBorder,
        },
        axisTicks: {
          color: obj.gridBorder,
        },
      },
      yaxis: {
        labels: {
          offsetX: 0
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4
        }
      }
    }
  };

}
