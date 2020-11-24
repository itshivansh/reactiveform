import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url='http://localhost:3000/blog'
  constructor(private htpp:HttpClient) { }
  // Implement addBlog method using HttpClient for a saving a Blog details
  addBlog(blog): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.htpp.post(this.url,blog,httpOptions);
  }

}
