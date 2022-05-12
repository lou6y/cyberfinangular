import { Component, OnInit } from '@angular/core';
import {OfferServiceService} from "../../../../shared/Service/offer-service.service";
import {ClaimService} from "../../../../shared/Service/claim.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Offer} from "../../../../shared/Model/offer";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  term: string;
  form:boolean=false;
  closeResult!: string;
  offer: Offer ;
  Addoffer: Offer ;
  listOffers:any;
  Marhaba: any="Marhaba";
  Mostakbal: any="Mostakbal";
  Ayed: any="Ayed";
  Affrah: any="Affrah";
  Manzeli: any="Manzeli";
  Fleha: any="Fleha";







  typeOffer: ({ typeOffer: string } | { typeOffer: string } | { typeOffer: string } | { typeOffer: string } | { typeOffer: string } | { typeOffer: string })[];



  constructor(private offerService: OfferServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getOffers()
    this.offer= {
      idOffer: null,
      typeOffer: null,
      ratingAvg : null,
      description: null,
      datedebut: null,
      datefin: null,
      countUser: null,
    }
    this.typeOffer=[
      {typeOffer:"Marhaba"},
      {typeOffer:"Mostakbal"},
      {typeOffer:"Ayed"},
      {typeOffer:"Affrah"},
      {typeOffer:"Manzeli"},
      {typeOffer:"Fleha"},


    ]


  }
  getOffers(){
    this.offerService.findAll().subscribe(res=>this.listOffers=res)
  }
  addOffer(o:any){
    var description=this.ReternDescription(o.typeOffer);
    var Addoffer= {
      idOffer: o.idOffer,
      typeOffer: o.typeOffer,
      ratingAvg : 0,
      description:description,
      datedebut: o.datedebut,
      datefin: o.datefin,
      countUser: 0,
      ratupdate:0
    }
    this.offerService.add(Addoffer).subscribe(()=> {
      this.getOffers();
      this.form = false;
    });  }
  editOffer(offer:Offer){
    this.offerService.update(offer).subscribe();
  }
  deleteOffer(offerId:any){
    this.offerService.delete(offerId).subscribe(()=>this.getOffers());
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
  ReternDescription(type:string)
  {
    var desc=""
    if(type=="Marhaba")
    {
     desc="Offre de bienvenue"
    }
    else if(type=="Mostakbal")
   {
    desc="Credit entrepreneurs jusqu’à 2000dt"
   }
   else if(type=="Ayed")
   {
    desc="Commanditer nos fêtes"
   }
   else if(type=="Affrah")
   {
    desc="Fiançailles et mariage sans garantie"
   }
   else if(type=="Manzeli")
   {
    desc="Amenager sa maison De 300 dt à 3000 dt"
   }
   else if(type=="Fleha")
   {
    desc="-Financement des activités agricoles"
   }
   return desc;
  }
  save(f: NgForm){
    var desc=""
       if(f.value['typeOffer']=="Marhaba")
       {
        desc="Offer de bienvenue"
       }
       if(f.value['typeOffer']=="Mostakbal")
      {
       desc="Credit entrepreneurs jusqu’à 2000dt"
      }
      if(f.value['typeOffer']=="Ayed")
      {
       desc="Commanditer nos fêtes"
      } if(f.value['typeOffer']=="Affrah")
      {
       desc="Fiançailles et mariage sans garantie"
      } if(f.value['typeOffer']=="Manzeli")
      {
       desc="Amenager sa maison De 300 dt à 3000 dt"
      }
      if(f.value['typeOffer']=="Fleha")
      {
       desc="Sans garantie"
      }

    console.log(f.value['idOffer'],f.value['typeOffer'],desc,f.value['datedebut'],f.value['datefin'],f.value['ratingAvg'],f.value['countUser'])
  }

}
