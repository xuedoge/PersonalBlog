import { Component, Output, EventEmitter } from '@angular/core';
import { ArticleService } from 'src/app/service/article/article.service';
import { CommentService } from 'src/app/service/comment/comment.service';
import { Comments } from 'src/app/beans/comments';

@Component({
  selector: 'app-newcomment',
  templateUrl: './newcomment.component.html'
})
export class NewcommentComponent {
  isVisible = false;
  isOkLoading = false;
  userName: string;
  content: string;
  @Output() private outer = new EventEmitter<number>();

  constructor(private articleService: ArticleService, private commmentService: CommentService) {
  }

  updateComment() {
    this.outer.next(this.articleService.thisArticleID);
  }

  newComment = new Comments();
  showModal(): void {
    this.isVisible = true;
    this.userName = '';
    this.content = '';
  }

  handleOk(): void {
    this.isOkLoading = true;


    // console.log(this.articleService.thisArticleID);
    // console.log(this.userName);
    // console.log(this.content);
    this.newComment.userName = this.userName;
    this.newComment.content = this.content;
    this.newComment.articleID = this.articleService.thisArticleID;

    //console.log(this.newComment);
    this.commmentService.addComment(this.newComment);
    setTimeout(() => {
      this.updateComment();
    }, 50);
    this.isVisible = false;
    this.isOkLoading = false;

    this.updateComment();



  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
