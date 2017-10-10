import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormService {

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    // Pretend to send username and password via POST request
    // Pretend we got back response from server
    // Instead make GET request to 'https://jsonplaceholder.typicode.com/users/1'
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
