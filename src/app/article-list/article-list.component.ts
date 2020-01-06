import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  content;

  
  @Output ()  onOpenSingleArticle = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("https://serverlesspebbleit.s3-ap-southeast-2.amazonaws.com/content.json")
    .subscribe( (value) => {
      this.content = value;
      console.log(JSON.stringify(this.content));
    }, (error: any) => {}, () => {});

  }

  openSingleArticle(blog) {
    this.onOpenSingleArticle.emit(blog);
  }

  displayTruncatedContent(content: string) {
    if (content && content.length > 300) {
      return content.substring(0,295) + ' ...';
    }

    return content;
  }

}
