import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../service/blog.service';
import {Location} from '@angular/common';
import {Blog} from '../entity/blog';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit, OnDestroy {

  blog: Blog;
  subscriptions: { params? } = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
  ) {

  }

  ngOnInit() {
    this.subscriptions.params = this.activatedRoute.params.subscribe(params => {
      this.blog = this.blogService.getBlogWithId(params.blogId);
    });
  }

  ngOnDestroy(): void {
    for (const [key, value] of Object.entries(this.subscriptions)) {
      value.unsubscribe();
    }
  }

  doBack() {
    this.location.back();
  }
}
