import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  title : string;
  content : string;
  loveIts: number;
  created_at: Date

  constructor( title : string , content: string ) { 
     this.title = title;
     this.content = content;
     this.loveIts = 0;
     this.created_at = new Date ();

   }
   love_post(){
     this.loveIts++;
   }
   dont_love(){
    this.loveIts--;
  }
   getLoveIts(){
    return this.getLoveIts;
   }

   getCreated_at(){
    return this.created_at;
   }

   getTitle(){
    return this.title;
   }
   getContent(){
     return this.content;
   }

}
