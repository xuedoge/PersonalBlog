import { Component } from '@angular/core';
import { addDays, distanceInWords } from 'date-fns';
import { CommentService } from 'src/app/service/comment/comment.service';
import { ArticleService } from 'src/app/service/article/article.service';
import { Comments } from 'src/app/beans/comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  commentList: Comments[];

  constructor(private commentService: CommentService,
    private articleService: ArticleService) { }

  clickComment(articleID: number): void {
    this.commentService.getCommentList(articleID).subscribe(data => {
      this.commentList = data;
      console.log(this.commentList);
      // console.log(this.article);
      // console.log(this.articles);
    });
  }
}
