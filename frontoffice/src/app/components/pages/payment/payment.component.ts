import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../../_services/transaction.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    paymentHandler:any= null

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

                this.toast.error({detail:"Success", summary:"Payment Amount Cannot be of 0 value, please enter a value greater than 0", duration:5000});
            }
            if(res.includes("You Have insufficient Funds to perform this payment")){

                this.toast.error({detail:"Success", summary:"You Have insufficient Funds to perform this payment", duration:5000});
            }
            if(res.includes("Payment Processed Successfully")){

                this.toast.success({detail:"Success", summary:"Payment Processed Successfully", duration:5000});
            }

        }, err => {
        });
    }

    ngOnInit(): void {
     //   this.invokeStripe();
    }
/*
    makePayment(amount: number) {

        const paymentHandler =(<any>window).StripeCheckout.configure({
            key:'pk_test_51KlocMCp2sukYHxnv3dIbK1EnHH53b7L8PavW19KaYMSyoqwjdxwrhQ8v5fBHY0yxBIxK958RXiMLf3S2Vw0cUcb00jQe003Ts',
            locale:'auto',
            token:function(stripeToken:any){
                console.log(stripeToken)
            }
        });

        paymentHandler.open({
            amount:amount*100
        })

    }

    invokeStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const script = window.document.createElement('script');
            script.id = 'stripe-script';
            script.type = 'text/javascript';
 //library stripe
            script.src = 'https://checkout.stripe.com/checkout.js';
            script.onload = () => {
                this.paymentHandler = (<any>window).StripeCheckout.configure({
                    key: 'pk_test_51KlocMCp2sukYHxnv3dIbK1EnHH53b7L8PavW19KaYMSyoqwjdxwrhQ8v5fBHY0yxBIxK958RXiMLf3S2Vw0cUcb00jQe003Ts',
                    locale: 'auto',
                    token: function (stripeToken: any) {
                        console.log(stripeToken);
                    },
                });
            };

            window.document.body.appendChild(script);
        }
    }

 */
}
