import { Component } from '@angular/core';
import {Article} from './article/article.model';
import {listArticles} from './article/article.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listArticles:Article[];
  constructor(){
      
  }
}
