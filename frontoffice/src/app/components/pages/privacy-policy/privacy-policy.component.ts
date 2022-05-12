import { Component, OnInit } from '@angular/core';
import {InvesterService} from "../../../_services/invester.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

    data = {} as any;
    constructor(public InvesterService: InvesterService) { }

    async ngOnInit(){
        this.data = await  this.InvesterService.getAllInvesters();
        console.log(this.data);
    }


    deleteInv(id:number){
        this.InvesterService.deleteInvester(id);
    }

}
