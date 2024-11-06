import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/model/blogPost';

@Component({
  selector: 'blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss'],
})
export class BlogPostCardComponent implements OnInit {
  @Input() post = new BlogPost();

  constructor(private router: Router) {}

  ngOnInit(): void {}

}
