import { Component, OnInit } from '@angular/core';
import {listArticles} from '../article/article.list';
import { Article} from '../article/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  listArticles: Article[];
  constructor() {
    this.listArticles=listArticles.map(article=>new Article(article));
   }

  ngOnInit() {
  }

}
