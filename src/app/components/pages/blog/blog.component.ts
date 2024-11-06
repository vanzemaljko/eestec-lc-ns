import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/blogPost';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  ITEMS_PER_PAGE = 10;

  posts: BlogPost[] = [];
  displayPosts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  loading = true;

  maxPages = 1;
  currentPage = 0;
  text: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe((data) => {
      this.posts = this.blogService.convertDataToPosts(data);
      this.filteredPosts = this.posts;

      this.maxPages = Math.floor(this.posts.length / this.ITEMS_PER_PAGE) + 1;
      if (this.posts.length % this.ITEMS_PER_PAGE == 0) {
        this.maxPages = this.maxPages - 1;
      }

      this.refreshDisplayedItems();

      this.loading = false;
    });
  }

  nextPage() {
    if (this.currentPage + 1 <= this.maxPages) {
      this.currentPage = this.currentPage + 1;
      this.refreshDisplayedItems();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  prevPage() {
    if (this.currentPage - 1 >= 0) {
      this.currentPage = this.currentPage - 1;
      this.refreshDisplayedItems();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  refreshDisplayedItems() {
    this.displayPosts = this.filteredPosts.slice(
      this.ITEMS_PER_PAGE * this.currentPage,
      this.ITEMS_PER_PAGE * (this.currentPage + 1)
    );

    this.maxPages =
      Math.floor(this.filteredPosts.length / this.ITEMS_PER_PAGE) + 1;
    if (this.filteredPosts.length % this.ITEMS_PER_PAGE == 0) {
      this.maxPages = this.maxPages - 1;
    }
  }

  performSearch() {
    this.search();
  }

  performSearchKey(event: any) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  search() {
    this.loading = true;
    let searchText = this.text.toLowerCase().replace(/ /g, '').trim();

    this.filteredPosts = [];

    for (let post of this.posts) {
      let postText = post.title;

      if (post.tags != undefined) {
        for (let tag of post.tags) {
          postText = postText + tag;
        }
      }

      postText = postText.toLowerCase().replace(/ /g, '').trim();

      if (postText.includes(searchText)) {
        this.filteredPosts.push(post);
      }
    }

    this.currentPage = 0;
    this.refreshDisplayedItems();
    this.text = '';
    this.loading = false;
  }
}
