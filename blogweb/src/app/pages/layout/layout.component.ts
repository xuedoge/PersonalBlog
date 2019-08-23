import { Component } from '@angular/core';
import { Hero } from 'src/app/beans/heroes';
import { Classes } from 'src/app/beans/classes';
import { ClassService } from 'src/app/service/class/class.service';
import { ArticleService } from 'src/app/service/article/article.service';
import { Articles } from 'src/app/beans/articles';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isCollapsed = false;

  HEROES: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' }
  ];
  class: Classes[];
  article: Articles[];
  articles: Articles[][] = [];
  articleHeader = new Articles();
  articleID: number;
  classIdx: number = 0;
  articleIdx: number = 0;

  len = 0;
  constructor(private classService: ClassService,
    private articleService: ArticleService) {
    this.articleHeader.title = 'WELCOME';
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.showClasses();
  }

  showClasses(): void {
    this.classService.getClasses().subscribe(data => {
      this.class = data;
      this.classService.classList = data;
      for (this.classIdx = 0, this.len = this.class.length; this.classIdx < this.len; this.classIdx++) {
        //console.log(this.class[this.classIdx].classID);
        this.showArticles(this.class[this.classIdx].classID, this.classIdx);
      }
    });

  }
  showArticles(classID: number, classIdx: number): void {
    this.articleService.getArticleList(classID).subscribe(data => {
      this.article = data;
      this.articles[classIdx] = this.article;
      // console.log(classIdx);
      // console.log(this.article);
      // console.log(this.articles);
    });
  }
  clickUpTitle() {
    this.articleService.getArticle(this.articleService.thisArticleID).subscribe(data => {
      this.articleHeader = data;
      console.log(this.articleHeader);
      // console.log(this.article);
      // console.log(this.articles);
    });
  }


}
