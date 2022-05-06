import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoBListService } from 'src/app/_services/jo-blist.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  id: any;
  blog: any;
  constructor(private route: ActivatedRoute,private feed:JoBListService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id=  params.id ;
    });
    this.getFeedback();
  }
  getFeedback(){
    this.feed.findBlogByID(this.id).subscribe(res=>this.blog=res)
  }
}
