import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {association_payment} from "../../../shared/Model/association_payment";
import{association_paymentService} from "../../../shared/Service/association_paymentService";

@Component({
  selector: 'app-payment-association',
  templateUrl: './payment-association.component.html',
  styleUrls: ['./payment-association.component.scss']
})
export class PaymentAssociationComponent implements OnInit {

  listSuseptible:any;
  listNonPayment:any;
  listPayment : any;
  form : boolean = false;
  payment!: association_payment;
  closeResult! : string;
  risque:any;
  constructor(private PaymentService :association_paymentService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllPayments();
this.getNonPayers();
this.getSusceptible();
    this.payment = {
      idPayment: null,
      valdiPayment: null,
      paymentDate: null,
      status: null,
      intrests: null,
      associationP: null,
      client: null,
      creationDate:null,
    }
  }

  getAllPayments(){
    this.PaymentService.getPayments().subscribe( res => this.listPayment = res)
  }

  addPayment(id: any){
    this.PaymentService.addPayment(id).subscribe(() => {
      this.getAllPayments();
      this.form = false;
    });
  }

  editPayment(p : any){
    this.PaymentService.editPayment(p).subscribe();
  }
  deletePayment(id : any){
    this.PaymentService.deletePayment(id).subscribe(() => this.getAllPayments())
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
  getReservationP(id:any){
    this.PaymentService.getReservationP(id).subscribe( res => this.listPayment = res)
  }
  addReseration(idA:any,idP:any,idC:any){
    this.PaymentService.addReseration(idA,idP,idC).subscribe(() => {
      this.getAllPayments();
      this.form = false;
    });
  }
  Payer(idP:any){
    this.PaymentService.Payer(idP).subscribe(() => {
      this.getAllPayments();
      this.form = false;
    });
  }
  getNonPayers(){
    this.PaymentService.getNonPayers().subscribe( res => this.listNonPayment = res)
  }
  getSusceptible(){
    this.PaymentService.getSusceptible().subscribe( res => this.listSuseptible = res)
  }
  getRisqueLevel(idc:any){
    this.PaymentService.getRisqueLevel(idc).subscribe(res => this.risque = res)
  }
  Penaliser(idP:any){
    this.PaymentService.Penaliser(idP).subscribe(() => this.getAllPayments())
  }
}
