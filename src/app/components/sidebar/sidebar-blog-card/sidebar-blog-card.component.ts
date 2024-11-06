import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/model/blogPost';

@Component({
  selector: 'sidebar-blog-card',
  templateUrl: './sidebar-blog-card.component.html',
  styleUrls: ['./sidebar-blog-card.component.scss'],
})
export class SidebarBlogCardComponent {
  @Input() post = new BlogPost();

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
