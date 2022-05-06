import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {association} from "../../../_models/association";
import {associationService} from "../../../_services/associationService";

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  listAssociation : any;
    listRecomandation : any;
  form : boolean = false;
  association!: association;
  closeResult! : string;

  constructor(private associationService : associationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllAssociation();

    this.association = {
      id_association: null,
      description: null,
      validPayment: null,
      sum: null,
      intrests: null,
      creationDate: null,
      nbMonths: null,
      finishDate: null,
      paymentDate: null,
      places: null,
      sumToPay: null,
    }
  }

  getAllAssociation(){
    this.associationService.getAllAssociation().subscribe( res => this.listAssociation = res)
  }

  addAssociation(a: any){
    this.associationService.addAssociation(a).subscribe(() => {
      this.getAllAssociation();
      this.form = false;
    });
  }

  editAssociation(a : association){
    this.associationService.editAssociation(a).subscribe();
  }
  deleteAssociation(idProduct : any){
    this.associationService.deleteAssociation(idProduct).subscribe(() => this.getAllAssociation())
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

    getRecommandation(id:any){
        this.associationService.getRocommandation(id).subscribe( res => this.listRecomandation = res)
    }

}
