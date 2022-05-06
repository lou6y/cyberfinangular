import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../../shared/Model/transaction";
import {TransactionService} from "../../../shared/Service/transaction.service";
import {Treasury} from "../../../shared/Model/treasury";
import {TreasuryService} from "../../../shared/Service/treasury.service";

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.scss']
})
export class TreasuryComponent implements OnInit {


  listTreasuries!:any;
  treasury!:Treasury;

  constructor(private treasuryService: TreasuryService) {
    this.getTreasuries();
  }

  ngOnInit(): void {
  }

  getTreasuries(){
    this.treasuryService.getTreasuries().subscribe(res=>this.listTreasuries=res)
  }

}
