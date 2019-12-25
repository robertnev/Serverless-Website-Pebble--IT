import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  content;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://serverlesspebbleit.s3-website-ap-southeast-2.amazonaws.com/content.json")
    .subscribe( (value) => {
      this.content = value;
      console.log(JSON.stringify(this.content));
    }, (error: any) => {}, () => {});

  }

}
