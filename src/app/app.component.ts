import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serverless-pebble-it';
  page = 'article-list';
  blog;
  // test;

  constructor() {

  }

  handleOpeningSingleArticle(_blog) {
    this.blog = _blog;
    this.page = 'single-article';
  }

  handleOpeningDownloadPage(_blog) {
    this.blog = _blog;
    this.page = 'download';
  }
  




}
