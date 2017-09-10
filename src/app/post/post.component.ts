import { Component,OnInit } from '@angular/core';
import {PostService} from '../service/post/post.service';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  posts = [];
  constructor(private postService:PostService) {}

  ngOnInit(){
     this.postService.getPosts().subscribe(res=>{
       this.posts=res;
     },
     err=>{
       console.log(err);
     }
   );
  }

}
