import { Component } from '@angular/core';
import { ClassService } from 'src/app/service/class/class.service';
import { Classes } from 'src/app/beans/classes';
import { ArticleService } from 'src/app/service/article/article.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['/classes.component.css']
})
export class ClassesComponent {
  items: number[] = [];
  classList: Classes[] = [];
  classID: number = 2;
  constructor(private classService: ClassService,
    private articleService: ArticleService) { }
  ngOnInit(): void {
    this.items[0] = 0;
    this.items[1] = 1;
    this.classService.getClasses().subscribe(data => {
      this.classList = data;
      this.classService.classList = data;
    });
  }
  onClickClass() {
    this.articleService.newArticle.classID = this.classID;
  }
}
