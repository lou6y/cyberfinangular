import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Feedback } from 'src/app/_models/Feedback';
import { JoBListService } from 'src/app/_services/jo-blist.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  Feedback: Feedback ;
  form:boolean=false;
  date:Date=new Date();
  listfeeds:any;

  constructor(private feed: JoBListService,private router:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getFeedback();
    this.Feedback= {


    descriptionFeedback:null,
    dateFeedback : null,
    emailFeedback: null,
    phoneFeedback: null,
    nameFeedback:null,

    }
  }  getFeedback(){
    this.feed.findAllfeed().subscribe(res=>this.listfeeds=res)
  }

  PostComment(o:any){

     var AddFedback= {

      descriptionFeedback: o.descriptionFeedback,
      dateFeedback :  this.date,
      emailFeedback:  o.emailFeedback,
      phoneFeedback:  o.phoneFeedback,
      nameFeedback:o.nameFeedback,
    }

    this.feed.addFedback(AddFedback).subscribe(()=> {

        this.form=false;
        window.location.reload()
    });


  }
}
