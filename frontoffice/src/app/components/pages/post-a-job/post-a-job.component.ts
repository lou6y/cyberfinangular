import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { InvesterService } from '../../../_services/invester.service';

@Component({
    selector: 'app-post-a-job',
    templateUrl: './post-a-job.component.html',
    styleUrls: ['./post-a-job.component.scss']
})
export class PostAJobComponent implements OnInit {
    form : any;
    constructor(public InvesterService: InvesterService) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, { validators: [] }),
            amount: new FormControl(null, { validators: [] }),
            date: new FormControl(null, { validators: [] })
        });

    }


    addinvester(form : NgForm){
        this.InvesterService.addInvester(this.form.value.email,this.form.value.amount,this.form.value.date);
    }

}
