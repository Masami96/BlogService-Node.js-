import { Injectable } from '@angular/core';

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}

@Injectable()
export class BlogService {

  private posts: Post[] = [];

  constructor() {
    this.fetchPosts();
  }

  fetchPosts(): void {
    if (typeof(Storage) !== "undefined") {
      if(localStorage.getItem("posts") != null){
        this.posts = JSON.parse(localStorage.getItem("posts"));
        this.fixDates();

        if(this.posts.length != 0) console.log("Found posts in local storage.");
        else console.log("No found posts in local storage. Ready to add new posts.");

      } else {
        this.posts = [];
        console.log("No found posts in local storage. Ready to add new posts.");
      }
    } else {
      console.log("ERROR: Browser does not support Web Storage");
    }
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post {
    for(let post of this.posts){
      if(post.postid == id){
        return post;
      }
    }
  }

  newPost(): Post {
    var newpost = new Post();
    newpost.postid = this.getNextId();
    newpost.created = new Date((new Date()).getTime() + 24*60*60*1000);
    newpost.modified = new Date((new Date()).getTime() + 24*60*60*1000);
    newpost.title = "";
    newpost.body = "";

    this.posts.push(newpost);
    localStorage.setItem("posts", JSON.stringify(this.posts));

    return newpost;
  }

  updatePost(post: Post): void {
    var found = false;
    for(var i = 0; i < this.posts.length; i++){
      if(this.posts[i].postid == post.postid){
        post.modified = new Date((new Date()).getTime() + 24*60*60*1000);
        post.created = this.posts[i].created;
        this.posts[i] = post;
        found = true;
      }
    }

    if(found == false) console.log("Error: Failed to update post. No such postid. Nothing was done.");

    localStorage.setItem("posts", JSON.stringify(this.posts));
  }

  deletePost(id: number): void {
    var found = false;
    for(var i = 0; i < this.posts.length; i++){
      if(this.posts[i].postid == id){
        this.posts.splice(i, 1);
        found = true;
      }
    }

    if(found == false) console.log("Error: Failed to delete post. No such postid. Nothing was done.");

    localStorage.setItem("posts", JSON.stringify(this.posts));
  }
  
  getNextId(): number {
    var max = 0;
    for(let post of this.posts){
      if(post.postid >= max) max = post.postid + 1;
    }
    return max;
  }

  fixDates(): void {
    for(let post of this.posts){
      if(typeof post.created === "string"){
        post.created = new Date(post.created);
      }
      if(typeof post.modified === "string"){
        post.modified = new Date(post.modified);
      }
    }
  }

}
