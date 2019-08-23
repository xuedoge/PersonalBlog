import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from 'src/app/service/article/article.service';
import { Articles } from 'src/app/beans/articles';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  content: string;
  article = new Articles();
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    //this.getArticle();

  }
  getArticle(): void {
    this.articleService.getArticle(this.articleService.thisArticleID).subscribe(data => {
      this.article = data;
      //console.log(this.article);
      // console.log(this.article);
      // console.log(this.articles);
    });
  }

  clickArticle(articleID: number): void {
    this.articleService.thisArticleID = articleID;
    console.log(this.articleService.thisArticleID);
    this.getArticle();
    //this.articleService.thisArticleTitle = this.article.title;
  }
}
