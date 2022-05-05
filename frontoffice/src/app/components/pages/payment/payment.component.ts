import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TransactionService} from "../../../_services/transaction.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgToastService} from "ng-angular-popup";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    @ViewChild('paypal',{static:true}) paypalElement:ElementRef;

    constructor(private transactionService: TransactionService, private modalService: NgbModal, private toast: NgToastService) {
    }

    beneficiary: any;
    account_number: any;
    account_id: any;
    reference: any;
    payment_amount: any;



    paybills() {
        console.log("account id " + this.beneficiary);
        console.log("account amount " + this.account_number);

        this.transactionService.paybills(this.beneficiary, this.account_number, this.account_id, this.reference, this.payment_amount).subscribe(res => {
            if(res.includes("Payment Amount Cannot be of 0 value, please enter a value greater than 0")){

                this.toast.info({detail:"Info", summary:"Please enter a value greater than 0", duration:5000});
            }
            if(res.includes("You Have insufficient Funds to perform this payment")){

                this.toast.warning({detail:"Warning", summary:"You Have insufficient Funds to perform this payment", duration:5000});
            }
            if(res.includes("Payment Processed Successfully")){

                this.toast.success({detail:"Success", summary:"Payment Processed Successfully", duration:5000});
            }

        }, err => {
        });
    }

    ngOnInit(): void {

        window.paypal.Buttons(
            {
                style: {
                    layout: 'horizontal',
                    color: 'blue',

                },
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units:  [
                            {
                                amount:{

                                    value: '1000',
                                    currency_code: 'USD',
                                }
                            }
                        ]
                    })
                },
                onApprouve: (data, actions)=>
                {
                    return actions.order.capture().then(details => {
                        this.toast.success({detail: "Success Message", summary: "Payment Successful", duration: 5000});
                    })
                },
                onError : error =>{
                    console.log(error);
                }
            }
        ).render(this.paypalElement.nativeElement);

    }










}
