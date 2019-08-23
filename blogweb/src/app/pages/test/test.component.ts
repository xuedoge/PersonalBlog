import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article/article.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor(private articleService: ArticleService, private message: NzMessageService, private router: Router) { }

  ngOnInit() {
  }
  getTitle(msg: string) {
    //console.log(msg);
    //this.articleTitle = msg;
  }
  onClickPut() {
    console.log(this.articleService.newArticle.title);
    console.log(this.articleService.newArticle.classID);
    console.log(this.articleService.newArticle.content);
    this.articleService.addArticle();
    this.message.create('success', '新建成功');
    this.router.navigateByUrl("main");
  }
}
