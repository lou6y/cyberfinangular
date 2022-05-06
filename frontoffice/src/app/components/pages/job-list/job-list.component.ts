import { Component, OnInit } from '@angular/core';
 import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
 import {NgForm} from "@angular/forms";
import { JoBListService } from 'src/app/_services/jo-blist.service';
import {Offer} from "../../../../app/_models/Offer";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AplyOfer } from 'src/app/_models/AplyOfer';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  listOffers:any;
  users:any;
  form:boolean=false;
  date:Date=new Date();
  closeResult!: string;
  constructor(private offerService: JoBListService,private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getOffers();
    this.users= {
      nameuser:null,
      emailuser:null,
    }
  }

  getOffers(){
    this.offerService.findAll().subscribe(res=>this.listOffers=res)
  }
  editOffer(o:Offer,rate:any){

    if(o.ratingAvg==0)
    {
    var ratavg=(o.ratingAvg+rate)/1;
    }
    else
    {
    var ratavg=(o.ratingAvg+rate)/o.ratingAvg;

    }

    var modif= {

      idOffer: o.idOffer,
      typeOffer: o.typeOffer,
      ratingAvg : ratavg,
      description:o.description,
      datedebut: o.datedebut,
      datefin: o.datefin,
      countUser: o.countUser,
    }

    console.log(modif)
    this.offerService.update(modif).subscribe();
    //window.location.reload();
   }
  Apply(o:any,x:any)
  {
    var modif= {
      idOffer: o.idOffer,
      typeOffer: o.typeOffer,
      ratingAvg : o.ratingAvg,
      description:o.description,
      datedebut: o.datedebut,
      datefin: o.datefin,
      countUser: o.countUser+1,

    }
      var user= {
        idOffer: o.idOffer,
        typeOffer: o.typeOffer,
        description:o.description,
        datedebut: o.datedebut,
        datefin: o.datefin,
        curentdta:this.date,
        countUser: o.countUser+1,
        nameuser:x.Name,
        emailuser:x.Email,


    }
    console.log(user);
    this.offerService.SendMail(user).subscribe();
    this.offerService.update(modif).subscribe();

    //window.location.reload();

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
}
