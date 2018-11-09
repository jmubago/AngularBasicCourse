import { Component, OnInit } from '@angular/core';

import * as _ from "lodash";

import { DataService } from '../data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  postId: number;
  postComments: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }
  
  public postDetailId(p){
    this.postId = p;
    this.fetchPostData();
  }

  private fetchPostData(){
    this.data.getComment(this.postId).subscribe(
      data => {this.postComments = data;
      }
    );
  }
}