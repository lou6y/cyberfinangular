import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import { JoBListService } from 'src/app/_services/jo-blist.service';
import { KeyValue } from '@angular/common';
import { Fav } from 'src/app/_models/fav';


@Component({
  selector: 'app-favourite-job',
  templateUrl: './favourite-job.component.html',
  styleUrls: ['./favourite-job.component.scss']
})
export class FavouriteJobComponent implements OnInit {

  listOffers: Fav[]=[];
   Marhaba=0;
   Mostakbal=0;
   Ayed=0;
   Affrah=0;
   Manzeli=0;
   Fleha=0;

  constructor(private offerService: JoBListService, private modalService: NgbModal) { }


  ngOnInit(): void {

    this.getOffers();


  }
  exportexcel()
  {
    this.offerService.ExportFichier().subscribe((res)=>{

     let file=new Blob([res],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
     console.log(file.type);
    var url =URL.createObjectURL(file);
     window.open(url);
    }

    )

  }

  getOffers(){
    this.offerService.findAllfav().subscribe(
      res=>{
        this.listOffers=res;
        for (var _i = 0; _i < res.length; _i++) {
          if(this.listOffers[_i].typeOffer=="Marhaba")
          {
              this.Marhaba=this.Marhaba+this.listOffers[_i].countUser;
          }
      else if(this.listOffers[_i].typeOffer=="Mostakbal")
          {
            this.Mostakbal= this.Mostakbal+this.listOffers[_i].countUser;
          }
          else if(this.listOffers[_i].typeOffer=="Ayed")
          {
            this.Ayed=this.Ayed+this.listOffers[_i].countUser;

          }
          else if(this.listOffers[_i].typeOffer=="Affrah")
          {
            this.Affrah=this.Affrah+this.listOffers[_i].countUser;

          }
          else if(this.listOffers[_i].typeOffer=="Manzeli")
          {
            this.Manzeli=this.Manzeli+this.listOffers[_i].countUser;

          }
          else if(this.listOffers[_i].typeOffer=="Fleha")
          {
            this.Fleha=this.Fleha+this.listOffers[_i].countUser;

          }
        }



      }
      )
  }
}
