import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BlogComments} from '../interface/blog-comments'
import { BlogComponent } from '../blog/blog.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<BlogComments[]> {
    return this.http.get<BlogComments[]>(`https://626fc2eff7d739495bdbd882.mockapi.io/api/comments/blog_comments`);
    // this.blogComments.pipe(map(x => console.log(x)));
  }

 

  public postComment(comment: BlogComments):Observable<BlogComments>{
    return this.http.post<BlogComments>(`https://626fc2eff7d739495bdbd882.mockapi.io/api/comments/blog_comments`, comment)
  }

  public deleteComment(id1: string):Observable<any>{
    return this.http.delete<string>(`https://626fc2eff7d739495bdbd882.mockapi.io/api/comments/blog_comments/${id1}`)
  }

  public putComment(id1: string, comment:BlogComments):Observable<BlogComments>{debugger;
    return this.http.put<BlogComments>(`https://626fc2eff7d739495bdbd882.mockapi.io/api/comments/blog_comments/${id1}`, comment)
  }

}


// https://www.youtube.com/watch?v=k8qDGBFPfXk&ab_channel=GetArrays