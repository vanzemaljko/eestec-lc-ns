import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/blogPost';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input() post: BlogPost = new BlogPost();

  ngOnInit(): void {
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
