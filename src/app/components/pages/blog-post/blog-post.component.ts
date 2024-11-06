import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/app/model/blogPost';
import { BlogService } from 'src/app/services/blog.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  post: BlogPost = new BlogPost();

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.blogService.getPostById(id).subscribe(
        (data) => {
          this.post = this.blogService.convertDataToPost(data);
          this.title.setTitle(this.post.title + ' - EESTEC LC Novi Sad');
        },
        (err) => {
          this.router.navigate(['404']);
        }
      );
    });
  }

  returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
