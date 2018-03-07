import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Parser, HtmlRenderer } from 'commonmark';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  post: Post;
  title: String;
  body: String;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPost();

    //var reader = new commonmark.Parser();
    //var writer = new commonmark.HtmlRenderer();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(id);
    this.title = this.post.title;
    this.body = this.post.body;
  }


}
