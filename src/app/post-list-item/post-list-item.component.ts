import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input ()  postTitle : string;
  @Input ()  postContent : string;
  @Input ()  postDate : string;
  @Input ()  love : number;
  @Input ()  post : PostService; 
  constructor() { }

  ngOnInit() {
  }

  getcolor(){
     if(this.love > 0){
       return 'green'
     }
     else if (this.love <0){
       return '#a9444'
     }
  }
}
