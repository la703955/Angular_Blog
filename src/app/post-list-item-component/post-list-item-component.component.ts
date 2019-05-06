import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { resolve } from 'q';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() {

  }

  ngOnInit() {
    this.post.date= new Date()
  }

  onLike(){
    this.post.loveits++;
    console.log(this.post.loveits);
   }

   onDislike(){
    this.post.loveits--;
    console.log(this.post.loveits);
   }

   verifLike(){
     if (this.post.loveits<0){
       return false;
     }
     
     if (this.post.loveits>0){
       return true;
     }
   }
}
