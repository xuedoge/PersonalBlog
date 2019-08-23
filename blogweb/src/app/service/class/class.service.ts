import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/beans/classes';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private serviceUrl = 'http://127.0.0.1:8080/classes';
  classList: Classes[];

  constructor(private httpClient: HttpClient) { }

  getClasses(): Observable<Classes[]> {
    return this.httpClient.get<Classes[]>(this.serviceUrl + '/show');
  }
  addClass(className: string): void {
    this.httpClient.post<string>(this.serviceUrl + '/addclass', className).subscribe();
  }
}
