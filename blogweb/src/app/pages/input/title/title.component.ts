import { Component, Output, EventEmitter } from '@angular/core';
import { ArticleService } from 'src/app/service/article/article.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['/title.component.css']
})
export class TitleComponent {
  title: string;
  @Output() outer = new EventEmitter<string>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    //this.outer.emit(this.title);
  }
  onClickTitle() {
    this.articleService.newArticle.title = this.title;
  }
}
