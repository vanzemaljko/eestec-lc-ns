import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/model/blogPost';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe((data) => {
      this.blogPosts = this.blogService.convertDataToPosts(data);
    });
  }

}
