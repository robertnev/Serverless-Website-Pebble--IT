import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  @Input() blog;

  constructor() { }

  ngOnInit() {
  }

  doBack() {
    location.reload();

  }

}
