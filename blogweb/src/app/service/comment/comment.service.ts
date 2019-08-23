import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comments } from 'src/app/beans/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private serviceUrl = 'http://127.0.0.1:8080/comments/';

  constructor(private httpClient: HttpClient) { }

  getCommentList(articleID: number): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(this.serviceUrl + 'show/' + articleID);
  }
  addComment(newComment: Comments): void {

    this.httpClient.post<Comments>(this.serviceUrl + '/addcomment', newComment).subscribe();

  }

}
