import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  @Input() blog;

  @Output ()  onOpenDownloadPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doBack() {
    location.reload();

  }

  openDownloadPage(blog){
    console.log("this is working");
    this.onOpenDownloadPage.emit(blog);
  }


}
