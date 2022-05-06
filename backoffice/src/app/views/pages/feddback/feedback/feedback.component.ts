import { Component, OnInit } from '@angular/core';
import { OfferServiceService } from 'src/app/shared/Service/offer-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  listfeeds:any;

  constructor(private feed: OfferServiceService ) { }

  ngOnInit(): void {
    this. getFeedback();
  }
  getFeedback(){
    this.feed.findAllfeed().subscribe(res=>this.listfeeds=res)
  }
}
