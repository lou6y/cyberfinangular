import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
    public form: any;
    public mode :any =1;
    public PMT:any;
    public valeur : number;
    constructor() { }

    ngOnInit(): void {
        this.valeur = 0.00;
        this.form = new FormGroup({
            Montant: new FormControl(),
            Mode: new FormControl()
        });
    }


    calcul(form : NgForm){
        if(this.form.invalid){
            return ;
        }else{
            console.log(this.form.value.Montant);
            if(this.mode == 1){
                this.PMT = this.form.value.Montant*1.06;
            }else{
                this.PMT= this.form.value.Montant*1.1;
            }
            this.valeur = this.PMT.toFixed(2);
            console.log( this.valeur);
        }
    }

    modeChange(name : any ){
        this.mode = name;
    }

}
