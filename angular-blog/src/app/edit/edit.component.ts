import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPost();
    this.route.params.subscribe(() => this.getPost());
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(id);
  }

  @HostListener('window:beforeunload')
  savePost(): void {
    var oldPost = this.blogService.getPost(this.post.postid);
    oldPost.title = this.post.title;
    oldPost.body = this.post.body;
    this.blogService.updatePost(oldPost);
  }

  deletePost(): void {
    this.blogService.deletePost(this.post.postid);
    delete this.post;
    this.router.navigate(['/']);
  }

}
