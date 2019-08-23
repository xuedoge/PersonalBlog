import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from 'src/app/beans/articles';
const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private serviceUrl = 'http://127.0.0.1:8080/articles';

  thisArticleID: number;//记录目前显示的是哪个文章的内容。
  thisArticleTitle: string;
  newArticle = new Articles;//用来新建blog

  constructor(private httpClient: HttpClient) { }

  getArticleList(classID: number): Observable<Articles[]> {
    // const params = new HttpParams({
    //   fromString: 'classID=' + classID
    // });
    // const findhttpOptions = {
    //   headers: new HttpHeaders({ 'content-Type': 'application/json' }),
    //   params
    // };
    return this.httpClient.get<Articles[]>(this.serviceUrl + '/show/' + classID);
  }
  getArticle(articleID: number): Observable<Articles> {
    return this.httpClient.get<Articles>(this.serviceUrl + '/showan/' + articleID);
  }
  addArticle(): void {
    this.httpClient.post<Articles>(this.serviceUrl + '/addarticle', this.newArticle).subscribe();
  }
}
