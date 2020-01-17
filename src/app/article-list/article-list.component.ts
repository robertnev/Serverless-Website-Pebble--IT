import {Component, OnInit, OnDestroy, EventEmitter, Output, Input} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../entity/blog';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  @Input() descriptionMaxLength: number;
  @Input() descriptionSuffix: string;

  blogs: Blog[] = [];
  subscriptions: { blogs? } = {};

  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.descriptionMaxLength = this.descriptionMaxLength || 100;
    this.descriptionSuffix = this.descriptionSuffix || ' ...';
    this.subscriptions.blogs = this.blogService.getBlogs$().subscribe(newBlogs => this.blogs = newBlogs || []);
  }

  ngOnDestroy(): void {
    for (const [key, value] of Object.entries(this.subscriptions)) {
      value.unsubscribe();
    }
  }

  displayTruncatedContent(content: string) {
    if (content && content.length > this.descriptionMaxLength) {
      const textLength = this.descriptionMaxLength - this.descriptionSuffix.length;
      return content.substring(0, textLength) + this.descriptionSuffix;
    }

    return content;
  }

}
