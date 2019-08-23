import { Component } from '@angular/core';
import { ArticleService } from 'src/app/service/article/article.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  inputValue: string;
  constructor(private articleService: ArticleService) {

  }
  onClickText() {
    this.articleService.newArticle.content = this.inputValue;
  }
}
